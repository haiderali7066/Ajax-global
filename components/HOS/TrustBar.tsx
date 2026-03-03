"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "./shared";

export function TrustBar() {
  const items = [
    "24/7 Coverage",
    "Dedicated Account Manager",
    "7-Day Go-Live",
    "99.2% Uptime SLA",
    "NDAs Included",
    "Backup Resources Ready",
    "AI-Assisted Workflows",
    "Multilingual Teams",
  ];
  return (
    <div className="border-y border-gray-100 py-3 overflow-hidden bg-primary/80" >
      <div className="flex gap-10 whitespace-nowrap" style={{ animation: "idMarquee 32s linear infinite" }}>
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-xs font-semibold text-white flex items-center gap-2.5 shrink-0">
            <span className="w-1 h-1 rounded-full bg-violet-300" />
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes idMarquee{from{transform:translateX(0)}to{transform:translateX(-33.33%)}}`}</style>
    </div>
  );
}

export function LogoBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <section className="py-12 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center text-sm text-gray-600 font-light mb-8"
        >
          Trusted by 150+ companies across 6 countries
        </motion.p>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {["SaaS Co.","HomeServ","RealtyCo","TechFirm","eShop+","GlobalOps"].map((logo, i) => (
            <motion.div
              key={logo}
              variants={fadeIn}
              custom={i}
              className="text-gray-400 font-bold text-lg tracking-tight hover:text-gray-400 transition-colors cursor-default select-none"
            >
              {logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
