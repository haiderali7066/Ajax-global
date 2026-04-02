import type { Metadata } from "next";

import IntelliDesqHero from "@/components/IntelliDesq/IntelliDesqHero";
import TrustBar from "@/components/IntelliDesq/TrustBar";
import StatsBar from "@/components/IntelliDesq/StatsBar";
import ProblemSection from "@/components/IntelliDesq/ProblemSection";
import WhatIsIntelliDesq from "@/components/IntelliDesq/WhatIsIntelliDesq";
import IntelliDesqServices from "@/components/IntelliDesq/RolesWeProvide";
import { CoreCapabilities, HowItWorks, IntelliDesqPlusHOS } from "@/components/IntelliDesq/CoreSections";
import UseCases from "@/components/IntelliDesq/UseCases";
import { FeatureSpotlight, LiveMetrics, Integrations, TestimonialsSection, IntelliDesqCTA } from "@/components/IntelliDesq/BottomSections";

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "IntelliDesq™ — AI-Powered Operational Intelligence | AJAX Global",
  description:
    "IntelliDesq™ is an AI-powered operational intelligence platform that works alongside your human teams. Real-time predictions, workflow automation, and decision support — at scale.",
  keywords: [
    "AI operational intelligence",
    "IntelliDesq",
    "predictive analytics platform",
    "workflow automation AI",
    "business intelligence software",
    "decision support system",
    "KPI dashboard",
    "AI operations management",
    "enterprise AI platform",
    "AJAX Global",
  ],
  alternates: {
    canonical: "https://www.ajaxglobal.com/intellidesq",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ajaxglobal.com/intellidesq",
    siteName: "AJAX Global",
    title: "IntelliDesq™ — AI-Powered Operational Intelligence",
    description:
      "An AI intelligence layer that observes, analyzes, and optimizes how your teams work — in real time. 10× faster decisions. 40% cost reduction. 98% accuracy.",
    images: [
      {
        url: "https://www.ajaxglobal.com/og-intellidesq.jpg",
        width: 1200,
        height: 630,
        alt: "IntelliDesq™ — AI-Powered Operational Intelligence by AJAX Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AJAXGlobal",
    creator: "@AJAXGlobal",
    title: "IntelliDesq™ — AI-Powered Operational Intelligence",
    description:
      "Real-time predictions, workflow automation, and decision support for enterprise teams. 10× faster decisions, 40% cost reduction.",
    images: ["https://www.ajaxglobal.com/og-intellidesq.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: "#7c3aed",
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  },
};

// ─── STRUCTURED DATA (JSON-LD) ─────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.ajaxglobal.com/#organization",
      name: "AJAX Global",
      url: "https://www.ajaxglobal.com",
      logo: { "@type": "ImageObject", url: "https://www.ajaxglobal.com/logo.png" },
      sameAs: ["https://www.linkedin.com/company/ajax-global", "https://twitter.com/AJAXGlobal"],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.ajaxglobal.com/intellidesq#webpage",
      url: "https://www.ajaxglobal.com/intellidesq",
      name: "IntelliDesq™ — AI-Powered Operational Intelligence | AJAX Global",
      description: "An AI-driven operational intelligence platform designed to observe, assist, and optimize how teams work in real time.",
      isPartOf: { "@id": "https://www.ajaxglobal.com/#website" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ajaxglobal.com" },
          { "@type": "ListItem", position: 2, name: "IntelliDesq™", item: "https://www.ajaxglobal.com/intellidesq" },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "IntelliDesq™",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://www.ajaxglobal.com/intellidesq",
      description: "AI-powered operational intelligence platform for enterprise teams.",
      offers: {
        "@type": "Offer",
        url: "https://www.ajaxglobal.com/intellidesq",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "120",
        bestRating: "5",
      },
      featureList: [
        "Real-Time Operational Intelligence",
        "Predictive Analytics Engine",
        "Workflow Automation",
        "KPI Dashboards",
        "Decision Support",
        "AI Coordination",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is IntelliDesq™?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "IntelliDesq™ is an AI-powered operational intelligence platform that observes, analyzes, and optimizes how your teams work in real time. It is not a chatbot — it is a decision support and workflow intelligence layer.",
          },
        },
        {
          "@type": "Question",
          name: "How fast can IntelliDesq™ be deployed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "IntelliDesq™ can be deployed in as little as 7 days from contract signing to going live.",
          },
        },
        {
          "@type": "Question",
          name: "What tools does IntelliDesq™ integrate with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "IntelliDesq™ integrates with Salesforce, HubSpot, Zendesk, Slack, Jira, Notion, AppFolio, Buildium, Shopify, QuickBooks, Monday.com, and many more via its API-first architecture.",
          },
        },
      ],
    },
  ],
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function IntelliDesqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen bg-white">
        <IntelliDesqHero />
        <TrustBar />
        <StatsBar />
        <ProblemSection />
        <WhatIsIntelliDesq />
        <IntelliDesqServices />
        
        <CoreCapabilities />
        <HowItWorks />
        <IntelliDesqPlusHOS />
        <UseCases />
        <FeatureSpotlight />
        <LiveMetrics />
        <Integrations />
        <TestimonialsSection />
        <IntelliDesqCTA />
      </main>
    </>
  );
}
