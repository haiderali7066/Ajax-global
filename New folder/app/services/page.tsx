"use client";
import { useState, useEffect, useRef } from "react";

import {
  BrainCircuit,
  Bot,
  Workflow,
  Sparkles,
  ShieldCheck,
  BarChart3,
  Users,
  Headphones,
  Truck,
  ClipboardCheck,
  Briefcase,
  UserCog,
  ArrowUpRight,
} from "lucide-react";

// ── DATA ──────────────────────────────────────────────────────────────────────

const STATS = [
  { value: 98, suffix: "%", label: "Client retention rate" },
  { value: 6970, suffix: "+", label: "Hours automated monthly" },
  { value: 3, suffix: "×", label: "Faster lead response" },
  { value: 140, suffix: "+", label: "Enterprise clients" },
];

const INTELLIDESQ_SERVICES = [
  {
    id: "ai-auto",
    icon: "🤖",
    title: "AI & Automation",
    tagline: "Intelligent workflows, zero manual overhead",
    desc: "Deploy brand-trained AI agents that handle support, sales, and onboarding 24/7 — fully automated, no human touch required.",
    tags: ["GPT-4o powered", "Multi-language", "CRM sync"],
    color: "#6366f1",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    tagBg: "bg-indigo-100",
    tagText: "text-indigo-700",
    dot: "bg-indigo-500",
  },
  {
    id: "ui-ux",
    icon: "🎨",
    title: "UI / UX Design",
    tagline: "Interfaces that convert and delight",
    desc: "Human-centred design systems — from wireframes to production-ready UI. Beautiful, accessible, and built to perform.",
    tags: ["Figma-first", "Design systems", "A/B tested"],
    color: "#0ea5e9",
    bg: "bg-sky-50",
    border: "border-sky-200",
    tagBg: "bg-sky-100",
    tagText: "text-sky-700",
    dot: "bg-sky-500",
  },
  {
    id: "web-dev",
    icon: "💻",
    title: "Web Development",
    tagline: "Fast, scalable, and built to last",
    desc: "Full-stack web engineering with modern frameworks. From landing pages to complex SaaS platforms — delivered on time.",
    tags: ["React / Next.js", "Node & Postgres", "CI/CD"],
    color: "#10b981",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    tagBg: "bg-emerald-100",
    tagText: "text-emerald-700",
    dot: "bg-emerald-500",
  },
  {
    id: "mobile",
    icon: "📱",
    title: "Mobile App Development",
    tagline: "iOS & Android, shipped on time",
    desc: "Native and cross-platform mobile apps engineered for performance. End-to-end from concept to App Store deployment.",
    tags: ["React Native", "Swift / Kotlin", "App Store"],
    color: "#f59e0b",
    bg: "bg-amber-50",
    border: "border-amber-200",
    tagBg: "bg-amber-100",
    tagText: "text-amber-700",
    dot: "bg-amber-500",
  },
  {
    id: "brand",
    icon: "✦",
    title: "Brand Identity",
    tagline: "Brands built to be remembered",
    desc: "Strategy-led brand identity — logo, colour, typography, voice, and complete brand guidelines your team can actually use.",
    tags: ["Logo design", "Brand guidelines", "Messaging"],
    color: "#ef4444",
    bg: "bg-red-50",
    border: "border-red-200",
    tagBg: "bg-red-100",
    tagText: "text-red-700",
    dot: "bg-red-500",
  },
  {
    id: "product",
    icon: "🗺️",
    title: "Product Strategy",
    tagline: "Roadmaps that align teams and ship value",
    desc: "Product discovery, roadmap prioritisation, OKR alignment, and sprint planning. We help you build the right thing — fast.",
    tags: ["Discovery sprints", "OKRs", "Roadmapping"],
    color: "#8b5cf6",
    bg: "bg-violet-50",
    border: "border-violet-200",
    tagBg: "bg-violet-100",
    tagText: "text-violet-700",
    dot: "bg-violet-500",
  },
  {
    id: "seo",
    icon: "📈",
    title: "SEO & Content",
    tagline: "Organic growth that compounds over time",
    desc: "Technical SEO, content strategy, and editorial production — building sustainable organic channels that pay back for years.",
    tags: ["Technical SEO", "Content ops", "Link building"],
    color: "#14b8a6",
    bg: "bg-teal-50",
    border: "border-teal-200",
    tagBg: "bg-teal-100",
    tagText: "text-teal-700",
    dot: "bg-teal-500",
  },
  {
    id: "data",
    icon: "📊",
    title: "Data & Analytics",
    tagline: "Turn your data into your unfair advantage",
    desc: "Data pipelines, BI dashboards, and analytics engineering. See exactly what's working and why — in real time.",
    tags: ["dbt / Airflow", "Looker / Metabase", "ML models"],
    color: "#6366f1",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    tagBg: "bg-indigo-100",
    tagText: "text-indigo-700",
    dot: "bg-indigo-500",
  },
  {
    id: "growth",
    icon: "🚀",
    title: "Growth Marketing",
    tagline: "Paid and organic engines, built to scale",
    desc: "Performance marketing, funnel optimisation, and growth experimentation — run by specialists who obsess over CAC and LTV.",
    tags: ["Paid social", "CRO", "Attribution"],
    color: "#f43f5e",
    bg: "bg-rose-50",
    border: "border-rose-200",
    tagBg: "bg-rose-100",
    tagText: "text-rose-700",
    dot: "bg-rose-500",
  },
  {
    id: "devops",
    icon: "⚙️",
    title: "DevOps & Infrastructure",
    tagline: "Ship faster with zero-downtime confidence",
    desc: "Cloud infrastructure, CI/CD pipelines, Kubernetes orchestration, and 24/7 reliability engineering for high-growth teams.",
    tags: ["AWS / GCP / Azure", "Kubernetes", "99.99% SLA"],
    color: "#0ea5e9",
    bg: "bg-sky-50",
    border: "border-sky-200",
    tagBg: "bg-sky-100",
    tagText: "text-sky-700",
    dot: "bg-sky-500",
  },
  {
    id: "crm",
    icon: "💹",
    title: "CRM & RevOps",
    tagline: "Revenue systems that actually work together",
    desc: "HubSpot, Salesforce, and custom CRM implementations — stitched into a RevOps motion that closes more and leaks less.",
    tags: ["HubSpot / SF", "Pipeline hygiene", "RevOps audit"],
    color: "#10b981",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    tagBg: "bg-emerald-100",
    tagText: "text-emerald-700",
    dot: "bg-emerald-500",
  },
  {
    id: "custom",
    icon: "🔧",
    title: "Custom Solutions",
    tagline: "Built entirely around your problem",
    desc: "Bespoke builds — document intelligence, internal knowledge bases, AI-assisted product strategy, and whatever your edge case demands.",
    tags: ["RAG / Knowledge base", "Custom LLMs", "Consulting"],
    color: "#64748b",
    bg: "bg-slate-50",
    border: "border-slate-200",
    tagBg: "bg-slate-100",
    tagText: "text-slate-600",
    dot: "bg-slate-500",
  },
];

