// app/contact/page.tsx — SERVER COMPONENT (no "use client")
import type { Metadata } from "next";

import ContactHero     from "@/components/Contact/ContactHero";
import QuickContact    from "@/components/Contact/QuickContact";
import ContactForm     from "@/components/Contact/ContactForm";
import ChooseYourPath  from "@/components/Contact/ChooseYourPath";
import WhatHappensNext from "@/components/Contact/WhatHappensNext";
import WhyAJAX         from "@/components/Contact/WhyAJAX";
import ContactFAQ      from "@/components/Contact/ContactFAQ";
import ContactCTA      from "@/components/Contact/ContactCTA";
import { SITE, CONTACT_FAQS } from "@/components/Contact/contact.data";

const PAGE_URL = `${SITE.url}/contact`;
const TITLE = "Contact AJAX Global ";
const DESCRIPTION =
  "Talk to AJAX Global about outsourcing, remote teams and AI automation. Book a free strategy call and get a custom proposal within 24 hours.";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
    languages: { "en-US": PAGE_URL, "x-default": PAGE_URL },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: SITE.name,
    title: TITLE,
    description:
      "Talk to an AJAX Global expert. Request a custom proposal for outsourcing or AI automation. We reply within 24 hours.",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "Contact AJAX Global: book a strategy call",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitterHandle,
    creator: SITE.twitterHandle,
    title: "Contact AJAX Global | Free Strategy Consultation",
    description:
      "Book a free strategy call. Human outsourcing + AI automation, with custom proposals in 24 hours.",
    images: [SITE.ogImage],
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
};

// ─── Structured data (single @graph, entities linked by @id) ──────────────────
// GEO note: one connected graph is easier for Google and for AI engines
// (ChatGPT, Perplexity, Gemini, Copilot) to parse than five separate blobs.
const ID = {
  website: `${SITE.url}/#website`,
  org: `${SITE.url}/#organization`,
  page: `${PAGE_URL}#webpage`,
  crumbs: `${PAGE_URL}#breadcrumb`,
  faq: `${PAGE_URL}#faq`,
  service: `${SITE.url}/#service`,
};

const areaServed = SITE.areaServed.map((c) => ({
  "@type": "Country",
  name: c.name,
}));

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": ID.website,
      url: SITE.url,
      name: SITE.name,
      inLanguage: "en-US",
      publisher: { "@id": ID.org },
    },
    {
      // ProfessionalService extends Organization, so this one entity replaces
      // both the old Organization and LocalBusiness blocks.
      "@type": ["Organization", "ProfessionalService"],
      "@id": ID.org,
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: SITE.logo },
      image: SITE.ogImage,
      foundingDate: SITE.foundingDate,
      email: SITE.email,
      telephone: SITE.telephone,
      address: { "@type": "PostalAddress", ...SITE.address },
      areaServed,
      sameAs: SITE.sameAs,
      slogan: "Human outsourcing + AI automation",
      knowsAbout: [
        "Business process outsourcing",
        "Remote team staffing",
        "AI workflow automation",
        "Customer support outsourcing",
        "Sales outsourcing",
      ],
      ...(SITE.open247 && {
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      }),
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: SITE.email,
          telephone: SITE.telephone,
          availableLanguage: ["English"],
          areaServed: SITE.areaServed.map((c) => c.code),
        },
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: SITE.email,
          telephone: SITE.telephone,
          availableLanguage: ["English"],
          areaServed: SITE.areaServed.map((c) => c.code),
        },
      ],
    },
    {
      "@type": "Service",
      "@id": ID.service,
      name: "Outsourcing and AI Automation Services",
      serviceType: [
        "Business Process Outsourcing",
        "Remote Team Staffing",
        "AI Workflow Automation",
      ],
      provider: { "@id": ID.org },
      areaServed,
      description:
        "Human outsourcing (HOS) and IntelliDesq™ AI agents, delivered as a hybrid model. Free strategy call, custom proposal within 24 hours.",
    },
    {
      "@type": "ContactPage",
      "@id": ID.page,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      isPartOf: { "@id": ID.website },
      about: { "@id": ID.org },
      mainEntity: { "@id": ID.org },
      breadcrumb: { "@id": ID.crumbs },
      dateModified: SITE.lastReviewed,
      // Helps voice assistants and AI answer engines pick quotable passages
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["[data-speakable]"],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": ID.crumbs,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Contact", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": ID.faq,
      mainEntity: CONTACT_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

// Escape "<" so content can never break out of the script tag
const jsonLd = JSON.stringify(graph).replace(/</g, "\\u003c");

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
        <ContactHero />

        {/* GEO: short, factual, answer-first block that AI engines can quote.
            Visible to users (not hidden text). Restyle to match your design. */}
        <section
          aria-label="Contact summary"
          className="mx-auto max-w-3xl px-6 py-8 text-center"
        >
          <p data-speakable className="text-base leading-relaxed text-gray-700">
            <strong>AJAX Global</strong> provides human outsourcing and AI
            automation for businesses in the United States, Canada, Australia
            and the UAE. To get started, book a free strategy call or email{" "}
            <a href={`mailto:${SITE.email}`} className="underline">
              {SITE.email}
            </a>
            . A strategy consultant replies within 24 hours with a custom
            proposal, and most teams are onboarded in 5–10 business days.
          </p>
        </section>

        <QuickContact />
        <ContactForm />
        <ChooseYourPath />
        <WhatHappensNext />
        <WhyAJAX />
        <ContactFAQ />
        <ContactCTA />
      </main>
    </>
  );
}