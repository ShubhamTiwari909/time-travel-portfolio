export const openingSessionKey = "time-observatory:opening:v1";
export const motionStorageKey = "time-observatory:motion";

declare global {
  interface Window {
    __timeObservatoryOpening?: { expired: boolean; release: () => void };
  }
}

// Runs during HTML parsing, before React or the first portfolio paint.
// Only fixed application constants are interpolated into this script.
export const openingBootstrapScript = `(() => {
  let seen = false;
  let preference = null;
  try { seen = sessionStorage.getItem(${JSON.stringify(openingSessionKey)}) === "seen"; } catch {}
  try { preference = localStorage.getItem(${JSON.stringify(motionStorageKey)}); } catch {}
  const reduced = preference === "reduced" || (preference !== "full" && matchMedia("(prefers-reduced-motion: reduce)").matches);
  if (seen || reduced || typeof HTMLDialogElement === "undefined" || !HTMLDialogElement.prototype.showModal) return;
  const root = document.documentElement;
  root.setAttribute("data-opening", "pending");
  const state = { expired: false, release };
  window.__timeObservatoryOpening = state;
  const timer = setTimeout(() => { state.expired = true; release(); }, 4500);
  function release() {
    clearTimeout(timer);
    root.removeAttribute("data-opening");
    document.removeEventListener("click", skip);
    document.removeEventListener("keydown", skip);
  }
  function skip(event) {
    if (event.type === "keydown" ? event.key !== "Escape" : !(event.target instanceof Element && event.target.closest("[data-skip-opening]"))) return;
    event.preventDefault();
    state.expired = true;
    try { sessionStorage.setItem(${JSON.stringify(openingSessionKey)}, "seen"); } catch {}
    release();
  }
  document.addEventListener("click", skip);
  document.addEventListener("keydown", skip);
})();`;
