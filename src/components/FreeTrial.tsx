import { useState } from "react";
import { motion } from "motion/react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import BookingModal from "./BookingModal";

export default function FreeTrial() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="trial" className="py-24 bg-titan-bg relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-titan-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-12 md:p-20 rounded-[3rem] border border-titan-primary/30 glow-primary"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-titan-secondary/20 text-titan-secondary text-sm font-bold tracking-widest uppercase mb-6">
            Start Your Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 uppercase leading-tight">
            Claim Your <span className="text-gradient">Free Trial</span> <br />
            Workout Today
          </h2>
          <p className="text-titan-muted text-lg font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the Titan Gym difference with{" "}
            <span className="text-white font-bold">zero risk</span>. No
            commitment, no credit card required. Just one incredible workout to
            show you what you've been missing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-gradient-primary text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all active:scale-95 flex items-center justify-center gap-3 shadow-lg glow-primary-hover"
            >
              <Calendar className="w-5 h-5" /> Book Online
            </button>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all active:scale-95 flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
            <a
              href="tel:+1234567890"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </div>
        </motion.div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={{ name: "Free Trial Session", price: 0 }}
      />
    </section>
  );
}
