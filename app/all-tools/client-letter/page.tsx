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
import { PenTool, ArrowLeft, Loader2, Copy, CheckCircle2, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function ClientLetterTool() {
  const [letterType, setLetterType] = useState("");
  const [clientName, setClientName] = useState("");
  const [topic, setTopic] = useState("");
  const [keyPoints, setKeyPoints] = useState("");
  const [tone, setTone] = useState("professional");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!letterType || !clientName || !topic || !keyPoints) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/generate/text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemPrompt: `You are an expert in writing professional tax correspondence for accounting firms.

Create client letters that are:
1. Professionally formatted with proper business letter structure
2. Clear and concise, avoiding excessive jargon
3. Action-oriented with specific next steps when applicable
4. Compliant with professional standards and Circular 230 requirements
5. Include appropriate disclaimers for advisory letters
6. Use courteous, client-friendly language

Include standard elements: professional greeting, clear purpose statement, organized body content, specific recommendations or next steps, appropriate closing and signature block, professional disclaimer language.`,
          userPrompt: `Letter Type: ${letterType}\nClient Name: ${clientName}\nSubject Matter: ${topic}\nKey Points: ${keyPoints}\nTone: ${tone}`,
          temperature: 0.7,
          maxTokens: 2000,
        }),
      });

      if (!response.ok) throw new Error("Failed to generate");

      const data = await response.json();
      setResult(data.content);
      toast.success("Letter generated!");
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
            <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center">
              <PenTool className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="font-semibold">Client Letter Generator</h1>
              <p className="text-xs text-slate-500">Professional client communications</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-lg font-semibold">Generate Client Letter</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Letter Type *</Label>
                    <Select value={letterType} onValueChange={setLetterType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select letter type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engagement">Engagement Letter</SelectItem>
                        <SelectItem value="advisory">Tax Advisory Letter</SelectItem>
                        <SelectItem value="response">Response to Client Inquiry</SelectItem>
                        <SelectItem value="planning">Tax Planning Recommendation</SelectItem>
                        <SelectItem value="deliverable">Tax Return Deliverable Letter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Client Name *</Label>
                    <Input value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="e.g., ABC Corporation" />
                  </div>

                  <div className="space-y-2">
                    <Label>Subject Matter *</Label>
                    <Textarea value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Describe the tax issue or topic..." />
                  </div>

                  <div className="space-y-2">
                    <Label>Key Points to Include *</Label>
                    <Textarea value={keyPoints} onChange={(e) => setKeyPoints(e.target.value)} placeholder="List main points, recommendations, or actions..." />
                  </div>

                  <div className="space-y-2">
                    <Label>Tone</Label>
                    <Select value={tone} onValueChange={setTone}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="formal">Formal (traditional)</SelectItem>
                        <SelectItem value="professional">Professional but approachable</SelectItem>
                        <SelectItem value="consultative">Consultative/advisory</SelectItem>
                      </SelectContent>
                    </Select>
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
                {result ? <div className="whitespace-pre-wrap text-sm leading-relaxed">{result}</div> : <div className="text-center py-12 text-slate-400"><PenTool className="h-12 w-12 mx-auto mb-4 opacity-50" /><p>Your letter will appear here</p></div>}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
