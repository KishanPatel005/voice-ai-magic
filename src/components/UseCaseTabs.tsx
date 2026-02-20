import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stethoscope, UtensilsCrossed, Building2, DollarSign, CheckCircle2 } from "lucide-react";

const industries = [
  {
    id: "healthcare",
    label: "Healthcare",
    icon: Stethoscope,
    title: "AI Receptionist for Clinics & Dentists",
    description: "Automate patient scheduling, handle insurance queries, and send appointment reminders — all HIPAA-compliant.",
    benefits: [
      "Automated appointment booking & rescheduling",
      "Insurance verification workflows",
      "Post-visit follow-up calls",
      "HIPAA-compliant data handling",
    ],
    stat: "73%",
    statLabel: "reduction in no-shows",
  },
  {
    id: "restaurants",
    label: "Restaurants",
    icon: UtensilsCrossed,
    title: "Never Miss a Reservation Again",
    description: "Handle peak-hour call volumes, manage reservations, and upsell specials — without hiring extra staff.",
    benefits: [
      "Reservation management & waitlist",
      "Menu inquiries & dietary info",
      "Order-ahead & pickup scheduling",
      "Multi-location call routing",
    ],
    stat: "40%",
    statLabel: "more bookings captured",
  },
  {
    id: "realestate",
    label: "Real Estate",
    icon: Building2,
    title: "Qualify Leads While You Sleep",
    description: "Screen buyer interest, schedule property viewings, and nurture leads 24/7 with a tireless AI agent.",
    benefits: [
      "Lead qualification & scoring",
      "Automated viewing scheduling",
      "Property info & availability",
      "CRM integration & follow-ups",
    ],
    stat: "5×",
    statLabel: "more leads qualified",
  },
  {
    id: "finance",
    label: "Finance",
    icon: DollarSign,
    title: "Streamline Client Communications",
    description: "Handle account inquiries, schedule consultations, and route calls intelligently for financial advisors.",
    benefits: [
      "Account balance & transaction queries",
      "Appointment scheduling",
      "Compliance-ready call recording",
      "Priority routing for VIP clients",
    ],
    stat: "60%",
    statLabel: "call handling time saved",
  },
];

const UseCaseTabs = () => {
  const [active, setActive] = useState("healthcare");
  const current = industries.find((i) => i.id === active)!;

  return (
    <section id="use-cases" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Built for <span className="text-gradient">Your Industry</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tailored AI voice solutions across verticals.
          </p>
        </motion.div>

        <Tabs value={active} onValueChange={setActive} className="w-full">
          <TabsList className="w-full max-w-xl mx-auto grid grid-cols-4 bg-secondary/50 mb-12">
            {industries.map((ind) => (
              <TabsTrigger key={ind.id} value={ind.id} className="text-xs sm:text-sm gap-1.5">
                <ind.icon className="h-4 w-4 hidden sm:block" />
                {ind.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{current.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{current.description}</p>
              <ul className="space-y-3">
                {current.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-secondary-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <div className="glass rounded-2xl p-8 text-center glow-border">
                <div className="text-6xl sm:text-7xl font-bold text-gradient mb-2">{current.stat}</div>
                <p className="text-muted-foreground text-sm">{current.statLabel}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UseCaseTabs;
