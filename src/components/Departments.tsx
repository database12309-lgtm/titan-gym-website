import { motion } from "motion/react";
import {
  Dumbbell,
  HeartPulse,
  Activity,
  Sparkles,
  Crosshair,
} from "lucide-react";

export default function Departments() {
  const departments = [
    {
      title: "Strength Zone",
      desc: "State-of-the-art free weights, squat racks, and resistance machines for serious muscle building.",
      icon: <Dumbbell className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2",
    },
    {
      title: "Cardio Deck",
      desc: "Premium treadmills, ellipticals, and rowers with scenic city views.",
      icon: <HeartPulse className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=2069&auto=format&fit=crop",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
    },
    {
      title: "Functional Training",
      desc: "Kettlebells, battle ropes, and plyo boxes for high-intensity interval training.",
      icon: <Activity className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
    },
    {
      title: "Yoga & Recovery",
      desc: "Tranquil space for yoga, stretching, mobility work, and meditation.",
      icon: <Sparkles className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
    },
    {
      title: "Martial Arts",
      desc: "Dedicated dojo area with heavy bags, speed bags, and grappling mats.",
      icon: <Crosshair className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070&auto=format&fit=crop",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
    },
  ];

  return (
    <section id="departments" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest text-titan-secondary uppercase mb-4"
          >
            Our Facilities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase"
          >
            Explore Our <span className="text-gradient">Departments</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-titan-muted text-lg font-light"
          >
            Discover specialized training zones equipped with the latest
            technology to help you achieve your specific fitness goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group ${dept.colSpan} ${dept.rowSpan}`}
            >
              <img
                src={dept.image}
                alt={dept.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-titan-bg via-titan-bg/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-titan-secondary mb-4 group-hover:-translate-y-2 transition-transform duration-500">
                  {dept.icon}
                </div>
                <h4 className="text-2xl font-display font-bold text-white uppercase tracking-wide mb-2 group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                  {dept.title}
                </h4>
                <p className="text-titan-muted text-sm font-light opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150">
                  {dept.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
