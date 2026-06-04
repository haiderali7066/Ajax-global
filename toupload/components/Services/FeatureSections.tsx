"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { OKRMockup, TicketsMockup, DashboardMockup } from "@/components/Services/Mockups";
import { featureSections } from "@/lib/services-data";

const mockupMap: Record<string, React.ReactNode> = {
  okr: <OKRMockup />,
  tickets: <TicketsMockup />,
  dashboard: <DashboardMockup />,
};

export default function FeatureSections() {
  return (
    <>
      {featureSections.map((section, idx) => (
        <section
          key={idx}
          className="py-14 sm:py-20"
          style={{ background: section.sectionBg }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Reveal>
                <h2
                  className="text-[clamp(1.8rem,4vw,3rem)] font-light text-gray-900 mb-3"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {section.title}
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-base text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                  {section.subtitle}
                </p>
              </Reveal>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="rounded-2xl p-7 sm:p-9" style={{ background: section.color }}>
                <Reveal direction="left">
                  <div className="space-y-5">
                    {section.items.map((item, i) => (
                      <div key={i} className="group cursor-default">
                        <h3 className="font-bold text-gray-900 mb-1 text-base group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm font-light leading-relaxed" style={{ color: section.accentColor }}>
                          {item.desc}
                        </p>
                        {i < section.items.length - 1 && (
                          <div className="mt-4 border-b border-white/60" />
                        )}
                      </div>
                    ))}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full text-sm font-semibold mt-3 hover:shadow-lg hover:scale-105 transition-all group"
                      style={{ background: section.accentColor }}
                    >
                      Contact sales <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Reveal>
              </div>

              <Reveal direction="right" delay={0.12}>
                <div className="relative">
                  <div
                    className="absolute -inset-4 rounded-3xl opacity-25 blur-2xl"
                    style={{ background: section.color }}
                  />
                  <div className="relative">{mockupMap[section.mockup]}</div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
