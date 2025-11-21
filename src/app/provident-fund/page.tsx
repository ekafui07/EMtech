import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const scopeOfServices = [
    "Coordinate individual contributions.",
    "Contract an outstanding investment management agency/ advisors.",
    "Provide investment management and administration for individual member's contributions to ensure good investment returns.",
    "Ensure prompt payment of all contributions and interest accrued on contributions, taking into consideration the period of contributions. Lump sum payment to members/ beneficiaries is recommended.",
    "Implement switching and life cycle features for efficient investment returns on members contributions (changing lifestyle demands as members approach retirement)."
];

export default function ProvidentFundPage() {
  const image = PlaceHolderImages.find(img => img.id === 'provident-fund-image');

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8 text-primary">
          Provident Fund Management
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
                    The key service objective of the Trust is to provide efficient management of
                    the Second Tier Pension termed the, "Mandatory fully funded and privately
                    managed occupational pension scheme" for the members. The efficient
                    management of the scheme will yield handsome investment returns on
                    contributions of each member and payable as a source of supplementary
                    income during retirement, death or invalidity.
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
