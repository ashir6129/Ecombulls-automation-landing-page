"use client";

import React from "react";
import { AmazonLogo, EBayLogo, WalmartLogo, TikTokShopLogo, ShopifyLogo } from "./PlatformLogos";

export const LogoStrip: React.FC = () => {
  const platforms = [
    {
      name: "Amazon Marketplace",
      logo: <AmazonLogo className="h-6 w-auto text-white" />,
      badge: "SP-API v2",
    },
    {
      name: "eBay Motors & Retail",
      logo: <EBayLogo className="h-6 w-auto" />,
      badge: "Fulfillment API",
    },
    {
      name: "Walmart Marketplace",
      logo: <WalmartLogo className="h-6 w-auto text-white" />,
      badge: "WFS Engine",
    },
    {
      name: "TikTok Shop",
      logo: <TikTokShopLogo className="h-6 w-auto text-white" />,
      badge: "Viral Live Sync",
    },
    {
      name: "Shopify Plus",
      logo: <ShopifyLogo className="h-6 w-auto text-white" />,
      badge: "GraphQL API",
    },
  ];

  return (
    <section className="py-12 border-b border-[#0F3D35] bg-[#121212] select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-xs font-mono tracking-widest text-text-muted uppercase">
          DEEP NATIVE INTEGRATION ACROSS LEADING MARKETPLACES
        </p>
      </div>

      <div className="relative w-full marquee-mask">
        <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] gap-16 items-center">
          {[...platforms, ...platforms, ...platforms].map((platform, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-white cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
            >
              {platform.logo}
              <span className="px-2 py-0.5 rounded bg-[#0A0A0A] border border-[#0F3D35] text-[10px] font-mono text-text-muted">
                {platform.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
