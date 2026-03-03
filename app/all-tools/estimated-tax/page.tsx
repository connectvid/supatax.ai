"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export default function EstimatedTaxCalculatorTool() {
  const [priorYearTax, setPriorYearTax] = useState("");
  const [currentYearProjected, setCurrentYearProjected] = useState("");
  const [withholding, setWithholding] = useState("");
  const [filingStatus, setFilingStatus] = useState("single");
  const [agiPriorYear, setAgiPriorYear] = useState("");
  const [result, setResult] = useState<any>(null);

  const calculateEstimatedTax = () => {
    const priorTax = parseFloat(priorYearTax) || 0;
    const projected = parseFloat(currentYearProjected) || 0;
    const withheld = parseFloat(withholding) || 0;
    const agiPrior = parseFloat(agiPriorYear) || 0;

    // Safe harbor rules
    const isHighIncome = agiPrior > 150000; // $75k if MFS
    const safeHarborPercent = isHighIncome ? 1.10 : 1.00; // 110% or 100% of prior year

    const requiredFromPrior = priorTax * safeHarborPercent;
    const requiredFromCurrent = projected * 0.90; // 90% of current year

    // Use the lower safe harbor
    const requiredAnnual = Math.min(requiredFromPrior, requiredFromCurrent);
    const stillNeeded = Math.max(0, requiredAnnual - withheld);

    const quarterly = stillNeeded > 0 ? stillNeeded / 4 : 0;

    setResult({
      requiredAnnual: requiredAnnual.toFixed(2),
      stillNeeded: stillNeeded.toFixed(2),
      quarterlyPayment: quarterly.toFixed(2),
      method: stillNeeded === 0 ? "No estimated payments required - withholding sufficient" : `Based on ${safeHarborPercent === 1.1 ? "110% of prior year" : "safe harbor"} method`,
      dueDates: [
        "April 15 (Q1)",
        "June 15 (Q2)",
        "September 15 (Q3)",
        "January 15 (Q4 - following year)"
      ]
    });

    toast.success("Estimated tax calculated!");
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
              <DollarSign className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="font-semibold">Estimated Tax Calculator</h1>
              <p className="text-xs text-slate-500">IRS Form 1040-ES</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-lg font-semibold">Calculate Estimated Tax Payments</h2>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Prior Year Total Tax</Label>
                    <Input type="number" value={priorYearTax} onChange={(e) => setPriorYearTax(e.target.value)} placeholder="Line 24 on 2023 Form 1040" />
                  </div>

                  <div className="space-y-2">
                    <Label>Current Year Projected Tax</Label>
                    <Input type="number" value={currentYearProjected} onChange={(e) => setCurrentYearProjected(e.target.value)} placeholder="Estimated total tax for 2024" />
                  </div>

                  <div className="space-y-2">
                    <Label>Expected Withholding</Label>
                    <Input type="number" value={withholding} onChange={(e) => setWithholding(e.target.value)} placeholder="W-2 and 1099 withholding" />
                  </div>

                  <div className="space-y-2">
                    <Label>Prior Year AGI</Label>
                    <Input type="number" value={agiPriorYear} onChange={(e) => setAgiPriorYear(e.target.value)} placeholder="Line 11 on prior year 1040 (for safe harbor %)" />
                  </div>

                  <Button onClick={calculateEstimatedTax} className="w-full">
                    Calculate Estimated Payments
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
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">Required Annual Payment</p>
                      <p className="text-3xl font-bold text-blue-900">${parseFloat(result.requiredAnnual).toLocaleString()}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <p className="text-sm text-amber-800">Still Needed</p>
                        <p className="text-2xl font-bold text-amber-900">${parseFloat(result.stillNeeded).toLocaleString()}</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm text-green-800">Quarterly Payment</p>
                        <p className="text-2xl font-bold text-green-900">${parseFloat(result.quarterlyPayment).toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="text-sm space-y-2">
                      <p><strong>Method:</strong> {result.method}</p>
                      <p className="font-semibold mt-4">Due Dates:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {result.dueDates.map((date: string, i: number) => <li key={i}>{date}</li>)}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-slate-400">
                    <DollarSign className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Enter values to calculate estimated tax</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-16 max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Estimated Tax Safe Harbor Rules</h2>
          <div className="prose prose-slate max-w-none">
            <h3>Avoiding the Underpayment Penalty</h3>
            <p>You won't owe an underpayment penalty if you meet one of these tests:</p>
            <ul>
              <li><strong>90% Current Year:</strong> You owe less than $1,000 in tax after subtracting withholding and credits</li>
              <li><strong>100% Prior Year:</strong> You paid at least 100% of prior year tax liability (110% if AGI > $150,000)</li>
              <li><strong>Annualized Income:</strong> You paid at least 90% of current year tax based on annualized income</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
