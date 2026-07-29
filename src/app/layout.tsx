import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Outfit } from "next/font/google";
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

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ecombulls — AI & Web Automation Solutions",
  description:
    "Ecombulls builds custom web applications, logistics TMS software, business process automation, and multi-channel e-commerce infrastructure.",
  keywords: [
    "Ecommerce Automation",
    "Custom Web Development",
    "Logistics TMS Software",
    "Process Automation",
    "AI Solution Development",
    "Mudasir Kamal",
    "Ecombulls",
  ],
  authors: [{ name: "Mudasir Kamal", url: "https://ecombulls.com" }],
  openGraph: {
    title: "Ecombulls — AI & Web Systems Engineering",
    description:
      "Custom web platforms, high-load logistics TMS, process automation, and intelligent e-commerce systems.",
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
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} ${outfit.variable}`}>
      <body className="bg-background text-text-primary antialiased selection:bg-accent/30 selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