const HOS_SERVICES = [
  {
    id: "customer-service",
    icon: "🎧",
    title: "Customer Support",
    tagline: "Brand-trained agents, zero downtime",
    desc: "Dedicated agents who know your product cold. Omnichannel across phone, email, chat, and social — 24/7 with sub-2-minute response SLAs.",
    tags: ["24/7 coverage", "Omnichannel", "Brand voice trained"],
    color: "#6366f1",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    tagBg: "bg-indigo-100",
    tagText: "text-indigo-700",
    dot: "bg-indigo-500",
  },
  {
    id: "sales-leads",
    icon: "📈",
    title: "Sales & Lead Generation",
    tagline: "Closers who treat every lead as sacred",
    desc: "Outbound and inbound sales teams built around your ICP. From cold prospecting to closing, embedded directly into your revenue motion.",
    tags: ["Outbound SDRs", "Inbound AEs", "Pipeline reporting"],
    color: "#10b981",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    tagBg: "bg-emerald-100",
    tagText: "text-emerald-700",
    dot: "bg-emerald-500",
  },
  {
    id: "virtual-admin",
    icon: "🗂️",
    title: "Virtual & Admin Assistants",
    tagline: "Executive support and admin excellence",
    desc: "Highly capable VAs and EAs managing calendars, inbox zero, travel, research, reporting and cross-functional coordination.",
    tags: ["Executive support", "Inbox management", "Research & ops"],
    color: "#0ea5e9",
    bg: "bg-sky-50",
    border: "border-sky-200",
    tagBg: "bg-sky-100",
    tagText: "text-sky-700",
    dot: "bg-sky-500",
  },
  {
    id: "ecommerce",
    icon: "🛒",
    title: "E-Commerce Management",
    tagline: "Shopify, WooCommerce, Amazon — 24/7",
    desc: "Full back-office support — listings, inventory, order fulfilment, returns, reviews, and customer escalations handled end-to-end.",
    tags: ["Shopify / Amazon", "Order fulfilment", "Reviews & returns"],
    color: "#f59e0b",
    bg: "bg-amber-50",
    border: "border-amber-200",
    tagBg: "bg-amber-100",
    tagText: "text-amber-700",
    dot: "bg-amber-500",
  },
  {
    id: "property",
    icon: "🏠",
    title: "Property Management",
    tagline: "Tenant care, maintenance, rent coordination",
    desc: "Remote property management teams handling tenant comms, maintenance ticketing, rent tracking, and compliance documentation.",
    tags: ["Tenant comms", "Maintenance flow", "Rent tracking"],
    color: "#8b5cf6",
    bg: "bg-violet-50",
    border: "border-violet-200",
    tagBg: "bg-violet-100",
    tagText: "text-violet-700",
    dot: "bg-violet-500",
  },
  {
    id: "it-cyber",
    icon: "🛡️",
    title: "IT & Cybersecurity",
    tagline: "Technical teams and MSP-level operations",
    desc: "Tier-1 to Tier-3 IT support, helpdesk management, network monitoring, and cybersecurity operations at MSP-grade standards.",
    tags: ["Helpdesk T1–T3", "MSP operations", "SOC monitoring"],
    color: "#ef4444",
    bg: "bg-red-50",
    border: "border-red-200",
    tagBg: "bg-red-100",
    tagText: "text-red-700",
    dot: "bg-red-500",
  },
  {
    id: "seo-social",
    icon: "🔍",
    title: "SEO & Social Media",
    tagline: "Visibility, content, and digital presence",
    desc: "SEO specialists and social media managers who build organic presence, manage community, create content, and drive measurable SERP gains.",
    tags: ["On-page SEO", "Content creation", "Community mgmt"],
    color: "#14b8a6",
    bg: "bg-teal-50",
    border: "border-teal-200",
    tagBg: "bg-teal-100",
    tagText: "text-teal-700",
    dot: "bg-teal-500",
  },
  {
    id: "custom-teams",
    icon: "👥",
    title: "Custom Remote Teams",
    tagline: "Fully bespoke for your exact industry",
    desc: "Tell us your workflow, your stack, and your standards — we recruit, train, and embed a fully custom team that operates as your own.",
    tags: ["Bespoke hiring", "Custom training", "Full integration"],
    color: "#f43f5e",
    bg: "bg-rose-50",
    border: "border-rose-200",
    tagBg: "bg-rose-100",
    tagText: "text-rose-700",
    dot: "bg-rose-500",
  },
  {
    id: "client-retention",
    icon: "💎",
    title: "Client Retention",
    tagline: "Proactive relationship defence & loyalty",
    desc: "Dedicated retention specialists running NPS cycles, handling churn signals, executing re-engagement campaigns, and protecting revenue.",
    tags: ["NPS tracking", "Churn prevention", "Loyalty programs"],
    color: "#a855f7",
    bg: "bg-purple-50",
    border: "border-purple-200",
    tagBg: "bg-purple-100",
    tagText: "text-purple-700",
    dot: "bg-purple-500",
  },
  {
    id: "scheduling",
    icon: "⏱️",
    title: "Scheduling & Dispatch",
    tagline: "60-second rule — every lead captured",
    desc: "Specialised scheduling and dispatch teams for field service, home services, and healthcare — with a 60-second pickup guarantee.",
    tags: ["60-sec guarantee", "Field service", "CRM integrated"],
    color: "#f97316",
    bg: "bg-orange-50",
    border: "border-orange-200",
    tagBg: "bg-orange-100",
    tagText: "text-orange-700",
    dot: "bg-orange-500",
  },
  {
    id: "multilingual",
    icon: "🌐",
    title: "Multilingual Support",
    tagline: "English, Spanish, French, Arabic coverage",
    desc: "Native-language agents across four major languages — seamlessly embedded into your existing support infrastructure.",
    tags: ["EN / ES / FR / AR", "Native speakers", "Cultural fluency"],
    color: "#0ea5e9",
    bg: "bg-sky-50",
    border: "border-sky-200",
    tagBg: "bg-sky-100",
    tagText: "text-sky-700",
    dot: "bg-sky-500",
  },
  {
    id: "data-reporting",
    icon: "📊",
    title: "Data & Reporting",
    tagline: "KPI dashboards and performance analytics",
    desc: "Dedicated data analysts who build and maintain live dashboards, generate weekly performance packs, and surface actionable insights.",
    tags: ["Live dashboards", "KPI packs", "BI tooling"],
    color: "#6366f1",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    tagBg: "bg-indigo-100",
    tagText: "text-indigo-700",
    dot: "bg-indigo-500",
  },
];

