"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export default function QBICalculatorTool() {
  const [filingStatus, setFilingStatus] = useState("single");
  const [taxableIncome, setTaxableIncome] = useState("");
  const [qbiAmount, setQbiAmount] = useState("");
  const [isSstb, setIsSstb] = useState("no");
  const [w2Wages, setW2Wages] = useState("");
  const [ubaAmount, setUbaAmount] = useState("");
  const [result, setResult] = useState<any>(null);

  const calculateQBI = () => {
    const ti = parseFloat(taxableIncome) || 0;
    const qbi = parseFloat(qbiAmount) || 0;
    const wages = parseFloat(w2Wages) || 0;
    const uba = parseFloat(ubaAmount) || 0;

    // 2024 Thresholds
    const thresholdMFJ = 383900;
    const thresholdOther = 191950;
    const threshold = filingStatus === "mfj" ? thresholdMFJ : thresholdOther;
    const phaseInRange = filingStatus === "mfj" ? 100000 : 50000;

    // Initial QBI deduction (20% of QBI)
    let qbiDeduction = qbi * 0.20;

    // Overall limitation (20% of taxable income)
    const overallLimit = ti * 0.20;
    qbiDeduction = Math.min(qbiDeduction, overallLimit);

    let limitationApplied = "";
    let phaseInPercent = 0;

    // Check if above threshold
    if (ti > threshold) {
      const excessTI = ti - threshold;
      phaseInPercent = Math.min(excessTI / phaseInRange, 1);

      if (isSstb === "yes") {
        // SSTB phase-out
        const applicablePercent = 1 - phaseInPercent;
        qbiDeduction = qbiDeduction * applicablePercent;
        limitationApplied = `SSTB phase-out applied: ${(applicablePercent * 100).toFixed(1)}% of deduction allowed`;
      } else {
        // W-2 wage and property limitation
        const wageLimit = wages * 0.50;
        const alternativeLimit = (wages * 0.25) + (uba * 0.025);
        const wagePropertyLimit = Math.max(wageLimit, alternativeLimit);

        if (qbiDeduction > wagePropertyLimit) {
          const excess = qbiDeduction - wagePropertyLimit;
          const reduction = excess * phaseInPercent;
          qbiDeduction = qbiDeduction - reduction;
          limitationApplied = `W-2 wage and property limitation applied with ${(phaseInPercent * 100).toFixed(1)}% phase-in`;
        }
      }
    }

    setResult({
      qbiDeduction: qbiDeduction.toFixed(2),
      overallLimit: overallLimit.toFixed(2),
      threshold,
      phaseInPercent: (phaseInPercent * 100).toFixed(1),
      limitationApplied,
    });

    toast.success("QBI calculation complete!");
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
            <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
              <Calculator className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="font-semibold">QBI Deduction Calculator</h1>
              <p className="text-xs text-slate-500">Section 199A calculation</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-lg font-semibold">Calculate Section 199A QBI Deduction</h2>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Filing Status</Label>
                    <Select value={filingStatus} onValueChange={setFilingStatus}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="mfj">Married Filing Jointly</SelectItem>
                        <SelectItem value="mfs">Married Filing Separately</SelectItem>
                        <SelectItem value="hoh">Head of Household</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Taxable Income (before QBI deduction)</Label>
                    <Input type="number" value={taxableIncome} onChange={(e) => setTaxableIncome(e.target.value)} placeholder="e.g., 150000" />
                  </div>

                  <div className="space-y-2">
                    <Label>Qualified Business Income (QBI)</Label>
                    <Input type="number" value={qbiAmount} onChange={(e) => setQbiAmount(e.target.value)} placeholder="e.g., 100000" />
                  </div>

                  <div className="space-y-2">
                    <Label>Is this a Specified Service Trade or Business (SSTB)?</Label>
                    <Select value={isSstb} onValueChange={setIsSstb}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="yes">Yes (health, law, accounting, consulting, etc.)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {parseFloat(taxableIncome) > (filingStatus === "mfj" ? 383900 : 191950) && isSstb === "no" && (
                    <>
                      <div className="space-y-2">
                        <Label>W-2 Wages from Business</Label>
                        <Input type="number" value={w2Wages} onChange={(e) => setW2Wages(e.target.value)} placeholder="e.g., 50000" />
                      </div>
                      <div className="space-y-2">
                        <Label>Unadjusted Basis of Qualified Property</Label>
                        <Input type="number" value={ubaAmount} onChange={(e) => setUbaAmount(e.target.value)} placeholder="e.g., 100000" />
                      </div>
                    </>
                  )}

                  <Button onClick={calculateQBI} className="w-full">
                    Calculate QBI Deduction
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="h-full">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Calculation Results</h2>
                {result ? (
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-800">QBI Deduction Amount</p>
                      <p className="text-3xl font-bold text-green-900">${parseFloat(result.qbiDeduction).toLocaleString()}</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><strong>Overall Limitation (20% of TI):</strong> ${parseFloat(result.overallLimit).toLocaleString()}</p>
                      <p><strong>Threshold Amount:</strong> ${result.threshold.toLocaleString()}</p>
                      {parseFloat(result.phaseInPercent) > 0 && <p><strong>Phase-in Percentage:</strong> {result.phaseInPercent}%</p>}
                      {result.limitationApplied && <p className="text-amber-600"><strong>Note:</strong> {result.limitationApplied}</p>}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-slate-400">
                    <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Enter values and calculate to see results</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* SEO Content */}
        <div className="mt-16 max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Section 199A QBI Deduction Calculator</h2>
          <div className="prose prose-slate max-w-none">
            <h3>What Is the Qualified Business Income Deduction?</h3>
            <p>
              The Qualified Business Income (QBI) deduction under IRC Section 199A allows eligible taxpayers to deduct up to 20% 
              of their qualified business income from sole proprietorships, partnerships, S corporations, and certain trusts and estates.
            </p>

            <h3>How Is QBI Calculated?</h3>
            <p>The basic QBI deduction is 20% of qualified business income, subject to limitations:</p>
            <ul>
              <li><strong>Overall limitation:</strong> 20% of taxable income (before QBI deduction)</li>
              <li><strong>SSTB limitation:</strong> For Specified Service Trades or Businesses, deduction phases out above threshold</li>
              <li><strong>W-2 wage limitation:</strong> Greater of 50% of W-2 wages or 25% of W-2 wages plus 2.5% of qualified property</li>
            </ul>

            <h3>2024 Threshold Amounts</h3>
            <p>
              <strong>Married Filing Jointly:</strong> $383,900 (threshold), $483,900 (fully phased in)<br />
              <strong>Other filing statuses:</strong> $191,950 (threshold), $241,950 (fully phased in)
            </p>

            <h3>What Is an SSTB?</h3>
            <p>Specified Service Trades or Businesses include:</p>
            <ul>
              <li>Health, law, accounting, actuarial science</li>
              <li>Performing arts, consulting, athletics</li>
              <li>Financial services, brokerage services</li>
              <li>Any trade/business where principal asset is reputation or skill of employees</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
