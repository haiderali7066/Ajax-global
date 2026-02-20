"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";
import { vFadeLeft, vFadeUp, vStagger } from "./shared";

export default function BuiltForInnovators() {
  const wrap = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });
  const [exp, setExp] = useState<number | null>(0);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrap.current) return;
    const r = wrap.current.getBoundingClientRect();
    wrap.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    wrap.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);

  const items = [
    { title: "Shape your process", desc: "Customise dashboards and workflows to elevate each engineer's experience whether they use Scrum or Kanban." },
    { title: "Track your progress", desc: "Comprehensive visibility into project metrics, team velocity, and sprint performance with real-time analytics." },
    { title: "Align your teams", desc: "Foster collaboration across departments with shared goals, transparent communication, and synchronised workflows." },
  ];

  return (
    <div ref={wrap} onMouseMove={onMove} className="relative py-20 sm:py-32 bg-slate-950 overflow-hidden group rounded-[2rem] mx-4 sm:mx-6 lg:mx-8 my-8">
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)", backgroundSize: "4rem 4rem" }} />
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: "radial-gradient(800px circle at var(--mx,50%) var(--my,50%),rgba(16,185,129,0.08),transparent 40%)" }} />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div variants={vFadeLeft} initial="hidden" animate={iv ? "show" : "hidden"} className="sticky top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6 w-fit border border-emerald-500/20">
              <Sparkles className="w-4 h-4" /><span>For modern teams</span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-white leading-[1.1] tracking-tight">
              Built for
              <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mt-2">innovators</span>
            </h2>
          </motion.div>
          <motion.div variants={vStagger} initial="hidden" animate={iv ? "show" : "hidden"} className="space-y-4">
            {items.map((item, i) => {
              const open = exp === i;
              return (
                <motion.div key={i} variants={vFadeUp} custom={i} className={`rounded-2xl border transition-all duration-500 overflow-hidden backdrop-blur-sm cursor-pointer ${open ? "bg-emerald-400 border-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.3)]" : "bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-600"}`} onClick={() => setExp(open ? null : i)}>
                  <div className="px-7 py-6 flex items-center justify-between">
                    <h3 className={`text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-300 ${open ? "text-slate-900" : "text-slate-200"}`}>{item.title}</h3>
                    <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className={`w-8 h-8 rounded-full flex items-center justify-center ${open ? "bg-slate-900/10 text-slate-900" : "bg-slate-700 text-slate-400"}`}>
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                  <div className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className={`px-7 pb-7 text-base sm:text-lg leading-relaxed ${open ? "text-slate-800" : "text-slate-400"}`}>{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
