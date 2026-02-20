"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, CheckCircle } from "lucide-react";
import { C, vFadeUp, vStagger, vPop, Mag } from "./shared";

type Cat = "Operations" | "Intelligence" | "Technology";

export default function InteractiveCategorySection() {
  const ref = useRef<HTMLElement>(null);
  const iv = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });
  const [cat, setCat] = useState<Cat>("Operations");

  const cats: { id: Cat; items: { title: string; desc: string; benefits: string[]; href: string; bg: string; bb: string }[] }[] = [
    {
      id: "Operations",
      items: [
        { title: "Human Outsourcing", desc: "Elite dedicated teams trained to your standards", benefits: ["Expert talent pool", "Rapid scaling", "Performance driven", "99.2% uptime"], href: "/hos", bg: "bg-indigo-500", bb: "bg-indigo-600" },
        { title: "Staffing Solutions", desc: "Flexible workforce management and recruitment", benefits: ["Quick deployment", "Cost efficient", "Quality assurance", "Compliance ready"], href: "/services", bg: "bg-violet-500", bb: "bg-violet-600" },
        { title: "Ops Management", desc: "Streamlined operational excellence", benefits: ["Process optimisation", "Workflow efficiency", "Resource allocation", "KPI tracking"], href: "/services", bg: "bg-pink-500", bb: "bg-pink-600" },
        { title: "Talent Acquisition", desc: "Strategic hiring and team building", benefits: ["Top talent matching", "Culture fit focus", "Fast onboarding", "Retention support"], href: "/services", bg: "bg-rose-500", bb: "bg-rose-600" },
      ],
    },
    {
      id: "Intelligence",
      items: [
        { title: "IntelliDesq Platform", desc: "AI-powered operational intelligence", benefits: ["Predictive analytics", "Real-time insights", "Automated decisions", "Data-driven"], href: "/intellidesq", bg: "bg-sky-500", bb: "bg-sky-600" },
        { title: "Advanced Analytics", desc: "Deep insights from your operational data", benefits: ["Performance metrics", "Trend analysis", "Forecasting", "Custom reports"], href: "/intellidesq", bg: "bg-blue-500", bb: "bg-blue-600" },
        { title: "Intelligent Automation", desc: "Smart automation that learns and adapts", benefits: ["Process automation", "Error reduction", "Time saving", "Cost reduction"], href: "/intellidesq", bg: "bg-cyan-600", bb: "bg-cyan-700" },
        { title: "Smart Reporting", desc: "Automated insights and dashboards", benefits: ["Real-time updates", "Custom dashboards", "Scheduled reports", "Exec summaries"], href: "/intellidesq", bg: "bg-teal-500", bb: "bg-teal-600" },
      ],
    },
    {
      id: "Technology",
      items: [
        { title: "Cloud Infrastructure", desc: "Secure and scalable cloud solutions", benefits: ["High availability", "Global coverage", "Auto-scaling", "Disaster recovery"], href: "/services", bg: "bg-emerald-500", bb: "bg-emerald-600" },
        { title: "IT Services", desc: "Comprehensive technical support", benefits: ["24/7 support", "System maintenance", "Updates & patches", "Tech consulting"], href: "/services", bg: "bg-green-600", bb: "bg-green-700" },
        { title: "Infrastructure Solutions", desc: "Enterprise-grade infra management", benefits: ["Network optimisation", "DB management", "Load balancing", "Perf tuning"], href: "/services", bg: "bg-amber-500", bb: "bg-amber-600" },
        { title: "Cybersecurity", desc: "Advanced security and compliance", benefits: ["Data protection", "Threat detection", "Compliance", "Access control"], href: "/services", bg: "bg-red-500", bb: "bg-red-600" },
      ],
    },
  ];
  const active = cats.find((c) => c.id === cat)!;

  useEffect(() => {
    let ctx: any;
    (async () => {
      try {
        const g = await import("gsap");
        ctx = g.gsap.context(() => {
          g.gsap.fromTo(".cat-card", { opacity: 0, y: 40, scale: 0.93 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out", stagger: 0.08 });
        }, ref);
      } catch (_) {}
    })();
    return () => ctx?.revert();
  }, [cat]);

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-200 rounded-full blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={vFadeUp} initial="hidden" animate={iv ? "show" : "hidden"} className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 mb-4">
            Discover the <span className="font-extrabold text-indigo-600">AJAX Global</span> Advantage
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Hover over cards to reveal key benefits. Explore our full suite across Operations, Intelligence, and Technology.</p>
        </motion.div>
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {cats.map((c) => (
            <button key={c.id} onClick={() => setCat(c.id)} className="relative px-7 py-3 text-base font-bold transition-all duration-300 rounded-full border-2 overflow-hidden" style={{ background: cat === c.id ? C.primary : "#fff", borderColor: cat === c.id ? C.primary : C.border, color: cat === c.id ? "#fff" : C.fg, boxShadow: cat === c.id ? `0 6px 22px rgba(99,102,241,0.30)` : "none", transform: cat === c.id ? "scale(1.06)" : "scale(1)" }}>
              {c.id}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {active.items.map((item, i) => (
            <div key={item.title + i} className="cat-card group h-64 [perspective:1000px]">
              <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className={`absolute inset-0 ${item.bg} rounded-2xl p-7 flex flex-col justify-between [backface-visibility:hidden] shadow-lg`}>
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><Layers className="w-5 h-5 text-white" /></div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-snug mb-1">{item.title}</h3>
                    <p className="text-white/70 text-xs">{item.desc}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-white/60 text-[11px] font-bold">HOVER TO EXPLORE <ArrowRight className="w-3 h-3" /></div>
                  </div>
                </div>
                <div className={`absolute inset-0 ${item.bb} rounded-2xl p-7 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-2xl`}>
                  <div>
                    <h4 className="text-white font-bold text-xs mb-3 opacity-70 uppercase tracking-wider">Key Benefits</h4>
                    <ul className="space-y-1.5">
                      {item.benefits.map((b, j) => <li key={j} className="text-white text-sm flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-white/60 shrink-0" />{b}</li>)}
                    </ul>
                  </div>
                  <Link href={item.href} className="inline-flex items-center gap-2 text-white font-bold text-sm hover:gap-3 transition-all duration-300 group/l">Learn More <ArrowRight className="w-3.5 h-3.5 group-hover/l:translate-x-1 transition-transform" /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <motion.div variants={vFadeUp} initial="hidden" animate={iv ? "show" : "hidden"} className="text-center">
          <h3 className="text-2xl sm:text-3xl font-light text-slate-900 mb-6">Ready to Experience the AJAX Global Difference?</h3>
          <Mag>
            <Button asChild size="lg" className="rounded-full px-8 h-14 text-base font-bold group hover:scale-[1.05] transition-all duration-300 shadow-lg" style={{ background: `linear-gradient(135deg,${C.primary},${C.accent})`, color: "#fff", boxShadow: `0 8px 30px rgba(99,102,241,0.30)` }}>
              <Link href="/contact" className="flex items-center gap-2">
                Get Started Today
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.4, repeat: Infinity }}><ArrowRight className="w-4 h-4" /></motion.span>
              </Link>
            </Button>
          </Mag>
        </motion.div>
      </div>
    </section>
  );
}
