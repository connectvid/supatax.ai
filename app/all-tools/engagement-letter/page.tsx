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
import { FileSignature, ArrowLeft, Loader2, Copy, CheckCircle2, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function EngagementLetterTool() {
  const [clientName, setClientName] = useState("");
  const [clientType, setClientType] = useState("individual");
  const [services, setServices] = useState("");
  const [feeStructure, setFeeStructure] = useState("");
  const [taxYear, setTaxYear] = useState("2024");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !services || !feeStructure) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/generate/text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemPrompt: `You are a professional tax practitioner creating engagement letters.

Create comprehensive engagement letters that include:
1. Professional header with firm information
2. Client identification
3. Scope of services (be specific)
4. Client responsibilities
5. Fee structure and payment terms
6. Confidentiality provisions
7. Record retention policy
8. Dispute resolution
9. Limitation of liability
10. Termination provisions
11. Signature blocks

Use professional, clear language compliant with Circular 230 and AICPA standards.`,
          userPrompt: `Client Name: ${clientName}\nClient Type: ${clientType}\nTax Year(s): ${taxYear}\nServices Required: ${services}\nFee Structure: ${feeStructure}`,
          temperature: 0.5,
          maxTokens: 2500,
        }),
      });

      if (!response.ok) throw new Error("Failed to generate");

      const data = await response.json();
      setResult(data.content);
      toast.success("Engagement letter generated!");
    } catch (error) {
      toast.error("Failed to generate letter. Please try again.");
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
            <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center">
              <FileSignature className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="font-semibold">Engagement Letter Generator</h1>
              <p className="text-xs text-slate-500">Professional tax engagement letters</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-lg font-semibold">Generate Engagement Letter</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Client Name *</Label>
                    <Input value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Individual or business name" />
                  </div>

                  <div className="space-y-2">
                    <Label>Client Type</Label>
                    <Select value={clientType} onValueChange={setClientType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="business">Business/Corporation</SelectItem>
                        <SelectItem value="partnership">Partnership/LLC</SelectItem>
                        <SelectItem value="trust">Trust or Estate</SelectItem>
                        <SelectItem value="nonprofit">Nonprofit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Tax Year(s) *</Label>
                    <Input value={taxYear} onChange={(e) => setTaxYear(e.target.value)} placeholder="e.g., 2024" />
                  </div>

                  <div className="space-y-2">
                    <Label>Services Required *</Label>
                    <Textarea value={services} onChange={(e) => setServices(e.target.value)} placeholder="e.g., Preparation of Form 1040 including Schedule C and Schedule D..." />
                  </div>

                  <div className="space-y-2">
                    <Label>Fee Structure *</Label>
                    <Textarea value={feeStructure} onChange={(e) => setFeeStructure(e.target.value)} placeholder="e.g., Fixed fee of $2,500; Hourly rate of $300/hour; etc." />
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Generating...</> : <><Sparkles className="h-4 w-4 mr-2" />Generate Letter</>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Generated Letter</h2>
                  {result && <Button variant="outline" size="sm" onClick={copyToClipboard}>{copied ? <CheckCircle2 className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}Copy</Button>}
                </div>
                {result ? <div className="whitespace-pre-wrap text-sm leading-relaxed">{result}</div> : <div className="text-center py-12 text-slate-400"><FileSignature className="h-12 w-12 mx-auto mb-4 opacity-50" /><p>Your engagement letter will appear here</p></div>}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
