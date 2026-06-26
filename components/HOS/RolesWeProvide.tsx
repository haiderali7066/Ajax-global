"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Phone, TrendingUp, UserCheck, ShoppingCart, Home, Lock,
  BarChart3, Users, Target, RefreshCw, MessageSquare, Database,
  ArrowUpRight, X, ArrowRight,
} from "lucide-react";
import { fadeUp } from "./shared";

/* ─── Types ──────────────────────────────────────────── */
interface Role {
  icon: React.ElementType;
  slug: string;
  title: string;
  desc: string;
  color: string;
  details: {
    tagline: string;
    body: string;
    bullets: string[];
  };
}

/* ─── Animation variants ─────────────────────────────── */
const overlayVariants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.2 } },
  exit:   { opacity: 0, transition: { duration: 0.18 } },
};

/* Desktop: scale up from centre. Mobile: slide up from bottom */
const panelDesktopVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show:   { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, y: 24, scale: 0.97, transition: { duration: 0.22, ease: [0.55, 0, 1, 0.45] } },
};
const panelMobileVariants = {
  hidden: { opacity: 0, y: "100%" },
  show:   { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, y: "100%", transition: { duration: 0.26, ease: [0.55, 0, 1, 0.45] } },
};

/* ─── Data ───────────────────────────────────────────── */
const roles: Role[] = [
  {
    icon: Phone, slug: "customer-support", title: "Customer Support", color: "#7c3aed",
    desc: "Brand-trained agents, zero downtime",
    details: {
      tagline: "Your brand voice, delivered 24/7 — without a single missed call.",
      body: "We deploy rigorously trained support agents who learn your brand inside out. From inbound calls to live chat and email triage, every interaction is handled with the tone, knowledge, and urgency your customers expect — day or night.",
      bullets: ["Inbound call handling & live chat coverage", "Brand-script training & QA monitoring", "Ticket management & escalation workflows", "24/7 availability across time zones"],
    },
  },
  {
    icon: TrendingUp, slug: "sales-lead-generation", title: "Sales & Lead Generation", color: "#2563eb",
    desc: "Closers who treat every lead as sacred",
    details: {
      tagline: "Qualified pipeline, built and worked by people who close.",
      body: "Our sales teams are trained to prospect, qualify, and convert — not just dial. Whether you need outbound cold callers, inbound closers, or full-funnel SDRs, we supply the people and the process to keep your revenue engine turning.",
      bullets: ["Outbound prospecting & cold outreach", "Inbound lead qualification & follow-up", "CRM data entry, hygiene & pipeline reporting", "Sales script development & objection handling"],
    },
  },
  {
    icon: UserCheck, slug: "virtual-admin-assistants", title: "Virtual & Admin Assistants", color: "#059669",
    desc: "Executive support and admin excellence",
    details: {
      tagline: "The reliable right hand your leadership team has been missing.",
      body: "From calendar management to document prep and vendor coordination, our virtual assistants handle the operational detail so your senior team can focus on what moves the needle. Fully remote, fully accountable.",
      bullets: ["Calendar, inbox & travel management", "Document preparation & data entry", "Vendor communication & purchase coordination", "Research, reporting & presentation support"],
    },
  },
  {
    icon: ShoppingCart, slug: "ecommerce-management", title: "E-Commerce Management", color: "#d97706",
    desc: "Shopify, WooCommerce, Amazon — 24/7",
    details: {
      tagline: "Every order, return, and listing handled — around the clock.",
      body: "We provide dedicated e-commerce specialists who manage the full operational lifecycle of your online store. Order fulfilment, customer queries, inventory updates, and platform maintenance — covered without interruption.",
      bullets: ["Order processing, tracking & returns handling", "Product listing creation & optimisation", "Customer inquiry resolution across channels", "Inventory monitoring & supplier coordination"],
    },
  },
  {
    icon: Home, slug: "property-management", title: "Property Management", color: "#dc2626",
    desc: "Tenant care, maintenance, rent coordination",
    details: {
      tagline: "Your properties, managed with the care of an owner.",
      body: "Our property management teams handle the communications and coordination that keep rental portfolios running smoothly — from tenant onboarding and maintenance requests to rent follow-up and compliance documentation.",
      bullets: ["Tenant onboarding, communication & renewals", "Maintenance request intake & contractor dispatch", "Rent reminder campaigns & arrears follow-up", "Lease documentation & compliance tracking"],
    },
  },
  {
    icon: Lock, slug: "it-cybersecurity", title: "IT & Cybersecurity", color: "#475569",
    desc: "Technical teams and MSP-level operations",
    details: {
      tagline: "Skilled technical talent — without the overhead of full-time hires.",
      body: "We staff IT support desks, network operations roles, and cybersecurity monitoring functions with qualified remote professionals. Whether you need Level 1–3 helpdesk coverage or a dedicated security analyst, we deliver the technical bench you need.",
      bullets: ["L1–L3 IT helpdesk & remote support staffing", "Network monitoring & incident response", "Security operations centre (SOC) support", "Patch management, audits & compliance reporting"],
    },
  },
  {
    icon: BarChart3, slug: "seo-social-media", title: "SEO & Social Media", color: "#7c3aed",
    desc: "Visibility, content, and digital presence",
    details: {
      tagline: "Consistent content and search presence — without burning your in-house team.",
      body: "Our digital marketing specialists manage SEO execution and social media operations at scale. From on-page optimisation to daily social posting and community engagement, we handle the volume work that compounds your online visibility.",
      bullets: ["On-page & technical SEO implementation", "Content creation, scheduling & publishing", "Community management & comment moderation", "Analytics reporting & performance reviews"],
    },
  },
  {
    icon: Users, slug: "custom-remote-teams", title: "Custom Remote Teams", color: "#2563eb",
    desc: "Fully bespoke for your exact industry",
    details: {
      tagline: "Built from scratch around your workflows, tools, and standards.",
      body: "When an off-the-shelf role doesn't fit your operation, we build the team from the ground up. We recruit, train, and manage remote professionals who integrate directly into your processes — as though they were in your building.",
      bullets: ["Role-specific recruitment & vetting", "Custom onboarding & process documentation", "Dedicated team leads & performance management", "Scalable headcount with flexible contracts"],
    },
  },
  {
    icon: Target, slug: "client-retention", title: "Client Retention", color: "#ec4899",
    desc: "Proactive relationship defence & loyalty",
    details: {
      tagline: "Keep the clients you've already won — systematically.",
      body: "Retaining revenue is cheaper than acquiring it. Our retention specialists run proactive outreach programmes, handle at-risk account management, and build the touchpoints that turn one-time buyers into long-term clients.",
      bullets: ["At-risk account identification & outreach", "Post-purchase follow-up & satisfaction calls", "Loyalty and re-engagement campaign management", "Churn analysis & retention reporting"],
    },
  },
  {
    icon: RefreshCw, slug: "scheduling-dispatch", title: "Scheduling & Dispatch", color: "#0ea5e9",
    desc: "60-second rule — every lead captured",
    details: {
      tagline: "No lead sits cold. No appointment slips through.",
      body: "Our scheduling and dispatch teams operate with a 60-second response standard. We manage inbound booking flows, coordinate field team dispatch, and maintain real-time calendar accuracy — so your operations run without gaps.",
      bullets: ["Inbound appointment booking & confirmation", "Field team dispatch & route coordination", "Calendar management & real-time updates", "Reminder campaigns & no-show follow-up"],
    },
  },
  {
    icon: MessageSquare, slug: "multilingual-support", title: "Multilingual Support", color: "#14b8a6",
    desc: "English, Spanish, French, Arabic coverage",
    details: {
      tagline: "Serve your global customers in the language they think in.",
      body: "We staff multilingual support agents fluent in English, Spanish, French, and Arabic — covering the four languages that reach the majority of your international customer base. Native-level fluency, not translation-grade responses.",
      bullets: ["Native-fluency agents across four languages", "Unified ticketing with language-based routing", "Cultural nuance training per market", "Scalable coverage for seasonal demand spikes"],
    },
  },
  {
    icon: Database, slug: "data-reporting", title: "Data & Reporting", color: "#8b5cf6",
    desc: "KPI dashboards and performance analytics",
    details: {
      tagline: "The numbers your leadership needs — on time, every time.",
      body: "Our data and reporting specialists handle the collection, cleaning, and presentation of your operational metrics. From daily KPI dashboards to weekly executive summaries, we make sure your team always has visibility on what matters.",
      bullets: ["KPI dashboard setup & daily maintenance", "Data cleaning, entry & quality assurance", "Weekly & monthly performance report preparation", "Custom reporting to stakeholder specifications"],
    },
  },
];

