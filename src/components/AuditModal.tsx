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
          className="fixed inset-0 bg-[#1C1917]/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg bg-white border-2 border-[#C84B31] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden text-[#1C1917]"
        >
          {/* Top Solid Border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#C84B31]" />

          {/* Close Button */}
          <button
            onClick={resetForm}
            className="absolute top-4 right-4 p-2 text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF8F5] rounded-xl transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {status === "success" ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#C84B31]/10 border border-[#C84B31]/20 rounded-full flex items-center justify-center mx-auto text-[#C84B31]">
                <CheckCircle2 className="w-10 h-10 text-[#C84B31]" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#1C1917]">
                Audit Request Reserved!
              </h3>
              <p className="text-[#57534E] text-sm max-w-md mx-auto font-normal">
                Thank you, <span className="text-[#1C1917] font-bold">{name}</span>. Mudasir Kamal&apos;s AI engineering team is reviewing your agency footprint.
              </p>
              <div className="bg-[#FAF8F5] border border-[#E7E5E4] p-4 rounded-2xl text-xs font-mono text-[#1C1917] space-y-1">
                <div>Lead Reference Code:</div>
                <div className="text-base font-bold text-[#C84B31] tracking-wider">{leadId}</div>
              </div>
              <p className="text-xs text-[#57534E] font-medium">
                We will reach out directly on WhatsApp (<span className="text-[#1C1917] font-bold">{whatsapp}</span>) within 2 hours.
              </p>
              <button
                onClick={resetForm}
                className="w-full mt-4 py-3 bg-[#C84B31] hover:bg-[#B03D25] text-white font-bold rounded-xl transition-all shadow-md"
              >
                Back to Ecombulls
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6 space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#C84B31]/10 border border-[#C84B31]/20 text-[#C84B31] text-xs font-bold font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C84B31]" />
                  Free Technical Project Consultation
                </div>
                <h2 id="modal-title" className="text-2xl font-bold font-heading text-[#1C1917]">
                  Let&apos;s Discuss Your Project
                </h2>
                <p className="text-[#57534E] text-xs sm:text-sm font-normal">
                  Connect with Mudasir Kamal&apos;s engineering team to review your custom web, logistics TMS, process automation, or AI system requirements.
                </p>
              </div>

              {status === "error" && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center gap-2 font-bold">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="audit-name" className="block text-xs font-bold text-[#1C1917] mb-1">
                    Full Name *
                  </label>
                  <input
                    id="audit-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#E7E5E4] rounded-xl text-[#1C1917] text-sm placeholder:text-[#78716C] focus:outline-none focus:border-[#C84B31] font-medium transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="audit-email" className="block text-xs font-bold text-[#1C1917] mb-1">
                    Work Email *
                  </label>
                  <input
                    id="audit-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#E7E5E4] rounded-xl text-[#1C1917] text-sm placeholder:text-[#78716C] focus:outline-none focus:border-[#C84B31] font-medium transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="audit-whatsapp" className="block text-xs font-bold text-[#1C1917] mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="audit-whatsapp"
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+1 (555) 019-2834"
                    className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#E7E5E4] rounded-xl text-[#1C1917] text-sm placeholder:text-[#78716C] focus:outline-none focus:border-[#C84B31] font-medium transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="audit-platform" className="block text-xs font-bold text-[#1C1917] mb-1">
                    Required Technology Service *
                  </label>
                  <select
                    id="audit-platform"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#E7E5E4] rounded-xl text-[#1C1917] text-sm focus:outline-none focus:border-[#C84B31] font-bold transition-colors"
                  >
                    <option value="Custom Web Development">Custom Web Development</option>
                    <option value="Logistics Solutions TMS">Logistics &amp; TMS Solutions</option>
                    <option value="Business Process Automation">Business Process Automation</option>
                    <option value="E-Commerce Automation">E-Commerce Multi-Store Automation</option>
                    <option value="Complex Integrations">Complex API &amp; ERP Integrations</option>
                    <option value="CRM and ERP Development">CRM &amp; ERP Development</option>
                    <option value="AI Solution Development">AI Solution &amp; Agent Engineering</option>
                    <option value="Full-Stack Custom System">Full-Stack Custom System</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full mt-2 py-3.5 bg-[#C84B31] hover:bg-[#B03D25] text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                      Analyzing Store Blueprint...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      Claim Free Agency Audit
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-[#78716C] font-medium mt-2">
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
