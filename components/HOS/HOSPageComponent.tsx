"use client";

import { fontImport } from "./shared";
import HOSHero from "./HOSHero";
import { TrustBar, LogoBar } from "./TrustBar";
import WhatIsHOS from "./WhatIsHOS";
import RolesWeProvide from "./RolesWeProvide";
import HowItWorks from "./HowItWorks";
import WhyAJAXGlobal from "./WhyAJAXGlobal";
import HOSIntelliDesqSection from "./HOSIntelliDesqSection";
import UseCases from "./UseCases";
import { AgentArc, PricingSnapshot, TrustSection, HOSCTA } from "./HOSExtras";

export default function HOSPageComponent() {
  return (
    <main className="min-h-screen bg-white">
      <style>{fontImport}</style>
      <HOSHero />
      <TrustBar />
      <LogoBar />
      <WhatIsHOS />
      <RolesWeProvide />
      <HowItWorks />
      <WhyAJAXGlobal />
      <HOSIntelliDesqSection />
      <UseCases />
      <AgentArc />
      <PricingSnapshot />
      <TrustSection />
      <HOSCTA />
    </main>
  );
}