const AJAX_PRODUCTS = [
  { name: "Work Management", icon: "📋", desc: "Projects, tasks, and OKRs — unified.", color: "indigo" },
  { name: "CRM", icon: "🤝", desc: "Pipeline and relationship intelligence.", color: "emerald" },
  { name: "Campaigns", icon: "📣", desc: "Email, SMS, and outreach at scale.", color: "amber" },
  { name: "Services", icon: "🔧", desc: "Ticketing, helpdesk, and SLA tracking.", color: "sky" },
  { name: "HOS Portal", icon: "👥", desc: "Human outsourced services portal.", color: "violet" },
  { name: "AI Suite", icon: "🤖", desc: "All IntelliDesq™ AI agents in one hub.", color: "rose" },
  { name: "Integrations", icon: "⚡", desc: "Connect your entire tool stack.", color: "teal" },
  { name: "Automations", icon: "🔄", desc: "Trigger-based workflows, zero code.", color: "orange" },
];

const productColorMap = {
  indigo: { card: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100", icon: "bg-indigo-100", text: "text-indigo-600", link: "text-indigo-500" },
  emerald: { card: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100", icon: "bg-emerald-100", text: "text-emerald-600", link: "text-emerald-500" },
  amber: { card: "bg-amber-50 border-amber-200 hover:bg-amber-100", icon: "bg-amber-100", text: "text-amber-600", link: "text-amber-500" },
  sky: { card: "bg-sky-50 border-sky-200 hover:bg-sky-100", icon: "bg-sky-100", text: "text-sky-600", link: "text-sky-500" },
  violet: { card: "bg-violet-50 border-violet-200 hover:bg-violet-100", icon: "bg-violet-100", text: "text-violet-600", link: "text-violet-500" },
  rose: { card: "bg-rose-50 border-rose-200 hover:bg-rose-100", icon: "bg-rose-100", text: "text-rose-600", link: "text-rose-500" },
  teal: { card: "bg-teal-50 border-teal-200 hover:bg-teal-100", icon: "bg-teal-100", text: "text-teal-600", link: "text-teal-500" },
  orange: { card: "bg-orange-50 border-orange-200 hover:bg-orange-100", icon: "bg-orange-100", text: "text-orange-600", link: "text-orange-500" },
};

const FAQS = [
  {
    q: "How quickly can HOS teams be deployed?",
    a: "Most roles are active within 5–10 business days. We handle recruiting, background checks, tool access, and brand training before your team goes live.",
  },
  {
    q: "Can I combine IntelliDesq™ AI agents with HOS teams?",
    a: "Absolutely — this is our most popular configuration. AI handles tier-1 volume and automation, while HOS teams manage escalations and complex interactions.",
  },
  {
    q: "What languages do your agents support?",
    a: "Native coverage in English, Spanish, French, and Arabic. Additional languages available on request for enterprise accounts.",
  },
  {
    q: "How does pricing work for HOS teams?",
    a: "HOS is priced per seat, per month. You pay only for active team members with no minimum commitment beyond the first 30 days.",
  },
  {
    q: "Are the AI agents trained on my brand?",
    a: "Yes. Every IntelliDesq™ deployment includes a brand voice onboarding, knowledge base ingestion, and persona calibration before going live.",
  },
];

// ── HOOKS ─────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function useCounter(end, active) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const inc = end / (duration / step);
    const t = setInterval(() => {
      start += inc;
      if (start >= end) { setVal(end); clearInterval(t); }
      else setVal(Math.floor(start));
    }, step);
    return () => clearInterval(t);
  }, [end, active]);
  return val;
}

