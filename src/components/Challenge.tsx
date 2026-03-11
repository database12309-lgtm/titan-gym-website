import { useState } from "react";
import { motion } from "motion/react";
import { Target, TrendingUp, Users } from "lucide-react";
import BookingModal from "./BookingModal";

export default function Challenge() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: <Target className="w-6 h-6 text-titan-primary" />,
      title: "Guided Workout Plan",
      desc: "Daily routines tailored for maximum results.",
    },
    {
      icon: <Users className="w-6 h-6 text-titan-secondary" />,
      title: "Trainer Support",
      desc: "24/7 access to our expert coaching team.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-titan-primary" />,
      title: "Progress Tracking",
      desc: "Weekly check-ins and body composition analysis.",
    },
  ];

  return (
    <section
      id="challenge"
      className="py-24 bg-titan-bg relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop"
          alt="Challenge Background"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-titan-bg via-titan-bg/90 to-titan-bg/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-titan-primary/20 border border-titan-primary/50 text-titan-secondary text-sm font-bold tracking-widest uppercase mb-8">
              New Program
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 uppercase leading-tight">
              30 Day <br />
              <span className="text-gradient">Transformation</span> <br />
              Challenge
            </h2>
            <p className="text-titan-muted text-lg font-light mb-10 max-w-xl leading-relaxed">
              Push your limits and achieve incredible results in just 30 days.
              Join our comprehensive program designed to jumpstart your fitness
              journey with expert guidance every step of the way.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium uppercase tracking-wide mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-titan-muted text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-gradient-primary text-white px-8 py-4 rounded-full font-medium text-sm uppercase tracking-wider glow-primary transition-all hover:scale-105 active:scale-95"
            >
              Join The Challenge
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-titan-primary to-titan-secondary rounded-full blur-[100px] opacity-30" />
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
              alt="Transformation Challenge"
              loading="lazy"
              className="relative z-10 w-full h-auto rounded-3xl border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-titan-bg border border-white/10 p-6 rounded-2xl shadow-xl z-20 glass-card">
              <div className="text-4xl font-display font-bold text-white mb-1">
                500+
              </div>
              <div className="text-titan-secondary text-sm uppercase tracking-widest font-medium">
                Lives Changed
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={{ name: "30 Day Challenge", price: 1999 }}
      />
    </section>
  );
}
