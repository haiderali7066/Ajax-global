export default function TrustBar() {
  const items = [
    "Real-Time Operational Intelligence",
    "Predictive Analytics Engine",
    "KPI-Driven Workflows",
    "AI + Human Collaboration",
    "CRM & Tool Integration",
    "Enterprise SLA Guarantee",
    "24/7 Intelligent Monitoring",
    "Continuous Learning System",
  ];

  return (
    <div className="border-y border-gray-100 py-3 overflow-hidden bg-primary/80" >
      <div className="flex gap-10 whitespace-nowrap" style={{ animation: "idMarquee 32s linear infinite" }}>
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-xs font-semibold text-white flex items-center gap-2.5 shrink-0">
            <span className="w-1 h-1 rounded-full bg-violet-300" />
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes idMarquee{from{transform:translateX(0)}to{transform:translateX(-33.33%)}}`}</style>
    </div>
  );
}
