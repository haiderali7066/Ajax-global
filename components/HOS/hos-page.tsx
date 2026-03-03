import type { Metadata } from "next";
import HOSPageComponent from "./hos-components/HOSPageComponent"; // adjust to your actual path

/* ═══════════════════════════════════════════════════
   SEO METADATA  (Next.js App Router)
═══════════════════════════════════════════════════ */
export const metadata: Metadata = {
  /* ── Core ── */
  title: "Human Outsourcing Solutions (HOS) — Build Your Perfect Team | AJAX Global",
  description:
    "AJAX Global's Human Outsourcing Solutions (HOS) helps businesses build elite remote teams — customer support, sales, VA, IT, property management and more. 7-day go-live. 99.2% uptime SLA. No long-term lock-in.",

  /* ── Canonical & Robots ── */
  metadataBase: new URL("https://ajaxglobal.app"),
  alternates: {
    canonical: "/hos",
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

  /* ── Keywords ── */
  keywords: [
    "human outsourcing solutions",
    "HOS",
    "remote staffing agency",
    "outsourced customer support",
    "outsourced sales team",
    "virtual assistant services",
    "offshore team building",
    "business process outsourcing",
    "BPO services",
    "property management outsourcing",
    "IT outsourcing",
    "AJAX Global",
    "24/7 customer service team",
    "dedicated remote agents",
    "multilingual support team",
    "e-commerce support outsourcing",
    "build remote team fast",
  ],

  /* ── Open Graph ── */
  openGraph: {
    type: "website",
    url: "https://ajaxglobal.app/hos",
    siteName: "AJAX Global",
    title: "Human Outsourcing Solutions (HOS) — Build Your Perfect Team | AJAX Global",
    description:
      "Build elite outsourced teams that integrate seamlessly into your operations. Customer support, sales, VA, property management, IT and more. 7-day go-live. 500+ clients across 15 countries.",
    images: [
      {
        url: "/og-hos.png",          // place a 1200×630 image at /public/og-hos.png
        width: 1200,
        height: 630,
        alt: "AJAX Global HOS — Build Your Perfect Remote Team",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },

  /* ── Twitter / X Card ── */
  twitter: {
    card: "summary_large_image",
    site: "@AjaxGlobal",            // update to your actual handle
    creator: "@AjaxGlobal",
    title: "Human Outsourcing Solutions (HOS) — AJAX Global",
    description:
      "Elite remote teams. 7-day go-live. 99.2% SLA. Customer support, sales, VA, property management & more. 500+ clients worldwide.",
    images: ["/og-hos.png"],
  },

  /* ── App / PWA ── */
  applicationName: "AJAX Global HOS",
  category: "business",
  creator: "AJAX Global",
  publisher: "AJAX Global",

  /* ── Icons ── */
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#6d28d9" }],
  },

  /* ── Manifest ── */
  manifest: "/site.webmanifest",

  /* ── Verification (fill in your real tokens) ── */
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
    // bing: "REPLACE_WITH_BING_WEBMASTER_TOKEN",
  },
};

/* ═══════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA  (server-side injection)
═══════════════════════════════════════════════════ */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    /* ── Organisation ── */
    {
      "@type": "Organization",
      "@id": "https://ajaxglobal.app/#organization",
      name: "AJAX Global",
      url: "https://ajaxglobal.app",
      logo: {
        "@type": "ImageObject",
        url: "https://ajaxglobal.app/logo.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        url: "https://ajaxglobal.app/contact",
        availableLanguage: ["English", "Spanish", "French", "Arabic"],
      },
      sameAs: [
        "https://www.linkedin.com/company/ajax-global", // update
        "https://twitter.com/AjaxGlobal",               // update
      ],
    },

    /* ── WebSite ── */
    {
      "@type": "WebSite",
      "@id": "https://ajaxglobal.app/#website",
      url: "https://ajaxglobal.app",
      name: "AJAX Global",
      publisher: { "@id": "https://ajaxglobal.app/#organization" },
    },

    /* ── WebPage ── */
    {
      "@type": "WebPage",
      "@id": "https://ajaxglobal.app/hos#webpage",
      url: "https://ajaxglobal.app/hos",
      name: "Human Outsourcing Solutions (HOS) — Build Your Perfect Team | AJAX Global",
      isPartOf: { "@id": "https://ajaxglobal.app/#website" },
      about: { "@id": "https://ajaxglobal.app/#organization" },
      description:
        "AJAX Global HOS provides ready-made and custom outsourced teams — customer support, sales, virtual assistants, IT, property management and more. 7-day go-live, 99.2% uptime SLA.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ajaxglobal.app" },
          { "@type": "ListItem", position: 2, name: "HOS", item: "https://ajaxglobal.app/hos" },
        ],
      },
      inLanguage: "en-US",
    },

    /* ── Service ── */
    {
      "@type": "Service",
      "@id": "https://ajaxglobal.app/hos#service",
      name: "Human Outsourcing Solutions (HOS)",
      provider: { "@id": "https://ajaxglobal.app/#organization" },
      serviceType: "Business Process Outsourcing",
      description:
        "Elite outsourced remote teams for customer support, sales, virtual assistance, e-commerce, property management, IT, and more. Powered by AI through IntelliDesq™.",
      areaServed: ["US","GB","AU","CA","AE","Global"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HOS Service Tiers",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Associate",
            description: "Basic ops, data entry, ticket creation, general tasks",
            price: "9.00",
            priceCurrency: "USD",
            unitText: "per hour / $1,300 per month",
          },
          {
            "@type": "Offer",
            name: "Specialist",
            description: "Escalations, upselling, vendor outreach, advanced coordination",
            price: "11.50",
            priceCurrency: "USD",
            unitText: "per hour / $1,600 per month",
          },
          {
            "@type": "Offer",
            name: "Manager",
            description: "Team oversight, QA management, training, and escalations",
            price: "14.00",
            priceCurrency: "USD",
            unitText: "per hour / $2,000 per month",
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "248",   // update with real count
      },
    },

    /* ── FAQPage — earns rich FAQ snippets ── */
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is HOS (Human Outsourcing Solutions)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HOS is AJAX Global's outsourcing service that designs, trains, and manages high-performing remote teams — covering customer support, sales, virtual assistants, e-commerce, IT, property management, and more — integrating them directly into your operations.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can AJAX Global launch a new team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most clients go live within 7 days of approval. Our process includes a discovery call, elite talent sourcing with multi-layer vetting, training & onboarding, then full launch — all within a single week.",
          },
        },
        {
          "@type": "Question",
          name: "What is the pricing for HOS services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HOS pricing starts at $9/hr ($1,300/month) for Associates, $11.50/hr ($1,600/month) for Specialists, and $14/hr ($2,000/month) for Managers — all based on 160 hours per month per dedicated resource. Enterprise and custom contracts are also available.",
          },
        },
        {
          "@type": "Question",
          name: "What roles can AJAX Global provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AJAX Global provides customer support agents, sales & lead generation specialists, virtual and admin assistants, e-commerce managers, property management teams, IT & cybersecurity specialists, SEO & social media teams, multilingual agents, and fully custom remote teams.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a long-term contract required?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No long-term lock-in is required. AJAX Global offers flexible engagement models so you can scale teams up or down based on your business needs, with invoicing done monthly in advance.",
          },
        },
        {
          "@type": "Question",
          name: "What is the 60-second rule?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 60-second rule is AJAX Global's commitment to capturing every inbound lead within 60 seconds of contact. This dramatically improves lead conversion rates and ensures no sales opportunity is missed.",
          },
        },
      ],
    },

    /* ── Review snippets ── */
    {
      "@type": "Organization",
      "@id": "https://ajaxglobal.app/#organization-reviews",
      name: "AJAX Global",
      review: [
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Operations Director, SaaS Company USA" },
          reviewBody: "AJAX Global transformed our support ops within two weeks. Zero downtime, professional agents, and KPIs that actually mean something.",
        },
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "CEO, Home Services Australia" },
          reviewBody: "The 60-second rule changed our lead capture rate permanently. We were losing 40% of inbound leads before AJAX.",
        },
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Founder, E-Commerce Brand Canada" },
          reviewBody: "Having IntelliDesq alongside the human team gives us insights we never had with our in-house setup. Worth every dollar.",
        },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════
   PAGE  (Server Component)
═══════════════════════════════════════════════════ */
export default function HOSPage() {
  return (
    <>
      {/* Inject structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Client component tree */}
      <HOSPageComponent />
    </>
  );
}
