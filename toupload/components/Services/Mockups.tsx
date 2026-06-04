// ─── OKR MOCKUP ──────────────────────────────────────────────────────────────
export function OKRMockup() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-violet-100 bg-white">
      <div className="border-b border-gray-100 px-4 py-3 flex items-center gap-2" style={{ background: "#fafafa" }}>
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="text-xs text-gray-500 ml-2 font-semibold">2025 OKR Initiatives</span>
      </div>
      <div className="p-5 space-y-3">
        {[
          { label: "Projects off track", val: 32, color: "#f43f5e" },
          { label: "Projects on risk", val: 37, color: "#f59e0b" },
          { label: "Projects on track", val: 65, color: "#10b981" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="text-2xl font-black" style={{ color: item.color }}>{item.val}</div>
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1.5 font-medium">{item.label}</div>
              <div className="h-2 rounded-full bg-gray-100">
                <div className="h-full rounded-full" style={{ width: `${item.val}%`, background: item.color }} />
              </div>
            </div>
          </div>
        ))}
        <div className="space-y-1 pt-2 border-t border-gray-100">
          {["Software Performance Optimizer", "Customer Portal Revamp 2025", "Project Alpha Core", "Foundation Planning"].map((task, i) => (
            <div key={i} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 text-xs text-gray-600 font-medium">
              <div className="w-2 h-2 rounded-full shrink-0" style={{ background: ["#f43f5e", "#10b981", "#7c3aed", "#f59e0b"][i] }} />
              {task}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── TICKETS MOCKUP ───────────────────────────────────────────────────────────
export function TicketsMockup() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-emerald-100 bg-white">
      <div className="border-b border-gray-100 px-4 py-3 flex items-center justify-between" style={{ background: "#f0fdf4" }}>
        <span className="text-xs font-bold text-gray-700">IT Tickets</span>
        <span className="text-xs text-emerald-600 font-semibold">AI column action ✦</span>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <div className="text-xs font-bold text-emerald-600 mb-2 uppercase tracking-widest">New requests</div>
          {[
            { text: "I need to update my license", tag: "Request", color: "#7c3aed" },
            { text: "I had such a great experience...", tag: "Feedback", color: "#10b981" },
            { text: "Issue affecting team for month...", tag: "Bug", color: "#f43f5e" },
            { text: "It would be helpful to add the...", tag: "Request", color: "#7c3aed" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 px-1">
              <span className="text-xs text-gray-600 font-medium">{item.text}</span>
              <span className="text-xs px-2.5 py-1 rounded-full text-white font-semibold shrink-0 ml-2" style={{ background: item.color }}>{item.tag}</span>
            </div>
          ))}
        </div>
        <div>
          <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">Completed</div>
          {[
            { text: "Super slow loading time on my...", tag: "Bug", color: "#f43f5e" },
            { text: "Software was installed by Avn...", tag: "Feedback", color: "#10b981" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-2 px-1">
              <span className="text-xs text-gray-400 line-through">{item.text}</span>
              <span className="text-xs px-2.5 py-1 rounded-full text-white font-semibold opacity-50 ml-2" style={{ background: item.color }}>{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── DASHBOARD MOCKUP ─────────────────────────────────────────────────────────
export function DashboardMockup() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-pink-100 bg-white">
      <div className="border-b border-gray-100 px-4 py-3" style={{ background: "#fdf2f8" }}>
        <span className="text-xs font-bold text-gray-700">OKR Dashboard</span>
      </div>
      <div className="p-4 space-y-2.5">
        {[
          { label: "Increase annual recurring revenue by 20%", status: "At risk", color: "#f43f5e", progress: 45 },
          { label: "Grow the company workforce by 15%", status: "Complete", color: "#10b981", progress: 100 },
          { label: "Develop an ESG roadmap", status: "On track", color: "#7c3aed", progress: 70 },
        ].map((item, i) => (
          <div key={i} className="p-3 rounded-xl hover:bg-gray-50 transition-colors border border-gray-50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-700 font-semibold">{item.label}</span>
              <span className="text-xs px-2.5 py-1 rounded-full text-white font-bold shrink-0 ml-2" style={{ background: item.color }}>{item.status}</span>
            </div>
            <div className="h-2 rounded-full bg-gray-100">
              <div className="h-full rounded-full" style={{ width: `${item.progress}%`, background: item.color }} />
            </div>
          </div>
        ))}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="rounded-xl p-3" style={{ background: "#fdf2f8" }}>
            <div className="text-xs font-bold text-gray-600 mb-2">OKR Status</div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full border-4 border-[#f43f5e]"
                style={{ background: "conic-gradient(#f43f5e 0deg 120deg, #7c3aed 120deg 250deg, #10b981 250deg 360deg)" }} />
              <div className="space-y-0.5">
                {[{ c: "#f43f5e", l: "At risk" }, { c: "#7c3aed", l: "On track" }, { c: "#10b981", l: "Complete" }].map((x, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ background: x.c }} />
                    <span className="text-xs text-gray-500">{x.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-xl p-3" style={{ background: "#f5f3ff" }}>
            <div className="text-xs font-bold text-gray-600 mb-2">KRs Status</div>
            <div className="flex items-end gap-1 h-10">
              {[40, 30, 20, 35, 25, 30, 40].map((h, i) => (
                <div key={i} className="flex-1 rounded-t" style={{ height: `${h}px`, background: ["#f43f5e", "#f59e0b", "#10b981"][i % 3] }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
