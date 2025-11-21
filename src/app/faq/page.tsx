import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is a pension scheme?",
    answer: "A pension scheme is a retirement plan that provides a regular income to employees after they retire from work. Contributions are made by both the employer and employee during the person's employment.",
  },
  {
    question: "Who can join a pension scheme?",
    answer: "Generally, any employee in Ghana is eligible to join a pension scheme. The requirements may vary based on the specific scheme, so it's best to check with your employer or the pension provider.",
  },
  {
    question: "How much do I need to contribute?",
    answer: "Contribution amounts are typically a percentage of your salary. The specific percentages for Tier 1, Tier 2, and optional Tier 3 schemes are defined by the National Pensions Regulatory Authority (NPRA).",
  },
  {
    question: "When can I access my pension benefits?",
    answer: "You can typically access your pension benefits upon reaching the statutory retirement age, which is currently 60 years in Ghana. Early withdrawal options may be available under specific circumstances like invalidity.",
  },
    {
    question: "What is the difference between Tier 2 and Tier 3?",
    answer: "Tier 2 is a mandatory, privately managed occupational pension scheme. Tier 3 is a voluntary provident fund and personal pension scheme, which allows for additional contributions to boost your retirement savings.",
  },
];

export default function FAQPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 text-center text-primary">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-muted-foreground mb-12 text-center">
          Find answers to common questions about our pension services.
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-lg font-medium text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
