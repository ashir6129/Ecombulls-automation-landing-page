"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, FolderGit2, CheckCircle2 } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  category: "logistics" | "ecommerce" | "ai_saas" | "integrations";
  categoryLabel: string;
  goal: string;
  impact: string;
  techStack: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "tms",
    title: "Custom Transportation Management System for Multi-Carrier Operations",
    category: "logistics",
    categoryLabel: "3PL & Logistics",
    goal: "A custom transportation management system that helps logistics teams manage multi-carrier shipping, streamline shipment execution, and improve operational control.",
    impact: "+40% Operational Efficiency & Zero Carrier Dispatch Delays",
    techStack: ["Node.js", "GraphQL", "PostgreSQL", "Multi-Carrier API"],
  },
  {
    id: "sales-inventory",
    title: "E-Commerce Sales and Inventory Automation Platform",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    goal: "An e-commerce automation platform for managing supplier imports, marketplace exports, pricing rules, product data, and real-time order synchronization.",
    impact: "10,000+ Orders/Min Sync & 0% Oversell Risk Guaranteed",
    techStack: ["Laravel", "Redis Queue", "Amazon SP-API", "Shopify API"],
  },
  {
    id: "wms-middleware",
    title: "Custom WMS Integration Middleware for eCommerce Platforms",
    category: "logistics",
    categoryLabel: "3PL & Warehouse",
    goal: "A custom WMS integration middleware platform that synchronizes warehouse, inventory, order, and store data seamlessly across connected systems.",
    impact: "Sub-Second Warehouse Stock Sync Across 50+ Nodes",
    techStack: ["TypeScript", "Webhooks", "ERP Connectors", "Docker"],
  },
  {
    id: "marketplace-rebuild",
    title: "E-Commerce Marketplace Platform Migration & High-Load Rebuild",
    category: "ecommerce",
    categoryLabel: "Marketplace",
    goal: "An e-commerce marketplace rebuild that migrated a legacy platform to modern architecture while preserving business logic, admin settings, and shopping workflows.",
    impact: "3.5x Faster Page Load Speed & 100% Data Preservation",
    techStack: ["React", "Laravel", "MySQL Cluster", "Tailwind CSS"],
  },
  {
    id: "ugc-platform",
    title: "UGC Video Production & Creator Campaign Platform",
    category: "ai_saas",
    categoryLabel: "Digital Media & SaaS",
    goal: "A UGC video production platform that manages brand campaigns, creator collaboration, video editing workflows, and production visibility in one structured system.",
    impact: "Automated Creator Payouts & 5x Faster Campaign Delivery",
    techStack: ["Next.js", "FFmpeg Engine", "Stripe Connect", "AWS S3"],
  },
  {
    id: "price-comparison",
    title: "High-Volume Price Comparison & Feed Aggregation Platform",
    category: "integrations",
    categoryLabel: "Data & Feed Integration",
    goal: "A product price comparison platform connecting shopper-facing product comparison with controlled feed imports, catalog management, and live pricing data.",
    impact: "Processing 5M+ Daily Product Price Updates Automatically",
    techStack: ["Python Scraper", "Elasticsearch", "Next.js", "Redis"],
  },
];

export const CaseStudiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredStudies =
    activeFilter === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((item) => item.category === activeFilter);

  return (
    <section id="case-studies" className="py-24 bg-[#FAF8F5] relative overflow-hidden border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C84B31]/10 border border-[#C84B31]/25 text-[#C84B31] text-xs font-bold font-mono">
            <FolderGit2 className="w-3.5 h-3.5 text-[#C84B31]" />
            <span>Proven Engineering Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#1C1917] tracking-tight leading-tight">
            Turning Technical Challenges into <span className="text-gradient-coral">High-Impact Software</span>
          </h2>
          <p className="text-[#57534E] text-base sm:text-lg font-normal">
            Explore our track record of custom web solutions, logistics management platforms, and high-load automation systems.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {[
            { id: "all", label: "All Projects" },
            { id: "logistics", label: "3PL & Logistics" },
            { id: "ecommerce", label: "E-Commerce Platforms" },
            { id: "ai_saas", label: "AI & SaaS Systems" },
            { id: "integrations", label: "API & Data Integrations" },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? "bg-[#C84B31] text-white shadow-md"
                    : "bg-white text-[#1C1917] border border-[#E7E5E4] hover:border-[#C84B31]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => (
              <motion.div
                layout
                key={study.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-[#E7E5E4] rounded-3xl p-7 flex flex-col justify-between card-shadow-hover relative overflow-hidden group glow-card"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E7E5E4] text-[#C84B31] font-mono text-[11px] font-bold">
                      {study.categoryLabel}
                    </span>
                    <span className="w-9 h-9 rounded-xl bg-[#FAF8F5] flex items-center justify-center text-[#1C1917] group-hover:bg-[#C84B31] group-hover:text-white transition-colors shadow-2xs">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-[#1C1917] leading-snug group-hover:text-[#C84B31] transition-colors">
                    {study.title}
                  </h3>

                  <div>
                    <h4 className="text-[11px] font-mono font-bold text-[#78716C] uppercase tracking-wider mb-1">Project Objective</h4>
                    <p className="text-xs text-[#57534E] leading-relaxed font-normal">{study.goal}</p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E7E5E4] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50/80 p-3 rounded-2xl border border-emerald-200 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>{study.impact}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {study.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#FAF8F5] text-[10px] font-mono text-[#57534E] border border-[#E7E5E4] font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
