import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const reviews = [
    {
      name: "Arjun K.",
      text: "Best gym in the city with amazing trainers. The equipment is top-notch and the environment is highly motivating.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Neha S.",
      text: "Joined the Pro plan 3 months ago and the group classes are fantastic. Clean facilities and friendly staff.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Rohan D.",
      text: "The personal training here is exceptional. Rahul helped me achieve my fitness goals faster than I thought possible.",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Priya M.",
      text: "Love the energy at Titan Gym! The trainers are super supportive and the community is amazing. Highly recommend.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Vikram S.",
      text: "Great equipment and spacious workout areas. Even during peak hours, I never have to wait long for machines.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Anjali R.",
      text: "The diet consultation included in the Elite plan changed my life. I feel stronger and healthier than ever.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      id="reviews"
      className="py-24 bg-titan-bg relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-titan-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-widest text-titan-secondary uppercase mb-4">
            Testimonials
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase">
            What Our <span className="text-gradient">Members Say</span>
          </h3>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-titan-secondary text-titan-secondary"
                />
              ))}
            </div>
            <span className="text-white font-display font-bold text-xl ml-2">
              4.8 / 5
            </span>
          </div>
          <p className="text-titan-muted text-sm uppercase tracking-widest">
            Based on 500+ reviews
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
            <button
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 bg-titan-bg border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-titan-primary hover:border-titan-primary transition-all active:scale-95 shadow-xl"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
            <button
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 bg-titan-bg border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-titan-primary hover:border-titan-primary transition-all active:scale-95 shadow-xl"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Carousel Track */}
          <div className="overflow-hidden px-2 py-4">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `calc(-${currentIndex * (100 / itemsPerView)}% - ${currentIndex * (24 / itemsPerView)}px)`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="shrink-0"
                  style={{
                    width: `calc(${100 / itemsPerView}% - ${((itemsPerView - 1) * 24) / itemsPerView}px)`,
                  }}
                >
                  <div className="glass-card p-8 rounded-3xl border border-white/10 relative group h-full flex flex-col">
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-titan-primary/20 transition-colors" />
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "fill-titan-secondary text-titan-secondary" : "fill-white/10 text-white/10"}`}
                        />
                      ))}
                    </div>
                    <p className="text-titan-muted leading-relaxed font-light italic mb-8 relative z-10 flex-grow">
                      "{review.text}"
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <img
                        src={review.image}
                        alt={review.name}
                        loading="lazy"
                        className="w-12 h-12 rounded-full object-cover border-2 border-titan-primary/30"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="text-white font-medium uppercase tracking-wide text-sm">
                          {review.name}
                        </h4>
                        <p className="text-titan-muted text-xs uppercase tracking-widest">
                          Verified Member
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === i
                    ? "w-8 bg-titan-secondary"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
