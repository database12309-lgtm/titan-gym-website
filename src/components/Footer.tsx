import { Dumbbell, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#" className="flex items-center gap-2 group">
              <Dumbbell className="w-8 h-8 text-titan-primary group-hover:text-titan-secondary transition-colors" />
              <span className="text-2xl font-display font-bold tracking-wider uppercase">
                Titan<span className="text-gradient">Gym</span>
              </span>
            </a>
            <p className="text-titan-muted text-sm uppercase tracking-widest font-medium">
              Strength • Discipline • Transformation
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-titan-muted hover:text-titan-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-titan-muted hover:text-titan-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-titan-muted hover:text-titan-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-titan-muted hover:text-titan-primary transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-titan-muted uppercase tracking-widest">
          <p>
            &copy; {new Date().getFullYear()} Titan Gym. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
