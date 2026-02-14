import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatbotWidget from '@/components/ChatbotWidget'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Human Outsourcing Solutions (HOS) | AJAX Global',
  description: 'Elite human outsourcing teams trained to your standards. Scale operations with dedicated professionals and AI-assisted workflows from AJAX Global.',
  keywords: ['human outsourcing', 'HOS', 'business operations', 'dedicated teams', 'outsourcing solutions', 'BPO'],
  openGraph: {
    title: 'Human Outsourcing Solutions | AJAX Global',
    description: 'High-performance teams engineered for your success with AI-assisted intelligence.',
    type: 'website',
  },
}

import HOSHero from '@/components/HOS/HOSHero'
import WhatIsHOS from '@/components/HOS/WhatIsHOS'
import RolesWeProvide from '@/components/HOS/RolesWeProvide'
import HowItWorks from '@/components/HOS/HowItWorks'
import WhyAJAXGlobal from '@/components/HOS/WhyAJAXGlobal'
import HOSIntelliDesqConnection from '@/components/HOS/HOSIntelliDesqConnection'
import UseCases from '@/components/HOS/UseCases'
import HOSCTA from '@/components/HOS/HOSCTA'

export default function HOSPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <HOSHero />
      <WhatIsHOS />
      <RolesWeProvide />
      <HowItWorks />
      <WhyAJAXGlobal />
      <HOSIntelliDesqConnection />
      <UseCases />
      <HOSCTA />

      <Footer />
      <ChatbotWidget />
      <WhatsAppButton />
    </main>
  )
}
