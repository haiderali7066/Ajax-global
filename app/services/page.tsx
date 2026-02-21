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
  ChevronDown,
  ChevronRight,
  Shield,
  Zap,
  BarChart3,
  Users,
  Clock,
  Star,
  ChevronLeft,
  Sparkles,
  Brain,
} from "lucide-react";
import Link from "next/link";

// ─── FONT IMPORT ───
const fontImport = `
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap');
  * { font-family: 'Figtree', system-ui, sans-serif; }
`;

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
      { threshold: 0.12 },
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
    const step = end / (1800 / 16);
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
    up: "translateY(44px)",
    left: "translateX(-44px)",
    right: "translateX(44px)",
    fade: "scale(0.95)",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
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
    bg: "linear-gradient(135deg, #ede9fe, #c4b5fd)",
    textColor: "#4c1d95",
    tagBg: "rgba(255,255,255,0.65)",
    accentColor: "#7c3aed",
  },
  {
    title: "Operational efficiency",
    tags: ["AI-powered workflows", "Resource management", "Automations"],
    bg: "linear-gradient(135deg, #d1fae5, #6ee7b7)",
    textColor: "#065f46",
    tagBg: "rgba(255,255,255,0.65)",
    accentColor: "#10b981",
  },
  {
    title: "Real-time risk identification",
    tags: ["Dashboards", "Portfolio management", "Gantt View"],
    bg: "linear-gradient(135deg, #1e1b4b, #312e81)",
    textColor: "#ffffff",
    tagBg: "rgba(255,255,255,0.15)",
    accentColor: "#a78bfa",
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
    color: "#ede9fe",
    accentColor: "#7c3aed",
    sectionBg: "white",
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
    color: "#d1fae5",
    accentColor: "#059669",
    sectionBg: "#f5f3ff",
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
    color: "#fce7f3",
    accentColor: "#db2777",
    sectionBg: "white",
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
    bg: "linear-gradient(135deg, #7c3aed, #4f46e5)",
    product: "monday work management",
  },
  {
    title: "Sales & CRM",
    bg: "linear-gradient(135deg, #10b981, #0ea5e9)",
    product: "monday CRM",
  },
  {
    title: "IT & Support",
    bg: "linear-gradient(135deg, #f43f5e, #f59e0b)",
    product: "monday service",
  },
  {
    title: "Product & Software",
    bg: "linear-gradient(135deg, #0ea5e9, #8b5cf6)",
    product: "monday dev",
  },
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
    color: "#ede9fe",
    accentColor: "#7c3aed",
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
    color: "#d1fae5",
    accentColor: "#059669",
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
    color: "#fce7f3",
    accentColor: "#be185d",
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
    color: "#fef3c7",
    accentColor: "#d97706",
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
    color: "#dbeafe",
    accentColor: "#1d4ed8",
  },
];

const differenceItems = [
  { label: "Intuitive customization", title: "Flexible yet standardized" },
  { label: "Designed with everyone in mind", title: "People love to use it" },
  { label: "Smooth cross-org adoption", title: "Fast time to value" },
  {
    label: "Connect your entire organization",
    title: "Alignment at every level",
  },
];

