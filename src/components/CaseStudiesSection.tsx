"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2, CheckCircle2 } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  categoryLabel: string;
  goal: string;
  impact: string;
  techStack: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "sheets-sync",
    title: "Automating Google Sheets & Financial Sync for eBay & Amazon Stores",
    categoryLabel: "Sheets & Data Automation",
    goal: "Engineered an automated pipeline that streams live orders, inventory subtractions, and net profit margins directly from eBay & Amazon seller accounts into client Google Sheets without manual CSV downloads.",
    impact: "Saved 60+ Hours/Month Per Account Manager & 0% Data Entry Errors",
    techStack: ["Google Sheets API", "Amazon SP-API", "eBay API", "Node.js"],
  },
  {
    id: "master-dashboard",
    title: "Unified Master Dashboard for 15+ Client Accounts on a Single Screen",
    categoryLabel: "Agency Command Center",
    goal: "Built a central single-screen control portal providing agency executives real-time visibility into sales GMV, stock-out risks, Buy Box suppression, and fulfillment speed across 15+ client marketplace accounts.",
    impact: "100% Real-Time Operational Control & 0 Missed Stock Alerts",
    techStack: ["React", "Webhooks", "Redis Queue", "Tailwind CSS"],
  },
  {
    id: "invoicing-billing",
    title: "Automated Invoicing & Client Billing Email Workflow Engine",
    categoryLabel: "Billing & Financial Workflow",
    goal: "Developed an automated system that calculates multi-store management fees, auto-generates branded PDF invoices, and dispatches automated billing reminder emails with instant payment links.",
    impact: "Reduced Monthly Billing Processing from 3 Days to < 5 Minutes",
    techStack: ["Python", "Stripe API", "SendGrid", "PDF Generator"],
  },
  {
    id: "rag-chatbot",
    title: "E-Commerce RAG AI Chatbot Assistant for Multi-Store Support",
    categoryLabel: "RAG AI & Autonomous Agents",
    goal: "Deploys an autonomous Retrieval-Augmented Generation (RAG) chatbot trained on store inventory databases, product specs, and shipping policies to answer customer support queries 24/7.",
    impact: "Resolved 78% of Customer Queries Automatically with 0 Staff Delay",
    techStack: ["Gemini RAG", "Vector DB", "WhatsApp API", "Zendesk"],
  },
];

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 bg-[#FAF8F5] relative overflow-hidden border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C84B31]/10 border border-[#C84B31]/25 text-[#C84B31] text-xs font-bold font-mono">
            <FolderGit2 className="w-3.5 h-3.5 text-[#C84B31]" />
            <span>Featured Agency Automation Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#1C1917] tracking-tight leading-tight">
            Real Agency Deployments, <span className="text-gradient-coral">Proven Performance</span>
          </h2>
          <p className="text-[#57534E] text-base sm:text-lg font-normal">
            Discover how Ecombulls automates Google Sheets, multi-client dashboards, invoicing workflows, and RAG AI agents for leading growth agencies.
          </p>
        </div>

        {/* Case Studies Grid (4 Targeted Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <motion.div
              layout
              key={study.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-[#E7E5E4] rounded-3xl p-8 flex flex-col justify-between card-shadow-hover relative overflow-hidden group glow-card"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-[#FAF8F5] border border-[#E7E5E4] text-[#C84B31] font-mono text-xs font-bold">
                    {study.categoryLabel}
                  </span>
                  <span className="w-9 h-9 rounded-xl bg-[#FAF8F5] flex items-center justify-center text-[#1C1917] group-hover:bg-[#C84B31] group-hover:text-white transition-colors shadow-2xs">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-display text-[#1C1917] leading-snug group-hover:text-[#C84B31] transition-colors">
                  {study.title}
                </h3>

                <div>
                  <h4 className="text-[11px] font-mono font-bold text-[#78716C] uppercase tracking-wider mb-1">Project Scope</h4>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-normal">{study.goal}</p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E7E5E4] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50/80 p-3.5 rounded-2xl border border-emerald-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{study.impact}</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {study.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#FAF8F5] text-[11px] font-mono text-[#57534E] border border-[#E7E5E4] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
