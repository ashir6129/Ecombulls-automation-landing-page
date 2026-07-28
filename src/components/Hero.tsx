"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { MOTION_TOKENS, fadeInVariants } from "@/lib/motion";
import { AmazonLogo, EBayLogo, WalmartLogo, TikTokShopLogo, ShopifyLogo } from "./PlatformLogos";

const DynamicHeroSyncDiagram = dynamic(
  () => import("./HeroSyncDiagram"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-square max-w-[480px] mx-auto rounded-3xl bg-[#16170E] border border-[#545333] animate-pulse flex items-center justify-center text-[#D9D7B6] text-xs font-mono">
        Initializing AI Engine Sync Diagram...
      </div>
    ),
  }
);

interface HeroProps {
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-[#0D0E08] overflow-hidden border-b border-[#545333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
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
            {/* Tagline Pill */}
            <motion.div variants={fadeInVariants} custom={0}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16170E] border border-[#545333] text-[#FDFBD4] text-xs font-semibold">
                <Sparkles className="w-4 h-4 text-[#D9D7B6]" />
                <span>The AI Operating System for E-Commerce Agencies</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInVariants}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#FDFBD4] tracking-tight leading-[1.1]"
            >
              Scale Agency Stores with{" "}
              <span className="text-[#D9D7B6] underline decoration-[#545333]">
                Autonomous AI Systems
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInVariants}
              custom={2}
              className="text-base sm:text-lg text-[#D9D7B6] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Ecombulls automates inventory syncing, order routing, repricing engines, and product catalog synchronization across <strong className="text-[#FDFBD4]">Amazon, eBay, Walmart, TikTok Shop, and Shopify</strong> with zero human latency.
            </motion.p>

            {/* Brand Vector Logo Row */}
            <motion.div
              variants={fadeInVariants}
              custom={3}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1"
            >
              <div className="p-2.5 rounded-xl bg-[#16170E] border border-[#545333]">
                <AmazonLogo className="h-4 w-auto text-[#FDFBD4]" />
              </div>
              <div className="p-2.5 rounded-xl bg-[#16170E] border border-[#545333]">
                <EBayLogo className="h-4 w-auto" />
              </div>
              <div className="p-2.5 rounded-xl bg-[#16170E] border border-[#545333]">
                <WalmartLogo className="h-4 w-auto text-[#FDFBD4]" />
              </div>
              <div className="p-2.5 rounded-xl bg-[#16170E] border border-[#545333]">
                <TikTokShopLogo className="h-4 w-auto text-[#FDFBD4]" />
              </div>
              <div className="p-2.5 rounded-xl bg-[#16170E] border border-[#545333]">
                <ShopifyLogo className="h-4 w-auto text-[#FDFBD4]" />
              </div>
            </motion.div>

            {/* Key Value Proposition Badges */}
            <motion.div
              variants={fadeInVariants}
              custom={4}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-[#D9D7B6] pt-1"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FDFBD4]" />
                <span>Zero Stock-out Latency</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FDFBD4]" />
                <span>No API Overages</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FDFBD4]" />
                <span>100% SLA Guarantee</span>
              </div>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              variants={fadeInVariants}
              custom={5}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#545333] hover:bg-[#6B6A43] text-[#FDFBD4] font-bold text-base border border-[#878672] transition-all shadow-lg flex items-center justify-center gap-3 group"
              >
                <span>Book Free Automation Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#FDFBD4]" />
              </button>

              <a
                href="#platforms"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#16170E] border border-[#545333] hover:border-[#878672] text-[#FDFBD4] font-medium text-base transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Supported Platforms</span>
              </a>
            </motion.div>

            {/* Trust Footnote */}
            <motion.div
              variants={fadeInVariants}
              custom={6}
              className="pt-2 text-xs text-[#878672] flex items-center justify-center lg:justify-start gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#D9D7B6]" />
              <span>Trusted by 45+ E-commerce Growth Agencies worldwide</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Dynamic SVG Diagram */}
          <div className="lg:col-span-5 relative">
            <DynamicHeroSyncDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};
