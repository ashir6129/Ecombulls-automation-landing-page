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
    <section className="py-16 bg-[#BCCBC9] border-b border-[#141C1B] relative overflow-hidden text-[#141C1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                ref={stat.ref}
                className="p-6 rounded-2xl bg-[#E9ECE6] border-2 border-[#141C1B] hover:border-[#141C1B] transition-all space-y-2 group text-center lg:text-left shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-[#BCCBC9] border border-[#141C1B] flex items-center justify-center text-[#141C1B] mx-auto lg:mx-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-[#141C1B]" />
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#141C1B] tracking-tight">
                  {stat.value}
                </div>

                <div className="text-sm font-bold text-[#141C1B]">{stat.label}</div>
                <div className="text-xs text-[#141C1B] font-medium">{stat.subtext}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
