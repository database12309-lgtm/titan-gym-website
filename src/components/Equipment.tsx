import { motion } from "motion/react";

export default function Equipment() {
  const equipmentList = [
    {
      name: "Squat Racks",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Bench Press Stations",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Cardio Machines",
      image:
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2127&auto=format&fit=crop",
    },
    {
      name: "Dumbbells Set",
      image:
        "https://images.unsplash.com/photo-1586401700818-24b522d76f58?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Cable Machines",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section id="equipment" className="py-24 bg-titan-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-widest text-titan-secondary uppercase mb-4">
            Our Arsenal
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase">
            Premium <span className="text-gradient">Equipment</span>
          </h3>
          <p className="text-titan-muted text-lg font-light">
            Train with the best. Our facility is equipped with top-tier machines
            and free weights to ensure you get the most out of every workout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipmentList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-3xl ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="aspect-[4/3] md:aspect-auto md:h-80 w-full relative">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-titan-bg via-titan-bg/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h4 className="text-2xl font-display font-bold text-white uppercase tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.name}
                  </h4>
                  <div className="h-1 w-12 bg-gradient-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
