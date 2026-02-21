import React from "react";

export default function WorkflowSection() {
  return (
    <section className="relative w-full py-24 bg-white font-sans overflow-hidden">
      {/* 1. Grid Background Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* 2. Header Content */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
            Agentic <span className="text-blue-500">workflows</span> that <br />{" "}
            run work end to end
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Visually build, automate, and manage complex cross-functional
            processes with AI.
          </p>
        </div>

        {/* 3. The Workflow Diagram */}
        <div className="flex flex-col items-center">
          {/* Trigger Node */}
          <div className="flex items-center gap-12 mb-8">
            <div className="hidden md:block text-right max-w-[180px]">
              <p className="font-bold text-sm">Trigger</p>
              <p className="text-xs text-slate-500">
                Set the event that kicks off the workflow
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex items-center gap-3 w-64 ring-4 ring-green-500/10">
              <span className="bg-green-500 p-1 rounded text-white text-[10px]">
                ⚡
              </span>
              <span className="text-sm font-medium">
                When ticket is created
              </span>
            </div>
          </div>

          {/* Vertical Connector */}
          <div className="h-10 w-[2px] bg-slate-200 mb-2"></div>

          {/* AI Action Node */}
          <div className="flex items-center gap-12 mb-8">
            <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-md flex items-center gap-3 w-72 border-b-4 border-b-purple-400">
              <span className="bg-purple-100 p-1.5 rounded text-purple-600">
                ✨
              </span>
              <span className="text-sm font-medium">Check ticket severity</span>
            </div>
            <div className="hidden md:block max-w-[180px]">
              <p className="font-bold text-sm">AI actions</p>
              <p className="text-xs text-slate-500">
                Let AI run the logic, conditions and what happens next
              </p>
            </div>
          </div>

          {/* Split Path */}
          <div className="relative w-full max-w-2xl">
            <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-slate-200"></div>

            <div className="grid grid-cols-2 gap-12 pt-10">
              {/* Left Branch (Yes) */}
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white border border-slate-200 rounded-lg p-3 w-full shadow-sm flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-pink-100 overflow-hidden" />
                  <span className="text-xs font-semibold uppercase text-slate-400">
                    Escalation Caller Agent
                  </span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-3 w-full shadow-sm text-xs font-medium">
                  Assign on-call team
                </div>
              </div>

              {/* Right Branch (No) */}
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white border border-slate-200 rounded-lg p-3 w-full shadow-sm flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 overflow-hidden" />
                  <span className="text-xs font-semibold uppercase text-slate-400">
                    Ticket Resolver Agent
                  </span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-3 w-full shadow-sm flex items-center gap-2">
                  <img
                    src="https://www.google.com/favicon.ico"
                    className="w-4 h-4"
                  />
                  <span className="text-xs">Send Gmail notification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
