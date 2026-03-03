"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { C, vFadeUp, vStagger, vPop, Mag, Count } from "./shared";

interface SubService {
  id: string;
  label: string;
  description: string;
  href: string;
  color: string; // now a named color
}

interface MainService {
  id: string;
  label: string;
  headline: string;
  description: string;
  color: string; // named color
  stat: {
    v: number;
    s: string;
    l: string;
  };
  href: string;
  subServices: SubService[];
}

// Tailwind-like color map
const COLORS: Record<string, string> = {
  primary: "#6366f1", // Indigo
  yellow: "#facc15",
  sky: "#0ea5e9",
  pink: "#ec4899",
  green: "#10b981",
  teal: "#14b8a6",
  cyan: "#06b6d4",
};

const mainServices: MainService[] = [
  {
    id: "intellidesq",
    label: "INTELLIDESQ™",
    headline: "Automation that amplifies, not replaces.",
    description:
      "AI agents, workflows, and intelligent automation built to make your team unstoppable. From chat to voice to full business process automation.",
    color: "primary",
    stat: { v: 99.8, s: "%", l: "AI Uptime Guaranteed" },
    href: "/intellidesq",
    subServices: [
      {
        id: "ai-voice",
        label: "AI Voice Agents",
        description: "24/7 call handling with human-like conversations",
        href: "/intellidesq/voice",
        color: "pink",
      },
      {
        id: "ai-lead-gen",
        label: "AI Lead Generation",
        description: "Instant follow-up within 60 seconds",
        href: "/intellidesq/lead-gen",
        color: "primary",
      },
      {
        id: "ai-social",
        label: "AI Social Media",
        description: "24/7 engagement across all platforms",
        href: "/intellidesq/social",
        color: "sky",
      },
      {
        id: "ai-chat",
        label: "AI Chat Agent",
        description: "Instant customer support, always available",
        href: "/intellidesq/chat",
        color: "yellow",
      },
      {
        id: "ai-workflow",
        label: "AI Workflow Automation",
        description: "Eliminate manual processes, scale without headcount",
        href: "/intellidesq/workflow",
        color: "cyan",
      },
    ],
  },
  {
    id: "hos",
    label: "HUMAN OUTSOURCING SOLUTIONS",
    headline: "Elite teams. Zero friction. Real results.",
    description:
      "Fully trained, managed remote teams that perform like your best in-house department. Reliability, professionalism, and results you can count on.",
    color: "green",
    stat: { v: 99.9, s: "%", l: "Attendance Guaranteed" },
    href: "/hos",
    subServices: [
      {
        id: "sales-lead",
        label: "Sales & Lead Generation",
        description:
          "Trained sales teams that inject discipline, persistence, and relentless follow-up into your pipeline. Multi-channel prospecting that turns cold leads into closed deals.",
        href: "/hos/sales",
        color: "teal",
      },
      {
        id: "customer-service",
        label: "Customer Service",
        description:
          "Elite support teams trained as true brand ambassadors. 24/7 availability with your brand voice, protecting reputation and turning frustrated customers into loyal advocates.",
        href: "/hos/customer-service",
        color: "green",
      },
      {
        id: "property-mgmt",
        label: "Property Management",
        description:
          "Bring order to chaos. Handle tenant calls, maintenance requests, move-ins, and rent coordination. Your operational backbone, so you focus on growth.",
        href: "/hos/property-management",
        color: "primary",
      },
      {
        id: "it-support",
        label: "IT Support & Cybersecurity",
        description:
          "Full-time IT management, MSP infrastructure, and 24/7 cybersecurity monitoring. Managed IT, cloud solutions, and threat protection — enterprise-grade, startup-friendly.",
        href: "/hos/it-support",
        color: "cyan",
      },
      {
        id: "social-media",
        label: "Social Media Marketing",
        description:
          "Complete digital presence engineering. AI + human creativity blended into scroll-stopping content, consistent engagement, and measurable growth across all platforms.",
        href: "/hos/social-media",
        color: "pink",
      },
    ],
  },
];

