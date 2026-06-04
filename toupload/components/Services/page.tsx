import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── Section components (all lazy-loadable if needed) ───
import ServicesHero from "@/components/services/ServicesHero";
import FeatureSections from "@/components/services/FeatureSections";
import AJAXDifference from "@/components/services/AJAXDifference";
import BusinessNeeds from "@/components/services/BusinessNeeds";
import TradeServices from "@/components/services/TradeServices";
import SecuritySection from "@/components/services/SecuritySection";
import AIVideoSection from "@/components/services/AIVideoSection";
import ExpertServices from "@/components/services/ExpertServices";
import Testimonials from "@/components/services/Testimonials";
import AwardsSection from "@/components/services/AwardsSection";
import FAQSection from "@/components/services/FAQSection";
import FinalCTA from "@/components/services/FinalCTA";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // Core
  title: "Enterprise Trade & Logistics Services | AJAX Global",
  description:
    "AJAX Global delivers enterprise-grade international trade services — global sourcing, import/export management, supply chain logistics, and market-entry consulting. Trusted by Coca-Cola, Nasdaq, Lionsgate and more.",
  keywords: [
    "international trade services",
    "global sourcing",
    "import export management",
    "supply chain logistics",
    "freight forwarding",
    "customs clearance",
    "trade consulting",
    "enterprise logistics",
    "AJAX Global",
  ],

  // Canonical URL (update to your actual domain)
  alternates: {
    canonical: "https://www.ajaxglobal.com/services",
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ajaxglobal.com/services",
    siteName: "AJAX Global",
    title: "Enterprise Trade & Logistics Services | AJAX Global",
    description:
      "Reliable, scalable, and efficient international trade solutions. Sourcing, customs, logistics, and market-entry advisory — all under one roof.",
    images: [
      {
        url: "https://www.ajaxglobal.com/og-services.jpg", // replace with real asset
        width: 1200,
        height: 630,
        alt: "AJAX Global — Enterprise Trade & Logistics Services",
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    site: "@AJAXGlobal",
    creator: "@AJAXGlobal",
    title: "Enterprise Trade & Logistics Services | AJAX Global",
    description:
      "Sourcing, customs, logistics & market-entry advisory for enterprise businesses worldwide.",
    images: ["https://www.ajaxglobal.com/og-services.jpg"],
  },

  // Robots
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

  // Theme color (tab / mobile browser chrome)
  themeColor: "#7c3aed",

  // Verification tags (fill in your own codes)
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
    // bing: "YOUR_BING_VERIFICATION_CODE",
  },
};

// ─── Structured Data (JSON-LD) ─────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization
    {
      "@type": "Organization",
      "@id": "https://www.ajaxglobal.com/#organization",
      name: "AJAX Global",
      url: "https://www.ajaxglobal.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.ajaxglobal.com/logo.png",
      },
      sameAs: [
        "https://www.linkedin.com/company/ajax-global",
        "https://twitter.com/AJAXGlobal",
      ],
    },
    // WebPage
    {
      "@type": "WebPage",
      "@id": "https://www.ajaxglobal.com/services#webpage",
      url: "https://www.ajaxglobal.com/services",
      name: "Enterprise Trade & Logistics Services | AJAX Global",
      description:
        "AJAX Global delivers enterprise-grade international trade services — global sourcing, import/export management, supply chain logistics, and market-entry consulting.",
      isPartOf: { "@id": "https://www.ajaxglobal.com/#website" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ajaxglobal.com" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.ajaxglobal.com/services" },
        ],
      },
    },
    // Service catalogue
    {
      "@type": "ItemList",
      name: "AJAX Global Trade & Logistics Services",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Global Sourcing & Procurement" },
        { "@type": "ListItem", position: 2, name: "Import & Export Management" },
        { "@type": "ListItem", position: 3, name: "Supply Chain & Logistics Solutions" },
        { "@type": "ListItem", position: 4, name: "Trade Consulting & Market Entry" },
        { "@type": "ListItem", position: 5, name: "Industrial & Commodity Trading" },
      ],
    },
    // FAQ Page (for Google FAQ rich result)
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does international shipping take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Transit times vary depending on origin, destination, and shipping method. Sea freight takes 15–45 days, air freight 3–7 days, and land freight 5–15 days.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle customs clearance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We manage all customs documentation, HS code classification, duty and tax calculations, and regulatory compliance on your behalf.",
          },
        },
        {
          "@type": "Question",
          name: "Can you source custom or branded products?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We work with manufacturers to source custom-specification or private-label products, including supplier vetting, sample review, quality inspections, and contract management.",
          },
        },
        {
          "@type": "Question",
          name: "What industries do you specialize in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We serve manufacturing, retail, agriculture, construction, automotive, energy, and FMCG sectors.",
          },
        },
        {
          "@type": "Question",
          name: "How do you ensure product quality?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We conduct rigorous supplier verification and on-site quality inspections before shipment, including factory audits, product testing, and compliance checks.",
          },
        },
      ],
    },
  ],
};

// ─── Page Component (Server Component) ───────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      {/* Inject JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white overflow-x-hidden">
        <Header />

        <ServicesHero />
        <FeatureSections />
        <AJAXDifference />
        <BusinessNeeds />
        <TradeServices />
        <SecuritySection />
        <AIVideoSection />
        <ExpertServices />
        <Testimonials />
        <AwardsSection />
        <FAQSection />
        <FinalCTA />

        <Footer />
      </main>
    </>
  );
}
