/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { CheckCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PromoBanner from "./components/PromoBanner";
import About from "./components/About";
import Services from "./components/Services";
import Equipment from "./components/Equipment";
import Departments from "./components/Departments";
import Schedule from "./components/Schedule";
import Pricing from "./components/Pricing";
import Transformations from "./components/Transformations";
import Trainers from "./components/Trainers";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import BmiCalculator from "./components/BmiCalculator";
import Challenge from "./components/Challenge";
import InstagramFeed from "./components/InstagramFeed";
import FreeTrial from "./components/FreeTrial";
import LeadForm from "./components/LeadForm";
import Contact from "./components/Contact";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";

export default function App() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success")) {
      setShowSuccess(true);
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);

      // Auto-hide after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }
  }, []);

  return (
    <div className="min-h-screen bg-titan-bg text-white selection:bg-titan-primary selection:text-white">
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#25D366] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4"
          >
            <CheckCircle className="w-6 h-6" />
            <div>
              <p className="font-bold uppercase tracking-wider text-sm">
                Booking Confirmed!
              </p>
              <p className="text-sm text-white/90">We'll see you at the gym.</p>
            </div>
            <button
              onClick={() => setShowSuccess(false)}
              className="ml-4 hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <Hero />
      <PromoBanner />
      <About />
      <Services />
      <Equipment />
      <Departments />
      <Schedule />
      <Pricing />
      <Transformations />
      <Trainers />
      <Gallery />
      <Reviews />
      <BmiCalculator />
      <Challenge />
      <InstagramFeed />
      <FreeTrial />
      <LeadForm />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
