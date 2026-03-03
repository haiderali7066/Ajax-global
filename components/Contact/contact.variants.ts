// ─── Shared animation variants, font, and data for Contact page components ────

export const ease = [0.22, 1, 0.36, 1] as const;

export const fontImport = `
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap');
  * { font-family: 'Figtree', system-ui, sans-serif; }
  @keyframes floatA        { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes floatB        { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
  @keyframes marqueeContact{ from{transform:translateX(0)} to{transform:translateX(-33.33%)} }
`;

// ─── Framer Motion variants ────────────────────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
  }),
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export const slideRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 },
  }),
};

// ─── Shared input class ───────────────────────────────────────────────────────
export const inputBase =
  "w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 font-medium transition-all duration-200 focus:outline-none focus:border-violet-600 focus:ring-0";
// ─── Static data ──────────────────────────────────────────────────────────────
export const SERVICES = [
  "Customer Service Support",
  "Custom Remote Teams",
  "Scheduling & Dispatching",
  "Sales & Lead Generation",
  "E-commerce Management",
  "SEO / Social Media",
  "IT & Cybersecurity",
  "AI Chat Agents",
  "AI Voice Agents",
  "AI Workflow Automation",
  "Not Sure – Need Consultation",
];

export const TEAM_SIZES = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "500+ employees",
];

export const TIMELINES = [
  "Immediately",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Just exploring",
];

export const FAQS = [
  {
    q: "How quickly can a team be deployed?",
    a: "Most clients are fully onboarded within 5–10 business days. For urgent needs, we can often fast-track deployment within 48–72 hours.",
  },
  {
    q: "Do you offer month-to-month contracts?",
    a: "Yes. We believe in earning your business every month. Flexible arrangements are available for teams of all sizes.",
  },
  {
    q: "Can I combine human outsourcing with AI?",
    a: "Absolutely — and we recommend it. Our hybrid model pairs skilled remote professionals with IntelliDesq™ AI agents for maximum efficiency.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We serve e-commerce, healthcare, real estate, SaaS, logistics, legal, and more. If your business has processes, we can optimize them.",
  },
  {
    q: "Is my data secure?",
    a: "Security is non-negotiable. We follow industry-standard protocols, sign NDAs, and operate under strict data governance policies.",
  },
  {
    q: "What happens after I submit the form?",
    a: "Our team reviews your request, and a strategy consultant reaches out within 24 hours to schedule a discovery call and build your custom proposal.",
  },
];

export const WHY_POINTS = [
  { text: "Transparent, competitive pricing",      accent: "#7c3aed" },
  { text: "No long-term lock-in contracts",        accent: "#059669" },
  { text: "Scalable solutions that grow with you", accent: "#0ea5e9" },
  { text: "Secure & confidential processes",       accent: "#be185d" },
  { text: "Industry-trained remote professionals", accent: "#d97706" },
  { text: "24/7 global support availability",      accent: "#1d4ed8" },
];

export const NEXT_STEPS = [
  { step: "01", title: "We Review Your Request",  desc: "Our team assesses your needs immediately upon submission."              },
  { step: "02", title: "Consultant Reaches Out",   desc: "A strategy consultant contacts you within 24 hours."                   },
  { step: "03", title: "Discovery Call",            desc: "We dive deep into your challenges and goals together."                 },
  { step: "04", title: "Custom Proposal",           desc: "You receive a tailored plan built specifically for your business."    },
];

export const STEP_COLORS = ["#7c3aed", "#0ea5e9", "#10b981", "#f59e0b"] as const;
