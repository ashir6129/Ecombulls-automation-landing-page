"use client";

import React from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { DollarSign, ShieldCheck, Zap, Building2 } from "lucide-react";

export const StatsBar: React.FC = () => {
  const stat1 = useCountUp({ end: 50, prefix: "$", suffix: "M+", duration: 2 });
  const stat2 = useCountUp({ end: 99.8, decimals: 1, suffix: "%", duration: 2.2 });
  const stat3 = useCountUp({ end: 10, suffix: "x", duration: 1.8 });
  const stat4 = useCountUp({ end: 45, suffix: "+", duration: 2 });

  const stats = [
    {
      ref: stat1.ref,
      value: stat1.value,
      label: "GMV Processed & Automated",
      subtext: "Across client store portfolio",
      icon: DollarSign,
    },
    {
      ref: stat2.ref,
      value: stat2.value,
      label: "API Sync Uptime SLA",
      subtext: "24/7 continuous operation",
      icon: ShieldCheck,
    },
    {
      ref: stat3.ref,
      value: stat3.value,
      label: "Store Velocity Multiplier",
      subtext: "SKUs managed per operator",
      icon: Zap,
    },
    {
      ref: stat4.ref,
      value: stat4.value,
      label: "Scale Agency Partners",
      subtext: "Active enterprise clients",
      icon: Building2,
    },
  ];

  return (
    <section className="py-16 bg-[#040E0C] border-b border-[#0F3D35]/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                ref={stat.ref}
                className="p-6 rounded-2xl bg-black border border-[#0F3D35] hover:border-[#165B4F] transition-all space-y-2 group text-center lg:text-left shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-[#051210] border border-[#0F3D35] flex items-center justify-center text-[#10B981] mx-auto lg:mx-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                  {stat.value}
                </div>

                <div className="text-sm font-bold text-white">{stat.label}</div>
                <div className="text-xs text-text-muted">{stat.subtext}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
