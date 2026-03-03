"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone, TrendingUp, UserCheck, ShoppingCart, Home, Lock,
  BarChart3, Users, Target, RefreshCw, MessageSquare, Database, ArrowUpRight,
} from "lucide-react";
import { fadeUp } from "./shared";

export default function RolesWeProvide() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const roles = [
    { icon: Phone, title: "Customer Support", desc: "Brand-trained agents, zero downtime", color: "#7c3aed" },
    { icon: TrendingUp, title: "Sales & Lead Generation", desc: "Closers who treat every lead as sacred", color: "#2563eb" },
    { icon: UserCheck, title: "Virtual & Admin Assistants", desc: "Executive support and admin excellence", color: "#059669" },
    { icon: ShoppingCart, title: "E-Commerce Management", desc: "Shopify, WooCommerce, Amazon — 24/7", color: "#d97706" },
    { icon: Home, title: "Property Management", desc: "Tenant care, maintenance, rent coordination", color: "#dc2626" },
    { icon: Lock, title: "IT & Cybersecurity", desc: "Technical teams and MSP-level operations", color: "#475569" },
    { icon: BarChart3, title: "SEO & Social Media", desc: "Visibility, content, and digital presence", color: "#7c3aed" },
    { icon: Users, title: "Custom Remote Teams", desc: "Fully bespoke for your exact industry", color: "#2563eb" },
    { icon: Target, title: "Client Retention", desc: "Proactive relationship defence & loyalty", color: "#ec4899" },
    { icon: RefreshCw, title: "Scheduling & Dispatch", desc: "60-second rule — every lead captured", color: "#0ea5e9" },
    { icon: MessageSquare, title: "Multilingual Support", desc: "English, Spanish, French, Arabic coverage", color: "#14b8a6" },
    { icon: Database, title: "Data & Reporting", desc: "KPI dashboards and performance analytics", color: "#8b5cf6" },
  ];

  return (
    <section className="py-16 sm:py-20" style={{ background: "#f8f7ff" }} ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-12">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            Roles we <span className="text-red-700 font-extrabold">provide</span>
          </h2>
          <p className="text-gray-400 font-light mt-3 max-w-sm mx-auto text-sm">Every role covered — specialized or fully custom.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i % 4}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="group bg-white rounded-2xl p-5 border border-gray-200/60 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
                whileHover={{ y: -4 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${role.color}05, transparent)` }}
                />
                <div
                  className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${role.color}10`, border: `1.5px solid ${role.color}20` }}
                >
                  <Icon style={{ width: 18, height: 18, color: role.color }} />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1 group-hover:text-indigo-700 transition-colors">{role.title}</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">{role.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-medium">Learn more</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
