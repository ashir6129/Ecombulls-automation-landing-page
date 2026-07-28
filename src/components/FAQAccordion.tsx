"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "How long does it take to integrate Ecombulls with our agency stores?",
    answer:
      "Onboarding takes less than 48 hours. Mudasir Kamal's engineering team handles the initial API configuration, historical SKU mapping, and sandbox validation. There is zero downtime for your active listings.",
  },
  {
    question: "Which e-commerce platforms are natively supported?",
    answer:
      "We support Amazon Marketplace (SP-API v2), eBay Motors & Retail (Fulfillment API), Walmart Marketplace (WFS Engine), TikTok Shop (Live Flash-Sync), and Shopify / Shopify Plus. Custom ERP and warehouse adapters are available on Enterprise plans.",
  },
  {
    question: "How does Ecombulls prevent store suspensions and overselling?",
    answer:
      "Our system uses event-driven microsecond inventory locking. As soon as an order is placed on any connected channel (e.g. TikTok Shop), Ecombulls subtracts that unit across Amazon, Walmart, eBay, and Shopify within seconds, preventing oversell stockouts completely.",
  },
  {
    question: "Does Ecombulls replace our existing agency account managers?",
    answer:
      "No — Ecombulls empowers your existing team. Instead of spending 80% of their workday copy-pasting tracking numbers and manually updating stock spreadsheets, your managers can focus on client growth, strategy, and catalog expansion. One manager can now oversee 25–40 stores effortlessly.",
  },
  {
    question: "What happens if a marketplace API (like Amazon SP-API) experiences downtime?",
    answer:
      "Ecombulls maintains a continuous buffer queue. If an external marketplace API encounters a temporary outage or rate limit error, our queue automatically holds and retries the payload until confirmed, notifying your dashboard immediately.",
  },
];

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0D0E08] relative overflow-hidden border-b border-[#545333]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16170E] border border-[#545333] text-[#FDFBD4] text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-[#D9D7B6]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#FDFBD4] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#D9D7B6] text-base">
            Everything you need to know about implementing Ecombulls AI automation across your client store portfolio.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#16170E] border border-[#545333] hover:border-[#878672] rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-base font-bold font-heading text-[#FDFBD4] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-[#0D0E08] border border-[#545333] flex items-center justify-center text-[#FDFBD4] transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 bg-[#545333] text-[#FDFBD4]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-[#D9D7B6] leading-relaxed border-t border-[#545333] mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
