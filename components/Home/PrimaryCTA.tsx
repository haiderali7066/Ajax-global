"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { C, vFadeUp, vStagger, Mag } from "./shared";

export default function PrimaryCTA() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 sm:py-32 bg-white relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(99,102,241,0.07) 0%,transparent 70%)" }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div variants={vStagger} initial="hidden" animate={iv ? "show" : "hidden"} className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-12">
        <motion.h2 variants={vFadeUp} className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900">
          <span className="text-balance">Build Smarter Operations</span>
          <span className="block text-indigo-600 font-normal">Today</span>
        </motion.h2>
        <motion.p variants={vFadeUp} className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-500 font-normal">
          Join leading organisations scaling with intelligence. Your transformation starts with a single conversation.
        </motion.p>
        <motion.div variants={vFadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Mag>
            <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg font-bold group shadow-lg hover:scale-[1.04] transition-all duration-300" style={{ background: `linear-gradient(135deg,${C.primary},${C.accent})`, color: "#fff", boxShadow: `0 8px 32px rgba(99,102,241,0.30)` }}>
              <Link href="/contact" className="flex items-center gap-2">
                Book a Demo
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight className="w-4 h-4" /></motion.span>
              </Link>
            </Button>
          </Mag>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg font-semibold border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300 bg-white text-slate-900">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
        <motion.div variants={vFadeUp} className="pt-8 border-t border-gray-200">
          <p className="text-sm text-slate-400 font-medium mb-4">Trusted by enterprise teams worldwide</p>
          <div className="flex items-center justify-center gap-6 flex-wrap opacity-40">
            {["Enterprise Co.", "Global Ltd.", "Scale Inc.", "Future Corp."].map((c, i) => (
              <span key={i} className="text-sm font-black text-slate-700 tracking-wide">{c}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
