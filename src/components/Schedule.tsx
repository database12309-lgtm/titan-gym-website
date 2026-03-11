import { motion } from "motion/react";

export default function Schedule() {
  const schedule = [
    {
      day: "Monday",
      class: "Strength Training / HIIT",
      time: "6:00 AM - 8:00 PM",
    },
    { day: "Tuesday", class: "Yoga / Cardio", time: "7:00 AM - 7:00 PM" },
    {
      day: "Wednesday",
      class: "Cross Training / Zumba",
      time: "6:00 AM - 8:00 PM",
    },
    {
      day: "Thursday",
      class: "Strength / Functional",
      time: "7:00 AM - 8:00 PM",
    },
    {
      day: "Friday",
      class: "Cardio / Core Training",
      time: "6:00 AM - 7:00 PM",
    },
    { day: "Saturday", class: "Group Workout", time: "8:00 AM - 2:00 PM" },
    { day: "Sunday", class: "Rest Day / Open Gym", time: "9:00 AM - 1:00 PM" },
  ];

  return (
    <section id="schedule" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-widest text-titan-secondary uppercase mb-4">
            Weekly Timetable
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase">
            Class <span className="text-gradient">Schedule</span>
          </h3>
          <p className="text-titan-muted text-lg font-light">
            Plan your week with our structured fitness classes led by expert
            instructors.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="divide-y divide-white/5">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-white/[0.02] transition-colors group"
                >
                  <div className="flex items-center gap-6 mb-4 sm:mb-0">
                    <div className="w-24 font-display font-bold text-white uppercase tracking-wider">
                      {item.day}
                    </div>
                    <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
                    <div className="text-titan-muted font-medium group-hover:text-titan-secondary transition-colors">
                      {item.class}
                    </div>
                  </div>
                  <div className="text-sm text-titan-primary font-mono bg-titan-primary/10 px-4 py-2 rounded-full inline-block w-fit">
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
