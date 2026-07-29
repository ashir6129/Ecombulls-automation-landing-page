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
    <section className="py-16 bg-[#F7E8A1] border-b border-[#CCA25A] relative overflow-hidden text-[#2C200B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                ref={stat.ref}
                className="p-6 rounded-2xl bg-[#FFF5B8] border-2 border-[#CCA25A] hover:border-[#2C200B] transition-all space-y-2 group text-center lg:text-left shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F7E8A1] border border-[#CCA25A] flex items-center justify-center text-[#2C200B] mx-auto lg:mx-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-[#CCA25A]" />
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#2C200B] tracking-tight">
                  {stat.value}
                </div>

                <div className="text-sm font-bold text-[#2C200B]">{stat.label}</div>
                <div className="text-xs text-[#3A2A0E] font-medium">{stat.subtext}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
