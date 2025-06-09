"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const rocketRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: rocketRef,
    offset: ["start start", "end start"],
  });

  // Rocket Animation - Moves right and up
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100vh"]);
  const opacityRocket = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  // Text Animation - Gradually Reveal
  const textOpacity = useTransform(scrollYProgress, [0.4, 1], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.4, 1], ["20px", "0px"]);

  // Auto-scroll to next section when animation completes
  useEffect(() => {
    const handleScroll = () => {
      if (scrollYProgress.get() >= 0.99) {
        document.getElementById("nextSection").scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollYProgress.onChange(handleScroll);
    return () => scrollYProgress.clearListeners();
  }, [scrollYProgress]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Hero Section */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl font-bold">Welcome to Space</h1>
      </div>

      {/* Rocket Animation */}
      <motion.img
        ref={rocketRef}
        src="/rocket.png" // Replace with your rocket image path
        alt="Rocket"
        className="absolute bottom-10 left-0 w-32 h-auto"
        style={{ x, y, opacity: opacityRocket }}
      />

      {/* Text Reveal at Bottom-Right */}
      <motion.div
        className="absolute bottom-10 right-10 text-right space-y-2 text-lg"
        style={{ opacity: textOpacity, y: textY }}
      >
        <p>🚀 The journey begins.</p>
        <p>✨ Reaching for the stars.</p>
        <p>🌌 A universe of possibilities awaits.</p>
      </motion.div>

      {/* Next Section */}
      <div id="nextSection" className="h-screen w-full bg-gray-900 flex items-center justify-center">
        <h2 className="text-4xl font-bold">Next Section</h2>
      </div>
    </div>
  );
}
