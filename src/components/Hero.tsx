"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Sparkles, Play, Pause, Volume2, VolumeX, RotateCcw, Settings } from "lucide-react";
import { MOTION_TOKENS, fadeInVariants } from "@/lib/motion";
import { AmazonLogo, EBayLogo, WalmartLogo, TikTokShopLogo, ShopifyLogo } from "./PlatformLogos";

interface HeroProps {
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleRewind = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
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
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
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

          {/* Right Column: Landscape Widescreen Video Player Container */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* Top Curved Announcement Badge & Arrow */}
            <div className="flex flex-col items-center mb-3">
              <div className="px-6 py-2 rounded-full bg-[#C84B31]/10 border border-[#C84B31]/30 text-[#C84B31] font-mono font-extrabold text-xs sm:text-sm shadow-xs flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C84B31]" />
                <span>Ecombulls System Demo</span>
              </div>
              {/* Curved Arrow icon pointing down to video box */}
              <svg className="w-8 h-8 text-[#C84B31] -mt-1 -mb-1 animate-pulse" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round">
                <path d="M 80,5 Q 50,45 20,55" />
                <path d="M 30,42 L 20,55 L 35,58" />
              </svg>
            </div>

            {/* Video Container Frame */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-[#1C1917] bg-[#1C1917] glow-card">
              {/* Top Banner Header Bar across the video */}
              <div className="bg-[#FAF2EE] text-[#C84B31] px-4 py-2.5 text-center font-extrabold text-xs sm:text-sm uppercase tracking-wider border-b border-[#F5E1D8]">
                WATCH THIS VIDEO TO SEE HOW ECOMBULLS AUTOMATES YOUR AGENCY
              </div>

              {/* Video Box with 16:9 Widescreen Landscape Aspect Ratio */}
              <div className="relative w-full aspect-video bg-black overflow-hidden group">
                <video
                  ref={videoRef}
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                  poster="/images/hero-agency.jpg"
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={toggleMute}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Dark Tint when Paused */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-10 flex items-center justify-center pointer-events-none" />
                )}

                {/* CENTER OVERLAY BOX: "Your Video Is Playing / Click To Unmute" (Theme Coral/Terracotta #C84B31) */}
                {isMuted && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                    }}
                    aria-label="Click to unmute video"
                    className="absolute inset-0 m-auto w-[82%] sm:w-[68%] max-w-[340px] h-[62%] max-h-[195px] bg-[#C84B31]/90 hover:bg-[#B03D25] backdrop-blur-md border border-white/30 rounded-3xl shadow-2xl flex flex-col items-center justify-center p-4 sm:p-6 transition-all transform hover:scale-[1.03] active:scale-[0.97] z-30 cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Volume2 className="w-7 h-7 text-white animate-pulse" />
                    </div>
                    <span className="text-xl sm:text-2xl font-extrabold text-white font-display tracking-tight text-center leading-snug">
                      Your Video Is Playing
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white/95 mt-1 text-center">
                      Click To Unmute
                    </span>
                  </button>
                )}

                {/* Center Play Button when video is paused */}
                {!isPlaying && !isMuted && (
                  <button
                    onClick={togglePlay}
                    aria-label="Play video"
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#C84B31] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-30"
                  >
                    <Play className="w-8 h-8 text-white translate-x-0.5" />
                  </button>
                )}

                {/* Bottom Custom Video Controls Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 sm:p-4 z-20 flex flex-col gap-2">
                  {/* Progress Line */}
                  <div className="w-full relative flex items-center">
                    <input
                      type="range"
                      min={0}
                      max={duration || 100}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#C84B31]"
                    />
                  </div>

                  {/* Controls Row */}
                  <div className="flex items-center justify-between text-white text-xs font-mono">
                    <div className="flex items-center gap-2 sm:gap-3">
                      {/* Play/Pause Button */}
                      <button
                        onClick={togglePlay}
                        className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-colors"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white translate-x-0.5" />}
                      </button>

                      {/* Rewind 10s Button */}
                      <button
                        onClick={handleRewind}
                        className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center gap-0.5 text-[10px] font-bold transition-colors"
                        title="Rewind 10 seconds"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>10</span>
                      </button>

                      {/* Sound Toggle + Time readout */}
                      <button
                        onClick={toggleMute}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C84B31] hover:bg-[#B03D25] text-white text-xs font-bold transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                        <span>{formatTime(currentTime)}</span>
                      </button>
                    </div>

                    {/* Right Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={toggleMute}
                        className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors"
                        aria-label="Settings"
                      >
                        <Settings className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Guarantee Banner below Video */}
              <div className="p-3.5 bg-[#1C1917] border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C84B31]" />
                  <span className="font-bold text-white">100% Client Code &amp; Server Ownership</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#F97316] font-bold">
                  <Zap className="w-3.5 h-3.5" />
                  <span>99.98% SLA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
