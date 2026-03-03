"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, stagger, FAQS } from "./contact.variants";

// ─── Single accordion item ─────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="rounded-2xl overflow-hidden border transition-all duration-300"
      style={{
        borderColor: open ? "var(--primary)" : "#e5e7eb",
        boxShadow:   open ? "0 4px 24px rgba(124,58,237,0.10)" : "none",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors"
        style={{ background: open ? "#f8f7ff" : "white" }}
        aria-expanded={open}
      >
        <span className="font-bold text-gray-900 pr-4 text-sm leading-snug">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <ChevronDown className="w-5 h-5 flex-shrink-0 text-primary" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: "#faf9ff" }}
          >
            <div className="px-6 pb-5 pt-4 text-gray-500 font-light leading-relaxed text-sm border-t border-violet-100">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Section wrapper ──────────────────────────────────────────────────────────
export default function ContactFAQ() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24" style={{ background: "#f8f7ff" }} ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[.22em] text-primary block mb-3">
            FAQ
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Frequently asked <span className="font-extrabold text-gray-900">questions.</span>
          </h2>
          <p className="text-gray-500 font-light text-lg">
            Everything you need to know before reaching out.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="space-y-3"
        >
          {FAQS.map((faq, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}>
              <FAQItem q={faq.q} a={faq.a} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
