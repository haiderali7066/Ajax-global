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
    {/* Heading */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="text-center mb-20"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary block mb-4">
        Our Journey
      </span>

      <h2
        className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 leading-tight"
        style={{ letterSpacing: "-0.02em" }}
      >
        Milestones that{" "}
        <strong className="text-primary font-semibold">
          shaped AJAX Global
        </strong>
      </h2>

      <p className="mt-5 text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
        From early operations to scaling global support teams, every milestone
        reflects growth, innovation, and operational excellence.
      </p>
    </motion.div>

    {/* Timeline */}
    <div className="relative max-w-4xl mx-auto">
      {/* Static Line */}
      <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gray-100 hidden md:block" />

      {/* Animated Progress Line */}
      <motion.div
        className="absolute left-8 top-0 bottom-0 w-[2px] bg-primary hidden md:block origin-top"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.3,
        }}
      />

      {/* Items */}
      <div className="space-y-10">
        {MILESTONES.map(({ year, event, Icon }, i) => (
          <motion.div
            key={year}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: i * 0.12,
              ease: [0.22, 1, 0.36, 1],
              duration: 0.6,
            }}
            whileHover={{ x: 6 }}
            className="relative flex gap-6 md:gap-8 items-start z-10 group"
          >
            {/* Icon Circle */}
            <div
              className="
                relative z-20
                w-16 h-16
                rounded-full
                bg-white
                border-2 border-primary/20
                flex items-center justify-center
                flex-shrink-0
                ring-8 ring-white
                shadow-md
                transition-all duration-300
                group-hover:border-primary/40
                group-hover:shadow-lg
              "
            >
              {/* Soft inner background */}
              <div className="absolute inset-1 rounded-full bg-primary/5" />

              <Icon className="relative z-10 w-6 h-6 text-primary" />
            </div>

            {/* Content Card */}
            <div
              className="
                flex-1
                bg-white
                border border-gray-100
                rounded-3xl
                p-6 sm:p-7
                shadow-sm
                transition-all duration-300
                group-hover:border-primary/15
                group-hover:shadow-md
              "
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-[2px] bg-primary/20 rounded-full" />

                <h3 className="text-2xl sm:text-3xl font-black text-primary leading-none">
                  {year}
                </h3>
              </div>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-light">
                {event}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}
