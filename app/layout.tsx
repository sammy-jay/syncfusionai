import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { MobileNav } from "./components/MobileNav";
import "./globals.css";
import Script from "next/script";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syncfusion AI",
  description: "Leading IT Solutions & Services Provider",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js" />
        <Script src="/chatbot.js" />
        {/* <Script src="/callbot.js"/> */}
      </body>
    </html>
  );
}
