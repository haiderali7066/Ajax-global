"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ShieldCheck, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function SolutionsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  // 3D Tilt effect for the image card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height;
    const y = (e.clientX - rect.left) / rect.width;
    const multiplier = 10; // Adjust tilt intensity
    setRotate({ x: (x - 0.5) * multiplier, y: (y - 0.5) * -multiplier });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Background Interactive Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(15,23,42,0.03)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Left Content - Enhanced Typography */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-600 font-bold tracking-widest text-xs uppercase mb-4">
                <span className="w-8 h-px bg-blue-600" />
                Next-Gen Management
              </div>
              <h2 className="text-5xl sm:text-6xl font-light text-foreground tracking-tight leading-[1.1]">
                Human Outsourcing
                <span className="block font-medium text-slate-400">
                  Solutions (HOS)
                </span>
              </h2>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              AJAX Global is the gold standard in remote workforce management —
              combining
              <span className="text-foreground font-medium">
                {" "}
                precision recruitment
              </span>
              , elite training, and operational reliability.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 py-2">
              {[
                { icon: ShieldCheck, text: "Vetted Talent" },
                { icon: Zap, text: "Instant Scale" },
                { icon: Users, text: "Elite Training" },
              ].map((pill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200 text-slate-700 text-sm font-medium"
                >
                  <pill.icon className="w-4 h-4 text-blue-600" />
                  {pill.text}
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                className="group relative bg-slate-950 hover:bg-slate-900 text-white rounded-full px-8 py-7 text-base font-semibold transition-all duration-300 overflow-hidden"
                asChild
              >
                <Link href="/hos">
                  <span className="relative z-10 flex items-center gap-2">
                    LEARN MORE
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Interactive 3D Image Card */}
          <div
            className="perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="relative h-[450px] bg-white rounded-[2.5rem] shadow-2xl transition-all duration-200 ease-out flex items-center justify-center group overflow-hidden border border-slate-100"
              style={{
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating Element Illustration (Placeholder) */}
              <div
                className="relative z-10 flex flex-col items-center gap-6"
                style={{ transform: "translateZ(50px)" }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400 blur-2xl opacity-20 animate-pulse" />
                  <div className="relative w-24 h-24 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-3xl flex items-center justify-center text-4xl shadow-xl">
                    📦
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <h4 className="font-bold text-2xl text-slate-900">
                    Workforce OS
                  </h4>
                  <p className="text-slate-500">Managed Efficiency at Scale</p>
                </div>
              </div>

              {/* Scanning Line Effect */}
              <div className="absolute inset-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent top-0 animate-scan pointer-events-none" />

              {/* Floating Badge */}
              <div
                className="absolute bottom-8 right-8 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center gap-2"
                style={{ transform: "translateZ(30px)" }}
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                SYSTEM ACTIVE
              </div>
            </div>
          </div>
        </div>

        {/* Divider with Gradient Pulse */}
        <div className="relative h-px w-full bg-slate-200 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-shimmer" />
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-scan {
          animation: scan 4s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  );
}
