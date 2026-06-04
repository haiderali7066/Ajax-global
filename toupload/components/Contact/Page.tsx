"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Mail,
  Phone,
  Clock,
  Globe,
  Send,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  Bot,
  Users,
  Shield,
  Zap,
  DollarSign,
  RefreshCw,
  Sparkles,
  Star,
  Brain,
} from "lucide-react";

// ─── Font ──────────────────────────────────────────────────────────────────────
const fontImport = `
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap');
  * { font-family: 'Figtree', system-ui, sans-serif; }
  @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
  @keyframes pulseRing { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(1.8);opacity:0} }
  @keyframes marqueeContact { from{transform:translateX(0)} to{transform:translateX(-33.33%)} }
  @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
`;

// ─── Variants ─────────────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: i * 0.09 } }),
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: (i = 0) => ({ opacity: 1, transition: { duration: 0.55, delay: i * 0.08 } }),
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } };
const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};
const slideRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: (i = 0) => ({ opacity: 1, scale: 1, transition: { duration: 0.55, ease, delay: i * 0.07 } }),
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const quickContact = [
  { icon: Mail,  title: "Business Email",    value: "hello@ajaxglobal.com",       description: "Fast, reliable responses for all inquiries",  accent: "#7c3aed" },
  { icon: Phone, title: "Business Phone",    value: "+1 (555) 123-4567",           description: "Speak directly with a strategy consultant",    accent: "#059669" },
  { icon: Clock, title: "Operating Hours",   value: "24/7 Global Support",         description: "We never sleep — neither does your growth",    accent: "#0ea5e9" },
  { icon: Globe, title: "Countries Served",  value: "USA · Canada · AU · UAE",     description: "International presence, local expertise",       accent: "#d97706" },
];

const services = [
  "Customer Service Support","Custom Remote Teams","Scheduling & Dispatching",
  "Sales & Lead Generation","E-commerce Management","SEO / Social Media",
  "IT & Cybersecurity","AI Chat Agents","AI Voice Agents",
  "AI Workflow Automation","Not Sure – Need Consultation",
];

const teamSizes    = ["1–10 employees","11–50 employees","51–200 employees","201–500 employees","500+ employees"];
const startTimelines = ["Immediately","Within 1 month","1–3 months","3–6 months","Just exploring"];

const faqs = [
  { q: "How quickly can a team be deployed?",             a: "Most clients are fully onboarded within 5–10 business days. For urgent needs, we can often fast-track deployment within 48–72 hours." },
  { q: "Do you offer month-to-month contracts?",          a: "Yes. We believe in earning your business every month. Flexible arrangements are available for teams of all sizes." },
  { q: "Can I combine human outsourcing with AI?",        a: "Absolutely — and we recommend it. Our hybrid model pairs skilled remote professionals with IntelliDesq™ AI agents for maximum efficiency." },
  { q: "What industries do you specialize in?",           a: "We serve e-commerce, healthcare, real estate, SaaS, logistics, legal, and more. If your business has processes, we can optimize them." },
  { q: "Is my data secure?",                              a: "Security is non-negotiable. We follow industry-standard protocols, sign NDAs, and operate under strict data governance policies." },
  { q: "What happens after I submit the form?",           a: "Our team reviews your request, and a strategy consultant reaches out within 24 hours to schedule a discovery call and build your custom proposal." },
];

// ─── FAQ Item ──────────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      layout
      className="rounded-2xl overflow-hidden border transition-all duration-300"
      style={{ borderColor: open ? "var(--primary)" : "#e5e7eb", boxShadow: open ? "0 4px 24px rgba(124,58,237,0.10)" : "none" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors"
        style={{ background: open ? "#f8f7ff" : "white" }}
      >
        <span className="font-bold text-gray-900 pr-4 text-sm leading-snug">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3, ease }}>
          <ChevronDown className="w-5 h-5 flex-shrink-0 text-primary" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="faq-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            style={{ background: "#faf9ff" }}
          >
            <div className="px-6 pb-5 pt-4 text-gray-500 font-light leading-relaxed text-sm border-t border-violet-100">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Input Styles ──────────────────────────────────────────────────────────────
