"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { tradeServices } from "@/lib/services-data";

export default function TradeServices() {
  return (
    <section className="py-14 sm:py-20" style={{ background: "#f8f7ff" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Reveal>
            <h2
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Trade & Logistics{" "}
              <span className="font-extrabold text-primary">Services</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              Reliable, scalable, and efficient international trade solutions tailored to your business.
            </p>
          </Reveal>
        </div>

        <div className="space-y-4">
          {tradeServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={index} delay={index * 0.07}>
                <div className="group rounded-2xl bg-white border border-gray-100 p-8 sm:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl group-hover:w-1.5 transition-all duration-300"
                    style={{ background: service.accentColor }}
                  />

                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    {/* Title + description */}
                    <div>
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ background: service.color }}
                      >
                        <Icon className="w-7 h-7" style={{ color: service.accentColor }} />
                      </div>
                      <h3 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-light mb-3 leading-relaxed">{service.description}</p>
                      <div className="text-xs text-gray-400 font-medium">
                        <span className="font-bold text-gray-600">Ideal for: </span>
                        {service.idealFor}
                      </div>
                    </div>

                    {/* Feature checklist */}
                    <div className="md:col-span-2">
                      <h4 className="text-xs font-black text-gray-400 uppercase tracking-[.2em] mb-4">
                        What's Included
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <div
                              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                              style={{ background: service.color }}
                            >
                              <Check className="w-3 h-3" style={{ color: service.accentColor }} />
                            </div>
                            <span className="text-sm text-gray-600 font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
