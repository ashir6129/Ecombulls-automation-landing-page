"use client";

import React from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { DollarSign, ShieldCheck, Zap, Building2 } from "lucide-react";

export const StatsBar: React.FC = () => {
  const stat1 = useCountUp({ end: 50, prefix: "$", suffix: "M+", duration: 2 });
  const stat2 = useCountUp({ end: 99.98, decimals: 2, suffix: "%", duration: 2.2 });
  const stat3 = useCountUp({ end: 10, suffix: "x", duration: 1.8 });
  const stat4 = useCountUp({ end: 45, suffix: "+", duration: 2 });

  const stats = [
    {
      ref: stat1.ref,
      value: stat1.value,
      label: "Automated System Volume",
      subtext: "Across active client applications",
      icon: DollarSign,
    },
    {
      ref: stat2.ref,
      value: stat2.value,
      label: "API Sync Uptime SLA",
      subtext: "24/7 continuous monitoring",
      icon: ShieldCheck,
    },
    {
      ref: stat3.ref,
      value: stat3.value,
      label: "Team Velocity Multiplier",
      subtext: "Faster sprint execution",
      icon: Zap,
    },
    {
      ref: stat4.ref,
      value: stat4.value,
      label: "Enterprise Clients Served",
      subtext: "Active partner companies",
      icon: Building2,
    },
  ];

  return (
    <section className="py-20 bg-[#1C1917] border-b border-[#292524] text-white relative overflow-hidden">
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-stone-800">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              ref={stat.ref}
              className={`p-6 text-center space-y-2 flex flex-col items-center justify-center ${idx !== 0 ? "pt-8 lg:pt-6" : ""}`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-gradient-coral tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white font-display tracking-wide">{stat.label}</div>
              <div className="text-xs text-[#A8A29E] font-medium">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
