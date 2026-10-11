"use client";
import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import { motionStorageKey } from "@/lib/opening-bootstrap";
import * as ui from "@/styles/portfolio";
let memoryOverride: boolean | null = null;
const listeners = new Set<() => void>();
export function readMotionPreference() {
    if (memoryOverride !== null)
        return memoryOverride;
    try {
        const value = localStorage.getItem(motionStorageKey);
        if (value === "reduced" || value === "full")
            return value === "reduced";
    }
    catch { /* The system preference still works with storage disabled. */ }
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
const MotionContext = createContext({ reduced: false, toggle: () => { } });
export function MotionProvider({ children }: {
    children: ReactNode;
}) {
    const reduced = useSyncExternalStore(subscribe, readMotionPreference, () => false);
    function toggle() {
        memoryOverride = !reduced;
        try {
            localStorage.setItem(motionStorageKey, memoryOverride ? "reduced" : "full");
        }
        catch { /* Keep the in-memory preference. */ }
        listeners.forEach((listener) => listener());
    }
    return <MotionContext value={{ reduced, toggle }}><div className={ui.siteShell} data-motion={reduced ? "reduced" : "full"}>{children}</div></MotionContext>;
}
export const useMotion = () => useContext(MotionContext);
