"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Zap, Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E7E5E4] py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-[#C84B31] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold font-heading text-[#1C1917] tracking-tight">
                ECOMBULLS
              </span>
              <span className="text-[9px] font-mono font-bold text-[#C84B31] -mt-1 tracking-widest uppercase">
                AI OPERATING SYSTEM
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#57534E]">
            <a href="#services" className="hover:text-[#C84B31] transition-colors font-semibold">
              Services
            </a>
            <a href="#case-studies" className="hover:text-[#C84B31] transition-colors font-semibold">
              Case Studies
            </a>
            <a href="#why-us" className="hover:text-[#C84B31] transition-colors font-semibold">
              Why Us
            </a>
            <a href="#pricing" className="hover:text-[#C84B31] transition-colors font-semibold">
              Support Plans
            </a>
            <a href="#testimonials" className="hover:text-[#C84B31] transition-colors font-semibold">
              Reviews
            </a>
            <a href="#faq" className="hover:text-[#C84B31] transition-colors font-semibold">
              FAQ
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenAudit}
              className="px-5 py-2.5 rounded-xl bg-[#C84B31] hover:bg-[#B03D25] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>Discuss Project</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#1C1917] rounded-lg border border-[#E7E5E4]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E7E5E4] px-4 pt-4 pb-6 space-y-4 shadow-lg">
          <nav className="flex flex-col gap-3 text-base font-medium text-[#1C1917]">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="py-1">
              Services
            </a>
            <a href="#case-studies" onClick={() => setIsMobileMenuOpen(false)} className="py-1">
              Case Studies
            </a>
            <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)} className="py-1">
              Why Choose Us
            </a>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="py-1">
              Support Plans
            </a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="py-1">
              Client Reviews
            </a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="py-1">
              FAQ
            </a>
          </nav>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenAudit();
            }}
            className="w-full py-3 rounded-xl bg-[#C84B31] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
          >
            <span>Let&apos;s Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      )}
    </header>
  );
};
