"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Cpu, Palette, Code2, Smartphone, Fingerprint, Map,
  Search, BarChart3, TrendingUp, Server, Database, Layers,
  ArrowUpRight, X, ArrowRight,
} from "lucide-react";

/* ─── Types ──────────────────────────────────────────── */
interface Role {
  icon: React.ElementType;
  slug: string;
  title: string;
  desc: string;
  color: string;
  glow: string;
  details: {
    tagline: string;
    body: string;
    bullets: string[];
  };
}

/* ─── Animation variants ─────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const overlayVariants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.2 } },
  exit:   { opacity: 0, transition: { duration: 0.18 } },
};

const panelVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, y: 24, scale: 0.97, transition: { duration: 0.22, ease: [0.55, 0, 1, 0.45] } },
};

/* ─── Data ───────────────────────────────────────────── */
const roles: Role[] = [
  {
    icon: Cpu, slug: "ai-automation", title: "AI & Automation", color: "#7c3aed", glow: "#7c3aed14",
    desc: "Intelligent workflows, zero manual overhead",
    details: {
      tagline: "Let AI handle the repetition — your team handles the thinking.",
      body: "We design and deploy end-to-end AI workflows that eliminate bottlenecks, reduce human error, and free your team for higher-value work. From LLM integrations to robotic process automation, every solution is purpose-built for your stack.",
      bullets: ["Custom LLM pipelines & prompt engineering", "Process automation & RPA deployments", "AI-assisted decision support systems", "Ongoing monitoring & model fine-tuning"],
    },
  },
  {
    icon: Palette, slug: "ui-ux-design", title: "UI / UX Design", color: "#ec4899", glow: "#ec489914",
    desc: "Interfaces that convert and delight",
    details: {
      tagline: "Design that earns trust before a word is read.",
      body: "We craft digital experiences from first principles — research, information architecture, visual design, and interaction detail — so every interface feels inevitable rather than assembled. The result is a product users understand instantly and return to willingly.",
      bullets: ["User research & journey mapping", "Wireframing & interactive prototyping", "Design systems & component libraries", "Usability testing & iterative refinement"],
    },
  },
  {
    icon: Code2, slug: "web-development", title: "Web Development", color: "#2563eb", glow: "#2563eb14",
    desc: "Fast, scalable, and built to last",
    details: {
      tagline: "Production-grade code that ships on time and scales without drama.",
      body: "From marketing sites to full-stack web applications, we build with modern frameworks and engineering discipline — clean architecture, CI/CD pipelines, and performance budgets baked in from day one.",
      bullets: ["Next.js / React / TypeScript applications", "REST & GraphQL API development", "Performance optimisation & Core Web Vitals", "Accessibility-first, SEO-ready markup"],
    },
  },
  {
    icon: Smartphone, slug: "mobile-app-development", title: "Mobile App Development", color: "#059669", glow: "#05966914",
    desc: "iOS & Android, shipped on time",
    details: {
      tagline: "Apps your users will actually keep installed.",
      body: "We build native and cross-platform mobile apps that prioritise feel, reliability, and retention. Whether it's consumer-facing or enterprise-internal, every decision is made with the end user's daily habits in mind.",
      bullets: ["React Native & Expo cross-platform builds", "Native iOS (Swift) & Android (Kotlin)", "App Store & Play Store launch support", "Push notifications, analytics & crash reporting"],
    },
  },
  {
    icon: Fingerprint, slug: "brand-identity", title: "Brand Identity", color: "#d97706", glow: "#d9770614",
    desc: "Brands built to be remembered",
    details: {
      tagline: "The look people recognise before they read your name.",
      body: "We develop brand identities that hold up at every scale — from a favicon to a billboard. Our process combines strategic positioning with distinctive visual craft to produce marks, systems, and guidelines your team can confidently apply.",
      bullets: ["Logo design & wordmark development", "Colour, type & motion systems", "Brand guidelines & asset libraries", "Rebranding & brand evolution strategy"],
    },
  },
  {
    icon: Map, slug: "product-strategy", title: "Product Strategy", color: "#0ea5e9", glow: "#0ea5e914",
    desc: "Roadmaps that align teams and ship value",
    details: {
      tagline: "Clarity on what to build, why, and in what order.",
      body: "Great products come from ruthless prioritisation, not bigger backlogs. We work with founders and product teams to define vision, identify the highest-leverage opportunities, and build roadmaps that keep engineering and business goals in sync.",
      bullets: ["Product discovery & opportunity mapping", "OKR & roadmap facilitation", "Competitive & market analysis", "Go-to-market strategy & launch planning"],
    },
  },
  {
    icon: Search, slug: "seo-content", title: "SEO & Content", color: "#14b8a6", glow: "#14b8a614",
    desc: "Organic growth that compounds over time",
    details: {
      tagline: "Content that ranks, earns trust, and converts — month after month.",
      body: "We combine technical SEO rigour with editorial strategy to build organic channels that compound. No keyword-stuffed filler — just useful content mapped to genuine search intent and backed by solid site architecture.",
      bullets: ["Technical SEO audits & implementation", "Keyword research & content strategy", "Long-form editorial & thought-leadership", "Link acquisition & authority building"],
    },
  },
  {
    icon: BarChart3, slug: "data-analytics", title: "Data & Analytics", color: "#8b5cf6", glow: "#8b5cf614",
    desc: "Turn your data into your unfair advantage",
    details: {
      tagline: "Dashboards people actually open every morning.",
      body: "We design analytics systems that surface the metrics that matter — not everything measurable. From data warehouse setup to executive dashboards, every layer is built for clarity, speed, and the decisions it needs to support.",
      bullets: ["Data warehouse design & ETL pipelines", "BI dashboards (Looker, Metabase, custom)", "KPI frameworks & metrics definition", "Predictive modelling & forecasting"],
    },
  },
  {
    icon: TrendingUp, slug: "growth-marketing", title: "Growth Marketing", color: "#dc2626", glow: "#dc262614",
    desc: "Paid and organic engines, built to scale",
    details: {
      tagline: "Growth systems that outlast any single campaign.",
      body: "We build growth engines that combine paid acquisition, conversion optimisation, and retention into one coherent machine. Every experiment is measured against real revenue impact, not vanity metrics.",
      bullets: ["Paid search & social campaign management", "Conversion rate optimisation (CRO)", "Email & lifecycle marketing automation", "Attribution modelling & growth analytics"],
    },
  },
  {
    icon: Server, slug: "devops-infrastructure", title: "DevOps & Infrastructure", color: "#64748b", glow: "#64748b14",
    desc: "Ship faster with zero-downtime confidence",
    details: {
      tagline: "Infrastructure that gets out of the way and lets your team move fast.",
      body: "We design and manage cloud infrastructure, CI/CD pipelines, and observability stacks that make deployment a non-event. Whether you're on AWS, GCP, or a hybrid setup, we build for reliability and developer velocity.",
      bullets: ["CI/CD pipeline design & implementation", "Cloud infrastructure (AWS / GCP / Azure)", "Kubernetes & container orchestration", "Monitoring, alerting & incident response"],
    },
  },
  {
    icon: Database, slug: "crm-revops", title: "CRM & RevOps", color: "#f59e0b", glow: "#f59e0b14",
    desc: "Revenue systems that actually work together",
    details: {
      tagline: "When sales, marketing, and finance finally speak the same language.",
      body: "We implement and optimise CRM and revenue operations systems that remove friction from the customer journey and give leadership a real-time view of the pipeline. Clean data, connected tools, and clear processes.",
      bullets: ["CRM setup & migration (HubSpot, Salesforce)", "Lead scoring & pipeline automation", "Revenue reporting & forecasting models", "Sales enablement & playbook design"],
    },
  },
  {
    icon: Layers, slug: "custom-solutions", title: "Custom Solutions", color: "#6366f1", glow: "#6366f114",
    desc: "Built entirely around your problem",
    details: {
      tagline: "When off-the-shelf doesn't cut it — we build it from scratch.",
      body: "Some problems don't fit a product category. We take on complex, cross-functional challenges that require bespoke architecture, unconventional thinking, and close collaboration. If it can be built on the web, we can build it.",
      bullets: ["Custom internal tools & dashboards", "Platform integrations & middleware", "Industry-specific workflow software", "Legacy system modernisation"],
    },
  },
];

