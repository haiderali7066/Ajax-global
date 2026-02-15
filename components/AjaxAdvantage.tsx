"use client";

import React from "react";
import { Layers, Heart, Globe, Zap, ArrowRight } from "lucide-react";

const advantages = [
  {
    title: "Flexible yet standardized",
    description:
      "Build custom workflows with a no-code interface while maintaining org-wide consistency.",
    icon: Layers,
    frontBg: "bg-pink-500",
    backBg: "bg-pink-600",
    textColor: "text-white",
  },
  {
    title: "Products teams love",
    description:
      "Help your entire organization adopt tools they actually enjoy using every day.",
    icon: Heart,
    frontBg: "bg-indigo-500",
    backBg: "bg-indigo-600",
    textColor: "text-white",
  },
  {
    title: "Global Scale",
    description:
      "Deploy elite remote workforces across timezones without losing operational control.",
    icon: Globe,
    frontBg: "bg-emerald-500",
    backBg: "bg-emerald-600",
    textColor: "text-white",
  },
  {
    title: "Precision Execution",
    description:
      "Combining elite training with systematic reliability that businesses can depend on.",
    icon: Zap,
    frontBg: "bg-violet-500",
    backBg: "bg-violet-600",
    textColor: "text-white",
  },
];

export default function AjaxAdvantage() {
  return (
    <section className="py-20 sm:py-32 bg-slate-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 tracking-tight mb-6">
            Discover the <span className="font-medium">AJAX Global</span>{" "}
            Advantage
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-red-500" />
            <p className="text-xl sm:text-2xl font-bold text-red-500 uppercase tracking-wider">
              Empowering your business to thrive globally.
            </p>
          </div>
        </div>

        {/* 3D Flip Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, index) => (
            <div key={index} className="group h-[350px] [perspective:1000px]">
              {/* Flip Inner Container */}
              <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* FRONT SIDE */}
                <div
                  className={`absolute inset-0 ${item.frontBg} rounded-[2rem] p-8 flex flex-col justify-between [backface-visibility:hidden] shadow-xl shadow-slate-200`}
                >
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-2 text-white/80 text-sm font-semibold">
                      HOVER TO LEARN <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* BACK SIDE */}
                <div
                  className={`absolute inset-0 ${item.backBg} rounded-[2rem] p-8 flex flex-col justify-center items-start [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-2xl`}
                >
                  <item.icon className="w-10 h-10 text-white/30 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {item.description}
                  </p>
                  <button className="mt-8 px-5 py-2 bg-white text-slate-900 rounded-full text-sm font-bold hover:bg-slate-100 transition-colors">
                    Explore Solution
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      </div>
    </section>
  );
}
