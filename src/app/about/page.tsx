import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutUsPage() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-image');
  const missionImage = PlaceHolderImages.find(img => img.id === 'mission-image');
  const visionImage = PlaceHolderImages.find(img => img.id === 'vision-image');

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            Who We Are
            </h1>
            <div className="mt-4 w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start mb-8">
            {aboutImage && (
                <div className="relative h-64 w-full md:h-full col-span-2">
                    <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={800}
                    height={500}
                    className="object-cover rounded-lg shadow-md"
                    data-ai-hint={aboutImage.imageHint}
                    />
                </div>
            )}
            <div className="prose prose-lg max-w-none text-muted-foreground text-xl/relaxed md:col-span-3">
                <p>
                    The Hedge Pensions Trust (HPT) sees its main challenge as establishing a well-crafted Information and Communication infrastructure platform to the required effective and efficient services to its customers. On this basis HPT expects to generate high earnings from its operations and investments to ensure the possibility of providing attractive retirement income for its customers. In pursuit of this noble corporate policy HPT will endeavor to deploy appropriate and state- of -the art Information and Communication Technology (ICT) applications, among other things
                </p>
            </div>
        </div>
        <div className="prose prose-lg max-w-none text-muted-foreground text-xl/relaxed">
             <p>
                The trust therefore expects to offer significant differentiation with regard to our operations and services compared to our competitors in the fund management industry in Ghana. Consequently the HPT intends to develop and apply the requisite policies, strategies and programmes that will bring about sustained improvement and expansion in the service delivery of the Trust.This challenge makes it imperative for HPT to set up a reliable Management Information System that will be powered by a very good ICT platform for overall dissemination of organizational goals, programs and other related activities. The additional dimension expected from the application of ICT is to add value to the work performance and output of the staff of HPT. These in broad terms describe the demands that will drive the ICT strategic decisions and choices that HPT will adapt to ensure steady and enhanced performance culture.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16 mb-8">
            <Card className="shadow-lg overflow-hidden">
                {missionImage && (
                     <div className="relative h-48 w-full">
                        <Image
                            src={missionImage.imageUrl}
                            alt={missionImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={missionImage.imageHint}
                        />
                    </div>
                )}
                <CardHeader>
                    <CardTitle className="text-primary text-2xl">Mission Of Hedge Pensions Trust</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-lg">
                    <p>Hedge Pensions Trust exists to provide adequate and dignified retirement package to each member through safe, prudent and strategic investment policies.</p>
                </CardContent>
            </Card>
            <Card className="shadow-lg overflow-hidden">
                {visionImage && (
                     <div className="relative h-48 w-full">
                        <Image
                            src={visionImage.imageUrl}
                            alt={visionImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={visionImage.imageHint}
                        />
                    </div>
                )}
                <CardHeader>
                    <CardTitle className="text-primary text-2xl">Vision Of Hedge Pensions Trust</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-lg">
                    <p>To achieve operational excellence, superior financial performance, first class customer satisfaction and secured pension income.</p>
                </CardContent>
            </Card>
        </div>

        <div className="prose prose-lg max-w-none text-muted-foreground text-xl/relaxed mt-8">
            <p>
                In performing its functions the Hedge Pensions Trust will partner with National Pensions Regulatory Authority (NPRA), office of the head of Civil Service, Controller and Accountant Generals Department (CAGD) and other relevant institutions in the fund management industry in Ghana.
            </p>
        </div>

        <div className="mt-12 text-center">
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
