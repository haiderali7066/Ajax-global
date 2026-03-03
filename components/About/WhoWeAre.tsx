"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { fadeUp, slideLeft, stagger, scaleIn } from "./about.variants";

const STATS = [
  { label: "Countries",         value: "15+",    desc: "Global presence"        },
  { label: "Enterprise Clients",value: "500+",   desc: "Across all verticals"   },
  { label: "Team Members",      value: "2,000+", desc: "Deployed globally"      },
  { label: "Managed Ops",       value: "$1B+",   desc: "In operations handled"  },
];

const CHECKLIST = [
  "Global presence: USA, Canada, Australia, UAE",
  "24/7 operational capability",
  "Long-term partnerships, not short-term contracts",
  "Industry-trained professionals in every role",
];

export default function WhoWeAre() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary block mb-4">
            Who We Are
          </span>
          <h2
            className="text-[clamp(2.2rem,5vw,4rem)] font-light text-gray-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Your global{" "}
            <span className="font-extrabold text-primary">outsourcing &amp;</span>
            <br />
            <span className="font-extrabold text-gray-900">automation partner</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy + checklist */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-8"
          >
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p className="text-base">
                AJAX Global delivers high-performance remote teams and advanced AI solutions to
                businesses across multiple industries — specializing in BPO, customer experience,
                sales, admin support, and AI-powered workflow automation.
              </p>
              <p className="text-base">
                Unlike traditional outsourcing, we integrate{" "}
                <span className="font-semibold text-gray-800">
                  human specialists with intelligent automation
                </span>{" "}
                to create efficient, scalable, future-ready systems.
              </p>
            </div>

            <div className="space-y-3">
              {CHECKLIST.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.09 }}
                  className="flex items-center gap-3 group cursor-default"
                  whileHover={{ x: 4 }}
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-600">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 h-11 rounded-full font-semibold text-white text-sm bg-primary shadow-lg shadow-primary/30"
              >
                Partner With Us <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Stat cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-primary/5 border border-primary/10 rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">{stat.label}</div>
                <div className="text-[10px] text-gray-400">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
