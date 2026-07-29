"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowUpRight, Layers, Code, Truck, Workflow, ShoppingBag, Network, Database, Bot } from "lucide-react";

interface ServiceData {
  id: string;
  name: string;
  badge: string;
  subtitle: string;
  syncRate: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
}

const SERVICES_DATA: ServiceData[] = [
  {
    id: "web-dev",
    name: "Custom Web Development",
    badge: "Full-Stack Architecture",
    subtitle: "High-Performance Next.js, React, Node & Laravel Solutions",
    syncRate: "< 100ms Response",
    icon: <Code className="w-6 h-6 text-[#C84B31]" />,
    description:
      "Achieve your business goals with custom web engineering tailored for speed, scalability, clean code structure, and seamless user experience.",
    features: [
      "Custom responsive Web & SPA/PWA architecture with Next.js & React",
      "High-concurrency backend services built on Node.js and Laravel",
      "Clean API design, SEO-optimized markup, and lightning-fast LCP scores",
      "Comprehensive unit, integration, and security testing before launch",
    ],
    specs: [
      { label: "Core Web Vitals", value: "95+ Guaranteed Score" },
      { label: "Architecture", value: "Headless & Microservices" },
      { label: "Code Quality", value: "Strict Type Safety" },
    ],
  },
  {
    id: "logistics",
    name: "Logistics Solutions Development",
    badge: "Custom TMS & 3PL Engine",
    subtitle: "Streamline Shipment Execution & Multi-Carrier Operations",
    syncRate: "Real-Time Tracking",
    icon: <Truck className="w-6 h-6 text-[#C84B31]" />,
    description:
      "Optimize your logistics operations with tailored TMS, multi-warehouse routing, carrier API integrations, and automated cargo tools.",
    features: [
      "Multi-carrier shipping execution (FedEx, UPS, DHL, Canada Post)",
      "Automated warehouse order routing based on stock proximity and rate optimization",
      "Real-time shipment tracking Webhooks and customer notifications",
      "Custom WMS middleware syncing warehouse nodes with client storefronts",
    ],
    specs: [
      { label: "Carrier APIs", value: "20+ Native Integrations" },
      { label: "Routing Latency", value: "Sub-Second Dispatch" },
      { label: "WMS Middleware", value: "Bidirectional Sync" },
    ],
  },
  {
    id: "process-automation",
    name: "Business Process Automation",
    badge: "Workflow Optimization",
    subtitle: "Eliminate Manual Repetitive Tasks & Human Error",
    syncRate: "Event-Driven Hooks",
    icon: <Workflow className="w-6 h-6 text-[#C84B31]" />,
    description:
      "Maximize efficiency by replacing manual spreadsheet data entry and repetitive admin workflows with automated software routines.",
    features: [
      "Automated CSV/Excel data ingestion, parsing, and cloud database updates",
      "Scheduled background cron jobs and error alert reporting",
      "Automated document processing, invoicing, and email notifications",
      "Departmental workflow routing saving up to 80 hours per month",
    ],
    specs: [
      { label: "Task Execution", value: "24/7 Automated Queue" },
      { label: "Error Reduction", value: "99.9% Operational Accuracy" },
      { label: "Time Savings", value: "80+ Hrs/Month Average" },
    ],
  },
  {
    id: "ecommerce-auto",
    name: "E-Commerce Automation",
    badge: "Multi-Store Sync Engine",
    subtitle: "Master Catalog Distribution & Stock-Lock Protection",
    syncRate: "< 60 Seconds",
    icon: <ShoppingBag className="w-6 h-6 text-[#C84B31]" />,
    description:
      "Connect marketplace storefronts (Amazon, eBay, Walmart, TikTok Shop, Shopify) with automated stock locking, pricing rules, and order dispatch.",
    features: [
      "Multi-channel stock locking preventing oversells during viral sales surges",
      "Dynamic repricing rules with minimum/maximum profit margin safeguards",
      "Supplier feed imports (XML, JSON, CSV) mapped to store catalogs",
      "Automated order routing directly to 3PL fulfillment centers",
    ],
    specs: [
      { label: "Oversell Risk", value: "0.00% Guaranteed" },
      { label: "Platform APIs", value: "Amazon, eBay, Walmart, TikTok" },
      { label: "Catalog Scale", value: "100k+ SKUs Supported" },
    ],
  },
  {
    id: "integrations",
    name: "Complex API Integrations",
    badge: "API Middleware & Hooks",
    subtitle: "Bridge Disparate Software Systems & Cloud Services",
    syncRate: "Instant Webhook",
    icon: <Network className="w-6 h-6 text-[#C84B31]" />,
    description:
      "Unify isolated software platforms through robust REST & GraphQL API integrations, message queues, and enterprise webhooks.",
    features: [
      "Custom RESTful & GraphQL API middleware development",
      "Third-party SaaS API connections (Stripe, PayPal, Klaviyo, Gorgias)",
      "High-throughput rate limit handling with automatic retry queues",
      "Data transformation pipelines connecting legacy ERPs to modern web apps",
    ],
    specs: [
      { label: "Protocol Support", value: "REST, GraphQL, gRPC" },
      { label: "Rate Limit Guard", value: "Exponential Backoff Queue" },
      { label: "Uptime SLA", value: "99.98% Monitored" },
    ],
  },
  {
    id: "crm-erp",
    name: "CRM and ERP Development",
    badge: "Custom Management Portal",
    subtitle: "Tailored Internal Operations & Customer Intelligence",
    syncRate: "Real-Time DB",
    icon: <Database className="w-6 h-6 text-[#C84B31]" />,
    description:
      "Replace rigid off-the-shelf software with intuitive custom CRM/ERP platforms designed specifically around your operational workflow.",
    features: [
      "Custom client relationship pipelines and interaction tracking",
      "Multi-level role-based access control (RBAC) and security audit logs",
      "Financial reporting, inventory accounting, and invoice generation",
      "Custom analytics dashboards with real-time KPI visualization",
    ],
    specs: [
      { label: "Access Control", value: "Granular RBAC Roles" },
      { label: "Reporting", value: "Real-Time KPI Charts" },
      { label: "Customization", value: "100% Tailored Workflow" },
    ],
  },
  {
    id: "ai-solutions",
    name: "AI Solution Development",
    badge: "AI & Machine Learning",
    subtitle: "Custom AI Agents, Intelligent Bots, & LLM Workflows",
    syncRate: "Sub-Second Inference",
    icon: <Bot className="w-6 h-6 text-[#C84B31]" />,
    description:
      "Build custom AI solutions—from automated customer support agents to intelligent data extraction and predictive analytics engines.",
    features: [
      "Custom LLM fine-tuning, RAG knowledge base integration, and AI agents",
      "Automated document analysis, transcriptions, and OCR data extraction",
      "Predictive demand forecasting for inventory and sales trends",
      "Smart chatbot assistants integrated directly into your web applications",
    ],
    specs: [
      { label: "AI Models", value: "Gemini, OpenAI, Llama 3" },
      { label: "RAG Engine", value: "Vector DB Search" },
      { label: "Automation", value: "Autonomous Agent Actions" },
    ],
  },
];

