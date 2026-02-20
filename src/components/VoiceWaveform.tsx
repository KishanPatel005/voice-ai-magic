import { motion } from "framer-motion";

const VoiceWaveform = ({ className = "" }: { className?: string }) => {
  const bars = 24;

  return (
    <div className={`flex items-center justify-center gap-[3px] ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full bg-primary"
          animate={{
            height: [8, Math.random() * 40 + 12, 8],
          }}
          transition={{
            duration: 0.8 + Math.random() * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.05,
          }}
        />
      ))}
    </div>
  );
};

export default VoiceWaveform;