/* ─── Component ──────────────────────────────────────── */
export default function RolesWeProvide() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState<Role | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  /* Detect mobile */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* Close on Escape */
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setActive(null);
  }, []);

  useEffect(() => {
    if (active) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [active, handleKey]);

  const panelVariants = isMobile ? panelMobileVariants : panelDesktopVariants;

  return (
    <>
      <section className="py-12 sm:py-20" style={{ background: "#f8f7ff" }} ref={ref}>
        <div className="max-w-6xl px-4 sm:px-6 mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mb-10 sm:mb-12 text-center"
          >
            <h2
              className="text-[clamp(1.75rem,4.5vw,3.5rem)] font-light text-gray-900"
              style={{ letterSpacing: "-0.02em" }}
            >
              Roles we <span className="font-extrabold text-red-700">provide</span>
            </h2>
            <p className="max-w-sm mx-auto mt-3 text-sm font-light text-gray-400">
              Every role covered — specialized or fully custom.
            </p>
          </motion.div>

          {/* Grid — 2 cols mobile, 3 tablet, 4 desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {roles.map((role, i) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.slug}
                  variants={fadeUp}
                  custom={i % 4}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  whileHover={{ y: -4 }}
                >
                  <button
                    onClick={() => setActive(role)}
                    className="relative flex flex-col h-full w-full p-3.5 sm:p-5 overflow-hidden transition-all duration-300 bg-white border cursor-pointer group rounded-2xl border-gray-200/60 hover:border-indigo-200 hover:shadow-lg text-left"
                  >
                    {/* Hover gradient */}
                    <div
                      className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none group-hover:opacity-100 rounded-2xl"
                      style={{ background: `linear-gradient(135deg, ${role.color}06, transparent)` }}
                    />

                    {/* Icon */}
                    <div
                      className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 mb-2.5 sm:mb-4 transition-transform duration-300 rounded-xl group-hover:scale-110 shrink-0"
                      style={{ background: `${role.color}10`, border: `1.5px solid ${role.color}20` }}
                    >
                      <Icon style={{ width: 15, height: 15, color: role.color }} className="sm:!w-[18px] sm:!h-[18px]" />
                    </div>

                    {/* Title */}
                    <h3 className="relative mb-1 text-[11px] sm:text-sm font-semibold text-gray-800 transition-colors group-hover:text-indigo-700 leading-snug">
                      {role.title}
                    </h3>

                    {/* Desc */}
                    <p className="relative flex-1 text-[10px] sm:text-xs font-light leading-relaxed text-gray-400">
                      {role.desc}
                    </p>

                    {/* Learn more — visible on hover (desktop) or always on mobile */}
                    <div className="relative flex items-center gap-1 mt-2 sm:mt-3 text-indigo-500 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                      <span className="text-[10px] sm:text-xs font-medium">Learn more</span>
                      <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Modal ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {active && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              variants={overlayVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              onClick={() => setActive(null)}
              className="fixed inset-0 z-[99]"
              style={{ background: "rgba(10, 10, 20, 0.55)", backdropFilter: "blur(6px)" }}
            />

            {/*
              ── DESKTOP: flex-centered shell (transform-free centering) ──
              ── MOBILE:  pinned to bottom, full width, slides up         ──
            */}
            {isMobile ? (
              /* Mobile — bottom sheet */
              <div className="fixed inset-x-0 bottom-0 z-[100]" onClick={() => setActive(null)}>
                <motion.div
                  key="panel-mobile"
                  variants={panelVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  onClick={(e) => e.stopPropagation()}
                  className="relative bg-white w-full overflow-hidden"
                  style={{
                    borderRadius: "24px 24px 0 0",
                    maxHeight: "90dvh",
                    boxShadow: "0 -8px 40px rgba(79, 70, 229, 0.15), 0 0 0 1px #e5e7eb",
                  }}
                >
                  {/* Drag handle */}
                  <div className="flex justify-center pt-3 pb-1">
                    <div className="w-10 h-1 rounded-full bg-gray-200" />
                  </div>

                  {/* Coloured bar */}
                  <div
                    className="h-1 w-full mx-4"
                    style={{
                      background: `linear-gradient(90deg, ${active.color}, ${active.color}70)`,
                      width: "calc(100% - 32px)",
                      borderRadius: 4,
                      marginBottom: 0,
                    }}
                  />

                  {/* Scrollable content */}
                  <div className="overflow-y-auto" style={{ maxHeight: "calc(90dvh - 48px)" }}>
                    <div className="p-5 pb-8">
                      {/* Close */}
                      <button
                        onClick={() => setActive(null)}
                        className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-400"
                        aria-label="Close"
                      >
                        <X style={{ width: 14, height: 14 }} />
                      </button>

                      {/* Icon + title */}
                      <div className="flex items-start gap-3 mt-3 mb-4 pr-10">
                        <div
                          className="flex items-center justify-center rounded-xl shrink-0"
                          style={{ width: 44, height: 44, background: `${active.color}10`, border: `1.5px solid ${active.color}20` }}
                        >
                          <active.icon style={{ width: 20, height: 20, color: active.color }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold leading-tight text-gray-900" style={{ letterSpacing: "-0.02em" }}>
                            {active.title}
                          </h3>
                          <p className="text-xs mt-0.5 font-semibold" style={{ color: active.color }}>
                            {active.details.tagline}
                          </p>
                        </div>
                      </div>

                      <div className="h-px w-full mb-4 bg-gray-100" />

                      {/* Body */}
                      <p className="text-sm leading-[1.8] text-gray-500 mb-4">
                        {active.details.body}
                      </p>

                      {/* Bullets */}
                      <ul className="space-y-2.5 mb-5">
                        {active.details.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span
                              className="mt-[3px] flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                              style={{ background: `${active.color}12`, border: `1px solid ${active.color}25` }}
                            >
                              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: active.color }} />
                            </span>
                            <span className="text-sm text-gray-500">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="h-px w-full mb-5 bg-gray-100" />

                      {/* CTA */}
                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold text-white"
                        style={{ background: active.color, boxShadow: `0 4px 16px ${active.color}30`, textDecoration: "none" }}
                        onClick={() => setActive(null)}
                      >
                        Get started
                        <ArrowRight style={{ width: 15, height: 15 }} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : (
              /* Desktop — centered dialog */
              <div
                className="fixed inset-0 z-[100] flex items-center justify-center p-6"
                onClick={() => setActive(null)}
              >
                <motion.div
                  key="panel-desktop"
                  variants={panelVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  onClick={(e) => e.stopPropagation()}
                  className="relative rounded-3xl overflow-hidden w-full bg-white"
                  style={{
                    maxWidth: 760,
                    maxHeight: "calc(100dvh - 64px)",
                    overflowY: "auto",
                    boxShadow: "0 40px 100px rgba(79, 70, 229, 0.15), 0 0 0 1px #e5e7eb",
                  }}
                >
                  {/* Coloured top bar */}
                  <div
                    className="h-1.5 w-full sticky top-0 z-10"
                    style={{ background: `linear-gradient(90deg, ${active.color}, ${active.color}70)` }}
                  />

                  <div className="p-8 lg:p-10">
                    {/* Close */}
                    <button
                      onClick={() => setActive(null)}
                      className="absolute top-5 right-5 flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-400 transition-all duration-200 hover:bg-gray-200 hover:scale-110"
                      aria-label="Close"
                    >
                      <X style={{ width: 15, height: 15 }} />
                    </button>

                    {/* Icon + title */}
                    <div className="flex items-start gap-4 mb-6 pr-12">
                      <div
                        className="flex items-center justify-center rounded-2xl shrink-0"
                        style={{ width: 52, height: 52, background: `${active.color}10`, border: `1.5px solid ${active.color}20` }}
                      >
                        <active.icon style={{ width: 24, height: 24, color: active.color }} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold leading-tight text-gray-900" style={{ letterSpacing: "-0.02em" }}>
                          {active.title}
                        </h3>
                        <p className="text-sm mt-1 font-semibold" style={{ color: active.color }}>
                          {active.details.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="h-px w-full mb-6 bg-gray-100" />

                    {/* Body + bullets — 2 col */}
                    <div className="grid grid-cols-2 gap-8">
                      <p className="text-sm leading-[1.8] text-gray-500">
                        {active.details.body}
                      </p>
                      <ul className="space-y-3">
                        {active.details.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span
                              className="mt-[3px] flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                              style={{ background: `${active.color}12`, border: `1px solid ${active.color}25` }}
                            >
                              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: active.color }} />
                            </span>
                            <span className="text-sm text-gray-500">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="h-px w-full mt-6 mb-6 bg-gray-100" />

                    {/* CTA */}
                    <div className="flex items-center gap-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                        style={{ background: active.color, boxShadow: `0 6px 20px ${active.color}30`, textDecoration: "none" }}
                        onClick={() => setActive(null)}
                      >
                        Get started
                        <ArrowRight style={{ width: 15, height: 15 }} />
                      </Link>
                      <button
                        onClick={() => setActive(null)}
                        className="text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-gray-700"
                      >
                        Back to roles
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </>
  );
}