// Server component. Defines WebSite + Organization once for the whole site.
// Other pages reference these by @id instead of redefining them.

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ajaxglobal.com").replace(/\/$/, "");

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "AJAX Global",
      inLanguage: "en-US",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": ORG_ID,
      name: "AJAX Global",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.jpeg` },
      image: `${SITE_URL}/logo.jpeg`,
      description:
        "Human outsourcing and operational intelligence platform: elite remote teams powered by IntelliDesq™ AI.",
      email: "info@ajaxglobal.com",
      telephone: "+13464280370",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1500 N. Grant St, Ste R",
        addressLocality: "Denver",
        addressRegion: "CO",
        postalCode: "80203",
        addressCountry: "US",
      },
      // Your original said "Worldwide". Keep that if it's true, otherwise list the
      // specific countries you actually serve (more useful for geo targeting).
      areaServed: "Worldwide",
      sameAs: [
        "https://www.linkedin.com/company/ajax-global",
        "https://x.com/ajaxglobal", // only keep if this account exists and is active
        "https://www.instagram.com/ajaxglobalofficial",
        "https://www.facebook.com/share/1EKRVhNHVB",
        "https://www.pinterest.com/ajaxglobalofficial/",
      ],
      knowsAbout: [
        "Human Outsourcing",
        "Business Process Outsourcing",
        "Operational Intelligence",
        "AI Automation",
        "Customer Support",
        "Business Operations",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "info@ajaxglobal.com",
          telephone: "+13464280370",
          availableLanguage: ["English"],
        },
      ],
    },
  ],
};

export default function SeoSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}