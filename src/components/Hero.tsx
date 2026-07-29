"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { MOTION_TOKENS, fadeInVariants } from "@/lib/motion";
import { AmazonLogo, EBayLogo, WalmartLogo, TikTokShopLogo, ShopifyLogo } from "./PlatformLogos";

interface HeroProps {
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 bg-[#FAF8F5] overflow-hidden border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: MOTION_TOKENS.stagger.normal },
              },
            }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Terracotta Subtitle Tag */}
            <motion.div variants={fadeInVariants} custom={0} className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-[#C84B31]/10 border border-[#C84B31]/20 text-[#C84B31] font-extrabold text-xs tracking-wider uppercase font-mono">
                Ecombulls AI & Web Systems
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-[#E7E5E4] text-[#1C1917] font-bold text-xs shadow-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Top Rated Plus Agency • 100% Client Satisfaction</span>
              </span>
            </motion.div>

            {/* Main Headline with Designer Text Styling */}
            <motion.h1
              variants={fadeInVariants}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#1C1917] tracking-tight leading-[1.14]"
            >
              Empowering Business Success Through{" "}
              <span className="text-gradient-coral">
                Innovative AI &amp; Web Engineering
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInVariants}
              custom={2}
              className="text-base sm:text-lg text-[#57534E] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Your dedicated technology partner in custom web development, logistics management software, business process automation, and intelligent e-commerce platforms engineered for hyper-growth.
            </motion.p>

            {/* Call to Action Pill Button */}
            <motion.div
              variants={fadeInVariants}
              custom={3}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#C84B31] hover:bg-[#B03D25] text-white font-bold text-base transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
              >
                <span>Let&apos;s Discuss Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white border border-[#E7E5E4] hover:border-[#C84B31] text-[#1C1917] font-bold text-base transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Explore Services</span>
              </a>
            </motion.div>

            {/* Brand Logo Row */}
            <motion.div
              variants={fadeInVariants}
              custom={4}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 border-t border-[#E7E5E4]"
            >
              <span className="text-xs font-mono font-bold text-[#78716C] uppercase mr-2">Integrations:</span>
              <div className="p-2 rounded-xl bg-white border border-[#E7E5E4] shadow-sm">
                <AmazonLogo className="h-4 w-auto text-[#1C1917]" />
              </div>
              <div className="p-2 rounded-xl bg-white border border-[#E7E5E4] shadow-sm">
                <EBayLogo className="h-4 w-auto" />
              </div>
              <div className="p-2 rounded-xl bg-white border border-[#E7E5E4] shadow-sm">
                <WalmartLogo className="h-4 w-auto text-[#1C1917]" />
              </div>
              <div className="p-2 rounded-xl bg-white border border-[#E7E5E4] shadow-sm">
                <TikTokShopLogo className="h-4 w-auto text-[#1C1917]" />
              </div>
              <div className="p-2 rounded-xl bg-white border border-[#E7E5E4] shadow-sm">
                <ShopifyLogo className="h-4 w-auto text-[#1C1917]" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Rounded Photo Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] max-w-[480px] mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/hero-agency.jpg"
                alt="Ecombulls AI Engineering Team"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-sm border border-[#E7E5E4] shadow-lg">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C84B31] font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#C84B31]" />
                  <span>100% Code Ownership &amp; 30-Day Warranty</span>
                </div>
                <div className="text-sm font-bold text-[#1C1917] mt-1 font-heading">
                  High-Loaded Systems, Custom Logistics, &amp; AI Engineering
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