const securityItems = [
  {
    title: "World-class security solutions",
    color: "#ede9fe",
    accentColor: "#7c3aed",
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
    color: "#d1fae5",
    accentColor: "#059669",
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
    color: "#ede9fe",
    accent: "#7c3aed",
  },
  {
    icon: Users,
    title: "Continued success plan",
    desc: "Receive strategic guidance from a dedicated customer success manager for smooth adoption",
    color: "#d1fae5",
    accent: "#059669",
  },
  {
    icon: Clock,
    title: "24/7 Premium support",
    desc: "Work with a designated technical support team that knows your workflows for super fast SLAs",
    color: "#fce7f3",
    accent: "#be185d",
  },
  {
    icon: Star,
    title: "Tailored services",
    desc: "Hire certified experts for bespoke technical code or no-code projects for your account",
    color: "#fef3c7",
    accent: "#d97706",
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
    initials: "JT",
    gradFrom: "#7c3aed",
    gradTo: "#4f46e5",
    accentColor: "#7c3aed",
  },
  {
    metric: "3×",
    metricLabel: "faster customs clearance",
    quote:
      "The customs documentation and compliance support alone saved us weeks of delays. AJAX Global is our go-to partner for all cross-border trade.",
    name: "Priya Mehta",
    title: "Director of Operations, Meridian Retail Group",
    initials: "PM",
    gradFrom: "#0ea5e9",
    gradTo: "#10b981",
    accentColor: "#0ea5e9",
  },
  {
    metric: "3",
    metricLabel: "new markets entered",
    quote:
      "From initial consultation to final delivery, the team was professional and proactive. We expanded into three new markets with zero disruption.",
    name: "Carlos Reyes",
    title: "CEO, Reyes Agricultural Exports",
    initials: "CR",
    gradFrom: "#f59e0b",
    gradTo: "#ef4444",
    accentColor: "#f59e0b",
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
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-violet-100 bg-white">
      <div
        className="border-b border-gray-100 px-4 py-3 flex items-center gap-2"
        style={{ background: "#fafafa" }}
      >
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="text-xs text-gray-500 ml-2 font-semibold">
          2025 OKR Initiatives
        </span>
      </div>
      <div className="p-5 space-y-3">
        {[
          { label: "Projects off track", val: 32, color: "#f43f5e" },
          { label: "Projects on risk", val: 37, color: "#f59e0b" },
          { label: "Projects on track", val: 65, color: "#10b981" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <div className="text-2xl font-black" style={{ color: item.color }}>
              {item.val}
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1.5 font-medium">
                {item.label}
              </div>
              <div className="h-2 rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${item.val}%`, background: item.color }}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="space-y-1 pt-2 border-t border-gray-100">
          {[
            "Software Performance Optimizer",
            "Customer Portal Revamp 2025",
            "Project Alpha Core",
            "Foundation Planning",
          ].map((task, i) => (
            <div
              key={i}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 text-xs text-gray-600 font-medium"
            >
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{
                  background: ["#f43f5e", "#10b981", "#7c3aed", "#f59e0b"][i],
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
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-emerald-100 bg-white">
      <div
        className="border-b border-gray-100 px-4 py-3 flex items-center justify-between"
        style={{ background: "#f0fdf4" }}
      >
        <span className="text-xs font-bold text-gray-700">IT Tickets</span>
        <span className="text-xs text-emerald-600 font-semibold">
          AI column action ✦
        </span>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <div className="text-xs font-bold text-emerald-600 mb-2 uppercase tracking-widest">
            New requests
          </div>
          {[
            {
              text: "I need to update my license",
              tag: "Request",
              color: "#7c3aed",
            },
            {
              text: "I had such a great experience...",
              tag: "Feedback",
              color: "#10b981",
            },
            {
              text: "Issue affecting team for month...",
              tag: "Bug",
              color: "#f43f5e",
            },
            {
              text: "It would be helpful to add the...",
              tag: "Request",
              color: "#7c3aed",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-2 border-b border-gray-50 px-1"
            >
              <span className="text-xs text-gray-600 font-medium">
                {item.text}
              </span>
              <span
                className="text-xs px-2.5 py-1 rounded-full text-white font-semibold shrink-0 ml-2"
                style={{ background: item.color }}
              >
                {item.tag}
              </span>
            </div>
          ))}
        </div>
        <div>
          <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">
            Completed
          </div>
          {[
            {
              text: "Super slow loading time on my...",
              tag: "Bug",
              color: "#f43f5e",
            },
            {
              text: "Software was installed by Avn...",
              tag: "Feedback",
              color: "#10b981",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-2 px-1"
            >
              <span className="text-xs text-gray-400 line-through">
                {item.text}
              </span>
              <span
                className="text-xs px-2.5 py-1 rounded-full text-white font-semibold opacity-50 ml-2"
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
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-pink-100 bg-white">
      <div
        className="border-b border-gray-100 px-4 py-3"
        style={{ background: "#fdf2f8" }}
      >
        <span className="text-xs font-bold text-gray-700">OKR Dashboard</span>
      </div>
      <div className="p-4 space-y-2.5">
        {[
          {
            label: "Increase annual recurring revenue by 20%",
            status: "At risk",
            color: "#f43f5e",
            progress: 45,
          },
          {
            label: "Grow the company workforce by 15%",
            status: "Complete",
            color: "#10b981",
            progress: 100,
          },
          {
            label: "Develop an ESG roadmap",
            status: "On track",
            color: "#7c3aed",
            progress: 70,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-3 rounded-xl hover:bg-gray-50 transition-colors border border-gray-50"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-700 font-semibold">
                {item.label}
              </span>
              <span
                className="text-xs px-2.5 py-1 rounded-full text-white font-bold shrink-0 ml-2"
                style={{ background: item.color }}
              >
                {item.status}
              </span>
            </div>
            <div className="h-2 rounded-full bg-gray-100">
              <div
                className="h-full rounded-full"
                style={{ width: `${item.progress}%`, background: item.color }}
              />
            </div>
          </div>
        ))}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="rounded-xl p-3" style={{ background: "#fdf2f8" }}>
            <div className="text-xs font-bold text-gray-600 mb-2">
              OKR Status
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-12 h-12 rounded-full border-4 border-[#f43f5e]"
                style={{
                  background:
                    "conic-gradient(#f43f5e 0deg 120deg, #7c3aed 120deg 250deg, #10b981 250deg 360deg)",
                }}
              />
              <div className="space-y-0.5">
                {[
                  { c: "#f43f5e", l: "At risk" },
                  { c: "#7c3aed", l: "On track" },
                  { c: "#10b981", l: "Complete" },
                ].map((x, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: x.c }}
                    />
                    <span className="text-xs text-gray-500">{x.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-xl p-3" style={{ background: "#f5f3ff" }}>
            <div className="text-xs font-bold text-gray-600 mb-2">
              KRs Status
            </div>
            <div className="flex items-end gap-1 h-10">
              {[40, 30, 20, 35, 25, 30, 40].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${h}px`,
                    background: ["#f43f5e", "#f59e0b", "#10b981"][i % 3],
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
    <main className="min-h-screen bg-white overflow-x-hidden">
      <style>{fontImport}</style>
      <Header />

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative pt-20 pb-0 overflow-hidden bg-white">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(124,58,237,0.055) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 10%, rgba(124,58,237,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-200 bg-white shadow-sm mb-6 cursor-default">
              <Sparkles className="w-3.5 h-3.5 text-violet-500" />
              <span className="text-sm font-semibold text-gray-600">
                AJAX Global for{" "}
                <span className="text-primary font-bold">Enterprise</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              className="text-[clamp(2.8rem,7vw,5.5rem)] font-light text-gray-900 leading-[1.07] tracking-tight mb-6"
              style={{ letterSpacing: "-0.025em" }}
            >
              Make strategic decisions
              <br />
              <span className="font-extrabold text-primary">
                with confidence
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-lg text-gray-500 font-light mb-10 max-w-xl mx-auto leading-relaxed">
              Explore the enterprise solution that leaders trust and teams love.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-white rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                style={{
                  background: "var(--primary)",
                  boxShadow: "0 8px 28px rgba(124,58,237,0.28)",
                }}
              >
                Contact sales{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-gray-200 text-gray-700 rounded-full font-semibold text-sm hover:border-violet-300 hover:shadow-md transition-all duration-200"
              >
                Request a Quote
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {heroFeatures.map((f, i) => (
              <Reveal key={i} delay={0.14 + i * 0.1} direction="up">
                <div
                  className="rounded-2xl p-6 text-left cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
                  style={{ background: f.bg, color: f.textColor }}
                >
                  <h3 className="text-base font-bold mb-4 leading-snug">
                    {f.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {f.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs px-2.5 py-1 rounded-full font-semibold"
                        style={{ background: f.tagBg, color: f.textColor }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div
                    className="flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all"
                    style={{ color: f.accentColor }}
                  >
                    ↓ Explore
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div
          className="mt-16 border-t border-gray-100 py-6"
          style={{ background: "#fafafa" }}
        >
          <div className="mx-auto max-w-4xl px-4">
            <Reveal>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-50">
                {clients.map((c, i) => (
                  <span
                    key={i}
                    className="text-gray-700 font-extrabold text-sm tracking-wider uppercase hover:opacity-100 hover:text-primary transition-all cursor-default"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════ FEATURE SECTIONS ══════════════════ */}
      {featureSections.map((section, idx) => (
        <section
          key={idx}
          className="py-24 sm:py-32"
          style={{ background: section.sectionBg }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Reveal>
                <span
                  className="text-xs font-bold uppercase tracking-[.22em] block mb-3"
                  style={{ color: section.accentColor }}
                >
                  Feature 0{idx + 1}
                </span>
                <h2
                  className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-4"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {section.title}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                  {section.subtitle}
                </p>
              </Reveal>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div
                className="rounded-2xl p-8 sm:p-10"
                style={{ background: section.color }}
              >
                <Reveal direction="left">
                  <div className="space-y-6">
                    {section.items.map((item, i) => (
                      <div key={i} className="group cursor-default">
                        <h3 className="font-bold text-gray-900 mb-1.5 text-base group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p
                          className="text-sm font-light leading-relaxed"
                          style={{ color: section.accentColor }}
                        >
                          {item.desc}
                        </p>
                        {i < section.items.length - 1 && (
                          <div className="mt-5 border-b border-white/60" />
                        )}
                      </div>
                    ))}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full text-sm font-semibold mt-4 hover:shadow-lg hover:scale-105 transition-all group"
                      style={{ background: section.accentColor }}
                    >
                      Contact sales{" "}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Reveal>
              </div>
              <Reveal direction="right" delay={0.12}>
                <div className="relative">
                  <div
                    className="absolute -inset-4 rounded-3xl opacity-25 blur-2xl"
                    style={{ background: section.color }}
                  />
                  <div className="relative">{mockups[idx]}</div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* ══════════════════ AJAX DIFFERENCE (dark) ══════════════════ */}
      <section
        className="py-24 sm:py-32 relative overflow-hidden"
        style={{ background: "#0f0f1a" }}
      >
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,233,0.13) 0%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[.22em] text-violet-400 block mb-3 text-center">
              Why us
            </span>
            <h2
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white text-center mb-14"
              style={{ letterSpacing: "-0.02em" }}
            >
              The AJAX Global{" "}
              <span
                className="font-extrabold text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #a78bfa, #38bdf8)",
                }}
              >
                difference
              </span>
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Reveal direction="left">
              <div className="space-y-2">
                {differenceItems.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-6 cursor-pointer transition-all duration-300 border"
                    style={{
                      background:
                        activeDiff === i
                          ? "rgba(124,58,237,0.18)"
                          : "rgba(255,255,255,0.03)",
                      borderColor:
                        activeDiff === i
                          ? "rgba(167,139,250,0.5)"
                          : "rgba(255,255,255,0.07)",
                    }}
                    onClick={() => setActiveDiff(i)}
                  >
                    <div className="text-xs text-slate-500 mb-1 font-medium">
                      {item.label}
                    </div>
                    <div
                      className="text-xl font-bold transition-colors duration-300"
                      style={{
                        color: activeDiff === i ? "#a78bfa" : "#475569",
                      }}
                    >
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <div
                className="rounded-2xl border border-white/10 p-8 shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="text-5xl font-black text-white mb-1">
                  <Counter end={6970} />
                </div>
                <div className="text-sm text-slate-400 font-light mb-8">
                  hours saved per month
                </div>
                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm"
                      style={{
                        background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                      }}
                    >
                      JT
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">
                        James Thornton
                      </div>
                      <div className="text-xs text-violet-400">
                        VP of Procurement, NorthEdge
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 font-light leading-relaxed italic">
                    "It's customizable to your needs. It adapts and wraps around
                    whatever your business requires."
                  </p>
                  <div className="mt-4 text-lg font-black text-white">
                    NorthEdge
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════ BUSINESS NEEDS ══════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[.22em] text-primary block mb-3 text-center">
              Solutions
            </span>
            <h2
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 text-center mb-14"
              style={{ letterSpacing: "-0.02em" }}
            >
              Every business need,{" "}
              <span className="font-extrabold text-primary">covered</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {businessNeeds.map((need, i) => (
              <Reveal key={i} delay={i * 0.09}>
                <div
                  className="rounded-2xl p-6 sm:p-8 h-52 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
                  style={{ background: need.bg }}
                  onMouseEnter={() => setHoveredNeed(i)}
                  onMouseLeave={() => setHoveredNeed(null)}
                >
                  <h3 className="text-xl font-extrabold text-white leading-tight">
                    {need.title}
                  </h3>
                  <div className="text-xs text-white/70 font-semibold">
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
                className="inline-flex items-center gap-2 px-8 py-3.5 text-white rounded-full text-sm font-bold transition-all hover:scale-105 hover:shadow-xl group"
                style={{
                  background: "var(--primary)",
                  boxShadow: "0 6px 24px rgba(124,58,237,0.25)",
                }}
              >
                Contact sales{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════ TRADE SERVICES ══════════════════ */}
      <section className="py-24 sm:py-32" style={{ background: "#f8f7ff" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[.22em] text-primary block mb-3">
                Services
              </span>
              <h2
                className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                Trade & Logistics{" "}
                <span className="font-extrabold text-primary">Services</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                Reliable, scalable, and efficient international trade solutions
                tailored to your business.
              </p>
            </Reveal>
          </div>
          <div className="space-y-5">
            {tradeServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={index} delay={index * 0.07}>
                  <div className="group rounded-2xl bg-white border border-gray-100 p-8 sm:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl group-hover:w-1.5 transition-all duration-300"
                      style={{ background: service.accentColor }}
                    />
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                      <div>
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                          style={{ background: service.color }}
                        >
                          <Icon
                            className="w-7 h-7"
                            style={{ color: service.accentColor }}
                          />
                        </div>
                        <h3 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-light mb-3 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="text-xs text-gray-400 font-medium">
                          <span className="font-bold text-gray-600">
                            Ideal for:{" "}
                          </span>
                          {service.idealFor}
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-[.2em] mb-4">
                          What's Included
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <div
                                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                                style={{ background: service.color }}
                              >
                                <Check
                                  className="w-3 h-3"
                                  style={{ color: service.accentColor }}
                                />
                              </div>
                              <span className="text-sm text-gray-600 font-medium">
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

      {/* ══════════════════ SECURITY ══════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[.22em] text-primary block mb-3 text-center">
              Trust & Safety
            </span>
            <h2
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 text-center mb-14"
              style={{ letterSpacing: "-0.02em" }}
            >
              Enterprise-grade{" "}
              <span className="font-extrabold text-primary">
                security & control
              </span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {securityItems.map((item, i) => (
              <Reveal
                key={i}
                delay={i * 0.1}
                direction={i === 0 ? "left" : "right"}
              >
                <div
                  className="rounded-2xl border p-8 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                  style={{ borderColor: `${item.accentColor}25` }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{ background: `${item.color}60` }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: item.color }}
                      >
                        <Shield
                          className="w-5 h-5"
                          style={{ color: item.accentColor }}
                        />
                      </div>
                      <h3
                        className="text-lg font-extrabold"
                        style={{ color: item.accentColor }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {item.features.map((f, j) => (
                        <div key={j}>
                          <h4 className="font-extrabold text-gray-900 mb-1 text-sm">
                            {f.title}
                          </h4>
                          <p
                            className="text-sm font-light leading-relaxed"
                            style={{ color: item.accentColor }}
                          >
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
                      className="inline-flex items-center gap-1 mt-6 text-sm font-bold hover:gap-2 transition-all"
                      style={{ color: item.accentColor }}
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div
              className="rounded-2xl border border-violet-100 p-8 sm:p-10 grid md:grid-cols-2 gap-8 items-center hover:shadow-lg transition-all duration-300"
              style={{ background: "#f8f7ff" }}
            >
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                  Integrations & apps
                </h3>
                <p className="text-gray-500 font-light mb-6 leading-relaxed">
                  Connect your stack or build your own with our open API
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline group/link"
                >
                  Explore integrations{" "}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="rounded-xl border border-violet-100 bg-white p-4">
                <div className="text-xs font-black text-gray-700 mb-3 uppercase tracking-widest">
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
                      className="flex items-center justify-between text-xs text-gray-600 py-2 border-b border-gray-50"
                    >
                      <span className="font-medium">{lead.split("—")[0]}</span>
                      <span className="font-black text-primary">
                        {lead.split("—")[1]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════ AI VIDEO ══════════════════ */}
      <section className="relative w-full px-4 py-8 md:px-8">
        <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden rounded-3xl shadow-2xl bg-slate-900">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/video-placeholder.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/aivideo.mp4" type="video/mp4" />
            <source src="/your-video.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
        </div>
      </section>

      {/* ══════════════════ EXPERT SERVICES ══════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <Reveal direction="left">
                <span className="text-xs font-bold uppercase tracking-[.22em] text-primary block mb-3">
                  Expert Care
                </span>
                <h2
                  className="text-[clamp(2rem,4vw,3rem)] font-light text-gray-900 mb-6 leading-tight"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Expert services for{" "}
                  <span className="font-extrabold text-primary">
                    lasting success
                  </span>
                </h2>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full text-sm font-bold transition-all group hover:shadow-lg hover:scale-105"
                  style={{ background: "var(--primary)" }}
                >
                  Contact sales{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-xs text-gray-400 mt-3 font-light">
                  Services may require additional costs
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {expertServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                        style={{ background: `${service.color}80` }}
                      />
                      <div className="relative z-10">
                        <div
                          className="w-11 h-11 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                          style={{ background: service.color }}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{ color: service.accent }}
                          />
                        </div>
                        <h3 className="font-extrabold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p
                          className="text-sm font-light leading-relaxed"
                          style={{ color: service.accent }}
                        >
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ TESTIMONIALS ══════════════════ */}
      <section className="py-24 sm:py-32" style={{ background: "#f8f7ff" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[.22em] text-primary block mb-3">
              Client Voices
            </span>
            <h2
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-10"
              style={{ letterSpacing: "-0.02em" }}
            >
              Trusted by top companies{" "}
              <span className="font-extrabold text-primary">worldwide</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div
              className="relative rounded-3xl overflow-hidden min-h-80 grid md:grid-cols-2 border border-gray-800"
              style={{ background: "#0f0f1a" }}
            >
              <div className="relative overflow-hidden min-h-64 md:min-h-0">
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${testimonials[activeTestimonial].gradFrom}45, ${testimonials[activeTestimonial].gradTo}20)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-black text-white opacity-[0.1]">
                      {testimonials[activeTestimonial].metric}
                    </div>
                    <div className="text-white/35 text-sm font-light mt-2">
                      {testimonials[activeTestimonial].metricLabel}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl font-black text-white">
                      {testimonials[activeTestimonial].metric}
                    </div>
                    <div className="text-slate-400 text-sm font-light">
                      {testimonials[activeTestimonial].metricLabel}
                    </div>
                  </div>
                  <p className="text-slate-200 text-base leading-relaxed mb-6 font-light italic">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-sm"
                      style={{
                        background: `linear-gradient(135deg, ${testimonials[activeTestimonial].gradFrom}, ${testimonials[activeTestimonial].gradTo})`,
                      }}
                    >
                      {testimonials[activeTestimonial].initials}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="text-slate-400 text-xs font-light">
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
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveTestimonial((a) => (a + 1) % testimonials.length)
                    }
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="flex gap-2 ml-2">
                    {testimonials.map((t, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTestimonial(i)}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: i === activeTestimonial ? 20 : 8,
                          height: 8,
                          background:
                            i === activeTestimonial
                              ? t.accentColor
                              : "rgba(255,255,255,0.2)",
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

      {/* ══════════════════ AWARDS ══════════════════ */}
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
                  className="rounded-2xl border border-gray-100 p-4 text-center hover:border-violet-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 cursor-default group"
                  style={{ minWidth: "110px" }}
                >
                  <div className="w-7 h-7 rounded-full bg-red-500 mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-xs font-black">G</span>
                  </div>
                  <div className="text-xs font-bold text-gray-700 leading-tight mb-1 group-hover:text-primary transition-colors">
                    {award}
                  </div>
                  <div className="text-xs text-primary font-extrabold">
                    Enterprise
                  </div>
                  <div className="text-xs text-gray-400 font-light">
                    FALL 2024
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════ FAQ ══════════════════ */}
      <section className="py-24 sm:py-32" style={{ background: "#f8f7ff" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[.22em] text-primary block mb-3 text-center">
              FAQ
            </span>
            <h2
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-12 text-center"
              style={{ letterSpacing: "-0.02em" }}
            >
              Frequently Asked{" "}
              <span className="font-extrabold text-primary">Questions</span>
            </h2>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  className="rounded-2xl bg-white border transition-all duration-300 overflow-hidden"
                  style={{
                    borderColor: openFaq === i ? "var(--primary)" : "#e5e7eb",
                    boxShadow:
                      openFaq === i
                        ? "0 4px 24px rgba(124,58,237,0.1)"
                        : "none",
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between p-6 sm:p-7 text-left group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <h3 className="font-extrabold text-gray-900 group-hover:text-primary transition-colors pr-4 text-base">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className="w-5 h-5 flex-shrink-0 transition-all duration-300"
                      style={{
                        color: openFaq === i ? "var(--primary)" : "#9ca3af",
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
                      <p className="text-gray-500 font-light leading-relaxed text-sm">
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

      {/* ══════════════════ FINAL CTA (dark) ══════════════════ */}
      <section
        className="py-24 sm:py-32 relative overflow-hidden"
        style={{ background: "#0f0f1a" }}
      >
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 65%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div>
                <span className="text-xs font-bold uppercase tracking-[.22em] text-violet-400 block mb-4">
                  Get Started
                </span>
                <h2
                  className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white mb-4 leading-tight"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Ready to hear more about our{" "}
                  <span
                    className="font-extrabold text-transparent bg-clip-text bg-primary"
                    
                  >
                    enterprise solutions?
                  </span>
                </h2>
                <p className="text-slate-400 font-light mb-8 text-lg leading-relaxed">
                  Request a callback from our sales team to explore custom
                  pricing plans based on your unique needs and goals.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {["Coca-Cola", "Universal Music", "Canva"].map((brand, i) => (
                    <span
                      key={i}
                      className="font-extrabold text-white/50 text-lg hover:text-white transition-colors cursor-default"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
                <div
                  className="rounded-2xl border border-white/10 p-5 shadow-lg"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <p className="text-sm text-slate-300 font-light italic leading-relaxed mb-4">
                    "Now that all teams are reporting in the same place, our
                    leadership gets a live high-level view of every operation."
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-xs"
                      style={{
                        background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                      }}
                    >
                      KM
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">
                        Kristina Muller
                      </div>
                      <div className="text-xs text-violet-400 font-light">
                        SVP Delivery Operations & PMO
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <div
                className="rounded-2xl border border-white/10 p-8 shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex -space-x-2">
                    {[
                      ["JT", "linear-gradient(135deg,#7c3aed,#4f46e5)"],
                      ["PM", "linear-gradient(135deg,#0ea5e9,#10b981)"],
                      ["CR", "linear-gradient(135deg,#f59e0b,#ef4444)"],
                      ["KM", "linear-gradient(135deg,#8b5cf6,#a78bfa)"],
                    ].map(([init, bg], k) => (
                      <div
                        key={k}
                        className="w-8 h-8 rounded-full border-2 border-[#0f0f1a] flex items-center justify-center text-white text-xs font-black"
                        style={{ background: bg }}
                      >
                        {init}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-200">
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
                      className="w-full px-4 py-3 rounded-xl border text-sm text-white placeholder-white/30 focus:outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        borderColor: "rgba(255,255,255,0.12)",
                      }}
                    />
                  ))}
                  <select
                    className="w-full px-4 py-3 rounded-xl border text-sm text-white/40 focus:outline-none transition-all appearance-none"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      borderColor: "rgba(255,255,255,0.12)",
                    }}
                  >
                    <option>Company size*</option>
                    <option>1-50</option>
                    <option>51-200</option>
                    <option>201-1000</option>
                    <option>1000+</option>
                  </select>
                  <textarea
                    placeholder="Tell us more about your team and what you'd like to explore"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border text-sm text-white placeholder-white/30 focus:outline-none transition-all resize-none"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      borderColor: "rgba(255,255,255,0.12)",
                    }}
                  />
                  <button
                    className="w-full py-3.5 rounded-xl text-white font-extrabold text-sm transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: "var(--primary)",
                      boxShadow: "0 8px 28px rgba(124,58,237,0.38)",
                    }}
                  >
                    Submit
                  </button>
                  <p className="text-xs text-white/25 text-center font-light">
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
