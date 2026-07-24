"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BottomConsentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check if the user has already accepted during a previous visit
    const hasAccepted: string | null = localStorage.getItem("ajax_consent_accepted");
    
    // Slight delay for better UX on initial load
    if (!hasAccepted) {
      const timer: ReturnType<typeof setTimeout> = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (type: "all" | "essentials"): void => {
    localStorage.setItem("ajax_consent_accepted", type);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          // Increased padding (py-6 sm:py-8 lg:py-10) to add more height
          className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-[9999] py-6 sm:py-8 lg:py-10 px-4 sm:px-6 flex items-center shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-none"
        >
          {/* Text & Button Container */}
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-8 justify-between rounded-none">
            
            <p className="text-sm text-gray-600 leading-relaxed flex-1">
              We use strictly necessary cookies and similar technologies to operate this website and to provide you with a more personalized user experience. By clicking "Accept", you agree to our{" "}
              <a href="/legal#privacy-policy" className="underline font-semibold hover:text-gray-900 transition-colors">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/legal#terms-of-service" className="underline font-semibold hover:text-gray-900 transition-colors">
                Terms of Service
              </a>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4 shrink-0 rounded-none">
              
              {/* Secondary CTA - Only Essentials */}
              <motion.button
                onClick={() => handleAccept("essentials")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 font-extrabold text-gray-700 bg-gray-100 border border-gray-200 hover:bg-gray-200 uppercase tracking-widest transition-all rounded-none"
              >
                Only Essentials
              </motion.button>

              {/* Primary CTA - Accept */}
              <motion.button
                onClick={() => handleAccept("all")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-4 font-extrabold text-white uppercase tracking-widest transition-all rounded-none"
                style={{
                  background: "var(--primary, #7c3aed)",
                  boxShadow: "0 4px 14px rgba(124,58,237,0.40)",
                }}
              >
                Accept
              </motion.button>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BottomConsentPopup;