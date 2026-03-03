"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { TrendingUp, Phone, Briefcase, Home, CheckCircle, ArrowRight } from "lucide-react";
import { fadeUp } from "./shared";

export default function UseCases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  const cases = [
    {
      tab: "Sales", color: "#7c3aed", icon: TrendingUp, title: "Sales Operations",
      sub: "Scale your revenue team without ballooning hiring overhead",
      bullets: [
        "Dedicated SDRs & AEs trained to your exact CRM and process",
        "60-second lead capture rule — no lead left behind",
        "Multi-language coverage across US, UK, AUS, CA markets",
        "Monthly performance reviews with pipeline attribution",
      ],
      metric: "3.2×", metricLabel: "Average pipeline increase",
    },
    {
      tab: "Support", color: "#2563eb", icon: Phone, title: "Customer Support Ops",
      sub: "Round-the-clock support that feels like your in-house team",
      bullets: [
        "Omnichannel: phone, email, chat, WhatsApp, social",
        "Integrated with Zendesk, Freshdesk, Intercom & more",
        "99.2% uptime SLA with backup agents always on standby",
        "Daily QA reviews and weekly CSAT reporting",
      ],
      metric: "98%", metricLabel: "Average CSAT score achieved",
    },
    {
      tab: "Operations", color: "#059669", icon: Briefcase, title: "Back-Office & Operations",
      sub: "Free your core team from administrative burden",
      bullets: [
        "Data entry, reporting, compliance and reconciliation",
        "Scheduling, dispatching and coordination workflows",
        "Vendor management and procurement support",
        "Custom SOP creation and knowledge base management",
      ],
      metric: "40%", metricLabel: "Average cost reduction",
    },
    {
      tab: "Real Estate", color: "#d97706", icon: Home, title: "Property Management",
      sub: "Become the admin backbone of your property portfolio",
      bullets: [
        "Tenant communications, maintenance coordination, rent tracking",
        "AppFolio, Buildium, Yardi and DoorLoop integration",
        "24/7 emergency response line management",
        "Lease renewal campaigns and tenant retention programs",
      ],
      metric: "500+", metricLabel: "Properties managed via AJAX",
    },
  ];
  const c = cases[active];

  return (
    <section className="py-16 sm:py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-12">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            Solutions for every team,{" "}
            <span className="font-extrabold bg-primary text-white px-2 ">powered by people</span>
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="flex gap-2 justify-center mb-10 flex-wrap">
          {cases.map((cas, i) => {
            const Icon = cas.icon;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-5 h-10 rounded-full text-sm font-semibold transition-all duration-200 border ${active === i ? "text-white border-transparent shadow-md" : "text-gray-500 border-gray-200 bg-white hover:border-gray-300"}`}
                style={active === i ? { background: cas.color, boxShadow: `0 4px 16px ${cas.color}30` } : {}}
              >
                <Icon className="w-3.5 h-3.5" /> {cas.tab}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-400 font-light">{c.sub}</p>
              </div>
              <div className="space-y-3">
                {c.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: c.color }} />
                    <span className="text-sm text-gray-600 font-light">{b}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black" style={{ color: c.color }}>{c.metric}</div>
                <div className="text-sm text-gray-400 font-light">{c.metricLabel}</div>
              </div>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.02 }} className="inline-flex items-center gap-2 px-6 h-10 rounded-full font-semibold text-white text-sm" style={{ background: c.color }}>
                  Get Started <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>

            <div className="relative rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-xl" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.09)" }}>
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${c.color}, ${c.color}80)` }} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${c.color}12` }}>
                      {(() => { const Icon = c.icon; return <Icon className="w-4 h-4" style={{ color: c.color }} />; })()}
                    </div>
                    <span className="font-semibold text-gray-800 text-sm">{c.tab} Team Dashboard</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium text-emerald-700 bg-emerald-50">Live</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[["Active Agents","12","↑ from 8"],["Tickets Today","284","vs 240 avg"],["Avg Handle","4m 12s","↓ improved"],["SLA Met","99.3%","Target: 98%"]].map(([label,val,note], i) => (
                    <div key={i} className="p-3 rounded-xl border border-gray-100" style={{ background: "#fafafa" }}>
                      <p className="text-[10px] text-gray-400 mb-0.5">{label}</p>
                      <p className="text-base font-bold text-gray-800">{val}</p>
                      <p className="text-[10px] text-emerald-600 font-medium">{note}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    { msg: "New ticket assigned to Support Lead", ago: "just now" },
                    { msg: "SLA alert resolved — ticket #4821", ago: "2 min ago" },
                    { msg: "Weekly KPI report generated", ago: "5 min ago" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between text-xs py-2 border-t border-gray-50">
                      <span className="text-gray-500">{row.msg}</span>
                      <span className="text-gray-300 shrink-0 ml-3">{row.ago}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
