"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, ArrowUpRight, Cpu, Layers } from "lucide-react";
import { AmazonLogo, EBayLogo, WalmartLogo, TikTokShopLogo, ShopifyLogo } from "./PlatformLogos";

interface PlatformData {
  id: string;
  name: string;
  logo: React.ReactNode;
  badge: string;
  subtitle: string;
  syncRate: string;
  features: string[];
  specs: { label: string; value: string }[];
  description: string;
}

const PLATFORMS_DATA: PlatformData[] = [
  {
    id: "amazon",
    name: "Amazon Marketplace",
    logo: <AmazonLogo className="h-5 w-auto" />,
    badge: "SP-API Enterprise",
    subtitle: "Automated FBA/FBM Inventory, Buy Box Repricing, & Order Dispatch",
    syncRate: "< 60 Seconds",
    description:
      "Direct integration with Amazon Selling Partner API (SP-API v2). Eliminates stockouts across FBA fulfillment centers and merchant-fulfilled channels simultaneously.",
    features: [
      "Real-time FBA & FBM inventory synchronization with zero oversell risk",
      "Dynamic Buy Box algorithmic repricer with profit margin safeguards",
      "Automated customer messaging and inbound shipment tracking",
      "Multi-region support (NA, EU, APAC) with unified agency dashboard",
    ],
    specs: [
      { label: "API Rate Limits", value: "Burst Handled via Queue" },
      { label: "Oversell Risk", value: "0.00% Guaranteed" },
      { label: "Order Routing", value: "FBA + 3PL Auto-Switch" },
    ],
  },
  {
    id: "ebay",
    name: "eBay Motors & Retail",
    logo: <EBayLogo className="h-5 w-auto" />,
    badge: "Fulfillment & Catalog API",
    subtitle: "High-Volume Multi-Quantity Listing & Multi-Warehouse Sync",
    syncRate: "Real-Time Hook",
    description:
      "Engineered specifically for high-sku agency portfolios managing parts, motors, and consumer goods across eBay's global marketplaces.",
    features: [
      "Automated stock subtraction upon sale across all connected storefronts",
      "Bulk price updates and active listing auto-revising",
      "Compatibility & fitment data synchronization for automotive SKUs",
      "Order tracking dispatch and automated positive feedback trigger",
    ],
    specs: [
      { label: "Fitment Sync", value: "Automated K-Type & ACES" },
      { label: "Listing Revise", value: "Sub-Second Bulk Execution" },
      { label: "Inventory Lock", value: "Instant Allocation" },
    ],
  },
  {
    id: "walmart",
    name: "Walmart Marketplace",
    logo: <WalmartLogo className="h-5 w-auto" />,
    badge: "Walmart Developer API",
    subtitle: "WFS Fulfillment Integration & Two-Day Shipping Badge Automation",
    syncRate: "< 2 Minutes",
    description:
      "Automates Walmart Marketplace operations, keeping inventory perfectly aligned with WFS (Walmart Fulfillment Services) and seller-fulfilled nodes.",
    features: [
      "Bi-directional stock sync between Walmart & main warehouse ERP",
      "WFS inventory replenishment alerts and automated PO generation",
      "Price match protection preventing competitive listing suppression",
      "Unified order ingestion into agency master fulfillment queue",
    ],
    specs: [
      { label: "WFS Integration", value: "Direct API Ingestion" },
      { label: "Buy Box Rate", value: "+34% Average Lift" },
      { label: "Suppression Guard", value: "Active 24/7 Monitoring" },
    ],
  },
  {
    id: "tiktok",
    name: "TikTok Shop",
    logo: <TikTokShopLogo className="h-5 w-auto" />,
    badge: "Live Stream Flash-Sync",
    subtitle: "Handling Sudden Viral Traffic Spikes & Creator Affiliate Fulfillment",
    syncRate: "Microsecond Event-Driven",
    description:
      "Built for the hyper-unpredictable traffic spikes of TikTok Shop live streams and viral creator affiliate campaigns.",
    features: [
      "Microsecond inventory locking during viral live-stream sales surges",
      "Automated creator sample distribution & affiliate order tracking",
      "Instant routing to high-velocity 3PL fulfillment partners",
      "Auto-pause ads and listings when stock drops below safety buffer",
    ],
    specs: [
      { label: "Spike Resilience", value: "10,000 orders/min tested" },
      { label: "Affiliate Auto-Sync", value: "Real-Time Tracking" },
      { label: "Safety Stock Buffer", value: "Dynamic AI Buffer" },
    ],
  },
  {
    id: "shopify",
    name: "Shopify & Shopify Plus",
    logo: <ShopifyLogo className="h-5 w-auto" />,
    badge: "GraphQL Admin API",
    subtitle: "Master Catalog Distribution & Multi-Location Inventory Engine",
    syncRate: "Instant Webhook Sync",
    description:
      "Serves as the central master repository or recipient endpoint for D2C brands expanding into wholesale and marketplace channels.",
    features: [
      "Multi-location inventory allocation across 50+ warehouse nodes",
      "Automated product variant creation and Metafields synchronization",
      "Custom B2B wholesale portal order routing and credit limits",
      "Seamless integration with Klaviyo, Gorgias, and agency ERPs",
    ],
    specs: [
      { label: "API Protocol", value: "GraphQL + Webhooks" },
      { label: "Multi-Location", value: "Unlimited Warehouses" },
      { label: "Metafields Sync", value: "Full Automation" },
    ],
  },
];

