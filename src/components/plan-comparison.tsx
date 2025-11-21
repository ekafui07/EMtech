import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, BarChart, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: 'Conservative Growth',
    icon: Shield,
    risk: 'Low',
    description: 'Focuses on capital preservation with modest growth potential. Ideal for those nearing retirement.',
    fees: '0.5%',
    features: ['Government Bonds', 'Large-Cap Stocks', 'Low Volatility'],
  },
  {
    name: 'Balanced Portfolio',
    icon: BarChart,
    risk: 'Medium',
    description: 'A mix of safety and growth, providing a balanced approach for steady, long-term wealth accumulation.',
    fees: '0.75%',
    features: ['Diversified Global Stocks', 'Corporate Bonds', 'Real Estate'],
    popular: true,
  },
  {
    name: 'Aggressive Alpha',
    icon: TrendingUp,
    risk: 'High',
    description: 'Maximizes growth potential through higher-risk investments. Suitable for younger investors with a long time horizon.',
    fees: '1.2%',
    features: ['Emerging Markets', 'Tech & Growth Stocks', 'High-Yield Bonds'],
  },
];

export default function PlanComparison() {
  return (
    <section id="plans" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Compare Our Pension Plans</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find the perfect plan that aligns with your financial goals and risk tolerance.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl">
          {plans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${plan.popular ? 'border-primary border-2' : ''}`}>
              {plan.popular && <Badge className="absolute -top-3 right-4">Most Popular</Badge>}
              <CardHeader className="items-center text-center">
                <div className="rounded-full bg-secondary p-4">
                  <plan.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl pt-4">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center mb-6">
                    <span className="text-4xl font-bold">{plan.fees}</span>
                    <span className="text-muted-foreground">/ year</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
