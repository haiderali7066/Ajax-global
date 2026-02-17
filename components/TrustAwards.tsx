"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const trustCards = [
  {
    title: "Gartner.",
    description:
      "The only Leader in 3 Work Management Gartner® Magic Quadrant™ reports.",
    link: "#",
    bgColor: "bg-[#9CB0FC]", // Soft Blue
    textColor: "text-gray-900",
  },
  {
    isG2: true, // Special handling for the middle card
    description: "Leader in the G2 Enterprise Grid® Report Spring 2025",
    bgColor: "bg-[#FFD700]", // Vibrant Yellow
    textColor: "text-gray-900",
  },
  {
    title: "FORRESTER",
    description:
      "Motorola achieved 346% ROI according to Forrester’s Total Economic Impact™ research.",
    link: "#",
    bgColor: "bg-[#36C77C]", // Fresh Green
    textColor: "text-gray-900",
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-12">
        A leader you can trust
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {trustCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className={`${card.bgColor} ${card.textColor} rounded-[40px] p-10 flex flex-col items-center text-center min-h-[450px] shadow-sm transition-all duration-300`}
          >
            {/* Header/Logo Section */}
            <div className="h-32 flex items-center justify-center w-full">
              {card.isG2 ? (
                /* The Badge Image in the Yellow Card */
                <div className="relative w-32 h-32">
                  <Image
                    src="/g.webp" // Replace with your actual path
                    alt="G2 Grid Leader Badge"
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <h3 className="text-3xl font-bold tracking-tighter uppercase italic">
                  {card.title}
                </h3>
              )}
            </div>

            {/* Description Section */}
            <div className="flex-grow flex items-center">
              <p className="text-xl md:text-2xl leading-snug font-medium px-4">
                {card.description}
              </p>
            </div>

            {/* Footer Section */}
            <div className="mt-8">
              {card.isG2 ? (
                /* G2 Circular Logo at bottom */
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    G<sub className="text-xs">2</sub>
                  </span>
                </div>
              ) : (
                <button className="text-lg font-bold hover:underline underline-offset-4 decoration-2">
                  Learn more
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
