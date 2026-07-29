"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Marquee } from "@/components/Marquee";
import { Hero } from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import { PlatformTabs } from "@/components/PlatformTabs";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
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
    <div className="py-20 max-w-4xl mx-auto rounded-3xl bg-white border border-[#E7E5E4] animate-pulse flex items-center justify-center text-[#57534E] text-xs font-mono font-bold">
      Loading Partner Verification Stories...
    </div>
  ),
});

export default function Home() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const handleOpenAuditModal = () => setIsAuditModalOpen(true);
  const handleCloseAuditModal = () => setIsAuditModalOpen(false);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1C1917] selection:bg-[#C84B31] selection:text-white relative">
      {/* Header Navbar */}
      <Navbar onOpenAudit={handleOpenAuditModal} />

      {/* Top Announcement Ticker */}
      <div className="pt-20">
        <Marquee onOpenAudit={handleOpenAuditModal} />
      </div>

      {/* Hero Section with Designer Typography */}
      <Hero onOpenAudit={handleOpenAuditModal} />

      {/* High-Contrast Dark Stats Banner */}
      <StatsBar />

      {/* Technology & Integrations Marquee Strip */}
      <LogoStrip />

      {/* Core Engineering Services Cards Showcase */}
      <PlatformTabs />

      {/* Proven Engineering Case Studies Portfolio */}
      <CaseStudiesSection />

      {/* The Ecombulls 5-Pillar Advantage Matrix */}
      <WhyUsSection />

      {/* 3-Step Process Timeline */}
      <HowItWorks onOpenAudit={handleOpenAuditModal} />

      {/* Founder Profile — Mudasir Kamal */}
      <FounderSection />

      {/* Lazy-Loaded Testimonials Carousel */}
      <DynamicTestimonials />

      {/* Traditional Development vs Ecombulls AI System Comparison */}
      <ComparisonSection />

      {/* Pricing Support Plans & Billing Toggle */}
      <PricingTiers onOpenAudit={handleOpenAuditModal} />

      {/* Security & Uptime Trust Section */}
      <TrustSection />

      {/* Frequently Asked Questions */}
      <FAQAccordion />

      {/* High-Conversion Bottom Banner */}
      <FinalCTA onOpenAudit={handleOpenAuditModal} />

      {/* Site Footer */}
      <Footer />

      {/* Lead & Project Discussion Form Modal */}
      <AuditModal isOpen={isAuditModalOpen} onClose={handleCloseAuditModal} />
    </main>
  );
}
