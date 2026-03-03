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

const MACRS_RATES = {
  "3": [33.33, 44.45, 14.81, 7.41],
  "5": [20.00, 32.00, 19.20, 11.52, 11.52, 5.76],
  "7": [14.29, 24.49, 17.49, 12.49, 8.93, 8.92, 8.93, 4.46],
  "10": [10.00, 18.00, 14.40, 11.52, 9.22, 7.37, 6.55, 6.55, 6.56, 6.55, 3.28],
  "15": [5.00, 9.50, 8.55, 7.70, 6.93, 6.23, 5.90, 5.90, 5.91, 5.90, 5.91, 5.90, 5.91, 5.90, 5.91, 2.95],
  "20": [3.750, 7.219, 6.677, 6.177, 5.713, 5.285, 4.888, 4.522, 4.462, 4.461, 4.462, 4.461, 4.462, 4.461, 4.462, 4.461, 4.462, 4.461, 4.462, 4.461, 2.231],
  "27.5": Array(27).fill(3.636).concat([1.0]),
  "39": Array(38).fill(2.564).concat([2.6])
};

export default function DepreciationCalculatorTool() {
  const [basis, setBasis] = useState("");
  const [propertyClass, setPropertyClass] = useState("5");
  const [placedInService, setPlacedInService] = useState("");
  const [convention, setConvention] = useState("half");
  const [section179, setSection179] = useState("");
  const [bonusDepreciation, setBonusDepreciation] = useState("yes");
  const [result, setResult] = useState<any>(null);

  const calculateDepreciation = () => {
    const costBasis = parseFloat(basis) || 0;
    const sec179 = parseFloat(section179) || 0;
    
    // Limit section 179
    const maxSec179 = costBasis; // Simplified - actual limit is $1.16M for 2023
    const actualSec179 = Math.min(sec179, maxSec179);
    
    // Bonus depreciation (80% for 2023, phases down to 40% in 2024)
    const remainingAfter179 = costBasis - actualSec179;
    const bonusRate = bonusDepreciation === "yes" ? 0.60 : 0; // 60% for 2024
    const bonusAmount = remainingAfter179 * bonusRate;
    
    // MACRS basis
    const macrsBasis = remainingAfter179 - bonusAmount;
    
    // Get MACRS rates
    const rates = MACRS_RATES[propertyClass as keyof typeof MACRS_RATES] || MACRS_RATES["5"];
    const schedule = rates.map((rate, index) => ({
      year: index + 1,
      rate,
      depreciation: (macrsBasis * rate / 100).toFixed(2)
    }));

    const firstYearDep = parseFloat(schedule[0]?.depreciation || "0");
    const totalFirstYear = actualSec179 + bonusAmount + firstYearDep;

    setResult({
      costBasis,
      section179: actualSec179.toFixed(2),
      bonusDepreciation: bonusAmount.toFixed(2),
      macrsBasis: macrsBasis.toFixed(2),
      firstYearTotal: totalFirstYear.toFixed(2),
      schedule,
    });

    toast.success("Depreciation calculated!");
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
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
              <Calculator className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="font-semibold">MACRS Depreciation Calculator</h1>
              <p className="text-xs text-slate-500">IRS depreciation schedules</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-lg font-semibold">Calculate Depreciation</h2>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Asset Cost Basis</Label>
                    <Input type="number" value={basis} onChange={(e) => setBasis(e.target.value)} placeholder="e.g., 50000" />
                  </div>

                  <div className="space-y-2">
                    <Label>Property Class</Label>
                    <Select value={propertyClass} onValueChange={setPropertyClass}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3-Year (special tools)</SelectItem>
                        <SelectItem value="5">5-Year (vehicles, computers, equipment)</SelectItem>
                        <SelectItem value="7">7-Year (office furniture, machinery)</SelectItem>
                        <SelectItem value="10">10-Year (vessels, single-purpose ag)</SelectItem>
                        <SelectItem value="15">15-Year (land improvements)</SelectItem>
                        <SelectItem value="20">20-Year (farm buildings)</SelectItem>
                        <SelectItem value="27.5">27.5-Year (residential rental)</SelectItem>
                        <SelectItem value="39">39-Year (commercial real estate)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Section 179 Expense</Label>
                    <Input type="number" value={section179} onChange={(e) => setSection179(e.target.value)} placeholder="Amount to expense immediately (max $1.16M 2023)" />
                  </div>

                  <div className="space-y-2">
                    <Label>Bonus Depreciation (60% for 2024)</Label>
                    <Select value={bonusDepreciation} onValueChange={setBonusDepreciation}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes - Take bonus depreciation</SelectItem>
                        <SelectItem value="no">No - Skip bonus, use MACRS only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={calculateDepreciation} className="w-full">
                    Calculate Depreciation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="h-full">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Depreciation Schedule</h2>
                {result ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="text-xs text-blue-700">§179 Expense</p>
                        <p className="font-semibold text-blue-900">${parseFloat(result.section179).toLocaleString()}</p>
                      </div>
                      <div className="bg-amber-50 p-3 rounded">
                        <p className="text-xs text-amber-700">Bonus Depreciation</p>
                        <p className="font-semibold text-amber-900">${parseFloat(result.bonusDepreciation).toLocaleString()}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <p className="text-xs text-green-700">MACRS Basis</p>
                        <p className="font-semibold text-green-900">${parseFloat(result.macrsBasis).toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="overflow-auto max-h-64 border rounded">
                      <table className="w-full text-sm">
                        <thead className="bg-slate-100 sticky top-0">
                          <tr>
                            <th className="p-2 text-left">Year</th>
                            <th className="p-2 text-left">Rate</th>
                            <th className="p-2 text-right">Depreciation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {result.schedule.map((row: any) => (
                            <tr key={row.year} className="border-t">
                              <td className="p-2">{row.year}</td>
                              <td className="p-2">{row.rate.toFixed(3)}%</td>
                              <td className="p-2 text-right">${parseFloat(row.depreciation).toLocaleString()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-slate-400">
                    <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Enter asset details to see depreciation schedule</p>
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
