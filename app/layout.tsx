import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { MobileNav } from "./components/MobileNav";
import "./globals.css";
import Script from "next/script";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teros AI: Dominate Your Market With AI",
  description: "Unlock explosive growth with AI-powered sales and customer support solutions. Generate high-quality leads, automate key processes, and transform your B2B business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js" />
        <Script src="/chatbot.js" />
        {/* <Script src="/callbot.js"/> */}
      </body>
    </html>
  );
}