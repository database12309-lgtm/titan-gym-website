import { motion } from "motion/react";

export default function Transformations() {
  const results = [
    {
      before:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
      after:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
      story:
        'Lost 10 kg in 3 months. "The trainers pushed me beyond my limits."',
      name: "Sarah J.",
    },
    {
      before:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
      after:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop",
      story: 'Gained 5kg of muscle in 6 months. "Best equipment in the city."',
      name: "Mike T.",
    },
  ];

  return (
    <section id="transformations" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-widest text-titan-secondary uppercase mb-4">
            Real Results
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase">
            Member <span className="text-gradient">Transformations</span>
          </h3>
          <p className="text-titan-muted text-lg font-light">
            See what dedication and expert guidance can achieve. Your success
            story starts here.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 group"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 relative border-r border-white/20">
                    <img
                      src={result.before}
                      alt="Before"
                      loading="lazy"
                      className="w-full h-full object-cover opacity-50 grayscale"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                      Before
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <img
                      src={result.after}
                      alt="After"
                      loading="lazy"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-primary px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                      After
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-titan-bg/80 backdrop-blur-md">
                <p className="text-white font-medium text-lg mb-2 italic">
                  "{result.story}"
                </p>
                <p className="text-titan-secondary font-display font-bold uppercase tracking-wider text-sm">
                  - {result.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