export const PlatformTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("amazon");

  const currentPlatform = PLATFORMS_DATA.find((p) => p.id === activeTab) || PLATFORMS_DATA[0];

  return (
    <section id="platforms" className="py-24 bg-[#FFF5B8] relative overflow-hidden border-b border-[#CCA25A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7E8A1] border border-[#CCA25A] text-[#2C200B] text-xs font-bold">
            <Layers className="w-3.5 h-3.5 text-[#CCA25A]" />
            <span>Multi-Channel Integration Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#2C200B] tracking-tight">
            Native AI Connectors Built for Every Major Marketplace
          </h2>
          <p className="text-[#3A2A0E] text-base font-medium">
            Eliminate manual CSV uploads, API rate limits, and stockout penalties. Ecombulls orchestrates your entire agency store portfolio from a single intelligent engine.
          </p>
        </div>

        {/* Sliding Tabs Navigation */}
        <div
          role="tablist"
          aria-label="E-commerce Supported Platforms"
          className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 p-1.5 bg-[#F7E8A1] border border-[#CCA25A] rounded-2xl mb-12 max-w-4xl mx-auto shadow-sm"
        >
          {PLATFORMS_DATA.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors z-10 flex items-center gap-2 ${
                  isActive ? "text-[#FFF5B8]" : "text-[#2C200B] hover:text-[#CCA25A]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-[#CCA25A] border border-[#2C200B] rounded-xl shadow-md -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <div className={isActive ? "text-[#FFF5B8]" : "text-[#2C200B]"}>
                  {tab.logo}
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab Panel Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPlatform.id}
            id={`panel-${currentPlatform.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${currentPlatform.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#F7E8A1] border-2 border-[#CCA25A] rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden text-[#2C200B]"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#CCA25A] text-[#FFF5B8] font-mono text-xs font-bold border border-[#2C200B]">
                  {currentPlatform.badge}
                </span>
                <span className="text-xs font-mono text-[#3A2A0E] flex items-center gap-1 font-bold">
                  <Zap className="w-3.5 h-3.5 text-[#CCA25A]" />
                  Sync Latency: <strong className="text-[#2C200B]">{currentPlatform.syncRate}</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#FFF5B8] border border-[#CCA25A] rounded-xl text-[#2C200B]">
                  {currentPlatform.logo}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#2C200B]">
                    {currentPlatform.name}
                  </h3>
                  <p className="text-[#3A2A0E] text-xs sm:text-sm font-semibold">{currentPlatform.subtitle}</p>
                </div>
              </div>

              <p className="text-[#2C200B] text-sm leading-relaxed font-medium">{currentPlatform.description}</p>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono tracking-widest text-[#2C200B] uppercase font-bold">
                  KEY AUTOMATION CAPABILITIES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentPlatform.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF5B8] border border-[#CCA25A] text-xs text-[#2C200B] font-medium"
                    >
                      <Check className="w-4 h-4 text-[#CCA25A] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#FFF5B8] border border-[#CCA25A] p-6 rounded-2xl space-y-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#CCA25A] mb-6">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-[#CCA25A]" />
                    <span className="text-sm font-bold text-[#2C200B] font-heading">Engine Benchmarks</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#FFF5B8] bg-[#CCA25A] px-2 py-0.5 rounded border border-[#2C200B] font-bold">
                    LIVE API Status
                  </span>
                </div>

                <div className="space-y-4">
                  {currentPlatform.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-2 border-b border-[#CCA25A]/30">
                      <span className="text-[#3A2A0E] font-bold">{spec.label}</span>
                      <span className="font-mono font-bold text-[#2C200B] bg-[#F7E8A1] px-2.5 py-1 rounded border border-[#CCA25A]">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#CCA25A] space-y-3">
                <div className="flex items-center justify-between text-xs text-[#3A2A0E]">
                  <span className="font-medium">API SLA Uptime:</span>
                  <span className="text-[#2C200B] font-mono font-bold">99.98% Guaranteed</span>
                </div>
                <button
                  onClick={() => {
                    const auditBtn = document.querySelector("button");
                    if (auditBtn) auditBtn.click();
                  }}
                  className="w-full py-3 rounded-xl bg-[#CCA25A] hover:bg-[#A8813A] border border-[#2C200B] text-[#FFF5B8] font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Request {currentPlatform.name} Blueprint</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FFF5B8]" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
