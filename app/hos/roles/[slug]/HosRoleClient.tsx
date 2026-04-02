"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
// import { hosRoles } from "@/lib/rolesHOS";
import { hosRoles, getHosRoleBySlug } from "@/lib/hosRoles";
import {
  Phone, TrendingUp, UserCheck, ShoppingCart, Home, Lock,
  BarChart3, Users, Target, RefreshCw, MessageSquare, Database,
  ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Menu, X,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "customer-support": Phone,
  "sales-lead-generation": TrendingUp,
  "virtual-admin-assistants": UserCheck,
  "ecommerce-management": ShoppingCart,
  "property-management": Home,
  "it-cybersecurity": Lock,
  "seo-social-media": BarChart3,
  "custom-remote-teams": Users,
  "client-retention": Target,
  "scheduling-dispatch": RefreshCw,
  "multilingual-support": MessageSquare,
  "data-reporting": Database,
};

export default function HosRoleClient({ activeSlug }: { activeSlug: string }) {
  const [activeSection, setActiveSection] = useState(activeSlug);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const hasScrolled = useRef(false);

  useEffect(() => {
    if (hasScrolled.current) return;
    const el = document.getElementById(activeSlug);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        hasScrolled.current = true;
      }, 200);
    }
  }, [activeSlug]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    hosRoles.forEach((role) => {
      const el = document.getElementById(role.slug);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(role.slug); },
        { rootMargin: "-20% 0px -65% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (slug: string) => {
    const el = document.getElementById(slug);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileNavOpen(false);
  };

  const activeRole = hosRoles.find((r) => r.slug === activeSection);

  return (
    <div style={{ background: "#f8f7ff", minHeight: "100vh" }}>

      {/* Mobile top bar */}
      <div
        className="sticky top-0 z-30 flex items-center justify-between px-5 py-4 lg:hidden"
        style={{ background: "#f8f7ff", borderBottom: "1px solid #e5e7eb" }}
      >
        <Link
          href="/hos#roles"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
          style={{ textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}
        >
          <ArrowLeft className="w-4 h-4 text-red-700" />
          All Roles
        </Link>
        <button
          onClick={() => setMobileNavOpen((v) => !v)}
          className="p-1 text-gray-500 transition-colors hover:text-gray-900"
          aria-label="Toggle menu"
        >
          {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileNavOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: "rgba(0,0,0,0.4)" }}
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className="fixed inset-y-0 left-0 z-50 overflow-y-auto lg:hidden"
        style={{
          width: 272,
          background: "#fff",
          borderRight: "1px solid #e5e7eb",
          transform: mobileNavOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.28s cubic-bezier(0.22,1,0.36,1)",
          padding: "28px 16px",
        }}
      >
        <SidebarContent
          roles={hosRoles}
          iconMap={iconMap}
          activeSection={activeSection}
          scrollTo={scrollTo}
        />
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:flex" style={{ maxWidth: 1380, margin: "0 auto" }}>

        {/* Sticky Sidebar */}
        <div
          style={{
            width: 264,
            flexShrink: 0,
            position: "sticky",
            top: 0,
            height: "100vh",
            overflowY: "auto",
            background: "#fff",
            borderRight: "1px solid #e5e7eb",
            padding: "28px 16px",
          }}
        >
          <SidebarContent
            roles={hosRoles}
            iconMap={iconMap}
            activeSection={activeSection}
            scrollTo={scrollTo}
          />
        </div>

        {/* Main content */}
        <main style={{ flex: 1, minWidth: 0, padding: "48px 60px 96px" }}>
          <MainContent roles={hosRoles} iconMap={iconMap} />
        </main>
      </div>

      {/* Mobile main */}
      <div className="lg:hidden" style={{ padding: "28px 20px 80px" }}>
        <MainContent roles={hosRoles} iconMap={iconMap} />
      </div>
    </div>
  );
}

