"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Zap, Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-[#0F3D35]/60 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#051210] border border-[#0F3D35] flex items-center justify-center text-[#10B981] group-hover:border-[#165B4F] group-hover:scale-105 transition-transform shadow-lg shadow-[#0F3D35]/20">
            <Zap className="w-5 h-5 fill-[#0F3D35] text-[#10B981]" />
          </div>
          <div>
            <span className="text-xl font-extrabold font-heading tracking-tight text-white flex items-center gap-1.5">
              ECOMBULLS
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            </span>
            <span className="block text-[10px] font-mono tracking-widest text-text-muted uppercase">
              AI ECOM AUTOMATION
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          <a href="#platforms" className="hover:text-white transition-colors">
            Platforms
          </a>
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#founder" className="hover:text-white transition-colors">
            Founder
          </a>
          <a href="#results" className="hover:text-white transition-colors">
            Results
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right Section: Status Badge & CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#051210] border border-[#0F3D35] text-[11px] font-mono text-text-muted">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span>AI Engines 99.8% Online</span>
          </div>

          <button
            onClick={onOpenAudit}
            className="relative group px-5 py-2.5 rounded-xl bg-[#0F3D35] hover:bg-[#165B4F] text-white font-bold text-sm border border-[#165B4F] transition-all shadow-md shadow-[#0F3D35]/40 flex items-center gap-2"
          >
            <span>Book Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#10B981]" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-text-muted hover:text-white rounded-lg"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-[#0F3D35] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-text-muted">
            <a
              href="#platforms"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white"
            >
              Platforms
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white"
            >
              How It Works
            </a>
            <a
              href="#founder"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white"
            >
              Founder
            </a>
            <a
              href="#results"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white"
            >
              Results
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white"
            >
              FAQ
            </a>
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAudit();
            }}
            className="w-full py-3 bg-[#0F3D35] text-white font-bold rounded-xl text-center border border-[#165B4F]"
          >
            Book Automation Audit
          </button>
        </div>
      )}
    </header>
  );
};
