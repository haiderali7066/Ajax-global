"use client";

import { Reveal } from "@/components/ui/Reveal";
import { awards } from "@/lib/services-data";

export default function AwardsSection() {
  return (
    <section className="py-10 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h3 className="text-center text-2xl font-light text-gray-500 mb-7">
            Our customer reviews speak for themselves
          </h3>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {awards.map((award, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 p-4 text-center hover:border-violet-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 cursor-default group"
                style={{ minWidth: "110px" }}
              >
                <div className="w-7 h-7 rounded-full bg-red-500 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-xs font-black">G</span>
                </div>
                <div className="text-xs font-bold text-gray-700 leading-tight mb-1 group-hover:text-primary transition-colors">
                  {award}
                </div>
                <div className="text-xs text-primary font-extrabold">Enterprise</div>
                <div className="text-xs text-gray-400 font-light">FALL 2024</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
