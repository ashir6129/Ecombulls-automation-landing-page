"use client";

import React from "react";

export const LogoStrip: React.FC = () => {
  const platforms = [
    {
      name: "Amazon Marketplace",
      logo: (
        <svg className="h-7 w-auto fill-current" viewBox="0 0 100 30">
          <path d="M15 8c-3 0-5 2-5 5v1h10v-1c0-3-2-5-5-5zm-9 6v10h4v-5h10v5h4V14H6zm26-6h-4v16h4V8zm12 0c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7zm0 10c-2 0-3-1-3-3s1-3 3-3 3 1 3 3-1 3-3 3zm18-10h-4v10c0 2 1 3 3 3h1v-3h-1c-1 0-1 0-1-1v-9zm10 0c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7zm0 10c-2 0-3-1-3-3s1-3 3-3 3 1 3 3-1 3-3 3z" />
          <path d="M10 26c15 5 35 5 50-2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      ),
      badge: "SP-API v2",
      colorClass: "hover:text-amber-400",
    },
    {
      name: "eBay Motors & Retail",
      logo: (
        <span className="font-extrabold text-2xl tracking-tighter">
          <span className="text-red-500">e</span>
          <span className="text-blue-500">b</span>
          <span className="text-yellow-500">a</span>
          <span className="text-green-500">y</span>
        </span>
      ),
      badge: "Fulfillment API",
      colorClass: "hover:opacity-100",
    },
    {
      name: "Walmart Marketplace",
      logo: (
        <div className="flex items-center gap-1.5 font-bold text-xl tracking-tight">
          <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l2.4 6.8H21.5l-5.7 4.2 2.2 6.9-6-4.3-6 4.3 2.2-6.9-5.7-4.2h7.1z" />
          </svg>
          <span>Walmart</span>
        </div>
      ),
      badge: "WFS Engine",
      colorClass: "hover:text-blue-400",
    },
    {
      name: "TikTok Shop",
      logo: (
        <div className="flex items-center gap-2 font-extrabold text-xl tracking-tight">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 1 1-2.896-2.896c.143 0 .283.011.42.031V9.308a6.34 6.34 0 1 0 5.921 6.309V9.458a8.204 8.204 0 0 0 4.77 1.523V7.536a4.832 4.832 0 0 1-1.000-.85z" />
          </svg>
          <span>TikTok Shop</span>
        </div>
      ),
      badge: "Viral Live Sync",
      colorClass: "hover:text-pink-400",
    },
    {
      name: "Shopify Plus",
      logo: (
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <svg className="w-6 h-6 fill-current text-[#10B981]" viewBox="0 0 24 24">
            <path d="M17.5 3.5L12 1L6.5 3.5L3 18.5L12 23L21 18.5L17.5 3.5ZM12 4.5L15.5 6L12 7.5L8.5 6L12 4.5ZM7.5 8L11 9.5V19.5L5 16.5L7.5 8ZM13 19.5V9.5L16.5 8L19 16.5L13 19.5Z" />
          </svg>
          <span>Shopify</span>
        </div>
      ),
      badge: "GraphQL API",
      colorClass: "hover:text-[#10B981]",
    },
  ];

  return (
    <section className="py-12 border-b border-[#0F3D35]/80 bg-[#051210]/40 select-none overflow-hidden">
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
              className={`flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer ${platform.colorClass}`}
            >
              {platform.logo}
              <span className="px-2 py-0.5 rounded bg-black border border-[#0F3D35] text-[10px] font-mono text-text-muted">
                {platform.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
