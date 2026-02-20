import { motion } from "framer-motion";
import { Zap, MousePointerClick, Shield, Globe, Clock, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Sub-Second Latency",
    description: "Responses so fast, callers can't tell it's AI. Natural conversations at lightning speed.",
    span: "col-span-1",
  },
  {
    icon: MousePointerClick,
    title: "No-Code Builder",
    description: "Design your voice agent workflows visually. No developers needed — go live in minutes.",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SOC 2 compliant, end-to-end encryption, and HIPAA-ready for healthcare use cases.",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Serve customers in 30+ languages with native-sounding AI voices.",
    span: "col-span-1",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a call. Your AI agent works holidays, weekends, and midnight shifts.",
    span: "col-span-1",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track call volumes, conversion rates, and customer sentiment in a unified dashboard.",
    span: "col-span-1",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeatureGrid = () => {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Built for <span className="text-gradient">Performance</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to automate inbound calls and scale your business.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className={`${feature.span} group relative rounded-2xl glass p-6 hover:border-primary/30 transition-all duration-300`}
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGrid;
