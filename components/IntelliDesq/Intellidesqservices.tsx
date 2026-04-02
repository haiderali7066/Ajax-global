"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Phone, TrendingUp, UserCheck, ShoppingCart, Home, Lock,
  BarChart3, Users, Target, RefreshCw, MessageSquare, Database, ArrowUpRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const roles = [
  { icon: Phone,         slug: "customer-support",           title: "Customer Support",           desc: "Brand-trained agents, zero downtime",             color: "#7c3aed", glow: "#7c3aed20" },
  { icon: TrendingUp,    slug: "sales-lead-generation",      title: "Sales & Lead Generation",    desc: "Closers who treat every lead as sacred",          color: "#2563eb", glow: "#2563eb20" },
  { icon: UserCheck,     slug: "virtual-admin-assistants",   title: "Virtual & Admin Assistants", desc: "Executive support and admin excellence",          color: "#059669", glow: "#05966920" },
  { icon: ShoppingCart,  slug: "ecommerce-management",       title: "E-Commerce Management",      desc: "Shopify, WooCommerce, Amazon — 24/7",            color: "#d97706", glow: "#d9770620" },
  { icon: Home,          slug: "property-management",        title: "Property Management",        desc: "Tenant care, maintenance, rent coordination",     color: "#dc2626", glow: "#dc262620" },
  { icon: Lock,          slug: "it-cybersecurity",           title: "IT & Cybersecurity",         desc: "Technical teams and MSP-level operations",        color: "#94a3b8", glow: "#94a3b820" },
  { icon: BarChart3,     slug: "seo-social-media",           title: "SEO & Social Media",         desc: "Visibility, content, and digital presence",       color: "#7c3aed", glow: "#7c3aed20" },
  { icon: Users,         slug: "custom-remote-teams",        title: "Custom Remote Teams",        desc: "Fully bespoke for your exact industry",           color: "#2563eb", glow: "#2563eb20" },
  { icon: Target,        slug: "client-retention",           title: "Client Retention",           desc: "Proactive relationship defence & loyalty",        color: "#ec4899", glow: "#ec489920" },
  { icon: RefreshCw,     slug: "scheduling-dispatch",        title: "Scheduling & Dispatch",      desc: "60-second rule — every lead captured",            color: "#0ea5e9", glow: "#0ea5e920" },
  { icon: MessageSquare, slug: "multilingual-support",       title: "Multilingual Support",       desc: "English, Spanish, French, Arabic coverage",       color: "#14b8a6", glow: "#14b8a620" },
  { icon: Database,      slug: "data-reporting",             title: "Data & Reporting",           desc: "KPI dashboards and performance analytics",        color: "#8b5cf6", glow: "#8b5cf620" },
];

export default function RolesWeProvide() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative py-10 mt-10 overflow-hidden "
      style={{ background: "#09090f" }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #7c3aed10 0%, transparent 70%)", transform: "translate(-50%, -40%)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #2563eb08 0%, transparent 70%)", transform: "translate(50%, 40%)" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-6xl px-6 mx-auto">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-14"
        >
          
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-black text-white leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Roles we{" "}
            <span className="text-pink-400 bg-clip-text">
              provide
            </span>
          </h2>
          <p
            className="max-w-sm mx-auto mt-4 text-sm font-light leading-relaxed text-gray-500"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Every role covered — specialized or fully custom.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i % 4}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                whileHover={{ y: -5, scale: 1.01 }}
              >
                <Link
                  href={`/roles/${role.slug}`}
                  className="relative flex flex-col h-full p-5 overflow-hidden transition-all duration-300 border cursor-pointer group rounded-2xl"
                  style={{ background: "#0f0f1a", borderColor: "#ffffff0f", textDecoration: "none", display: "flex" }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none group-hover:opacity-100 rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at top left, ${role.glow}, transparent 65%)` }}
                  />

                  {/* Hover border highlight */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none group-hover:opacity-100 rounded-2xl"
                    style={{ boxShadow: `inset 0 0 0 1px ${role.color}25` }}
                  />

                  {/* Icon */}
                  <div
                    className="relative flex items-center justify-center w-10 h-10 mb-4 transition-transform duration-300 rounded-xl group-hover:scale-110"
                    style={{ background: `${role.color}15`, border: `1.5px solid ${role.color}25` }}
                  >
                    <Icon style={{ width: 18, height: 18, color: role.color }} />
                  </div>

                  {/* Title */}
                  <h3
                    className="relative font-bold text-white text-sm mb-1.5 leading-snug"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {role.title}
                  </h3>

                  {/* Desc */}
                  <p
                    className="relative flex-1 text-xs font-light leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-400"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {role.desc}
                  </p>

                  {/* Learn more */}
                  <div className="relative flex items-center gap-1 mt-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <span
                      className="text-xs font-semibold"
                      style={{ color: role.color, fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Learn more
                    </span>
                    <ArrowUpRight style={{ width: 12, height: 12, color: role.color }} />
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${role.color}, transparent)` }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}