"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { vFadeUp, vStagger, Mag } from "./shared";

export default function AIPlatformCTA() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="relative bg-black rounded-3xl overflow-hidden py-20 sm:py-32">
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{ background: "linear-gradient(135deg,#06b6d4,#6366f1,#ec4899)", opacity: 0.75, WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", padding: "2px" }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-[2px] bg-black rounded-3xl pointer-events-none" />
        <motion.div ref={ref} variants={vStagger} initial="hidden" animate={iv ? "show" : "hidden"} className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.div variants={vFadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />The AI work platform
          </motion.div>
          <motion.h2 variants={vFadeUp} className="text-4xl sm:text-5xl md:text-6xl font-light text-white">
            The AI work platform your team will{" "}
            <span className="font-extrabold text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#06b6d4,#6366f1,#ec4899)" }}>love to use</span>
          </motion.h2>
          <motion.div variants={vFadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Mag>
              <Button asChild size="lg" className="bg-white hover:bg-slate-100 text-black rounded-full px-10 h-14 text-lg font-bold shadow-xl hover:scale-105 transition-all duration-300 group">
                <Link href="/contact" className="flex items-center gap-2">GET STARTED <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
            </Mag>
            <Button asChild size="lg" className="bg-white hover:bg-slate-100 text-black rounded-full px-10 h-14 text-lg font-bold transition-all duration-300 hover:scale-105">
              <Link href="/contact">CONTACT SALES</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
