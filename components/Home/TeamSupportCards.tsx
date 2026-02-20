"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Settings, BarChart3, Headphones, Rocket } from "lucide-react";
import { vFadeUp } from "./shared";

export default function TeamSupportCards() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  const cards = [
    { title: "Security & Control", sub: "Security and control built into daily operations", desc: "People, systems, and data stay protected as your business scales.", bg: "from-purple-100/80 to-purple-50", tc: "text-purple-900", ic: "text-purple-600", Icon: Shield },
    { title: "Operations & Back Office", sub: "Operations that run quietly in the background", desc: "The work gets done, systems stay organised, nothing falls through.", bg: "from-amber-100/80 to-amber-50", tc: "text-amber-900", ic: "text-amber-600", Icon: Settings },
    { title: "Leadership Visibility", sub: "Leadership visibility across the entire business", desc: "Know what to act on without digging through noise.", bg: "from-orange-100/80 to-orange-50", tc: "text-orange-900", ic: "text-orange-600", Icon: BarChart3 },
    { title: "Customer Support", sub: "Support that doesn't collapse as you grow", desc: "Always-on teams, intelligent automation, clear processes.", bg: "from-blue-100/80 to-blue-50", tc: "text-blue-900", ic: "text-blue-600", Icon: Headphones },
    { title: "Sales Execution", sub: "Sales execution without missing opportunities", desc: "From first touch to follow-up, every step handled and moved forward.", bg: "from-pink-100/80 to-pink-50", tc: "text-pink-900", ic: "text-pink-600", Icon: Rocket },
  ];
  const doubled = [...cards, ...cards];

  return (
    <section className="py-20 sm:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-14" ref={ref}>
        <motion.h2 variants={vFadeUp} initial="hidden" animate={iv ? "show" : "hidden"} className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 text-center">
          Built to support <span className="font-extrabold text-indigo-600">every team</span>
        </motion.h2>
      </div>
      <div className="relative w-full">
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex w-max" style={{ animation: "ajaxTrain 38s linear infinite" }}>
          <div className="flex gap-5 px-3">
            {doubled.map((c, i) => (
              <div key={i} className={`flex-shrink-0 w-[300px] sm:w-[360px] bg-gradient-to-br ${c.bg} border border-white/40 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer`}>
                <div className={`${c.tc} h-full flex flex-col`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl bg-white/60 shadow-sm ${c.ic}`}><c.Icon strokeWidth={2.5} className="w-4 h-4" /></div>
                    <span className="text-xs font-black uppercase opacity-70 tracking-wide">{c.title}</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold leading-tight mb-3 group-hover:opacity-80 transition-opacity">{c.sub}</h4>
                  <p className="text-sm leading-relaxed opacity-70 mt-auto">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes ajaxTrain{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </section>
  );
}
