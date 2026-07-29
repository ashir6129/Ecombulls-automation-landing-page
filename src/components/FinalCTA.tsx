"use client";

import React from "react";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

interface FinalCTAProps {
  onOpenAudit: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAudit }) => {
  return (
    <section className="py-24 bg-[#F7E8A1] relative overflow-hidden border-b border-[#CCA25A] text-[#2C200B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative bg-[#FFF5B8] border-2 border-[#CCA25A] rounded-3xl p-8 sm:p-14 lg:p-20 text-center shadow-xl overflow-hidden">
          {/* Top Solid Border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#CCA25A]" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7E8A1] border border-[#CCA25A] text-[#2C200B] text-xs font-bold">
              <Sparkles className="w-4 h-4 text-[#CCA25A]" />
              <span>Ready to Scale Your Agency Operations?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#2C200B] tracking-tight leading-tight">
              Stop Managing Stores Manually. Let AI Run Your Infrastructure.
            </h2>

            <p className="text-[#3A2A0E] text-base sm:text-lg leading-relaxed font-medium">
              Book a free 1-on-1 automation audit with Mudasir Kamal&apos;s team. We&apos;ll analyze your store matrix and deliver a custom multi-channel integration blueprint in 24 hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto px-10 py-5 bg-[#CCA25A] hover:bg-[#A8813A] border-2 border-[#2C200B] text-[#FFF5B8] font-bold text-lg rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 group"
              >
                <span>Book Free Automation Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#FFF5B8]" />
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#2C200B] font-bold">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#CCA25A]" />
                <span>100% Confidential Audit</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#CCA25A]" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#CCA25A]" />
                <span>Custom Integration Plan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
