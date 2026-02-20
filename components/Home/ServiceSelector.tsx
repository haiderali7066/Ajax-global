"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { C, vFadeUp, vStagger, vPop, Mag, Count } from "./shared";

export default function ServiceSelector() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });
  const [sel, setSel] = useState(0);

  const services = [
    { id: "intellidesq", short: "AI INTELLIGENT", label: "INTELLIDESQ™", href: "/intellidesq", headline: "Lead with clear foresight.", body: "Keep strategic goals on track with AI risk flagging and cross-org data to make real-time decisions.", stat: { v: 10, s: "×", l: "Faster Decisions" }, color: C.primary },
    { id: "hos", short: "HUMAN OUTSOURCING", label: "HOS", href: "/hos", headline: "Elite teams. Zero friction.", body: "Purpose-built human teams, fully trained, performing from day one — guaranteed.", stat: { v: 2000, s: "+", l: "Professionals Deployed" }, color: "#10b981" },
    { id: "msp", short: "MANAGED SERVICES", label: "MSP", href: "/services", headline: "IT you can actually rely on.", body: "Managed IT, cloud and cybersecurity that let your team focus on what matters most.", stat: { v: 99, s: "%", l: "Uptime Guaranteed" }, color: C.amber },
    { id: "it", short: "MANAGED IT", label: "MANAGED IT", href: "/services", headline: "24/7 infrastructure coverage.", body: "Proactive IT management, monitoring, and support — keeping systems running perfectly.", stat: { v: 24, s: "/7", l: "IT Coverage" }, color: C.cyan },
    { id: "cloud", short: "CLOUD SOLUTIONS", label: "CLOUD", href: "/services", headline: "Scale without limits.", body: "Enterprise-grade cloud infrastructure designed for availability, security, and speed.", stat: { v: 100, s: "%", l: "Cloud Uptime" }, color: "#3b82f6" },
    { id: "cyber", short: "CYBERSECURITY", label: "CYBER", href: "/services", headline: "Locked down, always on.", body: "24/7 threat monitoring, endpoint protection and compliance — enterprise-grade, startup-friendly.", stat: { v: 100, s: "+", l: "Threats Blocked Daily" }, color: C.rose },
  ];
  const s = services[sel];

  return (
    <section className="py-16 sm:py-24 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 variants={vFadeUp} initial="hidden" animate={iv ? "show" : "hidden"} className="text-3xl sm:text-5xl md:text-6xl font-light text-center text-slate-900 mb-14">
          Where would you like to <span className="font-extrabold text-indigo-600">start</span>
        </motion.h2>
        <motion.div variants={vStagger} initial="hidden" animate={iv ? "show" : "hidden"} className="flex flex-wrap justify-center gap-3 mb-14">
          {services.map((sv, i) => (
            <motion.button key={sv.id} variants={vPop} custom={i} onClick={() => setSel(i)} className="px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 border-2" style={{ background: sel === i ? sv.color : "#fff", borderColor: sel === i ? sv.color : "#e2e8f0", color: sel === i ? "#fff" : C.fg, boxShadow: sel === i ? `0 6px 22px ${sv.color}44` : "none", transform: sel === i ? "scale(1.06)" : "scale(1)" }}>
              <span className="block text-[9px] font-black opacity-60 leading-none mb-0.5">{sv.short}</span>
              {sv.label}
            </motion.button>
          ))}
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div key={sel} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -22 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl text-white p-9 sm:p-12 relative overflow-hidden shadow-xl" style={{ background: `linear-gradient(135deg,${s.color},${s.color}bb)` }}>
              <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.7) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
              <motion.div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,0.12)", filter: "blur(40px)" }} animate={{ scale: [1, 1.18, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
              <div className="relative z-10 space-y-6">
                <p className="text-white/50 text-xs font-black tracking-[.22em] uppercase">{s.short}</p>
                <h3 className="text-3xl sm:text-4xl font-bold leading-tight">{s.headline}</h3>
                <p className="text-white/85 text-lg leading-relaxed">{s.body}</p>
                <div>
                  <div className="text-3xl font-black"><Count to={s.stat.v} suf={s.stat.s} /></div>
                  <div className="text-white/55 text-xs font-semibold mt-0.5">{s.stat.l}</div>
                </div>
                <Mag>
                  <Button asChild size="lg" className="bg-white font-bold rounded-full px-7 h-12 hover:scale-[1.03] transition-all duration-300 group mt-2" style={{ color: s.color }}>
                    <Link href={s.href} className="flex items-center gap-2">Talk to an Expert<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
                  </Button>
                </Mag>
              </div>
            </div>
            <div className="space-y-7">
              <div className="inline-block bg-white border border-slate-200 rounded-xl px-6 py-3 shadow-sm">
                <p className="text-sm font-black text-slate-700 tracking-widest">HOLT · CAT</p>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">$4M saved with optimised processes</h3>
              <p className="text-lg text-slate-600 leading-relaxed">"AjaxGlobal gives us the visibility to get everyone on the same page and track all the moving parts of our projects."</p>
              <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
              <Link href="/services" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all duration-300 group">
                Learn more about our solutions<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
