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
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-border-glow flex items-center justify-center text-accent group-hover:scale-105 transition-transform shadow-lg shadow-accent/10">
            <Zap className="w-5 h-5 fill-accent/20 text-accent" />
          </div>
          <div>
            <span className="text-xl font-extrabold font-heading tracking-tight text-white flex items-center gap-1">
              ECOMBULLS
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </span>
            <span className="block text-[10px] font-mono tracking-widest text-text-muted uppercase">
              AI ECOM AUTOMATION
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          <a href="#platforms" className="hover:text-accent transition-colors">
            Platforms
          </a>
          <a href="#how-it-works" className="hover:text-accent transition-colors">
            How It Works
          </a>
          <a href="#founder" className="hover:text-accent transition-colors">
            Founder
          </a>
          <a href="#results" className="hover:text-accent transition-colors">
            Results
          </a>
          <a href="#pricing" className="hover:text-accent transition-colors">
            Pricing
          </a>
          <a href="#faq" className="hover:text-accent transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right Section: Status Badge & CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-elevated border border-border text-[11px] font-mono text-text-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>AI Engines 99.8% Online</span>
          </div>

          <button
            onClick={onOpenAudit}
            className="relative group px-5 py-2.5 rounded-xl bg-accent text-background font-bold text-sm hover:bg-accent-hover transition-all shadow-md shadow-accent/10 flex items-center gap-2"
          >
            <span>Book Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
        <div className="md:hidden bg-surface border-b border-border px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-text-muted">
            <a
              href="#platforms"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-accent"
            >
              Platforms
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-accent"
            >
              How It Works
            </a>
            <a
              href="#founder"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-accent"
            >
              Founder
            </a>
            <a
              href="#results"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-accent"
            >
              Results
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-accent"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-accent"
            >
              FAQ
            </a>
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAudit();
            }}
            className="w-full py-3 bg-accent text-background font-bold rounded-xl text-center"
          >
            Book Automation Audit
          </button>
        </div>
      )}
    </header>
  );
};
