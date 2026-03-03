"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Loader2, Sparkles, IconName } from "lucide-react";
import { toast } from "sonner";

export default function ToolName() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    if (!input) {
      toast.error("Please enter required information");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/generate/text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemPrompt: `You are a tax professional AI assistant.`,
          userPrompt: input,
          temperature: 0.5,
          maxTokens: 2000,
        }),
      });

      if (!response.ok) throw new Error("Failed");

      const data = await response.json();
      setResult(data.content);
      toast.success("Generated successfully!");
    } catch (error) {
      toast.error("Failed. Please try again.");
    } finally {
      setLoading(false);
    }
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
          <h1 className="font-semibold">Tool Name</h1>
        </div>
      </header>

      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-lg font-semibold">Tool Title</h2>
                <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter information..." />
                <Button onClick={handleSubmit} disabled={loading} className="w-full">
                  {loading ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Processing...</> : <><Sparkles className="h-4 w-4 mr-2" />Generate</>}
                </Button>
                {result && <div className="mt-6 p-4 bg-slate-50 rounded-lg whitespace-pre-wrap">{result}</div>}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
