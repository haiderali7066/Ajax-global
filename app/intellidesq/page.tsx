import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatbotWidget from '@/components/ChatbotWidget'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'IntelliDesq™ | AI Operational Intelligence Platform',
  description: 'IntelliDesq™ operational intelligence platform: AI-powered insights, predictive analytics, and decision support. Transform operations with intelligent automation.',
  keywords: ['IntelliDesq', 'operational intelligence', 'AI platform', 'predictive analytics', 'business intelligence', 'automation platform'],
  openGraph: {
    title: 'IntelliDesq™ | Operational Intelligence Platform',
    description: 'Intelligence that makes teams unstoppable. Real-time insights, predictive analytics, and automated decisions.',
    type: 'website',
  },
}

// import IntelliDesqHero from '@/components/IntelliDesq/IntelliDesqHero'
// import ProblemWithAutomation from '@/components/IntelliDesq/ProblemWithAutomation'
// import WhatIsIntelliDesq from '@/components/IntelliDesq/WhatIsIntelliDesq'
// import CoreCapabilities from '@/components/IntelliDesq/CoreCapabilities'
// import HowItWorks from '@/components/IntelliDesq/HowItWorks'
// import IntelliDesqPlusHOS from '@/components/IntelliDesq/IntelliDesqPlusHOS'
// import IntelliDesqUseCases from '@/components/IntelliDesq/IntelliDesqUseCases'
// import WhyIntelliDesqByAJAX from '@/components/IntelliDesq/WhyIntelliDesqByAJAX'
// import IntelliDesqCTA from '@/components/IntelliDesq/IntelliDesqCTA'
import IntelliDesqPageComponent from '@/components/IntelliDesq/IntellidesqPage'


export default function IntelliDesqPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
{/* 
      <IntelliDesqHero />
      <ProblemWithAutomation />
      <WhatIsIntelliDesq />
      <CoreCapabilities />
      <HowItWorks />
      <IntelliDesqPlusHOS />
      <IntelliDesqUseCases />
      <WhyIntelliDesqByAJAX />
      <IntelliDesqCTA /> */}
      <IntelliDesqPageComponent />

      <Footer />
      <ChatbotWidget />
      <WhatsAppButton />
    </main>
  );
}
