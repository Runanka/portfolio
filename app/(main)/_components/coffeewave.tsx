"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Coffeewave() {
  const { scrollYProgress } = useScroll();
  const scrollY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0">
      <svg width="100vw" height="100vh">
        <motion.rect
          style={{ y: scrollY }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            spring: 0.5,
            delay: 1,
          }}
          y="0%"
          width="100%"
          height="100%"
          fill="#222"
        />
      </svg>
    </div>
  );
}
