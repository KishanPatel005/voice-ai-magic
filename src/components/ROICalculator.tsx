import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { DollarSign, Phone, TrendingUp } from "lucide-react";

const ROICalculator = () => {
  const [missedCalls, setMissedCalls] = useState([50]);

  const stats = useMemo(() => {
    const calls = missedCalls[0];
    const avgBookingValue = 150;
    const conversionRate = 0.35;
    const recoveredRevenue = Math.round(calls * avgBookingValue * conversionRate);
    const voobCost = 99;
    const roi = Math.round(((recoveredRevenue - voobCost) / voobCost) * 100);
    return { calls, recoveredRevenue, roi, voobCost };
  }, [missedCalls]);

  return (
    <section id="roi" className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Calculate Your <span className="text-gradient">Lost Revenue</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See how much revenue you're leaving on the table.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 sm:p-12 glow-border"
        >
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-medium text-foreground">Monthly Missed Calls</label>
                <span className="text-2xl font-bold text-gradient">{stats.calls}</span>
              </div>
              <Slider
                value={missedCalls}
                onValueChange={setMissedCalls}
                min={10}
                max={500}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>10</span>
                <span>500</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl bg-secondary/50 p-5 text-center">
                <Phone className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stats.calls}</div>
                <p className="text-xs text-muted-foreground mt-1">Calls Recovered</p>
              </div>
              <div className="rounded-xl bg-secondary/50 p-5 text-center">
                <DollarSign className="h-5 w-5 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-emerald-400">
                  ${stats.recoveredRevenue.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Revenue Recovered / mo</p>
              </div>
              <div className="rounded-xl bg-secondary/50 p-5 text-center">
                <TrendingUp className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-gradient">{stats.roi}%</div>
                <p className="text-xs text-muted-foreground mt-1">ROI with Voob</p>
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground">
              Based on an average booking value of $150 and 35% conversion rate. Voob starts at ${stats.voobCost}/mo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;
