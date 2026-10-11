"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";

const key = "time-observatory:motion";
let memoryOverride: boolean | null = null;
const listeners = new Set<() => void>();

function snapshot() {
  if (memoryOverride !== null) return memoryOverride;
  try {
    const value = localStorage.getItem(key);
    if (value === "reduced" || value === "full") return value === "reduced";
  } catch { /* The system preference still works with storage disabled. */ }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    media.removeEventListener("change", callback);
    window.removeEventListener("storage", callback);
  };
}

const MotionContext = createContext({ reduced: false, toggle: () => {} });

export function MotionProvider({ children }: { children: ReactNode }) {
  const reduced = useSyncExternalStore(subscribe, snapshot, () => false);
  function toggle() {
    memoryOverride = !reduced;
    try { localStorage.setItem(key, memoryOverride ? "reduced" : "full"); } catch { /* Keep the in-memory preference. */ }
    listeners.forEach((listener) => listener());
  }
  return <MotionContext value={{ reduced, toggle }}><div className="site-shell" data-motion={reduced ? "reduced" : "full"}>{children}</div></MotionContext>;
}

export const useMotion = () => useContext(MotionContext);
