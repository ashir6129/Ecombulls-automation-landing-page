import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ecombulls — AI Ecommerce Automation Agency for Growth Agencies",
  description:
    "Ecombulls automates multi-channel inventory, order fulfillment, pricing sync, and catalog operations for agencies managing stores on Amazon, eBay, Walmart, TikTok Shop, and Shopify.",
  keywords: [
    "Ecommerce Automation",
    "Amazon Automation",
    "Shopify AI Sync",
    "Walmart Marketplace Automation",
    "TikTok Shop Automation",
    "Ecommerce Agency Scaling",
    "Mudasir Kamal",
    "Ecombulls",
  ],
  authors: [{ name: "Mudasir Kamal", url: "https://ecombulls.com" }],
  openGraph: {
    title: "Ecombulls — AI Ecommerce Automation System",
    description:
      "Automate multi-channel ecommerce ops across Amazon, eBay, Walmart, TikTok Shop, and Shopify with zero human latency.",
    type: "website",
    siteName: "Ecombulls",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="bg-background text-text-primary antialiased selection:bg-accent/30 selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
