"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CheckCircle, Send, Check, X } from "lucide-react";

/* ─────────────────────────────────────────────
   CONFIG
───────────────────────────────────────────── */
const BASIN_ENDPOINT = "https://usebasin.com/f/302a1cc97eca";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/* ─────────────────────────────────────────────
   STATIC DATA
───────────────────────────────────────────── */
const SERVICES   = ["Strategy Consulting","Digital Transformation","Product Design","Data & Analytics","Marketing Automation","AI Integration","Brand Identity","Growth Hacking"];
const TEAM_SIZES = ["1–10","11–50","51–200","201–500","500+"];
const TIMELINES  = ["Immediately","Within 1 month","1–3 months","3–6 months","6+ months"];

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface FormData {
  name:       string;
  company:    string;
  email:      string;
  phone:      string;
  country:    string;
  services:   string[];
  industry:   string;
  teamSize:   string;
  challenge:  string;
  timeline:   string;
  smsConsent: boolean;
}

type TextField = "name" | "company" | "email" | "phone" | "country" | "industry" | "teamSize" | "challenge" | "timeline";

const EMPTY: FormData = {
  name:"", company:"", email:"", phone:"", country:"",
  services:[], industry:"", teamSize:"", challenge:"", timeline:"",
  smsConsent: false,
};

/* ─────────────────────────────────────────────
   VALIDATORS  (true = valid)
───────────────────────────────────────────── */
const VALIDATORS: Record<TextField, (v: string) => boolean> = {
  name:      v => v.trim().length >= 2,
  company:   v => v.trim().length >= 2,
  email:     v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
  phone:     v => v.trim() === "" || /^\+?[\d\s\-().]{7,15}$/.test(v.trim()),
  country:   v => v.trim() === "" || v.trim().length >= 2,
  industry:  v => v.trim() === "" || v.trim().length >= 2,
  teamSize:  v => v !== "",
  challenge: v => v.trim().length >= 10,
  timeline:  v => v !== "",
};

/* ─────────────────────────────────────────────
   BASE CLASSES
───────────────────────────────────────────── */
const inputBase =
  "w-full px-4 py-3 pr-10 rounded-xl border bg-gray-50 text-sm text-gray-900 " +
  "placeholder:text-gray-400 outline-none transition-all duration-200 focus:bg-white";

function borderCls(name: TextField, value: string, touched: boolean) {
  if (!touched) return "border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-100";
  return VALIDATORS[name](value)
    ? "border-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
    : "border-red-400   focus:border-red-500   focus:ring-2 focus:ring-red-100";
}

/* ─────────────────────────────────────────────
   FIELD ICON — animated ✓ / ✗
───────────────────────────────────────────── */
function FieldIcon({
  name, value, touched,
  alwaysShow = false,
  position   = "center",
}: {
  name:        TextField;
  value:       string;
  touched:     boolean;
  alwaysShow?: boolean;
  position?:   "center" | "top";
}) {
  if (!touched) return null;
  if (!alwaysShow && value.trim() === "") return null;
  const ok       = VALIDATORS[name](value);
  const posClass = position === "top" ? "top-3" : "top-1/2 -translate-y-1/2";

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={ok ? "ok" : "err"}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.4 }}
        transition={{ duration: 0.15, ease: "backOut" }}
        className={`absolute right-3 ${posClass} pointer-events-none z-10
          flex items-center justify-center w-5 h-5 rounded-full shrink-0 ${
          ok ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-500"
        }`}
      >
        {ok
          ? <Check className="w-3 h-3" strokeWidth={3} />
          : <X     className="w-3 h-3" strokeWidth={3} />
        }
      </motion.span>
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────
   CUSTOM CHECKBOX
───────────────────────────────────────────── */
function AnimatedCheckbox({
  id, name, checked, onChange,
}: {
  id:       string;
  name:     string;
  checked:  boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label htmlFor={id} className="relative w-5 h-5 mt-0.5 shrink-0 cursor-pointer block">
      <input
        type="checkbox" id={id} name={name}
        checked={checked} onChange={onChange}
        className="sr-only peer"
      />
      <motion.span
        animate={{
          background:   checked ? "var(--primary, #7c3aed)" : "#fff",
          borderColor:  checked ? "var(--primary, #7c3aed)" : "#d1d5db",
          boxShadow:    checked ? "0 0 0 3px rgba(124,58,237,0.15)" : "none",
        }}
        transition={{ duration: 0.18 }}
        className="absolute inset-0 rounded-[5px] border-2 flex items-center justify-center"
      >
        <AnimatePresence>
          {checked && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15, ease: "backOut" }}
              className="flex"
            >
              <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>
    </label>
  );
}

