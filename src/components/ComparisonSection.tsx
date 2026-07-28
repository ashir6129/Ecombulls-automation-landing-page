"use client";

import React from "react";
import { XCircle, CheckCircle2, AlertTriangle, Zap, ShieldCheck } from "lucide-react";

export const ComparisonSection: React.FC = () => {
  const comparisonItems = [
    {
      feature: "Multi-Channel Stock Sync",
      manual: "Batch CSV uploads every 12–24 hours with frequent latency",
      ecombulls: "Real-time microsecond event-driven stock locking (< 60s)",
    },
    {
      feature: "Overselling & Store Suspensions",
      manual: "Constant risk during sales surges & viral traffic spikes",
      ecombulls: "0.00% oversell SLA guarantee with automated stock buffers",
    },
    {
      feature: "Buy Box & Repricing Engine",
      manual: "Manual price edits or static rule repricers that destroy margins",
      ecombulls: "Autonomous algorithmic AI repricer safeguarding profit floors",
    },
    {
      feature: "Order Routing & 3PL Dispatch",
      manual: "Account managers copy-pasting tracking codes & address details",
      ecombulls: "Direct API webhooks to FBA, WFS, & 3PL fulfillment queues",
    },
    {
      feature: "Agency Team Capacity",
      manual: "1 Account Manager capped at 4–5 complex client stores",
      ecombulls: "1 Account Manager supervises 25–40 stores effortlessly",
    },
    {
      feature: "API Exception & Rate Limit Handling",
      manual: "Silent API failures resulting in missing orders & bad feedback",
      ecombulls: "Auto-retry queues with 24/7 continuous health monitoring",
    },
  ];

  return (
    <section className="py-24 bg-[#BCCBC9] relative overflow-hidden border-b border-[#141C1B] text-[#141C1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E9ECE6] border border-[#141C1B] text-[#141C1B] text-xs font-bold">
            <Zap className="w-3.5 h-3.5 text-[#141C1B]" />
            <span>Why Top Agencies Switch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#141C1B] tracking-tight">
            Traditional Manual Agency vs. Ecombulls AI System
          </h2>
          <p className="text-[#141C1B] text-base font-medium">
            See how autonomous AI infrastructure outperforms human manual store management across every core operational metric.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Traditional Agency */}
          <div className="lg:col-span-6 bg-[#E9ECE6] border-2 border-[#141C1B] rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-[#141C1B]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#BCCBC9] border border-[#141C1B] flex items-center justify-center text-[#141C1B]">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-[#141C1B]">Traditional Agency Model</h3>
                  <p className="text-xs text-[#141C1B] font-semibold">Manual & Vulnerable to Errors</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#BCCBC9] text-[#141C1B] font-mono text-[10px] uppercase font-bold border border-[#141C1B]">
                HIGH RISK
              </span>
            </div>

            <div className="space-y-4">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#BCCBC9] border border-[#141C1B] space-y-1">
                  <div className="text-xs font-mono text-[#141C1B] font-bold">{item.feature}</div>
                  <div className="text-sm text-[#141C1B] flex items-start gap-2 font-medium">
                    <XCircle className="w-4 h-4 text-[#141C1B] shrink-0 mt-0.5" />
                    <span>{item.manual}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Ecombulls AI System */}
          <div className="lg:col-span-6 bg-[#E9ECE6] border-2 border-[#141C1B] rounded-3xl p-6 sm:p-8 space-y-6 relative shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#141C1B]" />

            <div className="flex items-center justify-between pb-4 border-b border-[#141C1B]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#141C1B] border border-[#141C1B] flex items-center justify-center text-[#E9ECE6]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-[#141C1B]">Ecombulls AI Engine</h3>
                  <p className="text-xs text-[#141C1B] font-semibold">Autonomous & Microsecond Latency</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#141C1B] text-[#E9ECE6] font-mono text-[10px] uppercase font-bold border border-[#141C1B]">
                RECOMMENDED
              </span>
            </div>

            <div className="space-y-4">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#BCCBC9] border border-[#141C1B] space-y-1">
                  <div className="text-xs font-mono text-[#141C1B] font-bold">{item.feature}</div>
                  <div className="text-sm text-[#141C1B] font-bold flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#141C1B] shrink-0 mt-0.5" />
                    <span>{item.ecombulls}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
