"use client";

import React from "react";
import Image from "next/image";
import { Quote, Award, Sparkles, ShieldCheck, Zap } from "lucide-react";

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-[#FAF8F5] relative overflow-hidden border-b border-[#E7E5E4]">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#C84B31]/10 via-[#F97316]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#1C1917] border-2 border-[#C84B31] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden text-white glow-card">
          {/* Top Flame Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C84B31] via-[#E86A33] to-[#F97316]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Framed Founder Headshot */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#C84B31] shadow-2xl group">
                <Image
                  src="/images/founder-placeholder.jpg"
                  alt="Mudasir Kamal — Founder & CEO, Ecombulls"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-transparent to-transparent" />

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#292524]/90 backdrop-blur-md border border-[#44403C] shadow-lg">
                  <div className="text-lg font-bold font-display text-white">Mudasir Kamal</div>
                  <div className="text-xs font-mono text-[#C84B31] font-bold">Founder &amp; CEO, Ecombulls</div>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Vision & Bio */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C84B31]/20 border border-[#C84B31]/40 text-[#C84B31] text-xs font-bold font-mono">
                <Sparkles className="w-3.5 h-3.5 text-[#C84B31]" />
                <span>Meet The Founder</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
                &ldquo;Manual store ops are the #1 bottleneck preventing e-commerce agencies from scaling.&rdquo;
              </h2>

              <p className="text-[#A8A29E] text-base leading-relaxed font-normal">
                Prior to founding Ecombulls, <strong className="text-white">Mudasir Kamal</strong> spent years engineering custom automation systems for multi-channel store operators. He realized that e-commerce growth agencies were losing hundreds of hours monthly in manual CSV updates, billing delays, and stock-out penalties.
              </p>

              <p className="text-[#A8A29E] text-base leading-relaxed font-normal">
                Ecombulls was built to solve this permanently. By combining direct marketplace API pipelines, Google Sheets auto-sync, unified master dashboards, and RAG AI agents, Ecombulls gives agency founders complete operational freedom and 99.98% execution reliability.
              </p>

              {/* Founder Principles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#292524]/80 border border-[#44403C] space-y-1 shadow-sm">
                  <div className="flex items-center gap-2 text-white font-bold text-sm font-display">
                    <ShieldCheck className="w-4 h-4 text-[#C84B31]" />
                    Zero Oversell Guarantee
                  </div>
                  <p className="text-[#A8A29E] text-xs font-normal">
                    Microsecond inventory locking ensures client store suspension risk is zero.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#292524]/80 border border-[#44403C] space-y-1 shadow-sm">
                  <div className="flex items-center gap-2 text-white font-bold text-sm font-display">
                    <Zap className="w-4 h-4 text-[#C84B31]" />
                    Dedicated Agency SLA
                  </div>
                  <p className="text-[#A8A29E] text-xs font-normal">
                    Engineering-grade 24/7 support &amp; custom API adapter pipelines for agency partners.
                  </p>
                </div>
              </div>

              {/* Signature Quote Footnote */}
              <div className="pt-4 border-t border-[#292524] flex items-center gap-4 text-xs font-mono text-[#A8A29E]">
                <Quote className="w-8 h-8 text-[#C84B31] shrink-0" />
                <div>
                  <span className="text-white font-bold block font-display text-sm">Mudasir Kamal</span>
                  <span className="font-medium text-[#A8A29E]">Building the future of autonomous e-commerce agency infrastructure.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
