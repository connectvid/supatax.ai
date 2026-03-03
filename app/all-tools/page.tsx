"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Search,
  BookOpen,
  Calculator,
  FileText,
  Mail,
  Shield,
  FileSignature,
  Building2,
  Scale,
  Landmark,
  Receipt,
  FileCheck,
  PenTool,
  Briefcase,
  Gavel,
  DollarSign,
  TrendingUp,
  Users,
  ClipboardList,
  BarChart3,
  Clock,
  Wallet,
  Package,
  AlertTriangle,
  HelpCircle,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

const toolCategories = [
  {
    name: "Research & Analysis",
    description: "AI-powered tax research and analysis tools",
    tools: [
      { name: "Tax Research Assistant", description: "AI-powered research with IRS citations", icon: BookOpen, href: "/all-tools/tax-research", color: "bg-blue-500" },
      { name: "Tax Memo Generator", description: "Professional memoranda with proper citations", icon: FileText, href: "/all-tools/tax-memo-generator", color: "bg-purple-500" },
      { name: "Code Section Finder", description: "Quick IRC section lookup and analysis", icon: Landmark, href: "/all-tools/code-section-finder", color: "bg-indigo-500" },
      { name: "Revenue Ruling Analyzer", description: "Analyze revenue rulings and procedures", icon: Scale, href: "/all-tools/revenue-ruling-analyzer", color: "bg-slate-500" },
    ],
  },
  {
    name: "Client Communications",
    description: "Generate professional client correspondence",
    tools: [
      { name: "Client Letter Generator", description: "Professional tax communications", icon: Mail, href: "/all-tools/client-letter", color: "bg-green-500" },
      { name: "Engagement Letter Generator", description: "Comprehensive engagement letters", icon: FileSignature, href: "/all-tools/engagement-letter", color: "bg-cyan-500" },
      { name: "IRS Notice Response", description: "Response letters for IRS notices", icon: Shield, href: "/all-tools/irs-notice-response", color: "bg-red-500" },
      { name: "Tax Organizer Generator", description: "Client tax organizers by entity type", icon: ClipboardList, href: "/all-tools/tax-organizer", color: "bg-amber-500" },
    ],
  },
  {
    name: "Calculators",
    description: "Essential tax calculation tools",
    tools: [
      { name: "QBI Deduction Calculator", description: "Section 199A calculations", icon: Calculator, href: "/all-tools/qbi-calculator", color: "bg-emerald-500" },
      { name: "MACRS Depreciation", description: "IRS depreciation schedules", icon: BarChart3, href: "/all-tools/depreciation", color: "bg-orange-500" },
      { name: "Estimated Tax Calculator", description: "Form 1040-ES calculations", icon: DollarSign, href: "/all-tools/estimated-tax", color: "bg-blue-500" },
      { name: "Self-Employment Tax", description: "Schedule SE calculations", icon: Receipt, href: "/all-tools/self-employment-tax", color: "bg-teal-500" },
      { name: "Like-Kind Exchange", description: "1031 exchange analysis", icon: Building2, href: "/all-tools/like-kind-exchange", color: "bg-violet-500" },
      { name: "Passive Activity Loss", description: "PAL limitation calculator", icon: TrendingUp, href: "/all-tools/pal-calculator", color: "bg-pink-500" },
    ],
  },
  {
    name: "Entity & Planning",
    description: "Entity selection and tax planning tools",
    tools: [
      { name: "Business Entity Selector", description: "Compare LLC, S-Corp, C-Corp", icon: Building2, href: "/all-tools/entity-selector", color: "bg-indigo-500" },
      { name: "Compensation Planner", description: "Reasonable compensation analysis", icon: Wallet, href: "/all-tools/compensation-planner", color: "bg-rose-500" },
      { name: "Retirement Contribution", description: "401k/SEP/SIMPLE comparisons", icon: Clock, href: "/all-tools/retirement-contribution", color: "bg-lime-600" },
      { name: "Health Insurance Deduction", description: "Self-employed health deduction", icon: FileCheck, href: "/all-tools/health-insurance-deduction", color: "bg-cyan-600" },
    ],
  },
  {
    name: "Compliance & Audit",
    description: "Tools for IRS compliance and audit support",
    tools: [
      { name: "Penalty Abatement Request", description: "First-time abatement letters", icon: Gavel, href: "/all-tools/penalty-abatement", color: "bg-amber-600" },
      { name: "Installment Agreement", description: "IRS payment plan requests", icon: DollarSign, href: "/all-tools/installment-agreement", color: "bg-green-600" },
      { name: "Audit Support Memo", description: "Prepare for IRS examinations", icon: Briefcase, href: "/all-tools/audit-support", color: "bg-blue-600" },
      { name: "Offer in Compromise", description: "OIC worksheet and letter prep", icon: HandCoinsIcon, href: "/all-tools/offer-in-compromise", color: "bg-purple-600" },
    ],
  },
  {
    name: "Specialized Topics",
    description: "Niche tax area tools",
    tools: [
      { name: "Cryptocurrency Tax Helper", description: "Crypto gains and reporting", icon: TrendingUp, href: "/all-tools/crypto-tax", color: "bg-yellow-500" },
      { name: "Rental Property Analysis", description: "Schedule E and 8825 support", icon: Building2, href: "/all-tools/rental-property", color: "bg-emerald-600" },
      { name: "Gift Tax Calculator", description: "Form 709 gift calculations", icon: GiftIcon, href: "/all-tools/gift-tax", color: "bg-rose-400" },
      { name: "Estate Tax Estimator", description: "Basic estate tax projections", icon: Users, href: "/all-tools/estate-tax", color: "bg-slate-600" },
      { name: "FBAR/FATCA Helper", description: "Foreign account reporting", icon: GlobeIcon, href: "/all-tools/fbar-fatca", color: "bg-blue-400" },
      { name: "Work Opportunity Credit", description: "WOTC eligibility screening", icon: Users, href: "/all-tools/wotc-calculator", color: "bg-green-400" },
    ],
  },
];

function HandCoinsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
      <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 16 6 6" />
      <circle cx="16" cy="9" r="2.9" />
      <circle cx="6" cy="5" r="3" />
    </svg>
  );
}

function GiftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 2.5 2.5v5" />
      <path d="M16.5 8v-2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-2.5 2.5h-5" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export default function AllToolsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl">Supatax</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/blog">
              <Button variant="ghost">Tax Guides</Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50/50 to-slate-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  AI Tools for Tax <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">Professionals</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  30+ specialized tools for CPAs, EAs, and tax professionals. 
                  Research, calculate, and communicate with AI assistance.
                </p>
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input 
                    placeholder="Search tools..." 
                    className="pl-10 h-12"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tools by Category */}
        <section className="py-12">
          <div className="container">
            <div className="space-y-16">
              {toolCategories.map((category, idx) => (
                <motion.div 
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                    <p className="text-slate-600">{category.description}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.tools.map((tool) => (
                      <Link key={tool.name} href={tool.href}>
                        <Card className="h-full transition-all hover:shadow-lg hover:border-sky-200 group">
                          <CardHeader className="pb-3">
                            <div className={`w-10 h-10 rounded-lg ${tool.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                              <tool.icon className="h-5 w-5 text-white" />
                            </div>
                            <CardTitle className="text-base">{tool.name}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-sm">{tool.description}</CardDescription>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need More Advanced Tools?</h2>
              <p className="text-slate-400 mb-8">
                Get unlimited access to all AI tools, advanced calculators, and priority support 
                with a Supatax Pro subscription.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" className="bg-sky-500 hover:bg-sky-600">
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold">Supatax</span>
            </div>
            <p className="text-slate-500 text-sm">© 2024 Supatax.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
