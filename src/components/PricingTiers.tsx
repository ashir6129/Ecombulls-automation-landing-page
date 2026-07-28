"use client";

import React, { useState } from "react";
import { Check, Sparkles, Zap, ArrowRight, ShieldCheck } from "lucide-react";

interface PricingTiersProps {
  onOpenAudit: () => void;
}

export const PricingTiers: React.FC<PricingTiersProps> = ({ onOpenAudit }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers = [
    {
      name: "Starter Agency",
      priceMonthly: 999,
      priceAnnual: 799,
      badge: "For Growing Teams",
      description: "Ideal for boutique agencies managing up to 5 client store accounts across 2 platforms.",
      features: [
        "Up to 5 Connected Client Stores",
        "15-Minute Automated Stock Sync",
        "Amazon & Shopify Native Connectors",
        "Standard Order Dispatch Routing",
        "Email & Helpdesk SLA Support",
      ],
      ctaText: "Start Starter Plan",
      popular: false,
    },
    {
      name: "Scale Agency",
      priceMonthly: 2499,
      priceAnnual: 1999,
      badge: "Most Popular for Growth",
      description: "Built for scaling agencies managing up to 25 stores needing sub-minute multi-channel sync.",
      features: [
        "Up to 25 Connected Client Stores",
        "1-Minute Real-Time Inventory Sync",
        "Amazon, eBay, Walmart, TikTok & Shopify",
        "Buy Box Algorithmic Repricing Engine",
        "Dedicated Agency Slack Channel",
        "Automated 3PL Order Splitter",
      ],
      ctaText: "Claim Scale Automation",
      popular: true,
    },
    {
      name: "Enterprise Custom",
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      badge: "Unlimited Scale",
      description: "For top tier e-commerce agencies managing 50+ stores requiring custom VPC & dedicated engineers.",
      features: [
        "Unlimited Connected Stores & SKUs",
        "Microsecond Event-Driven Live Sync",
        "All Platforms + Custom ERP Adapters",
        "Dedicated AI Engineer (Mudasir Kamal Team)",
        "24/7 Phone & Priority Incident Hotline",
        "Custom SLA Uptime Financial Guarantee",
      ],
      ctaText: "Contact Founder Team",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#E9ECE6] relative overflow-hidden border-b border-[#141C1B] text-[#141C1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#BCCBC9] border border-[#141C1B] text-[#141C1B] text-xs font-bold">
            <Zap className="w-3.5 h-3.5 text-[#141C1B]" />
            <span>Transparent Agency Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#141C1B] tracking-tight">
            Automation Plans Built to Scale With Your Store Count
          </h2>
          <p className="text-[#141C1B] text-base font-medium">
            No per-order fees or hidden charges. Predictable flat monthly investments that unlock 10x operational velocity.
          </p>

          {/* Billing Cycle Toggle Switch */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <span className={`text-xs font-bold ${!isAnnual ? "text-[#141C1B]" : "text-[#141C1B]/70"}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 rounded-full bg-[#BCCBC9] border border-[#141C1B] p-1 transition-colors"
              aria-label="Toggle Billing Cycle"
            >
              <div
                className={`w-6 h-6 rounded-full bg-[#141C1B] transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-xs font-bold flex items-center gap-1.5 ${isAnnual ? "text-[#141C1B]" : "text-[#141C1B]/70"}`}>
              Annual Billing
              <span className="px-2 py-0.5 rounded-full bg-[#141C1B] text-[#E9ECE6] text-[10px] font-mono font-bold">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => {
            const price = isAnnual ? tier.priceAnnual : tier.priceMonthly;

            return (
              <div
                key={idx}
                className={`relative bg-[#BCCBC9] rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? "border-2 border-[#141C1B] shadow-xl -translate-y-2"
                    : "border border-[#141C1B] hover:border-[#141C1B]"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#141C1B] text-[#E9ECE6] font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-1 border border-[#141C1B]">
                    <Sparkles className="w-3.5 h-3.5 text-[#E9ECE6]" />
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold font-heading text-[#141C1B]">{tier.name}</h3>
                    <p className="text-[#141C1B] text-xs mt-1 min-h-[36px] font-semibold">{tier.description}</p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold font-heading text-[#141C1B]">
                        {typeof price === "number" ? `$${price}` : price}
                      </span>
                      {typeof price === "number" && (
                        <span className="text-xs text-[#141C1B] font-mono font-bold">/month per agency</span>
                      )}
                    </div>
                    {isAnnual && typeof price === "number" && (
                      <span className="text-[10px] font-mono text-[#141C1B] font-bold">Billed annually (${price * 12}/yr)</span>
                    )}
                  </div>

                  <div className="space-y-3 pt-6 border-t border-[#141C1B] mb-8">
                    <div className="text-xs font-mono text-[#141C1B] uppercase tracking-wider font-bold">Included Features:</div>
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#141C1B] font-medium">
                        <Check className="w-4 h-4 text-[#141C1B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenAudit}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                    tier.popular
                      ? "bg-[#141C1B] hover:bg-black text-[#E9ECE6] shadow-md"
                      : "bg-[#E9ECE6] border border-[#141C1B] hover:bg-white text-[#141C1B]"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Enterprise Bottom Footnote */}
        <div className="mt-12 text-center text-xs text-[#141C1B] font-bold flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#141C1B]" />
          <span>All plans backed by Ecombulls 14-day zero-risk implementation trial and 99.8% Uptime SLA.</span>
        </div>
      </div>
    </section>
  );
};
