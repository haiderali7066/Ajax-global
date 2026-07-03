"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Headphones, Rocket, Megaphone, Settings, Shield } from "lucide-react";
import { vFadeUp } from "./shared";

export default function TeamSupportCards() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  const cards = [
    {
      title: "Customer Support",
      sub: "Customer support that doesn't collapse as you grow",
      desc: "Always-on teams, intelligent automation, and clear processes—so customers get answers, not excuses.",
      bg: "from-blue-200 to-blue-100",
      tc: "text-slate-800",
      ic: "text-blue-400",
      Icon: Headphones,
    },
    {
      title: "Sales Execution",
      sub: "Sales execution without missed opportunities",
      desc: "From first touch to follow-up, every lead is handled, tracked, and moved forward—systematically.",
      bg: "from-rose-200 to-rose-100",
      tc: "text-slate-800",
      ic: "text-rose-400",
      Icon: Rocket,
    },
    {
      title: "Marketing Execution",
      sub: "Marketing that moves fast without losing alignment",
      desc: "Campaigns, content, and execution stay connected—no silos, no last-minute chaos.",
      bg: "from-violet-200 to-violet-100",
      tc: "text-slate-800",
      ic: "text-violet-400",
      Icon: Megaphone,
    },
    {
      title: "Operations & Back Office",
      sub: "Operations that run quietly in the background",
      desc: "The work gets done, systems stay organized, and nothing falls through the cracks.",
      bg: "from-amber-200 to-amber-100",
      tc: "text-slate-800",
      ic: "text-amber-400",
      Icon: Settings,
    },
    {
      title: "Security & Control",
      sub: "Security and control built into daily operations",
      desc: "People, systems, and data stay protected as your business scales—without slowing teams down.",
      bg: "from-emerald-200 to-emerald-100",
      tc: "text-slate-800",
      ic: "text-emerald-400",
      Icon: Shield,
    },
  ];

  const doubled = [...cards, ...cards];

  return (
    <section className=" py-8 mb-5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16" ref={ref}>
        <motion.h2
          variants={vFadeUp}
          initial="hidden"
          animate={iv ? "show" : "hidden"}
          className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 text-center"
        >
          Built to support <span className="font-extrabold text-indigo-600">every team</span>
        </motion.h2>
      </div>

      <div className="relative w-full">
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex w-max"
          style={{ animation: "ajaxTrain 60s linear infinite" }}
        >
          <div className="flex gap-6 px-4">
            {doubled.map((c, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-[320px] sm:w-[380px] bg-gradient-to-br ${c.bg} border border-slate-100 rounded-3xl p-10`}
              >
                <div className={`${c.tc} h-full flex flex-col`}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`${c.ic}`}>
                      <c.Icon strokeWidth={1.5} className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
                      {c.title}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold leading-snug mb-4 text-slate-800">
                    {c.sub}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-400 mt-auto font-light">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes ajaxTrain { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </section>
  );
}