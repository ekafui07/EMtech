import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";

export default function RetirementPlanningPage() {
  const image = PlaceHolderImages.find(img => img.id === 'retirement-planning-image');

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8 text-primary">
          Retirement Planning
        </h1>
        <div className="grid md:grid-cols-3 gap-8 items-start">
            {image && (
                <div className="relative h-64 w-full md:h-full col-span-1">
                    <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={400}
                    className="object-cover rounded-lg shadow-md"
                    data-ai-hint={image.imageHint}
                    />
                </div>
            )}
            <div className="prose prose-lg max-w-none text-muted-foreground text-xl/relaxed md:col-span-2">
                <p>
                    Planning for your retirement can be nerve-racking as you approach
                    retirement, and can still be a minefield for those people who start planning
                    for retirement early. As the Pensions Expert, Hedge makes planning for your
                    retirement a breeze. When you start planning for your retirement in your
                    twenties and thirties, you give yourself the best chance to retire comfortably
                    and to be able to support your family in later years.
                </p>
                <p>
                    Think of it this way, if you save 10 GHS at a 10% interest rate, in five years
                    the value of your investment will be worth 16 GHS, in ten years your
                    investment will be worth 26 GHS and in 20 years your investment will be
                    worth 67 GHS. During the first 10 years of investing your investment grows
                    by 16 GHS while during the next 10 years it grows by 41 GHS, showing that
                    the longer you invest the more growth you get in your investment.
                </p>
            </div>
        </div>
        <div className="mt-12">
            <Button variant="outline" asChild>
                <Link href="/#plans">
                    Back to Services
                </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
