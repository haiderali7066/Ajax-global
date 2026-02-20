"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Layers, Heart, Globe, Zap } from "lucide-react";
import { vFadeLeft } from "./shared";

export default function AjaxAdvantage() {
  const secRef = useRef<HTMLElement>(null);
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    let ctx: any;
    (async () => {
      try {
        const g = await import("gsap");
        const { ScrollTrigger: ST } = await import("gsap/ScrollTrigger");
        g.gsap.registerPlugin(ST);
        ctx = g.gsap.context(() => {
          g.gsap.fromTo(".adv-card", { opacity: 0, y: 70, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: "power3.out", stagger: 0.14, scrollTrigger: { trigger: secRef.current, start: "top 65%" } });
        }, secRef);
      } catch (_) {}
    })();
    return () => ctx?.revert();
  }, []);

  const cards = [
    { title: "Flexible yet standardized", desc: "Build custom workflows with a no-code interface while maintaining org-wide consistency.", Icon: Layers, fg: "from-pink-500 to-rose-600", bg: "bg-pink-600" },
    { title: "Products teams love", desc: "Help your entire organisation adopt tools they actually enjoy using every day.", Icon: Heart, fg: "from-indigo-500 to-indigo-700", bg: "bg-indigo-600" },
    { title: "Global Scale", desc: "Deploy elite remote workforces across timezones without losing operational control.", Icon: Globe, fg: "from-emerald-500 to-emerald-700", bg: "bg-emerald-600" },
    { title: "Precision Execution", desc: "Combining elite training with systematic reliability that businesses depend on.", Icon: Zap, fg: "from-violet-500 to-violet-700", bg: "bg-violet-600" },
  ];

  return (
    <section ref={secRef} className="py-20 sm:py-32 bg-slate-50 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div variants={vFadeLeft} initial="hidden" animate={iv ? "show" : "hidden"} className="max-w-3xl mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 tracking-tight mb-6">
            Discover the <span className="font-bold">AJAX Global</span> Advantage
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-red-500" />
            <p className="text-xl font-bold text-red-500 uppercase tracking-wider">Empowering your business to thrive globally.</p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="adv-card group h-[350px] [perspective:1000px]" style={{ opacity: 0 }}>
              <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className={`absolute inset-0 bg-gradient-to-br ${c.fg} rounded-[2rem] p-8 flex flex-col justify-between [backface-visibility:hidden] shadow-xl`}>
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center"><c.Icon className="w-8 h-8 text-white" /></div>
                  <div>
                    <h3 className="text-2xl font-bold text-white leading-tight">{c.title}</h3>
                    <div className="mt-4 flex items-center gap-2 text-white/70 text-xs font-bold">HOVER TO LEARN <ArrowRight className="w-3 h-3" /></div>
                  </div>
                </div>
                <div className={`absolute inset-0 ${c.bg} rounded-[2rem] p-8 flex flex-col justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-2xl`}>
                  <c.Icon className="w-10 h-10 text-white/30 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">{c.title}</h3>
                  <p className="text-white/90 text-lg leading-relaxed">{c.desc}</p>
                  <button className="mt-8 px-5 py-2 bg-white text-slate-900 rounded-full text-sm font-bold hover:bg-slate-100 transition-colors w-fit">Explore Solution</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