/* ─── Component ──────────────────────────────────────── */
export default function RolesWeProvide() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const [active, setActive] = useState<Role | null>(null);

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

  return (
    <>
      <section
        ref={sectionRef}
        className="relative py-12 sm:py-16 mt-10 overflow-hidden"
        style={{ background: "#f7f6ff" }}
      >
        {/* Ambient blobs */}
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, #7c3aed0c 0%, transparent 70%)",
            transform: "translate(-50%, -40%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, #ec489908 0%, transparent 70%)",
            transform: "translate(50%, 40%)",
          }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #c4beed 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.35,
          }}
        />

        <div className="relative max-w-6xl px-4 sm:px-6 mx-auto">

          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-center mb-10 sm:mb-14"
          >
            <h2
              className="text-[clamp(1.75rem,5vw,3.5rem)] font-black leading-[1.05] tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif", color: "#0d0d1a" }}
            >
              Services we{" "}
              <span style={{ color: "#ec4899" }}>deliver</span>
            </h2>
            <p
              className="max-w-sm mx-auto mt-4 text-sm font-light leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#9896b8" }}
            >
              Every capability covered — specialized or fully custom.
            </p>
          </motion.div>

          {/* Grid — 2 cols mobile, 3 cols tablet, 4 cols desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {roles.map((role, i) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.slug}
                  variants={fadeUp}
                  custom={i % 4}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <button
                    onClick={() => setActive(role)}
                    className="relative flex flex-col h-full w-full p-4 sm:p-5 overflow-hidden transition-all duration-300 border cursor-pointer group rounded-2xl text-left"
                    style={{
                      background: "#ffffff",
                      borderColor: "#e4e2f5",
                      boxShadow: "0 2px 8px rgba(100,90,180,0.05)",
                    }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none group-hover:opacity-100 rounded-2xl"
                      style={{ background: `radial-gradient(ellipse at top left, ${role.glow}, transparent 65%)` }}
                    />
                    {/* Hover border */}
                    <div
                      className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none group-hover:opacity-100 rounded-2xl"
                      style={{ boxShadow: `inset 0 0 0 1.5px ${role.color}30` }}
                    />

                    {/* Icon */}
                    <div
                      className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 mb-3 sm:mb-4 transition-transform duration-300 rounded-xl group-hover:scale-110"
                      style={{
                        background: `${role.color}10`,
                        border: `1.5px solid ${role.color}25`,
                      }}
                    >
                      <Icon style={{ width: 16, height: 16, color: role.color }} className="sm:w-[18px] sm:h-[18px]" />
                    </div>

                    {/* Title */}
                    <h3
                      className="relative font-bold text-xs sm:text-sm mb-1 sm:mb-1.5 leading-snug"
                      style={{ fontFamily: "'Syne', sans-serif", color: "#0d0d1a" }}
                    >
                      {role.title}
                    </h3>

                    {/* Desc — hidden on smallest screens to keep cards compact */}
                    <p
                      className="relative flex-1 text-[11px] sm:text-xs font-light leading-relaxed hidden xs:block sm:block"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: "#9896b8" }}
                    >
                      {role.desc}
                    </p>

                    {/* Learn more */}
                    <div className="relative flex items-center gap-1 mt-2 sm:mt-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <span
                        className="text-[11px] sm:text-xs font-semibold"
                        style={{ color: role.color, fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Learn more
                      </span>
                      <ArrowUpRight style={{ width: 11, height: 11, color: role.color }} />
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${role.color}, transparent)`,
                      }}
                    />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Modal ───────────────────────────────────────────────────────── */}
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
              style={{ background: "rgba(13, 13, 26, 0.6)", backdropFilter: "blur(6px)" }}
            />

            {/*
              Centering shell — fixed, fills the viewport, flex-centers the panel.
              Framer Motion animates the inner panel only, so transform: translate
              is never touched by the animation engine.
            */}
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center p-4"
              onClick={() => setActive(null)}
            >
              <motion.div
                key="panel"
                variants={panelVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                className="relative rounded-3xl overflow-hidden w-full"
                style={{
                  maxWidth: 760,
                  maxHeight: "calc(100dvh - 40px)",
                  overflowY: "auto",
                  background: "#ffffff",
                  boxShadow: "0 40px 100px rgba(100, 90, 180, 0.25), 0 0 0 1px #e4e2f5",
                }}
              >
                {/* Coloured top bar */}
                <div
                  className="h-1.5 w-full sticky top-0 z-10"
                  style={{ background: `linear-gradient(90deg, ${active.color}, ${active.color}70)` }}
                />

                <div className="p-6 sm:p-8 lg:p-10">
                  {/* Close */}
                  <button
                    onClick={() => setActive(null)}
                    className="absolute top-5 right-5 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 hover:scale-110 hover:bg-[#e8e4ff]"
                    style={{ background: "#f0eeff", color: "#9896b8" }}
                    aria-label="Close"
                  >
                    <X style={{ width: 15, height: 15 }} />
                  </button>

                  {/* Icon + title */}
                  <div className="flex items-start gap-4 mb-6 pr-12">
                    <div
                      className="flex items-center justify-center rounded-2xl shrink-0"
                      style={{
                        width: 52,
                        height: 52,
                        background: `${active.color}12`,
                        border: `1.5px solid ${active.color}28`,
                      }}
                    >
                      <active.icon style={{ width: 24, height: 24, color: active.color }} />
                    </div>
                    <div>
                      <h3
                        className="text-xl sm:text-2xl font-black leading-tight"
                        style={{ fontFamily: "'Syne', sans-serif", color: "#0d0d1a" }}
                      >
                        {active.title}
                      </h3>
                      <p
                        className="text-xs sm:text-sm mt-1 font-semibold"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: active.color }}
                      >
                        {active.details.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full mb-6" style={{ background: "#f0eeff" }} />

                  {/* Body + bullets — single col mobile, 2-col sm+ */}
                  <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-8">
                    <p
                      className="text-sm leading-[1.8] mb-6 sm:mb-0"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: "#4a4870" }}
                    >
                      {active.details.body}
                    </p>

                    <ul className="space-y-3">
                      {active.details.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span
                            className="mt-[3px] flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                            style={{ background: `${active.color}15`, border: `1px solid ${active.color}30` }}
                          >
                            <span className="block w-1.5 h-1.5 rounded-full" style={{ background: active.color }} />
                          </span>
                          <span
                            className="text-sm"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: "#4a4870" }}
                          >
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full mt-6 mb-6" style={{ background: "#f0eeff" }} />

                  {/* CTA */}
                  <div className="flex items-center gap-4 flex-wrap">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:brightness-110"
                      style={{
                        background: active.color,
                        color: "#ffffff",
                        fontFamily: "'DM Sans', sans-serif",
                        boxShadow: `0 6px 20px ${active.color}35`,
                        textDecoration: "none",
                      }}
                      onClick={() => setActive(null)}
                    >
                      Start a project
                      <ArrowRight style={{ width: 15, height: 15 }} />
                    </Link>
                    <button
                      onClick={() => setActive(null)}
                      className="text-sm font-medium transition-colors duration-200 hover:text-[#0d0d1a]"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: "#9896b8" }}
                    >
                      Back to services
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}