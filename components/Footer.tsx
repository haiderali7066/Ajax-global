'use client'

import Link from 'next/link'

const footerLinks = {
  AI: [
    { name: 'IntelliDesq™', href: '/intellidesq' },
    { name: 'AI Chat Agents', href: '#' },
    { name: 'AI Voice Agents', href: '#' },
    { name: 'AI Lead Generation', href: '#' },
    { name: 'AI Social Media Automation', href: '#' },
    { name: 'AI Youtube Automation', href: '#' },
    { name: 'AI Workflow', href: '#' },
    { name: 'Miscellaneous', href: '#' },
  ],
  HOS: [
    { name: 'Customer Service', href: '#' },
    { name: 'Custom Remote Teams', href: '#' },
    { name: 'Client Retention', href: '#' },
    { name: 'Scheduling & Dispatching', href: '#' },
    { name: 'Property Mangement Support', href: '#' },
    { name: 'E-Commerce Mangement', href: '#' },
    { name: 'Sales & Lead Generation', href: '#' },
    { name: 'SEO', href: '#' },
    { name: 'Social Media Marketing', href: '#' },
    { name: 'Virtual & Admin Assistant', href: '#' },
    { name: 'IT Support & Cybersecurity', href: '#' },
  ],
  Products: [
    { name: 'Work Management', href: '#' },
    { name: 'CRM', href: '#' },
    { name: 'Campaigns', href: '#' },
    { name: 'Services', href: '#' },
  ],
  Features: [
    { name: 'HOS', href: '/hos' },
    { name: 'AI', href: '#' },
    { name: 'Integrations', href: '#' },
    { name: 'Automations', href: '#' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-rose-400 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-white hover:text-white/80 transition-colors duration-300"
            >
              <span>AJAX</span>
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center font-bold text-rose-400 text-sm">
                G
              </div>
            </Link>
            <p className="text-white/90 leading-relaxed text-sm">
              AJAX Global is a full-service outsourcing and AI solutions company that helps businesses scale their operations with the perfect blend of human talent and artificial intelligence.
            </p>
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-white/90">
              <p className="flex items-start gap-2">
                <span className="mt-1">📍</span>
                <span>451 Wall Street, UK, London</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <span>Phone: (064) 332-1233</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📧</span>
                <span>Fax: (099) 453-1357</span>
              </p>
            </div>
          </div>

          {/* AI Links */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">AI</h3>
            <ul className="space-y-3">
              {footerLinks.AI.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HOS Links */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">HOS</h3>
            <ul className="grid grid-cols-2 gap-3">
              {footerLinks.HOS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">AJAX PRODUCTS</h3>
            <ul className="space-y-3">
              {footerLinks.Products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Links */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">FEATURE</h3>
            <ul className="space-y-3">
              {footerLinks.Features.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20" />

        {/* Bottom Section */}
        <div className="pt-8 text-center">
          <p className="text-white/90 text-sm">
            All Copyright Reserved 2025 | Developed by ReonSys
          </p>
        </div>
      </div>
    </footer>
  )
}
