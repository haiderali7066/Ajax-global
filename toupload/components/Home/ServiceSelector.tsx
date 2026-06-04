"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { vFadeUp, vStagger, vPop, Mag, Count } from "./shared";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
interface SubService {
  id: string;
  label: string;
  tagline: string;
  description: string;
  features: string[];
  href: string;
  color: string;
  stat: { v: number; s: string; l: string };
}

interface MainService {
  id: string;
  label: string;
  headline: string;
  description: string;
  color: string;
  stat: { v: number; s: string; l: string };
  href: string;
  subServices: SubService[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Data — real AJAX Global content, visually distinct color per sub-service
//
// IntelliDesq family: indigo · violet · blue · fuchsia · cyan
// HOS family:        emerald · teal · lime · sky · amber
// ─────────────────────────────────────────────────────────────────────────────
const mainServices: MainService[] = [
  {
    id: "intellidesq",
    label: "INTELLIDESQ™",
    headline: "Automation that amplifies, not replaces.",
    description:
      "A unified ecosystem of AI agents, voice systems, and intelligent automation — built to make your team unstoppable. From customer chat to full business process automation, all under one platform.",
    color: "#6366f1",
    stat: { v: 99.8, s: "%", l: "AI Uptime Guaranteed" },
    href: "/intellidesq",
    subServices: [
      {
        id: "ai-chat",
        label: "AI Chat Agents",
        tagline: "Your Website's Smartest Employee",
        description:
          "RAG-powered AI agents trained on your exact business data, tone, and logic. Handles lead qualification, appointment booking, and 24/7 customer support — no human lag, no missed queries, no ghost chats.",
        features: [
          "RAG-Powered Knowledge Base",
          "24/7 Availability — Zero Downtime",
          "Lead Qualification & Routing",
          "CRM & Calendar Integration",
          "Auto Human-Escalation Triggers",
        ],
        href: "/intellidesq/chat",
        color: "#6366f1",      // indigo
        stat: { v: 1.2, s: "s", l: "Avg. Response Latency" },
      },
      {
        id: "ai-voice",
        label: "AI Voice Agents",
        tagline: "The Human Voice, Reimagined",
        description:
          "Adaptive voice agents handling inbound and outbound calls with real human intonation and sentiment awareness. Smart routing, CRM sync, and TCPA compliance — 24/7, never fatigued, never missing a call.",
        features: [
          "Inbound & Outbound Call Handling",
          "Real-Time Sentiment Awareness",
          "Automatic CRM Logging",
          "Smart Intent-Based Routing",
          "TCPA, GDPR & HIPAA Compliant",
        ],
        href: "/intellidesq/voice",
        color: "#7c3aed",      // violet — warmer, deeper purple
        stat: { v: 96, s: "%", l: "Voice Call Accuracy" },
      },
      {
        id: "ai-lead-gen",
        label: "AI Lead Generation",
        tagline: "60 Seconds to Close the Deal",
        description:
          "AI agents that follow up with every new lead within 60 seconds of form submission — qualifying, scoring, and booking appointments before competitors even open the lead list.",
        features: [
          "60-Second Lead Response Rule",
          "Automatic Qualification Flows",
          "Calendar Sync & Booking",
          "Intent-Based Lead Scoring",
          "Multi-Channel Follow-Up (Voice, SMS, Chat)",
        ],
        href: "/intellidesq/lead-gen",
        color: "#1d4ed8",      // blue — clearly cool vs purple
        stat: { v: 7, s: "×", l: "Higher Conversion in 60s" },
      },
      {
        id: "ai-social",
        label: "AI Social Media",
        tagline: "24/7 Engagement That Never Sleeps",
        description:
          "A fully autonomous social operations system — AI generates captions, schedules posts, responds to DMs, tracks competitor trends in real time, and learns what performs best.",
        features: [
          "AI Caption & Content Generation",
          "Auto-Scheduling Across All Platforms",
          "DM & Comment Engagement Engine",
          "Real-Time Competitor Trend Tracking",
          "Performance Learning Loop",
        ],
        href: "/intellidesq/social",
        color: "#c026d3",      // fuchsia — bright, warm pop
        stat: { v: 24, s: "/7", l: "Platform Engagement" },
      },
      {
        id: "ai-workflow",
        label: "AI Workflow Automation",
        tagline: "The Backbone of Digital Efficiency",
        description:
          "Connect your CRM, email, sales, and operations into one synchronized digital nervous system. Eliminate 30–40% of manual work, scale without headcount, and let AI handle execution.",
        features: [
          "End-to-End System Integration",
          "AI Logic & Decision Layer",
          "Automated Reporting & Alerts",
          "Scalable Without Adding Headcount",
          "Real-Time Auditable Analytics",
        ],
        href: "/intellidesq/workflow",
        color: "#0891b2",      // cyan — cool teal contrast
        stat: { v: 99, s: "%", l: "Workflow Success Rate" },
      },
    ],
  },

  {
    id: "hos",
    label: "HUMAN OUTSOURCING",
    headline: "Elite teams. Zero friction. Real results.",
    description:
      "Fully trained, managed remote teams that perform like your best in-house department — deployed in 7 days, backed by AJAX's redundancy systems, performance tracking, and 99.9% attendance guarantee.",
    color: "#10b981",
    stat: { v: 99.9, s: "%", l: "Attendance Guaranteed" },
    href: "/hos",
    subServices: [
      {
        id: "customer-service",
        label: "Customer Service",
        tagline: "Unrivaled. Unmatched. Unstoppable.",
        description:
          "Elite brand ambassadors trained to protect your reputation, turn frustrated customers into loyal fans, and maintain 24/7 coverage through AJAX's redundancy model — daily QA, zero unannounced absences.",
        features: [
          "24/7 Operational Reliability",
          "Daily QA Evaluations",
          "Cultural Adaptability & Brand Voice",
          "Backup Agent Coverage Always Ready",
          "True Brand Ambassador Training",
        ],
        href: "/hos/customer-service",
        color: "#10b981",      // emerald
        stat: { v: 99.9, s: "%", l: "Attendance Guaranteed" },
      },
      {
        id: "sales-lead",
        label: "Sales & Lead Generation",
        tagline: "The Saviours of Revenue",
        description:
          "Dedicated sales teams operating under your brand with multi-channel prospecting — cold calls, SMS, email, and LinkedIn — relentless follow-up until every lead is converted or confirmed lost.",
        features: [
          "Multi-Channel Outreach Strategy",
          "CRM-Integrated Pipeline Management",
          "5+ Structured Follow-Ups Per Lead",
          "Industry-Specific Closer Training",
          "100% Commission Transparency to Reps",
        ],
        href: "/hos/sales",
        color: "#0f766e",      // teal — darker, cooler green
        stat: { v: 5, s: "+", l: "Minimum Follow-Ups Per Lead" },
      },
      {
        id: "property-mgmt",
        label: "Property Management",
        tagline: "The Calm in the Chaos",
        description:
          "Trained support teams handling tenant calls, maintenance requests, rent coordination, and vendor communication — with AppFolio and Buildium expertise. You focus on growth; we handle the chaos.",
        features: [
          "24/7 Tenant Call Management",
          "Maintenance Request Logging & Tracking",
          "Rent Coordination & Payment Reminders",
          "AppFolio & Buildium Expertise",
          "Vendor Communication & Invoice Follow-Up",
        ],
        href: "/hos/property-management",
        color: "#65a30d",      // lime — warm yellow-green, clearly distinct
        stat: { v: 100, s: "%", l: "Requests Logged & Tracked" },
      },
      {
        id: "it-support",
        label: "IT Support & Cybersecurity",
        tagline: "Your Digital Fortress",
        description:
          "Full MSP infrastructure management with 24/7 cybersecurity monitoring, firewall hardening, threat detection, and enterprise-grade disaster recovery — GDPR, HIPAA & SOC 2 compliant.",
        features: [
          "24/7 Remote Monitoring & Management (RMM)",
          "Firewall Hardening & EDR / SIEM",
          "GDPR, HIPAA & SOC 2 Compliance",
          "Disaster Recovery & BCDR Planning",
          "Cloud & On-Prem Infrastructure (AWS, Azure, GCP)",
        ],
        href: "/hos/it-support",
        color: "#0284c7",      // sky blue — cool tech feel
        stat: { v: 99.9, s: "%", l: "Guaranteed System Uptime" },
      },
      {
        id: "social-media",
        label: "Social Media Marketing",
        tagline: "Digital God Mode",
        description:
          "Complete digital presence engineering — strategy, scroll-stopping content creation, community management, and analytics wrapped in a human + AI workflow that makes your brand impossible to ignore.",
        features: [
          "Full Content Creation & Visual Design",
          "Community & DM Management",
          "Monthly Analytics & Growth Reporting",
          "Optional Paid Ad Campaign Management",
          "Facebook, Instagram, LinkedIn, TikTok & More",
        ],
        href: "/hos/social-media",
        color: "#d97706",      // amber — warm, punchy, totally different
        stat: { v: 7, s: "+", l: "Platforms Actively Managed" },
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Animation variants
// ─────────────────────────────────────────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.22, ease: [0.55, 0, 1, 0.45] },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export default function ServiceSelector() {
  const ref = useRef<HTMLElement>(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });
  const [selMain, setSelMain] = useState<number>(0);
  const [selSub, setSelSub] = useState<number>(0);

  const main = mainServices[selMain];
  const sub = main.subServices[selSub];

  const handleMainSelect = (i: number) => {
    setSelMain(i);
    setSelSub(0);
  };

  return (
    <section className="py-16 sm:py-24 bg-white" ref={ref}>
      {/* Section horizontal padding */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* ── Heading ──────────────────────────────────────────────────────── */}
        <motion.h2
          variants={vFadeUp}
          initial="hidden"
          animate={iv ? "show" : "hidden"}
          className="text-3xl sm:text-5xl md:text-6xl font-light text-center text-slate-900 mb-14"
        >
          Where would you like to{" "}
          <motion.span
            key={selMain}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="font-extrabold"
            style={{ color: main.color }}
          >
            start
          </motion.span>
        </motion.h2>

        {/* ── Main Service Tabs — equal-width 2-col grid ───────────────────── */}
        <motion.div
          variants={vStagger}
          initial="hidden"
          animate={iv ? "show" : "hidden"}
          className="grid grid-cols-2 gap-3 max-w-2xl mx-auto mb-5"
        >
          {mainServices.map((service, i) => {
            const active = selMain === i;
            return (
              <motion.button
                key={service.id}
                variants={vPop}
                custom={i}
                onClick={() => handleMainSelect(i)}
                className="w-full py-3.5 px-4 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  background: active ? service.color : "#ffffff",
                  borderColor: service.color,
                  color: active ? "#ffffff" : service.color,
                  boxShadow: active
                    ? `0 6px 28px ${service.color}55`
                    : `0 1px 4px ${service.color}22`,
                  transform: active ? "scale(1.04)" : "scale(1)",
                }}
              >
                {service.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* ── Sub-Service Pills — equal-width grid, rounded-full ───────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`sub-row-${selMain}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 max-w-4xl mx-auto mb-14"
          >
            {main.subServices.map((service, i) => {
              const active = selSub === i;
              return (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.22 }}
                  onClick={() => setSelSub(i)}
                  className="w-full py-2.5 px-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-250 border-2 focus-visible:outline-none leading-snug"
                  style={{
                    background: active ? service.color : `${service.color}15`,
                    borderColor: active ? service.color : `${service.color}40`,
                    color: active ? "#ffffff" : service.color,
                    boxShadow: active ? `0 4px 16px ${service.color}44` : "none",
                    transform: active ? "scale(1.04)" : "scale(1)",
                  }}
                >
                  {service.label}
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* ── Content Block ─────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selMain}-${selSub}`}
            variants={cardVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid lg:grid-cols-2 gap-10 items-center"
          >

            {/* Left: Text Content */}
            <div className="space-y-6 order-2 lg:order-1">
              {/* Label badge */}
              <div
                className="inline-flex items-center gap-2 border-2 rounded-full px-5 py-2.5 shadow-sm"
                style={{ borderColor: sub.color, background: `${sub.color}10` }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: sub.color }}
                />
                <p
                  className="text-xs font-black tracking-widest uppercase"
                  style={{ color: sub.color }}
                >
                  {main.label}
                </p>
              </div>

              {/* Tagline + Heading */}
              <div>
                <p
                  className="text-sm font-semibold mb-1.5"
                  style={{ color: sub.color }}
                >
                  {sub.tagline}
                </p>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                  {sub.label}
                </h3>
              </div>

              {/* Description */}
              <p className="text-lg text-slate-600 leading-relaxed">
                {sub.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-2.5">
                {sub.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-slate-700"
                  >
                    <CheckCircle2
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: sub.color }}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More CTA */}
              <div className="pt-2">
                <Button
                  asChild
                  size="lg"
                  className="font-bold rounded-full px-8 h-12 hover:opacity-90 hover:scale-[1.03] transition-all duration-300 group text-white shadow-lg"
                  style={{
                    background: sub.color,
                    boxShadow: `0 8px 28px ${sub.color}50`,
                  }}
                >
                  <Link href={sub.href} className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Stats Card — color follows selected sub-service */}
            <div
              className="rounded-3xl text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl order-1 lg:order-2 min-h-[380px] flex flex-col justify-between"
              style={{
                background: `linear-gradient(135deg, ${sub.color} 0%, ${sub.color}bb 100%)`,
                transition: "background 0.45s ease",
              }}
            >
              {/* Grid texture */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Ambient glow */}
              <motion.div
                className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: "rgba(255,255,255,0.18)", filter: "blur(56px)" }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-10 space-y-8">
                {/* Animated stat counter */}
                <div>
                  <p className="text-white/60 text-xs font-black tracking-[.2em] uppercase mb-1">
                    Key Metric
                  </p>
                  <div className="text-5xl sm:text-6xl font-black tabular-nums leading-none">
                    <Count key={`${selMain}-${selSub}`} to={sub.stat.v} suf={sub.stat.s} />
                  </div>
                  <div className="text-white/70 text-sm font-semibold mt-2">
                    {sub.stat.l}
                  </div>
                </div>

                {/* Tagline + description */}
                <div className="border-t border-white/20 pt-6">
                  <h4 className="text-xl sm:text-2xl font-bold mb-3">{sub.tagline}</h4>
                  <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
                    {sub.description}
                  </p>
                </div>

                {/* Explore main service CTA */}
                <Mag>
                  <Button
                    asChild
                    size="lg"
                    className="font-bold rounded-full px-7 h-12 w-full hover:scale-[1.03] hover:opacity-95 transition-all duration-300 group shadow-lg"
                    style={{
                      background: "#ffffff",
                      color: sub.color,
                      transition: "color 0.45s ease",
                    }}
                  >
                    <Link
                      href={main.href}
                      className="flex items-center justify-center gap-2"
                    >
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