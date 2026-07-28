"use client";

import React from "react";
import Image from "next/image";
import { Quote, Award, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-background relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-glow/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-surface border border-border rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Top Decorative Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-cyan to-accent-blue" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Framed Founder Headshot */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border-2 border-border-glow shadow-[0_0_50px_rgba(0,240,144,0.15)] group">
                <Image
                  src="/images/founder-placeholder.jpg"
                  alt="Mudasir Kamal — Founder & CEO, Ecombulls"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-surface/90 backdrop-blur-md border border-border">
                  <div className="text-base font-bold font-heading text-white">Mudasir Kamal</div>
                  <div className="text-xs font-mono text-accent">Founder & CEO, Ecombulls</div>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Vision & Bio */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Meet The Founder</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                &ldquo;Manual store operations are the #1 bottleneck preventing e-commerce agencies from scaling.&rdquo;
              </h2>

              <p className="text-text-muted text-base leading-relaxed font-normal">
                Prior to founding Ecombulls, <strong className="text-white">Mudasir Kamal</strong> spent years building systems for high-volume Amazon and multi-channel store operators. He realized that e-commerce growth agencies were losing millions in oversell penalties, delayed PO orders, and exhausted account managers doing repetitive data entry across disconnected seller portals.
              </p>

              <p className="text-text-muted text-base leading-relaxed font-normal">
                Ecombulls was engineered to solve this permanently. By combining deep marketplace API architectures with deterministic AI pipeline automation, Ecombulls gives agency founders complete operational freedom and 99.8% execution reliability.
              </p>

              {/* Founder Principles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-surface-elevated border border-border space-y-1">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-accent" />
                    Zero Oversell Guarantee
                  </div>
                  <p className="text-text-muted text-xs">
                    Microsecond inventory locking ensures store suspension risk is zero.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-surface-elevated border border-border space-y-1">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Award className="w-4 h-4 text-accent" />
                    Dedicated Agency SLA
                  </div>
                  <p className="text-text-muted text-xs">
                    Engineering-grade support and custom API adapter pipelines for agency partners.
                  </p>
                </div>
              </div>

              {/* Signature Quote Footnote */}
              <div className="pt-4 border-t border-border flex items-center gap-4 text-xs font-mono text-text-muted">
                <Quote className="w-8 h-8 text-accent/40 shrink-0" />
                <div>
                  <span className="text-white font-bold block">Mudasir Kamal</span>
                  <span>Building the future of autonomous e-commerce infrastructure.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
