"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Building2, ArrowLeft, Lightbulb } from "lucide-react";

export default function EntitySelectorTool() {
  const [numOwners, setNumOwners] = useState("1");
  const [liability, setLiability] = useState("high");
  const [profitSharing, setProfitSharing] = useState("equal");
  const [investmentPlans, setInvestmentPlans] = useState("yes");
  const [exitStrategy, setExitStrategy] = useState("sale");
  const [result, setResult] = useState<any>(null);

  const analyzeEntity = () => {
    let recommendation = "";
    let reasoning: string[] = [];
    let alternatives: string[] = [];

    // Decision logic
    if (numOwners === "1") {
      if (liability === "high") {
        recommendation = "Single-Member LLC (disregarded) or S Corporation";
        reasoning = [
          "As a single owner, you have liability protection needs",
          "SMLLC provides simplicity with liability shield",
          "S Corp may offer self-employment tax savings if profits exceed reasonable salary"
        ];
        alternatives = ["C Corporation (if seeking VC funding)", "Sole Proprietorship (not recommended with high liability)"];
      } else {
        recommendation = "Sole Proprietorship or Single-Member LLC";
        reasoning = [
          "Low liability risk makes simple structures viable",
          "Sole proprietorship has minimal compliance requirements",
          "SMLLC still recommended for basic liability protection"
        ];
        alternatives = ["S Corporation (if profits exceed $60K)"];
      }
    } else {
      // Multiple owners
      if (liability === "high" && profitSharing === "flexible") {
        recommendation = "Multi-Member LLC";
        reasoning = [
          "LLC provides liability protection for all members",
          "Flexible profit/loss allocation via operating agreement",
          "Pass-through taxation avoids double taxation"
        ];
        alternatives = ["Limited Partnership (if passive investors)", "S Corporation (limited to 100 shareholders)"];
      } else if (investmentPlans === "yes" && exitStrategy === "ipo") {
        recommendation = "C Corporation";
        reasoning = [
          "Required for venture capital and institutional investment",
          "Unlimited shareholders and multiple stock classes",
          "Best structure for IPO exit strategy",
          "QSBS (Section 1202) exclusion potential"
        ];
        alternatives = ["Convertible LLC (later convert to C Corp)"];
      } else {
        recommendation = "S Corporation";
        reasoning = [
          "Pass-through taxation avoids double taxation",
          "Self-employment tax savings on distributions",
          "Liability protection for shareholders"
        ];
        alternatives = ["Multi-Member LLC (more flexibility in allocations)", "Partnership (if special allocations needed)"];
      }
    }

    setResult({ recommendation, reasoning, alternatives });
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
              <Building2 className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="font-semibold">Business Entity Selector</h1>
              <p className="text-xs text-slate-500">Choose the right structure</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card>
              <CardContent className="p-6 space-y-6">
                <h2 className="text-lg font-semibold">Answer a few questions</h2>

                <div className="space-y-4">
                  <div>
                    <Label className="mb-2 block">Number of owners?</Label>
                    <RadioGroup value={numOwners} onValueChange={setNumOwners}>
                      <div className="flex items-center space-x-2"><RadioGroupItem value="1" id="1" /><Label htmlFor="1">Just me (single owner)</Label></div>
                      <div className="flex items-center space-x-2"><RadioGroupItem value="2-10" id="2-10" /><Label htmlFor="2-10">2-10 owners</Label></div>
                      <div className="flex items-center space-x-2"><RadioGroupItem value="10+" id="10+" /><Label htmlFor="10+">More than 10</Label></div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="mb-2 block">Liability risk level?</Label>
                    <RadioGroup value={liability} onValueChange={setLiability}>
                      <div className="flex items-center space-x-2"><RadioGroupItem value="low" id="low" /><Label htmlFor="low">Low (consulting, professional services)</Label></div>
                      <div className="flex items-center space-x-2"><RadioGroupItem value="high" id="high" /><Label htmlFor="high">High (manufacturing, products, property)</Label></div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="mb-2 block">Profit sharing needs?</Label>
                    <RadioGroup value={profitSharing} onValueChange={setProfitSharing}>
                      <div className="flex items-center space-x-2"><RadioGroupItem value="equal" id="equal" /><RadioGroupItem value="equal" id="equal" /><Label htmlFor="equal">Equal to ownership %</Label></div>
                      <div className="flex items-center space-x-2"><RadioGroupItem value="flexible" id="flexible" /><Label htmlFor="flexible">Flexible/special allocations needed</Label></div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="mb-2 block">Seeking outside investment?</Label>
                    <RadioGroup value={investmentPlans} onValueChange={setInvestmentPlans}>
                      <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="inv-no" /><Label htmlFor="inv-no">No</Label></div>
                      <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="inv-yes" /><Label htmlFor="inv-yes">Yes (VC, angel investors)</Label></div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="mb-2 block">Planned exit strategy?</Label>
                    <RadioGroup value={exitStrategy} onValueChange={setExitStrategy}>
                      <div className="flex items-center space-x-2"><RadioGroupItem value="sale" id="sale" /><Label htmlFor="sale">Sale to private buyer</Label></div>
                      <div className="flex items-center space-x-2"><RadioGroupItem value="ipo" id="ipo" /><Label htmlFor="ipo">IPO or major acquisition</Label></div>
                      <div className="flex items-center space-x-2"><RadioGroupItem value="pass" id="pass" /><Label htmlFor="pass">Pass to family/employees</Label></div>
                    </RadioGroup>
                  </div>

                  <Button onClick={analyzeEntity} className="w-full">
                    Analyze & Recommend
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="h-full">
              <CardContent className="p-6">
                {result ? (
                  <div className="space-y-6">
                    <div className="bg-indigo-50 p-6 rounded-lg text-center">
                      <Lightbulb className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                      <p className="text-sm text-indigo-800 mb-1">Recommended Structure</p>
                      <p className="text-2xl font-bold text-indigo-900">{result.recommendation}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Why this recommendation?</h3>
                      <ul className="space-y-2">
                        {result.reasoning.map((r: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 mt-0.5">✓</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Also Consider</h3>
                      <ul className="space-y-1 text-sm text-slate-600">
                        {result.alternatives.map((a: string, i: number) => (
                          <li key={i}>• {a}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-slate-400">
                    <Building2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Answer the questions to get a recommendation</p>
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