export default function ServiceSelector() {
  const ref = useRef<HTMLElement>(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });
  const [selMain, setSelMain] = useState<number>(0);
  const [selSub, setSelSub] = useState<number>(0);

  const main: MainService = mainServices[selMain];
  const sub: SubService = main.subServices[selSub];

  return (
    <section className="py-16 sm:py-24 bg-white px-10" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          variants={vFadeUp}
          initial="hidden"
          animate={iv ? "show" : "hidden"}
          className="text-3xl sm:text-5xl md:text-6xl font-light text-center text-slate-900 mb-14"
        >
          Where would you like to{" "}
          <span className="font-extrabold" style={{ color: COLORS[main.color] }}>
            start
          </span>
        </motion.h2>

        {/* Main Service Tabs */}
        <motion.div
          variants={vStagger}
          initial="hidden"
          animate={iv ? "show" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {mainServices.map((service, i) => {
            const active = selMain === i;
            return (
              <motion.button
                key={service.id}
                variants={vPop}
                custom={i}
                onClick={() => {
                  setSelMain(i);
                  setSelSub(0);
                }}
                className="relative px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  background: active ? COLORS[service.color] : "#fff",
                  borderColor: COLORS[service.color],
                  color: active ? "#fff" : COLORS[service.color],
                  boxShadow: active
                    ? `0 6px 24px ${COLORS[service.color]}55`
                    : `0 1px 4px ${COLORS[service.color]}22`,
                  transform: active ? "scale(1.06)" : "scale(1)",
                  fontWeight: 700,
                }}
              >
                {service.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Sub Service Pills */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`sub-row-${selMain}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap justify-center gap-2 mb-14"
          >
            {main.subServices.map((service, i) => {
              const active = selSub === i;
              return (
                <motion.button
                  key={service.id}
                  variants={vPop}
                  custom={i}
                  onClick={() => setSelSub(i)}
                  className="px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-250 border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
                  style={{
                    background: active ? COLORS[service.color] : "#f1f5f9",
                    borderColor: active ? COLORS[service.color] : "transparent",
                    color: active ? "#fff" : "#334155",
                    boxShadow: active
                      ? `0 4px 14px ${COLORS[service.color]}44`
                      : "none",
                    transform: active ? "scale(1.04)" : "scale(1)",
                  }}
                >
                  {service.label}
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selMain}-${selSub}`}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -22 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            {/* Left: Text */}
            <div className="space-y-6 order-2 lg:order-1">
              <div
                className="inline-flex items-center border-2 rounded-xl px-5 py-2.5 shadow-sm"
                style={{ borderColor: COLORS[main.color], background: `${COLORS[main.color]}0d` }}
              >
                <p className="text-xs font-black tracking-widest uppercase" style={{ color: COLORS[main.color] }}>
                  {main.label}
                </p>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                {sub.label}
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed">{sub.description}</p>
              <p className="text-base text-slate-500 leading-relaxed">{main.description}</p>

              {/* CTA */}
              <div className="pt-2">
                <Button
                  asChild
                  size="lg"
                  className="font-bold rounded-full px-8 h-12 hover:opacity-90 hover:scale-[1.03] transition-all duration-300 group text-white shadow-lg"
                  style={{
                    background: COLORS[sub.color],
                    boxShadow: `0 8px 28px ${COLORS[sub.color]}55`,
                  }}
                >
                  <Link href={sub.href} className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Feature Card */}
            <div
              className="rounded-3xl text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl order-1 lg:order-2 min-h-[360px] flex flex-col justify-between"
              style={{
                background: `linear-gradient(135deg, ${COLORS[main.color]} 0%, ${COLORS[main.color]}cc 100%)`,
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <motion.div
                className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: "rgba(255,255,255,0.15)", filter: "blur(50px)" }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-10 space-y-8">
                <div>
                  <p className="text-white/60 text-xs font-black tracking-[.2em] uppercase mb-1">
                    Key Metric
                  </p>
                  <div className="text-5xl font-black tabular-nums">
                    <Count to={main.stat.v} suf={main.stat.s} />
                  </div>
                  <div className="text-white/65 text-sm font-semibold mt-1">{main.stat.l}</div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <h4 className="text-2xl font-bold mb-3">{main.headline}</h4>
                  <p className="text-white/80 text-sm leading-relaxed">{main.description}</p>
                </div>

                <Mag>
                  <Button
                    asChild
                    size="lg"
                    className="font-bold rounded-full px-7 h-12 w-full hover:scale-[1.03] hover:opacity-95 transition-all duration-300 group shadow-lg"
                    style={{
                      background: "#ffffff",
                      color: COLORS[main.color],
                    }}
                  >
                    <Link href={main.href} className="flex items-center justify-center gap-2">
                      Explore {main.label}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </Mag>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}