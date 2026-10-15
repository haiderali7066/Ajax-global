// components/Contact/contact.data.ts
// Import this in BOTH ContactFAQ.tsx (render) and app/contact/page.tsx (schema)
// so the visible FAQ and the FAQPage JSON-LD can never drift apart.

export const SITE = {
  url: "https://www.ajaxglobal.com",
  name: "AJAX Global",
  legalName: "AJAX Global", // TODO: registered legal name
  logo: "https://www.ajaxglobal.com/logo.png",
  ogImage: "https://www.ajaxglobal.com/og/contact.jpg", // TODO: make sure this file exists (1200x630)
  email: "hello@ajaxglobal.com",
  telephone: "+1-000-000-0000", // TODO: REAL number in E.164 format
  foundingDate: "2018", // TODO: confirm
  twitterHandle: "@AJAXGlobal",
  sameAs: [
    "https://www.linkedin.com/company/ajax-global",
    "https://x.com/AJAXGlobal",
  ],
  // TODO: real address, or delete `address` from the schema below
  address: {
    streetAddress: "REAL STREET ADDRESS",
    addressLocality: "CITY",
    addressRegion: "STATE",
    postalCode: "ZIP",
    addressCountry: "US",
  },
  areaServed: [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "AU", name: "Australia" },
    { code: "AE", name: "United Arab Emirates" },
  ],
  // Set to true only if you genuinely operate 24/7
  open247: false,
  lastReviewed: "2026-10-15", // bump manually when page content changes
} as const;

export const CONTACT_FAQS = [
  {
    q: "How quickly can a team be deployed?",
    a: "Most clients are fully onboarded within 5–10 business days. For urgent needs, we can often fast-track deployment within 48–72 hours.",
  },
  {
    q: "Do you offer month-to-month contracts?",
    a: "Yes. We believe in earning your business every month. Flexible arrangements are available for teams of all sizes.",
  },
  {
    q: "Can I combine human outsourcing with AI?",
    a: "Yes, and we recommend it. Our hybrid model pairs skilled remote professionals with IntelliDesq™ AI agents for maximum efficiency.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We serve e-commerce, healthcare, real estate, SaaS, logistics, legal, and more. If your business has repeatable processes, we can optimize them.",
  },
  {
    q: "Is my data secure with AJAX Global?",
    a: "Security is non-negotiable. We follow industry-standard protocols, sign NDAs, and operate under strict data governance policies.",
  },
  {
    q: "What happens after I submit the contact form?",
    a: "Our team reviews your request, and a strategy consultant reaches out within 24 hours to schedule a discovery call and build your custom proposal.",
  },
] as const;