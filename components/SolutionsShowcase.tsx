"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Users } from "lucide-react";

/* ─── Types ──────────────────────────────────────────────────────────── */
interface CollageImage {
  src: string;
  alt: string;
  className: string;
}

interface SectionRowProps {
  tag: string;
  tagIcon: React.ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  href: string;
  cta: string;
  images: CollageImage[];
  reverse?: boolean;
  accentColor: string; // tailwind bg class for tag pill
  btnColor: string; // tailwind bg + hover classes for button
  extras?: React.ReactNode; // e.g. the icon-cluster for Cyber
}

/* ─── Collage layout ─────────────────────────────────────────────────── */
function ImageCollage({
  images,
  reverse,
}: {
  images: CollageImage[];
  reverse?: boolean;
}) {
  return (
    <div className="relative w-full h-[420px] sm:h-[460px]">
      {images.map((img, i) => (
        <div
          key={i}
          className={`
            absolute overflow-hidden rounded-2xl shadow-2xl
            transition-all duration-500 ease-out
            hover:z-50 hover:scale-105 hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]
            ${img.className}
          `}
          style={{ transitionDelay: `${i * 40}ms` }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          {/* subtle glass overlay on hover */}
          <div className="absolute inset-0 bg-white/0 hover:bg-white/8 transition-colors duration-300" />
        </div>
      ))}
    </div>
  );
}

/* ─── Single alternating row ─────────────────────────────────────────── */
function SectionRow({
  tag,
  tagIcon,
  title,
  subtitle,
  description,
  href,
  cta,
  images,
  reverse,
  accentColor,
  btnColor,
  extras,
}: SectionRowProps) {
  return (
    <div
      className={`
        grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* ── Text side ── */}
      <div className="space-y-6">
        {/* Tag */}
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full text-white ${accentColor}`}
        >
          {tagIcon}
          {tag}
        </span>

        {/* Heading */}
        <div className="space-y-1">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-tight text-gray-900 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl sm:text-2xl font-semibold text-gray-500">
              {subtitle}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-500 leading-relaxed text-[15px] max-w-md">
          {description}
        </p>

        {/* Optional extras (icon cluster etc.) */}
        {extras}

        {/* CTA */}
        <div>
          <Link
            href={href}
            className={`
              inline-flex items-center gap-2 px-7 py-3.5 rounded-full
              text-white font-bold text-sm tracking-wide
              transition-all duration-300 hover:gap-4 hover:shadow-xl hover:scale-105
              ${btnColor}
            `}
          >
            {cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ── Image collage side ── */}
      <ImageCollage images={images} reverse={reverse} />
    </div>
  );
}

/* ─── Icon cluster for Cyber Security row ────────────────────────────── */
function IconCluster() {
  const icons = [
    { emoji: "🤖", bg: "bg-blue-100", label: "AI" },
    { emoji: "🦊", bg: "bg-orange-100", label: "Security" },
    { emoji: "😊", bg: "bg-yellow-100", label: "Support" },
  ];
  return (
    <div className="flex items-center gap-3">
      {icons.map((ic, i) => (
        <div key={i} className="flex items-center gap-3">
          <div
            className={`
              w-12 h-12 rounded-full flex items-center justify-center text-xl
              shadow-md border-2 border-white ${ic.bg}
              transition-transform duration-300 hover:scale-110 hover:-translate-y-1 cursor-default
            `}
            title={ic.label}
          >
            {ic.emoji}
          </div>
          {i < icons.length - 1 && (
            <span className="text-gray-300 font-light text-lg select-none">
              +
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Main export ─────────────────────────────────────────────────────── */
export default function ServicesShowcase() {
  /* 
    Replace these placeholder src strings with your actual image paths.
    Each string should be a path inside /public, e.g. '/images/hos-1.jpg'
    or a full URL.
  */
  const hosImages: CollageImage[] = [
    {
      src: "/images/hos-laptop.jpg", // laptop on desk
      alt: "Remote workforce on laptop",
      // top-right card — largest
      className: "w-[55%] h-[52%] top-0 right-0 z-10",
    },
    {
      src: "/images/hos-keyboard.jpg", // "outsourcing" keyboard key
      alt: "Outsourcing keyboard",
      // bottom-right card
      className: "w-[50%] h-[46%] bottom-0 right-[6%] z-20",
    },
    {
      src: "/images/hos-blocks.jpg", // wooden skill blocks
      alt: "Training and skills",
      // center-left card — main focal
      className: "w-[62%] h-[62%] top-[16%] left-0 z-30",
    },
  ];

  const cyberImages: CollageImage[] = [
    {
      src: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg", // green code on screen
      alt: "Code / programming",
      className: "w-[52%] h-[48%] top-0 left-0 z-10",
    },
    {
      src: "/images/cyber-fingerprint.jpg", // blue fingerprint
      alt: "Digital fingerprint security",
      className: "w-[46%] h-[42%] top-0 right-0 z-20",
    },
    {
      src: "/images/cyber-globe.jpg", // glowing globe
      alt: "Global cyber network",
      className: "w-[58%] h-[54%] top-[22%] left-[10%] z-30",
    },
    {
      src: "/images/cyber-shield.jpg", // cloud shield
      alt: "Cyber shield protection",
      className: "w-[44%] h-[40%] bottom-0 left-0 z-20",
    },
    {
      src: "/images/cyber-text.jpg", // "CYBER SECURITY" neon
      alt: "Cyber Security neon text",
      className: "w-[44%] h-[38%] bottom-[4%] right-0 z-10",
    },
  ];

  return (
    <>
      {/* Scoped keyframes — no external CSS file needed */}
      <style jsx global>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide-up {
          animation: fadeSlideUp 0.65s ease-out both;
        }
      `}</style>

      <section className="bg-white py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32 lg:space-y-40">
          {/* ── Row 1 — HOS ─────────────────────────────────────── */}
          <SectionRow
            tag="Human Outsourcing"
            tagIcon={<Users className="w-3.5 h-3.5" />}
            title="Human Outsourcing Solutions (HOS)"
            description="AJAX Global is the gold standard in remote workforce management — combining precision recruitment, elite training, and operational reliability that businesses can depend on."
            href="/hos"
            cta="Learn More"
            images={hosImages}
            reverse={false}
            accentColor="bg-gray-900"
            btnColor="bg-gray-900 hover:bg-gray-700"
          />

          {/* ── Row 2 — Cyber Security ───────────────────────────── */}
          <SectionRow
            tag="IT & Security"
            tagIcon={<Shield className="w-3.5 h-3.5" />}
            title="Cyber Security —"
            subtitle="Protecting Your Digital World"
            description="A robust cybersecurity posture is no longer optional. AJAX Global's MSP division combines AI-driven threat monitoring, endpoint protection, and compliance frameworks to keep your infrastructure locked down 24/7."
            href="/services#cybersecurity"
            cta="Read More"
            images={cyberImages}
            reverse={true}
            accentColor="bg-rose-500"
            btnColor="bg-gray-900 hover:bg-gray-700"
            extras={<IconCluster />}
          />
        </div>
      </section>
    </>
  );
}