/* ─────────────────────────────
   SIDEBAR
───────────────────────────── */
function SidebarContent({
  roles,
  iconMap,
  activeSection,
  scrollTo,
}: {
  roles: typeof hosRoles;
  iconMap: Record<string, LucideIcon>;
  activeSection: string;
  scrollTo: (slug: string) => void;
}) {
  return (
    <div className="flex flex-col h-full">

      {/* Back */}
      <Link
        href="/hos#roles"
        className="items-center hidden gap-2 lg:inline-flex mb-7 w-fit group"
        style={{ fontFamily: "'DM Sans', sans-serif", color: "#6b7280", fontSize: 13, textDecoration: "none" }}
      >
        <ArrowLeft className="w-3.5 h-3.5 text-red-700 transition-transform group-hover:-translate-x-0.5" />
        Back to roles
      </Link>

      {/* Brand */}
      <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #f3f4f6" }}>
        <p style={{ fontSize: 9, fontFamily: "'DM Mono', monospace", color: "#be123c", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 5 }}>
          AJAX Global HOS
        </p>
        <p style={{ fontSize: 15, fontFamily: "inherit", fontWeight: 700, color: "#111827", lineHeight: 1.3, marginBottom: 3 }}>
          Our Services
        </p>
        <p style={{ fontSize: 11, color: "#9ca3af", fontFamily: "'DM Sans', sans-serif" }}>
          {roles.length} roles available
        </p>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 2 }}>
        {roles.map((role) => {
          const Icon = iconMap[role.slug] ?? Users;
          const isActive = activeSection === role.slug;
          return (
            <button
              key={role.slug}
              onClick={() => scrollTo(role.slug)}
              style={{
                width: "100%",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 10px",
                borderRadius: 10,
                background: isActive ? `${role.color}0c` : "transparent",
                border: `1px solid ${isActive ? role.color + "28" : "transparent"}`,
                cursor: "pointer",
                transition: "background 0.15s",
              }}
            >
              <div style={{
                width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: isActive ? `${role.color}15` : "#f9fafb",
                border: `1px solid ${isActive ? role.color + "22" : "#e5e7eb"}`,
              }}>
                <Icon style={{ width: 12, height: 12, color: isActive ? role.color : "#9ca3af" }} />
              </div>
              <span style={{
                flex: 1, fontSize: 12,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "#111827" : "#6b7280",
                lineHeight: 1.3,
              }}>
                {role.title}
              </span>
              {isActive && <ChevronRight style={{ width: 11, height: 11, color: role.color, flexShrink: 0 }} />}
            </button>
          );
        })}
      </nav>

      {/* Bottom CTA */}
      <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #f3f4f6" }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: "#111827", marginBottom: 4 }}>
          Ready to hire?
        </p>
        <p style={{ fontSize: 11, fontFamily: "'DM Sans', sans-serif", color: "#9ca3af", marginBottom: 10, lineHeight: 1.5 }}>
          Free discovery call, no commitment.
        </p>
        <Link
          href="/contact"
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            width: "100%", padding: "9px 0", borderRadius: 10,
            background: "#be123c",
            fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: "#fff",
            textDecoration: "none",
          }}
        >
          Book a Call <ArrowUpRight style={{ width: 12, height: 12 }} />
        </Link>
      </div>
    </div>
  );
}

