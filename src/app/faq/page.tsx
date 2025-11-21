import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        question: "What are the functions of the custodians?",
        answer: "The Custodians function to secure the funds of the scheme members. According to the National Pensions Act, 2008 (ACT 766), the Custodians directly control (or hold) fund movements of the members until payment is due. In other words, they receive members' contributions and forward same to the Fund Managers on the instruction of the Trustees. They also undertake statistical analysis on the investments and returns on the investments of the funds."
    },
    {
        question: "Which financial companies are involved in the management of the funds of the Trust?",
        answer: "The funds of the Trust are managed by Ecobank ETC and the Databank. These companies have been licensed and registered by the National Pensions Regulatory Authority (NPRA) to carry out investment activities for Second-tier Pension Schemes. Hedge Pension Trust has also secured the services of Cal Bank as their Custodians."
    },
    {
        question: "What are the profiles of the management team of the Hedge Pension Trust?",
        answer: "The Hedge Pensions Trust is managed by a team of competent and professional staff headed by an Actuary with over twenty (20) years' experience in the Pension industry. Also on the management team are accountants and seasoned ICT experts."
    },
    {
        question: "Who owns the Hedge Pension Trust?",
        answer: "At the 11th Quadrennial Congress of The Civil and Local Government Staff Association, Ghana (CLOGSAG) held in Cape Coast, in January 2011, congress mandated the National Executives to incorporate a Trust that would manage the Second and Third Tier Pensions under the National Pensions Act 2008 (Act 766). Subsequently, the Hedge Pensions Trust was incorporated by the Civil and Local Government Staff Association, Ghana (CLOGSAG) on December 29, 2011. It was licensed as a Corporate Trustee on April 10, 2012. CLOGSAG currently has a hundred percent equity in the Trust. Hedge Pensions Trust is operating a Master Trust Scheme under the second-tier Pensions Scheme. The Hedge Pension Trust although incorporated by CLOGSAG, is an autonomous and independent entity. The Trust would also operate a Third-tier Scheme for interested workers in both the formal and informal sector. A Provident Fund and Personal Pension schemes would be operated under the Third-tier pillar."
    },
    {
        question: "Do members have personal accounts?",
        answer: "Yes; Contributions made by a member of the Scheme shall be invested in the member contribution account including all accrued interests as soon as it is paid to the Trustee of the Scheme."
    }
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
