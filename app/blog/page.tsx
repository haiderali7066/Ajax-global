"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Search, Clock, Calendar, Sparkles, ChevronRight } from "lucide-react";

// Mock categories & blog data tailored for AJAX Global
const CATEGORIES = ["All", "AI & Automation", "Software Engineering", "Growth Systems", "Case Studies"];

const FEATURED_POST = {
  slug: "future-of-enterprise-ai-agents-2026",
  title: "The Future of Enterprise AI Agents in 2026: Architectures & ROI",
  excerpt: "Discover how autonomous multi-agent systems are replacing legacy workflows, reducing operational overhead by 45%, and scaling engineering teams globally.",
  category: "AI & Automation",
  author: { name: "Alex Morgan", role: "Chief AI Architect", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" },
  date: "Oct 12, 2026",
  readTime: "6 min read",
  image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=600&fit=crop",
};

const POSTS = [
  {
    slug: "scaling-nextjs-micro-frontends",
    title: "Scaling Next.js Micro-Frontends for High-Traffic Enterprise SaaS",
    excerpt: "Best practices for modular architecture, server-side rendering caching strategies, and seamless state synchronization across distributed teams.",
    category: "Software Engineering",
    author: { name: "David Vance", role: "Principal Engineer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" },
    date: "Oct 08, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  },
  {
    slug: "building-hybrid-remote-engineering-culture",
    title: "Building High-Velocity Hybrid Engineering Teams Without Friction",
    excerpt: "How AJAX Global manages 24/7 development cycles across time zones using async standups, rigorous CI/CD pipelines, and autonomous documentation.",
    category: "Growth Systems",
    author: { name: "Sarah Jenkins", role: "VP of Operations", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" },
    date: "Sep 28, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  },
  {
    slug: "fintech-compliance-automation-cloud",
    title: "Automating Cloud Compliance & Security Audits for FinTech Startups",
    excerpt: "A blueprint for implementing automated SOC2 and GDPR guardrails directly into your AWS and MongoDB infrastructure pipelines.",
    category: "Case Studies",
    author: { name: "Michael Chang", role: "Security Lead", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces" },
    date: "Sep 19, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
  },
];

export default function BlogIndexPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-primary/20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #f8f7ff 0%, #ffffff 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.08) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <motion.div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(109,40,217,0.12) 0%,transparent 65%)", filter: "blur(80px)" }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(14,165,233,0.12) 0%,transparent 65%)", filter: "blur(70px)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-white shadow-sm mb-6 cursor-default"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-sm font-semibold text-slate-600">AJAX Global Insights & Engineering Blog</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08 }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-light text-slate-900 leading-[1.08] tracking-tight mb-6"
          >
            Engineering scalable systems & <span className="font-extrabold text-primary">AI growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl mx-auto text-lg text-slate-500 font-light leading-relaxed mb-10"
          >
            Expert perspectives on remote engineering teams, enterprise automation, and high-performance web architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative max-w-lg mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles by topic, title, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-13 pl-12 pr-4 rounded-full border border-slate-200 bg-white shadow-sm text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {selectedCategory === "All" && searchQuery === "" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <a href={`/blog/${FEATURED_POST.slug}`} className="group block relative rounded-3xl overflow-hidden border border-slate-100 bg-slate-900 shadow-xl">
              <div className="grid lg:grid-cols-2 items-center">
                <div className="relative h-72 lg:h-full min-h-[320px] overflow-hidden">
                  <img
                    src={FEATURED_POST.image}
                    alt={FEATURED_POST.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900/80 to-transparent" />
                  <span className="absolute top-6 left-6 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold tracking-wider uppercase shadow">
                    Featured Insight
                  </span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs text-primary font-semibold uppercase tracking-wider mb-3">
                    <span>{FEATURED_POST.category}</span>
                    <span>•</span>
                    <span>{FEATURED_POST.readTime}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-extrabold text-white group-hover:text-primary-light transition-colors mb-4 leading-snug">
                    {FEATURED_POST.title}
                  </h2>
                  <p className="text-slate-400 font-light text-sm lg:text-base mb-6 leading-relaxed">
                    {FEATURED_POST.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <img src={FEATURED_POST.author.avatar} alt={FEATURED_POST.author.name} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <p className="text-sm font-semibold text-white">{FEATURED_POST.author.name}</p>
                        <p className="text-xs text-slate-400">{FEATURED_POST.author.role}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-white group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight className="w-4 h-4 text-primary" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-[11px] font-bold tracking-wide uppercase">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                </div>

                <a href={`/blog/${post.slug}`}>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-primary transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>
                </a>

                <p className="text-sm text-slate-500 font-light mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-xs font-semibold text-slate-700">{post.author.name}</span>
                  </div>
                  <a href={`/blog/${post.slug}`} className="p-2 rounded-full bg-slate-50 group-hover:bg-primary group-hover:text-white transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg font-light">No articles found matching your search.</p>
          </div>
        )}
      </section>

      {/* Newsletter / CTA Section */}
      <section className="relative overflow-hidden py-24 mx-6 lg:mx-12 mb-16 rounded-4xl bg-[#0f0b1e]">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(109,40,217,0.18) 0%,transparent 65%)", filter: "blur(90px)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[.22em] text-primary/80 block mb-3">Stay Ahead of the Curve</span>
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">
            Get engineering & AI growth insights delivered <span className="font-extrabold text-primary">weekly.</span>
          </h2>
          <p className="text-white/40 font-light text-base mb-8 max-w-lg mx-auto">
            No spam. Just high-impact architectural blueprints, case studies, and remote team scaling strategies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your work email"
              className="w-full h-12 px-5 rounded-full bg-white/10 border border-white/15 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-primary"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 h-12 rounded-full font-bold text-white text-sm bg-primary shadow-lg shadow-primary/40 shrink-0"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}