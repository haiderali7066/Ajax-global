// app/about/page.tsx  —  SERVER COMPONENT (no "use client")
// All heavy animations live in the child components; this file stays
// fully server-rendered so Next.js can generate correct <head> tags.

import type { Metadata } from "next";


// ─── Section components (all "use client") ───────────────────────────────────
import AboutHero              from "@/components/About/AboutHero";
import TrustBar               from "@/components/About/TrustBar";
import WhoWeAre               from "@/components/About/WhoWeAre";
import MissionVision          from "@/components/About/MissionVision";
import CoreValues             from "@/components/About/CoreValues";
import WhatMakesUsDifferent   from "@/components/About/WhatMakesUsDifferent";
import Industries             from "@/components/About/Industries";
import OurPromise             from "@/components/About/OurPromise";
import HowWeWork              from "@/components/About/HowWeWork";
import Timeline               from "@/components/About/Timeline";
import AboutCTA               from "@/components/About/AboutCTA";
import { fontImport }         from "@/components/About/about.variants";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  title: "About AJAX Global | Human Outsourcing & AI Automation Company",
  description:
    "AJAX Global is a full-service outsourcing and AI solutions company. We combine expert remote teams with IntelliDesq™ AI automation to help businesses in the USA, Canada, Australia, and UAE scale smarter. EST. 2018.",

  // ── Keywords (still used by Bing / crawler hints) ─────────────────────────
  keywords: [
    "AJAX Global",
    "human outsourcing solutions",
    "AI automation company",
    "BPO outsourcing",
    "remote teams",
    "IntelliDesq AI",
    "outsourcing USA",
    "outsourcing Australia",
    "outsourcing Canada",
    "outsourcing UAE",
    "about AJAX Global",
    "customer support outsourcing",
    "AI workflow automation",
  ],

  // ── Canonical ─────────────────────────────────────────────────────────────
  alternates: {
    canonical: "https://www.ajaxglobal.com/about",
  },

  // ── Open Graph (Facebook / LinkedIn / Slack previews) ────────────────────
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         "https://www.ajaxglobal.com/about",
    siteName:    "AJAX Global",
    title:       "About AJAX Global | Human Outsourcing & AI Automation",
    description:
      "Built for growth, powered by people, enhanced by AI. Discover the story behind AJAX Global — 500+ clients, 15+ countries, $1B+ in managed operations.",
    images: [
      {
        url:    "https://www.ajaxglobal.com/og/about.jpg", // replace with real asset
        width:  1200,
        height: 630,
        alt:    "AJAX Global — About page hero",
      },
    ],
  },

  // ── Twitter Card ─────────────────────────────────────────────────────────
  twitter: {
    card:        "summary_large_image",
    site:        "@AJAXGlobal",
    creator:     "@AJAXGlobal",
    title:       "About AJAX Global | Human Outsourcing & AI Automation",
    description:
      "Built for growth, powered by people, enhanced by AI. 500+ clients · 15+ countries · $1B+ managed ops.",
    images:      ["https://www.ajaxglobal.com/og/about.jpg"],
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index:            true,
    follow:           true,
    googleBot: {
      index:          true,
      follow:         true,
      "max-video-preview":  -1,
      "max-image-preview":  "large",
      "max-snippet":        -1,
    },
  },
};

// ─── Structured Data (JSON-LD) ────────────────────────────────────────────────
const organizationSchema = {
  "@context":    "https://schema.org",
  "@type":       "Organization",
  name:          "AJAX Global",
  url:           "https://www.ajaxglobal.com",
  logo:          "https://www.ajaxglobal.com/logo.png",
  foundingDate:  "2018",
  description:
    "AJAX Global is a full-service outsourcing and AI solutions company combining expert remote professionals with IntelliDesq™ AI automation.",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 2000 },
  areaServed: ["US", "CA", "AU", "AE"],
  sameAs: [
    "https://www.linkedin.com/company/ajax-global",
    "https://twitter.com/AJAXGlobal",
  ],
  contactPoint: {
    "@type":           "ContactPoint",
    telephone:         "+1-555-123-4567",
    contactType:       "customer service",
    availableLanguage: "English",
    areaServed:        ["US", "CA", "AU", "AE"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",  item: "https://www.ajaxglobal.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.ajaxglobal.com/about" },
  ],
};

const webPageSchema = {
  "@context":   "https://schema.org",
  "@type":      "AboutPage",
  name:         "About AJAX Global",
  url:          "https://www.ajaxglobal.com/about",
  description:  "Learn about AJAX Global's mission, vision, core values, company history, and the industries we serve across USA, Canada, Australia, and UAE.",
  inLanguage:   "en-US",
  isPartOf:     { "@type": "WebSite", url: "https://www.ajaxglobal.com" },
  datePublished:"2018-01-01",
  dateModified: new Date().toISOString().split("T")[0],
};

// ─── Page Component ────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      {/* ── JSON-LD structured data ─────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
        {/* Global font + keyframe animations injected once at the root */}
        <style>{fontImport}</style>


        {/* ── Sections ────────────────────────────────────────────────── */}
        <AboutHero />
        <TrustBar />
        <WhoWeAre />
        <MissionVision />
        <CoreValues />
        <WhatMakesUsDifferent />
        <Industries />
        <OurPromise />
        <HowWeWork />
        <Timeline />
        <AboutCTA />

      </main>
    </>
  );
}
