"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export const AmazonLogo: React.FC<LogoProps> = ({ className = "h-6 w-auto", size }) => (
  <svg
    viewBox="0 0 100 32"
    fill="currentColor"
    className={className}
    style={size ? { height: size, width: "auto" } : undefined}
    aria-label="Amazon Logo"
  >
    <path d="M16.5 12.3c-2.8 0-4.6 1.8-4.6 4.3 0 2.4 1.7 4.1 4.4 4.1 2.3 0 3.7-1.1 4.5-2.2v1.9h3.6V12.7h-3.6v1.7c-.8-1.2-2.1-2.1-4.3-2.1zm.9 6.2c-1.4 0-2.3-1-2.3-2.2s.9-2.2 2.3-2.2 2.3 1 2.3 2.2-.9 2.2-2.3 2.2zM28.4 12.7v1.8c.8-1.2 2.2-2.2 4.1-2.2 1.8 0 3.2.9 3.8 2.5.9-1.6 2.4-2.5 4.3-2.5 2.5 0 4.2 1.7 4.2 4.8v5.5h-3.6v-4.9c0-1.6-.7-2.4-1.9-2.4-1.3 0-2.1.9-2.1 2.4v4.9h-3.6v-4.9c0-1.6-.7-2.4-1.9-2.4-1.3 0-2.1.9-2.1 2.4v4.9h-3.6v-7.9h2.4zM53.5 12.3c-3.7 0-6.1 2.7-6.1 6.1 0 3.4 2.4 6.1 6.1 6.1 3.7 0 6.1-2.7 6.1-6.1 0-3.4-2.4-6.1-6.1-6.1zm0 9c-1.8 0-2.8-1.4-2.8-2.9 0-1.5 1-2.9 2.8-2.9 1.8 0 2.8 1.4 2.8 2.9 0 1.5-1 2.9-2.8 2.9zM62.6 12.7h3.6v1.1c.8-1 2.1-1.6 3.5-1.6 2.5 0 4.1 1.7 4.1 4.6v5.8h-3.6v-5.2c0-1.5-.7-2.2-1.9-2.2-1.3 0-2.1.9-2.1 2.3v5.1h-3.6v-7.9z" />
    <path d="M10.8 24.8c12.2 4.4 29.5 4.4 43.1-1.8 1.4-.6.2-1.5-.8-1.1-12.8 5.7-30.8 4.2-42.3.9-.9-.3-1.6 1.1-. 2 2z" />
    <path d="M53.1 21.6c.6-.7 1.8-.4 2.4-.2.6.2.7.9.3 1.5-.9 1.3-2.6 1.8-3.7 1-.7-.5-.4-1.7 1-2.3z" />
  </svg>
);

export const EBayLogo: React.FC<LogoProps> = ({ className = "h-6 w-auto", size }) => (
  <svg
    viewBox="0 0 100 40"
    className={className}
    style={size ? { height: size, width: "auto" } : undefined}
    aria-label="eBay Logo"
  >
    <path
      d="M17.6 20.8c-.8-1.5-2.2-2.3-4.3-2.3-2.5 0-4.3 1.2-4.3 3.1 0 1.9 1.4 2.7 3.6 3.1l2.4.4c2.6.5 4.3 1.6 4.3 4.2 0 3.3-2.9 5.2-6.8 5.2-3.8 0-6.4-1.7-7.2-4.6l3.5-1.1c.5 1.7 2 2.6 3.8 2.6 1.8 0 3.2-.8 3.2-2.2 0-1.4-1.2-2-3.3-2.4l-2.6-.5c-2.8-.5-4.3-2-4.3-4.4 0-3.3 2.9-5.1 6.5-5.1 3.5 0 5.7 1.6 6.5 4z"
      fill="#E53238"
    />
    <path
      d="M32.8 17.5v16.7h-3.8v-2.3c-1 1.7-2.7 2.6-4.9 2.6-4.2 0-7.3-3.4-7.3-8.5s3.1-8.5 7.3-8.5c2.2 0 3.9.9 4.9 2.5v-2.5h3.8zm-4 8.5c0-3.1-1.8-5.3-4.4-5.3-2.6 0-4.4 2.2-4.4 5.3s1.8 5.3 4.4 5.3c2.6 0 4.4-2.2 4.4-5.3z"
      fill="#0064D2"
    />
    <path
      d="M48.2 17.5v16.7h-3.8v-2.3c-1 1.7-2.7 2.6-4.9 2.6-4.2 0-7.3-3.4-7.3-8.5s3.1-8.5 7.3-8.5c2.2 0 3.9.9 4.9 2.5v-2.5h3.8zm-4 8.5c0-3.1-1.8-5.3-4.4-5.3-2.6 0-4.4 2.2-4.4 5.3s1.8 5.3 4.4 5.3c2.6 0 4.4-2.2 4.4-5.3z"
      fill="#F5AF02"
    />
    <path
      d="M50.6 17.5h4.1l4 10.9 4.1-10.9h4.1l-6.7 16.9h-3.8l2.2-5.1z"
      fill="#86B817"
    />
  </svg>
);