/* ═══════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════ */
export default function ContactForm() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [formData,  setFormData]  = useState<FormData>(EMPTY);
  const [touched,   setTouched]   = useState<Partial<Record<TextField, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState<string | null>(null);

  const touch = (name: TextField) =>
    setTouched(p => ({ ...p, [name]: true }));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, type } = e.target;
    const val = type === "checkbox"
      ? (e.target as HTMLInputElement).checked
      : e.target.value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const toggleService = (s: string) =>
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter(x => x !== s)
        : [...prev.services, s],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields touched to surface errors
    const allFields: TextField[] = ["name","company","email","phone","country","industry","teamSize","challenge","timeline"];
    setTouched(Object.fromEntries(allFields.map(f => [f, true])));

    // Check required fields
    const required: TextField[] = ["name","company","email","challenge"];
    if (required.some(f => !VALIDATORS[f](formData[f] as string))) {
      setError("Please fill in all required fields correctly.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = new FormData();
      data.append("name",       formData.name);
      data.append("company",    formData.company);
      data.append("email",      formData.email);
      data.append("phone",      formData.phone);
      data.append("country",    formData.country);
      data.append("services",   formData.services.join(", "));
      data.append("industry",   formData.industry);
      data.append("teamSize",   formData.teamSize);
      data.append("timeline",   formData.timeline);
      data.append("challenge",  formData.challenge);
      data.append("smsConsent", String(formData.smsConsent));

      const res = await fetch(BASIN_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error((json as { error?: string }).error ?? "Submission failed. Please try again.");
      }

      setSubmitted(true);
      setFormData(EMPTY);
      setTouched({});
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="py-20 sm:py-24 lg:py-28"
      style={{ background: "#f8f7ff" }}
      ref={ref}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
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

        {/* ── Card ── */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
          className="bg-white rounded-3xl border border-violet-100 p-8 sm:p-10"
          style={{ boxShadow: "0 20px 60px rgba(124,58,237,0.08)" }}
        >
          <AnimatePresence mode="wait">

            {/* ────── Success ────── */}
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0 }}
                className="text-center py-16"
              >
                <motion.div
                  initial={{ scale:0 }} animate={{ scale:1 }}
                  transition={{ type:"spring", stiffness:200, damping:12 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-emerald-50"
                >
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </motion.div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Message Received!</h3>
                <p className="text-gray-500 font-light">A strategy consultant will contact you within 24 hours.</p>
              </motion.div>

            ) : (

              /* ────── Form ────── */
              <motion.form key="form" onSubmit={handleSubmit} className="space-y-8">

                {/* ── Basic Info ── */}
                <fieldset>
                  <p className="text-xs font-extrabold uppercase tracking-[.22em] text-primary mb-4">
                    Basic Information
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">

                    {/* Name */}
                    <div className="relative">
                      <input
                        type="text" name="name" value={formData.name} required
                        onChange={handleChange} onBlur={() => touch("name")}
                        placeholder="Full Name *"
                        className={`${inputBase} ${borderCls("name", formData.name, !!touched.name)}`}
                      />
                      <FieldIcon name="name" value={formData.name} touched={!!touched.name} />
                    </div>

                    {/* Company */}
                    <div className="relative">
                      <input
                        type="text" name="company" value={formData.company} required
                        onChange={handleChange} onBlur={() => touch("company")}
                        placeholder="Company Name *"
                        className={`${inputBase} ${borderCls("company", formData.company, !!touched.company)}`}
                      />
                      <FieldIcon name="company" value={formData.company} touched={!!touched.company} />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <input
                        type="email" name="email" value={formData.email} required
                        onChange={handleChange} onBlur={() => touch("email")}
                        placeholder="Email Address *"
                        className={`${inputBase} ${borderCls("email", formData.email, !!touched.email)}`}
                      />
                      <FieldIcon name="email" value={formData.email} touched={!!touched.email} />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <input
                        type="tel" name="phone" value={formData.phone}
                        onChange={handleChange} onBlur={() => touch("phone")}
                        placeholder="Phone Number"
                        className={`${inputBase} ${borderCls("phone", formData.phone, !!touched.phone)}`}
                      />
                      <FieldIcon name="phone" value={formData.phone} touched={!!touched.phone} />
                    </div>

                    {/* Country */}
                    <div className="relative sm:col-span-2">
                      <input
                        type="text" name="country" value={formData.country}
                        onChange={handleChange} onBlur={() => touch("country")}
                        placeholder="Country"
                        className={`${inputBase} ${borderCls("country", formData.country, !!touched.country)}`}
                      />
                      <FieldIcon name="country" value={formData.country} touched={!!touched.country} />
                    </div>
                  </div>
                </fieldset>

                {/* ── Services ── */}
                <fieldset>
                  <p className="text-xs font-extrabold uppercase tracking-[.22em] text-primary mb-4">
                    Services Interested In
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map(s => {
                      const active = formData.services.includes(s);
                      return (
                        <motion.button
                          key={s} type="button"
                          onClick={() => toggleService(s)}
                          whileHover={{ scale:1.04 }} whileTap={{ scale:0.96 }}
                          className="px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 flex items-center gap-1.5"
                          style={
                            active
                              ? { background:"var(--primary)", color:"white", borderColor:"var(--primary)", boxShadow:"0 4px 12px rgba(124,58,237,0.25)" }
                              : { background:"white", color:"#6b7280", borderColor:"#e5e7eb" }
                          }
                        >
                          <AnimatePresence mode="wait">
                            {active
                              ? <motion.span key="check" initial={{ scale:0, opacity:0 }} animate={{ scale:1, opacity:1 }} exit={{ scale:0, opacity:0 }} transition={{ duration:0.13, ease:"backOut" }} className="flex shrink-0">
                                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                                </motion.span>
                              : <motion.span key="empty" initial={{ scale:0, opacity:0 }} animate={{ scale:1, opacity:1 }} exit={{ scale:0, opacity:0 }} transition={{ duration:0.13 }} className="flex shrink-0">
                                  <span className="w-3.5 h-3.5 rounded-full border border-gray-300 inline-flex" />
                                </motion.span>
                            }
                          </AnimatePresence>
                          {s}
                        </motion.button>
                      );
                    })}
                  </div>
                </fieldset>

                {/* ── Business Details ── */}
                <fieldset>
                  <p className="text-xs font-extrabold uppercase tracking-[.22em] text-primary mb-4">
                    Business Details
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">

                    {/* Industry */}
                    <div className="relative">
                      <input
                        type="text" name="industry" value={formData.industry}
                        onChange={handleChange} onBlur={() => touch("industry")}
                        placeholder="Your Industry"
                        className={`${inputBase} ${borderCls("industry", formData.industry, !!touched.industry)}`}
                      />
                      <FieldIcon name="industry" value={formData.industry} touched={!!touched.industry} />
                    </div>

                    {/* Team Size */}
                    <div className="relative">
                      <select
                        name="teamSize" value={formData.teamSize}
                        onChange={handleChange} onBlur={() => touch("teamSize")}
                        className={`${inputBase} appearance-none ${borderCls("teamSize", formData.teamSize, !!touched.teamSize)}`}
                      >
                        <option value="">Current Team Size</option>
                        {TEAM_SIZES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <FieldIcon name="teamSize" value={formData.teamSize} touched={!!touched.teamSize} alwaysShow />
                    </div>

                    {/* Timeline */}
                    <div className="relative sm:col-span-2">
                      <select
                        name="timeline" value={formData.timeline}
                        onChange={handleChange} onBlur={() => touch("timeline")}
                        className={`${inputBase} appearance-none ${borderCls("timeline", formData.timeline, !!touched.timeline)}`}
                      >
                        <option value="">When do you want to start?</option>
                        {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <FieldIcon name="timeline" value={formData.timeline} touched={!!touched.timeline} alwaysShow />
                    </div>
                  </div>

                  {/* Challenge textarea */}
                  <div className="relative mt-4">
                    <textarea
                      name="challenge" value={formData.challenge} required rows={4}
                      onChange={handleChange} onBlur={() => touch("challenge")}
                      placeholder="What challenge are you facing? *"
                      className={`${inputBase} resize-none ${borderCls("challenge", formData.challenge, !!touched.challenge)}`}
                    />
                    <FieldIcon
                      name="challenge" value={formData.challenge}
                      touched={!!touched.challenge} position="top"
                    />
                  </div>
                </fieldset>

                {/* ── SMS Consent — custom animated checkbox ── */}
                <fieldset className="flex items-start gap-3">
                  <AnimatedCheckbox
                    id="smsConsent"
                    name="smsConsent"
                    checked={formData.smsConsent}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="smsConsent"
                    className="text-xs text-gray-500 leading-relaxed cursor-pointer select-none"
                  >
                    I consent to receive non-marketing SMS messages from AJAX Global LLC regarding my inquiry, consultation scheduling, appointment reminders, service updates, and account support at the phone number provided. Consent is not a condition of purchasing any goods or services. Message frequency may vary. Message & data rates may apply. Reply HELP for assistance or STOP to opt out.{" "}
                    <a href="/privacy-policy" className="underline hover:text-gray-800 transition-colors">Privacy Policy</a>
                    {" "}and{" "}
                    <a href="/terms-of-service" className="underline hover:text-gray-800 transition-colors">Terms of Service</a>.
                  </label>
                </fieldset>

                {/* Error */}
                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity:0, y:-6 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
                      className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <motion.button
                  type="submit" disabled={loading}
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
                        animate={{ rotate:360 }}
                        transition={{ duration:0.8, repeat:Infinity, ease:"linear" }}
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