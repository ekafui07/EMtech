import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";

export default function CorporatePensionsPage() {
  const image = PlaceHolderImages.find(img => img.id === 'corporate-pensions-image');

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8 text-primary">
          Corporate Pensions
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
                    The Pension Act of 2008 puts all Ghanaian employers in a position of deep
                    regulatory responsibility. Under the law, every employer is required to
                    establish a Tier 2 Occupational Pension Scheme for the benefit of their
                    employees, and has a fiduciary responsibility to appoint and evaluate the
                    Trustee. A trustee is also required for any Tier 3 Provident Fund Schemes the
                    company may choose to establish.
                </p>
                <p>
                    As the leading corporate trustee in Ghana, Hedge Pension Trust is
                    committed to deploying its significant expertise and resources to ensuring
                    that your Occupational Pension Schemes and Provident Fund Schemes are
                    established and managed to provide your employees with the best chance
                    of a comfortable retirement. By choosing Hedge Pension Trust, you can
                    focus on your core business, knowing that all your pension obligations are taken care of.
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
