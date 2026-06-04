"use client";

import { motion } from "framer-motion";
import {
  Phone, TrendingUp, UserCheck, ShoppingCart, Home, Lock,
  BarChart3, Users, Target, RefreshCw, MessageSquare, Database, CheckCircle2
} from "lucide-react";

// Expanded data for the detailed page
const detailedRoles = [
  {
    icon: Phone, slug: "customer-support", title: "Customer Support", color: "#7c3aed",
    desc: "Deliver exceptional, round-the-clock service with brand-trained agents ensuring zero downtime.",
    features: ["24/7 Omnichannel Support", "Ticket Resolution & Escalation", "Customer Satisfaction (CSAT) Tracking"]
  },
  {
    icon: TrendingUp, slug: "sales-lead-generation", title: "Sales & Lead Generation", color: "#2563eb",
    desc: "Accelerate your revenue with expert closers and SDRs who treat every lead as sacred.",
    features: ["Cold Calling & Email Outreach", "Pipeline Management", "High-ticket Closing"]
  },
  {
    icon: UserCheck, slug: "virtual-admin-assistants", title: "Virtual & Admin Assistants", color: "#059669",
    desc: "Free up your time with top-tier executive support, calendar management, and admin excellence.",
    features: ["Calendar & Inbox Management", "Travel Itineraries", "Document Preparation"]
  },
  {
    icon: ShoppingCart, slug: "ecommerce-management", title: "E-Commerce Management", color: "#d97706",
    desc: "Seamlessly run your online store. We handle Shopify, WooCommerce, and Amazon operations 24/7.",
    features: ["Order Fulfillment & Tracking", "Inventory Management", "Refunds & Dispute Handling"]
  },
  {
    icon: Home, slug: "property-management", title: "Property Management", color: "#dc2626",
    desc: "Reliable support for real estate. We manage tenant care, maintenance requests, and rent coordination.",
    features: ["Tenant Screening & Onboarding", "Maintenance Dispatch", "Lease Renewals"]
  },
  {
    icon: Lock, slug: "it-cybersecurity", title: "IT & Cybersecurity", color: "#475569",
    desc: "Protect your infrastructure with dedicated technical teams providing MSP-level operations.",
    features: ["Level 1 & 2 Helpdesk", "Threat Monitoring", "System Patching & Updates"]
  },
  {
    icon: BarChart3, slug: "seo-social-media", title: "SEO & Social Media", color: "#7c3aed",
    desc: "Enhance your digital presence with strategic visibility, content creation, and community management.",
    features: ["On-page & Off-page SEO", "Content Calendars", "Community Engagement"]
  },
  {
    icon: Users, slug: "custom-remote-teams", title: "Custom Remote Teams", color: "#2563eb",
    desc: "Build a fully bespoke, dedicated offshore team tailored to your exact industry and operational needs.",
    features: ["Custom Recruitment", "Dedicated Office Space", "Seamless Integration"]
  },
  {
    icon: Target, slug: "client-retention", title: "Client Retention", color: "#ec4899",
    desc: "Keep your customers longer with proactive relationship defense, loyalty programs, and check-ins.",
    features: ["Churn Prevention Campaigns", "Loyalty Program Management", "Quarterly Business Reviews"]
  },
  {
    icon: RefreshCw, slug: "scheduling-dispatch", title: "Scheduling & Dispatch", color: "#0ea5e9",
    desc: "Never miss an opportunity with our 60-second rule. Every lead captured and field agent dispatched.",
    features: ["Real-time Route Optimization", "Emergency Dispatch", "Field Tech Coordination"]
  },
  {
    icon: MessageSquare, slug: "multilingual-support", title: "Multilingual Support", color: "#14b8a6",
    desc: "Expand your global reach with native-level support in English, Spanish, French, and Arabic.",
    features: ["Native Speakers", "Cultural Nuance Training", "Translation Services"]
  },
  {
    icon: Database, slug: "data-reporting", title: "Data & Reporting", color: "#8b5cf6",
    desc: "Make informed decisions with custom KPI dashboards, performance analytics, and daily reports.",
    features: ["Custom Dashboard Creation", "Data Entry & Scrubbing", "Weekly KPI Breakdowns"]
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function DetailedRolesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="py-20 text-center" style={{ background: "#f8f7ff" }}>
        <div className="max-w-4xl px-6 mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-light text-gray-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Detailed <span className="font-extrabold text-red-700">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-xl mx-auto mt-4 text-lg font-light text-gray-500"
          >
            Explore our specialized roles and discover how our dedicated professionals can scale your operations.
          </motion.p>
        </div>
      </section>

      {/* Roles List */}
      <div className="max-w-5xl px-6 py-16 mx-auto space-y-24">
        {detailedRoles.map((role, i) => {
          const Icon = role.icon;
          const isEven = i % 2 === 0;

          return (
            <motion.section
              key={role.slug}
              id={role.slug}
              // scroll-mt-32 ensures the hash link doesn't hide behind a fixed navbar
              className="relative flex flex-col md:flex-row items-center gap-10 md:gap-16 scroll-mt-32" 
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Icon / Visual Side */}
              <div className={`w-full md:w-5/12 flex justify-center ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                <div 
                  className="relative flex items-center justify-center w-48 h-48 sm:w-64 sm:h-64 rounded-3xl"
                  style={{ background: `${role.color}08`, border: `1px solid ${role.color}15` }}
                >
                  <div 
                    className="absolute inset-0 blur-3xl opacity-20"
                    style={{ background: role.color }}
                  />
                  <Icon className="relative z-10 w-20 h-20 sm:w-28 sm:h-28" style={{ color: role.color }} />
                </div>
              </div>

              {/* Text / Details Side */}
              <div className={`w-full md:w-7/12 space-y-6 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    {role.title}
                  </h2>
                  <div 
                    className="w-16 h-1 mt-4 rounded-full" 
                    style={{ background: role.color }}
                  />
                </div>
                
                <p className="text-lg leading-relaxed text-gray-600">
                  {role.desc}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {role.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5" style={{ color: role.color }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}