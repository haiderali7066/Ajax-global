import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, DM_Sans as Dmsans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import SeoSchema from '@/components/SeoSchema'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _dmsans = Dmsans({ subsets: ["latin"], weight: ["100", "300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: 'AJAX Global | Human Outsourcing & AI Intelligence Platform',
  description: 'Scale operations with elite human teams powered by IntelliDesq™ AI-driven intelligence. Human Outsourcing Solutions (HOS), business operations, and intelligent automation.',
  generator: 'v0.app',
  keywords: [
    'human outsourcing',
    'business operations',
    'AI intelligence',
    'operational intelligence',
    'human teams',
    'operations management',
    'IntelliDesq',
    'BPO services',
    'business process outsourcing',
    'customer support outsourcing',
    'operations optimization',
  ],
  authors: [{ name: 'AJAX Global' }],
  openGraph: {
    title: 'AJAX Global | Human Outsourcing & AI Intelligence',
    description: 'Combine elite human teams with AI-driven operational intelligence to transform your business.',
    type: 'website',
    locale: 'en_US',
    siteName: 'AJAX Global',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AJAX Global | Intelligence Over Automation',
    description: 'Elite human teams + AI intelligence = Operational excellence',
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
      {
        url: '/',
        media: '(prefers-color-scheme: light)',
      },
     
    ],
    apple: '/apple-icon.png',
  },
  alternates: {
    canonical: 'https://ajaxglobal.com',
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
