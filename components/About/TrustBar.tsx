"use client";

const ITEMS = [
  "500+ Enterprise Clients",
  "15+ Countries",
  "2,000+ Professionals",
  "24/7 Operations",
  "$1B+ Managed Ops",
  "NDAs on Every Engagement",
  "7-Day Go-Live",
  "99.2% Uptime SLA",
];

export default function TrustBar() {
  return (
    <div className="border-y border-gray-100 py-3 overflow-hidden" style={{ background: "#fafafa" }}>
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{ animation: "marqueeAbout 30s linear infinite" }}
      >
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="text-xs font-semibold text-gray-400 flex items-center gap-2.5 shrink-0">
            <span className="w-1 h-1 rounded-full bg-primary/50" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
