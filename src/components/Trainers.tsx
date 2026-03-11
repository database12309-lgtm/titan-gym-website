import { motion } from "motion/react";
import { Instagram, Twitter } from "lucide-react";

export default function Trainers() {
  const trainers = [
    {
      name: "Rahul Mehta",
      specialty: "Strength Coach",
      experience: "8 years",
      image:
        "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Priya Sharma",
      specialty: "Yoga & Mobility",
      experience: "5 years",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Vikram Singh",
      specialty: "HIIT & Cardio",
      experience: "10 years",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Anita Desai",
      specialty: "Nutritionist",
      experience: "6 years",
      image:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section id="trainers" className="py-24 bg-titan-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-widest text-titan-secondary uppercase mb-4">
            Expert Coaches
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase">
            Meet Your <span className="text-gradient">Mentors</span>
          </h3>
          <p className="text-titan-muted text-lg font-light">
            Train with certified professionals dedicated to helping you reach
            your peak performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-card border border-white/10"
            >
              <div className="aspect-[3/4] w-full relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-titan-bg via-titan-bg/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-xl font-display font-bold text-white uppercase tracking-wide mb-1">
                    {trainer.name}
                  </h4>
                  <p className="text-titan-secondary font-medium text-sm uppercase tracking-wider mb-2">
                    {trainer.specialty}
                  </p>
                  <p className="text-titan-muted text-xs uppercase tracking-widest mb-4">
                    {trainer.experience} exp.
                  </p>
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <a
                      href="#"
                      className="p-2 bg-white/10 rounded-full hover:bg-titan-primary transition-colors"
                    >
                      <Instagram className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-white/10 rounded-full hover:bg-titan-primary transition-colors"
                    >
                      <Twitter className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
