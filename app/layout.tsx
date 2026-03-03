import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Supatax.ai — AI-Powered Tax Tools for Freelancers & Self-Employed",
  description: "Free AI tax tools, calculators, and expert guides for freelancers, 1099 contractors, and self-employed professionals. File with confidence.",
  keywords: ["tax software", "freelancer taxes", "self-employment tax", "AI tax tools", "1099 taxes", "free tax calculator"],
  openGraph: {
    title: "Supatax.ai — AI-Powered Tax Tools",
    description: "Free AI tax tools and expert guides for freelancers and self-employed professionals.",
    type: "website",
    url: "https://supatax.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supatax.ai — AI-Powered Tax Tools",
    description: "Free AI tax tools for freelancers and self-employed professionals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
