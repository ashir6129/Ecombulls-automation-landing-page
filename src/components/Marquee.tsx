"use client";

import React from "react";
import { Zap, ShieldCheck, TrendingUp, Cpu, RefreshCw } from "lucide-react";

export const Marquee: React.FC = () => {
  const tickerItems = [
    { text: "50M+ GMV Automated for 45+ Agency Partners", icon: TrendingUp },
    { text: "Autonomous Multi-Channel Inventory & Order Syncing", icon: Cpu },
    { text: "99.8% System Uptime — Zero Human Delay", icon: RefreshCw },
    { text: "Official API Connectors for Amazon, eBay, Walmart, TikTok & Shopify", icon: ShieldCheck },
    { text: "10x Operational Capacity per Agency Store Manager", icon: Zap },
  ];

  return (
    <div className="w-full bg-surface-elevated/80 border-b border-border py-2.5 overflow-hidden marquee-mask relative select-none">
      <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] gap-12 items-center">
        {/* Render twice for seamless loop */}
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2.5 text-xs font-mono text-text-muted whitespace-nowrap"
            >
              <Icon className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>{item.text}</span>
              <span className="text-border-bright font-sans font-bold ml-6">///</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
