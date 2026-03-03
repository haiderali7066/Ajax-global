"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Users, Zap, Globe, Shield } from "lucide-react";
import { fadeUp, slideLeft, slideRight } from "./shared";

export default function WhatIsHOS() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 sm:py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-14">
          <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-light text-gray-900 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Get more work done with{" "}
            <span className="font-extrabold text-primary">human talent</span>
            <br />
            that's woven into your work
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: UI mockup */}
          <motion.div variants={slideLeft} initial="hidden" animate={inView ? "show" : "hidden"} className="relative">
            <div
              className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-xl"
              style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)" }}
            >
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between" style={{ background: "#f9f9fb" }}>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center">
                    <Users className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Your Extended Team</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <motion.div className="w-1.5 h-1.5 rounded-full bg-emerald-500" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                  <span className="text-xs text-emerald-600 font-medium">Live</span>
                </div>
              </div>
              <div className="p-5 space-y-2.5">
                {[
                  { role: "Customer Support Lead", dept: "Support", status: "active", initials: "CS", color: "#6d28d9", time: "09:42 AM" },
                  { role: "Sales Specialist", dept: "Revenue", status: "active", initials: "SS", color: "#2563eb", time: "09:38 AM" },
                  { role: "Virtual Assistant", dept: "Operations", status: "active", initials: "VA", color: "#059669", time: "09:30 AM" },
                  { role: "Property Manager", dept: "Real Estate", status: "idle", initials: "PM", color: "#d97706", time: "09:15 AM" },
                ].map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-default"
                  >
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: m.color }}>
                      {m.initials}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800">{m.role}</p>
                      <p className="text-xs text-gray-400 font-light">{m.dept}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400 font-light">{m.time}</p>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full mt-0.5 inline-block ${m.status === "active" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                        {m.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100 mt-3">
                  {[["33","Active Now"],["99.2%","Uptime"],["< 60s","Response"]].map(([v,l], i) => (
                    <div key={i} className="text-center py-3 rounded-xl" style={{ background: "#f5f3ff" }}>
                      <div className="text-sm font-bold text-indigo-700">{v}</div>
                      <div className="text-[9px] text-gray-400 mt-0.5">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <motion.div
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl border border-gray-200 shadow-lg p-4"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">NDA Protected</p>
                  <p className="text-[10px] text-gray-400">Every engagement</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: copy */}
          <motion.div variants={slideRight} initial="hidden" animate={inView ? "show" : "hidden"} className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-3" style={{ letterSpacing: "-0.01em" }}>
                What is <strong>HOS?</strong>
              </h3>
              <p className="text-base text-gray-500 font-light leading-relaxed">
                Human Outsourcing Solutions go beyond traditional outsourcing. We design, train, and manage high-performing teams that integrate directly into your operations. Your success becomes our success.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Users, title: "People-First Approach", desc: "We select, train & nurture talent that truly cares about your brand.", color: "#7c3aed" },
                { icon: Zap, title: "Process-Driven Execution", desc: "Structured workflows and KPI alignment deliver consistent outcomes.", color: "#2563eb" },
                { icon: Globe, title: "Scalable Global Delivery", desc: "Grow your teams anywhere, anytime — without overhead headaches.", color: "#059669" },
              ].map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-start gap-4 cursor-default"
                    whileHover={{ x: 4 }}
                  >
                    <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${p.color}12`, border: `1.5px solid ${p.color}20` }}>
                      <Icon className="w-4 h-4" style={{ color: p.color }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">{p.title}</h4>
                      <p className="text-sm text-gray-400 font-light">{p.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 px-6 h-11 rounded-full font-semibold text-white text-sm bg-primary shadow-2xl shadow-indigo-400">
                Explore HOS Services <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
