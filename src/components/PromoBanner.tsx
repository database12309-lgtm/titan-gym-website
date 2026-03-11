import { motion } from "motion/react";
import { Timer } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="py-12 bg-gradient-primary relative overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Timer className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-wide mb-1 flex items-center gap-3">
                Limited Time Offer{" "}
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-md animate-pulse">
                  Ending Soon
                </span>
              </h3>
              <p className="text-white/80 font-medium">
                Only{" "}
                <span className="text-white font-bold underline decoration-2 underline-offset-4">
                  4 spots left
                </span>{" "}
                for our exclusive 20% OFF discount.
              </p>
            </div>
          </div>

          <a
            href="#pricing"
            className="bg-white text-titan-primary px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-all active:scale-95 whitespace-nowrap shadow-xl"
          >
            Claim Offer Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
