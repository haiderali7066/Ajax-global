"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Target, TrendingUp, Globe } from "lucide-react";
import { vFadeUp, vPop } from "./shared";

export default function WhyAjaxGlobal() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });

  const vals = [
    { Icon: Zap, title: "Engineered Human Performance", desc: "Rigorous training ensures your teams deliver excellence every single day.", color: "bg-indigo-50 text-indigo-600" },
    { Icon: Target, title: "Intelligence-Led Operations", desc: "Data-driven insights and AI-powered intelligence guide every decision.", color: "bg-violet-50 text-violet-600" },
    { Icon: TrendingUp, title: "Scalable Teams", desc: "Grow from startup to enterprise — our flexible model scales with your ambitions.", color: "bg-emerald-50 text-emerald-600" },
    { Icon: Globe, title: "Global Delivery Model", desc: "Access elite talent worldwide with 24/7 support and seamless timezone coverage.", color: "bg-sky-50 text-sky-600" },
  ];

  return (
    <section className="py-20 sm:py-32 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={vFadeUp} initial="hidden" animate={iv ? "show" : "hidden"} className="text-center space-y-3 mb-14">
          <h2 className="text-3xl sm:text-5xl font-light text-slate-900">
            Why <span className="font-extrabold text-indigo-600">AJAX Global</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">Engineered for excellence, built for scale</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {vals.map((v, i) => (
            <motion.div key={i} variants={vPop} custom={i} initial="hidden" animate={iv ? "show" : "hidden"} className="group rounded-2xl p-7 bg-white border border-slate-300 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 overflow-hidden relative" whileHover={{ y: -6 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-4">
                <div className={`inline-flex p-3 rounded-xl ${v.color} group-hover:scale-110 transition-transform duration-300`}><v.Icon className="w-5 h-5" /></div>
                <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-indigo-300/40 group-hover:bg-indigo-400 scale-0 group-hover:scale-100 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
