"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Cpu, TrendingUp, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HowItWorksProps {
  onOpenAudit: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenAudit }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 70%",
              scrub: 0.5,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const whyChooseUs = [
    {
      num: "1",
      title: "Exceptional E-Commerce Expertise",
      desc: "Proven track record automating over $50M+ GMV across Amazon SP-API, eBay Motors, Walmart WFS, TikTok Shop, and Shopify Plus. Our dedicated AI engine guarantees maximum store performance.",
    },
    {
      num: "2",
      title: "Bank-Grade Microsecond Uptime Standards",
      desc: "When you choose Ecombulls, you get 99.8% uptime SLA with event-driven stock locking. We maintain strict multi-tenant data isolation and burst queue protection.",
    },
    {
      num: "3",
      title: "Agency-Centric Scaling Blueprint",
      desc: "We empower your existing account managers to supervise 25–40 client stores instead of 4–5 manual accounts, unlocking 10x agency growth without extra payroll.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Store Footprint Audit & API Setup",
      icon: Search,
      description:
        "Mudasir Kamal's engineering team analyzes your agency's client store matrix, SKUs, warehouse locations, and existing ERPs. We connect native API keys with zero store downtime.",
      highlights: ["API Key Sandbox Validation", "Historical Data Cleanup", "Zero-Downtime Integration"],
    },
    {
      step: "02",
      title: "Autonomous AI Engine Deployment",
      icon: Cpu,
      description:
        "Ecombulls deploys real-time event listeners across Amazon, eBay, Walmart, TikTok Shop, and Shopify. Inventory updates trigger microsecond cross-channel stock locking.",
      highlights: ["Sub-Minute Inventory Sync", "Buy Box Repricing Rules", "Automated 3PL Order Routing"],
    },
    {
      step: "03",
      title: "Infinite Scale & Profit Guard",
      icon: TrendingUp,
      description:
        "Your agency store managers switch from manual order checking to high-level strategic growth. Ecombulls autonomously manages exceptions, rate limits, and catalog syncs 24/7.",
      highlights: ["10x Client Store Capacity", "99.8% Uptime SLA", "24/7 Engine Health Monitoring"],
    },
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 bg-[#FAF8F5] relative overflow-hidden border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-28">
        
        {/* Split Feature Section (Matching Reference Screenshot "Why Should You Choose Quicky?") */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/feature-fulfillment.jpg"
                alt="Why Choose Ecombulls Agency Fulfillment"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Numbered List Items (Matching Reference Screenshot) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-[#C84B31] font-bold text-xs font-mono tracking-widest uppercase">
                THE ECOMBULLS ADVANTAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1C1917] tracking-tight mt-2">
                Why Should You Choose Ecombulls?
              </h2>
            </div>

            <div className="space-y-6">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1C1917] text-white font-bold font-heading flex items-center justify-center shrink-0 shadow-md">
                    {item.num}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold font-heading text-[#1C1917]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#57534E] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenAudit}
              className="px-8 py-3.5 rounded-xl bg-[#C84B31] hover:bg-[#B03D25] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              <span>Get Started with Ecombulls</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* 3-Step Process Section Header (Matching Reference Screenshot "Transforming Your Space: Our Three-Step Service") */}
        <div className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C84B31]/10 border border-[#C84B31]/20 text-[#C84B31] text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C84B31]" />
              <span>Operational Blueprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1C1917] tracking-tight">
              Scaling Your Agency: Our Three-Step Blueprint
            </h2>
            <p className="text-[#57534E] text-base font-normal">
              From initial API connection to autonomous 24/7 execution — structured in 3 simple phases.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-0.5 bg-[#E7E5E4] z-0">
              <div
                ref={lineRef}
                className="w-full h-full bg-[#C84B31] origin-top scale-y-0"
              />
            </div>

            <div className="space-y-16 relative z-10">
              {steps.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Step Card Content */}
                    <div className="w-full md:w-1/2">
                      <div className="bg-white border border-[#E7E5E4] p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all group">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-mono font-bold text-white bg-[#C84B31] px-2.5 py-1 rounded-lg">
                            PHASE {item.step}
                          </span>
                          <div className="w-10 h-10 rounded-xl bg-[#C84B31]/10 border border-[#C84B31]/20 flex items-center justify-center text-[#C84B31] group-hover:scale-110 transition-transform">
                            <Icon className="w-5 h-5 text-[#C84B31]" />
                          </div>
                        </div>

                        <h3 className="text-xl font-bold font-heading text-[#1C1917] mb-3">
                          {item.title}
                        </h3>

                        <p className="text-[#57534E] text-sm leading-relaxed mb-6 font-normal">
                          {item.description}
                        </p>

                        <div className="space-y-2 pt-2 border-t border-[#E7E5E4] font-medium">
                          {item.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-[#1C1917]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C84B31] shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Center Node Badge */}
                    <div className="w-12 h-12 rounded-2xl bg-[#1C1917] text-white font-bold font-mono text-sm flex items-center justify-center shrink-0 shadow-lg z-20">
                      {item.step}
                    </div>

                    <div className="hidden md:block w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline Bottom Action */}
          <div className="mt-16 text-center">
            <button
              onClick={onOpenAudit}
              className="px-8 py-4 bg-[#C84B31] hover:bg-[#B03D25] text-white font-bold rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
            >
              <span>Start Phase 01 Audit Now</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
