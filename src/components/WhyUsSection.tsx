"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Code2, ShieldCheck, FileText, KeyRound, Check } from "lucide-react";

interface Pillar {
  id: string;
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  points: { title: string; desc: string }[];
}

const PILLARS: Pillar[] = [
  {
    id: "communication",
    title: "Effective Communication",
    subtitle: "Transparent project management & structured delivery feedback loops:",
    icon: <MessageSquare className="w-5 h-5 text-[#C84B31]" />,
    points: [
      {
        title: "Dedicated PM & Business Analyst",
        desc: "You communicate directly with experienced technical PMs and analysts who translate business logic into code requirements.",
      },
      {
        title: "Bi-Weekly Deliverables & Sprint Demos",
        desc: "We provide weekly status reports and ship working code increments every 2 weeks for continuous review.",
      },
      {
        title: "Hands-On Onboarding & Guidance",
        desc: "We don't just deliver; we teach your team new system features and actively gather feedback.",
      },
      {
        title: "Two-Way Vision Synchronization",
        desc: "Constant alignment ensures your operational goals remain front and center throughout development.",
      },
    ],
  },
  {
    id: "development",
    title: "Full-Cycle Engineering",
    subtitle: "From business discovery to rigorous automated QA testing:",
    icon: <Code2 className="w-5 h-5 text-[#C84B31]" />,
    points: [
      {
        title: "In-Depth Business Analysis",
        desc: "We deeply analyze missing operational logic before writing a single line of code to optimize workflow architecture.",
      },
      {
        title: "Technical Discovery & Prototyping",
        desc: "Comprehensive specification and visual modeling to build a reliable tool tailored precisely to your needs.",
      },
      {
        title: "On-Time Engineering Precision",
        desc: "Our senior full-stack engineering team builds scalable code guaranteed to meet agreed sprint milestones.",
      },
      {
        title: "Rigorously Tested Deliveries",
        desc: "Every release undergoes strict internal QA so your team doesn't waste time troubleshooting basic bugs.",
      },
    ],
  },
  {
    id: "warranty",
    title: "Warranty & Support",
    subtitle: "Zero-risk post-launch guarantee & long-term maintenance:",
    icon: <ShieldCheck className="w-5 h-5 text-[#C84B31]" />,
    points: [
      {
        title: "30-Day Free Post-Launch Warranty",
        desc: "Enjoy a full 30 days after deployment to test functionality in production. All adjustments are made 100% free.",
      },
      {
        title: "Long-Term System Maintenance",
        desc: "We stay by your side post-launch to provide continuous DevOps monitoring, security updates, and new feature add-ons.",
      },
    ],
  },
  {
    id: "documentation",
    title: "Clear Documentation",
    subtitle: "Comprehensive, plain-English system guides and architectural reference:",
    icon: <FileText className="w-5 h-5 text-[#C84B31]" />,
    points: [
      {
        title: "Complete System Specifications",
        desc: "Every feature, API endpoint, and database schema is fully documented so you retain complete architectural clarity.",
      },
      {
        title: "Plain-English User Manuals",
        desc: "No esoteric jargon—we write clear, accessible guides so non-technical team members can operate the software easily.",
      },
    ],
  },
  {
    id: "ownership",
    title: "100% Code Ownership",
    subtitle: "Complete repository access, server root control, and compliance:",
    icon: <KeyRound className="w-5 h-5 text-[#C84B31]" />,
    points: [
      {
        title: "Direct Client Repository Delivery",
        desc: "All source code is committed directly to your own Git repository after every completed sprint.",
      },
      {
        title: "Full Server & API Credentials",
        desc: "We configure your private cloud infrastructure (AWS/DigitalOcean/Google Cloud) and transfer full root access upon launch.",
      },
      {
        title: "Enterprise Regulatory Compliance",
        desc: "Our code adheres strictly to modern security protocols, encryption standards, and privacy regulations.",
      },
    ],
  },
];

export const WhyUsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("communication");

  const currentPillar = PILLARS.find((p) => p.id === activeTab) || PILLARS[0];

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C84B31]/10 border border-[#C84B31]/20 text-[#C84B31] text-xs font-bold font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C84B31]" />
            <span>The Ecombulls Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#1C1917] tracking-tight">
            Why High-Growth Companies <span className="text-gradient-coral">Choose Ecombulls</span>
          </h2>
          <p className="text-[#57534E] text-base sm:text-lg font-normal">
            We combine high-level software engineering with transparent communication and total client code ownership.
          </p>
        </div>

        {/* Interactive Pillar Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Navigation Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {PILLARS.map((pillar) => {
              const isActive = activeTab === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`p-4 rounded-2xl text-left transition-all flex items-center gap-4 ${
                    isActive
                      ? "bg-[#FAF8F5] border-2 border-[#C84B31] shadow-md"
                      : "bg-white border border-[#E7E5E4] hover:border-[#C84B31]/50 text-[#57534E]"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive ? "bg-[#C84B31] text-white" : "bg-[#FAF8F5] text-[#1C1917]"
                    }`}
                  >
                    {isActive ? React.cloneElement(pillar.icon as React.ReactElement, { className: "w-5 h-5 text-white" }) : pillar.icon}
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold font-heading ${isActive ? "text-[#1C1917]" : "text-[#57534E]"}`}>
                      {pillar.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Details Card */}
          <div className="lg:col-span-8 bg-[#FAF8F5] border border-[#E7E5E4] rounded-3xl p-8 sm:p-10 shadow-lg min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPillar.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 pb-4 border-b border-[#E7E5E4]">
                  <div className="p-3 rounded-2xl bg-[#C84B31] text-white">{currentPillar.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-[#1C1917]">{currentPillar.title}</h3>
                    <p className="text-xs text-[#57534E] font-medium">{currentPillar.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {currentPillar.points.map((pt, idx) => (
                    <div key={idx} className="bg-white border border-[#E7E5E4] rounded-2xl p-4 space-y-1.5 shadow-xs">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#1C1917]">
                        <Check className="w-4 h-4 text-[#C84B31] shrink-0" />
                        <span>{pt.title}</span>
                      </div>
                      <p className="text-xs text-[#57534E] leading-relaxed pl-6">{pt.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
