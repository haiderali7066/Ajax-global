"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Globe, Mail, Phone } from "lucide-react";
import { fadeUp, stagger, scaleIn } from "./contact.variants";

const CARDS = [
  {
    Icon:        Mail,
    title:       "Business Email",
    value:       "hello@ajaxglobal.com",
    description: "Fast, reliable responses for all inquiries",
    accent:      "#7c3aed",
  },
  {
    Icon:        Phone,
    title:       "Business Phone",
    value:       "+1 (555) 123-4567",
    description: "Speak directly with a strategy consultant",
    accent:      "#059669",
  },
  {
    Icon:        Clock,
    title:       "Operating Hours",
    value:       "24/7 Global Support",
    description: "We never sleep — neither does your growth",
    accent:      "#0ea5e9",
  },
  {
    Icon:        Globe,
    title:       "Countries Served",
    value:       "USA · Canada · AU · UAE",
    description: "International presence, local expertise",
    accent:      "#d97706",
  },
];

export default function QuickContact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="pt-6 pb-0" style={{ background: "#f8f7ff" }} ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold uppercase tracking-[.22em] text-primary block mb-3">
            Global Reach. Local Expertise.
          </span>
          <h2
            className="text-[clamp(1.8rem,4vw,3rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Reach us <span className="font-extrabold text-gray-900">anytime,</span>{" "}
            <span className="font-light text-gray-400">anywhere.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {CARDS.map(({ Icon, title, value, description, accent }, i) => (
            <motion.div
              key={title}
              variants={scaleIn}
              custom={i}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative bg-white p-7 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 text-center cursor-default overflow-hidden"
            >
              {/* Top accent on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: accent }}
              />
              <div
                className="inline-flex p-3.5 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${accent}15` }}
              >
                <Icon className="w-6 h-6" style={{ color: accent }} />
              </div>
              <p
                className="text-[10px] font-extrabold uppercase tracking-[.2em] mb-1.5"
                style={{ color: accent }}
              >
                {title}
              </p>
              <p className="font-extrabold text-gray-900 mb-1 text-sm leading-snug">{value}</p>
              <p className="text-xs text-gray-400 font-light">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
