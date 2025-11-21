import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, TrendingUp, Building, BarChart, Shield } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 'personal-pension',
    name: 'Personal Pensions Scheme',
    icon: User,
    description: 'Our personal pension schemes and micro pensions are structured to address the investment needs of self employed persons in the formal and informal sectors respectively who desire to save towards their retirement in a disciplined way.',
    href: '/personal-pension'
  },
  {
    id: 'retirement-planning',
    name: 'Retirement Planning',
    icon: TrendingUp,
    description: 'Planning for your retirement can be nerve-racking as you approach retirement. As the Pensions Expert, Hedge makes planning for your retirement a breeze.',
    href: '/retirement-planning'
  },
  {
    id: 'corporate-pensions',
    name: 'Corporate Pensions',
    icon: Building,
    description: 'Pension Schemes have become an integral part of employee benefits packages. A pension scheme provides a firm a competitive edge in attracting and retaining highly skilled employees.',
    href: '/corporate-pensions'
  },
  {
    id: 'investment-returns',
    name: 'Investment Returns',
    icon: BarChart,
    description: 'The trust deed of the fund seeks to employ reputable fund advisors to manage the Scheme. Contributions by individual members will be strategically invested for good dividends.',
    href: '#'
  },
  {
    id: 'provident-fund',
    name: 'Provident Fund Management',
    icon: Shield,
    description: 'The key service objective of the Trust is to provide efficient management of the Second Tier Pension termed the, "Mandatory fully funded and privately managed occupational pension scheme" for the members.',
    href: '#'
  },
];

export default function PlanComparison() {
  return (
    <section id="plans" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Do</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore the services we offer to help you secure your financial future.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl">
          {services.slice(0, 3).map((service) => (
            <Card key={service.name} className="flex flex-col shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="items-center text-center">
                <div className="rounded-full bg-secondary p-4">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl pt-4">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                 <Button variant="outline" className="w-full" asChild>
                    <Link href={service.href}>Read More</Link>
                  </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl lg:max-w-[calc(66.66%-2.66rem)] lg:mx-auto">
          {services.slice(3).map((service) => (
             <Card key={service.name} className="flex flex-col shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="items-center text-center">
                <div className="rounded-full bg-secondary p-4">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl pt-4">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                 <Button variant="outline" className="w-full" asChild>
                    <Link href={service.href}>Read More</Link>
                  </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
