"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Phone, TrendingUp, UserCheck, ShoppingCart, Home, Lock,
  BarChart3, Users, Target, RefreshCw, MessageSquare, Database, ArrowUpRight,
} from "lucide-react";
import { fadeUp } from "./shared";

const roles = [
  { icon: Phone,         slug: "customer-support",           title: "Customer Support",           desc: "Brand-trained agents, zero downtime",          color: "#7c3aed" },
  { icon: TrendingUp,    slug: "sales-lead-generation",      title: "Sales & Lead Generation",    desc: "Closers who treat every lead as sacred",       color: "#2563eb" },
  { icon: UserCheck,     slug: "virtual-admin-assistants",   title: "Virtual & Admin Assistants", desc: "Executive support and admin excellence",       color: "#059669" },
  { icon: ShoppingCart,  slug: "ecommerce-management",       title: "E-Commerce Management",      desc: "Shopify, WooCommerce, Amazon — 24/7",         color: "#d97706" },
  { icon: Home,          slug: "property-management",        title: "Property Management",        desc: "Tenant care, maintenance, rent coordination",  color: "#dc2626" },
  { icon: Lock,          slug: "it-cybersecurity",           title: "IT & Cybersecurity",         desc: "Technical teams and MSP-level operations",     color: "#475569" },
  { icon: BarChart3,     slug: "seo-social-media",           title: "SEO & Social Media",         desc: "Visibility, content, and digital presence",    color: "#7c3aed" },
  { icon: Users,         slug: "custom-remote-teams",        title: "Custom Remote Teams",        desc: "Fully bespoke for your exact industry",        color: "#2563eb" },
  { icon: Target,        slug: "client-retention",           title: "Client Retention",           desc: "Proactive relationship defence & loyalty",     color: "#ec4899" },
  { icon: RefreshCw,     slug: "scheduling-dispatch",        title: "Scheduling & Dispatch",      desc: "60-second rule — every lead captured",         color: "#0ea5e9" },
  { icon: MessageSquare, slug: "multilingual-support",       title: "Multilingual Support",       desc: "English, Spanish, French, Arabic coverage",    color: "#14b8a6" },
  { icon: Database,      slug: "data-reporting",             title: "Data & Reporting",           desc: "KPI dashboards and performance analytics",     color: "#8b5cf6" },
];

export default function RolesWeProvide() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 sm:py-20" style={{ background: "#f8f7ff" }} ref={ref}>
      <div className="max-w-6xl px-6 mx-auto">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-12 text-center"
        >
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Roles we <span className="font-extrabold text-red-700">provide</span>
          </h2>
          <p className="max-w-sm mx-auto mt-3 text-sm font-light text-gray-400">
            Every role covered — specialized or fully custom.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i % 4}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                whileHover={{ y: -4 }}
              >
                <Link
                  href={`/hos/roles/${role.slug}`}
                  className="relative flex flex-col h-full p-5 overflow-hidden transition-all duration-300 bg-white border cursor-pointer group rounded-2xl border-gray-200/60 hover:border-indigo-200 hover:shadow-lg"
                  style={{ textDecoration: "none", display: "flex" }}
                >
                  {/* Hover gradient */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none group-hover:opacity-100 rounded-2xl"
                    style={{ background: `linear-gradient(135deg, ${role.color}06, transparent)` }}
                  />

                  {/* Icon */}
                  <div
                    className="relative flex items-center justify-center w-10 h-10 mb-4 transition-transform duration-300 rounded-xl group-hover:scale-110"
                    style={{ background: `${role.color}10`, border: `1.5px solid ${role.color}20` }}
                  >
                    <Icon style={{ width: 18, height: 18, color: role.color }} />
                  </div>

                  {/* Title */}
                  <h3 className="relative mb-1 text-sm font-semibold text-gray-800 transition-colors group-hover:text-indigo-700">
                    {role.title}
                  </h3>

                  {/* Desc */}
                  <p className="relative flex-1 text-xs font-light leading-relaxed text-gray-400">
                    {role.desc}
                  </p>

                  {/* Learn more */}
                  <div className="relative flex items-center gap-1 mt-3 text-indigo-500 transition-opacity opacity-0 group-hover:opacity-100">
                    <span className="text-xs font-medium">Learn more</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}