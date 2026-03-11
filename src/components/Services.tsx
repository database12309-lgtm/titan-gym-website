import { motion } from "motion/react";
import {
  Activity,
  Flame,
  Users,
  HeartPulse,
  Zap,
  Target,
  BicepsFlexed,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <BicepsFlexed className="w-10 h-10 text-titan-primary" />,
      title: "Strength Training",
      description:
        "Build muscle and increase power with our comprehensive free weights and resistance machines.",
    },
    {
      icon: <Flame className="w-10 h-10 text-titan-secondary" />,
      title: "Fat Loss Program",
      description:
        "High-intensity workouts designed to burn calories and sculpt your physique efficiently.",
    },
    {
      icon: <Target className="w-10 h-10 text-titan-primary" />,
      title: "Personal Training",
      description:
        "1-on-1 coaching tailored to your specific goals, fitness level, and schedule.",
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-titan-secondary" />,
      title: "Cardio Zone",
      description:
        "State-of-the-art treadmills, ellipticals, and bikes for optimal cardiovascular health.",
    },
    {
      icon: <Users className="w-10 h-10 text-titan-primary" />,
      title: "Group Fitness",
      description:
        "Energizing classes led by expert instructors to keep you motivated and engaged.",
    },
    {
      icon: <Zap className="w-10 h-10 text-titan-secondary" />,
      title: "Functional Training",
      description:
        "Improve everyday movement patterns with kettlebells, battle ropes, and plyometrics.",
    },
    {
      icon: <Activity className="w-10 h-10 text-titan-primary" />,
      title: "Muscle Gain Program",
      description:
        "Hypertrophy-focused routines combined with nutritional guidance for maximum growth.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-widest text-titan-secondary uppercase mb-4">
            Training Programs
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase">
            Elevate Your <span className="text-gradient">Performance</span>
          </h3>
          <p className="text-titan-muted text-lg font-light">
            Discover our range of specialized training programs designed to help
            you achieve your specific fitness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-titan-bg rounded-2xl inline-block border border-white/5 group-hover:border-titan-primary/30 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-display font-bold text-white mb-3 uppercase tracking-wide">
                {service.title}
              </h4>
              <p className="text-titan-muted leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