const inputBase = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 text-sm font-medium";

// ═══════════════════════════════════════════════════════════════
// SECTION 1 — HERO (seamlessly flows into quick contact)
// ═══════════════════════════════════════════════════════════════
function ContactHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden" style={{ background: "#1a1a2e" }}>
      {/* Grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
      {/* Orbs */}
      <motion.div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(109,40,217,0.22) 0%,transparent 65%)", filter: "blur(80px)" }} animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      <motion.div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(14,165,233,0.15) 0%,transparent 65%)", filter: "blur(70px)" }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} />

      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center pt-32 pb-20">
        {/* Eyebrow */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/8 mb-8 cursor-default backdrop-blur-sm"
        >
          <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          <span className="text-sm font-semibold text-white/70">Let's Build Your Scalable Growth System</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.08 }}
          className="text-[clamp(2.8rem,7vw,5.5rem)] font-light text-white leading-[1.05] tracking-tight mb-6"
          style={{ letterSpacing: "-0.025em" }}
        >
          Talk to an{" "}
          <span className="font-extrabold text-primary">AJAX Global</span>
          <br />
          <span className="font-light text-white/50">expert today.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xl mx-auto text-[1.1rem] text-white/50 font-light leading-relaxed mb-10"
        >
          Whether you need a remote team, AI automation, or a hybrid solution — we'll design the right system for your business.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.32 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#contact-form">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 h-12 rounded-full font-semibold text-white text-sm bg-primary shadow-lg shadow-primary/40"
            >
              Request Consultation <ArrowRight className="w-4 h-4" />
            </motion.button>
          </a>
          <a href="#contact-form">
            <motion.button whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-7 h-12 rounded-full font-medium text-white/80 text-sm border border-white/20 bg-white/8 hover:bg-white/15 transition-colors backdrop-blur-sm"
            >
              <Phone className="w-3.5 h-3.5" /> Book a Strategy Call
            </motion.button>
          </a>
        </motion.div>

        {/* Trust micro-bar */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/30 font-light"
        >
          {["No lock-in contracts", "7-day go-live", "500+ clients globally", "24/7 support"].map((t, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-emerald-500" /> {t}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Fade into next section — seamless */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #f8f7ff)" }} />
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// SECTION 2 — QUICK CONTACT CARDS (flows directly from hero)
// ═══════════════════════════════════════════════════════════════
function QuickContact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="pt-6 pb-0" style={{ background: "#f8f7ff" }} ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Subtle heading */}
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-[.22em] text-primary block mb-3">Global Reach. Local Expertise.</span>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-light text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            Reach us <span className="font-extrabold text-gray-900">anytime,</span>{" "}
            <span className="font-light text-gray-400">anywhere.</span>
          </h2>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickContact.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={i} variants={scaleIn} custom={i} whileHover={{ y: -6, scale: 1.02 }}
                className="group relative bg-white p-7 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 text-center cursor-default overflow-hidden"
              >
                {/* Top colour accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: item.accent }} />
                <div className="inline-flex p-3.5 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: `${item.accent}15` }}>
                  <Icon className="w-6 h-6" style={{ color: item.accent }} />
                </div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.2em] mb-1.5" style={{ color: item.accent }}>{item.title}</p>
                <p className="font-extrabold text-gray-900 mb-1 text-sm leading-snug">{item.value}</p>
                <p className="text-xs text-gray-400 font-light">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// SECTION 3 — CONTACT FORM (seamless bg continuation)
// ═══════════════════════════════════════════════════════════════
function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", country: "", services: [] as string[], industry: "", teamSize: "", challenge: "", timeline: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const toggleService = (s: string) => {
    setFormData(prev => ({ ...prev, services: prev.services.includes(s) ? prev.services.filter(x => x !== s) : [...prev.services, s] }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitted(true); setLoading(false);
    setFormData({ name: "", company: "", email: "", phone: "", country: "", services: [], industry: "", teamSize: "", challenge: "", timeline: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact-form" className="py-24" style={{ background: "#f8f7ff" }} ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[.22em] text-primary block mb-3">Let's Talk</span>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-4" style={{ letterSpacing: "-0.02em" }}>
            Request a{" "}<span className="font-extrabold text-primary">Consultation</span>
          </h2>
          <p className="text-gray-500 font-light text-lg leading-relaxed">Tell us about your business and we'll craft a solution around your exact needs.</p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
          className="bg-white rounded-3xl border border-violet-100 p-8 sm:p-10"
          style={{ boxShadow: "0 20px 60px rgba(124,58,237,0.08)" }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-16">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-emerald-50"
                >
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </motion.div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Message Received!</h3>
                <p className="text-gray-500 font-light">A strategy consultant will contact you within 24 hours.</p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Info */}
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[.22em] text-primary mb-4">Basic Information</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text"  name="name"    value={formData.name}    onChange={handleChange} required placeholder="Full Name *"       className={inputBase} />
                    <input type="text"  name="company" value={formData.company} onChange={handleChange} required placeholder="Company Name *"    className={inputBase} />
                    <input type="email" name="email"   value={formData.email}   onChange={handleChange} required placeholder="Email Address *"   className={inputBase} />
                    <input type="tel"   name="phone"   value={formData.phone}   onChange={handleChange}         placeholder="Phone Number"        className={inputBase} />
                    <input type="text"  name="country" value={formData.country} onChange={handleChange}         placeholder="Country"             className={`${inputBase} sm:col-span-2`} />
                  </div>
                </div>

                {/* Services */}
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[.22em] text-primary mb-4">Services Interested In</p>
                  <div className="flex flex-wrap gap-2">
                    {services.map(s => (
                      <motion.button key={s} type="button" onClick={() => toggleService(s)} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                        className="px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200"
                        style={formData.services.includes(s)
                          ? { background: "var(--primary)", color: "white", borderColor: "var(--primary)", boxShadow: "0 4px 12px rgba(124,58,237,0.25)" }
                          : { background: "white", color: "#6b7280", borderColor: "#e5e7eb" }}
                      >{s}</motion.button>
                    ))}
                  </div>
                </div>

                {/* Business Details */}
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[.22em] text-primary mb-4">Business Details</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input  type="text" name="industry" value={formData.industry} onChange={handleChange} placeholder="Your Industry"            className={inputBase} />
                    <select name="teamSize" value={formData.teamSize} onChange={handleChange} className={inputBase}>
                      <option value="">Current Team Size</option>
                      {teamSizes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <select name="timeline" value={formData.timeline} onChange={handleChange} className={inputBase}>
                      <option value="">When do you want to start?</option>
                      {startTimelines.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <textarea name="challenge" value={formData.challenge} onChange={handleChange} required placeholder="What challenge are you facing? *" rows={4}
                    className={`${inputBase} mt-4 resize-none`} />
                </div>

                <motion.button type="submit" disabled={loading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-extrabold text-white flex items-center justify-center gap-2 transition-all"
                  style={{ background: "var(--primary)", boxShadow: "0 8px 28px rgba(124,58,237,0.30)", opacity: loading ? 0.8 : 1 }}
                >
                  {loading ? (
                    <><motion.div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} /> Sending...</>
                  ) : (<>Request Consultation <Send className="w-4 h-4" /></>)}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// SECTION 4 — CHOOSE YOUR PATH (white)
// ═══════════════════════════════════════════════════════════════
function ChooseYourPath() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[.22em] text-primary block mb-3">Two Paths</span>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-4" style={{ letterSpacing: "-0.02em" }}>
            Choose your <span className="font-extrabold text-gray-900">path to</span>{" "}
            <span className="font-extrabold text-primary">scale.</span>
          </h2>
          <p className="text-gray-500 font-light text-lg">Two powerful solutions. One goal: scalable growth.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* HOS Card */}
          <motion.div variants={slideLeft} initial="hidden" animate={inView ? "show" : "hidden"}
            className="group relative rounded-3xl border-2 border-gray-100 hover:border-primary/40 p-8 transition-all duration-300 hover:shadow-2xl overflow-hidden bg-white"
            whileHover={{ y: -6 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none bg-primary/5 group-hover:bg-primary/8 transition-colors duration-300" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-flex p-3.5 rounded-2xl mb-5 w-fit bg-primary/10 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-[.2em] text-primary mb-2 block">HOS</span>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Human Outsourcing Solutions</h3>
              <p className="text-gray-500 font-light mb-6 leading-relaxed flex-1">
                Need trained remote professionals to support your operations? We build, train, and manage dedicated teams that feel like your own.
              </p>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full text-sm font-extrabold w-fit bg-primary shadow-md shadow-primary/25 hover:shadow-lg transition-all"
              >
                Talk to HOS Team <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* AI Card — dark */}
          <motion.div variants={slideRight} initial="hidden" animate={inView ? "show" : "hidden"}
            className="group relative rounded-3xl border border-white/10 p-8 transition-all duration-300 hover:shadow-2xl overflow-hidden"
            style={{ background: "#1a1a2e" }}
            whileHover={{ y: -6 }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(109,40,217,0.35) 0%, transparent 65%)", filter: "blur(20px)" }} />
            <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <motion.div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(167,139,250,0.6),transparent)" }} />
            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-flex p-3.5 rounded-2xl mb-5 w-fit group-hover:scale-110 transition-transform" style={{ background: "rgba(109,40,217,0.2)" }}>
                <Brain className="w-7 h-7 text-violet-400" />
              </div>
              <div className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 rounded-full w-fit" style={{ background: "rgba(109,40,217,0.2)" }}>
                <Sparkles className="w-3 h-3 text-violet-400" />
                <span className="text-xs font-extrabold text-violet-400 tracking-wide">IntelliDesq™</span>
              </div>
              <h3 className="text-xl font-extrabold text-white mb-3">AI Automation</h3>
              <p className="text-white/50 font-light mb-6 leading-relaxed flex-1">
                Want AI agents that work 24/7 without human intervention? Deploy intelligent automation that never sleeps and scales infinitely.
              </p>
              <motion.button whileHover={{ scale: 1.03, backgroundColor: "var(--primary)", borderColor: "var(--primary)", color: "white" }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-extrabold border transition-all duration-200 w-fit text-violet-300 border-violet-400/40"
              >
                Schedule AI Demo <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// SECTION 5 — WHAT HAPPENS NEXT (dark, full-width, animated)
// ═══════════════════════════════════════════════════════════════
const nextSteps = [
  { step: "01", title: "We Review Your Request",  desc: "Our team assesses your needs immediately upon submission.",                    icon: Sparkles },
  { step: "02", title: "Consultant Reaches Out",   desc: "A strategy consultant contacts you within 24 hours.",                          icon: Phone    },
  { step: "03", title: "Discovery Call",            desc: "We dive deep into your challenges and goals together.",                        icon: Users    },
  { step: "04", title: "Custom Proposal",           desc: "You receive a tailored plan built specifically for your business.",            icon: Star     },
];

function WhatHappensNext() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden py-28" style={{ background: "#0f0b1e" }} ref={ref}>
      {/* Orbs */}
      <motion.div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(109,40,217,0.18) 0%,transparent 65%)", filter: "blur(90px)" }} animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 9, repeat: Infinity }} />
      <motion.div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%,transparent 65%)", filter: "blur(70px)" }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 11, repeat: Infinity, delay: 3 }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.8) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-[.22em] text-primary/80 block mb-3">The Process</span>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            What happens{" "}
            <span className="font-extrabold" style={{ background: "linear-gradient(90deg,#a78bfa,#38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              next?
            </span>
          </h2>
          <p className="text-white/40 font-light text-lg max-w-md mx-auto">A clear path from first contact to your custom growth system.</p>
        </motion.div>

        {/* Animated connector line */}
        <div className="hidden lg:block relative mb-4 h-px mx-20">
          <div className="absolute inset-0 bg-white/5 rounded-full" />
          <motion.div className="absolute inset-y-0 left-0 rounded-full" style={{ width: lineWidth, background: "linear-gradient(90deg,#7c3aed,#0ea5e9)" }} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {nextSteps.map((item, i) => {
            const Icon = item.icon;
            const colors = ["#7c3aed", "#0ea5e9", "#10b981", "#f59e0b"];
            const color = colors[i];
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.13, duration: 0.7, ease }}
                whileHover={{ y: -10 }}
                className="group relative text-center cursor-default"
              >
                {/* Pulse ring behind icon */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  {inView && (
                    <motion.div className="absolute w-20 h-20 rounded-2xl" style={{ background: `${color}25` }}
                      initial={{ scale: 0.8, opacity: 0.6 }}
                      animate={{ scale: [0.8, 1.5, 1.8], opacity: [0.6, 0.2, 0] }}
                      transition={{ duration: 2.5, delay: 0.5 + i * 0.13, repeat: Infinity, repeatDelay: 2 }}
                    />
                  )}
                  <motion.div
                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-white font-black text-lg z-10 transition-transform group-hover:scale-110 duration-300"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}99)`, boxShadow: `0 8px 32px ${color}50` }}
                    initial={{ scale: 0, rotate: -10 }}
                    animate={inView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.6, type: "spring", stiffness: 180, damping: 14 }}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                </div>

                {/* Step number badge */}
                <motion.div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-black px-2.5 py-0.5 rounded-full text-white"
                  style={{ background: color }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.12 }}
                >
                  {item.step}
                </motion.div>

                {/* Card */}
                <motion.div
                  className="bg-white/5 border border-white/8 rounded-2xl p-6 backdrop-blur-sm group-hover:bg-white/8 transition-all duration-300 relative overflow-hidden"
                  style={{ boxShadow: `0 0 0 0 ${color}` }}
                  whileHover={{ boxShadow: `0 8px 40px ${color}25`, borderColor: `${color}40` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(90deg,transparent,${color},transparent)` }} />
                  <h3 className="font-extrabold text-white mb-2 text-sm group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-sm text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors">{item.desc}</p>
                </motion.div>

                {/* Dashed connector (non-last) */}
                {i < nextSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-10 left-[calc(50%+3rem)] w-[calc(100%-6rem)] items-center pointer-events-none">
                    <div className="w-full border-t-2 border-dashed border-white/10" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mt-14">
          <a href="#contact-form">
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-8 h-12 rounded-full font-bold text-white text-sm bg-primary shadow-lg shadow-primary/40"
            >
              Start the Process <ArrowRight className="w-4 h-4" />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// SECTION 6 — WHY AJAX GLOBAL (light)
// ═══════════════════════════════════════════════════════════════
const whyPoints = [
  { icon: DollarSign, text: "Transparent, competitive pricing",      accent: "#7c3aed" },
  { icon: RefreshCw,  text: "No long-term lock-in contracts",        accent: "#059669" },
  { icon: Zap,        text: "Scalable solutions that grow with you", accent: "#0ea5e9" },
  { icon: Shield,     text: "Secure & confidential processes",       accent: "#be185d" },
  { icon: Users,      text: "Industry-trained remote professionals", accent: "#d97706" },
  { icon: Clock,      text: "24/7 global support availability",      accent: "#1d4ed8" },
];

function WhyAJAX() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div variants={slideLeft} initial="hidden" animate={inView ? "show" : "hidden"}>
            <span className="text-xs font-semibold uppercase tracking-[.22em] text-primary block mb-4">Why Us</span>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-5" style={{ letterSpacing: "-0.02em" }}>
              Why contact{" "}
              <span className="font-extrabold text-gray-900">AJAX</span>{" "}
              <span className="font-extrabold text-primary">Global?</span>
            </h2>
            <p className="text-gray-500 font-light leading-relaxed text-base mb-8">
              We're not just a vendor — we're a growth partner. Here's what you can expect when you work with us.
            </p>
            <a href="#contact-form">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 h-11 rounded-full font-semibold text-white text-sm bg-primary shadow-lg shadow-primary/30"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </motion.button>
            </a>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className="grid sm:grid-cols-2 gap-3">
            {whyPoints.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={scaleIn} custom={i} whileHover={{ y: -4, x: 4 }}
                  className="flex items-start gap-3.5 p-4 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 group cursor-default bg-white"
                >
                  <div className="inline-flex p-2.5 rounded-xl shrink-0 group-hover:scale-110 transition-transform" style={{ background: `${item.accent}12` }}>
                    <Icon className="w-4 h-4" style={{ color: item.accent }} />
                  </div>
                  <p className="text-sm font-semibold text-gray-700 leading-snug pt-1">{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// SECTION 7 — FAQ (soft purple bg)
// ═══════════════════════════════════════════════════════════════
function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24" style={{ background: "#f8f7ff" }} ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[.22em] text-primary block mb-3">FAQ</span>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-4" style={{ letterSpacing: "-0.02em" }}>
            Frequently asked{" "}
            <span className="font-extrabold text-gray-900">questions.</span>
          </h2>
          <p className="text-gray-500 font-light text-lg">Everything you need to know before reaching out.</p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}>
              <FAQItem q={faq.q} a={faq.a} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// SECTION 8 — FINAL CTA (dark, floating elements)
// ═══════════════════════════════════════════════════════════════
function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "#0f0b1e" }} ref={ref}>
      {/* Orbs */}
      <motion.div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(109,40,217,0.22) 0%,transparent 60%)", filter: "blur(100px)" }} animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 9, repeat: Infinity }} />
      <motion.div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(14,165,233,0.14) 0%,transparent 65%)", filter: "blur(80px)" }} animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 11, repeat: Infinity, delay: 3 }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* Floating cards */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-70 hidden xl:block" style={{ animation: "floatA 7s ease-in-out infinite" }}>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-44">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center"><Users className="w-3 h-3 text-primary" /></div>
            <span className="text-xs font-semibold text-gray-700">Response Time</span>
          </div>
          <div className="text-2xl font-black text-primary">24 hrs</div>
          <p className="text-[10px] text-gray-400 mt-1">Guaranteed reply</p>
        </div>
      </div>
      <div className="absolute right-8 top-1/3 opacity-70 hidden xl:block" style={{ animation: "floatB 8s ease-in-out infinite" }}>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-44">
          <p className="text-[10px] text-gray-400 mb-2">Client satisfaction</p>
          <div className="text-2xl font-black text-primary">98%</div>
          <div className="flex gap-0.5 mt-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />)}</div>
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className="space-y-6">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/8 cursor-default backdrop-blur-sm">
            <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            <span className="text-sm font-semibold text-white/60">Ready when you are</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-[clamp(2.5rem,6vw,5rem)] font-light text-white leading-tight" style={{ letterSpacing: "-0.025em" }}>
            Ready to scale{" "}
            <span className="font-extrabold" style={{ background: "linear-gradient(90deg,#a78bfa,#38bdf8,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              smarter?
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-white/40 font-light text-lg max-w-xl mx-auto leading-relaxed">
            Join businesses across the globe that trust AJAX Global to power their operations.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a href="#contact-form">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 px-8 h-13 rounded-full text-white font-extrabold bg-primary shadow-lg shadow-primary/40 transition-all"
                style={{ height: 52 }}
              >
                Book Free Strategy Call <ArrowRight className="w-5 h-5" />
              </motion.button>
            </a>
            <a href="#contact-form">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 border border-white/20 text-white font-extrabold hover:bg-white/10 hover:border-white/30 transition-all rounded-full backdrop-blur-sm"
                style={{ height: 52 }}
              >
                Request Pricing
              </motion.button>
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/30 font-light">
            {["No long-term lock-in", "7-day go-live", "Dedicated account manager", "Full transparency billing"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> {t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// DEFAULT EXPORT
// ═══════════════════════════════════════════════════════════════
export default function ContactClient() {
  return (
    <>
      <style>{fontImport}</style>
      <ContactHero />
      <QuickContact />
      <ContactForm />
      <ChooseYourPath />
      <WhatHappensNext />
      <WhyAJAX />
      <FAQ />
      <FinalCTA />
    </>
  );
}