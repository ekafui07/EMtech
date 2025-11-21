import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    id: "1",
    title: "The Beginner's Guide to Pension Plans",
    summary: "Understand the basics of pension plans, from defined benefit to defined contribution, and how to choose the right one for you.",
    imageId: "resource-1",
  },
  {
    id: "2",
    title: "Maximizing Your Retirement Savings",
    summary: "Learn proven strategies to boost your retirement savings, including tax-efficient investing and catch-up contributions.",
    imageId: "resource-2",
  },
  {
    id: "3",
    title: "Life After Retirement: A Financial Guide",
    summary: "Plan for a financially secure and fulfilling retirement. We cover budgeting, withdrawal strategies, and more.",
    imageId: "resource-3",
  },
];

export default function ResourceLibrary() {
  return (
    <section id="resources" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Resource Library</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Empower yourself with knowledge. Explore our collection of articles, guides, and tips for a better financial future.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl">
          {articles.map((article) => {
            const image = PlaceHolderImages.find(img => img.id === article.imageId);
            return (
              <Card key={article.id} className="overflow-hidden flex flex-col shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{article.summary}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0" asChild>
                    <Link href="#">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
