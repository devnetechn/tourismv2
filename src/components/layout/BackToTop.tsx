"use client";

import { ArrowUp } from "lucide-react";
import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

export function BackToTop() {
  const visible = useSyncExternalStore(
    subscribe,
    () => window.scrollY > window.innerHeight * 1.5,
    () => false,
  );

  return (
    <button
      type="button"
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        document.getElementById("main")?.focus({ preventScroll: true });
      }}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed bottom-5 right-5 z-30 inline-flex size-12 items-center justify-center bg-ocean text-shell shadow-[0_8px_24px_-12px_rgba(7,31,42,0.6)] transition-[opacity,transform] duration-300 hover:bg-tide ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp aria-hidden="true" className="size-5" />
      <span className="sr-only">Back to top</span>
    </button>
  );
}
