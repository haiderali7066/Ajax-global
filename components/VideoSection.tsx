"use client";
import React from "react";

export default function VideoLoopSection() {
  return (
    <section className="relative w-full px-4 py-8 md:px-8">
      {/* Container with controlled height (80% of screen) */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden rounded-3xl shadow-2xl bg-slate-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/video-placeholder.jpg" // Highly recommended for UX
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/aivideo.mp4" type="video/mp4" />
          {/* Optional: Add a WebM source for better compression */}
          <source src="/your-video.webm" type="video/webm" />
        </video>

        {/* Optional: Subtle gradient overlay to soften the edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
      </div>
    </section>
  );
}
