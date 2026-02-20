"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Globe,
  Users,
  Zap,
  CheckCircle,
  Star,
  
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Animation Settings
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#323338] font-sans selection:bg-blue-100">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-4 text-center max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-[80px] font-black tracking-tight leading-[1.1] mb-8"
          >
            Our story is about <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] via-[#ff64a1] to-[#c879ff]">
              human intelligence & AI
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto mb-10"
          >
            How we're transforming business operations through the perfect blend
            of human talent and AI intelligence.
          </motion.p>
        </motion.div>
      </section>

      {/* --- STATS GRID (Visual Dashboard Style) --- */}
      <section className="py-20 bg-[#fcfcfc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-black mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                AJAX Global was founded on a simple belief: businesses need more
                than just automation. They need intelligence combined with human
                excellence.
              </p>
              <p>
                We saw companies struggling to scale, so we built both—elite
                human teams paired with
                <span className="font-bold text-[#0073ea]"> IntelliDesq™</span>,
                our AI-powered platform.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                label: "Countries",
                value: "15+",
                color: "bg-blue-50 text-blue-600",
              },
              {
                label: "Enterprise Clients",
                value: "500+",
                color: "bg-green-50 text-green-600",
              },
              {
                label: "Team Members",
                value: "2,000+",
                color: "bg-purple-50 text-purple-600",
              },
              {
                label: "Managed Ops",
                value: "$1B+",
                color: "bg-pink-50 text-pink-600",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className={`${stat.color} p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center`}
              >
                <div className="text-4xl font-black mb-2">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-wider opacity-70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- TIMELINE (Vertical High Contrast) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">Our Journey</h2>
            <p className="text-gray-500">
              Key milestones that shaped AJAX Global
            </p>
          </div>

          <div className="space-y-12 relative">
            {/* Center Line */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gray-100 hidden md:block"></div>

            {[
              {
                year: "2018",
                event:
                  "AJAX Global founded with a vision to combine human excellence with AI.",
                icon: Star,
              },
              {
                year: "2020",
                event:
                  "Expanded to 5 countries, serving 100+ enterprise clients.",
                icon: Globe,
              },
              {
                year: "2022",
                event:
                  "Launched IntelliDesq™ - Revolutionary operational intelligence platform.",
                icon: Zap,
              },
              {
                year: "2024",
                event:
                  "Reached unicorn status with $1B+ in managed operations.",
                icon: Award,
              },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 items-start relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-50 shadow-lg flex items-center justify-center flex-shrink-0 text-[#0073ea]">
                  <m.icon size={28} />
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-black mb-2">{m.year}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {m.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VALUES (Card Style) --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "People First",
                desc: "Our foundation is built on empowering talented individuals.",
                color: "border-t-[#ffcb00]",
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "We pursue the highest standards in everything we do.",
                color: "border-t-[#ff642c]",
              },
              {
                icon: Globe,
                title: "Global Impact",
                desc: "We serve businesses worldwide, supporting growth across industries.",
                color: "border-t-[#00c875]",
              },
            ].map((val, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`bg-white p-10 rounded-2xl shadow-xl border-t-8 ${val.color} border-x border-b border-gray-100`}
              >
                <div className="bg-gray-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <val.icon className="text-gray-700" size={30} />
                </div>
                <h3 className="text-2xl font-black mb-4">{val.title}</h3>
                <p className="text-gray-600 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wrok Flow section */}
      <section className="relative w-full py-24 bg-white font-sans overflow-hidden">
        {/* 1. Grid Background Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* 2. Header Content */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              Agentic <span className="text-blue-500">workflows</span> that{" "}
              <br /> run work end to end
            </h2>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Visually build, automate, and manage complex cross-functional
              processes with AI.
            </p>
          </div>

          {/* 3. The Workflow Diagram */}
          <div className="flex flex-col items-center">
            {/* Trigger Node */}
            <div className="flex items-center gap-12 mb-8">
              <div className="hidden md:block text-right max-w-[180px]">
                <p className="font-bold text-sm">Trigger</p>
                <p className="text-xs text-slate-500">
                  Set the event that kicks off the workflow
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex items-center gap-3 w-64 ring-4 ring-green-500/10">
                <span className="bg-green-500 p-1 rounded text-white text-[10px]">
                  ⚡
                </span>
                <span className="text-sm font-medium">
                  When ticket is created
                </span>
              </div>
            </div>

            {/* Vertical Connector */}
            <div className="h-10 w-[2px] bg-slate-200 mb-2"></div>

            {/* AI Action Node */}
            <div className="flex items-center gap-12 mb-8">
              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-md flex items-center gap-3 w-72 border-b-4 border-b-purple-400">
                <span className="bg-purple-100 p-1.5 rounded text-purple-600">
                  ✨
                </span>
                <span className="text-sm font-medium">
                  Check ticket severity
                </span>
              </div>
              <div className="hidden md:block max-w-[180px]">
                <p className="font-bold text-sm">AI actions</p>
                <p className="text-xs text-slate-500">
                  Let AI run the logic, conditions and what happens next
                </p>
              </div>
            </div>

            {/* Split Path */}
            <div className="relative w-full max-w-2xl">
              <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-slate-200"></div>

              <div className="grid grid-cols-2 gap-12 pt-10">
                {/* Left Branch (Yes) */}
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-white border border-slate-200 rounded-lg p-3 w-full shadow-sm flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-pink-100 overflow-hidden" />
                    <span className="text-xs font-semibold uppercase text-slate-400">
                      Escalation Caller Agent
                    </span>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-lg p-3 w-full shadow-sm text-xs font-medium">
                    Assign on-call team
                  </div>
                </div>

                {/* Right Branch (No) */}
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-white border border-slate-200 rounded-lg p-3 w-full shadow-sm flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 overflow-hidden" />
                    <span className="text-xs font-semibold uppercase text-slate-400">
                      Ticket Resolver Agent
                    </span>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-lg p-3 w-full shadow-sm flex items-center gap-2">
                    <img
                      src="https://www.google.com/favicon.ico"
                      className="w-4 h-4"
                    />
                    <span className="text-xs">Send Gmail notification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* --- CTA SECTION --- */}
      <section className="py-32 bg-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto px-4"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1]">
            Ready to scale with <br />
            <span className="text-[#0073ea]">human-AI excellence?</span>
          </h2>
          <Link href="/contact">
            <button className="bg-[#0073ea] hover:bg-[#0060c2] text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-lg hover:shadow-2xl flex items-center gap-2 mx-auto">
              Get Started <ArrowRight size={24} />
            </button>
          </Link>
          <p className="mt-8 text-gray-500 font-medium tracking-wide uppercase text-sm">
            Join 500+ enterprises already scaling
          </p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
