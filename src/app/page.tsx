
import PlanComparison from '@/components/plan-comparison';
import ResourceLibrary from '@/components/resource-library';
import ContactForm from '@/components/contact-form';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <>
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover z-0"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-primary/70 z-10" />
        <div className="container relative z-20 px-4 md:px-6">
          <div>
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
              Plan Your Future with Confidence
            </h1>
            <p className="mx-auto max-w-[700px] text-lg md:text-xl mt-4 drop-shadow-md">
              Hedge Pensions Trust helps you calculate, plan, and invest for a secure and comfortable retirement.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href="#plans">Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div>
        <PlanComparison />
      </div>
      <div>
        <ResourceLibrary />
      </div>
      <div>
        <ContactForm />
      </div>
    </>
  );
}
