"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [platform, setPlatform] = useState("Amazon");
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [leadId, setLeadId] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, whatsapp, platform }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit request. Please try again.");
      } else {
        setStatus("success");
        setLeadId(data.leadId || "ECO-AUDIT");
      }
    } catch (err) {
      console.error("Audit Modal Submission Error:", err);
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and retry.");
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setWhatsapp("");
    setPlatform("Amazon");
    setStatus("idle");
    setErrorMessage("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetForm}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg bg-black border-2 border-[#0F3D35] rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(15,61,53,0.5)] z-10 overflow-hidden"
        >
          {/* Glowing Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0F3D35] via-[#165B4F] to-[#10B981]" />

          {/* Close Button */}
          <button
            onClick={resetForm}
            className="absolute top-4 right-4 p-2 text-text-muted hover:text-white rounded-lg hover:bg-[#051210] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {status === "success" ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#0F3D35]/40 border border-[#0F3D35] rounded-full flex items-center justify-center mx-auto text-[#10B981]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white">
                Audit Request Reserved!
              </h3>
              <p className="text-text-muted text-sm max-w-md mx-auto">
                Thank you, <span className="text-white font-medium">{name}</span>. Mudasir Kamal&apos;s AI engineering team is reviewing your agency footprint.
              </p>
              <div className="bg-[#051210] border border-[#0F3D35] p-4 rounded-xl text-xs font-mono text-[#10B981] space-y-1">
                <div>Lead Reference Code:</div>
                <div className="text-base font-bold text-white tracking-wider">{leadId}</div>
              </div>
              <p className="text-xs text-text-muted">
                We will reach out directly on WhatsApp (<span className="text-white">{whatsapp}</span>) within 2 hours.
              </p>
              <button
                onClick={resetForm}
                className="w-full mt-4 py-3 bg-[#0F3D35] hover:bg-[#165B4F] border border-[#165B4F] text-white font-semibold rounded-xl transition-all"
              >
                Back to Ecombulls
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6 space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#0F3D35]/40 border border-[#0F3D35] text-[#10B981] text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  Free 1-on-1 Agency Audit
                </div>
                <h2 id="modal-title" className="text-2xl font-bold font-heading text-white">
                  Book Your Automation Audit
                </h2>
                <p className="text-text-muted text-xs sm:text-sm">
                  Discover how Mudasir Kamal&apos;s AI engine eliminates manual store ops, stock-outs, and order delays across your client stores.
                </p>
              </div>

              {status === "error" && (
                <div className="mb-4 p-3 bg-red-950/40 border border-red-800/40 rounded-xl text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="audit-name" className="block text-xs font-medium text-text-muted mb-1">
                    Full Name *
                  </label>
                  <input
                    id="audit-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-4 py-2.5 bg-[#051210] border border-[#0F3D35] rounded-xl text-white text-sm placeholder:text-text-dim focus:border-[#165B4F] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="audit-email" className="block text-xs font-medium text-text-muted mb-1">
                    Agency Work Email *
                  </label>
                  <input
                    id="audit-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@growthagency.com"
                    className="w-full px-4 py-2.5 bg-[#051210] border border-[#0F3D35] rounded-xl text-white text-sm placeholder:text-text-dim focus:border-[#165B4F] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="audit-whatsapp" className="block text-xs font-medium text-text-muted mb-1">
                    WhatsApp Number (for direct audit report) *
                  </label>
                  <input
                    id="audit-whatsapp"
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+1 (555) 019-2834"
                    className="w-full px-4 py-2.5 bg-[#051210] border border-[#0F3D35] rounded-xl text-white text-sm placeholder:text-text-dim focus:border-[#165B4F] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="audit-platform" className="block text-xs font-medium text-text-muted mb-1">
                    Primary Platform Managed *
                  </label>
                  <select
                    id="audit-platform"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#051210] border border-[#0F3D35] rounded-xl text-white text-sm focus:border-[#165B4F] focus:outline-none transition-colors"
                  >
                    <option value="Amazon">Amazon Marketplace</option>
                    <option value="eBay">eBay Motors / Retail</option>
                    <option value="Walmart">Walmart Marketplace</option>
                    <option value="TikTok Shop">TikTok Shop</option>
                    <option value="Shopify">Shopify / Plus</option>
                    <option value="Multi-Channel">Multi-Channel Enterprise</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full mt-2 py-3.5 bg-[#0F3D35] hover:bg-[#165B4F] border border-[#165B4F] text-white font-bold rounded-xl shadow-lg shadow-[#0F3D35]/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-[#10B981]" />
                      Analyzing Store Blueprint...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#10B981]" />
                      Claim Free Agency Audit
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-text-dim mt-2">
                  🔒 100% confidential. No credit card required. Protected by Ecombulls NDA.
                </p>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
