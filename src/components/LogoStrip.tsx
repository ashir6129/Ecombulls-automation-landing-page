"use client";

import React from "react";
import { AmazonLogo, EBayLogo, WalmartLogo, TikTokShopLogo, ShopifyLogo } from "./PlatformLogos";

export const LogoStrip: React.FC = () => {
  const integrations = [
    { name: "Amazon Marketplace", logo: <AmazonLogo className="h-5 w-auto text-[#1C1917]" />, badge: "SP-API v2" },
    { name: "Shopify Plus", logo: <ShopifyLogo className="h-5 w-auto text-[#1C1917]" />, badge: "GraphQL Admin" },
    { name: "Walmart WFS", logo: <WalmartLogo className="h-5 w-auto text-[#1C1917]" />, badge: "WFS API" },
    { name: "eBay Motors", logo: <EBayLogo className="h-5 w-auto" />, badge: "Fulfillment API" },
    { name: "TikTok Shop", logo: <TikTokShopLogo className="h-5 w-auto text-[#1C1917]" />, badge: "Live Sync" },
    { name: "Google Cloud", badge: "Cloud Infra" },
    { name: "AWS Services", badge: "Serverless" },
    { name: "Stripe & PayPal", badge: "Payment Gateway" },
    { name: "FedEx & UPS", badge: "Carrier Logistics" },
    { name: "Oracle ERP", badge: "ERP Middleware" },
  ];

  return (
    <section className="py-12 border-b border-[#E7E5E4] bg-[#FAF8F5] select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <p className="text-xs font-mono tracking-widest text-[#C84B31] uppercase font-bold">
          INTEGRATED WITH LEADING CLOUD, E-COMMERCE &amp; LOGISTICS INFRASTRUCTURE
        </p>
      </div>

      <div className="relative w-full marquee-mask">
        <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] gap-12 items-center">
          {[...integrations, ...integrations, ...integrations].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-[#1C1917] cursor-pointer font-bold opacity-80 hover:opacity-100 transition-opacity bg-white border border-[#E7E5E4] px-4 py-2 rounded-2xl shadow-xs"
            >
              {item.logo ? item.logo : <span className="text-xs font-heading font-extrabold text-[#1C1917]">{item.name}</span>}
              <span className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E7E5E4] text-[10px] font-mono text-[#C84B31] font-bold">
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
