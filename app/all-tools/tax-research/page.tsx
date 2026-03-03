"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  FileText, 
  ArrowLeft, 
  Loader2, 
  Copy, 
  CheckCircle2,
  Sparkles,
  BookOpen,
  Scale
} from "lucide-react";
import { toast } from "sonner";

export default function TaxResearchTool() {
  const [question, setQuestion] = useState("");
  const [context, setContext] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) {
      toast.error("Please enter a tax question");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/generate/text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemPrompt: `You are an expert tax research AI assistant for CPAs, Enrolled Agents, and tax professionals. 

Your responses must:
1. Cite specific IRC sections, Treasury Regulations, IRS Publications, and relevant case law
2. Include the full citation format (e.g., IRC § 162(a); Treas. Reg. § 1.162-1; Rev. Rul. 93-13)
3. Explain the practical application for tax professionals
4. Note any recent law changes or pending legislation
5. Highlight potential pitfalls or areas of IRS scrutiny
6. Suggest related code sections or authorities to review

Format your response with clear headings and numbered citations. Always include a "Key Takeaways" section at the end.`,
          userPrompt: `Tax Research Question: ${question}\n\nAdditional Context: ${context || "None provided"}`,
          temperature: 0.5,
          maxTokens: 2500,
        }),
      });

      if (!response.ok) throw new Error("Failed to generate");

      const data = await response.json();
      setResult(data.content);
      toast.success("Research complete!");
    } catch (error) {
      toast.error("Failed to generate research. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container h-16 flex items-center gap-4">
          <Link href="/all-tools">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
              <FileText className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="font-semibold">Tax Research Assistant</h1>
              <p className="text-xs text-slate-500">AI-powered research with IRS citations</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Enter Your Tax Question</h2>
                  <p className="text-sm text-slate-500">
                    Ask any tax research question. Our AI will provide a comprehensive answer with citations.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="question">Your Tax Question *</Label>
                    <Textarea
                      id="question"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="e.g., What are the requirements for deducting home office expenses for a partnership?"
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="context">Additional Context (Optional)</Label>
                    <Textarea
                      id="context"
                      value={context}
                      onChange={(e) => setContext(e.target.value)}
                      placeholder="Any specific facts or circumstances..."
                      className="min-h-[80px]"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? (
                      <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Researching...</>
                    ) : (
                      <><Sparkles className="h-4 w-4 mr-2" />Generate Research</>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Research Results</h2>
                  {result && (
                    <Button variant="outline" size="sm" onClick={copyToClipboard}>
                      {copied ? <CheckCircle2 className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                      Copy
                    </Button>
                  )}
                </div>

                {result ? (
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">{result}</div>
                ) : (
                  <div className="text-center py-12 text-slate-400">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Your research results will appear here</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
