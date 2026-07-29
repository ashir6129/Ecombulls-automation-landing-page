"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Sparkles, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { MOTION_TOKENS, fadeInVariants } from "@/lib/motion";
import { AmazonLogo, EBayLogo, WalmartLogo, TikTokShopLogo, ShopifyLogo } from "./PlatformLogos";

interface HeroProps {
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative pt-12 pb-24 md:pt-16 md:pb-28 bg-[#FAF8F5] overflow-hidden border-b border-[#E7E5E4]">
      {/* Ambient Background Radial Glow Spot */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#C84B31]/15 via-[#F97316]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: MOTION_TOKENS.stagger.normal },
              },
            }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Subtitle Badge */}
            <motion.div variants={fadeInVariants} custom={0} className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="px-4 py-1.5 rounded-full bg-[#C84B31]/10 border border-[#C84B31]/25 text-[#C84B31] font-extrabold text-xs tracking-wider uppercase font-mono shadow-xs flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C84B31]" />
                <span>ECOMBULLS ENGINEERING</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E7E5E4] text-[#1C1917] font-bold text-xs shadow-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Top Rated Agency • 100% Satisfaction</span>
              </span>
            </motion.div>

            {/* High-Impact Display Headline */}
            <motion.h1
              variants={fadeInVariants}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-display text-[#1C1917] tracking-tight leading-[1.08]"
            >
              Empowering Business Success Through{" "}
              <span className="text-gradient-hero">
                Innovative AI &amp; Web Systems
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInVariants}
              custom={2}
              className="text-base sm:text-lg text-[#57534E] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Your dedicated technology partner in high-performance web development, custom logistics management software, business process automation, and enterprise multi-channel e-commerce systems.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              variants={fadeInVariants}
              custom={3}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3"
            >
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-[#C84B31] hover:bg-[#B03D25] text-white font-bold text-base transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
              >
                <span>Let&apos;s Discuss Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border border-[#E7E5E4] hover:border-[#C84B31] text-[#1C1917] font-bold text-base transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                <span>Explore Services</span>
              </a>
            </motion.div>

            {/* Supported Integrations Row */}
            <motion.div
              variants={fadeInVariants}
              custom={4}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-6 border-t border-[#E7E5E4]"
            >
              <span className="text-xs font-mono font-bold text-[#78716C] uppercase mr-2">Core Ecosystem:</span>
              <div className="px-3 py-2 rounded-xl bg-white border border-[#E7E5E4] shadow-xs">
                <AmazonLogo className="h-4 w-auto text-[#1C1917]" />
              </div>
              <div className="px-3 py-2 rounded-xl bg-white border border-[#E7E5E4] shadow-xs">
                <EBayLogo className="h-4 w-auto" />
              </div>
              <div className="px-3 py-2 rounded-xl bg-white border border-[#E7E5E4] shadow-xs">
                <WalmartLogo className="h-4 w-auto text-[#1C1917]" />
              </div>
              <div className="px-3 py-2 rounded-xl bg-white border border-[#E7E5E4] shadow-xs">
                <TikTokShopLogo className="h-4 w-auto text-[#1C1917]" />
              </div>
              <div className="px-3 py-2 rounded-xl bg-white border border-[#E7E5E4] shadow-xs">
                <ShopifyLogo className="h-4 w-auto text-[#1C1917]" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Autoplay Video Container */}
          <div className="lg:col-span-5 relative">
            {/* Top Curved Announcement Badge */}
            <div className="text-center mb-3">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#C84B31]/10 border border-[#C84B31]/30 text-[#C84B31] font-mono font-extrabold text-[11px] uppercase tracking-wider shadow-2xs">
                WATCH THIS VIDEO TO SEE HOW ECOMBULLS AUTOMATES YOUR AGENCY
              </span>
            </div>

            <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] max-w-[480px] mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white glow-card bg-[#1C1917]">
              <video
                ref={videoRef}
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                poster="/images/hero-agency.jpg"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Video Overlay Tint when Paused */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center" />
              )}

              {/* Center Play / Pause Trigger Button */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className={`absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C84B31] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-20 group ${
                  isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
                }`}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
                ) : (
                  <Play className="w-8 h-8 sm:w-9 sm:h-9 text-white translate-x-0.5" />
                )}
              </button>

              {/* Top SLA Badge Overlay */}
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 shadow-md flex items-center gap-2 text-xs font-mono font-bold text-white z-10">
                <Zap className="w-3.5 h-3.5 text-[#C84B31]" />
                <span>99.98% SLA Guaranteed</span>
              </div>

              {/* Bottom Audio Toggle Button */}
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#C84B31] hover:bg-[#B03D25] backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold flex items-center gap-1.5 z-20 shadow-lg"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4 text-white" />
                    <span>Click for Sound</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-emerald-300" />
                    <span>Mute Audio</span>
                  </>
                )}
              </button>

              {/* Bottom Details Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E7E5E4] shadow-xl z-10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C84B31] font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#C84B31]" />
                  <span>100% Client Code Repository &amp; Server Ownership</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-[#1C1917] mt-1 font-display leading-tight">
                  High-Loaded Systems, Custom Logistics TMS &amp; AI Agents
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
