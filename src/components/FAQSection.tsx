import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How fast does the AI voice agent respond?",
    a: "Voob AI delivers sub-second response times, making conversations feel natural and indistinguishable from a human agent. Our proprietary latency optimization ensures zero awkward pauses.",
  },
  {
    q: "Do I need technical skills to set up Voob?",
    a: "Not at all. Our no-code visual builder lets you design conversation flows, set up integrations, and go live in under 15 minutes. No developers required.",
  },
  {
    q: "Is Voob HIPAA-compliant for healthcare?",
    a: "Yes. Voob AI is fully HIPAA-compliant with end-to-end encryption, BAA agreements, and SOC 2 Type II certification. Perfect for clinics, dentists, and healthcare providers.",
  },
  {
    q: "Can Voob integrate with my existing CRM or calendar?",
    a: "Absolutely. Voob integrates natively with Google Calendar, Calendly, Salesforce, HubSpot, and 50+ other tools via our API and Zapier integration.",
  },
  {
    q: "What happens if the AI can't handle a call?",
    a: "Voob intelligently routes complex calls to your human team with full context. You set the escalation rules — the AI handles the rest.",
  },
  {
    q: "How much does Voob AI cost?",
    a: "Plans start at $99/month for small businesses. We offer a free trial with 100 minutes so you can experience the ROI before committing. Enterprise pricing is available for high-volume needs.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass rounded-xl px-6 border-border/30"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
