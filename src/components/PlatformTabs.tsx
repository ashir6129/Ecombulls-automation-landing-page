"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowUpRight, Layers, FileSpreadsheet, LayoutDashboard, MailCheck, Bot, Users, ShoppingBag } from "lucide-react";

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

const AGENCY_SERVICES: ServiceData[] = [
  {
    id: "sheets-automation",
    name: "Automated Google Sheets & ERP Pipelines",
    badge: "No More Manual CSVs",
    subtitle: "Real-Time Sync for eBay, Amazon & Storefront Data into Sheets",
    syncRate: "< 60 Seconds",
    icon: <FileSpreadsheet className="w-6 h-6 text-[#C84B31]" />,
    description:
      "Automatically stream sales, inventory subtractions, customer orders, and profit margins directly into Google Sheets and agency ERPs without manual CSV exports.",
    features: [
      "Automated live feed from eBay, Amazon, Walmart & Shopify into Google Sheets",
      "Instant inventory deduction and low-stock alert triggers across accounts",
      "Automated net profit calculation, fee breakdown, and financial summaries",
      "Zero manual data entry errors—saves 60+ account manager hours per month",
    ],
    specs: [
      { label: "Data Latency", value: "Real-Time Hook" },
      { label: "Sheets Integration", value: "Native Google Sheets API" },
      { label: "Accounts Supported", value: "Unlimited Client Stores" },
    ],
  },
  {
    id: "master-dashboard",
    name: "Unified Multi-Client Master Dashboard",
    badge: "Central Command Center",
    subtitle: "Monitor 10 to 15+ Client Accounts on a Single Screen",
    syncRate: "Microsecond Live Feed",
    icon: <LayoutDashboard className="w-6 h-6 text-[#C84B31]" />,
    description:
      "Single-screen command portal giving agency executives instant visibility into sales GMV, stock-out risks, Buy Box rates, and fulfillment status across all client stores.",
    features: [
      "Single-screen unified view of 10, 15, or 30+ client marketplace accounts",
      "Real-time Buy Box suppression warnings and stock-out alerts",
      "Unified order velocity chart and revenue forecasting across all channels",
      "Multi-user permission levels for account managers and agency leadership",
    ],
    specs: [
      { label: "Multi-Client Capacity", value: "15+ Stores on 1 Screen" },
      { label: "Alert Latency", value: "Instant SMS / Slack" },
      { label: "Visual Dashboards", value: "Real-Time KPI Charts" },
    ],
  },
  {
    id: "invoicing-billing",
    name: "Automated Invoicing & Payment Workflows",
    badge: "Billing Automation",
    subtitle: "Auto-Generated Invoices & Automated Client Billing Emails",
    syncRate: "Automated Schedule",
    icon: <MailCheck className="w-6 h-6 text-[#C84B31]" />,
    description:
      "Automate client fee calculations, generate professional PDF invoices, and dispatch automated payment collection emails with zero manual effort.",
    features: [
      "Automated management fee calculation based on percentage of GMV or retainer",
      "Auto-generated branded PDF invoices generated and emailed to agency clients",
      "Automated payment reminder workflows for outstanding client balances",
      "Seamless synchronization with QuickBooks, Xero, and Stripe Billing",
    ],
    specs: [
      { label: "Billing Processing", value: "< 5 Minutes Monthly" },
      { label: "Payment Systems", value: "Stripe, Xero, QuickBooks" },
      { label: "Invoice Accuracy", value: "100% Automated Math" },
    ],
  },
  {
    id: "multi-store-ops",
    name: "Multi-Store Agency Portfolio Sync",
    badge: "Store Ops Automation",
    subtitle: "Automate Inventory, Repricing & Fulfillment Across Stores",
    syncRate: "Event-Driven Lock",
    icon: <ShoppingBag className="w-6 h-6 text-[#C84B31]" />,
    description:
      "Automate store operations across Amazon, eBay, Walmart, TikTok Shop, and Shopify with zero human latency and 0% stock-out suspension risk.",
    features: [
      "Real-time inventory locking across all client marketplaces simultaneously",
      "Dynamic Buy Box algorithmic repricing protecting client profit margins",
      "Automated order routing to FBA, WFS, or 3PL warehouse fulfillment",
      "Catalog distribution and multi-variant synchronization",
    ],
    specs: [
      { label: "Oversell Risk", value: "0.00% Guaranteed" },
      { label: "Platforms", value: "Amazon, eBay, Walmart, TikTok" },
      { label: "Order Dispatch", value: "Automated 3PL Switch" },
    ],
  },
  {
    id: "rag-chatbots",
    name: "E-Commerce RAG AI Chatbots & Agents",
    badge: "Autonomous Customer Support",
    subtitle: "RAG AI Assistants Trained on Product Catalogs & Orders",
    syncRate: "Sub-Second Inference",
    icon: <Bot className="w-6 h-6 text-[#C84B31]" />,
    description:
      "Custom Retrieval-Augmented Generation (RAG) AI chatbots trained on store databases, product specs, and order tracking to resolve client customer queries 24/7.",
    features: [
      "RAG AI trained directly on client store catalogs, FAQs, and shipping rules",
      "Real-time order lookup enabling AI bots to answer 'Where is my order?'",
      "Autonomous 24/7 customer support resolving 75%+ of tickets automatically",
      "Seamless escalation to human agents with full conversation context",
    ],
    specs: [
      { label: "AI Models", value: "Gemini, OpenAI RAG" },
      { label: "Resolution Rate", value: "75%+ Automated Resolution" },
      { label: "Channels", value: "Web, WhatsApp, Email, Zendesk" },
    ],
  },
  {
    id: "staff-ops",
    name: "Agency Staff & Workflow Automation",
    badge: "Internal Ops Engine",
    subtitle: "Automated Task Assignments & Weekly Client Reports",
    syncRate: "Automated Dispatch",
    icon: <Users className="w-6 h-6 text-[#C84B31]" />,
    description:
      "Automate internal agency task routing, track account manager productivity, and generate automated weekly performance reports for your clients.",
    features: [
      "Automated task creation when store issues occur (repricing alerts, low stock)",
      "Account manager performance tracking and workload distribution",
      "Automated weekly PDF/Email performance reports delivered to agency clients",
      "Centralized agency knowledge base and standardized SOP workflows",
    ],
    specs: [
      { label: "Client Reports", value: "100% Auto-Generated" },
      { label: "Internal Tasking", value: "Automated Event Triggers" },
      { label: "Capacity Boost", value: "3x Stores per Manager" },
    ],
  },
];

