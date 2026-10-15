"use client";

import { motion, useScroll } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Twitter, Linkedin, Bookmark, Sparkles, CheckCircle2 } from "lucide-react";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-primary/20">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <section className="relative pt-32 pb-16 px-6" style={{ background: "linear-gradient(180deg, #f8f7ff 0%, #ffffff 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <a href="/blog" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to all insights
          </a>

          <div className="flex items-center gap-3 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10">AI & Automation</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-500"><Clock className="w-3.5 h-3.5" /> 6 min read</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-500"><Calendar className="w-3.5 h-3.5" /> Oct 12, 2026</span>
          </div>

          <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
            The Future of Enterprise AI Agents in 2026: Architectures & ROI
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                alt="Alex Morgan"
                className="w-12 h-12 rounded-full object-cover shadow-sm"
              />
              <div>
                <p className="font-bold text-slate-900 text-sm">Alex Morgan</p>
                <p className="text-xs text-slate-500">Chief AI Architect at AJAX Global</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors" title="Share on Twitter">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors" title="Share on LinkedIn">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors" title="Bookmark article">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="rounded-3xl overflow-hidden h-[380px] lg:h-[480px] shadow-2xl relative">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1400&h=800&fit=crop"
            alt="Enterprise AI Agents"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-[1fr_300px] gap-12 pb-24">
        <div className="prose prose-slate max-w-none text-slate-600 font-light leading-relaxed space-y-6">
          <p className="text-lg font-normal text-slate-700 leading-relaxed">
            As enterprises scale beyond traditional SaaS tooling, autonomous AI agents have shifted from experimental chatbots into core operational infrastructure. In 2026, organizations leveraging multi-agent orchestration are seeing unprecedented efficiency gains.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 pt-6">1. The Shift from Prompt Engineering to Agentic Workflows</h2>
          <p>
            Prompt engineering solved immediate point problems, but modern enterprise workflows require long-running, stateful task execution. At AJAX Global, we implement modular agent architectures where specialized workers handle tasks ranging from code refactoring to compliance auditing.
          </p>

          <div className="p-6 my-8 rounded-2xl bg-primary/5 border-l-4 border-primary text-slate-800">
            <p className="font-semibold text-slate-900 mb-1">Key Takeaway for CTOs:</p>
            <p className="text-sm m-0">
              "Agents don't replace engineers; they remove the cognitive friction of repetitive pipeline management, allowing teams to focus entirely on core business logic."
            </p>
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 pt-6">2. Architectural Blueprints for Secure Deployment</h2>
          <p>
            When deploying AI agents across distributed cloud environments (AWS, GCP, or hybrid data centers), security and determinism are paramount. Key architectural pillars include:
          </p>
          <ul className="space-y-3 my-4 list-disc pl-5">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Sandboxed Execution Environments:</strong> Isolating agent code generation runs in secure Docker containers.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Vector Database Isolation:</strong> Utilizing MongoDB and Pinecone with granular role-based access control (RBAC).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Human-in-the-Loop Gateways:</strong> Requiring cryptographic sign-offs for high-impact production database mutations.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-extrabold text-slate-900 pt-6">3. Measuring Real-World ROI</h2>
          <p>
            Client deployments across North America and Europe indicate a 40% reduction in ticket resolution times and a 3x increase in feature delivery velocity within the first 90 days of adopting agentic workflows.
          </p>
        </div>

        <aside className="space-y-8">
          <div className="sticky top-24 p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
            <h3 className="font-extrabold text-slate-900 mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" /> Ready to Scale?
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Let AJAX Global design and integrate a custom AI agent ecosystem for your company.
            </p>
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full h-11 rounded-full font-bold text-white text-xs bg-primary shadow-md shadow-primary/30"
              >
                Book a Strategy Call
              </motion.button>
            </a>
          </div>
        </aside>
      </div>

      <section className="relative overflow-hidden py-24 mx-6 lg:mx-12 mb-16 rounded-4xl bg-[#0f0b1e]">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(14,165,233,0.15) 0%,transparent 65%)", filter: "blur(90px)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[.22em] text-primary/80 block mb-3">Let's Build Together</span>
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">
            Transform your business with <span className="font-extrabold text-primary">AJAX Global.</span>
          </h2>
          <p className="text-white/40 font-light text-base mb-8 max-w-md mx-auto">
            Talk directly with our engineering and AI consultants today.
          </p>
          <a href="/contact">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-8 h-12 rounded-full font-bold text-white text-sm bg-primary shadow-lg shadow-primary/40"
            >
              Request Consultation
            </motion.button>
          </a>
        </div>
      </section>
    </div>
  );
}