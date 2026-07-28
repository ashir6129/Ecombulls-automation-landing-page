"use client";

import React from "react";
import Image from "next/image";
import { Quote, Award, Sparkles, ShieldCheck } from "lucide-react";

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-[#E9ECE6] relative overflow-hidden border-b border-[#141C1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#BCCBC9] border-2 border-[#141C1B] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden text-[#141C1B]">
          {/* Top Border Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#141C1B]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Framed Founder Headshot */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#141C1B] shadow-2xl group">
                <Image
                  src="/images/founder-placeholder.jpg"
                  alt="Mudasir Kamal — Founder & CEO, Ecombulls"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141C1B]/80 via-transparent to-transparent" />

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#E9ECE6] border border-[#141C1B]">
                  <div className="text-base font-bold font-heading text-[#141C1B]">Mudasir Kamal</div>
                  <div className="text-xs font-mono text-[#141C1B] font-bold">Founder & CEO, Ecombulls</div>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Vision & Bio */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E9ECE6] border border-[#141C1B] text-[#141C1B] text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#141C1B]" />
                <span>Meet The Founder</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#141C1B] tracking-tight leading-tight">
                &ldquo;Manual store operations are the #1 bottleneck preventing e-commerce agencies from scaling.&rdquo;
              </h2>

              <p className="text-[#141C1B] text-base leading-relaxed font-medium">
                Prior to founding Ecombulls, <strong className="text-[#141C1B] underline">Mudasir Kamal</strong> spent years building systems for high-volume Amazon and multi-channel store operators. He realized that e-commerce growth agencies were losing millions in oversell penalties, delayed PO orders, and exhausted account managers doing repetitive data entry across disconnected seller portals.
              </p>

              <p className="text-[#141C1B] text-base leading-relaxed font-medium">
                Ecombulls was engineered to solve this permanently. By combining deep marketplace API architectures with deterministic AI pipeline automation, Ecombulls gives agency founders complete operational freedom and 99.8% execution reliability.
              </p>

              {/* Founder Principles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#E9ECE6] border border-[#141C1B] space-y-1">
                  <div className="flex items-center gap-2 text-[#141C1B] font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#141C1B]" />
                    Zero Oversell Guarantee
                  </div>
                  <p className="text-[#141C1B] text-xs font-medium">
                    Microsecond inventory locking ensures store suspension risk is zero.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#E9ECE6] border border-[#141C1B] space-y-1">
                  <div className="flex items-center gap-2 text-[#141C1B] font-bold text-sm">
                    <Award className="w-4 h-4 text-[#141C1B]" />
                    Dedicated Agency SLA
                  </div>
                  <p className="text-[#141C1B] text-xs font-medium">
                    Engineering-grade support and custom API adapter pipelines for agency partners.
                  </p>
                </div>
              </div>

              {/* Signature Quote Footnote */}
              <div className="pt-4 border-t border-[#141C1B] flex items-center gap-4 text-xs font-mono text-[#141C1B]">
                <Quote className="w-8 h-8 text-[#141C1B] shrink-0" />
                <div>
                  <span className="text-[#141C1B] font-bold block">Mudasir Kamal</span>
                  <span className="font-semibold">Building the future of autonomous e-commerce infrastructure.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
