/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS compiles the actual TypeScript modules in memory. */
const test = require('node:test');
const assert = require('node:assert/strict');
const ts = require('typescript');
const fs = require('node:fs');
// Compile the actual TypeScript modules in memory; no extra test dependency or output files.
require.extensions['.ts'] = (module, filename) => {
  const source = fs.readFileSync(filename, 'utf8');
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } });
  module._compile(compiled.outputText, filename);
};
const { advanceClock, clampTime, orbitPoint } = require('../engine/clock.ts');
const { curvePath, pointAt, period } = require('../math/lissajous.ts');
const { createJourney, commit, reconstruct, effectiveHistory, returnToChoice, switchBranch, deserializeJourney, MAX_BRANCHES, MAX_EVENTS } = require('../engine/history.ts');

function deepFreeze(object) { Object.freeze(object); for (const value of Object.values(object)) if (value && typeof value === 'object') deepFreeze(value); return object; }

test('clock clamps at both ends and reports boundaries in either direction', () => {
  assert.deepEqual(advanceClock(59, 3, 1), { time: 60, atBoundary: true });
  assert.deepEqual(advanceClock(1, 3, -1), { time: 0, atBoundary: true });
  assert.equal(advanceClock(30, -5, 1).time, 30);
  assert.equal(clampTime(Infinity), 0);
  assert.equal(clampTime(-10), 0);
});

test('playback starts from either endpoint when the first frame has no elapsed time', () => {
  for (const rate of [.5, 1, 2]) {
    assert.deepEqual(advanceClock(0, 0, rate), { time: 0, atBoundary: false });
    assert.ok(advanceClock(0, .016, rate).time > 0);
    assert.deepEqual(advanceClock(60, 0, -rate), { time: 60, atBoundary: false });
    assert.ok(advanceClock(60, .016, -rate).time < 60);
  }
  assert.deepEqual(advanceClock(0, 0, -1), { time: 0, atBoundary: true });
  assert.deepEqual(advanceClock(60, 0, 1), { time: 60, atBoundary: true });
});

test('analytical scene evaluation returns to the same point after seeking elsewhere', () => {
  const first = orbitPoint(5); orbitPoint(12); assert.deepEqual(orbitPoint(5), first);
  const signature = { a: 2, b: 3, phase: Math.PI / 2 };
  const start = pointAt(0, signature); const end = pointAt(period(2, 3), signature);
  assert.ok(Math.abs(start.x - end.x) < 1e-10 && Math.abs(start.y - end.y) < 1e-10);
  assert.equal(curvePath(signature), curvePath(signature));
  assert.equal(period(2, 4), Math.PI);
  assert.throws(() => period(0, 3), RangeError);
});

test('clock result is stable across different frame cadences', () => {
  let frequent = 5;
  for (let i = 0; i < 100; i++) frequent = advanceClock(frequent, .1, 1).time;
  assert.ok(Math.abs(frequent - advanceClock(5, 10, 1).time) < 1e-10);
});

test('rewinding and choosing differently preserves the original future and excludes it from the fork', () => {
  let original = commit(createJourney(), { type: 'perspective', value: 'design' }, 30);
  original = commit(original, { type: 'milestone', id: 'future' }, 55);
  const before = JSON.stringify(original);
  deepFreeze(original);
  const rewound = returnToChoice(original);
  assert.equal(reconstruct(rewound).perspective, null);
  assert.equal(reconstruct(rewound).milestone, 'present');
  const forked = commit(rewound, { type: 'perspective', value: 'engineering' }, 15);
  assert.equal(forked.branches.length, 2);
  assert.equal(reconstruct(forked).perspective, 'engineering');
  assert.equal(reconstruct(forked).milestone, 'present');
  assert.equal(effectiveHistory(forked).length, 1);
  assert.equal(JSON.stringify(original), before);
  assert.deepEqual(reconstruct(switchBranch(forked, 'b-0')), reconstruct(original));
});

test('repeating a choice does not create a duplicate event or branch', () => {
  const journey = commit(createJourney(), { type: 'perspective', value: 'design' }, 10);
  assert.equal(commit(journey, { type: 'perspective', value: 'design' }, 20), journey);
});

test('a nested branch reconstructs only its exact inherited prefix', () => {
  let journey = commit(createJourney(), { type: 'project', slug: 'payload-cms' }, 5);
  journey = commit(journey, { type: 'perspective', value: 'design' }, 10);
  journey = commit(returnToChoice(journey), { type: 'perspective', value: 'engineering' }, 15);
  journey = commit(journey, { type: 'milestone', id: 'future' }, 20);
  journey = commit({ ...journey, cursor: 2 }, { type: 'milestone', id: 'origin' }, 0);
  assert.deepEqual(reconstruct(journey), { project: 'payload-cms', milestone: 'origin', perspective: 'engineering' });
  assert.deepEqual(deserializeJourney(JSON.stringify(journey)), journey);
  assert.deepEqual(reconstruct(deserializeJourney(JSON.stringify(journey))), reconstruct(journey));
});

test('storage validation rejects corruption, cycles, unknown content, and invalid actions', () => {
  const valid = commit(createJourney(), { type: 'perspective', value: 'design' }, 30);
  const invalid = [
    { ...valid, schemaVersion: 2 }, { ...valid, contentVersion: 'old' }, { ...valid, cursor: 99 },
    { ...valid, branches: [{ ...valid.branches[0], parentId: 'b-0' }] },
    { ...valid, events: [{ ...valid.events[0], action: { type: 'milestone', id: ['origin'] } }] },
    { ...valid, events: [{ ...valid.events[0], action: { type: 'project', slug: 'missing' } }] },
    { ...valid, events: [{ ...valid.events[0], sceneTime: -1 }] },
    { ...valid, branches: [{ ...valid.branches[0], eventIds: [] }] },
    { ...valid, nextSequence: 1 },
  ];
  invalid.forEach((journey) => assert.throws(() => deserializeJourney(JSON.stringify(journey))));
  assert.throws(() => deserializeJourney('{broken'));
  assert.throws(() => deserializeJourney(' '.repeat(200001)));
});

test('branch and event limits fail explicitly without dropping existing history', () => {
  let journey = commit(createJourney(), { type: 'perspective', value: 'design' }, 30);
  for (let i = 1; i < MAX_BRANCHES; i++) journey = commit({ ...journey, activeBranchId: 'b-0', cursor: 0 }, { type: 'perspective', value: 'engineering' }, 30);
  const before = JSON.stringify(journey);
  assert.throws(() => commit({ ...journey, cursor: 0 }, { type: 'perspective', value: 'design' }, 30), /20 paths/);
  assert.equal(JSON.stringify(journey), before);
  let events = createJourney();
  for (let i = 0; i < MAX_EVENTS; i++) events = commit(events, { type: 'milestone', id: i % 2 ? 'present' : 'origin' }, 30);
  assert.throws(() => commit(events, { type: 'milestone', id: 'future' }, 60), /500 choices/);
  assert.equal(events.events.length, MAX_EVENTS);
});
