"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

export const C = {
  primary: "#6366f1",
  accent: "#8b5cf6",
  fg: "#0f172a",
  muted: "#64748b",
  border: "#e2e8f0",
  bg: "#ffffff",
  bgSecond: "#f8fafc",
  dark: "#020617",
  black: "#000000",
  emerald: "#065f46",
  rose: "#f43f5e",
  amber: "#f59e0b",
  cyan: "#06b6d4",
};

export const vFadeUp = {
  hidden: { opacity: 0, y: 48 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};
export const vFadeLeft = {
  hidden: { opacity: 0, x: -52 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
  },
};
export const vFadeRight = {
  hidden: { opacity: 0, x: 52 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
  },
};
export const vStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
export const vPop = {
  hidden: { opacity: 0, scale: 0.84 },
  show: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.34, 1.56, 0.64, 1],
      delay: i * 0.07,
    },
  }),
};

export function Mag({ children, s = 0.32 }: { children: React.ReactNode; s?: number }) {
  const r = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 20 });
  const sy = useSpring(my, { stiffness: 220, damping: 20 });
  const mv = (e: React.MouseEvent) => {
    if (!r.current) return;
    const b = r.current.getBoundingClientRect();
    mx.set((e.clientX - b.left - b.width / 2) * s);
    my.set((e.clientY - b.top - b.height / 2) * s);
  };
  return (
    <motion.div
      ref={r}
      onMouseMove={mv}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{ x: sx, y: sy }}
    >
      {children}
    </motion.div>
  );
}

export function Count({ to, suf = "" }: { to: number; suf?: string }) {
  const r = useRef<HTMLSpanElement>(null);
  const iv = useInView(r, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!iv) return;
    let s = 0;
    const step = to / (1800 / 16);
    const t = setInterval(() => {
      s = Math.min(s + step, to);
      setN(Math.round(s));
      if (s >= to) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [iv, to]);
  return <span ref={r}>{n}{suf}</span>;
}
