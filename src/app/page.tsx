"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Marquee } from "@/components/Marquee";
import { Hero } from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import { PlatformTabs } from "@/components/PlatformTabs";
import { HowItWorks } from "@/components/HowItWorks";
import { FounderSection } from "@/components/FounderSection";
import { StatsBar } from "@/components/StatsBar";
import { ComparisonSection } from "@/components/ComparisonSection";
import { PricingTiers } from "@/components/PricingTiers";
import { TrustSection } from "@/components/TrustSection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { AuditModal } from "@/components/AuditModal";

const DynamicTestimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
  loading: () => (
    <div className="py-20 max-w-4xl mx-auto rounded-3xl bg-[#BCCBC9] border border-[#141C1B] animate-pulse flex items-center justify-center text-[#141C1B] text-xs font-mono">
      Loading Partner Verification Stories...
    </div>
  ),
});

export default function Home() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const handleOpenAuditModal = () => setIsAuditModalOpen(true);
  const handleCloseAuditModal = () => setIsAuditModalOpen(false);

  return (
    <main className="min-h-screen bg-[#E9ECE6] text-[#141C1B] selection:bg-[#BCCBC9] selection:text-[#141C1B] relative">
      {/* Top Announcement Scrolling Ticker Line ONLY (No Navbar) */}
      <div className="sticky top-0 z-50">
        <Marquee onOpenAudit={handleOpenAuditModal} />
      </div>

      {/* Hero Section */}
      <Hero onOpenAudit={handleOpenAuditModal} />

      {/* Platform Logo Strip Marquee */}
      <LogoStrip />

      {/* Interactive Platform Tabs */}
      <PlatformTabs />

      {/* 3-Step Process Timeline */}
      <HowItWorks onOpenAudit={handleOpenAuditModal} />

      {/* Founder Profile — Mudasir Kamal */}
      <FounderSection />

      {/* Key Agency Metrics Bar */}
      <StatsBar />

      {/* Lazy-Loaded Testimonials Carousel */}
      <DynamicTestimonials />

      {/* Manual Agency vs Ecombulls AI System Comparison */}
      <ComparisonSection />

      {/* Pricing Tiers & Billing Toggle */}
      <PricingTiers onOpenAudit={handleOpenAuditModal} />

      {/* Security & Uptime Trust Section */}
      <TrustSection />

      {/* Frequently Asked Questions */}
      <FAQAccordion />

      {/* High-Conversion Bottom Banner */}
      <FinalCTA onOpenAudit={handleOpenAuditModal} />

      {/* Site Footer */}
      <Footer />

      {/* Lead Capture Form Modal */}
      <AuditModal isOpen={isAuditModalOpen} onClose={handleCloseAuditModal} />
    </main>
  );
}