export const PlatformTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("web-dev");

  const currentService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-24 bg-[#FAF8F5] relative overflow-hidden border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C84B31]/10 border border-[#C84B31]/25 text-[#C84B31] text-xs font-bold font-mono">
            <Layers className="w-3.5 h-3.5 text-[#C84B31]" />
            <span>Comprehensive Technology Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#1C1917] tracking-tight leading-tight">
            Engineering Solutions Tailored for <span className="text-gradient-coral">Your Business Growth</span>
          </h2>
          <p className="text-[#57534E] text-base sm:text-lg font-normal">
            Whether launching a new digital platform or automating complex backend logistics, Ecombulls delivers fast, scalable software.
          </p>
        </div>

        {/* Sliding Tabs Navigation */}
        <div
          role="tablist"
          aria-label="Ecombulls Core Engineering Services"
          className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 p-2 bg-white border border-[#E7E5E4] rounded-2xl mb-12 max-w-5xl mx-auto shadow-sm"
        >
          {SERVICES_DATA.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors z-10 flex items-center gap-2 ${
                  isActive ? "text-white" : "text-[#1C1917] hover:text-[#C84B31]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-[#C84B31] rounded-xl shadow-md -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panel Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.id}
            id={`panel-${currentService.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${currentService.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-[#E7E5E4] rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden text-[#1C1917] glow-card"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-[#C84B31] text-white font-mono text-xs font-bold shadow-xs">
                  {currentService.badge}
                </span>
                <span className="text-xs font-mono text-[#57534E] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E7E5E4] font-bold">
                  Latency: <strong className="text-[#1C1917]">{currentService.syncRate}</strong>
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#C84B31]/10 border border-[#C84B31]/20 flex items-center justify-center text-[#C84B31] shrink-0 shadow-xs">
                  {currentService.icon}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#1C1917]">
                    {currentService.name}
                  </h3>
                  <p className="text-[#57534E] text-xs sm:text-sm font-medium">{currentService.subtitle}</p>
                </div>
              </div>

              <p className="text-[#57534E] text-sm sm:text-base leading-relaxed font-normal">{currentService.description}</p>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono tracking-widest text-[#C84B31] uppercase font-bold">
                  KEY AUTOMATION CAPABILITIES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentService.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E7E5E4] text-xs text-[#1C1917] font-medium shadow-xs"
                    >
                      <Check className="w-4 h-4 text-[#C84B31] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column Technical Specs */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#FAF8F5] border border-[#E7E5E4] p-6 sm:p-8 rounded-2xl space-y-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E7E5E4] mb-6">
                  <span className="text-sm font-bold text-[#1C1917] font-display">Technical Benchmarks</span>
                  <span className="text-[10px] font-mono text-white bg-[#C84B31] px-2.5 py-0.5 rounded-full font-bold">
                    PRODUCTION GUARANTEED
                  </span>
                </div>

                <div className="space-y-4">
                  {currentService.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-2 border-b border-[#E7E5E4]">
                      <span className="text-[#57534E] font-medium">{spec.label}</span>
                      <span className="font-mono font-bold text-[#1C1917] bg-white px-2.5 py-1 rounded-lg border border-[#E7E5E4] shadow-2xs">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E7E5E4] space-y-3">
                <button
                  onClick={() => {
                    const auditBtn = document.querySelector("button");
                    if (auditBtn) auditBtn.click();
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#C84B31] hover:bg-[#B03D25] text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <span>Request {currentService.name} Proposal</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
