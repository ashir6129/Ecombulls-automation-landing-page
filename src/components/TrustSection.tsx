"use client";

import React from "react";
import { ShieldCheck, Lock, Server, Cpu, Key } from "lucide-react";

export const TrustSection: React.FC = () => {
  const trustFeatures = [
    {
      icon: Lock,
      title: "256-Bit API Key Encryption",
      desc: "All client store API secrets & tokens are encrypted at rest using AES-256 and isolated in private vault hardware.",
    },
    {
      icon: Server,
      title: "99.8% Financial SLA Uptime",
      desc: "Contractually backed system uptime guarantee ensured by redundant cloud clusters across AWS and GCP infrastructure.",
    },
    {
      icon: Cpu,
      title: "Burst Rate-Limit Defense",
      desc: "Engineered queue buffers prevent marketplace API ban triggers (Amazon SP-API & TikTok Shop rate limits handled automatically).",
    },
    {
      icon: Key,
      title: "Multi-Tenant Store Isolation",
      desc: "Strict logical separation guarantees client store data across your agency portfolio never leaks or cross-contaminates.",
    },
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-[#E7E5E4] relative overflow-hidden text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C84B31]/10 border border-[#C84B31]/20 text-[#C84B31] text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C84B31]" />
              <span>Enterprise Compliance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#1C1917]">
              Bank-Grade Security & SLA Guarantee
            </h2>
            <p className="text-[#57534E] text-sm leading-relaxed font-normal">
              Ecombulls is architected for enterprise agencies managing sensitive client store credentials and millions in monthly transaction volume.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7E5E4] space-y-2 shadow-md hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-2xl bg-[#C84B31]/10 border border-[#C84B31]/20 flex items-center justify-center text-[#C84B31]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1C1917] font-heading">{item.title}</h3>
                  <p className="text-xs text-[#57534E] leading-relaxed font-normal">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
