"use client";

import React from "react";
import { ArrowRight, Code, Truck, Workflow, ShoppingBag, Network, Database, Bot } from "lucide-react";

interface OtherService {
  id: string;
  title: string;
  description: string;
  gradientFrom: string;
  icon: React.ReactNode;
}

const OTHER_SERVICES: OtherService[] = [
  {
    id: "web-dev",
    title: "Custom Web Development",
    description: "Achieve your business goals with our custom web development. Get unique solutions for digital success.",
    gradientFrom: "from-sky-500/15",
    icon: <Code className="w-5 h-5 text-sky-600" />,
  },
  {
    id: "logistics-dev",
    title: "Logistics Solutions Development",
    description: "Optimize your logistics with tailored software solutions. Streamline processes, boost efficiency, and enhance productivity with integrated software.",
    gradientFrom: "from-emerald-500/15",
    icon: <Truck className="w-5 h-5 text-emerald-600" />,
  },
  {
    id: "process-auto",
    title: "Business Process Automation",
    description: "Maximize efficiency with our process automation solutions. Optimize tasks to free up time and resources for higher-value activities.",
    gradientFrom: "from-amber-500/15",
    icon: <Workflow className="w-5 h-5 text-amber-600" />,
  },
  {
    id: "ecom-auto",
    title: "E-Commerce Automation",
    description: "Unlock potential with our E-Commerce automation solutions. Integrate and customize platforms to boost profitability and sales.",
    gradientFrom: "from-indigo-500/15",
    icon: <ShoppingBag className="w-5 h-5 text-indigo-600" />,
  },
  {
    id: "complex-integrations",
    title: "Complex Integrations",
    description: "Connect applications using API integration and get the most out of them.",
    gradientFrom: "from-[#C84B31]/20",
    icon: <Network className="w-5 h-5 text-[#C84B31]" />,
  },
  {
    id: "crm-erp-dev",
    title: "CRM and ERP Development",
    description: "Our intuitive platforms streamline processes, boost productivity, and deliver exceptional experiences.",
    gradientFrom: "from-pink-500/15",
    icon: <Database className="w-5 h-5 text-pink-600" />,
  },
  {
    id: "ai-solution-dev",
    title: "AI Solution Development",
    description: "We build custom AI solutions — from chatbots to full platforms — tailored to automate, optimize, and scale your business.",
    gradientFrom: "from-cyan-500/15",
    icon: <Bot className="w-5 h-5 text-cyan-600" />,
  },
];

interface OtherServicesSectionProps {
  onOpenAudit: () => void;
}

export const OtherServicesSection: React.FC<OtherServicesSectionProps> = ({ onOpenAudit }) => {
  return (
    <section id="other-services" className="py-24 bg-[#FAF8F5] relative overflow-hidden border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C84B31]/10 border border-[#C84B31]/25 text-[#C84B31] text-xs font-bold font-mono">
            <span>Specialized Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#1C1917] tracking-tight leading-tight">
            Comprehensive <span className="text-gradient-coral">Engineering Services</span>
          </h2>
          <p className="text-[#57534E] text-base sm:text-lg font-normal">
            Custom web software, logistics engineering, CRM/ERP platforms, complex API middleware, and AI solutions built to scale.
          </p>
        </div>

        {/* 7-Card Grid (Matching Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OTHER_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[#E7E5E4] rounded-3xl p-8 flex flex-col justify-between card-shadow-hover relative overflow-hidden group min-h-[260px] glow-card"
            >
              {/* Top-Right Corner Gradient Glow (Exact Visual Match to Screenshot) */}
              <div
                className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${service.gradientFrom} to-transparent rounded-bl-full pointer-events-none transition-opacity duration-300 opacity-90 group-hover:opacity-100`}
              />

              <div className="space-y-4 relative z-10">
                <div className="w-11 h-11 rounded-2xl bg-[#FAF8F5] border border-[#E7E5E4] flex items-center justify-center shrink-0 shadow-2xs">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold font-display text-[#1C1917] leading-snug group-hover:text-[#C84B31] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* Learn More Button */}
              <div className="pt-6 relative z-10">
                <button
                  onClick={onOpenAudit}
                  className="flex items-center gap-3 text-xs font-bold text-[#1C1917] group-hover:text-[#C84B31] transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-[#1C1917] text-white flex items-center justify-center group-hover:bg-[#C84B31] transition-colors shadow-xs">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <span>Learn more</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
