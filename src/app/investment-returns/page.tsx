import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const scopeOfServices = [
    "Employ well qualified fund managers and investment professionals with deep understanding of the current investment portfolio to manage member's contribution, hence the funds.",
    "Invest the contributions (funds) with regards to the best option of financial assets to yield optimal returns, taking into consideration the risk factors.",
    "Share the investment returns earned on the portfolio according to each individual members accrued contributions and returns made.",
    "Provide financial security on retirement, regeneration and during invalidity of members."
];

export default function InvestmentReturnsPage() {
  const image = PlaceHolderImages.find(img => img.id === 'investment-returns-image');

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8 text-primary">
          Investment Returns
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
                    The trust deed of the fund seeks to employ reputable fund advisors to
                    manage the Scheme. The trust deed spells out the objectives and conditions
                    of operations of the fund. Contributions by individual members of the
                    Scheme will be strategically invested for good dividends.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary/80">Scope Of Services</h2>
                <ul className="space-y-4">
                    {scopeOfServices.map((service, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                            <span>{service}</span>
                        </li>
                    ))}
                </ul>
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
