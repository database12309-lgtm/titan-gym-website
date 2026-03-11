import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Calculator } from "lucide-react";

export default function BmiCalculator() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  // Metric state
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");

  // Imperial state
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weightLbs, setWeightLbs] = useState("");

  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState("");

  const calculateBMI = (e: FormEvent) => {
    e.preventDefault();
    let bmiValue = 0;

    if (unit === "metric" && heightCm && weightKg) {
      const h = parseFloat(heightCm) / 100; // convert cm to meters
      const w = parseFloat(weightKg);
      if (h > 0 && w > 0) {
        bmiValue = w / (h * h);
      }
    } else if (unit === "imperial" && heightFt && weightLbs) {
      const ft = parseFloat(heightFt);
      const inches = parseFloat(heightIn) || 0;
      const totalInches = ft * 12 + inches;
      const w = parseFloat(weightLbs);

      if (totalInches > 0 && w > 0) {
        bmiValue = (w / (totalInches * totalInches)) * 703;
      }
    }

    if (bmiValue > 0) {
      setBmi(parseFloat(bmiValue.toFixed(1)));
      if (bmiValue < 18.5) setStatus("Underweight");
      else if (bmiValue >= 18.5 && bmiValue < 24.9) setStatus("Normal Weight");
      else if (bmiValue >= 25 && bmiValue < 29.9) setStatus("Overweight");
      else setStatus("Obese");
    }
  };

  return (
    <section id="tools" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-medium tracking-widest text-titan-secondary uppercase mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" /> Fitness Tools
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase">
              Calculate Your <span className="text-gradient">BMI</span>
            </h3>
            <p className="text-titan-muted text-lg font-light mb-8">
              Body Mass Index (BMI) is a simple calculation using a person's
              height and weight. The formula is BMI = kg/m2 where kg is a
              person's weight in kilograms and m2 is their height in metres
              squared.
            </p>

            <div className="glass-card p-6 rounded-2xl border border-white/10 mb-8">
              <h4 className="text-white font-medium uppercase tracking-wide mb-4 text-sm">
                BMI Categories
              </h4>
              <ul className="space-y-2 text-sm text-titan-muted">
                <li className="flex justify-between">
                  <span>Underweight</span>{" "}
                  <span className="text-white">{"< 18.5"}</span>
                </li>
                <li className="flex justify-between">
                  <span>Normal weight</span>{" "}
                  <span className="text-titan-secondary">18.5 - 24.9</span>
                </li>
                <li className="flex justify-between">
                  <span>Overweight</span>{" "}
                  <span className="text-white">25 - 29.9</span>
                </li>
                <li className="flex justify-between">
                  <span>Obesity</span>{" "}
                  <span className="text-white">{"≥ 30"}</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />

            <div className="flex bg-white/5 p-1 rounded-xl mb-8 relative z-10">
              <button
                onClick={() => {
                  setUnit("metric");
                  setBmi(null);
                }}
                className={`flex-1 py-2 text-sm font-medium uppercase tracking-wider rounded-lg transition-all ${unit === "metric" ? "bg-titan-primary text-white shadow-lg" : "text-titan-muted hover:text-white"}`}
              >
                Metric (cm/kg)
              </button>
              <button
                onClick={() => {
                  setUnit("imperial");
                  setBmi(null);
                }}
                className={`flex-1 py-2 text-sm font-medium uppercase tracking-wider rounded-lg transition-all ${unit === "imperial" ? "bg-titan-primary text-white shadow-lg" : "text-titan-muted hover:text-white"}`}
              >
                Imperial (ft/lbs)
              </button>
            </div>

            <form onSubmit={calculateBMI} className="space-y-6 relative z-10">
              {unit === "metric" ? (
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="heightCm"
                      className="block text-sm font-medium text-titan-muted uppercase tracking-wider mb-2"
                    >
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      id="heightCm"
                      value={heightCm}
                      onChange={(e) => setHeightCm(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-titan-primary focus:ring-1 focus:ring-titan-primary transition-all"
                      placeholder="e.g. 175"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="weightKg"
                      className="block text-sm font-medium text-titan-muted uppercase tracking-wider mb-2"
                    >
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      id="weightKg"
                      value={weightKg}
                      onChange={(e) => setWeightKg(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-titan-primary focus:ring-1 focus:ring-titan-primary transition-all"
                      placeholder="e.g. 70"
                      required
                    />
                  </div>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label
                        htmlFor="heightFt"
                        className="block text-sm font-medium text-titan-muted uppercase tracking-wider mb-2"
                      >
                        Feet
                      </label>
                      <input
                        type="number"
                        id="heightFt"
                        value={heightFt}
                        onChange={(e) => setHeightFt(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-titan-primary focus:ring-1 focus:ring-titan-primary transition-all"
                        placeholder="e.g. 5"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="heightIn"
                        className="block text-sm font-medium text-titan-muted uppercase tracking-wider mb-2"
                      >
                        Inches
                      </label>
                      <input
                        type="number"
                        id="heightIn"
                        value={heightIn}
                        onChange={(e) => setHeightIn(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-titan-primary focus:ring-1 focus:ring-titan-primary transition-all"
                        placeholder="e.g. 9"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="weightLbs"
                      className="block text-sm font-medium text-titan-muted uppercase tracking-wider mb-2"
                    >
                      Weight (lbs)
                    </label>
                    <input
                      type="number"
                      id="weightLbs"
                      value={weightLbs}
                      onChange={(e) => setWeightLbs(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-titan-primary focus:ring-1 focus:ring-titan-primary transition-all"
                      placeholder="e.g. 150"
                      required
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-primary text-white py-4 rounded-xl font-medium uppercase tracking-wider glow-primary-hover transition-all hover:scale-[1.02] active:scale-95"
              >
                Calculate Now
              </button>
            </form>

            {bmi !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10 text-center"
              >
                <p className="text-titan-muted text-sm uppercase tracking-widest mb-2">
                  Your BMI Is
                </p>
                <p className="text-5xl font-display font-bold text-white mb-2">
                  {bmi}
                </p>
                <p className="text-titan-secondary font-medium uppercase tracking-wider">
                  {status}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
