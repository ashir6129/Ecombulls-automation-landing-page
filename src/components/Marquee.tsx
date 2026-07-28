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
    { text: "99.8% System Uptime — Zero Human Delay", icon: RefreshCw },
    { text: "Official API Connectors for Amazon, eBay, Walmart, TikTok & Shopify", icon: ShieldCheck },
    { text: "10x Operational Capacity per Agency Store Manager", icon: Zap },
  ];

  return (
    <div className="w-full bg-[#16170E] border-b border-[#545333] py-2.5 overflow-hidden relative select-none flex items-center justify-between px-4">
      {/* Scrolling Ticker Line */}
      <div className="w-full marquee-mask flex items-center overflow-hidden">
        <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] gap-12 items-center">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2.5 text-xs font-mono text-[#D9D7B6] whitespace-nowrap"
              >
                <Icon className="w-3.5 h-3.5 text-[#FDFBD4] shrink-0" />
                <span>{item.text}</span>
                <span className="text-[#545333] font-sans font-bold ml-6">///</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Action Button on Top Bar */}
      {onOpenAudit && (
        <button
          onClick={onOpenAudit}
          className="ml-4 shrink-0 px-3.5 py-1 rounded-lg bg-[#545333] hover:bg-[#6B6A43] text-[#FDFBD4] text-xs font-bold font-mono border border-[#878672] transition-colors flex items-center gap-1.5 shadow-md"
        >
          <span>Audit</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#FDFBD4]" />
        </button>
      )}
    </div>
  );
};
