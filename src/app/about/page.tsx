import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutUsPage() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-image');
  const missionImage = PlaceHolderImages.find(img => img.id === 'mission-image');
  const visionImage = PlaceHolderImages.find(img => img.id === 'vision-image');

  return (
    <div className="bg-secondary/30">
        <div className="container py-12 md:py-24 lg:py-32">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                            About Us
                        </h1>
                        <p className="prose prose-lg max-w-none text-muted-foreground text-xl/relaxed">
                            The Hedge Pensions Trust (HPT) sees its main challenge as establishing a well-crafted Information and Communication infrastructure platform to the required effective and efficient services to its customers. The trust therefore expects to offer significant differentiation with regard to our operations and services compared to our competitors in the fund management industry in Ghana. Consequently the HPT intends to develop and apply the requisite policies, strategies and programmes that will bring about sustained improvement and expansion in the service delivery of the Trust.
                        </p>
                    </div>
                    {aboutImage && (
                        <div className="relative h-80 w-full">
                            <Image
                                src={aboutImage.imageUrl}
                                alt={aboutImage.description}
                                fill
                                className="object-cover rounded-xl shadow-lg"
                                data-ai-hint={aboutImage.imageHint}
                            />
                        </div>
                    )}
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
                     {missionImage && (
                        <div className="relative h-80 w-full order-last md:order-first">
                            <Image
                                src={missionImage.imageUrl}
                                alt={missionImage.description}
                                fill
                                className="object-cover rounded-xl shadow-lg"
                                data-ai-hint={missionImage.imageHint}
                            />
                        </div>
                    )}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                           Our Mission
                        </h2>
                        <p className="prose prose-lg max-w-none text-muted-foreground text-xl/relaxed">
                           Hedge Pensions Trust exists to provide adequate and dignified retirement package to each member through safe, prudent and strategic investment policies.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                            Our Vision
                        </h2>
                        <p className="prose prose-lg max-w-none text-muted-foreground text-xl/relaxed">
                            To achieve operational excellence, superior financial performance, first class customer satisfaction and secured pension income.
                        </p>
                    </div>
                    {visionImage && (
                        <div className="relative h-80 w-full">
                            <Image
                                src={visionImage.imageUrl}
                                alt={visionImage.description}
                                fill
                                className="object-cover rounded-xl shadow-lg"
                                data-ai-hint={visionImage.imageHint}
                            />
                        </div>
                    )}
                </div>
                
                <div className="mt-24 text-center bg-card p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold tracking-tighter text-primary mb-4">Our Partners</h3>
                     <p className="prose prose-lg max-w-2xl mx-auto text-muted-foreground text-xl/relaxed">
                        In performing its functions the Hedge Pensions Trust will partner with National Pensions Regulatory Authority (NPRA), office of the head of Civil Service, Controller and Accountant Generals Department (CAGD) and other relevant institutions in the fund management industry in Ghana.
                    </p>
                </div>


                 <div className="mt-24 text-center">
                    <Button variant="outline" asChild>
                        <Link href="/#contact">
                            Contact Us
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}