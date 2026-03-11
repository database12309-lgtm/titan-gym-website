import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import BookingModal from "./BookingModal";

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<
    { name: string; price: number } | undefined
  >();

  const handleSelectPlan = (name: string, price: string) => {
    setSelectedPlan({ name, price: parseInt(price, 10) });
    setIsModalOpen(true);
  };

  const plans = [
    {
      name: "Basic Plan",
      price: "1499",
      period: "/month",
      description:
        "Perfect for beginners looking to start their fitness journey.",
      features: [
        "Gym equipment access",
        "Locker room access",
        "Free Wi-Fi",
        "1 Fitness assessment",
      ],
      isPopular: false,
    },
    {
      name: "Pro Plan",
      price: "2499",
      period: "/month",
      description: "Ideal for those who want variety in their workouts.",
      features: [
        "Gym equipment access",
        "All group classes",
        "Locker & shower access",
        "Monthly fitness assessment",
        "Diet plan consultation",
      ],
      isPopular: true,
    },
    {
      name: "Elite Plan",
      price: "3999",
      period: "/month",
      description: "The ultimate package for serious transformation.",
      features: [
        "Full facility access",
        "Unlimited group classes",
        "Personal training guidance (4 sessions)",
        "Customized diet plan",
        "Priority booking",
        "Guest pass (2/month)",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-titan-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-widest text-titan-secondary uppercase mb-4">
            Membership Plans
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase">
            Choose Your <span className="text-gradient">Path</span>
          </h3>
          <p className="text-titan-muted text-lg font-light">
            Flexible pricing options designed to fit your goals and lifestyle.
            No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto group">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={plan.isPopular ? { y: [0, -8, 0] } : {}}
              transition={
                plan.isPopular
                  ? {
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      opacity: { duration: 0.5, delay: index * 0.1 },
                    }
                  : { duration: 0.5, delay: index * 0.1 }
              }
              className={`relative rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] ${
                plan.isPopular
                  ? "bg-gradient-to-b from-titan-primary/20 to-titan-bg border border-titan-primary/50 glow-primary z-10"
                  : "glass-card border-white/10 group-hover:opacity-60 hover:!opacity-100"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h4 className="text-2xl font-display font-bold text-white mb-2 uppercase">
                {plan.name}
              </h4>
              <p className="text-titan-muted text-sm mb-6 h-10">
                {plan.description}
              </p>
              <div className="mb-8">
                <span className="text-4xl font-display font-bold text-white">
                  ₹{plan.price}
                </span>
                <span className="text-titan-muted">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-titan-muted text-sm"
                  >
                    <Check
                      className={`w-5 h-5 shrink-0 ${plan.isPopular ? "text-titan-secondary" : "text-white/30"}`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleSelectPlan(plan.name, plan.price)}
                className={`block w-full text-center py-4 rounded-full font-medium text-sm uppercase tracking-wider transition-all active:scale-95 ${
                  plan.isPopular
                    ? "bg-gradient-primary text-white glow-primary-hover hover:scale-105"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </section>
  );
}
