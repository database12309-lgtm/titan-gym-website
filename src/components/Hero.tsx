import { motion } from "motion/react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image & Overlay with Ken Burns Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym Interior"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-titan-bg via-titan-bg/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-titan-bg via-titan-bg/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div initial="hidden" animate="visible">
            <motion.span
              custom={0}
              variants={textVariants}
              className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-titan-secondary text-sm font-medium tracking-widest uppercase mb-6 backdrop-blur-sm"
            >
              Elite Fitness Experience
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-6 uppercase">
              <motion.div custom={1} variants={textVariants}>
                Transform Your
              </motion.div>
              <motion.div custom={2} variants={textVariants}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-titan-muted">
                  Body.
                </span>{" "}
                Build
              </motion.div>
              <motion.div custom={3} variants={textVariants}>
                <span className="text-gradient">Your Power.</span>
              </motion.div>
            </h1>
          </motion.div>

          <motion.p
            custom={4}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-titan-muted mb-10 max-w-2xl font-light leading-relaxed"
          >
            Join{" "}
            <span className="text-white font-semibold">2,500+ members</span> who
            have already transformed their lives. Train with expert coaches,
            modern equipment, and science-based fitness programs designed to
            push your limits.
          </motion.p>

          <motion.div
            custom={5}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#trial"
              className="w-full sm:w-auto bg-gradient-primary text-white px-8 py-4 rounded-full font-medium text-sm uppercase tracking-wider glow-primary transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#pricing"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-medium text-sm uppercase tracking-wider transition-all active:scale-95 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              View Plans
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-titan-muted hover:text-white px-6 py-4 font-medium text-sm uppercase tracking-wider transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" /> Contact on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator (Micro-commitment / Affordance) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-titan-muted text-xs uppercase tracking-widest font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-titan-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