/* ─────────────────────────────
   MAIN CONTENT
───────────────────────────── */
function MainContent({
  roles,
  iconMap,
}: {
  roles: typeof hosRoles;
  iconMap: Record<string, LucideIcon>;
}) {
  return (
    <>
      {/* Page heading */}
      <div style={{ marginBottom: 48, paddingBottom: 36, borderBottom: "1px solid #e5e7eb" }}>
        <p style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", color: "#be123c", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 10 }}>
          AJAX Global · Human Outsourcing Solutions
        </p>
        <h1 style={{
          fontWeight: 300, fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)",
          color: "#111827", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 12,
        }}>
          Every role,{" "}
          <span className="font-extrabold text-red-700">covered.</span>
        </h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#6b7280", fontWeight: 300, lineHeight: 1.75, maxWidth: 500 }}>
          Browse all {roles.length} roles below. Click any service in the sidebar to jump straight to it, or scroll through at your own pace.
        </p>
      </div>

      {/* Sections */}
      <div style={{ display: "flex", flexDirection: "column", gap: 72 }}>
        {roles.map((role, idx) => {
          const Icon = iconMap[role.slug] ?? Users;
          return (
            <section key={role.slug} id={role.slug} style={{ scrollMarginTop: 28 }}>

              {/* Header */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: `${role.color}0f`, border: `1.5px solid ${role.color}25`,
                }}>
                  <Icon style={{ width: 22, height: 22, color: role.color }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                    <span style={{
                      fontSize: 9, fontFamily: "'DM Mono', monospace",
                      color: role.color, letterSpacing: "0.18em", textTransform: "uppercase",
                      padding: "3px 10px", borderRadius: 999,
                      background: `${role.color}0c`, border: `1px solid ${role.color}1e`,
                    }}>
                      {String(idx + 1).padStart(2, "0")} / {String(roles.length).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 style={{
                    fontWeight: 700, fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)",
                    color: "#111827", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 4,
                  }}>
                    {role.title}
                  </h2>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: role.color }}>
                    {role.tagline}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: `linear-gradient(90deg, ${role.color}50, ${role.color}10, transparent)`, marginBottom: 22 }} />

              {/* Overview */}
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#4b5563", fontWeight: 300, lineHeight: 1.8, maxWidth: 680, marginBottom: 26 }}>
                {role.overview}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4" style={{ marginBottom: 26 }}>
                {role.stats.map((stat, i) => (
                  <div key={i} style={{
                    background: "#fff", border: "1px solid #e5e7eb",
                    borderRadius: 12, padding: "16px 18px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}>
                    <p style={{ fontWeight: 800, fontSize: "clamp(1.3rem,2vw,1.6rem)", color: role.color, lineHeight: 1, marginBottom: 6 }}>
                      {stat.value}
                    </p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#9ca3af", lineHeight: 1.4 }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* What's Included */}
              <p style={{ fontWeight: 700, fontSize: 13, color: "#374151", marginBottom: 12, letterSpacing: "0.01em" }}>
                What&apos;s included
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" style={{ marginBottom: 26 }}>
                {role.features.map((feat, i) => (
                  <div key={i} style={{
                    background: "#fff", border: "1px solid #e5e7eb",
                    borderRadius: 12, padding: "14px 16px",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${role.color}40`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 12px ${role.color}12`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#e5e7eb";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 2px rgba(0,0,0,0.03)";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <CheckCircle2 style={{ width: 14, height: 14, color: role.color, flexShrink: 0, marginTop: 2 }} />
                      <div>
                        <p style={{ fontWeight: 600, fontSize: 12, color: "#111827", marginBottom: 3, lineHeight: 1.3 }}>
                          {feat.title}
                        </p>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#9ca3af", lineHeight: 1.6, fontWeight: 300 }}>
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Use Cases + Industries + Deliverables */}
              <div className="grid gap-3 sm:grid-cols-3" style={{ marginBottom: 26 }}>

                {/* Use Cases */}
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 13, padding: "18px 20px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
                  <p style={{ fontWeight: 700, fontSize: 12, color: "#374151", marginBottom: 12 }}>Use cases</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {role.useCases.map((uc, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: role.color, flexShrink: 0, marginTop: 5 }} />
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#6b7280", lineHeight: 1.5, fontWeight: 300 }}>
                          {uc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Industries */}
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 13, padding: "18px 20px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
                  <p style={{ fontWeight: 700, fontSize: 12, color: "#374151", marginBottom: 12 }}>Industries served</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {role.industries.map((ind, i) => (
                      <span key={i} style={{
                        fontFamily: "'DM Mono', monospace", fontSize: 10, fontWeight: 500,
                        padding: "5px 11px", borderRadius: 999,
                        color: role.color, background: `${role.color}0d`, border: `1px solid ${role.color}22`,
                      }}>
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 13, padding: "18px 20px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
                  <p style={{ fontWeight: 700, fontSize: 12, color: "#374151", marginBottom: 12 }}>What you get</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {role.deliverables.map((d, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <span style={{
                          width: 16, height: 16, borderRadius: "50%", flexShrink: 0,
                          background: `${role.color}12`, border: `1px solid ${role.color}28`,
                          display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1,
                        }}>
                          <span style={{ width: 5, height: 5, borderRadius: "50%", background: role.color, display: "block" }} />
                        </span>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#6b7280", lineHeight: 1.5, fontWeight: 300 }}>
                          {d}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div style={{
                background: "#fff",
                borderRadius: 14,
                border: "1px solid #e5e7eb",
                borderLeft: `3px solid ${role.color}`,
                padding: "22px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                flexWrap: "wrap",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}>
                <div>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: role.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>
                    Ready to hire?
                  </p>
                  <p style={{ fontWeight: 700, fontSize: 15, color: "#111827", lineHeight: 1.3, marginBottom: 4 }}>
                    Build your {role.title} team today.
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#9ca3af", fontWeight: 300 }}>
                    Free discovery call — we scope everything before you commit.
                  </p>
                </div>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 7,
                    padding: "10px 20px", borderRadius: 10,
                    background: "#be123c",
                    fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: "#fff",
                    textDecoration: "none", flexShrink: 0, whiteSpace: "nowrap",
                  }}
                >
                  Book a Call <ArrowUpRight style={{ width: 14, height: 14 }} />
                </Link>
              </div>

            </section>
          );
        })}
      </div>
    </>
  );
}
