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
  FileSpreadsheet,
  CalculatorIcon,
  ArrowUpRight,
  Star,
  Users,
  Clock,
  Building2,
  Briefcase,
  Scale
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
    name: "Tax Research Assistant",
    description: "AI-powered answers to complex tax questions with IRS citations",
    icon: FileText,
    href: "/all-tools/tax-research",
    color: "bg-blue-500",
  },
  {
    name: "Client Letter Generator",
    description: "Professional client communications and engagement letters",
    icon: PenTool,
    href: "/all-tools/client-letter-generator",
    color: "bg-purple-500",
  },
  {
    name: "Tax Calculators",
    description: "Accurate calculations for complex tax scenarios",
    icon: Calculator,
    href: "/all-tools",
    color: "bg-green-500",
  },
  {
    name: "IRS Notice Response",
    description: "Generate professional responses to IRS notices",
    icon: FileSpreadsheet,
    href: "/all-tools/irs-notice-response",
    color: "bg-orange-500",
  },
  {
    name: "Tax Memo Generator",
    description: "Comprehensive tax memorandums for client files",
    icon: Receipt,
    href: "/all-tools/tax-memo-generator",
    color: "bg-pink-500",
  },
  {
    name: "Form 1040 Review",
    description: "AI-assisted tax return review and error detection",
    icon: Shield,
    href: "/all-tools/form-1040-review",
    color: "bg-indigo-500",
  },
];

const stats = [
  { label: "AI Tools", value: "30+", icon: Zap },
  { label: "Tax Research", value: "120+", icon: FileText },
  { label: "Firms Using", value: "500+", icon: Building2 },
  { label: "Hours Saved", value: "10K+", icon: Clock },
];

const features = [
  {
    title: "IRS-Backed Answers",
    description: "Every answer includes citations from official IRS publications, regulations, and tax code.",
    icon: Shield,
  },
  {
    title: "Built for Professionals",
    description: "Designed specifically for CPAs, Enrolled Agents, and tax professionals.",
    icon: Briefcase,
  },
  {
    title: "Client-Ready Output",
    description: "Generate professional letters, memos, and documents ready for client delivery.",
    icon: FileText,
  },
  {
    title: "Complex Tax Scenarios",
    description: "Handle multi-entity structures, international tax, and advanced planning situations.",
    icon: Scale,
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
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
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
                AI Tax Assistant for Professionals
              </motion.div>

              {/* Headline */}
              <motion.h1 
                variants={fadeIn}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
              >
                AI-Powered Tax Research{" "}
                <span className="gradient-text">for Professionals</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p 
                variants={fadeIn}
                className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                Supatax.ai combines advanced AI with authoritative tax sources to help CPAs, 
                Enrolled Agents, and tax professionals research faster, write better client 
                communications, and deliver higher-value advisory services.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Link href="/all-tools">
                  <Button size="lg" className="gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg">
                    Explore AI Tools
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/tax-research">
                  <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-slate-300">
                    See How It Works
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
                  IRS Source Citations
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Built for Tax Pros
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

        {/* How It Works Section */}
        <section className="py-24 bg-white border-y border-slate-100">
          <div className="container">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Tax Professionals Use Supatax</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                From complex research questions to client-ready documents — streamline your workflow.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                {
                  step: "01",
                  title: "Ask Complex Questions",
                  description: "Enter your tax research question in natural language. Our AI understands context and nuance.",
                },
                {
                  step: "02",
                  title: "Get Cited Answers",
                  description: "Receive comprehensive answers with inline citations to IRS publications, regulations, and case law.",
                },
                {
                  step: "03",
                  title: "Create Client Documents",
                  description: "Transform research into professional client memos, letters, and advisory documents instantly.",
                },
              ].map((item) => (
                <motion.div key={item.step} variants={fadeIn} className="relative">
                  <div className="text-5xl font-bold text-slate-100 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Popular Tools Section */}
        <section className="py-24 bg-slate-50">
          <div className="container">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Tools for Tax Professionals</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Purpose-built tools to accelerate your tax practice workflow.
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
                    <Card className="h-full group hover:shadow-xl transition-all duration-300 border-slate-100 hover:border-blue-200 cursor-pointer overflow-hidden bg-white">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Tax Professionals Choose Supatax</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Built specifically for the demands of modern tax practice.
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

        {/* Tax Research CTA */}
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
                Stop Searching. Start Finding.
              </h2>
              <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                Tax research that actually understands your question. Get cited answers 
                from authoritative sources in seconds, not hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/tax-research">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8">
                    Try Tax Research
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8">
                    View Pricing
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
                Ready to Transform Your Tax Practice?
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Join hundreds of tax professionals using AI to deliver better client service.
              </p>
              <Link href="/signup">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-6 text-lg">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <p className="text-sm text-slate-400 mt-4">
                14-day free trial. No credit card required.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