// ── SUB COMPONENTS ────────────────────────────────────────────────────────────

function Reveal({ children, delay = 0, className = "" }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(28px)",
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function StatCard({ value, suffix, label, active }) {
  const count = useCounter(value, active);
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-7 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="text-4xl font-black text-slate-900 tracking-tight leading-none">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-slate-500 mt-2 font-medium">{label}</div>
    </div>
  );
}

function ServiceCard({ s, index }) {
  return (
    <Reveal delay={index * 0.055}>
      <div className={`group border rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default bg-white ${s.border}`}>
        <div className="text-3xl mb-4">{s.icon}</div>
        <div className="text-base font-bold text-slate-900 mb-1 tracking-tight">{s.title}</div>
        <div className={`text-xs font-semibold mb-3 uppercase tracking-widest`} style={{ color: s.color }}>{s.tagline}</div>
        <p className="text-sm text-slate-500 leading-relaxed mb-4 font-normal">{s.desc}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {s.tags.map((t) => (
            <span key={t} className={`text-xs px-2.5 py-1 rounded-full font-semibold ${s.tagBg} ${s.tagText}`}>{t}</span>
          ))}
        </div>
        <button className={`text-xs font-bold tracking-wide transition-opacity opacity-0 group-hover:opacity-100`} style={{ color: s.color }}>
          Learn more →
        </button>
      </div>
    </Reveal>
  );
}

