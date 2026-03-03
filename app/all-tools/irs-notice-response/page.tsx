"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, ArrowLeft, Loader2, Copy, CheckCircle2, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function IRSNoticeResponseTool() {
  const [noticeType, setNoticeType] = useState("");
  const [taxpayerName, setTaxpayerName] = useState("");
  const [taxYear, setTaxYear] = useState("");
  const [noticeIssues, setNoticeIssues] = useState("");
  const [responsePosition, setResponsePosition] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!noticeType || !taxpayerName || !taxYear || !noticeIssues || !responsePosition) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/generate/text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemPrompt: `You are an expert in IRS correspondence and tax controversy matters.

Create IRS response letters that:
1. Include proper IRS correspondence formatting
2. Reference the specific notice number and tax periods
3. Present a clear, logical response to each issue raised
4. Cite applicable law and regulations supporting the position
5. Include all necessary substantiation references
6. Use professional, respectful tone
7. Include appropriate Power of Attorney references if applicable

Structure: Reference to the notice received, Statement of facts, Analysis of each issue, Legal authority supporting position, Conclusion and requested action, Signature and POA information.`,
          userPrompt: `Notice Type: ${noticeType}\nTaxpayer Name: ${taxpayerName}\nTax Year(s): ${taxYear}\nNotice Issues: ${noticeIssues}\nResponse Position: ${responsePosition}`,
          temperature: 0.6,
          maxTokens: 2500,
        }),
      });

      if (!response.ok) throw new Error("Failed to generate");

      const data = await response.json();
      setResult(data.content);
      toast.success("Response letter generated!");
    } catch (error) {
      toast.error("Failed to generate response. Please try again.");
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
            <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="font-semibold">IRS Notice Response Generator</h1>
              <p className="text-xs text-slate-500">Professional IRS response letters</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-lg font-semibold">Generate IRS Response Letter</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label>IRS Notice Type *</Label>
                    <Select value={noticeType} onValueChange={setNoticeType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select notice type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CP2000">CP2000 - Proposed Changes</SelectItem>
                        <SelectItem value="CP501">CP501/502 - Balance Due</SelectItem>
                        <SelectItem value="CP11">CP11 - Math Error</SelectItem>
                        <SelectItem value="audit">Examination/audit letter</SelectItem>
                        <SelectItem value="other">Other notice</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Taxpayer Name *</Label>
                    <Input value={taxpayerName} onChange={(e) => setTaxpayerName(e.target.value)} placeholder="As shown on tax return" />
                  </div>

                  <div className="space-y-2">
                    <Label>Tax Year(s) *</Label>
                    <Input value={taxYear} onChange={(e) => setTaxYear(e.target.value)} placeholder="e.g., 2023" />
                  </div>

                  <div className="space-y-2">
                    <Label>Notice Issues/Issues Raised *</Label>
                    <Textarea value={noticeIssues} onChange={(e) => setNoticeIssues(e.target.value)} placeholder="Describe the issues raised in the IRS notice..." />
                  </div>

                  <div className="space-y-2">
                    <Label>Your Position/Response *</Label>
                    <Textarea value={responsePosition} onChange={(e) => setResponsePosition(e.target.value)} placeholder="Explain the factual and legal basis for your response..." />
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Generating...</> : <><Sparkles className="h-4 w-4 mr-2" />Generate Response</>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Generated Response</h2>
                  {result && <Button variant="outline" size="sm" onClick={copyToClipboard}>{copied ? <CheckCircle2 className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}Copy</Button>}
                </div>
                {result ? <div className="whitespace-pre-wrap text-sm leading-relaxed">{result}</div> : <div className="text-center py-12 text-slate-400"><Shield className="h-12 w-12 mx-auto mb-4 opacity-50" /><p>Your response letter will appear here</p></div>}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
