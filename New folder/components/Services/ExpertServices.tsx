"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { expertServices } from "@/lib/services-data";

export default function ExpertServices() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left heading */}
          <div className="lg:col-span-1">
            <Reveal direction="left">
              <h2
                className="text-[clamp(2rem,4vw,3rem)] font-light text-gray-900 mb-6 leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                Expert services for{" "}
                <span className="font-extrabold text-primary">lasting success</span>
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full text-sm font-bold transition-all group hover:shadow-lg hover:scale-105"
                style={{ background: "var(--primary)" }}
              >
                Contact sales{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-xs text-gray-400 mt-3 font-light">Services may require additional costs</p>
            </Reveal>
          </div>

          {/* Service cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {expertServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                      style={{ background: `${service.color}80` }}
                    />
                    <div className="relative z-10">
                      <div
                        className="w-11 h-11 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{ background: service.color }}
                      >
                        <Icon className="w-5 h-5" style={{ color: service.accent }} />
                      </div>
                      <h3 className="font-extrabold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm font-light leading-relaxed" style={{ color: service.accent }}>
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