// ── SECTIONS ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative bg-slate-950 overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(ellipse, #6366f1 0%, transparent 65%)" }} />
        <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #38bdf8 0%, transparent 65%)" }} />
        <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #f43f5e 0%, transparent 65%)" }} />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24 text-center">
        {/* Badge */}
        <Reveal delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/40 bg-indigo-500/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
            <span className="text-xs font-semibold text-slate-300 tracking-widest uppercase">AJAX Global · Services 2025</span>
          </div>
        </Reveal>

        <Reveal delay={0.07}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.02] mb-6">
            AI-powered operations.{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
              Human-grade service.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="text-lg text-slate-400 font-light leading-relaxed max-w-xl mx-auto mb-10">
            IntelliDesq™ AI agents handle the automation. Our HOS teams handle the relationship. Together, they make your business unstoppable.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex gap-3 justify-center flex-wrap">
            <button className="px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-colors tracking-tight shadow-lg shadow-indigo-500/25">
              Explore services →
            </button>
            <button className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white/80 font-semibold text-sm border border-white/15 transition-colors">
              Request a demo
            </button>
          </div>
        </Reveal>

        {/* Trusted strip */}
        {/* <Reveal delay={0.28}>
          <div className="mt-16 pt-8 border-t border-white/8">
            <p className="text-xs font-semibold text-slate-600 tracking-widest uppercase mb-5">Trusted by</p>
            <div className="flex gap-8 justify-center flex-wrap opacity-35">
              {["Coca-Cola", "Nasdaq", "Lionsgate", "Carrefour", "Citizens Bank", "Indosuez"].map((c) => (
                <span key={c} className="text-xs font-black text-white tracking-widest uppercase">{c}</span>
              ))}
            </div>
          </div>
        </Reveal> */}
      </div>

      {/* Wave transition to light */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-slate-50" /> */}
    </section>
  );
}

