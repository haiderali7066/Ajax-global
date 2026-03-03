"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { fadeUp, inputBase, SERVICES, TEAM_SIZES, TIMELINES } from "./contact.variants";

interface FormData {
  name:      string;
  company:   string;
  email:     string;
  phone:     string;
  country:   string;
  services:  string[];
  industry:  string;
  teamSize:  string;
  challenge: string;
  timeline:  string;
}

const EMPTY: FormData = {
  name: "", company: "", email: "", phone: "", country: "",
  services: [], industry: "", teamSize: "", challenge: "", timeline: "",
};

export default function ContactForm() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [formData,  setFormData]  = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const toggleService = (s: string) =>
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter(x => x !== s)
        : [...prev.services, s],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Replace with your real API call
    await new Promise(r => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
    setFormData(EMPTY);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
<section
  id="contact-form"
  className="py-20 sm:py-24 lg:py-28"
  style={{ background: "#f8f7ff" }}
  ref={ref}
><div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[.22em] text-primary block mb-3">
            Let's Talk
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Request a <span className="font-extrabold text-primary">Consultation</span>
          </h2>
          <p className="text-gray-500 font-light text-lg leading-relaxed">
            Tell us about your business and we'll craft a solution around your exact needs.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="bg-white rounded-3xl border border-violet-100 p-8 sm:p-10"
          style={{ boxShadow: "0 20px 60px rgba(124,58,237,0.08)" }}
        >
          <AnimatePresence mode="wait">
            {/* ── Success state ── */}
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-emerald-50"
                >
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </motion.div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Message Received!</h3>
                <p className="text-gray-500 font-light">
                  A strategy consultant will contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              /* ── Form ── */
              <motion.form key="form" onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Info */}
                <fieldset>
                  <p className="text-xs font-extrabold uppercase tracking-[.22em] text-primary mb-4">
                    Basic Information
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text"  name="name"    value={formData.name}    onChange={handleChange} required placeholder="Full Name *"      className={inputBase} />
                    <input type="text"  name="company" value={formData.company} onChange={handleChange} required placeholder="Company Name *"   className={inputBase} />
                    <input type="email" name="email"   value={formData.email}   onChange={handleChange} required placeholder="Email Address *"  className={inputBase} />
                    <input type="tel"   name="phone"   value={formData.phone}   onChange={handleChange}         placeholder="Phone Number"       className={inputBase} />
                    <input type="text"  name="country" value={formData.country} onChange={handleChange}         placeholder="Country"            className={`${inputBase} sm:col-span-2`} />
                  </div>
                </fieldset>

                {/* Services */}
                <fieldset>
                  <p className="text-xs font-extrabold uppercase tracking-[.22em] text-primary mb-4">
                    Services Interested In
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map(s => (
                      <motion.button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200"
                        style={
                          formData.services.includes(s)
                            ? { background: "var(--primary)", color: "white", borderColor: "var(--primary)", boxShadow: "0 4px 12px rgba(124,58,237,0.25)" }
                            : { background: "white", color: "#6b7280", borderColor: "#e5e7eb" }
                        }
                      >
                        {s}
                      </motion.button>
                    ))}
                  </div>
                </fieldset>

                {/* Business Details */}
                <fieldset>
                  <p className="text-xs font-extrabold uppercase tracking-[.22em] text-primary mb-4">
                    Business Details
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text" name="industry" value={formData.industry} onChange={handleChange} placeholder="Your Industry" className={inputBase} />
                    <select name="teamSize" value={formData.teamSize} onChange={handleChange} className={inputBase}>
                      <option value="">Current Team Size</option>
                      {TEAM_SIZES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <select name="timeline" value={formData.timeline} onChange={handleChange} className={inputBase}>
                      <option value="">When do you want to start?</option>
                      {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <textarea
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    required
                    placeholder="What challenge are you facing? *"
                    rows={4}
                    className={`${inputBase} mt-4 resize-none`}
                  />
                </fieldset>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full py-4 rounded-xl font-extrabold text-white flex items-center justify-center gap-2 transition-all"
                  style={{
                    background: "var(--primary)",
                    boxShadow: "0 8px 28px rgba(124,58,237,0.30)",
                    opacity: loading ? 0.8 : 1,
                  }}
                >
                  {loading ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      />
                      Sending…
                    </>
                  ) : (
                    <>Request Consultation <Send className="w-4 h-4" /></>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
