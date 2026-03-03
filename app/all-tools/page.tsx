import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Search,
  Receipt,
  PenTool,
  Calculator,
  FileText,
  ImageIcon,
  FileSpreadsheet,
  FileCheck,
  Heart,
  BookOpen,
  Scroll,
  StickyNote,
  Award,
  Briefcase,
  BookHeart,
  Church,
  MessageSquare,
  Quote,
  ShoppingCart,
  Code,
  Eye,
  Gift,
  Type,
  Grid3X3,
  Map,
  Camera,
  Sparkles
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const toolCategories = [
  {
    name: "Document Generators",
    description: "Professional documents for business and personal use",
    tools: [
      { name: "Paystub Generator", description: "Create professional paystubs instantly", icon: Receipt, href: "/all-tools/paystub-generator" },
      { name: "Cover Letter Generator", description: "AI-powered job application letters", icon: PenTool, href: "/all-tools/cover-letter-generator" },
      { name: "Estimate Generator", description: "Professional project estimates", icon: FileSpreadsheet, href: "/all-tools/estimate-generator" },
      { name: "Quotation Generator", description: "Business quotes and proposals", icon: Quote, href: "/all-tools/quotation-generator" },
      { name: "Purchase Order Generator", description: "Standard PO documents", icon: ShoppingCart, href: "/all-tools/purchase-order-generator" },
    ],
  },
  {
    name: "Writing & Content",
    description: "AI writing assistants for any need",
    tools: [
      { name: "AI Paragraph Generator", description: "Clear, professional paragraphs", icon: FileText, href: "/all-tools/ai-paragraph-generator" },
      { name: "AI Poem Generator", description: "Creative poetry on any topic", icon: Sparkles, href: "/all-tools/ai-poem-generator" },
      { name: "AI Thank You Note", description: "Heartfelt gratitude messages", icon: Heart, href: "/all-tools/ai-thank-you-note-generator" },
      { name: "AI Notes Generator", description: "Organized study and meeting notes", icon: StickyNote, href: "/all-tools/ai-notes-generator" },
      { name: "AI Letter of Recommendation", description: "Professional endorsement letters", icon: Award, href: "/all-tools/ai-letter-of-recommendation-generator" },
      { name: "AI Job Description", description: "SEO-optimized job postings", icon: Briefcase, href: "/all-tools/ai-job-description-generator" },
      { name: "AI Fanfiction Generator", description: "Creative stories in your favorite universes", icon: BookHeart, href: "/all-tools/ai-fanfiction-generator" },
      { name: "AI Eulogy Generator", description: "Respectful funeral speeches", icon: Church, href: "/all-tools/ai-eulogy-generator" },
      { name: "AI Sermon Generator", description: "Thoughtful religious messages", icon: Scroll, href: "/all-tools/ai-sermon-generator" },
      { name: "AI Reddit Story", description: "Engaging stories for Reddit", icon: MessageSquare, href: "/all-tools/ai-reddit-story-generator" },
    ],
  },
  {
    name: "Tax Calculators",
    description: "Free tax calculations for freelancers",
    tools: [
      { name: "Self-Employment Tax Calculator", description: "Calculate 15.3% SE tax", icon: Calculator, href: "/self-employment-tax-calculator" },
      { name: "Quarterly Tax Calculator", description: "Estimate IRS payments", icon: Calculator, href: "/quarterly-tax-calculator" },
      { name: "Tax Refund Calculator", description: "Project your refund amount", icon: Calculator, href: "/tax-refund-calculator" },
      { name: "LLC Tax Calculator", description: "Business tax estimator", icon: Calculator, href: "/llc-tax-calculator" },
      { name: "QBI Deduction Calculator", description: "20% business deduction", icon: Calculator, href: "/qbi-deduction-calculator" },
      { name: "Freelancer Tax Calculator", description: "All-in-one tax estimator", icon: Calculator, href: "/freelancer-tax-calculator" },
    ],
  },
  {
    name: "Image Generators",
    description: "AI-powered image creation",
    tools: [
      { name: "AI Tattoo Generator", description: "Custom tattoo designs", icon: PenTool, href: "/all-tools/ai-tattoo-generator" },
      { name: "AI Storyboard Generator", description: "Visual story planning", icon: Grid3X3, href: "/all-tools/ai-storyboard-generator" },
      { name: "AI Caricature Generator", description: "Fun portrait caricatures", icon: Camera, href: "/all-tools/ai-caricature-generator" },
      { name: "AI Fantasy Map Generator", description: "World-building maps", icon: Map, href: "/all-tools/ai-fantasy-map-generator" },
      { name: "Birth Flower Bouquet", description: "Personalized flower designs", icon: Gift, href: "/all-tools/birth-flower-bouquet-generator" },
      { name: "Bubble Letter Generator", description: "Stylized text designs", icon: Type, href: "/all-tools/bubble-letter-generator" },
    ],
  },
  {
    name: "Utility Tools",
    description: "Helpful utilities for everyday tasks",
    tools: [
      { name: "HTML Form Generator", description: "Create web forms instantly", icon: Code, href: "/all-tools/html-form-generator" },
      { name: "Alt Text Generator", description: "SEO-friendly image descriptions", icon: Eye, href: "/all-tools/alt-text-generator" },
      { name: "Crossword Puzzle Generator", description: "Custom word puzzles", icon: Grid3X3, href: "/all-tools/crossword-puzzle-generator" },
      { name: "AI Progress Note Generator", description: "Clinical documentation", icon: FileCheck, href: "/all-tools/ai-progress-note-generator" },
    ],
  },
];

export const metadata = {
  title: "All AI Tools — Supatax",
  description: "30+ free AI-powered tools for freelancers, tax calculations, document generation, writing, and more.",
};

export default function AllToolsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-12 md:py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">All AI Tools</h1>
              <p className="text-xl text-muted-foreground mb-8">
                30+ free AI-powered generators and calculators. No signup required.
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search tools..." 
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tools by Category */}
        <section className="py-12">
          <div className="container">
            <div className="space-y-16">
              {toolCategories.map((category) => (
                <div key={category.name}>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {category.tools.map((tool) => (
                      <Link key={tool.name} href={tool.href}>
                        <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                          <CardHeader className="pb-3">
                            <tool.icon className="h-8 w-8 text-primary mb-2" />
                            <CardTitle className="text-base">{tool.name}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-sm">{tool.description}</CardDescription>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tax Guides CTA */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need Tax Guidance?
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                Explore our comprehensive tax guides covering software reviews, deductions, 
                self-employment tax, and more.
              </p>
              <Link href="/blog">
                <Button variant="secondary">
                  Browse Tax Guides
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
