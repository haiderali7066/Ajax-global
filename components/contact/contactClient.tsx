"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  Globe,
  Send,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  Bot,
  Users,
  Shield,
  Zap,
  DollarSign,
  RefreshCw,
  Sparkles,
} from "lucide-react";

// ─── Font Import ───────────────────────────────────────────────────────────────
const fontImport = `
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap');
  * { font-family: 'Figtree', system-ui, sans-serif; }
`;

// ─── Data ────────────────────────────────────────────────────────────────────
const quickContact = [
  { icon: Mail, title: "Business Email", value: "hello@ajaxglobal.com", description: "Fast, reliable responses for all inquiries", color: "#7c3aed", bg: "#ede9fe" },
  { icon: Phone, title: "Business Phone", value: "+1 (555) 123-4567", description: "Speak directly with a strategy consultant", color: "#059669", bg: "#d1fae5" },
  { icon: Clock, title: "Operating Hours", value: "24/7 Global Support", description: "We never sleep — neither does your growth", color: "#0ea5e9", bg: "#dbeafe" },
  { icon: Globe, title: "Countries Served", value: "USA · Canada · Australia · UAE", description: "International presence, local expertise", color: "#d97706", bg: "#fef3c7" },
];

const services = [
  "Customer Service Support", "Custom Remote Teams", "Scheduling & Dispatching",
  "Sales & Lead Generation", "E-commerce Management", "SEO / Social Media",
  "IT & Cybersecurity", "AI Chat Agents", "AI Voice Agents",
  "AI Workflow Automation", "Not Sure – Need Consultation",
];

const teamSizes = ["1–10 employees", "11–50 employees", "51–200 employees", "201–500 employees", "500+ employees"];
const startTimelines = ["Immediately", "Within 1 month", "1–3 months", "3–6 months", "Just exploring"];

const whyPoints = [
  { icon: DollarSign, text: "Transparent, competitive pricing", color: "#7c3aed", bg: "#ede9fe" },
  { icon: RefreshCw, text: "No long-term lock-in contracts", color: "#059669", bg: "#d1fae5" },
  { icon: Zap, text: "Scalable solutions that grow with you", color: "#0ea5e9", bg: "#dbeafe" },
  { icon: Shield, text: "Secure & confidential processes", color: "#be185d", bg: "#fce7f3" },
  { icon: Users, text: "Industry-trained remote professionals", color: "#d97706", bg: "#fef3c7" },
  { icon: Clock, text: "24/7 global support availability", color: "#1d4ed8", bg: "#dbeafe" },
];

const faqs = [
  { q: "How quickly can a team be deployed?", a: "Most clients are fully onboarded within 5–10 business days. For urgent needs, we can often fast-track deployment within 48–72 hours." },
  { q: "Do you offer month-to-month contracts?", a: "Yes. We believe in earning your business every month. Flexible arrangements are available for teams of all sizes." },
  { q: "Can I combine human outsourcing with AI automation?", a: "Absolutely — and we recommend it. Our hybrid model pairs skilled remote professionals with IntelliDesq™ AI agents for maximum efficiency." },
  { q: "What industries do you specialize in?", a: "We serve e-commerce, healthcare, real estate, SaaS, logistics, legal, and more. If your business has processes, we can optimize them." },
  { q: "Is my data secure?", a: "Security is non-negotiable. We follow industry-standard protocols, sign NDAs, and operate under strict data governance policies." },
  { q: "What happens after I submit the form?", a: "Our team reviews your request, and a strategy consultant reaches out within 24 hours to schedule a discovery call and build your custom proposal." },
];

const nextSteps = [
  { step: "01", title: "We Review Your Request", desc: "Our team assesses your needs immediately upon submission.", color: "#7c3aed" },
  { step: "02", title: "Consultant Reaches Out", desc: "A strategy consultant contacts you within 24 hours.", color: "#0ea5e9" },
  { step: "03", title: "Discovery Call", desc: "We dive deep into your challenges and goals together.", color: "#10b981" },
  { step: "04", title: "Custom Proposal", desc: "You receive a tailored plan built specifically for your business.", color: "#f59e0b" },
];

