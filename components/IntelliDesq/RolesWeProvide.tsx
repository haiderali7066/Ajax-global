"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Cpu, Palette, Code2, Smartphone, Fingerprint, Map,
  Search, BarChart3, TrendingUp, Server, Database, Layers, ArrowUpRight,
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
  { icon: Cpu,         slug: "ai-automation",           title: "AI & Automation",          desc: "Intelligent workflows, zero manual overhead",    color: "#7c3aed", glow: "#7c3aed14" },
  { icon: Palette,     slug: "ui-ux-design",             title: "UI / UX Design",           desc: "Interfaces that convert and delight",            color: "#ec4899", glow: "#ec489914" },
  { icon: Code2,       slug: "web-development",          title: "Web Development",          desc: "Fast, scalable, and built to last",              color: "#2563eb", glow: "#2563eb14" },
  { icon: Smartphone,  slug: "mobile-app-development",   title: "Mobile App Development",   desc: "iOS & Android, shipped on time",                 color: "#059669", glow: "#05966914" },
  { icon: Fingerprint, slug: "brand-identity",           title: "Brand Identity",           desc: "Brands built to be remembered",                  color: "#d97706", glow: "#d9770614" },
  { icon: Map,         slug: "product-strategy",         title: "Product Strategy",         desc: "Roadmaps that align teams and ship value",       color: "#0ea5e9", glow: "#0ea5e914" },
  { icon: Search,      slug: "seo-content",              title: "SEO & Content",            desc: "Organic growth that compounds over time",        color: "#14b8a6", glow: "#14b8a614" },
  { icon: BarChart3,   slug: "data-analytics",           title: "Data & Analytics",         desc: "Turn your data into your unfair advantage",      color: "#8b5cf6", glow: "#8b5cf614" },
  { icon: TrendingUp,  slug: "growth-marketing",         title: "Growth Marketing",         desc: "Paid and organic engines, built to scale",       color: "#dc2626", glow: "#dc262614" },
  { icon: Server,      slug: "devops-infrastructure",    title: "DevOps & Infrastructure",  desc: "Ship faster with zero-downtime confidence",      color: "#64748b", glow: "#64748b14" },
  { icon: Database,    slug: "crm-revops",               title: "CRM & RevOps",             desc: "Revenue systems that actually work together",    color: "#f59e0b", glow: "#f59e0b14" },
  { icon: Layers,      slug: "custom-solutions",         title: "Custom Solutions",         desc: "Built entirely around your problem",             color: "#6366f1", glow: "#6366f114" },
];

export default function RolesWeProvide() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative py-10 mt-10 overflow-hidden"
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

      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #c4beed 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.35,
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
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1.05] tracking-tight"
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
                  href={`/intellidesq/roles/${role.slug}`}
                  className="relative flex flex-col h-full p-5 overflow-hidden transition-all duration-300 border cursor-pointer group rounded-2xl"
                  style={{
                    background: "#ffffff",
                    borderColor: "#e4e2f5",
                    textDecoration: "none",
                    display: "flex",
                    boxShadow: "0 2px 8px rgba(100,90,180,0.05)",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none group-hover:opacity-100 rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at top left, ${role.glow}, transparent 65%)` }}
                  />

                  {/* Hover border highlight */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none group-hover:opacity-100 rounded-2xl"
                    style={{ boxShadow: `inset 0 0 0 1.5px ${role.color}30` }}
                  />

                  {/* Icon */}
                  <div
                    className="relative flex items-center justify-center w-10 h-10 mb-4 transition-transform duration-300 rounded-xl group-hover:scale-110"
                    style={{
                      background: `${role.color}10`,
                      border: `1.5px solid ${role.color}25`,
                    }}
                  >
                    <Icon style={{ width: 18, height: 18, color: role.color }} />
                  </div>

                  {/* Title */}
                  <h3
                    className="relative font-bold text-sm mb-1.5 leading-snug"
                    style={{ fontFamily: "'Syne', sans-serif", color: "#0d0d1a" }}
                  >
                    {role.title}
                  </h3>

                  {/* Desc */}
                  <p
                    className="relative flex-1 text-xs font-light leading-relaxed transition-colors duration-300"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#9896b8",
                    }}
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
                    style={{
                      background: `linear-gradient(90deg, transparent, ${role.color}, transparent)`,
                    }}
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