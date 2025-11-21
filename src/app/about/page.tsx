import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function AboutUsPage() {
  const image = PlaceHolderImages.find(img => img.id === 'about-us-image');

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8 text-primary">
          About Hedge Pensions Trust
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
                    Hedge Pensions Trust is a leading corporate trustee in Ghana, committed to deploying its significant expertise and resources to ensuring that your Occupational Pension Schemes and Provident Fund Schemes are established and managed to provide your employees with the best chance of a comfortable retirement.
                </p>
                <div className="mt-8">
                    <h2 className="text-3xl font-bold text-primary/90 mb-4">Our Mission</h2>
                    <p>
                        Our mission is to provide innovative and reliable pension solutions that empower individuals and organizations to achieve financial security in retirement. We strive to deliver exceptional service and value through expertise, integrity, and a deep commitment to our clients' long-term well-being.
                    </p>
                </div>
                 <div className="mt-8">
                    <h2 className="text-3xl font-bold text-primary/90 mb-4">Our Vision</h2>
                    <p>
                        Our vision is to be the most trusted and respected pension trustee in the industry, recognized for our unwavering dedication to client success, our pioneering approach to pension management, and our positive impact on the communities we serve.
                    </p>
                </div>
            </div>
        </div>
        <div className="mt-12">
            <Button variant="outline" asChild>
                <Link href="/#contact">
                    Contact Us
                </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