export const WalmartLogo: React.FC<LogoProps> = ({ className = "h-6 w-auto", size }) => (
  <svg
    viewBox="0 0 120 32"
    fill="currentColor"
    className={className}
    style={size ? { height: size, width: "auto" } : undefined}
    aria-label="Walmart Logo"
  >
    <path d="M12 2a2 2 0 0 1 2 2v6a2 2 0 1 1-4 0V4a2 2 0 0 1 2-2zm8.5 4.5a2 2 0 0 1 2.7.7l3 5.2a2 2 0 1 1-3.4 2l-3-5.2a2 2 0 0 1 .7-2.7zm-17 0a2 2 0 0 1 .7 2.7l-3 5.2a2 2 0 0 1-3.4-2l3-5.2a2 2 0 0 1 2.7-.7zM12 18a2 2 0 0 1 2 2v6a2 2 0 1 1-4 0v-6a2 2 0 0 1 2-2zm11.2 1.3a2 2 0 0 1 .7 2.7l-3 5.2a2 2 0 1 1-3.4-2l3-5.2a2 2 0 0 1 2.7-.7zM.8 19.3a2 2 0 0 1 2.7.7l3 5.2a2 2 0 1 1-3.4 2l-3-5.2a2 2 0 0 1 .7-2.7z" fill="#FFC220" />
    <text x="32" y="24" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill="currentColor">
      Walmart
    </text>
  </svg>
);

export const TikTokShopLogo: React.FC<LogoProps> = ({ className = "h-6 w-auto", size }) => (
  <svg
    viewBox="0 0 130 32"
    fill="currentColor"
    className={className}
    style={size ? { height: size, width: "auto" } : undefined}
    aria-label="TikTok Shop Logo"
  >
    <path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2V2h-3.4v13.7a2.9 2.9 0 1 1-2.9-2.9c.1 0 .3 0 .4.1V9.3a6.3 6.3 0 1 0 5.9 6.3V9.5a8.2 8.2 0 0 0 4.8 1.5V7.5a4.8 4.8 0 0 1-1-.8z" />
    <text x="26" y="22" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="currentColor">
      TikTok Shop
    </text>
  </svg>
);

export const ShopifyLogo: React.FC<LogoProps> = ({ className = "h-6 w-auto", size }) => (
  <svg
    viewBox="0 0 110 32"
    fill="currentColor"
    className={className}
    style={size ? { height: size, width: "auto" } : undefined}
    aria-label="Shopify Logo"
  >
    <path d="M22.3 5.5s-.3 0-.5.2l-2.1 2.1c-.2.2-.2.5 0 .7l.5.5c.2.2.5.2.7 0l2.1-2.1c.2-.2.2-.5 0-.7l-.7-.7zM18.8 9.5l-9.2 2.7s-.6.2-.7.6L5 25.5s-.2.6.2.9c.3.2.7.2.9 0l6.2-4.2 6.2 4.2c.2.2.6.2.9 0 .4-.3.2-.9.2-.9l-3.9-12.7c-.1-.4-.7-.6-.7-.6l-9.2-2.7zm2.4 12.2l-4.7-3.2 1.3-4.3 3.4 7.5z" />
    <text x="28" y="23" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="currentColor">
      Shopify
    </text>
  </svg>
);
