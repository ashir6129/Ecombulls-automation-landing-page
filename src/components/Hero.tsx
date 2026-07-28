"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { MOTION_TOKENS, fadeInVariants } from "@/lib/motion";

const DynamicHeroSyncDiagram = dynamic(
  () => import("./HeroSyncDiagram"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-square max-w-[500px] mx-auto rounded-3xl bg-black border border-[#0F3D35] animate-pulse flex items-center justify-center text-text-muted text-xs font-mono">
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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-black overflow-hidden border-b border-[#0F3D35]/80">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0F3D35]/30 blur-[140px] rounded-full pointer-events-none" />

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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#051210] border border-[#0F3D35] text-[#10B981] text-xs font-semibold shadow-inner">
                <Sparkles className="w-4 h-4" />
                <span>The AI Operating System for E-Commerce Agencies</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInVariants}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.1]"
            >
              Scale Agency Stores with{" "}
              <span className="bg-gradient-to-r from-[#10B981] via-[#165B4F] to-[#0F3D35] bg-clip-text text-transparent">
                Autonomous AI Systems
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInVariants}
              custom={2}
              className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Ecombulls automates inventory syncing, order routing, repricing engines, and product catalog synchronization across <strong className="text-white">Amazon, eBay, Walmart, TikTok Shop, and Shopify</strong> with zero human latency.
            </motion.p>

            {/* Key Value Proposition Badges */}
            <motion.div
              variants={fadeInVariants}
              custom={3}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-text-muted pt-2"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Zero Stock-out Latency</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>No API Overages</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>100% SLA Guarantee</span>
              </div>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              variants={fadeInVariants}
              custom={4}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0F3D35] hover:bg-[#165B4F] text-white font-bold text-base border border-[#165B4F] transition-all shadow-lg shadow-[#0F3D35]/40 flex items-center justify-center gap-3 group"
              >
                <span>Book Free Automation Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#10B981]" />
              </button>

              <a
                href="#platforms"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#051210] border border-[#0F3D35] hover:border-[#165B4F] text-white font-medium text-base transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Supported Platforms</span>
              </a>
            </motion.div>

            {/* Trust Footer */}
            <motion.div
              variants={fadeInVariants}
              custom={5}
              className="pt-4 text-xs text-text-dim flex items-center justify-center lg:justify-start gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>Trusted by 45+ E-commerce Growth Agencies worldwide</span>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-5 relative">
            <DynamicHeroSyncDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};
