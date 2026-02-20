"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, BarChart3, Zap, CheckCircle2, Code2 } from "lucide-react";
import { vFadeUp, vFadeRight } from "./shared";

export default function TeamImpact() {
  const secRef = useRef<HTMLElement>(null);
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    let ctx: any;
    (async () => {
      try {
        const g = await import("gsap");
        const { ScrollTrigger: ST } = await import("gsap/ScrollTrigger");
        g.gsap.registerPlugin(ST);
        ctx = g.gsap.context(() => {
          g.gsap.fromTo(".impact-item", { opacity: 0, x: -45 }, { opacity: 1, x: 0, duration: 0.58, ease: "power3.out", stagger: 0.11, scrollTrigger: { trigger: secRef.current, start: "top 65%" } });
        }, secRef);
      } catch (_) {}
    })();
    return () => ctx?.revert();
  }, []);

  const features = [
    { Icon: TrendingUp, title: "Predict Risk Early", color: "text-yellow-400" },
    { Icon: BarChart3, title: "Boost Sales Velocity", color: "text-blue-400" },
    { Icon: Zap, title: "Scale Marketing Output", color: "text-cyan-400" },
    { Icon: CheckCircle2, title: "Resolve Tickets Faster", color: "text-purple-400" },
    { Icon: Code2, title: "Drive Quality Sprints", color: "text-green-400" },
  ];

  return (
    <section ref={secRef} className="py-20 sm:py-32 bg-black relative overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full blur-md opacity-70" style={{ background: "linear-gradient(to br,#facc15,#ec4899,#a855f7)" }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div variants={vFadeUp} initial="hidden" animate={iv ? "show" : "hidden"} className="text-center space-y-3 mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
            <span className="block">Your teams' impact.</span>
            <span className="block">Multiplied by <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">AI.</span></span>
          </h2>
          <p className="text-slate-400 text-lg">Learn more about AJAX Global AI offering</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={i} className="impact-item flex items-center gap-4 group cursor-pointer" style={{ opacity: 0, transition: "transform .3s" }} onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateX(8px)")} onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateX(0)")}>
                <f.Icon className={`${f.color} w-6 h-6 shrink-0`} />
                <span className="text-xl sm:text-2xl font-light text-white group-hover:text-slate-200 transition-colors">{f.title}</span>
              </div>
            ))}
          </div>
          <motion.div variants={vFadeRight} initial="hidden" animate={iv ? "show" : "hidden"}>
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-xs uppercase tracking-widest">AJAX WORK MANAGEMENT</span>
                  <span className="text-slate-500 text-xs">2025 Q4</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[{ label: "Risk analyzer", color: "text-blue-400", bdr: "hover:border-blue-500" }, { label: "Spot project risks", color: "text-rose-400", bdr: "hover:border-red-500" }, { label: "AI risk insights", color: "text-purple-400", bdr: "hover:border-purple-500", full: true }, { label: "AI risk mitigation", color: "text-pink-400", bdr: "hover:border-pink-500" }].map((item, i) => (
                    <div key={i} className={`bg-slate-800 rounded-lg p-4 border border-slate-700 ${item.bdr} transition-colors duration-300 ${(item as any).full ? "col-span-2" : ""}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-2 h-2 rounded-full ${item.color.replace("text-", "bg-")}`} />
                        <span className={`text-xs font-semibold ${item.color}`}>{item.label}</span>
                      </div>
                      <div className={`h-2 rounded-full ${item.color.replace("text-", "bg-")} opacity-30`} style={{ width: `${55 + i * 12}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
