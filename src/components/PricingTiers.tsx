"use client";

import React, { useState } from "react";
import { Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

interface PricingTiersProps {
  onOpenAudit: () => void;
}

export const PricingTiers: React.FC<PricingTiersProps> = ({ onOpenAudit }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const tiers = [
    {
      id: "light",
      name: "Light",
      monthly: 200,
      yearly: 180,
      badge: "System Maintenance",
      description: "Ideal for ensuring your core web system runs smoothly with minimal operational oversight.",
      features: [
        "Automatic 24/7 Monitoring",
        "Instant Alerts for Any System Issues",
        "Weekly Performance Summaries",
        "Up to 5 Hours DevOps Technical Support",
      ],
      popular: false,
    },
    {
      id: "basic",
      name: "Basic",
      monthly: 500,
      yearly: 450,
      badge: "Enhanced Monitoring",
      description: "Offers enhanced monitoring & support to keep your system efficient with flexible developer assistance.",
      features: [
        "Automatic 24/7 Monitoring",
        "Weekly Comprehensive Reports",
        "Infrastructure Maintenance & Backups",
        "Up to 10 Hours DevOps Support",
        "10 Hours Developer Assistance / Month",
      ],
      popular: false,
    },
    {
      id: "pro",
      name: "Pro",
      monthly: 1500,
      yearly: 1300,
      badge: "Most Popular Support",
      description: "Delivers comprehensive monitoring and advanced developer capacity for complex operational needs.",
      features: [
        "Automatic 24/7 Monitoring",
        "Weekly Detailed Technical Reports",
        "Extensive Infrastructure Management",
        "Up to 20 Hours DevOps Support",
        "40 Hours Developer Assistance / Month",
        "Priority Hotline & Dedicated Slack",
      ],
      popular: true,
    },
    {
      id: "premium",
      name: "Premium",
      monthly: 3000,
      yearly: 2750,
      badge: "Full Enterprise Care",
      description: "Complete full-stack support, infrastructure engineering, and continuous feature development.",
      features: [
        "Automatic 24/7 Monitoring",
        "Full Infrastructure Maintenance",
        "Unlimited Updates & Error Corrections",
        "Up to 30 Hours DevOps Support",
        "80 Hours Developer Assistance / Month",
        "20 Hours User Onboarding Support",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C84B31]/10 border border-[#C84B31]/20 text-[#C84B31] text-xs font-bold font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C84B31]" />
            <span>Transparent Support Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#1C1917] tracking-tight">
            Reliable Maintenance &amp; <span className="text-gradient-coral">Engineering Support</span>
          </h2>
          <p className="text-[#57534E] text-base sm:text-lg font-normal">
            Keep your platforms fast, secure, and continuously updated with dedicated DevOps and developer hours.
          </p>
        </div>

        {/* Monthly / Annual Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-bold ${!isAnnual ? "text-[#1C1917]" : "text-[#57534E]"}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-8 rounded-full bg-[#FAF8F5] border border-[#E7E5E4] p-1 relative transition-colors focus:outline-none"
            aria-label="Toggle Billing Frequency"
          >
            <div
              className={`w-6 h-6 rounded-full bg-[#C84B31] transition-transform ${
                isAnnual ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
          <div className="flex items-center gap-1.5">
            <span className={`text-sm font-bold ${isAnnual ? "text-[#1C1917]" : "text-[#57534E]"}`}>
              Yearly Billing
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#C84B31]/10 text-[#C84B31] text-[10px] font-mono font-bold">
              Save ~10%
            </span>
          </div>
        </div>

        {/* Support Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all relative ${
                tier.popular
                  ? "bg-white border-2 border-[#C84B31] shadow-xl scale-102"
                  : "bg-[#FAF8F5] border border-[#E7E5E4] hover:border-[#C84B31]/50 shadow-sm"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#C84B31] text-white text-[11px] font-mono font-bold tracking-wide uppercase shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-white" />
                  <span>{tier.badge}</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#C84B31] uppercase tracking-wider">
                    {tier.badge}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-[#1C1917] mt-1">{tier.name}</h3>
                  <p className="text-xs text-[#57534E] mt-2 font-normal leading-relaxed">{tier.description}</p>
                </div>

                <div className="py-4 border-y border-[#E7E5E4]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold font-heading text-[#1C1917]">
                      ${isAnnual ? tier.yearly : tier.monthly}
                    </span>
                    <span className="text-xs font-mono text-[#57534E] font-bold">/month</span>
                  </div>
                  {isAnnual && (
                    <span className="text-[10px] font-mono text-[#C84B31] font-bold">Billed annually</span>
                  )}
                </div>

                <ul className="space-y-3 text-xs text-[#1C1917]">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 font-medium">
                      <Check className="w-4 h-4 text-[#C84B31] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenAudit}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                    tier.popular
                      ? "bg-[#C84B31] hover:bg-[#B03D25] text-white shadow-md"
                      : "bg-white border border-[#E7E5E4] hover:border-[#C84B31] text-[#1C1917]"
                  }`}
                >
                  <span>Select {tier.name} Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
