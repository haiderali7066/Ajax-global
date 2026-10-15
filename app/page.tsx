import HeroSection from '@/components/Home/HeroNeuralGrid'
import ServiceSelector from '@/components/Home/ServiceSelector'
import ProductLifecycle from '@/components/Home/ProductLifecycle'
import TeamSupportCards from '@/components/Home/TeamSupportCards'
import AjaxAdvantage from '@/components/Home/AjaxAdvantage'
import PrimaryCTA from '@/components/Home/PrimaryCTA'
import ChatbotWidget from '@/components/ChatbotWidget'
import WhatsAppButton from '@/components/WhatsAppButton'
import HOSIntelliDesqTiltSplit from '@/components/Home/HOS+Intellidesq'
import N8nWorkflowShowcase from '@/components/N8nworkflowshowcase'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      
      <HeroSection />
      <ServiceSelector />
      <TeamSupportCards />
      <N8nWorkflowShowcase/>
      <HOSIntelliDesqTiltSplit />
      <ProductLifecycle />
    
      <AjaxAdvantage />
    
      <PrimaryCTA />
      <ChatbotWidget />
      <WhatsAppButton />
    </main>
  );
}