// ─── Scroll Reveal ────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, direction = "up", className = "" }: {
  children: React.ReactNode; delay?: number; direction?: "up" | "left" | "right" | "fade"; className?: string;
}) {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  const transforms: Record<string, string> = { up: "translateY(40px)", left: "translateX(-40px)", right: "translateX(40px)", fade: "scale(0.95)" };
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : transforms[direction], transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s` }}>
      {children}
    </div>
  );
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl overflow-hidden transition-all duration-300 border" style={{ borderColor: open ? "var(--primary)" : "#e5e7eb", boxShadow: open ? "0 4px 24px rgba(124,58,237,0.1)" : "none" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors" style={{ background: open ? "#f8f7ff" : "white" }}>
        <span className="font-bold text-gray-900 pr-4 text-base">{q}</span>
        <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-300" style={{ color: "var(--primary)", transform: open ? "rotate(180deg)" : "none" }} />
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-500 font-light leading-relaxed border-t border-violet-100 pt-4" style={{ background: "#faf9ff" }}>{a}</div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", country: "",
    services: [] as string[], industry: "", teamSize: "", challenge: "", timeline: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service) ? prev.services.filter((s) => s !== service) : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true); setLoading(false);
    setFormData({ name: "", company: "", email: "", phone: "", country: "", services: [], industry: "", teamSize: "", challenge: "", timeline: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-primary transition-all duration-200 text-sm font-medium";
  const darkInputClass = "w-full px-4 py-3 rounded-xl border text-sm text-white placeholder-white/30 focus:outline-none transition-all font-medium";

  return (
    <>
      <style>{fontImport}</style>

      {/* ══════════════════ QUICK CONTACT INFO ══════════════════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(124,58,237,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,58,237,0.07) 0%, transparent 70%)" }} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-200 bg-white shadow-sm mb-5 cursor-default">
                <Sparkles className="w-3.5 h-3.5 text-violet-500" />
                <span className="text-sm font-semibold text-gray-600">Global Reach. Local Expertise.</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
              </div>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-4" style={{ letterSpacing: "-0.02em" }}>
                Reach Us <span className="font-extrabold text-primary">Anytime</span>
              </h2>
              <p className="text-gray-500 font-light max-w-xl mx-auto text-lg leading-relaxed">
                AJAX Global operates internationally — your timezone is our timezone.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickContact.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={i} delay={i * 0.08} direction="up">
                  <div className="group p-7 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white text-center cursor-default relative overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" style={{ background: `${item.bg}60` }} />
                    <div className="relative z-10">
                      <div className="inline-flex p-3.5 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300" style={{ background: item.bg }}>
                        <Icon className="w-6 h-6" style={{ color: item.color }} />
                      </div>
                      <p className="text-xs font-extrabold uppercase tracking-[.18em] mb-2" style={{ color: item.color }}>{item.title}</p>
                      <p className="font-extrabold text-gray-900 mb-1.5 text-sm leading-snug">{item.value}</p>
                      <p className="text-xs text-gray-400 font-light">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════ CONTACT FORM ══════════════════ */}
      <section id="contact-form" className="py-24" style={{ background: "#f8f7ff" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-[.22em] text-primary block mb-3">Let's Talk</span>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-4" style={{ letterSpacing: "-0.02em" }}>
                Request a <span className="font-extrabold text-primary">Consultation</span>
              </h2>
              <p className="text-gray-500 font-light text-lg leading-relaxed">Tell us about your business and we'll craft a solution around your exact needs.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-white rounded-3xl border border-violet-100 shadow-xl p-8 sm:p-10" style={{ boxShadow: "0 20px 60px rgba(124,58,237,0.08)" }}>
              {submitted ? (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ background: "#d1fae5" }}>
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Message Received!</h3>
                  <p className="text-gray-500 font-light">Thank you for reaching out. A strategy consultant will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Basic Info */}
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[.22em] text-primary mb-4">Basic Information</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name *" className={inputClass} />
                      <input type="text" name="company" value={formData.company} onChange={handleChange} required placeholder="Company Name *" className={inputClass} />
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address *" className={inputClass} />
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className={inputClass} />
                      <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" className={`${inputClass} sm:col-span-2`} />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[.22em] text-primary mb-4">Services Interested In</p>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button key={s} type="button" onClick={() => toggleService(s)}
                          className="px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200"
                          style={formData.services.includes(s)
                            ? { background: "var(--primary)", color: "white", borderColor: "var(--primary)", boxShadow: "0 4px 12px rgba(124,58,237,0.25)" }
                            : { background: "white", color: "#6b7280", borderColor: "#e5e7eb" }
                          }>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Business Details */}
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[.22em] text-primary mb-4">Business Details</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input type="text" name="industry" value={formData.industry} onChange={handleChange} placeholder="Your Industry" className={inputClass} />
                      <select name="teamSize" value={formData.teamSize} onChange={handleChange} className={inputClass}>
                        <option value="">Current Team Size</option>
                        {teamSizes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <select name="timeline" value={formData.timeline} onChange={handleChange} className={inputClass}>
                        <option value="">When do you want to start?</option>
                        {startTimelines.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <textarea name="challenge" value={formData.challenge} onChange={handleChange} required placeholder="What challenge are you facing? *" rows={4} className={`${inputClass} mt-4 resize-none`} />
                  </div>

                  <button type="submit" disabled={loading} className="w-full py-4 rounded-xl font-extrabold text-white flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]"
                    style={{ background: "var(--primary)", boxShadow: "0 8px 28px rgba(124,58,237,0.3)", opacity: loading ? 0.8 : 1 }}>
                    {loading ? "Sending your request..." : "Request Consultation"}
                    {!loading && <Send className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════ CHOOSE YOUR PATH ══════════════════ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <span className="text-xs font-extrabold uppercase tracking-[.22em] text-primary block mb-3">Two Paths</span>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-4" style={{ letterSpacing: "-0.02em" }}>
                Choose Your <span className="font-extrabold text-primary">Path</span>
              </h2>
              <p className="text-gray-500 font-light text-lg">Two powerful solutions. One goal: scalable growth.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* HOS Card */}
            <Reveal direction="left" delay={0.08}>
              <div className="group relative rounded-3xl border-2 border-gray-100 hover:border-violet-300 p-8 transition-all duration-300 hover:shadow-2xl overflow-hidden bg-white h-full">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none transition-colors duration-300" style={{ background: "rgba(124,58,237,0.06)" }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" style={{ background: "rgba(124,58,237,0.03)" }} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="inline-flex p-3.5 rounded-2xl mb-5 w-fit group-hover:scale-110 transition-transform" style={{ background: "#ede9fe" }}>
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-[.2em] text-primary mb-2 block">HOS</span>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3">Human Outsourcing Solutions</h3>
                  <p className="text-gray-500 font-light mb-6 leading-relaxed flex-1">
                    Need trained remote professionals to support your operations? We build, train, and manage dedicated teams that feel like your own.
                  </p>
                  <button className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full text-sm font-extrabold transition-all hover:shadow-lg hover:scale-105 w-fit" style={{ background: "var(--primary)", boxShadow: "0 6px 20px rgba(124,58,237,0.25)" }}>
                    Talk to HOS Team <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Reveal>

            {/* AI Card */}
            <Reveal direction="right" delay={0.08}>
              <div className="group relative rounded-3xl border border-white/10 p-8 transition-all duration-300 hover:shadow-2xl overflow-hidden h-full" style={{ background: "#0f0f1a" }}>
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 65%)", filter: "blur(20px)" }} />
                <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="inline-flex p-3.5 rounded-2xl mb-5 w-fit group-hover:scale-110 transition-transform" style={{ background: "rgba(124,58,237,0.2)" }}>
                    <Bot className="w-7 h-7 text-violet-400" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 rounded-full w-fit" style={{ background: "rgba(124,58,237,0.2)" }}>
                    <Sparkles className="w-3 h-3 text-violet-400" />
                    <span className="text-xs font-extrabold text-violet-400 tracking-wide">IntelliDesq™</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">AI Automation</h3>
                  <p className="text-slate-400 font-light mb-6 leading-relaxed flex-1">
                    Want AI agents that work 24/7 without human intervention? Deploy intelligent automation that never sleeps.
                  </p>
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-extrabold border transition-all duration-200 hover:bg-primary hover:border-primary hover:text-white hover:shadow-lg w-fit" style={{ borderColor: "rgba(167,139,250,0.5)", color: "#a78bfa" }}>
                    Schedule AI Demo <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════ WHAT HAPPENS NEXT ══════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#0f0f1a" }}>
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 65%)", filter: "blur(70px)" }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 65%)", filter: "blur(70px)" }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs font-extrabold uppercase tracking-[.22em] text-violet-400 block mb-3">The Process</span>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
                What Happens <span className="font-extrabold text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #a78bfa, #38bdf8)" }}>Next?</span>
              </h2>
              <p className="text-slate-400 font-light text-lg">A clear path from first contact to your custom solution.</p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nextSteps.map((item, i) => (
              <Reveal key={i} delay={i * 0.09} direction="up">
                <div className="relative text-center group cursor-default">
                  {i < nextSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px border-t-2 border-dashed border-white/10" />
                  )}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white font-black text-lg mb-5 transition-transform group-hover:scale-110 duration-300" style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}aa)`, boxShadow: `0 8px 24px ${item.color}40` }}>
                    {item.step}
                  </div>
                  <h3 className="font-extrabold text-white mb-2 text-sm">{item.title}</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY AJAX GLOBAL ══════════════════ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal direction="left">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[.22em] text-primary block mb-4">Why Us</span>
                <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-5" style={{ letterSpacing: "-0.02em" }}>
                  Why Contact <span className="font-extrabold text-primary">AJAX Global?</span>
                </h2>
                <p className="text-gray-500 font-light leading-relaxed text-lg">
                  We're not just a vendor — we're a growth partner. Here's what you can expect when you work with us.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyPoints.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-3.5 p-4 rounded-2xl border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-default" style={{ background: "white" }}>
                      <div className="inline-flex p-2.5 rounded-xl shrink-0 group-hover:scale-110 transition-transform" style={{ background: item.bg }}>
                        <Icon className="w-4 h-4" style={{ color: item.color }} />
                      </div>
                      <p className="text-sm font-semibold text-gray-700 leading-snug pt-1">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════ FAQ ══════════════════ */}
      <section className="py-24" style={{ background: "#f8f7ff" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-[.22em] text-primary block mb-3">FAQ</span>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-4" style={{ letterSpacing: "-0.02em" }}>
                Frequently Asked <span className="font-extrabold text-primary">Questions</span>
              </h2>
              <p className="text-gray-500 font-light text-lg">Everything you need to know before reaching out.</p>
            </div>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <FAQItem q={faq.q} a={faq.a} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ FINAL CTA (dark) ══════════════════ */}
      <section className="py-28 relative overflow-hidden" style={{ background: "#0f0f1a" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 60%)", filter: "blur(80px)" }} />
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 65%)", filter: "blur(60px)" }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)", filter: "blur(60px)" }} />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 mb-7 cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-semibold text-white/60">Ready when you are</span>
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-light text-white mb-5 leading-tight" style={{ letterSpacing: "-0.025em" }}>
              Ready to Scale{" "}
              <span className="font-extrabold text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #a78bfa, #38bdf8, #34d399)" }}>
                Smarter?
              </span>
            </h2>
            <p className="text-slate-400 font-light text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Join businesses across the globe that trust AJAX Global to power their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-form" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-extrabold transition-all duration-200 hover:scale-105 hover:shadow-2xl"
                style={{ background: "var(--primary)", boxShadow: "0 8px 28px rgba(124,58,237,0.35)" }}>
                Book Free Strategy Call <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact-form" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-extrabold hover:bg-white/10 hover:border-white/30 transition-all duration-200">
                Request Pricing
              </a>
              <a href="#contact-form" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-extrabold hover:bg-white/10 hover:border-white/30 transition-all duration-200">
                Start With a Consultation
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}