import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Global Ripple Effect
document.addEventListener("mousedown", (e) => {
  const target = e.target as HTMLElement;
  const button = target.closest("button, .active\\:scale-95") as HTMLElement;

  if (button) {
    // Ensure button has relative positioning and overflow hidden
    const computedStyle = window.getComputedStyle(button);
    if (computedStyle.position === "static") {
      button.style.position = "relative";
    }
    button.style.overflow = "hidden";

    // Create ripple element
    const ripple = document.createElement("span");
    ripple.classList.add("ripple-effect");

    // Determine ripple color based on button background
    const isLight = button.classList.contains("bg-white");
    if (isLight) {
      ripple.style.backgroundColor = "rgba(0, 0, 0, 0.15)";
    }

    // Calculate position and size
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
