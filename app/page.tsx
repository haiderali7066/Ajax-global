import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServiceSelector from '@/components/ServiceSelector'
import InteractiveCategorySection from '@/components/InteractiveCategorySection'
import ProductLifecycle from '@/components/ProductLifecycle'
import TeamSupportCards from '@/components/TeamSupportCards'
import BuiltForInnovators from '@/components/BuiltForInnovators'
import SolutionsShowcase from '@/components/SolutionsShowcase'
import AjaxAdvantage from '@/components/AjaxAdvantage'
import TeamImpact from '@/components/TeamImpact'
import TrustAwards from '@/components/TrustAwards'
import AIPlatformCTA from '@/components/AIPlatformCTA'
import WhyAjaxGlobal from '@/components/WhyAjaxGlobal'
import IndustriesUseCases from '@/components/IndustriesUseCases'
import PrimaryCTA from '@/components/PrimaryCTA'
import Footer from '@/components/Footer'
import ChatbotWidget from '@/components/ChatbotWidget'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServiceSelector />
      <InteractiveCategorySection />
      <ProductLifecycle />
      <TeamSupportCards />
      <BuiltForInnovators />
      <SolutionsShowcase />
      <AjaxAdvantage />
      <TeamImpact />
      <TrustAwards />
      <AIPlatformCTA />
      <WhyAjaxGlobal />
      <IndustriesUseCases />
      <PrimaryCTA />
      <Footer />
      <ChatbotWidget />
      <WhatsAppButton />
    </main>
  )
}
