import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, DM_Sans as Dmsans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import SeoSchema from '@/components/SeoSchema'
import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import BottomConsentPopup from '@/components/BottomConsentPopup'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _dmsans = Dmsans({ subsets: ["latin"], weight: ["100", "300", "400", "500", "600", "700"] });

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ajaxglobal.com").replace(/\/$/, "");
const DEFAULT_OG = "/og/default.jpg"; // TODO: add a real 1200x630 image at public/og/default.jpg

export const metadata: Metadata = {
  // All relative URLs (canonical, og:url, images) resolve against this
  metadataBase: new URL(SITE_URL),

  title: 'AJAX Global | Human Outsourcing & AI Intelligence Platform',
  description:
    'Scale operations with elite human teams powered by IntelliDesq™ AI-driven intelligence. Human Outsourcing Solutions (HOS), business operations, and intelligent automation.',
  generator: 'Devntom solutions',
  authors: [{ name: 'AJAX Global' }],

  // NOTE: no global `alternates.canonical` here. A canonical set in the layout is
  // inherited by every page that doesn't override it, so all pages would point at
  // the homepage. Set it per page instead (see app/page.tsx snippet below).

  openGraph: {
    title: 'AJAX Global | Human Outsourcing & AI Intelligence',
    description:
      'Combine elite human teams with AI-driven operational intelligence to transform your business.',
    type: 'website',
    locale: 'en_US',
    siteName: 'AJAX Global',
    url: '/',
    images: [{ url: DEFAULT_OG, width: 1200, height: 630, alt: 'AJAX Global: Human Outsourcing & AI Intelligence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AJAX Global | Intelligence Over Automation',
    description: 'Elite human teams + AI intelligence = Operational excellence',
    images: [DEFAULT_OG],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.jpeg", media: "(prefers-color-scheme: light)" },
      { url: "/logo.jpeg", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/logo.jpeg",
  },
  verification: {
    google: "opm01emOVEwDFpRishdCatV11NsRjYdPwmeNDSlyIwQ",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <SeoSchema />
      </head>
      <body className={`font-sans antialiased`}>
        <Header />
        {children}
        <Analytics />
        <BottomConsentPopup />
        <Footer />
      </body>
    </html>
  )
}