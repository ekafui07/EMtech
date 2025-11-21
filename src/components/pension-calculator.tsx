"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { CalculatorIcon, TrendingUp } from 'lucide-react';

type ProjectionData = {
  year: number;
  value: number;
};

export default function PensionCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [projectedData, setProjectedData] = useState<ProjectionData[]>([]);
  const [finalValue, setFinalValue] = useState(0);

  const calculateProjection = () => {
    const yearsToRetirement = retirementAge - currentAge;
    if (yearsToRetirement <= 0) {
      setProjectedData([]);
      setFinalValue(0);
      return;
    }

    let balance = currentSavings;
    const yearlyContribution = monthlyContribution * 12;
    const rate = annualReturn / 100;
    const data: ProjectionData[] = [];

    for (let i = 1; i <= yearsToRetirement; i++) {
      balance += yearlyContribution;
      balance *= (1 + rate);
      if (i % 5 === 0 || i === 1 || i === yearsToRetirement) {
        data.push({
          year: currentAge + i,
          value: Math.round(balance),
        });
      }
    }

    setProjectedData(data);
    setFinalValue(Math.round(balance));
  };

  return (
    <section id="calculator" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Retirement Calculator</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Estimate your pension pot with our easy-to-use calculator. Adjust the sliders to see how small changes can impact your future.
            </p>
          </div>
        </div>
        <Card className="mt-12 mx-auto max-w-7xl shadow-lg">
          <CardHeader>
            <CardTitle>Calculate Your Pension</CardTitle>
            <CardDescription>Enter your details to see a projection of your retirement savings.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="grid gap-2">
                  <Label htmlFor="current-age">Current Age: {currentAge}</Label>
                  <Slider id="current-age" min={18} max={70} step={1} value={[currentAge]} onValueChange={(v) => setCurrentAge(v[0])} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="retirement-age">Retirement Age: {retirementAge}</Label>
                  <Slider id="retirement-age" min={50} max={80} step={1} value={[retirementAge]} onValueChange={(v) => setRetirementAge(v[0])} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="current-savings">Current Savings (£): {currentSavings.toLocaleString()}</Label>
                  <Input id="current-savings" type="number" value={currentSavings} onChange={(e) => setCurrentSavings(Number(e.target.value))} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="monthly-contribution">Monthly Contribution (£): {monthlyContribution.toLocaleString()}</Label>
                  <Slider id="monthly-contribution" min={0} max={3000} step={50} value={[monthlyContribution]} onValueChange={(v) => setMonthlyContribution(v[0])} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="annual-return">Expected Annual Return (%): {annualReturn}</Label>
                  <Slider id="annual-return" min={1} max={15} step={0.5} value={[annualReturn]} onValueChange={(v) => setAnnualReturn(v[0])} />
                </div>
                <Button onClick={calculateProjection} className="w-full">
                  <CalculatorIcon className="mr-2 h-4 w-4" /> Calculate
                </Button>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-secondary p-4">
                {projectedData.length > 0 ? (
                  <>
                    <p className="text-muted-foreground">Estimated Pension Pot at age {retirementAge}</p>
                    <p className="text-4xl font-bold text-primary my-2">£{finalValue.toLocaleString()}</p>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={projectedData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis tickFormatter={(value) => `£${Number(value) / 1000}k`} />
                        <Tooltip formatter={(value) => `£${Number(value).toLocaleString()}`} />
                        <Legend iconType="circle" />
                        <Bar dataKey="value" name="Projected Value" fill="var(--accent)" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </>
                ) : (
                  <div className="text-center text-muted-foreground">
                    <TrendingUp className="mx-auto h-12 w-12" />
                    <p className="mt-4">Your personalized projection will appear here.</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
