"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Star, Users } from "lucide-react";
import { fadeUp, stagger, AVATARS } from "./shared";

/* ── Agent Arc ── */
export function AgentArc() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
  className="py-16 sm:py-24 lg:py-28 overflow-x-hidden"
  style={{ background: "#f8f7ff" }}
  ref={ref}
>
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    {/* Header */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="text-center mb-10 sm:mb-12"
    >
      <span className="text-xs font-semibold uppercase tracking-[.2em] text-indigo-500 block mb-3 sm:mb-4">
        AJAX Global HOS
      </span>
      <h2
        className="text-[clamp(1.75rem,5vw,3.5rem)] font-light text-gray-900 leading-[1.15]"
        style={{ letterSpacing: "-0.02em" }}
      >
        <span
          className="font-extrabold bg-primary"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Unlimited workforce
        </span>{" "}
        that
        <br className="hidden xs:block" />
        {" "}amplifies your team's impact.
      </h2>
      <p className="text-gray-400 font-light mt-3 sm:mt-4 max-w-sm sm:max-w-md mx-auto text-sm sm:text-base">
        Expand what you can achieve with ready-made or custom outsourced
        teams that act where you already work.
      </p>
    </motion.div>

    {/* Avatar arc */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="relative flex items-end justify-center gap-1.5 sm:gap-2 lg:gap-3 px-8 sm:px-12 mb-8 sm:mb-10"
    >
      {/* Fade edges */}
      <div
        className="absolute inset-y-0 left-0 w-12 sm:w-20 pointer-events-none z-10"
        style={{ background: "linear-gradient(to right,#f8f7ff,transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-12 sm:w-20 pointer-events-none z-10"
        style={{ background: "linear-gradient(to left,#f8f7ff,transparent)" }}
      />

      {AVATARS.map((a, i) => {
        // Scale avatars down on mobile: ~65% of original size
        const mobileSize = Math.round(a.size * 0.65);
        return (
          <motion.div
            key={i}
            className="shrink-0 rounded-full flex items-center justify-center cursor-default select-none border-2 border-white relative"
            style={{
              // Use CSS custom properties for responsive sizing
              width: `clamp(${mobileSize}px, ${(a.size / 400) * 100}vw, ${a.size}px)`,
              height: `clamp(${mobileSize}px, ${(a.size / 400) * 100}vw, ${a.size}px)`,
              background: a.color,
              boxShadow:
                a.size >= 100
                  ? "0 8px 30px rgba(0,0,0,0.12)"
                  : "0 4px 12px rgba(0,0,0,0.08)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.3 + i * 0.06,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ scale: 1.12, y: -8, zIndex: 10 }}
          >
            <span
              style={{
                fontSize: `clamp(${mobileSize * 0.44}px, ${(a.size * 0.44 / 400) * 100}vw, ${a.size * 0.44}px)`,
                lineHeight: 1,
              }}
            >
              {a.emoji}
            </span>
            {[2, 5, 8].includes(i) && (
              <div className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 border-2 border-white" />
            )}
          </motion.div>
        );
      })}
    </motion.div>

    {/* Footer CTA */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 1, duration: 0.6 }}
      className="text-center"
    >
      <p className="text-gray-400 text-xs sm:text-sm font-light mb-5 sm:mb-6">
        2,000+ professionals deployed across 15+ countries
      </p>
      <Link href="/contact">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-primary inline-flex items-center gap-2 px-7 sm:px-8 h-11 sm:h-12 rounded-full font-semibold text-white text-sm"
          style={{
            boxShadow: "0 8px 30px rgba(109,40,217,0.28)",
          }}
        >
          Build Your Team <ArrowRight className="w-4 h-4" />
        </motion.button>
      </Link>
    </motion.div>
  </div>
</section>
  );
}
export function PricingSnapshot() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  const tiers = [
    {
      label: "Associate",
      sub: "Low-cost operational support",
      hourly: "$9",
      monthly: "$1,300/mo",
      desc: "Calls and order handling",
      color: "#7c3aed",
    },
    {
      label: "Specialist",
      sub: "Advanced support & coordination",
      hourly: "$11.50",
      monthly: "$1,600/mo",
      desc: "Escalations, upselling, vendor outreach, advanced coordination",
      color: "#2563eb",
      featured: true,
    },
    {
      label: "Manager",
      sub: "Leadership & quality oversight",
      hourly: "$14",
      monthly: "$2,000/mo",
      desc: "Team oversight, QA management, training, and escalations",
      color: "#059669",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-12"
        >
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 leading-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            Simple, transparent{" "}
            <span className="bg-green-700 text-white px-3 py-1 rounded-md">
              pricing
            </span>
          </h2>

          <p className="text-gray-400 font-light mt-4 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
            Dedicated full-time resources tailored for operations, support,
            coordination, and scalable business growth.
          </p>

          {/* Highlight */}
          <div className="mt-8 inline-flex flex-col items-center">
            <span className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-2">
              Starting from
            </span>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                {tiers[0].hourly}
                <span className="text-lg font-medium text-gray-400">/hr</span>
              </span>

              <span className="text-gray-300 text-2xl">•</span>

              <span className="text-2xl sm:text-3xl font-semibold text-gray-800">
                {tiers[0].monthly}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl border p-8 text-left overflow-hidden"
              style={{
                borderColor: t.featured ? `${t.color}30` : "#e5e7eb",
                background: t.featured
                  ? "linear-gradient(to bottom, #faf9ff, #ffffff)"
                  : "#ffffff",
                boxShadow: t.featured
                  ? "0 20px 60px rgba(37,99,235,0.12)"
                  : "0 8px 30px rgba(0,0,0,0.04)",
                transform: t.featured ? "scale(1.03)" : "none",
              }}
            >
              {/* Popular Badge */}
              {t.featured && (
                <div className="absolute top-5 right-5">
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-bold text-white"
                    style={{ background: t.color }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              {/* Accent line */}
              <div
                className="w-14 h-1 rounded-full mb-6"
                style={{ background: t.color }}
              />

              {/* Label */}
              <div className="mb-6">
                <p
                  className="text-xs font-bold uppercase tracking-[0.25em] mb-2"
                  style={{ color: t.color }}
                >
                  {t.label}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                  {t.sub}
                </h3>
              </div>

              {/* Pricing */}
              <p className="text-sm text-gray-400 mb-2">
                Starting as low as
              </p>

              <div
                className="text-5xl font-light text-gray-900 leading-none"
                style={{ letterSpacing: "-0.03em" }}
              >
                <strong>{t.hourly}</strong>

                <span className="text-lg font-normal text-gray-400">
                  /hr
                </span>
              </div>

              <div
                className="font-semibold mt-3 text-lg"
                style={{ color: t.color }}
              >
                {t.monthly}
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-gray-100" />

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                {t.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center"
        >
          <p className="text-sm text-gray-400 font-light mb-6">
            Enterprise teams, custom workflows, and scalable contracts
            available.
          </p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-green-700 inline-flex items-center gap-2 px-8 h-12 rounded-full font-semibold text-white text-sm transition-all"
              style={{
                boxShadow: "0 10px 30px rgba(21,128,61,0.25)",
              }}
            >
              Get a Custom Quote
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Trust Section / Testimonials ── */
export function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const quotes = [
    { text: "AJAX Global transformed our support ops within two weeks. Zero downtime, professional agents, and KPIs that actually mean something.", author: "Operations Director", company: "SaaS Company — USA", emoji: "🇺🇸", color: "#7c3aed", stat: "615%", statLabel: "ROI achieved" },
    { text: "The 60-second rule changed our lead capture rate permanently. We were losing 40% of inbound leads before AJAX.", author: "CEO", company: "Home Services — Australia", emoji: "🇦🇺", color: "#2563eb", stat: "40%", statLabel: "More leads captured" },
    { text: "Having IntelliDesq™ alongside the human team gives us insights we never had with our in-house setup. Worth every dollar.", author: "Founder", company: "E-Commerce Brand — Canada", emoji: "🇨🇦", color: "#059669", stat: "300%", statLabel: "Cost savings reinvested" },
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-[#050505] mx-10 rounded-[3rem] border border-white/5" ref={ref}>
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#ffffff 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-16">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-medium text-white leading-tight" style={{ letterSpacing: "-0.03em" }}>
            Brands who trust AJAX Global to{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-primary">accelerate outcomes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="rounded-[2rem] overflow-hidden transition-all duration-500 cursor-default shadow-2xl"
              style={{ backgroundColor: `${q.color}dd`, border: `1px solid ${q.color}` }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              <div className="p-8 pb-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold">Proven Result</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white tracking-tighter">{q.stat}</span>
                    <span className="text-xs text-white/80 font-semibold uppercase tracking-wider">{q.statLabel}</span>
                  </div>
                </div>
              </div>
              <div className="p-8 pt-2">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-base text-white font-medium leading-relaxed mb-8">"{q.text}"</p>
                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl border border-white/20 shadow-inner">{q.emoji}</div>
                  <div>
                    <p className="text-sm font-bold text-white tracking-wide">{q.author}</p>
                    <p className="text-xs text-white/60 font-medium">{q.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ── */
export function HOSCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-white" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(0,0,0,0.04) 1px,transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-60 hidden lg:block" style={{ animation: "floatA 7s ease-in-out infinite" }}>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-44">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-indigo-100 flex items-center justify-center">
              <Users className="w-3 h-3 text-indigo-600" />
            </div>
            <span className="text-xs font-semibold text-gray-700">New Team</span>
          </div>
          <div className="space-y-1.5">
            {["Support Lead ✓","Sales Agent ✓","VA Assigned ✓"].map((item) => (
              <div key={item} className="text-[10px] text-emerald-600 flex items-center gap-1">
                <CheckCircle className="w-2.5 h-2.5" />{item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute right-8 top-1/3 opacity-60 hidden lg:block" style={{ animation: "floatB 8s ease-in-out infinite" }}>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-44">
          <p className="text-[10px] text-gray-400 mb-2">Go-live in</p>
          <div className="text-2xl font-black text-indigo-600">7 days</div>
          <p className="text-[10px] text-gray-400 mt-1">From approval to active</p>
        </div>
      </div>
      <div className="absolute right-16 bottom-1/4 opacity-50 hidden lg:block" style={{ animation: "floatA 9s ease-in-out infinite 1s" }}>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-3 w-36">
          <p className="text-[10px] text-gray-400">Client satisfaction</p>
          <div className="text-xl font-black text-emerald-600">98%</div>
          <div className="flex gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />)}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className="space-y-6">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-600 shadow-sm cursor-default">
            <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-500" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            Ready to outpace everyone?
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-[clamp(2.5rem,6vw,5rem)] font-light text-gray-900 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Ready to build the{" "}
            <span className="font-extrabold bg-primary" style={{ backgroundSize: "200%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "gradShift 5s ease infinite" }}>
              best team
            </span>
            <br />for your business?
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
            Start with a personalized consultation. We'll design your ideal team and have them live within 7 days.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="bg-primary inline-flex items-center gap-2 px-9 rounded-full font-bold text-white text-base" style={{ height: 52, boxShadow: "0 12px 40px rgba(109,40,217,0.3)" }}>
                Get Started{" "}
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.02 }} className="inline-flex items-center gap-2 px-8 rounded-full font-medium text-gray-600 text-base border border-gray-200 bg-white hover:border-gray-300 transition-colors" style={{ height: 52 }}>
                Contact Us
              </motion.button>
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-gray-400 font-light">
            {["No long-term lock-in","7-day go-live","Dedicated account manager","Full transparency billing"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> {t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradShift { 0%,100%{background-position:0%} 50%{background-position:100%} }
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
      `}</style>
    </section>
  );
}
