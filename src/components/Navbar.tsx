import { useState, useEffect } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Departments", href: "#departments" },
    { name: "Pricing", href: "#pricing" },
    { name: "Trainers", href: "#trainers" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-titan-bg/90 backdrop-blur-md py-4 border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Dumbbell className="w-8 h-8 text-titan-primary group-hover:text-titan-secondary transition-colors" />
          <span className="text-2xl font-display font-bold tracking-wider uppercase">
            Titan<span className="text-gradient">Gym</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link-hover text-sm font-medium text-titan-muted hover:text-white transition-all active:scale-95 uppercase tracking-widest inline-block"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#trial"
            className="bg-gradient-primary text-white px-6 py-2.5 rounded-full font-medium text-sm uppercase tracking-wider glow-primary transition-all hover:scale-105 active:scale-95 inline-block"
          >
            Free Trial
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-titan-bg border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-titan-muted hover:text-white transition-all active:scale-95 uppercase tracking-widest py-2 block"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#trial"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-gradient-primary text-white px-6 py-3 rounded-full font-medium text-center uppercase tracking-wider mt-4 transition-all active:scale-95 block"
            >
              Free Trial
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
