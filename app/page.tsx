import Header from '@/components/Header'
import HeroSection from '@/components/Home/HeroSection'
import ServiceSelector from '@/components/Home/ServiceSelector'
import InteractiveCategorySection from '@/components/Home/InteractiveCategorySection'
import ProductLifecycle from '@/components/Home/ProductLifecycle'
import TeamSupportCards from '@/components/Home/TeamSupportCards'
import BuiltForInnovators from '@/components/Home/BuiltForInnovators'
import SolutionsShowcase from '@/components/Home/SolutionsShowcase'  
import AjaxAdvantage from '@/components/Home/AjaxAdvantage'
import TeamImpact from '@/components/Home/TeamImpact'
import TrustAwards from '@/components/Home/TrustAwards'
import AIPlatformCTA from '@/components/Home/AIPlatformCTA'
import WhyAjaxGlobal from '@/components/Home/WhyAjaxGlobal'
import PrimaryCTA from '@/components/Home/PrimaryCTA'
import VideoSection from "@/components/VideoSection";
import Footer from '@/components/Footer'
import ChatbotWidget from '@/components/ChatbotWidget'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServiceSelector />
      <TeamSupportCards />
      <VideoSection />
      <ProductLifecycle />
      <BuiltForInnovators />
      {/* <SolutionsShowcase /> */}
      {/* <InteractiveCategorySection /> */}
      <AjaxAdvantage />
      <TeamImpact />
      <TrustAwards />
      <AIPlatformCTA />
      {/* <WhyAjaxGlobal /> */}
      <PrimaryCTA />
      <Footer />
      <ChatbotWidget />
      <WhatsAppButton />
    </main>
  );
}
