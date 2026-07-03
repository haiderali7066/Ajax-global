// app/contact/page.tsx  —  SERVER COMPONENT (no "use client")
// Sections are all "use client" children; this file stays server-rendered
// so Next.js can emit correct <head> tags and structured data at build time.

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── Section components ───────────────────────────────────────────────────────
import ContactHero      from "@/components/Contact/ContactHero";
import QuickContact     from "@/components/Contact/QuickContact";
import ContactForm      from "@/components/Contact/ContactForm";
import ChooseYourPath   from "@/components/Contact/ChooseYourPath";
import WhatHappensNext  from "@/components/Contact/WhatHappensNext";
import WhyAJAX          from "@/components/Contact/WhyAJAX";
import ContactFAQ       from "@/components/Contact/ContactFAQ";
import ContactCTA       from "@/components/Contact/ContactCTA";
import { fontImport }   from "@/components/Contact/contact.variants";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  title: "Contact AJAX Global | Book a Free Strategy Consultation",
  description:
    "Get in touch with AJAX Global to explore outsourcing, remote teams, and AI automation solutions. Book a free strategy call and receive a custom proposal within 24 hours.",

  // ── Keywords ──────────────────────────────────────────────────────────────
  keywords: [
    "contact AJAX Global",
    "book outsourcing consultation",
    "remote team strategy call",
    "AI automation inquiry",
    "BPO contact form",
    "outsourcing USA contact",
    "IntelliDesq AI demo",
    "AJAX Global phone",
    "AJAX Global email",
    "free strategy call",
    "remote staffing consultation",
    "human outsourcing solutions contact",
  ],

  // ── Canonical ─────────────────────────────────────────────────────────────
  alternates: {
    canonical: "https://www.ajaxglobal.com/contact",
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         "https://www.ajaxglobal.com/contact",
    siteName:    "AJAX Global",
    title:       "Contact AJAX Global | Book a Free Strategy Consultation",
    description:
      "Talk to an AJAX Global expert today. Request a custom proposal for outsourcing or AI automation — response guaranteed within 24 hours.",
    images: [
      {
        url:    "https://www.ajaxglobal.com/og/contact.jpg", // swap with real asset
        width:  1200,
        height: 630,
        alt:    "Contact AJAX Global — Book a strategy call",
      },
    ],
  },

  // ── Twitter Card ─────────────────────────────────────────────────────────
  twitter: {
    card:        "summary_large_image",
    site:        "@AJAXGlobal",
    creator:     "@AJAXGlobal",
    title:       "Contact AJAX Global | Free Strategy Consultation",
    description:
      "Book a free strategy call. Human outsourcing + AI automation — custom proposals delivered in 24 hours.",
    images: ["https://www.ajaxglobal.com/og/contact.jpg"],
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:                true,
      follow:               true,
      "max-video-preview":  -1,
      "max-image-preview":  "large",
      "max-snippet":        -1,
    },
  },
};

// ─── Structured Data (JSON-LD) ────────────────────────────────────────────────

/** ContactPage schema — tells Google this is a contact page */
const contactPageSchema = {
  "@context":    "https://schema.org",
  "@type":       "ContactPage",
  name:          "Contact AJAX Global",
  url:           "https://www.ajaxglobal.com/contact",
  description:
    "Book a free strategy consultation with AJAX Global. We respond within 24 hours with a custom proposal for human outsourcing or AI automation.",
  inLanguage:    "en-US",
  isPartOf:      { "@type": "WebSite", url: "https://www.ajaxglobal.com" },
  dateModified:  new Date().toISOString().split("T")[0],
};

