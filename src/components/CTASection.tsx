import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import VoiceWaveform from "@/components/VoiceWaveform";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Stop Losing Calls.
            <br />
            <span className="text-gradient">Start Closing Deals.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Join 2,500+ businesses using Voob AI to turn every missed call into revenue. Free trial — no credit card required.
          </p>

          <VoiceWaveform className="h-10 opacity-40" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="glow-border text-base px-8 h-12">
              Get Started for Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 h-12 border-border/50">
              Book a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
