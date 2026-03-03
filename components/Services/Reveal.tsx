"use client";

import React from "react";
import { useScrollReveal, useCounter } from "@/hooks/useScrollReveal";

// ─── SCROLL REVEAL WRAPPER ───────────────────────────────────────────────────
type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "fade";
};

export function Reveal({ children, delay = 0, className = "", direction = "up" }: RevealProps) {
  const { ref, visible } = useScrollReveal();
  const transforms: Record<string, string> = {
    up: "translateY(44px)",
    left: "translateX(-44px)",
    right: "translateX(44px)",
    fade: "scale(0.95)",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────
export function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const { ref, visible } = useScrollReveal();
  const count = useCounter(end, visible);
  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
