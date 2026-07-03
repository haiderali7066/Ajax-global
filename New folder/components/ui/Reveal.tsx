"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

export function Reveal({ children, className }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface CounterProps {
  value: number;
  duration?: number;
}

export function Counter({ value, duration = 2 }: CounterProps) {
  const safeValue = Number(value) || 0; // ensure number
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!safeValue || isNaN(safeValue)) {
      setCount(0);
      return;
    }

    let start = 0;
    const totalFrames = duration * 60;
    const increment = safeValue / totalFrames;

    const interval = setInterval(() => {
      start += increment;

      if (start >= safeValue) {
        setCount(safeValue);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [safeValue, duration]);

  return <span>{count.toLocaleString()}</span>;
}