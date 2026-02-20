"use client";

import type { Metadata } from "next";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Check,
  ArrowRight,
  Globe,
  Ship,
  Package,
  Handshake,
  Factory,
  MapPin,
  ChevronDown,
  ChevronRight,
  Shield,
  Zap,
  BarChart3,
  Users,
  Clock,
  Star,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

// ─── HOOK: Intersection Observer for scroll animations ───
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ─── ANIMATED COUNTER ───
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useScrollReveal();
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1800;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [visible, end]);
  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// ─── SCROLL REVEAL WRAPPER ───
function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "fade";
}) {
  const { ref, visible } = useScrollReveal();
  const transforms: Record<string, string> = {
    up: "translateY(40px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
    fade: "scale(0.96)",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── DATA ───
const heroFeatures = [
  {
    title: "Connected strategy & execution",
    tags: [
      "Portfolio management",
      "Standardized processes",
      "Agile platform infrastructure",
    ],
    color: "#e8e4ff",
    textColor: "#4a3f8f",
  },
  {
    title: "Operational efficiency",
    tags: ["AI-powered workflows", "Resource management", "Automations"],
    color: "#b8f0d8",
    textColor: "#1a5c3a",
  },
  {
    title: "Real-time risk identification",
    tags: ["Dashboards", "Portfolio management", "Gantt View"],
    color: "#1a1a2e",
    textColor: "#ffffff",
    light: true,
  },
];

const clients = [
  "Citizens",
  "Coca-Cola",
  "Nasdaq",
  "Lionsgate",
  "Carrefour",
  "BD",
  "Indosuez",
];

const featureSections = [
  {
    title: "Connected strategy & execution",
    subtitle:
      "Set cross-organizational goals and OKRs with clear ownership and execute them effectively across business units.",
    color: "#e8e4ff",
    items: [
      {
        title: "Portfolio management",
        desc: "Connect projects and stakeholders across the organization",
      },
      {
        title: "Standardized processes",
        desc: "Align your organization's processes and data for reliable reporting",
      },
      {
        title: "Agile platform infrastructure",
        desc: "Quickly adapt plans and execution to market changes",
      },
    ],
    mockup: "okr",
  },
  {
    title: "Operational efficiency",
    subtitle:
      "Accelerate time-to-market by breaking down cross-team siloes, streamlining workflows, and uniting systems.",
    color: "#b8f0d8",
    items: [
      {
        title: "AI-powered workflows",
        desc: "Work smarter across every use case with built-in AI",
      },
      {
        title: "Resource management",
        desc: "Allocate resources based on skills and availability",
      },
      {
        title: "Automations",
        desc: "Automate workflows and reduce manual work",
      },
    ],
    mockup: "tickets",
  },
  {
    title: "Real-time risk identification",
    subtitle:
      "Consolidate high volumes of data across the organization to inform immediate action when execution is at risk.",
    color: "#ffd4d4",
    items: [
      {
        title: "Dashboards",
        desc: "Easily visualize data for accurate decision-making",
      },
      {
        title: "Portfolio management",
        desc: "Identify and mitigate risks across your organization",
      },
      {
        title: "Gantt View",
        desc: "Visualize tasks, dependencies, and milestones across project timelines",
      },
    ],
    mockup: "dashboard",
  },
];

const businessNeeds = [
  {
    title: "Projects & Tasks",
    color: "#6557ff",
    product: "monday work management",
  },
  { title: "Sales & CRM", color: "#00c9a7", product: "monday CRM" },
  { title: "IT & Support", color: "#ff5a76", product: "monday service" },
  { title: "Product & Software", color: "#00c875", product: "monday dev" },
];

const tradeServices = [
  {
    icon: Globe,
    title: "Global Sourcing & Procurement",
    description:
      "We identify and secure high-quality products from verified international suppliers.",
    features: [
      "Supplier verification",
      "Quality inspection",
      "Price negotiation",
      "Contract management",
      "Risk assessment",
    ],
    idealFor: "Retailers, wholesalers, manufacturers",
    color: "#e8e4ff",
  },
  {
    icon: Ship,
    title: "Import & Export Management",
    description:
      "Complete documentation and compliance handling for international trade.",
    features: [
      "Customs documentation",
      "HS code classification",
      "Regulatory compliance",
      "Shipping coordination",
      "Duty/tax optimization",
    ],
    idealFor: "Import/export businesses, trading companies",
    color: "#b8f0d8",
  },
  {
    icon: Package,
    title: "Supply Chain & Logistics Solutions",
    description:
      "End-to-end logistics management from supplier to final destination.",
    features: [
      "Freight forwarding (Air/Sea/Land)",
      "Warehousing",
      "Distribution",
      "Inventory tracking",
      "Route optimization",
    ],
    idealFor: "Manufacturers, e-commerce, distributors",
    color: "#ffd4d4",
  },
  {
    icon: Handshake,
    title: "Trade Consulting & Market Entry",
    description:
      "Strategic advisory services for companies entering new markets.",
    features: [
      "Market research",
      "Import/export regulations guidance",
      "Trade feasibility analysis",
      "Local partnership connections",
    ],
    idealFor: "Businesses expanding internationally",
    color: "#fff3b8",
  },
  {
    icon: Factory,
    title: "Industrial & Commodity Trading",
    description:
      "Trading of raw materials and industrial goods across global markets.",
    features: [
      "Agricultural commodities",
      "Textiles",
      "Machinery",
      "Consumer goods",
      "Construction materials",
    ],
    idealFor: "Traders, manufacturers, procurement teams",
    color: "#d4f0ff",
  },
];

const differenceItems = [
  {
    label: "Intuitive customization",
    title: "Flexible yet standardized",
    active: true,
  },
  {
    label: "Designed with everyone in mind",
    title: "People love to use it",
    active: false,
  },
  {
    label: "Smooth cross-org adoption",
    title: "Fast time to value",
    active: false,
  },
  {
    label: "Connect your entire organization",
    title: "Alignment at every level",
    active: false,
  },
];

const securityItems = [
  {
    title: "World-class security solutions",
    color: "#e8e4ff",
    features: [
      {
        title: "Bring Your Own Key",
        desc: "Maintain total data governance by bringing your own encryption key.",
      },
      {
        title: "Multiple SSO",
        desc: "Ensure secured access across your org by implementing multiple SSO vendors.",
      },
    ],
  },
  {
    title: "Advanced admin control",
    color: "#e8e4ff",
    features: [
      {
        title: "Audit log API",
        desc: "Log and monitor user actions to protect against unwanted access.",
      },
      {
        title: "Advanced account permissions",
        desc: "Manage everything from who can view or access certain information.",
      },
    ],
  },
];

const expertServices = [
  {
    icon: Package,
    title: "Implementation packages",
    desc: "Experience top-priority implementation, optimization, and handover with 60–90 hour packages",
    color: "#e8e4ff",
  },
  {
    icon: Users,
    title: "Continued success plan",
    desc: "Receive strategic guidance from a dedicated customer success manager for smooth adoption",
    color: "#b8f0d8",
  },
  {
    icon: Clock,
    title: "24/7 Premium support",
    desc: "Work with a designated technical support team that knows your workflows for super fast SLAs",
    color: "#ffd4d4",
  },
  {
    icon: Star,
    title: "Tailored services",
    desc: "Hire certified experts for bespoke technical code or no-code projects for your account",
    color: "#fff3b8",
  },
];

const testimonials = [
  {
    metric: "18%",
    metricLabel: "cost reduction",
    quote:
      "AJAX Global streamlined our international sourcing and reduced costs significantly. Their verified supplier network gave us confidence from day one.",
    name: "James Thornton",
    title: "VP of Procurement, NorthEdge Manufacturing",
    company: "NorthEdge",
    initials: "JT",
  },
  {
    metric: "3x",
    metricLabel: "faster customs clearance",
    quote:
      "The customs documentation and compliance support alone saved us weeks of delays. AJAX Global is our go-to partner for all cross-border trade.",
    name: "Priya Mehta",
    title: "Director of Operations, Meridian Retail Group",
    company: "Meridian",
    initials: "PM",
  },
  {
    metric: "3",
    metricLabel: "new markets entered",
    quote:
      "From initial consultation to final delivery, the team was professional and proactive. We expanded into three new markets with zero disruption.",
    name: "Carlos Reyes",
    title: "CEO, Reyes Agricultural Exports",
    company: "Reyes",
    initials: "CR",
  },
];

const awards = [
  "Highest User Adoption",
  "Best Results",
  "Users Most Likely To Recommend",
  "Leader",
  "Best Usability",
  "Easiest Admin",
  "Best Relationship",
  "Most Implementable",
];

const faqs = [
  {
    question: "How long does international shipping take?",
    answer:
      "Transit times vary depending on origin, destination, and shipping method. Sea freight takes 15–45 days, air freight 3–7 days, and land freight 5–15 days. We provide real-time tracking and accurate ETAs for every shipment.",
  },
  {
    question: "Do you handle customs clearance?",
    answer:
      "Yes. We manage all customs documentation, HS code classification, duty and tax calculations, and regulatory compliance on your behalf, ensuring smooth clearance at every border.",
  },
  {
    question: "Can you source custom or branded products?",
    answer:
      "Absolutely. We work with manufacturers to source custom-specification or private-label products. Our team handles supplier vetting, sample review, quality inspections, and contract management.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We serve manufacturing, retail, agriculture, construction, automotive, energy, and FMCG. Our team has deep expertise across each sector.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "We conduct rigorous supplier verification and on-site quality inspections before shipment. Our QA process includes factory audits, product testing, and compliance checks against your specifications.",
  },
];

// ─── MOCKUP COMPONENTS ───
function OKRMockup() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-xs text-gray-500 ml-2 font-medium">
          2025 OKR Initiatives
        </span>
      </div>
      <div className="p-4 space-y-2">
        {[
          { label: "Projects off track", val: 32, color: "#ff5a76" },
          { label: "Projects on risk", val: 37, color: "#ffcb00" },
          { label: "Projects on track", val: 65, color: "#00c875" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="text-2xl font-bold" style={{ color: item.color }}>
              {item.val}
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1">{item.label}</div>
              <div className="h-1.5 rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${(item.val / 100) * 100}%`,
                    background: item.color,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="space-y-1 pt-2">
          {[
            "Software Performance Optimizer",
            "Customer Portal Revamp 2025",
            "Project Alpha Core Product",
            "Foundation Planning Integration",
          ].map((task, i) => (
            <div
              key={i}
              className="flex items-center gap-2 p-1.5 rounded hover:bg-gray-50 text-xs text-gray-600"
            >
              <div
                className="w-2 h-2 rounded-sm"
                style={{
                  background: ["#ff5a76", "#00c875", "#6557ff", "#ffcb00"][i],
                }}
              />
              {task}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TicketsMockup() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <span className="text-xs font-medium text-gray-700">IT Tickets</span>
        <span className="text-xs text-[#6557ff] font-medium">
          monday AI column action
        </span>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <div className="text-xs font-semibold text-[#6557ff] mb-2">
            New requests
          </div>
          {[
            {
              text: "I need to update my license",
              tag: "Request",
              color: "#6557ff",
            },
            {
              text: "I had such a great experience...",
              tag: "Feedback",
              color: "#00c875",
            },
            {
              text: "Issue affecting team for mont...",
              tag: "Bug",
              color: "#ff5a76",
            },
            {
              text: "It would be helpful to add the...",
              tag: "Request",
              color: "#6557ff",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-1.5 border-b border-gray-50 hover:bg-gray-50 px-1 rounded transition-colors"
            >
              <span className="text-xs text-gray-600">{item.text}</span>
              <span
                className="text-xs px-2 py-0.5 rounded text-white font-medium"
                style={{ background: item.color }}
              >
                {item.tag}
              </span>
            </div>
          ))}
        </div>
        <div>
          <div className="text-xs font-semibold text-[#00c875] mb-2">
            Completed requests
          </div>
          {[
            {
              text: "Super slow loading time on my...",
              tag: "Bug",
              color: "#ff5a76",
            },
            {
              text: "Software was installed by Avn...",
              tag: "Feedback",
              color: "#00c875",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-1.5 hover:bg-gray-50 px-1 rounded transition-colors"
            >
              <span className="text-xs text-gray-600">{item.text}</span>
              <span
                className="text-xs px-2 py-0.5 rounded text-white font-medium"
                style={{ background: item.color }}
              >
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
      <div className="bg-white border-b border-gray-100 px-4 py-3">
        <span className="text-xs font-medium text-gray-700">OKR Dashboard</span>
      </div>
      <div className="p-4 space-y-2">
        {[
          {
            label: "Increase annual recurring revenue by 20%",
            status: "At risk",
            color: "#ff5a76",
            progress: 45,
          },
          {
            label: "Grow the company workforce by 15%",
            status: "Complete",
            color: "#00c875",
            progress: 100,
          },
          {
            label: "Develop an ESG roadmap",
            status: "On track",
            color: "#6557ff",
            progress: 70,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-2 rounded-lg hover:bg-gray-50 transition-colors border border-gray-50"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs text-gray-700 font-medium">
                {item.label}
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full text-white font-medium"
                style={{ background: item.color }}
              >
                {item.status}
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-gray-100">
              <div
                className="h-full rounded-full"
                style={{ width: `${item.progress}%`, background: item.color }}
              />
            </div>
          </div>
        ))}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="rounded-lg bg-gray-50 p-3">
            <div className="text-xs font-semibold text-gray-600 mb-2">
              Company OKR Status
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-12 h-12 rounded-full border-4 border-[#ff5a76]"
                style={{
                  background:
                    "conic-gradient(#ff5a76 0deg 120deg, #6557ff 120deg 250deg, #00c875 250deg 360deg)",
                }}
              />
              <div className="space-y-0.5">
                {[
                  { c: "#ff5a76", l: "At risk" },
                  { c: "#6557ff", l: "On track" },
                  { c: "#00c875", l: "Complete" },
                ].map((x, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: x.c }}
                    />
                    <span className="text-xs text-gray-500">{x.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-gray-50 p-3">
            <div className="text-xs font-semibold text-gray-600 mb-2">
              KRs Status
            </div>
            <div className="flex items-end gap-1 h-10">
              {[40, 30, 20, 35, 25, 30, 40].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${h}px`,
                    background: ["#ff5a76", "#ffcb00", "#00c875"][i % 3],
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ───
export default function ServicesPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeDiff, setActiveDiff] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoveredNeed, setHoveredNeed] = useState<number | null>(null);

  const mockups = [
    <OKRMockup key="okr" />,
    <TicketsMockup key="tickets" />,
    <DashboardMockup key="dash" />,
  ];

  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative pt-20 pb-0 overflow-hidden bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal delay={0}>
            <div className="inline-block text-sm font-semibold text-gray-600 mb-4 tracking-wide">
              AJAX Global for{" "}
              <span className="text-[#6557ff] font-bold">Enterprise</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-[1.08] tracking-tight mb-6">
              Make strategic decisions
              <br />
              with confidence
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
              Explore the enterprise solution that leaders trust and teams love.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 hover:bg-gray-700 text-white rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:scale-105 group"
              >
                Contact sales
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-gray-200 text-gray-700 rounded-full font-semibold text-sm hover:border-gray-400 transition-all duration-200"
              >
                Request a Quote
              </Link>
            </div>
          </Reveal>

          {/* Hero feature cards */}
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {heroFeatures.map((f, i) => (
              <Reveal key={i} delay={0.15 + i * 0.1} direction="up">
                <div
                  className="rounded-2xl p-6 text-left cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                  style={{ background: f.color, color: f.textColor }}
                >
                  <h3 className="text-lg font-semibold mb-4 leading-snug">
                    {f.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {f.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{
                          background: f.light
                            ? "rgba(255,255,255,0.15)"
                            : "rgba(255,255,255,0.7)",
                          color: f.textColor,
                          border: f.light
                            ? "1px solid rgba(255,255,255,0.2)"
                            : "none",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                    <span style={{ color: f.light ? "#a78bfa" : "#6557ff" }}>
                      ↓
                    </span>
                    <span style={{ color: f.light ? "#a78bfa" : "#6557ff" }}>
                      Explore
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Client logos */}
        <div className="mt-16 border-t border-gray-100 py-8">
          <div className="mx-auto max-w-4xl px-4">
            <Reveal>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
                {clients.map((c, i) => (
                  <span
                    key={i}
                    className="text-gray-700 font-bold text-sm tracking-wide hover:opacity-100 transition-opacity cursor-default"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURE DEEP-DIVE SECTIONS
      ══════════════════════════════════════════ */}
      {featureSections.map((section, idx) => (
        <section key={idx} className="py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Reveal>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                  {section.title}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                  {section.subtitle}
                </p>
              </Reveal>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div
                className="rounded-2xl p-8 sm:p-10"
                style={{ background: "#f6f7fb" }}
              >
                <Reveal direction="left">
                  <div className="space-y-6">
                    {section.items.map((item, i) => (
                      <div key={i} className="group cursor-pointer">
                        <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-[#6557ff] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#6557ff] leading-relaxed">
                          {item.desc}
                        </p>
                        {i < section.items.length - 1 && (
                          <div className="mt-6 border-b border-gray-200" />
                        )}
                      </div>
                    ))}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-700 transition-all mt-4 group"
                    >
                      Contact sales{" "}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Reveal>
              </div>
              <Reveal direction="right" delay={0.1}>
                <div className="relative">
                  <div
                    className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
                    style={{ background: section.color }}
                  />
                  <div className="relative">{mockups[idx]}</div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* ══════════════════════════════════════════
          THE AJAX GLOBAL DIFFERENCE
      ══════════════════════════════════════════ */}
      <section className="py-24 sm:py-32" style={{ background: "#f6f7fb" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-16 tracking-tight">
              The AJAX Global difference
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Reveal direction="left">
              <div className="space-y-2">
                {differenceItems.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-6 cursor-pointer transition-all duration-300"
                    style={{
                      background: activeDiff === i ? "#e8e4ff" : "transparent",
                    }}
                    onClick={() => setActiveDiff(i)}
                  >
                    <div className="text-xs text-gray-500 mb-1 font-medium">
                      {item.label}
                    </div>
                    <div
                      className="text-2xl font-semibold transition-colors duration-300"
                      style={{
                        color: activeDiff === i ? "#6557ff" : "#9ca3af",
                      }}
                    >
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
                <div className="text-5xl font-bold text-gray-900 mb-1">
                  <Counter end={6970} />
                </div>
                <div className="text-sm text-gray-500 mb-8">
                  hours saved per month
                </div>
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm">
                      JT
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        James Thornton
                      </div>
                      <div className="text-xs text-[#6557ff]">
                        VP of Procurement, NorthEdge
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">
                    "It's customizable to your needs. It adapts and wraps around
                    whatever your business requires."
                  </p>
                  <div className="mt-4 text-lg font-bold text-gray-900">
                    NorthEdge
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EVERY BUSINESS NEED COVERED
      ══════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-16 tracking-tight">
              Every business need, covered
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {businessNeeds.map((need, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="rounded-2xl p-6 sm:p-8 h-48 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  style={{ background: need.color }}
                  onMouseEnter={() => setHoveredNeed(i)}
                  onMouseLeave={() => setHoveredNeed(null)}
                >
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {need.title}
                  </h3>
                  <div className="text-xs text-white/80 font-medium">
                    {need.product}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-700 transition-all hover:scale-105 group"
              >
                Contact sales{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRADE SERVICES (DETAILED)
      ══════════════════════════════════════════ */}
      <section className="py-24 sm:py-32" style={{ background: "#f6f7fb" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                Trade & Logistics Services
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Reliable, scalable, and efficient international trade solutions
                tailored to your business.
              </p>
            </Reveal>
          </div>
          <div className="space-y-6">
            {tradeServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={index} delay={index * 0.08}>
                  <div className="group rounded-2xl bg-white border border-gray-200 p-8 sm:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                      <div>
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                          style={{ background: service.color }}
                        >
                          <Icon
                            className="w-7 h-7"
                            style={{ color: "#6557ff" }}
                          />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#6557ff] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="text-xs text-gray-400">
                          <span className="font-semibold text-gray-600">
                            Ideal for:{" "}
                          </span>
                          {service.idealFor}
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                          What's Included
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <div
                                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                style={{ background: service.color }}
                              >
                                <Check
                                  className="w-3 h-3"
                                  style={{ color: "#6557ff" }}
                                />
                              </div>
                              <span className="text-sm text-gray-700">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECURITY & CONTROL
      ══════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-16 tracking-tight">
              Enterprise-grade security & control
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {securityItems.map((item, i) => (
              <Reveal
                key={i}
                delay={i * 0.1}
                direction={i === 0 ? "left" : "right"}
              >
                <div className="rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#e8e4ff] flex items-center justify-center">
                      <Shield className="w-5 h-5 text-[#6557ff]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#6557ff]">
                      {item.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {item.features.map((f, j) => (
                      <div key={j}>
                        <h4 className="font-bold text-gray-900 mb-1 text-sm">
                          {f.title}
                        </h4>
                        <p className="text-sm text-[#6557ff] leading-relaxed">
                          {f.desc}
                        </p>
                        {j < item.features.length - 1 && (
                          <div className="mt-4 border-b border-gray-100" />
                        )}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-gray-900 hover:text-[#6557ff] transition-colors group/link"
                  >
                    Learn more{" "}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Integrations banner */}
          <Reveal>
            <div className="rounded-2xl border border-gray-200 p-8 sm:p-10 grid md:grid-cols-2 gap-8 items-center hover:shadow-lg transition-all duration-300 group">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Integrations & apps
                </h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Connect your stack or build your own with our open API
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#6557ff] hover:underline group/link"
                >
                  Explore integrations{" "}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <div className="text-xs font-bold text-gray-700 mb-3">
                  Leads
                </div>
                <div className="space-y-2">
                  {[
                    "James Smith — 500",
                    "Philip Rogers — 50",
                    "Paola Santos — 1500",
                    "Donna Sege — 600",
                  ].map((lead, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-xs text-gray-600 py-1 border-b border-gray-100"
                    >
                      <span>{lead.split("—")[0]}</span>
                      <span className="font-medium">{lead.split("—")[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AI THAT WORKS FOR YOU
      ══════════════════════════════════════════ */}
      {/* <section className="py-24 sm:py-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#6557ff] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00c875] rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              AI that works for you
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 mb-8 max-w-lg mx-auto">
              <div className="text-xs font-bold text-white/60 mb-3 text-left">
                Open tickets
              </div>
              {[
                "Finalize kickoff materials",
                "Refine objectives",
                "Identify key resources",
                "Test plan",
              ].map((task, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 py-1.5 border-b border-white/10 last:border-0"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: ["#6557ff", "#00c875", "#ff5a76", "#ffcb00"][
                        i
                      ],
                    }}
                  />
                  <span className="text-sm text-white/80">{task}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Discover our AI offering — designed to elevate your work and help
              you achieve more than humanly possible
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              href="/intellidesq"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#a78bfa] transition-colors group"
            >
              Explore IntelliDesq™{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section> */}
      <section className="relative w-full px-4 py-8 md:px-8">
        {/* Container with controlled height (80% of screen) */}
        <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden rounded-3xl shadow-2xl bg-slate-900">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/video-placeholder.jpg" // Highly recommended for UX
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/aivideo.mp4" type="video/mp4" />
            {/* Optional: Add a WebM source for better compression */}
            <source src="/your-video.webm" type="video/webm" />
          </video>

          {/* Optional: Subtle gradient overlay to soften the edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
        </div>
      </section>

      

      {/* ══════════════════════════════════════════
          EXPERT SERVICES
      ══════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <Reveal direction="left">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                  Expert services for lasting success
                </h2>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-700 transition-all group"
                >
                  Contact sales{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-xs text-gray-400 mt-3">
                  Services may require additional costs
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {expertServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                      <div
                        className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{ background: service.color }}
                      >
                        <Icon className="w-5 h-5 text-[#6557ff]" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#6557ff] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#6557ff] leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-24 sm:py-32" style={{ background: "#f6f7fb" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Trusted by top companies worldwide
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden bg-gray-900 min-h-80 grid md:grid-cols-2 gap-0">
              {/* Left visual */}
              <div className="relative overflow-hidden min-h-64 md:min-h-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6557ff]/40 to-[#00c875]/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl font-black text-white opacity-20">
                      {testimonials[activeTestimonial].metric}
                    </div>
                    <div className="text-white/50 text-sm font-medium mt-2">
                      {testimonials[activeTestimonial].metricLabel}
                    </div>
                  </div>
                </div>
              </div>
              {/* Right content */}
              <div className="p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl font-black text-white">
                      {testimonials[activeTestimonial].metric}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonials[activeTestimonial].metricLabel}
                    </div>
                  </div>
                  <p className="text-white text-base leading-relaxed mb-6">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                      {testimonials[activeTestimonial].initials}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {testimonials[activeTestimonial].title}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-8">
                  <button
                    onClick={() =>
                      setActiveTestimonial(
                        (a) =>
                          (a - 1 + testimonials.length) % testimonials.length,
                      )
                    }
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveTestimonial((a) => (a + 1) % testimonials.length)
                    }
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="flex gap-2 ml-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTestimonial(i)}
                        className="w-2 h-2 rounded-full transition-all duration-300"
                        style={{
                          background:
                            i === activeTestimonial
                              ? "#fff"
                              : "rgba(255,255,255,0.3)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AWARDS ROW
      ══════════════════════════════════════════ */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h3 className="text-center text-2xl font-light text-gray-500 mb-10">
              Our customer reviews speak for themselves
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 p-4 text-center hover:border-[#6557ff]/40 hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-default"
                  style={{ minWidth: "110px" }}
                >
                  <div className="w-6 h-6 rounded-full bg-red-500 mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-xs font-black">G</span>
                  </div>
                  <div className="text-xs font-semibold text-gray-700 leading-tight mb-1">
                    {award}
                  </div>
                  <div className="text-xs text-[#6557ff] font-bold">
                    Enterprise
                  </div>
                  <div className="text-xs text-gray-400">FALL 2024</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="py-24 sm:py-32" style={{ background: "#f6f7fb" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center tracking-tight">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  className="rounded-2xl bg-white border transition-all duration-300 overflow-hidden"
                  style={{
                    borderColor: openFaq === i ? "#6557ff" : "#e5e7eb",
                    boxShadow:
                      openFaq === i
                        ? "0 4px 24px rgba(101,87,255,0.08)"
                        : "none",
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between p-6 sm:p-7 text-left group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <h3 className="font-bold text-gray-900 group-hover:text-[#6557ff] transition-colors pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className="w-5 h-5 flex-shrink-0 transition-all duration-300"
                      style={{
                        color: openFaq === i ? "#6557ff" : "#9ca3af",
                        transform: openFaq === i ? "rotate(180deg)" : "none",
                      }}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{
                      maxHeight: openFaq === i ? "200px" : "0",
                      opacity: openFaq === i ? 1 : 0,
                    }}
                  >
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7">
                      <p className="text-gray-500 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="py-24 sm:py-32" style={{ background: "#e8e4ff" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
                  Ready to hear more about our{" "}
                  <span className="text-[#6557ff]">enterprise solutions?</span>
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Request a callback from our sales team to explore custom
                  pricing plans based on your unique needs and goals.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {["Coca-Cola", "Universal Music", "Canva"].map((brand, i) => (
                    <span key={i} className="font-bold text-gray-700 text-lg">
                      {brand}
                    </span>
                  ))}
                </div>
                <div className="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm">
                  <p className="text-sm text-gray-700 italic leading-relaxed mb-4">
                    "Now that all teams are reporting in the same place, our
                    leadership gets a live high-level view of every operation."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-xs">
                      KM
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        Kristina Muller
                      </div>
                      <div className="text-xs text-[#6557ff]">
                        SVP Delivery Operations & PMO
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-lg">
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex -space-x-2">
                    {["JT", "PM", "CR", "KM"].map((i, k) => (
                      <div
                        key={k}
                        className="w-8 h-8 rounded-full border-2 border-white bg-[#6557ff] flex items-center justify-center text-white text-xs font-bold"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    Contact our sales team
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    "First name",
                    "Last name",
                    "Work email",
                    "Job title",
                    "Company name",
                  ].map((field, i) => (
                    <input
                      key={i}
                      placeholder={`${field}*`}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#6557ff] focus:ring-2 focus:ring-[#6557ff]/10 transition-all"
                    />
                  ))}
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-400 focus:outline-none focus:border-[#6557ff] transition-all appearance-none bg-white">
                    <option>Company size*</option>
                    <option>1-50</option>
                    <option>51-200</option>
                    <option>201-1000</option>
                    <option>1000+</option>
                  </select>
                  <textarea
                    placeholder="Tell us more about your team and what you'd like to explore"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#6557ff] focus:ring-2 focus:ring-[#6557ff]/10 transition-all resize-none"
                  />
                  <button className="w-full py-3.5 rounded-xl bg-[#6557ff] hover:bg-[#5046d4] text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                    Submit
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    By submitting, you accept our Privacy Policy and consent to
                    be contacted by AJAX Global.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