export const PlatformTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("sheets-automation");

  const currentService = AGENCY_SERVICES.find((s) => s.id === activeTab) || AGENCY_SERVICES[0];

  return (
    <section id="services" className="py-24 bg-[#FAF8F5] relative overflow-hidden border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C84B31]/10 border border-[#C84B31]/25 text-[#C84B31] text-xs font-bold font-mono">
            <Layers className="w-3.5 h-3.5 text-[#C84B31]" />
            <span>Core Agency Automation Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#1C1917] tracking-tight leading-tight">
            Automating E-Commerce Agencies to <span className="text-gradient-coral">Run &amp; Scale Effortlessly</span>
          </h2>
          <p className="text-[#57534E] text-base sm:text-lg font-normal">
            Eliminate manual CSV uploads, scattered dashboards, and billing chaos. Ecombulls automates your entire agency workflow from a single intelligent engine.
          </p>
        </div>

        {/* Sliding Tabs Navigation */}
        <div
          role="tablist"
          aria-label="Core Agency Automation Services"
          className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 p-2 bg-white border border-[#E7E5E4] rounded-2xl mb-12 max-w-5xl mx-auto shadow-sm"
        >
          {AGENCY_SERVICES.map((tab) => {
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
                  AGENCY AUTOMATION ADVANTAGES
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
                  <span className="text-sm font-bold text-[#1C1917] font-display">Agency Impact Metrics</span>
                  <span className="text-[10px] font-mono text-white bg-[#C84B31] px-2.5 py-0.5 rounded-full font-bold">
                    VERIFIED ENGINE SLA
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
                  <span>Automate Your Agency Ops</span>
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
