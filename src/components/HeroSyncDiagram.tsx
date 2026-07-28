"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Zap, ArrowRightLeft } from "lucide-react";
import { AmazonLogo, EBayLogo, WalmartLogo, TikTokShopLogo, ShopifyLogo } from "./PlatformLogos";

export const HeroSyncDiagram: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pulseRef1 = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.to(pulseRef1.current, {
        r: 75,
        opacity: 0,
        duration: 2.5,
        repeat: -1,
        ease: "power2.out",
      });

      gsap.to(".data-packet", {
        strokeDashoffset: -100,
        duration: 3,
        repeat: -1,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center select-none"
    >
      {/* SVG Diagram Canvas */}
      <svg className="w-full h-full absolute inset-0 z-0" viewBox="0 0 500 500">
        <line
          x1="250"
          y1="250"
          x2="100"
          y2="110"
          stroke="#545333"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="data-packet opacity-90"
        />
        <line
          x1="250"
          y1="250"
          x2="400"
          y2="110"
          stroke="#545333"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="data-packet opacity-90"
        />
        <line
          x1="250"
          y1="250"
          x2="90"
          y2="360"
          stroke="#545333"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="data-packet opacity-90"
        />
        <line
          x1="250"
          y1="250"
          x2="410"
          y2="360"
          stroke="#545333"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="data-packet opacity-90"
        />
        <line
          x1="250"
          y1="250"
          x2="250"
          y2="430"
          stroke="#545333"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="data-packet opacity-90"
        />

        <circle
          ref={pulseRef1}
          cx="250"
          cy="250"
          r="40"
          fill="none"
          stroke="#D9D7B6"
          strokeWidth="2"
          opacity="0.9"
        />
      </svg>

      {/* Central Hub: Ecombulls AI Engine */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-24 h-24 rounded-2xl bg-[#16170E] border-2 border-[#545333] flex flex-col items-center justify-center p-2 text-center shadow-xl">
          <Zap className="w-8 h-8 text-[#FDFBD4] fill-[#545333] mb-1" />
          <span className="text-[10px] font-bold tracking-widest text-[#FDFBD4] font-mono uppercase">
            ECOMBULLS
          </span>
          <span className="text-[8px] font-mono text-[#D9D7B6]">AI HUB</span>
        </div>
      </div>

      {/* Satellite Platform Nodes */}
      <div className="absolute top-[16%] left-[6%] z-10">
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#16170E] border border-[#545333] shadow-lg">
          <AmazonLogo className="h-4 w-auto text-[#FDFBD4]" />
          <div className="text-left border-l border-[#545333] pl-2">
            <div className="text-[9px] font-mono text-[#D9D7B6]">1-Min Sync</div>
          </div>
        </div>
      </div>

      <div className="absolute top-[16%] right-[6%] z-10">
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#16170E] border border-[#545333] shadow-lg">
          <WalmartLogo className="h-4 w-auto text-[#FDFBD4]" />
          <div className="text-left border-l border-[#545333] pl-2">
            <div className="text-[9px] font-mono text-[#D9D7B6]">WFS Auto</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[20%] left-[4%] z-10">
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#16170E] border border-[#545333] shadow-lg">
          <EBayLogo className="h-4 w-auto" />
          <div className="text-left border-l border-[#545333] pl-2">
            <div className="text-[9px] font-mono text-[#D9D7B6]">Stock Guard</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[20%] right-[4%] z-10">
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#16170E] border border-[#545333] shadow-lg">
          <TikTokShopLogo className="h-4 w-auto text-[#FDFBD4]" />
          <div className="text-left border-l border-[#545333] pl-2">
            <div className="text-[9px] font-mono text-[#D9D7B6]">Live Flash</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#16170E] border border-[#545333] shadow-lg">
          <ShopifyLogo className="h-4 w-auto text-[#FDFBD4]" />
          <div className="text-left border-l border-[#545333] pl-2">
            <div className="text-[9px] font-mono text-[#D9D7B6]">Master Catalog</div>
          </div>
        </div>
      </div>

      {/* Live Sync Status Floating Badge */}
      <div className="absolute top-[4%] left-1/2 -translate-x-1/2 z-30 px-3 py-1 bg-[#16170E] border border-[#545333] rounded-full text-[10px] font-mono text-[#FDFBD4] flex items-center gap-1.5">
        <ArrowRightLeft className="w-3 h-3 text-[#D9D7B6] animate-spin" />
        <span>Real-Time Bi-Directional Pipeline</span>
      </div>
    </div>
  );
};

export default HeroSyncDiagram;
