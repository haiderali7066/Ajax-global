"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";

const footerLinks = {
  AI: [
    { name: "IntelliDesq™", href: "/intellidesq" },
    { name: "AI Chat Agents", href: "#" },
    { name: "AI Voice Agents", href: "#" },
    { name: "AI Lead Generation", href: "#" },
    { name: "AI Social Media Automation", href: "#" },
    { name: "AI Youtube Automation", href: "#" },
    { name: "AI Workflow", href: "#" },
    { name: "Miscellaneous", href: "#" },
  ],
  HOS: [
    { name: "Customer Service", href: "#" },
    { name: "Custom Remote Teams", href: "#" },
    { name: "Client Retention", href: "#" },
    { name: "Scheduling & Dispatching", href: "#" },
    { name: "Property Management Support", href: "#" },
    { name: "E-Commerce Management", href: "#" },
    { name: "Sales & Lead Generation", href: "#" },
    { name: "SEO", href: "#" },
    { name: "Social Media Marketing", href: "#" },
    { name: "Virtual & Admin Assistant", href: "#" },
    { name: "IT Support & Cybersecurity", href: "#" },
  ],
  Products: [
    { name: "Work Management", href: "#" },
    { name: "CRM", href: "#" },
    { name: "Campaigns", href: "#" },
    { name: "Services", href: "#" },
  ],
  Features: [
    { name: "HOS", href: "/hos" },
    { name: "AI", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "Automations", href: "#" },
  ],
};

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

/* ─── Liquid Wave — dark navy tone ──────────────────────────────────── */
function LiquidWave() {
  return (
    <div
      className="relative w-full overflow-hidden leading-none"
      style={{ height: "110px" }}
    >
      <style>{`
        @keyframes waveA {
          0%,100% { transform: translateX(0) scaleY(1); }
          50%      { transform: translateX(-3.5%) scaleY(1.10); }
        }
        @keyframes waveB {
          0%,100% { transform: translateX(0) scaleY(1); }
          50%      { transform: translateX(3%) scaleY(0.92); }
        }
        @keyframes waveC {
          0%,100% { transform: translateX(0) scaleY(1); }
          50%      { transform: translateX(-2%) scaleY(1.14); }
        }
        .waveA { animation: waveA 7s ease-in-out infinite; transform-origin: center bottom; }
        .waveB { animation: waveB 9.5s ease-in-out infinite; transform-origin: center bottom; }
        .waveC { animation: waveC 5.8s ease-in-out infinite; transform-origin: center bottom; }
        @keyframes drift {
          0%,100% { transform: translateY(0) translateX(0); opacity:.06; }
          40%      { transform: translateY(-22px) translateX(10px); opacity:.11; }
          70%      { transform: translateY(-10px) translateX(-7px); opacity:.07; }
        }
      `}</style>

      {/* Layer 3 — ghost */}
      <svg
        className="waveC absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,55 C180,105 360,5 540,55 C720,105 900,5 1080,55 C1260,105 1380,25 1440,55 L1440,110 L0,110 Z"
          fill="rgba(15,23,42,0.20)"
        />
      </svg>

      {/* Layer 2 — mid */}
      <svg
        className="waveB absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,75 C200,15 400,95 600,65 C800,35 1000,95 1200,60 C1320,43 1400,75 1440,70 L1440,110 L0,110 Z"
          fill="rgba(15,23,42,0.38)"
        />
      </svg>

      {/* Layer 1 — solid, matches footer bg */}
      <svg
        className="waveA absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,85 C240,35 480,105 720,75 C960,45 1200,95 1440,80 L1440,110 L0,110 Z"
          fill="#0f172a"
        />
      </svg>
    </div>
  );
}

