"use client";

import { Reveal } from "@/components/ui/Reveal";

export default function FinalCTA() {
  return (
    <section className="py-14 sm:py-20 relative overflow-hidden" style={{ background: "#0f0f1a" }}>
      {/* Glow blobs */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 65%)", filter: "blur(90px)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 65%)", filter: "blur(80px)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <Reveal direction="left">
            <div>
          <h2
                className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white mb-4 leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                Ready to hear more about our{" "}
                <span className="font-extrabold text-transparent bg-clip-text bg-primary">
                  enterprise solutions?
                </span>
              </h2>
              <p className="text-slate-400 font-light mb-8 text-lg leading-relaxed">
                Request a callback from our sales team to explore custom pricing plans based on your unique needs and
                goals.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["Coca-Cola", "Universal Music", "Canva"].map((brand, i) => (
                  <span
                    key={i}
                    className="font-extrabold text-white/50 text-lg hover:text-white transition-colors cursor-default"
                  >
                    {brand}
                  </span>
                ))}
              </div>
              {/* Testimonial snippet */}
              <div
                className="rounded-2xl border border-white/10 p-5 shadow-lg"
                style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(16px)" }}
              >
                <p className="text-sm text-slate-300 font-light italic leading-relaxed mb-4">
                  "Now that all teams are reporting in the same place, our leadership gets a live high-level view of
                  every operation."
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-xs"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
                  >
                    KM
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Kristina Muller</div>
                    <div className="text-xs text-violet-400 font-light">SVP Delivery Operations & PMO</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right form */}
          <Reveal direction="right" delay={0.1}>
            <div
              className="rounded-2xl border border-white/10 p-8 shadow-2xl"
              style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)" }}
            >
              {/* Avatar group */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex -space-x-2">
                  {([
                    ["JT", "linear-gradient(135deg,#7c3aed,#4f46e5)"],
                    ["PM", "linear-gradient(135deg,#0ea5e9,#10b981)"],
                    ["CR", "linear-gradient(135deg,#f59e0b,#ef4444)"],
                    ["KM", "linear-gradient(135deg,#8b5cf6,#a78bfa)"],
                  ] as [string, string][]).map(([init, bg], k) => (
                    <div
                      key={k}
                      className="w-8 h-8 rounded-full border-2 border-[#0f0f1a] flex items-center justify-center text-white text-xs font-black"
                      style={{ background: bg }}
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-200">Contact our sales team</span>
              </div>

              {/* Form fields */}
              <div className="space-y-3">
                {["First name", "Last name", "Work email", "Job title", "Company name"].map((field, i) => (
                  <input
                    key={i}
                    placeholder={`${field}*`}
                    className="w-full px-4 py-3 rounded-xl border text-sm text-white placeholder-white/30 focus:outline-none focus:border-violet-500 transition-all"
                    style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.12)" }}
                  />
                ))}
                <select
                  className="w-full px-4 py-3 rounded-xl border text-sm text-white/40 focus:outline-none transition-all appearance-none"
                  style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.12)" }}
                >
                  <option>Company size*</option>
                  <option>1-50</option>
                  <option>51-200</option>
                  <option>201-1000</option>
                  <option>1000+</option>
                </select>
                <textarea
                  placeholder="Tell us more about your team and what you'd like to explore"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border text-sm text-white placeholder-white/30 focus:outline-none focus:border-violet-500 transition-all resize-none"
                  style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.12)" }}
                />
                <button
                  className="w-full py-3.5 rounded-xl text-white font-extrabold text-sm transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: "var(--primary)", boxShadow: "0 8px 28px rgba(124,58,237,0.38)" }}
                >
                  Submit
                </button>
                <p className="text-xs text-white/25 text-center font-light">
                  By submitting, you accept our Privacy Policy and consent to be contacted by AJAX Global.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
