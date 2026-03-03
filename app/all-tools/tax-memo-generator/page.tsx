"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, ArrowLeft, Loader2, Copy, CheckCircle2, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function TaxMemoGeneratorTool() {
  const [clientName, setClientName] = useState("");
  const [taxIssue, setTaxIssue] = useState("");
  const [facts, setFacts] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !taxIssue || !facts || !question) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/generate/text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemPrompt: `You are an expert tax practitioner specializing in professional tax memoranda.

Create tax memos following this standard format:

1. MEMORANDUM - To/From/Date/Subject
2. FACTS - Objective presentation of relevant facts
3. ISSUE(S) - Clear, precise tax questions presented
4. CONCLUSION(S) - Brief summary of findings
5. ANALYSIS - Detailed discussion applying law to facts
   - Cite relevant code sections, regulations, case law
   - Analyze potential counter-arguments
   - Address uncertainty and propose positions
6. RECOMMENDATIONS - Practical next steps

Tone: Professional, objective, thorough. Use proper citations (e.g., "IRC § 162(a)").`,
          userPrompt: `Client Name: ${clientName}\nTax Issue: ${taxIssue}\nFacts: ${facts}\nQuestion to Answer: ${question}`,
          temperature: 0.5,
          maxTokens: 3000,
        }),
      });

      if (!response.ok) throw new Error("Failed to generate");

      const data = await response.json();
      setResult(data.content);
      toast.success("Tax memo generated!");
    } catch (error) {
      toast.error("Failed to generate memo. Please try again.");
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
            <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center">
              <FileText className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="font-semibold">Tax Memo Generator</h1>
              <p className="text-xs text-slate-500">Professional tax memoranda</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-lg font-semibold">Generate Tax Research Memo</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Client Name *</Label>
                    <Input value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="e.g., ABC Corporation" />
                  </div>

                  <div className="space-y-2">
                    <Label>Tax Issue *</Label>
                    <Input value={taxIssue} onChange={(e) => setTaxIssue(e.target.value)} placeholder="e.g., Deductibility of business meals and entertainment" />
                  </div>

                  <div className="space-y-2">
                    <Label>Relevant Facts *</Label>
                    <Textarea value={facts} onChange={(e) => setFacts(e.target.value)} placeholder="Describe the facts relevant to the tax issue..." />
                  </div>

                  <div className="space-y-2">
                    <Label>Research Question *</Label>
                    <Textarea value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="State the specific tax question(s) to answer..." />
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Generating...</> : <><Sparkles className="h-4 w-4 mr-2" />Generate Memo</>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Generated Memo</h2>
                  {result && <Button variant="outline" size="sm" onClick={copyToClipboard}>{copied ? <CheckCircle2 className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}Copy</Button>}
                </div>
                {result ? <div className="whitespace-pre-wrap text-sm leading-relaxed">{result}</div> : <div className="text-center py-12 text-slate-400"><FileText className="h-12 w-12 mx-auto mb-4 opacity-50" /><p>Your tax memo will appear here</p></div>}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
