export default function SeoSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AJAX Global',
    description: 'Human outsourcing and operational intelligence platform',
    url: 'https://ajaxglobal.com',
    logo: 'https://ajaxglobal.com/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/ajax-global',
      'https://www.twitter.com/ajaxglobal',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-XXX-XXX-XXXX',
      contactType: 'Sales',
    },
    founder: {
      '@type': 'Organization',
      name: 'AJAX Global',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'Human Outsourcing',
      'Business Process Outsourcing',
      'Operational Intelligence',
      'AI Automation',
      'Customer Support',
      'Business Operations',
    ],
    serviceArea: {
      '@type': 'AdministrativeArea',
      name: 'Global',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
