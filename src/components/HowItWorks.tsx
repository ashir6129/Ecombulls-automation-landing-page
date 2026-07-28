"use client";

import React, { useEffect, useRef } from "react";
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
    <section ref={sectionRef} id="how-it-works" className="py-24 bg-[#BCCBC9] relative overflow-hidden border-b border-[#141C1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E9ECE6] border border-[#141C1B] text-[#141C1B] text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#141C1B]" />
            <span>Operational Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#141C1B] tracking-tight">
            How Ecombulls Automates Agency Store Operations
          </h2>
          <p className="text-[#141C1B] text-base font-medium">
            From initial API connection to autonomous 24/7 execution — structured in 3 simple phases.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-0.5 bg-[#141C1B]/30 z-0">
            <div
              ref={lineRef}
              className="w-full h-full bg-[#141C1B] origin-top scale-y-0"
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
                    <div className="bg-[#E9ECE6] border-2 border-[#141C1B] p-6 sm:p-8 rounded-3xl shadow-lg hover:border-[#141C1B] transition-all group">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-[#141C1B] bg-[#BCCBC9] px-2.5 py-1 rounded-lg border border-[#141C1B]">
                          PHASE {item.step}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-[#BCCBC9] border border-[#141C1B] flex items-center justify-center text-[#141C1B] group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5 text-[#141C1B]" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold font-heading text-[#141C1B] mb-3">
                        {item.title}
                      </h3>

                      <p className="text-[#141C1B] text-sm leading-relaxed mb-6 font-medium">
                        {item.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-[#141C1B] font-medium">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#141C1B]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#141C1B] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node Badge */}
                  <div className="w-12 h-12 rounded-2xl bg-[#BCCBC9] border-2 border-[#141C1B] text-[#141C1B] font-bold font-mono text-sm flex items-center justify-center shrink-0 shadow-lg z-20">
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
            className="px-8 py-4 bg-[#E9ECE6] hover:bg-white border border-[#141C1B] text-[#141C1B] font-bold rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
          >
            <span>Start Phase 01 Audit Now</span>
            <ArrowRight className="w-4 h-4 text-[#141C1B]" />
          </button>
        </div>
      </div>
    </section>
  );
};
