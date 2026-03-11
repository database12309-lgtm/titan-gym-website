import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Calendar,
  Clock,
  CreditCard,
  User,
  Mail,
  Loader2,
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: { name: string; price: number };
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedPlan,
}: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    plan: selectedPlan?.name || "Pro Membership",
    price: selectedPlan?.price || 79,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleCheckout = async () => {
    setLoading(true);
    setError("");

    try {
      if (formData.price === 0) {
        // Simulate free booking success
        await new Promise((resolve) => setTimeout(resolve, 1500));
        window.location.href = `${window.location.origin}?success=true`;
        return;
      }

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to initialize checkout");
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-titan-bg border border-white/10 rounded-3xl shadow-2xl z-[100] overflow-hidden"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
              <h3 className="text-xl font-display font-bold uppercase tracking-wider text-white">
                {step === 1 ? "Book Your Session" : "Complete Payment"}
              </h3>
              <button
                onClick={onClose}
                className="p-2 text-titan-muted hover:text-white transition-colors rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8">
              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
                  {error}
                </div>
              )}

              {step === 1 ? (
                <form onSubmit={handleNext} className="space-y-5">
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-titan-muted" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white focus:outline-none focus:border-titan-primary focus:ring-1 focus:ring-titan-primary transition-all"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-titan-muted" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white focus:outline-none focus:border-titan-primary focus:ring-1 focus:ring-titan-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-titan-muted" />
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white focus:outline-none focus:border-titan-primary focus:ring-1 focus:ring-titan-primary transition-all [color-scheme:dark]"
                      />
                    </div>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-titan-muted" />
                      <select
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white focus:outline-none focus:border-titan-primary focus:ring-1 focus:ring-titan-primary transition-all appearance-none"
                      >
                        <option value="" disabled className="bg-titan-bg">
                          Select Time
                        </option>
                        <option value="06:00 AM" className="bg-titan-bg">
                          06:00 AM
                        </option>
                        <option value="08:00 AM" className="bg-titan-bg">
                          08:00 AM
                        </option>
                        <option value="10:00 AM" className="bg-titan-bg">
                          10:00 AM
                        </option>
                        <option value="05:00 PM" className="bg-titan-bg">
                          05:00 PM
                        </option>
                        <option value="07:00 PM" className="bg-titan-bg">
                          07:00 PM
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-gradient-primary text-white py-4 rounded-xl font-medium uppercase tracking-wider glow-primary-hover transition-all hover:scale-[1.02] active:scale-95"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h4 className="text-sm font-medium text-titan-muted uppercase tracking-wider mb-4">
                      Order Summary
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between text-white">
                        <span>{formData.plan}</span>
                        <span className="font-bold">₹{formData.price}</span>
                      </div>
                      <div className="flex justify-between text-sm text-titan-muted">
                        <span>First Session</span>
                        <span>
                          {formData.date} at {formData.time}
                        </span>
                      </div>
                      <div className="pt-3 mt-3 border-t border-white/10 flex justify-between text-white font-bold">
                        <span>Total Due Today</span>
                        <span className="text-titan-secondary">
                          ₹{formData.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="px-6 py-4 rounded-xl font-medium uppercase tracking-wider border border-white/20 text-white hover:bg-white/5 transition-all active:scale-95"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleCheckout}
                      disabled={loading}
                      className="flex-1 bg-gradient-primary text-white py-4 rounded-xl font-medium uppercase tracking-wider glow-primary-hover transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />{" "}
                          Processing...
                        </>
                      ) : formData.price === 0 ? (
                        <>
                          <Calendar className="w-5 h-5" /> Confirm Booking
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5" /> Pay Securely
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