/* ─── Ambient floating orbs ─────────────────────────────────────────── */
function AmbientOrbs() {
  const orbs = [
    { size: 200, top: "8%", left: "4%", dur: "11s", delay: "0s" },
    { size: 130, top: "55%", left: "18%", dur: "14s", delay: "2s" },
    { size: 240, top: "12%", left: "68%", dur: "9s", delay: "1s" },
    { size: 90, top: "72%", left: "87%", dur: "12s", delay: "3.5s" },
    { size: 160, top: "40%", left: "48%", dur: "10s", delay: "5s" },
    { size: 70, top: "83%", left: "36%", dur: "13s", delay: "0.8s" },
  ];
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden
    >
      {orbs.map((o, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: o.size,
            height: o.size,
            top: o.top,
            left: o.left,
            opacity: 0.06,
            background: "radial-gradient(circle, #4536c9 0%, transparent 70%)",
            animation: `drift ${o.dur} ease-in-out ${o.delay} infinite`,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Main Footer ────────────────────────────────────────────────────── */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <LiquidWave />

      <footer
        className="relative overflow-hidden"
        style={{ backgroundColor: "#0f172a" }} /* slate-900 */
      >
        <AmbientOrbs />

        {/* Hairline glow along the top edge */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg,transparent,rgba(56,189,248,.3),transparent)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          {/* ── Brand + newsletter row ────────────────────────────── */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-14">
            {/* Logo + tagline */}
            <div className="space-y-3 max-w-xs">
              <Link href="/" className="inline-flex items-center gap-2 group">
                <span className="text-2xl font-extrabold tracking-tight text-white  transition-colors duration-300">
                  AJAX
                </span>
                <div
                  className="bg-primary w-7 h-7 rounded flex items-center justify-center font-extrabold text-white text-sm shadow-lg transition-transform duration-300 group-hover:scale-110"
                  
                >
                  G
                </div>
                <span className="text-2xl font-light text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
                  lobal
                </span>
              </Link>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#94a3b8" }}
              >
                Full-service outsourcing & AI solutions — blending human talent
                with artificial intelligence to help businesses scale smarter.
              </p>
            </div>

            {/* Newsletter */}
            <div className="w-full max-w-md">
              <p
                className="text-[11px] uppercase tracking-widest mb-2.5 font-semibold"
                style={{ color: "#475569" }}
              >
                Stay in the loop
              </p>
              <div className="flex items-stretch gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 rounded-xl px-4 py-2.5 text-sm outline-none transition-all duration-200"
                  style={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #334155",
                    color: "#e2e8f0",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#4536c9")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#334155")
                  }
                />
                <button
                  className="bg-primary shrink-0 inline-flex items-center gap-1.5 rounded-xl font-semibold text-sm px-5 py-2.5 text-white transition-all duration-200 hover:scale-105 active:scale-100"
                  // style={{ backgroundColor: "#5528f7" }}
                  // onMouseEnter={(e) =>
                  //   (e.currentTarget.style.backgroundColor = "#6b38f8")
                  // }
                  // onMouseLeave={(e) =>
                  //   (e.currentTarget.style.backgroundColor = "#623af3")
                  // }
                >
                  Subscribe
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* ── Link grid ─────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 mb-14">
            {/* Contact */}
            <div className="col-span-2 sm:col-span-1 lg:col-span-1 space-y-4">
              <p
                className="text-[11px] uppercase tracking-widest font-semibold"
                style={{ color: "#475569" }}
              >
                Contact
              </p>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 transition-colors duration-200 group"
                    style={{ color: "#94a3b8" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#4536c9")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#94a3b8")
                    }
                  >
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0 opacity-50 group-hover:opacity-100" />
                    451 Wall Street, UK, London
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+10643321233"
                    className="flex items-center gap-2.5 transition-colors duration-200"
                    style={{ color: "#94a3b8" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#4536c9")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#94a3b8")
                    }
                  >
                    <Phone className="w-4 h-4 shrink-0 opacity-50" />
                    (064) 332-1233
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@ajaxglobal.com"
                    className="flex items-center gap-2.5 transition-colors duration-200"
                    style={{ color: "#94a3b8" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#4536c9")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#94a3b8")
                    }
                  >
                    <Mail className="w-4 h-4 shrink-0 opacity-50" />
                    info@ajaxglobal.com
                  </a>
                </li>
              </ul>
            </div>

            {/* AI */}
            <div className="col-span-1 lg:col-span-1">
              <p
                className="text-[11px] uppercase tracking-widest mb-4 font-semibold"
                style={{ color: "#475569" }}
              >
                AI
              </p>
              <ul className="space-y-2.5">
                {footerLinks.AI.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm inline-block transition-all duration-200 hover:translate-x-0.5"
                      style={{ color: "#94a3b8" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#4536c9")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#94a3b8")
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* HOS */}
            <div className="col-span-2 lg:col-span-2">
              <p
                className="text-[11px] uppercase tracking-widest mb-4 font-semibold"
                style={{ color: "#475569" }}
              >
                HOS
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {footerLinks.HOS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm inline-block transition-all duration-200 hover:translate-x-0.5 leading-snug"
                      style={{ color: "#94a3b8" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#4536c9")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#94a3b8")
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="col-span-1 lg:col-span-1">
              <p
                className="text-[11px] uppercase tracking-widest mb-4 font-semibold"
                style={{ color: "#475569" }}
              >
                Ajax Products
              </p>
              <ul className="space-y-2.5">
                {footerLinks.Products.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm inline-block transition-all duration-200 hover:translate-x-0.5"
                      style={{ color: "#94a3b8" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#4536c9")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#94a3b8")
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="col-span-1 lg:col-span-1">
              <p
                className="text-[11px] uppercase tracking-widest mb-4 font-semibold"
                style={{ color: "#475569" }}
              >
                Feature
              </p>
              <ul className="space-y-2.5">
                {footerLinks.Features.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm inline-block transition-all duration-200 hover:translate-x-0.5"
                      style={{ color: "#94a3b8" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#4536c9")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#94a3b8")
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Divider ───────────────────────────────────────────── */}
          <div className="mb-8" style={{ borderTop: "1px solid #1e293b" }} />

          {/* ── Bottom bar ────────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            {/* Copyright */}
            <p
              className="text-xs text-center sm:text-left"
              style={{ color: "#475569" }}
            >
              © {currentYear} AJAX Global. All rights reserved. · Developed by{" "}
              <a
                href="#"
                className="underline underline-offset-2 transition-colors duration-200"
                style={{ color: "#64748b" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#4536c9")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
              >
                Devntom Solutions
              </a>
            </p>

            {/* Legal */}
            <div
              className="flex items-center gap-5 text-xs"
              style={{ color: "#475569" }}
            >
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    className="transition-colors duration-200"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#4536c9")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#475569")
                    }
                  >
                    {item}
                  </Link>
                ),
              )}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #334155",
                    color: "#64748b",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "#4536c9";
                    el.style.borderColor = "#4536c9";
                    el.style.color = "#fff";
                    el.style.boxShadow = "0 4px 20px rgba(14,165,233,.35)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "#1e293b";
                    el.style.borderColor = "#334155";
                    el.style.color = "#64748b";
                    el.style.boxShadow = "none";
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
