"use client";

import React from "react";
import { AmazonLogo, EBayLogo, WalmartLogo, TikTokShopLogo, ShopifyLogo } from "./PlatformLogos";

export const LogoStrip: React.FC = () => {
  const platforms = [
    {
      name: "Amazon Marketplace",
      logo: <AmazonLogo className="h-6 w-auto text-[#2C200B]" />,
      badge: "SP-API v2",
    },
    {
      name: "eBay Motors & Retail",
      logo: <EBayLogo className="h-6 w-auto" />,
      badge: "Fulfillment API",
    },
    {
      name: "Walmart Marketplace",
      logo: <WalmartLogo className="h-6 w-auto text-[#2C200B]" />,
      badge: "WFS Engine",
    },
    {
      name: "TikTok Shop",
      logo: <TikTokShopLogo className="h-6 w-auto text-[#2C200B]" />,
      badge: "Viral Live Sync",
    },
    {
      name: "Shopify Plus",
      logo: <ShopifyLogo className="h-6 w-auto text-[#2C200B]" />,
      badge: "GraphQL API",
    },
  ];

  return (
    <section className="py-12 border-b border-[#CCA25A] bg-[#F7E8A1] select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-xs font-mono tracking-widest text-[#2C200B] uppercase font-bold">
          DEEP NATIVE INTEGRATION ACROSS LEADING MARKETPLACES
        </p>
      </div>

      <div className="relative w-full marquee-mask">
        <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] gap-16 items-center">
          {[...platforms, ...platforms, ...platforms].map((platform, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-[#2C200B] cursor-pointer font-bold opacity-90 hover:opacity-100 transition-opacity"
            >
              {platform.logo}
              <span className="px-2.5 py-0.5 rounded bg-[#FFF5B8] border border-[#CCA25A] text-[10px] font-mono text-[#2C200B] font-bold">
                {platform.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
