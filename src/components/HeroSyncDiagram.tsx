"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Zap, ArrowRightLeft } from "lucide-react";

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
      className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center select-none"
    >
      {/* SVG Diagram Canvas */}
      <svg className="w-full h-full absolute inset-0 z-0" viewBox="0 0 500 500">
        {/* Solid #0F3D35 Connecting Lines */}
        <line
          x1="250"
          y1="250"
          x2="100"
          y2="110"
          stroke="#0F3D35"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="data-packet opacity-90"
        />
        <line
          x1="250"
          y1="250"
          x2="400"
          y2="110"
          stroke="#0F3D35"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="data-packet opacity-90"
        />
        <line
          x1="250"
          y1="250"
          x2="90"
          y2="360"
          stroke="#0F3D35"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="data-packet opacity-90"
        />
        <line
          x1="250"
          y1="250"
          x2="410"
          y2="360"
          stroke="#0F3D35"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="data-packet opacity-90"
        />
        <line
          x1="250"
          y1="250"
          x2="250"
          y2="430"
          stroke="#0F3D35"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="data-packet opacity-90"
        />

        {/* Pulse Circle */}
        <circle
          ref={pulseRef1}
          cx="250"
          cy="250"
          r="40"
          fill="none"
          stroke="#0F3D35"
          strokeWidth="2"
          opacity="0.9"
        />
      </svg>

      {/* Central Hub: Ecombulls AI Engine */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-24 h-24 rounded-2xl bg-[#0A0A0A] border-2 border-[#0F3D35] flex flex-col items-center justify-center p-2 text-center transform hover:scale-105 transition-transform shadow-xl">
          <Zap className="w-8 h-8 text-[#0F3D35] fill-[#0F3D35] mb-1" />
          <span className="text-[10px] font-bold tracking-widest text-white font-mono uppercase">
            ECOMBULLS
          </span>
          <span className="text-[8px] font-mono text-[#0F3D35]">AI HUB</span>
        </div>
      </div>

      {/* Satellite Platform Nodes */}
      <div className="absolute top-[16%] left-[12%] z-10">
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0A0A0A] border border-[#0F3D35] shadow-lg">
          <div className="w-7 h-7 rounded-lg bg-[#0F3D35] flex items-center justify-center text-white font-bold text-xs">
            amz
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-white">Amazon</div>
            <div className="text-[9px] font-mono text-[#0F3D35]">1-Min Sync</div>
          </div>
        </div>
      </div>

      <div className="absolute top-[16%] right-[12%] z-10">
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0A0A0A] border border-[#0F3D35] shadow-lg">
          <div className="w-7 h-7 rounded-lg bg-[#0F3D35] flex items-center justify-center text-white font-bold text-xs">
            WMT
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-white">Walmart</div>
            <div className="text-[9px] font-mono text-[#0F3D35]">Auto Route</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[20%] left-[10%] z-10">
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0A0A0A] border border-[#0F3D35] shadow-lg">
          <div className="w-7 h-7 rounded-lg bg-[#0F3D35] flex items-center justify-center text-white font-bold text-xs">
            eBay
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-white">eBay</div>
            <div className="text-[9px] font-mono text-[#0F3D35]">Stock Guard</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[20%] right-[10%] z-10">
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0A0A0A] border border-[#0F3D35] shadow-lg">
          <div className="w-7 h-7 rounded-lg bg-[#0F3D35] flex items-center justify-center text-white font-bold text-xs">
            TT
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-white">TikTok Shop</div>
            <div className="text-[9px] font-mono text-[#0F3D35]">Viral Spike</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0A0A0A] border border-[#0F3D35] shadow-lg">
          <div className="w-7 h-7 rounded-lg bg-[#0F3D35] flex items-center justify-center text-white font-bold text-xs">
            SHP
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-white">Shopify Plus</div>
            <div className="text-[9px] font-mono text-[#0F3D35]">Master Catalog</div>
          </div>
        </div>
      </div>

      {/* Live Sync Status Floating Badge */}
      <div className="absolute top-[4%] left-1/2 -translate-x-1/2 z-30 px-3 py-1 bg-[#0A0A0A] border border-[#0F3D35] rounded-full text-[10px] font-mono text-white flex items-center gap-1.5">
        <ArrowRightLeft className="w-3 h-3 text-[#0F3D35] animate-spin" />
        <span>Real-Time Bi-Directional Pipeline</span>
      </div>
    </div>
  );
};

export default HeroSyncDiagram;
