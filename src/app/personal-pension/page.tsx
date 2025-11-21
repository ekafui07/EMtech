import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function PersonalPensionPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8 text-primary">
          Personal Pensions Scheme
        </h1>
        <div className="prose prose-lg max-w-none text-muted-foreground text-xl/relaxed">
          <p>
            Under the new pension law in Ghana, the government of Ghana through
            SSNIT will offer everyone who contributes to SSNIT a fixed monthly payment
            upon retirement; however, for most retirees that is not enough. Private
            pensions offer all Ghanaians a way to protect your retirement by saving
            through tax free vehicles that customized to your needs. Whether you have
            or do not have a workplace pension, this is the smartest way of ensuring a
            more decent life during retirement. Retirement does not mean you cannot
            continue enjoying life.
          </p>
        </div>
        <div className="mt-12">
            <Button asChild>
                <a href="/personal-pension-scheme.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF Brochure
                </a>
            </Button>
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
