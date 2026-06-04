"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/lib/services-data";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-14 sm:py-20" style={{ background: "#f8f7ff" }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-8 text-center"
            style={{ letterSpacing: "-0.02em" }}
          >
            Frequently Asked{" "}
            <span className="font-extrabold text-primary">Questions</span>
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div
                className="rounded-2xl bg-white border transition-all duration-300 overflow-hidden"
                style={{
                  borderColor: openFaq === i ? "var(--primary)" : "#e5e7eb",
                  boxShadow: openFaq === i ? "0 4px 24px rgba(124,58,237,0.1)" : "none",
                }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <h3 className="font-extrabold text-gray-900 group-hover:text-primary transition-colors pr-4 text-base">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className="w-5 h-5 flex-shrink-0 transition-all duration-300"
                    style={{
                      color: openFaq === i ? "var(--primary)" : "#9ca3af",
                      transform: openFaq === i ? "rotate(180deg)" : "none",
                    }}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: openFaq === i ? "200px" : "0", opacity: openFaq === i ? 1 : 0 }}
                >
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7">
                    <p className="text-gray-500 font-light leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
