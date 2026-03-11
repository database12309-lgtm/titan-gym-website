import { motion } from "motion/react";
import { Award, Dumbbell, ShieldCheck, Droplets } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-titan-primary" />,
      title: "Certified Trainers",
      description: "Expert guidance from industry professionals.",
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-titan-secondary" />,
      title: "Modern Equipment",
      description: "State-of-the-art machines and free weights.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-titan-primary" />,
      title: "Clean Environment",
      description: "Hygienic, sanitized, and safe workout spaces.",
    },
    {
      icon: <Droplets className="w-8 h-8 text-titan-secondary" />,
      title: "Locker & Showers",
      description: "Premium facilities for your convenience.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-titan-bg relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-titan-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-titan-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-medium tracking-widest text-titan-secondary uppercase mb-4">
              About Titan Gym
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight uppercase">
              More Than Just <br />
              <span className="text-gradient">A Gym.</span>
            </h3>
            <p className="text-titan-muted text-lg mb-8 leading-relaxed font-light">
              We provide a premium fitness experience designed for those who
              demand the best. From cutting-edge equipment to world-class
              trainers, every detail is crafted to help you achieve your
              ultimate physical potential in a luxurious, motivating
              environment.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-titan-muted text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
                alt="Gym Equipment"
                loading="lazy"
                className="w-full h-64 object-cover rounded-3xl border border-white/10"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
                alt="Gym Interior"
                loading="lazy"
                className="w-full h-48 object-cover rounded-3xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                alt="Personal Training"
                loading="lazy"
                className="w-full h-48 object-cover rounded-3xl border border-white/10"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1593079831268-3381b0c1239b?q=80&w=2069&auto=format&fit=crop"
                alt="Free Weights"
                loading="lazy"
                className="w-full h-64 object-cover rounded-3xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
