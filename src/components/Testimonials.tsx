"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  agency: string;
  metric: string;
  platforms: string[];
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "Before Ecombulls, our agency was drowning in daily CSV stock updates across 18 Amazon and Shopify client stores. Mudasir Kamal's team integrated their AI sync engine in under 48 hours. We eliminated stock-outs completely and scaled from 18 to 42 stores with zero new hires.",
    name: "[SAMPLE — REPLACE: Marcus Vance]",
    role: "Managing Director",
    agency: "[SAMPLE — REPLACE: Apex Ecom Ops]",
    metric: "+130% Store Capacity",
    platforms: ["Amazon", "Shopify", "Walmart"],
  },
  {
    id: 2,
    quote:
      "TikTok Shop live sales spikes used to crush our 3PL warehouse inventory logic. Ecombulls' event-driven sync locks inventory in real-time. We processed over $450k in 3 days with zero oversells or cancelled TikTok Shop orders.",
    name: "[SAMPLE — REPLACE: Sarah Jenkins]",
    role: "Head of Growth",
    agency: "[SAMPLE — REPLACE: ViralCommerce Partners]",
    metric: "$450k Flash Sync",
    platforms: ["TikTok Shop", "Shopify"],
  },
  {
    id: 3,
    quote:
      "The Buy Box repricer and multi-warehouse routing rules alone saved us over 80 hours a month per store manager. Ecombulls is the secret weapon for any agency serious about managing high-SKU Walmart and eBay accounts.",
    name: "[SAMPLE — REPLACE: David Sterling]",
    role: "Founder & CEO",
    agency: "[SAMPLE — REPLACE: Sterling Multi-Channel]",
    metric: "80 Hours Saved / Mo",
    platforms: ["Walmart", "eBay", "Amazon"],
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="results" className="py-24 bg-[#FFF5B8] relative overflow-hidden border-b border-[#CCA25A] text-[#2C200B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7E8A1] border border-[#CCA25A] text-[#2C200B] text-xs font-bold">
            <Quote className="w-3.5 h-3.5 text-[#CCA25A]" />
            <span>Agency Partner Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#2C200B] tracking-tight">
            Validated Results from High-Growth Agency Leaders
          </h2>
          <p className="text-[#3A2A0E] text-base font-medium">
            See how top e-commerce agencies leverage Mudasir Kamal&apos;s AI system to unlock scale and zero-error fulfillment.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto bg-[#F7E8A1] border-2 border-[#CCA25A] rounded-3xl p-8 sm:p-12 shadow-xl relative text-[#2C200B]">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-1 text-[#CCA25A]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#CCA25A] text-[#2C200B]" />
              ))}
              <span className="text-xs font-bold text-[#2C200B] ml-2 font-mono">5.0 Verified Partner Rating</span>
            </div>

            <div className="px-3 py-1 rounded-full bg-[#FFF5B8] border border-[#CCA25A] text-[#2C200B] font-mono text-xs font-bold">
              {current.metric}
            </div>
          </div>

          <p className="text-lg sm:text-xl text-[#2C200B] font-medium leading-relaxed italic mb-8">
            &ldquo;{current.quote}&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#CCA25A]">
            <div>
              <div className="text-base font-bold font-heading text-[#2C200B]">{current.name}</div>
              <div className="text-xs text-[#3A2A0E] font-semibold">
                {current.role} at <span className="text-[#2C200B] font-bold">{current.agency}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {current.platforms.map((p, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-[#FFF5B8] border border-[#CCA25A] text-[10px] font-mono text-[#2C200B] font-bold"
                  >
                    {p}
                  </span>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-[#FFF5B8] border border-[#CCA25A] hover:bg-[#CCA25A] hover:text-[#FFF5B8] text-[#2C200B] transition-colors shadow-sm"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-[#FFF5B8] border border-[#CCA25A] hover:bg-[#CCA25A] hover:text-[#FFF5B8] text-[#2C200B] transition-colors shadow-sm"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
