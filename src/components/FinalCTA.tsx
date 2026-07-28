"use client";

import React from "react";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

interface FinalCTAProps {
  onOpenAudit: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAudit }) => {
  return (
    <section className="py-24 bg-[#040E0C] relative overflow-hidden border-b border-[#0F3D35]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative bg-black border-2 border-[#0F3D35] rounded-3xl p-8 sm:p-14 lg:p-20 text-center shadow-[0_0_80px_rgba(15,61,53,0.3)] overflow-hidden">
          {/* Ambient Glowing Background Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0F3D35]/40 blur-[140px] rounded-full pointer-events-none" />

          {/* Top Gradient Partition Accent Border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0F3D35] via-[#165B4F] to-[#10B981]" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F3D35]/40 border border-[#0F3D35] text-[#10B981] text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-[#10B981]" />
              <span>Ready to Scale Your Agency Operations?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Stop Managing Stores Manually. Let AI Run Your Infrastructure.
            </h2>

            <p className="text-text-muted text-base sm:text-lg leading-relaxed">
              Book a free 1-on-1 automation audit with Mudasir Kamal&apos;s team. We&apos;ll analyze your store matrix and deliver a custom multi-channel integration blueprint in 24 hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto px-10 py-5 bg-[#0F3D35] hover:bg-[#165B4F] border border-[#165B4F] text-white font-bold text-lg rounded-2xl shadow-xl shadow-[#0F3D35]/40 transition-all flex items-center justify-center gap-3 group"
              >
                <span>Book Free Automation Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#10B981]" />
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-text-muted">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>100% Confidential Audit</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>Custom Integration Plan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
