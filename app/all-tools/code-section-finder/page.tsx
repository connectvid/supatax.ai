"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Landmark, ArrowLeft, Loader2, Search } from "lucide-react";
import { toast } from "sonner";

export default function CodeSectionFinderTool() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSearch = async () => {
    if (!searchTerm) {
      toast.error("Please enter a search term");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/generate/text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemPrompt: `You are an expert in the Internal Revenue Code. Provide accurate, well-organized information about IRC sections including: section number, full title, key provisions, related sections, and practical application notes. Cite specific subsections where relevant.`,
          userPrompt: `Find and explain IRC section(s) related to: ${searchTerm}. Include the full text summary, key requirements, exceptions, and related sections.`,
          temperature: 0.3,
          maxTokens: 2000,
        }),
      });

      if (!response.ok) throw new Error("Failed to search");

      const data = await response.json();
      setResult(data.content);
      toast.success("Code section found!");
    } catch (error) {
      toast.error("Search failed. Please try again.");
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
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
              <Landmark className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="font-semibold">Code Section Finder</h1>
              <p className="text-xs text-slate-500">IRC section lookup</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-lg font-semibold">Find IRC Code Sections</h2>
                <p className="text-slate-600">Search for specific code sections or describe a tax topic to find relevant IRC provisions.</p>
                
                <div className="flex gap-2">
                  <Input 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Enter section number or tax topic (e.g., '162 business expenses')"
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  />
                  <Button onClick={handleSearch} disabled={loading}>
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
                  </Button>
                </div>

                {result && (
                  <div className="mt-6 p-4 bg-slate-50 rounded-lg whitespace-pre-wrap">
                    {result}
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
