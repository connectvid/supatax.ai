"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calculator, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  TrendingUp,
  Shield,
  Zap,
  Receipt,
  PenTool,
  ImageIcon,
  FileSpreadsheet,
  CalculatorIcon,
  ArrowUpRight,
  Star,
  Users,
  Clock
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const featuredTools = [
  {
    name: "Paystub Generator",
    description: "Create professional paystubs for freelancers and contractors",
    icon: Receipt,
    href: "/all-tools/paystub-generator",
    color: "bg-blue-500",
  },
  {
    name: "Cover Letter Generator",
    description: "AI-powered cover letters tailored to any job",
    icon: PenTool,
    href: "/all-tools/cover-letter-generator",
    color: "bg-purple-500",
  },
  {
    name: "Tax Calculators",
    description: "SE tax, quarterly payments, and refund estimators",
    icon: Calculator,
    href: "/all-tools",
    color: "bg-green-500",
  },
  {
    name: "AI Paragraph Generator",
    description: "Generate clear, professional paragraphs instantly",
    icon: FileText,
    href: "/all-tools/ai-paragraph-generator",
    color: "bg-orange-500",
  },
  {
    name: "AI Tattoo Generator",
    description: "Design custom tattoo concepts with AI",
    icon: ImageIcon,
    href: "/all-tools/ai-tattoo-generator",
    color: "bg-pink-500",
  },
  {
    name: "Estimate Generator",
    description: "Professional project estimates for clients",
    icon: FileSpreadsheet,
    href: "/all-tools/estimate-generator",
    color: "bg-indigo-500",
  },
];

const stats = [
  { label: "AI Tools", value: "30+", icon: Zap },
  { label: "Tax Guides", value: "120+", icon: FileText },
  { label: "Happy Users", value: "50K+", icon: Users },
  { label: "Free Forever", value: "100%", icon: Star },
];

const calculators = [
  { name: "Self-Employment Tax", href: "/self-employment-tax-calculator", description: "Calculate 15.3% SE tax instantly", icon: CalculatorIcon },
  { name: "Quarterly Tax", href: "/quarterly-tax-calculator", description: "Estimate IRS payments accurately", icon: Clock },
  { name: "Tax Refund", href: "/tax-refund-calculator", description: "Project your refund amount", icon: TrendingUp },
  { name: "QBI Deduction", href: "/qbi-deduction-calculator", description: "20% business deduction calc", icon: Shield },
];

const features = [
  {
    title: "Completely Free",
    description: "All 30+ AI tools are free to use. No hidden fees, no credit card required.",
    icon: Star,
  },
  {
    title: "No Signup Needed",
    description: "Start using our tools immediately. No account creation or login required.",
    icon: Zap,
  },
  {
    title: "Professional Quality",
    description: "AI-powered by GPT-4 and DALL-E 3 for professional-grade results.",
    icon: Shield,
  },
  {
    title: "Tax Expertise",
    description: "120+ tax guides written by experts following Koray's SEO framework.",
    icon: FileText,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
            <div className="absolute top-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" />
          </div>

          <div className="container relative">
            <motion.div 
              className="mx-auto max-w-4xl text-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Badge */}
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-8">
                <Sparkles className="h-4 w-4" />
                30+ Free AI-Powered Tools
              </motion.div>

              {/* Headline */}
              <motion.h1 
                variants={fadeIn}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
              >
                Tax Tools & Resources for{" "}
                <span className="gradient-text">Freelancers</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p 
                variants={fadeIn}
                className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                Free AI generators, tax calculators, and expert guides for 1099 contractors, 
                gig workers, and self-employed professionals. No signup required.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Link href="/all-tools">
                  <Button size="lg" className="gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg">
                    Explore All Tools
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/tax-software">
                  <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-slate-300">
                    Tax Software Guide
                  </Button>
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div 
                variants={fadeIn}
                className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  100% Free
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  No Signup Required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  AI-Powered by GPT-4
                </div>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeIn}
                  className="text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm"
                >
                  <stat.icon className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Popular Tools Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular AI Tools</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Our most-used free AI generators. Professional results in seconds.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {featuredTools.map((tool) => (
                <motion.div key={tool.name} variants={fadeIn}>
                  <Link href={tool.href}>
                    <Card className="h-full group hover:shadow-xl transition-all duration-300 border-slate-100 hover:border-blue-200 cursor-pointer overflow-hidden">
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <tool.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                          {tool.name}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {tool.description}
                        </p>
                        <div className="mt-4 flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          Try it now
                          <ArrowUpRight className="h-4 w-4 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="text-center mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Link href="/all-tools">
                <Button variant="outline" size="lg" className="gap-2">
                  View All 30+ Tools
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Tax Calculators Section */}
        <section className="py-24 bg-slate-50">
          <div className="container">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Tax Calculators</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Accurate calculations for self-employment tax, quarterly payments, and more.
              </p>
            </motion.div>

            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {calculators.map((calc) => (
                <motion.div key={calc.name} variants={fadeIn}>
                  <Link href={calc.href}>
                    <Card className="h-full group hover:shadow-lg transition-all duration-300 border-slate-200 hover:border-blue-300 cursor-pointer bg-white">
                      <CardContent className="p-6">
                        <calc.icon className="h-10 w-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="font-semibold mb-2 text-slate-900">{calc.name}</h3>
                        <p className="text-sm text-slate-500">{calc.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Supatax?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Built specifically for freelancers and self-employed professionals.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {features.map((feature) => (
                <motion.div key={feature.title} variants={fadeIn} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-5">
                    <feature.icon className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Tax Guides CTA */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="container">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Master Your Taxes with Expert Guides
              </h2>
              <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                120+ comprehensive articles covering tax software reviews, deductions, 
                self-employment tax, and more. Written following Koray's semantic SEO framework.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/tax-software">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8">
                    Tax Software Reviews
                  </Button>
                </Link>
                <Link href="/self-employment-tax">
                  <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8">
                    SE Tax Guide
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Simplify Your Taxes?
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Join thousands of freelancers and self-employed professionals using our free AI tools.
              </p>
              <Link href="/all-tools">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-6 text-lg">
                  Get Started Free
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <p className="text-sm text-slate-400 mt-4">
                No credit card required. No signup needed.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
