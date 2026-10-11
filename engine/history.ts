import { CONTENT_VERSION, projects } from "../content/portfolio";

export type Perspective = "design" | "engineering";
export type JourneyAction =
  | { type: "project"; slug: string }
  | { type: "milestone"; id: "origin" | "present" | "future" }
  | { type: "perspective"; value: Perspective };
export type JourneyEvent = { id: string; branchId: string; sequence: number; sceneTime: number; action: JourneyAction };
export type Branch = { id: string; parentId: string | null; forkIndex: number; label: string; eventIds: string[] };
export type Journey = { schemaVersion: 1; contentVersion: string; activeBranchId: string; cursor: number; nextSequence: number; events: JourneyEvent[]; branches: Branch[] };
export type LogicalState = { project: string; milestone: "origin" | "present" | "future"; perspective: Perspective | null };
export const STORAGE_KEY = "time-observatory:journey:v1";
export const MAX_BRANCHES = 20;
export const MAX_EVENTS = 500;

export function createJourney(): Journey {
  return { schemaVersion: 1, contentVersion: CONTENT_VERSION, activeBranchId: "b-0", cursor: 0, nextSequence: 1, events: [], branches: [{ id: "b-0", parentId: null, forkIndex: 0, label: "First path", eventIds: [] }] };
}

export function effectiveHistory(journey: Journey, branchId = journey.activeBranchId): JourneyEvent[] {
  const branch = journey.branches.find((item) => item.id === branchId);
  if (!branch) throw new Error("Unknown journey branch.");
  const inherited = branch.parentId ? effectiveHistory(journey, branch.parentId).slice(0, branch.forkIndex) : [];
  const local = branch.eventIds.map((id) => {
    const event = journey.events.find((item) => item.id === id);
    if (!event) throw new Error("Missing journey event.");
    return event;
  });
  return [...inherited, ...local];
}

export function reconstruct(journey: Journey): LogicalState {
  return effectiveHistory(journey).slice(0, journey.cursor).reduce<LogicalState>((state, event) => {
    switch (event.action.type) {
      case "project": return { project: event.action.slug, milestone: "present", perspective: null };
      case "milestone": return { ...state, milestone: event.action.id };
      case "perspective": return { ...state, perspective: event.action.value };
    }
  }, { project: projects[0].slug, milestone: "present", perspective: null });
}

export function commit(journey: Journey, action: JourneyAction, sceneTime: number): Journey {
  const state = reconstruct(journey);
  if ((action.type === "project" && state.project === action.slug) || (action.type === "milestone" && state.milestone === action.id) || (action.type === "perspective" && state.perspective === action.value)) return journey;
  if (!validAction(action)) throw new Error("This choice is unavailable.");
  if (journey.events.length >= MAX_EVENTS) throw new Error("Your journey has reached 500 choices. Export it or start a fresh journey.");
  const history = effectiveHistory(journey);
  let branchId = journey.activeBranchId;
  let branches = journey.branches;
  if (journey.cursor < history.length) {
    if (branches.length >= MAX_BRANCHES) throw new Error("Your journey has reached 20 paths. Export it or start a fresh journey.");
    branchId = `b-${branches.length}`;
    branches = [...branches, { id: branchId, parentId: journey.activeBranchId, forkIndex: journey.cursor, label: `Path ${branches.length + 1}`, eventIds: [] }];
  }
  const event: JourneyEvent = { id: `e-${journey.nextSequence}`, branchId, sequence: journey.nextSequence, sceneTime: Math.max(0, Math.min(60, Number.isFinite(sceneTime) ? sceneTime : 0)), action };
  const label = action.type === "perspective" ? `${action.value === "design" ? "Design" : "Engineering"} perspective` : undefined;
  const next = { ...journey, activeBranchId: branchId, nextSequence: journey.nextSequence + 1, branches: branches.map((branch) => branch.id === branchId ? { ...branch, label: label ?? branch.label, eventIds: [...branch.eventIds, event.id] } : branch), events: [...journey.events, event] };
  return { ...next, cursor: effectiveHistory(next).length };
}

