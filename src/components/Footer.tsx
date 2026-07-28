"use client";

import React from "react";
import Link from "next/link";
import { Zap } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E9ECE6] border-t border-[#141C1B] pt-16 pb-12 text-[#141C1B] relative select-none font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#141C1B]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#BCCBC9] border border-[#141C1B] flex items-center justify-center text-[#141C1B]">
                <Zap className="w-5 h-5 fill-[#141C1B] text-[#141C1B]" />
              </div>
              <span className="text-xl font-extrabold font-heading text-[#141C1B] tracking-tight">
                ECOMBULLS
              </span>
            </Link>

            <p className="text-xs text-[#141C1B] max-w-sm leading-relaxed font-medium">
              The AI Operating System for High-Growth E-Commerce Agencies. Automating multi-channel inventory, repricing engines, and order routing across Amazon, eBay, Walmart, TikTok Shop, and Shopify.
            </p>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#BCCBC9] border border-[#141C1B] w-fit text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#141C1B]" />
              <span className="text-[#141C1B] font-bold">System Engine: <strong className="text-[#141C1B]">99.8% Online</strong></span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-[#141C1B] uppercase font-bold">
              PLATFORMS & FEATURES
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <a href="#platforms" className="hover:underline transition-colors">
                  Amazon SP-API Connector
                </a>
              </li>
              <li>
                <a href="#platforms" className="hover:underline transition-colors">
                  eBay Motors & Retail API
                </a>
              </li>
              <li>
                <a href="#platforms" className="hover:underline transition-colors">
                  Walmart WFS Sync Engine
                </a>
              </li>
              <li>
                <a href="#platforms" className="hover:underline transition-colors">
                  TikTok Shop Flash-Sync
                </a>
              </li>
              <li>
                <a href="#platforms" className="hover:underline transition-colors">
                  Shopify Plus Master Catalog
                </a>
              </li>
            </ul>
          </div>

          {/* Agency Resources Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-[#141C1B] uppercase font-bold">
              AGENCY INFRASTRUCTURE
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <a href="#how-it-works" className="hover:underline transition-colors">
                  3-Phase Operational Blueprint
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:underline transition-colors">
                  Meet Founder Mudasir Kamal
                </a>
              </li>
              <li>
                <a href="#results" className="hover:underline transition-colors">
                  Agency Partner Case Studies
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline transition-colors">
                  Flat Monthly Agency Plans
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Founder Credit Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} Ecombulls Inc. Founded by{" "}
            <span className="text-[#141C1B] font-bold">Mudasir Kamal</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-6 font-bold">
            <span className="hover:underline cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:underline cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:underline cursor-pointer transition-colors">Security SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