function Stats() {
  const { ref, visible } = useInView();
  return (
    <section ref={ref} className="bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s) => <StatCard key={s.label} {...s} active={visible} />)}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const [tab, setTab] = useState("intellidesq");
  const services = tab === "intellidesq" ? INTELLIDESQ_SERVICES : HOS_SERVICES;

  return (
    <section className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase block mb-3">Services</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-4">
              Every capability,{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">covered</span>
            </h2>
            <p className="text-base text-slate-500 font-light max-w-md mx-auto mb-8">
              Two complementary service lines — purpose-built AI and exceptional human teams.
            </p>

            {/* Tab switcher */}
            <div className="inline-flex bg-slate-100 rounded-full p-1 border border-slate-200">
              {[
                { id: "intellidesq", label: "IntelliDesq™ AI" },
                { id: "hos", label: "HOS Teams" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-250 ${
                    tab === t.id
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((s, i) => <ServiceCard key={s.id} s={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function CombinedPower() {
  const intelliDesqServices = [
    {
      id: 1,
      title: "AI Agents",
      tagline: "Autonomous workflows & task execution",
      icon: Bot,
    },
    {
      id: 2,
      title: "AI Automation",
      tagline: "Operational process automation",
      icon: Workflow,
    },
    {
      id: 3,
      title: "Predictive Intelligence",
      tagline: "Insights powered by machine learning",
      icon: BrainCircuit,
    },
    {
      id: 4,
      title: "Quality & Compliance",
      tagline: "Monitoring, validation & control",
      icon: ShieldCheck,
    },
    {
      id: 5,
      title: "Analytics Dashboards",
      tagline: "Real-time business visibility",
      icon: BarChart3,
    },
  ];

  const hosServices = [
    {
      id: 1,
      title: "Customer Support",
      tagline: "24/7 customer engagement teams",
      icon: Headphones,
    },
    {
      id: 2,
      title: "Operations Assistants",
      tagline: "Daily operations & coordination",
      icon: ClipboardCheck,
    },
    {
      id: 3,
      title: "Dispatch Specialists",
      tagline: "Logistics & route coordination",
      icon: Truck,
    },
    {
      id: 4,
      title: "Virtual Professionals",
      tagline: "Dedicated remote workforce",
      icon: Users,
    },
    {
      id: 5,
      title: "Operations Managers",
      tagline: "Leadership & workflow oversight",
      icon: UserCog,
    },
  ];

  return (
    <section className="bg-slate-950 py-24 sm:py-28 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[32rem] h-[32rem] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,.35) 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,.35) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-xs uppercase tracking-[0.2em] text-slate-300 font-semibold">
                AI + Human Operations
              </span>
            </div>

            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tight text-white leading-none">
              The{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                combined power
              </span>
            </h2>

            <p className="text-slate-400 font-light text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
              AI systems and elite remote professionals working together —
              creating faster, smarter, and infinitely scalable operations.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {/* IntelliDesq */}
          <Reveal delay={0}>
            <div className="relative overflow-hidden rounded-[2rem] border border-sky-500/15 bg-white/[0.04] backdrop-blur-xl p-8 lg:p-10">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-52 h-52 bg-sky-500/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 mb-7">
                  <BrainCircuit className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-bold text-sky-300 tracking-[0.2em] uppercase">
                    IntelliDesq™
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white tracking-tight leading-tight mb-4">
                  AI systems built for{" "}
                  <span className="text-sky-400">
                    automation & intelligence
                  </span>
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed font-light mb-8 max-w-lg">
                  AI agents, intelligent workflows, predictive systems, and
                  scalable digital operations engineered to work 24/7.
                </p>

                <div className="space-y-3">
                  {intelliDesqServices.map((s) => {
                    const Icon = s.icon;

                    return (
                      <div
                        key={s.id}
                        className="
                          group
                          flex items-center justify-between
                          rounded-2xl
                          border border-white/5
                          bg-white/[0.03]
                          px-5 py-4
                          transition-all duration-300
                          hover:bg-white/[0.06]
                          hover:border-sky-500/20
                        "
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-sky-400" />
                          </div>

                          <div>
                            <div className="text-sm font-semibold text-white">
                              {s.title}
                            </div>

                            <div className="text-xs text-slate-500 font-light">
                              {s.tagline}
                            </div>
                          </div>
                        </div>

                        <ArrowUpRight className="w-4 h-4 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* HOS */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[2rem] border border-indigo-500/15 bg-white/[0.04] backdrop-blur-xl p-8 lg:p-10">
              {/* Glow */}
              <div className="absolute bottom-0 left-0 w-52 h-52 bg-indigo-500/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-7">
                  <Briefcase className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-bold text-indigo-300 tracking-[0.2em] uppercase">
                    HOS
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white tracking-tight leading-tight mb-4">
                  Elite remote talent for{" "}
                  <span className="text-indigo-400">
                    scalable operations
                  </span>
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed font-light mb-8 max-w-lg">
                  Dedicated professionals embedded into your workflows —
                  trained on your tools, systems, standards, and operations.
                </p>

                <div className="space-y-3">
                  {hosServices.map((s) => {
                    const Icon = s.icon;

                    return (
                      <div
                        key={s.id}
                        className="
                          group
                          flex items-center justify-between
                          rounded-2xl
                          border border-white/5
                          bg-white/[0.03]
                          px-5 py-4
                          transition-all duration-300
                          hover:bg-white/[0.06]
                          hover:border-indigo-500/20
                        "
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-indigo-400" />
                          </div>

                          <div>
                            <div className="text-sm font-semibold text-white">
                              {s.title}
                            </div>

                            <div className="text-xs text-slate-500 font-light">
                              {s.tagline}
                            </div>
                          </div>
                        </div>

                        <ArrowUpRight className="w-4 h-4 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AjaxProducts() {
  return (
    <section className="bg-slate-50 py-20 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase block mb-3">Ajax Products</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-4">
              One platform.{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">Every tool.</span>
            </h2>
            <p className="text-base text-slate-500 font-light max-w-sm mx-auto">
              All our software products unified under a single workspace — built to work together.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {AJAX_PRODUCTS.map((p, i) => {
            const c = productColorMap[p.color];
            return (
              <Reveal key={p.name} delay={i * 0.05}>
                <div className={`border rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default ${c.card}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4 ${c.icon}`}>{p.icon}</div>
                  <div className="text-sm font-bold text-slate-900 mb-1.5">{p.name}</div>
                  <div className="text-xs text-slate-500 font-normal leading-relaxed mb-3">{p.desc}</div>
                  <div className={`text-xs font-bold ${c.link}`}>Explore →</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DifferenceSection() {
  const highlights = [
    { stat: "98%", label: "Client retention", icon: "💎", color: "indigo" },
    { stat: "60s", label: "Avg. first response", icon: "⚡", color: "emerald" },
    { stat: "5–10", label: "Days to go live", icon: "🚀", color: "sky" },
    { stat: "24/7", label: "Uptime guarantee", icon: "🛡️", color: "amber" },
  ];

  const colorMap = {
    indigo: "text-indigo-600 bg-indigo-50 border-indigo-200",
    emerald: "text-emerald-600 bg-emerald-50 border-emerald-200",
    sky: "text-sky-600 bg-sky-50 border-sky-200",
    amber: "text-amber-600 bg-amber-50 border-amber-200",
  };

  return (
    <section className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter text-center mb-12">
            The AJAX Global{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">difference</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {highlights.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.08}>
              <div className={`border rounded-2xl p-6 text-center ${colorMap[it.color]}`}>
                <div className="text-3xl mb-3">{it.icon}</div>
                <div className={`text-3xl font-black tracking-tight leading-none mb-2 ${colorMap[it.color].split(" ")[0]}`}>{it.stat}</div>
                <div className="text-xs text-slate-500 font-medium">{it.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Testimonial */}
        <Reveal delay={0.1}>
          <div className="bg-gradient-to-br from-indigo-600 to-sky-600 rounded-3xl p-8 lg:p-10 flex gap-8 flex-wrap items-start">
            <div className="flex-1 min-w-[240px]">
              <div className="text-4xl text-white/30 font-serif leading-none mb-4">"</div>
              <p className="text-lg text-white/90 italic leading-relaxed font-light mb-6">
                AJAX's HOS team integrated within a week and the AI agents were live in three days. We cut operational costs by 18% in the first month and our customer CSAT jumped 22 points.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold text-white">JT</div>
                <div>
                  <div className="text-sm font-bold text-white">James Thornton</div>
                  <div className="text-xs text-white/60">VP of Procurement, NorthEdge</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 min-w-[160px]">
              {[{ n: "18%", l: "Cost reduction" }, { n: "+22pts", l: "CSAT improvement" }, { n: "3 days", l: "AI go-live" }].map((m) => (
                <div key={m.l} className="bg-white/15 rounded-xl px-4 py-3 backdrop-blur-sm">
                  <div className="text-xl font-black text-white tracking-tight">{m.n}</div>
                  <div className="text-xs text-white/60">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className="bg-slate-50 py-20 border-t border-slate-100">
      <div className="max-w-2xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter text-center mb-12">
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">questions</span>
          </h2>
        </Reveal>
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className={`bg-white border rounded-2xl overflow-hidden transition-colors duration-200 ${open === i ? "border-indigo-300" : "border-slate-200"}`}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center gap-4 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-semibold text-slate-900 leading-snug">{faq.q}</span>
                  <span className={`text-lg text-slate-400 flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-350 ease-out ${open === i ? "max-h-48" : "max-h-0"}`}>
                  <p className="px-6 pb-5 text-sm text-slate-500 leading-relaxed font-normal">{faq.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}



// ── ROOT ──────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <div className="font-sans antialiased">
      
      <Hero />
      <Stats />
      <ServicesSection />
      <CombinedPower />
      <AjaxProducts />
      <DifferenceSection />
      <FAQSection />
    </div>
  );
}