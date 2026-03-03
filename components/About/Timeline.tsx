"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Globe, Star, Zap } from "lucide-react";
import { fadeUp } from "./about.variants";

const MILESTONES = [
  { year: "2018", event: "AJAX Global founded with a vision to combine human excellence with AI.",                                     Icon: Star  },
  { year: "2020", event: "Expanded to 5 countries, serving 100+ enterprise clients across 3 continents.",                             Icon: Globe },
  { year: "2022", event: "Launched IntelliDesq™ — our revolutionary AI-powered operational intelligence platform.",                   Icon: Zap   },
  { year: "2024", event: "Reached unicorn status with $1M+ in managed operations and 250+ team members.",                          Icon: Award },
];

export default function Timeline() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 sm:py-32 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary block mb-4">Our Journey</span>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            Milestones that <strong className="text-primary">shaped AJAX Global</strong>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto space-y-8">
          {/* Static track */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gray-100 hidden md:block" />
          {/* Animated progress line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-[2px] bg-primary hidden md:block origin-top"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          />

          {MILESTONES.map(({ year, event, Icon }, i) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.12, ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
              className="flex gap-8 items-start relative z-10"
              whileHover={{ x: 6 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/5 border-2 border-primary/30 flex items-center justify-center flex-shrink-0 shadow-md">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-black mb-1 text-primary">{year}</h3>
                <p className="text-gray-500 text-base leading-relaxed">{event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