export function returnToChoice(journey: Journey): Journey {
  const history = effectiveHistory(journey).slice(0, journey.cursor);
  const choice = history.findLastIndex((event) => event.action.type === "perspective");
  return { ...journey, cursor: choice < 0 ? 0 : choice };
}

export function switchBranch(journey: Journey, branchId: string): Journey {
  return { ...journey, activeBranchId: branchId, cursor: effectiveHistory(journey, branchId).length };
}

function isRecord(value: unknown): value is Record<string, unknown> { return typeof value === "object" && value !== null && !Array.isArray(value); }
function validAction(value: unknown): value is JourneyAction {
  if (!isRecord(value)) return false;
  if (value.type === "project") return typeof value.slug === "string" && projects.some((project) => project.slug === value.slug);
  if (value.type === "milestone") return typeof value.id === "string" && ["origin", "present", "future"].includes(value.id);
  if (value.type === "perspective") return value.value === "design" || value.value === "engineering";
  return false;
}

export function deserializeJourney(raw: string): Journey {
  if (raw.length > 200_000) throw new Error("Saved journey is too large. Start a fresh journey.");
  let value: unknown;
  try { value = JSON.parse(raw); } catch { throw new Error("Saved journey could not be read. Start a fresh journey."); }
  const fail = () => { throw new Error("Saved journey is incompatible. Start a fresh journey."); };
  if (!isRecord(value) || value.schemaVersion !== 1 || value.contentVersion !== CONTENT_VERSION || !Array.isArray(value.events) || !Array.isArray(value.branches) || value.branches.length < 1 || value.branches.length > MAX_BRANCHES || value.events.length > MAX_EVENTS) return fail();
  if (typeof value.activeBranchId !== "string" || !Number.isInteger(value.cursor) || !Number.isInteger(value.nextSequence)) return fail();
  for (const event of value.events) {
    if (!isRecord(event) || typeof event.id !== "string" || event.id !== `e-${event.sequence}` || typeof event.branchId !== "string" || !Number.isInteger(event.sequence) || Number(event.sequence) < 1 || typeof event.sceneTime !== "number" || !Number.isFinite(event.sceneTime) || event.sceneTime < 0 || event.sceneTime > 60 || !validAction(event.action)) return fail();
  }
  for (const branch of value.branches) {
    if (!isRecord(branch) || typeof branch.id !== "string" || !/^b-\d+$/.test(branch.id) || !(branch.parentId === null || typeof branch.parentId === "string") || typeof branch.label !== "string" || branch.label.length > 80 || !Number.isInteger(branch.forkIndex) || Number(branch.forkIndex) < 0 || !Array.isArray(branch.eventIds) || branch.eventIds.some((id) => typeof id !== "string")) return fail();
  }
  const journey = value as unknown as Journey;
  if (new Set(journey.events.map((event) => event.id)).size !== journey.events.length || new Set(journey.events.map((event) => event.sequence)).size !== journey.events.length || new Set(journey.branches.map((branch) => branch.id)).size !== journey.branches.length) return fail();
  if (journey.branches[0].parentId !== null || journey.branches[0].forkIndex !== 0 || journey.branches.slice(1).some((branch) => branch.parentId === null)) return fail();
  const assigned: string[] = [];
  for (let i = 0; i < journey.branches.length; i++) {
    const branch = journey.branches[i];
    if (branch.parentId && !journey.branches.slice(0, i).some((parent) => parent.id === branch.parentId)) return fail();
    if (branch.parentId && branch.forkIndex > effectiveHistory(journey, branch.parentId).length) return fail();
    for (const id of branch.eventIds) {
      if (!journey.events.some((event) => event.id === id && event.branchId === branch.id)) return fail();
      assigned.push(id);
    }
    const history = effectiveHistory(journey, branch.id);
    if (history.some((event, index) => index > 0 && event.sequence <= history[index - 1].sequence)) return fail();
  }
  if (assigned.length !== journey.events.length || new Set(assigned).size !== assigned.length || !journey.branches.some((branch) => branch.id === journey.activeBranchId) || journey.cursor < 0 || journey.cursor > effectiveHistory(journey).length || journey.nextSequence <= Math.max(0, ...journey.events.map((event) => event.sequence))) return fail();
  return journey;
}
