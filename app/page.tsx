import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  FileSpreadsheet
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const featuredTools = [
  {
    name: "Paystub Generator",
    description: "Create professional paystubs instantly for freelancers and contractors.",
    icon: Receipt,
    href: "/all-tools/paystub-generator",
    category: "Document",
  },
  {
    name: "Cover Letter Generator",
    description: "AI-powered cover letters tailored to any job description.",
    icon: PenTool,
    href: "/all-tools/cover-letter-generator",
    category: "Writing",
  },
  {
    name: "Tax Calculators",
    description: "Self-employment tax, quarterly payments, and refund estimators.",
    icon: Calculator,
    href: "/all-tools",
    category: "Calculator",
  },
  {
    name: "AI Paragraph Generator",
    description: "Generate clear, professional paragraphs for any topic.",
    icon: FileText,
    href: "/all-tools/ai-paragraph-generator",
    category: "Writing",
  },
  {
    name: "AI Tattoo Generator",
    description: "Design custom tattoo concepts with AI.",
    icon: ImageIcon,
    href: "/all-tools/ai-tattoo-generator",
    category: "Image",
  },
  {
    name: "Estimate Generator",
    description: "Professional project estimates for clients.",
    icon: FileSpreadsheet,
    href: "/all-tools/estimate-generator",
    category: "Document",
  },
];

const features = [
  {
    title: "30+ Free AI Tools",
    description: "From paystubs to tax calculators — all free, no signup required.",
    icon: Zap,
  },
  {
    title: "Expert Tax Guides",
    description: "120+ articles following Koray's SEO framework for accurate, helpful content.",
    icon: FileText,
  },
  {
    title: "Built for Freelancers",
    description: "Designed specifically for 1099 contractors, gig workers, and self-employed pros.",
    icon: TrendingUp,
  },
  {
    title: "100% Free",
    description: "No hidden fees, no subscriptions. Just free tools that work.",
    icon: Shield,
  },
];

const calculators = [
  { name: "Self-Employment Tax", href: "/self-employment-tax-calculator", description: "Calculate 15.3% SE tax" },
  { name: "Quarterly Tax", href: "/quarterly-tax-calculator", description: "Estimate IRS payments" },
  { name: "Tax Refund", href: "/tax-refund-calculator", description: "Project your refund" },
  { name: "QBI Deduction", href: "/qbi-deduction-calculator", description: "20% business deduction" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="container relative">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium mb-6">
                <Sparkles className="mr-2 h-4 w-4" />
                30+ Free AI-Powered Tools
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                Tax Tools and Resources for{" "}
                <span className="text-primary">Freelancers</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Free AI generators, tax calculators, and expert guides for 1099 contractors, 
                gig workers, and self-employed professionals. No signup required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/all-tools">
                  <Button size="lg" className="gap-2">
                    Explore All Tools
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/tax-software">
                  <Button size="lg" variant="outline">
                    Tax Software Guide
                  </Button>
                </Link>
              </div>
              
              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  100% Free
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  No Signup Required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  AI-Powered
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Use Supatax?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built specifically for freelancers and self-employed professionals who need reliable tax tools without the complexity.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tools Section */}
        <section className="py-20">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Popular Tools</h2>
                <p className="text-muted-foreground max-w-xl">
                  Our most-used AI generators and calculators. Free, instant, and professional-quality results.
                </p>
              </div>
              <Link href="/all-tools" className="mt-4 md:mt-0">
                <Button variant="outline" className="gap-2">
                  View All 30+ Tools
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTools.map((tool) => (
                <Link key={tool.name} href={tool.href}>
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <tool.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted">
                          {tool.category}
                        </span>
                      </div>
                      <CardTitle className="text-lg mt-4">{tool.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Calculators Section */}
        <section id="calculators" className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Free Tax Calculators</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Accurate, instant calculations for self-employment tax, quarterly payments, and more.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {calculators.map((calc) => (
                <Link key={calc.name} href={calc.href}>
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                    <CardHeader className="pb-3">
                      <Calculator className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-base">{calc.name} Calculator</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{calc.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Tax Guides CTA */}
        <section className="py-20">
          <div className="container">
            <div className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16 text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Master Your Taxes with Expert Guides
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8">
                  120+ comprehensive articles covering tax software reviews, deductions, 
                  self-employment tax, and more. Written following Koray's semantic SEO framework.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/tax-software">
                    <Button size="lg" variant="secondary" className="gap-2">
                      Tax Software Reviews
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/self-employment-tax">
                    <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                      SE Tax Guide
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-muted/50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Taxes?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Join thousands of freelancers and self-employed professionals using our free AI tools.
            </p>
            <Link href="/all-tools">
              <Button size="lg" className="gap-2">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
