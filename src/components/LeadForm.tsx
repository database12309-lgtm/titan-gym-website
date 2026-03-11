import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    alert("Thank you! We will contact you shortly.");
    setFormData({ name: "", phone: "", goal: "" });
  };

  return (
    <section id="join" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-medium tracking-widest text-titan-secondary uppercase mb-4">
              Join Titan Gym
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase">
              Ready To <span className="text-gradient">Start?</span>
            </h3>
            <p className="text-titan-muted text-lg font-light mb-8">
              Fill out the form below to book your free trial or get more
              information about our membership plans.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-titan-muted">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <span className="text-titan-secondary font-bold">1</span>
                </div>
                <p>Submit your details</p>
              </div>
              <div className="flex items-center gap-4 text-titan-muted">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <span className="text-titan-secondary font-bold">2</span>
                </div>
                <p>We'll contact you to schedule</p>
              </div>
              <div className="flex items-center gap-4 text-titan-muted">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <span className="text-titan-secondary font-bold">3</span>
                </div>
                <p>Enjoy your first workout free</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-10 rounded-3xl border border-titan-primary/30 relative overflow-hidden glow-primary"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-titan-muted uppercase tracking-wider mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-titan-primary focus:ring-1 focus:ring-titan-primary transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-titan-muted uppercase tracking-wider mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-titan-primary focus:ring-1 focus:ring-titan-primary transition-all"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="goal"
                  className="block text-sm font-medium text-titan-muted uppercase tracking-wider mb-2"
                >
                  Fitness Goal
                </label>
                <select
                  id="goal"
                  value={formData.goal}
                  onChange={(e) =>
                    setFormData({ ...formData, goal: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-titan-primary focus:ring-1 focus:ring-titan-primary transition-all appearance-none"
                  required
                >
                  <option value="" disabled className="bg-titan-bg">
                    Select your primary goal
                  </option>
                  <option value="weight_loss" className="bg-titan-bg">
                    Weight Loss
                  </option>
                  <option value="muscle_gain" className="bg-titan-bg">
                    Muscle Gain
                  </option>
                  <option value="strength" className="bg-titan-bg">
                    Strength & Power
                  </option>
                  <option value="general_fitness" className="bg-titan-bg">
                    General Fitness
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-primary text-white py-4 rounded-xl font-medium uppercase tracking-wider glow-primary-hover transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 mt-4"
              >
                Book Free Trial <Send className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-titan-muted mt-4 flex items-center justify-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                No credit card required. 100% free.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
