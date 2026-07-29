"use client";

import React from "react";
import { Zap, ShieldCheck, TrendingUp, Cpu, RefreshCw, ArrowRight } from "lucide-react";

interface MarqueeProps {
  onOpenAudit?: () => void;
}

export const Marquee: React.FC<MarqueeProps> = ({ onOpenAudit }) => {
  const tickerItems = [
    { text: "50M+ GMV Automated for 45+ Agency Partners", icon: TrendingUp },
    { text: "Autonomous Multi-Channel Inventory & Order Syncing", icon: Cpu },
    { text: "99.98% System Uptime — Zero Human Delay", icon: RefreshCw },
    { text: "Official API Connectors for Amazon, eBay, Walmart, TikTok & Shopify", icon: ShieldCheck },
    { text: "10x Operational Capacity per Agency Store Manager", icon: Zap },
  ];

  return (
    <div className="w-full bg-[#1C1917] border-b border-[#C84B31]/40 py-3 overflow-hidden relative select-none flex items-center justify-between px-4 sm:px-6 z-50 shadow-md">
      {/* Scrolling Ticker Line in Ecombulls Flame Coral & Obsidian Theme */}
      <div className="w-full marquee-mask flex items-center overflow-hidden">
        <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] gap-12 items-center">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2.5 text-xs font-mono text-white whitespace-nowrap font-bold tracking-wide"
              >
                <Icon className="w-3.5 h-3.5 text-[#C84B31] shrink-0" />
                <span>{item.text}</span>
                <span className="text-[#C84B31] font-sans font-bold ml-6">///</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Action Button on Top Bar */}
      {onOpenAudit && (
        <button
          onClick={onOpenAudit}
          className="ml-4 shrink-0 px-4 py-1.5 rounded-xl bg-[#C84B31] hover:bg-[#B03D25] text-white text-xs font-bold font-mono transition-colors flex items-center gap-1.5 shadow-md"
        >
          <span>Discuss Project</span>
          <ArrowRight className="w-3.5 h-3.5 text-white" />
        </button>
      )}
    </div>
  );
};
