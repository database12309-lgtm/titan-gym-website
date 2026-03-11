import { motion } from "motion/react";
import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-titan-bg relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-medium tracking-widest text-titan-secondary uppercase mb-4">
              Get In Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-10 uppercase">
              Contact <span className="text-gradient">Us</span>
            </h3>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 shrink-0">
                  <MapPin className="w-6 h-6 text-titan-primary" />
                </div>
                <div>
                  <h4 className="text-white font-medium uppercase tracking-wide mb-1">
                    Location
                  </h4>
                  <p className="text-titan-muted leading-relaxed">
                    Titan Gym, Connaught Place
                    <br />
                    New Delhi, Delhi 110001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 shrink-0">
                  <Phone className="w-6 h-6 text-titan-secondary" />
                </div>
                <div>
                  <h4 className="text-white font-medium uppercase tracking-wide mb-1">
                    Phone
                  </h4>
                  <p className="text-titan-muted leading-relaxed">
                    +91 98765 43210
                    <br />
                    +91 98765 43211
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 shrink-0">
                  <Mail className="w-6 h-6 text-titan-primary" />
                </div>
                <div>
                  <h4 className="text-white font-medium uppercase tracking-wide mb-1">
                    Email
                  </h4>
                  <p className="text-titan-muted leading-relaxed">
                    info@titangym.com
                    <br />
                    support@titangym.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 px-6 py-3 rounded-full font-medium text-sm uppercase tracking-wider transition-all active:scale-95 border border-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#E1306C]/10 text-[#E1306C] hover:bg-[#E1306C]/20 px-6 py-3 rounded-full font-medium text-sm uppercase tracking-wider transition-all active:scale-95 border border-[#E1306C]/20"
              >
                <Instagram className="w-5 h-5" /> Instagram
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] lg:h-auto rounded-3xl overflow-hidden border border-white/10 relative glass-card group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114827184245!2d77.215956!3d28.632742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdef8ef7a0abc413!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