/** Organization schema with contactPoint */
const organizationSchema = {
  "@context":   "https://schema.org",
  "@type":      "Organization",
  name:         "AJAX Global",
  url:          "https://www.ajaxglobal.com",
  logo:         "https://www.ajaxglobal.com/logo.png",
  foundingDate: "2018",
  areaServed:   ["US", "CA", "AU", "AE"],
  sameAs: [
    "https://www.linkedin.com/company/ajax-global",
    "https://twitter.com/AJAXGlobal",
  ],
  contactPoint: [
    {
      "@type":           "ContactPoint",
      telephone:         "+1-555-123-4567",
      email:             "hello@ajaxglobal.com",
      contactType:       "customer service",
      availableLanguage: "English",
      areaServed:        ["US", "CA", "AU", "AE"],
      hoursAvailable:    {
        "@type":      "OpeningHoursSpecification",
        dayOfWeek:    ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens:        "00:00",
        closes:       "23:59",
      },
    },
    {
      "@type":           "ContactPoint",
      contactType:       "sales",
      telephone:         "+1-555-123-4567",
      email:             "hello@ajaxglobal.com",
      availableLanguage: "English",
    },
  ],
};

/** BreadcrumbList */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",    item: "https://www.ajaxglobal.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.ajaxglobal.com/contact" },
  ],
};

/** FAQ schema — surfaces answers directly in Google SERPs */
const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    {
      "@type":          "Question",
      name:             "How quickly can a team be deployed?",
      acceptedAnswer:   { "@type": "Answer", text: "Most clients are fully onboarded within 5–10 business days. For urgent needs, we can often fast-track deployment within 48–72 hours." },
    },
    {
      "@type":          "Question",
      name:             "Do you offer month-to-month contracts?",
      acceptedAnswer:   { "@type": "Answer", text: "Yes. We believe in earning your business every month. Flexible arrangements are available for teams of all sizes." },
    },
    {
      "@type":          "Question",
      name:             "Can I combine human outsourcing with AI?",
      acceptedAnswer:   { "@type": "Answer", text: "Absolutely — and we recommend it. Our hybrid model pairs skilled remote professionals with IntelliDesq™ AI agents for maximum efficiency." },
    },
    {
      "@type":          "Question",
      name:             "What industries do you specialize in?",
      acceptedAnswer:   { "@type": "Answer", text: "We serve e-commerce, healthcare, real estate, SaaS, logistics, legal, and more. If your business has processes, we can optimize them." },
    },
    {
      "@type":          "Question",
      name:             "Is my data secure with AJAX Global?",
      acceptedAnswer:   { "@type": "Answer", text: "Security is non-negotiable. We follow industry-standard protocols, sign NDAs, and operate under strict data governance policies." },
    },
    {
      "@type":          "Question",
      name:             "What happens after I submit the contact form?",
      acceptedAnswer:   { "@type": "Answer", text: "Our team reviews your request, and a strategy consultant reaches out within 24 hours to schedule a discovery call and build your custom proposal." },
    },
  ],
};

/** LocalBusiness — helps with local/maps visibility */
const localBusinessSchema = {
  "@context":     "https://schema.org",
  "@type":        "ProfessionalService",
  name:           "AJAX Global",
  url:            "https://www.ajaxglobal.com",
  telephone:      "+1-555-123-4567",
  email:          "hello@ajaxglobal.com",
  description:    "Full-service outsourcing and AI automation company serving USA, Canada, Australia, and UAE.",
  priceRange:     "$$",
  openingHours:   "Mo-Su 00:00-24:00",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  serviceType: [
    "Business Process Outsourcing",
    "Remote Team Staffing",
    "AI Workflow Automation",
    "Customer Support Outsourcing",
    "Sales Outsourcing",
  ],
};

// ─── Page Component ────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      {/* ── JSON-LD structured data blocks ──────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
        {/* Global font + keyframe animations injected once */}
        <style>{fontImport}</style>

        <Header />

        {/* ── Sections ─────────────────────────────────────────────────── */}
        <ContactHero />
        <QuickContact />
        <ContactForm />
        <ChooseYourPath />
        <WhatHappensNext />
        <WhyAJAX />
        <ContactFAQ />
        <ContactCTA />

        <Footer />
      </main>
    </>
  );
}
