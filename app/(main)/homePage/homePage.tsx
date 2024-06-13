"use client";

import { useRef } from "react";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import MainCard from "./maincard/mainCard";
import IntroPage from "./intropage/introPage";
import ContactPage from "./contactpage/contactpage";

export default function HomePage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const springY = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  const y = useTransform(springY, [0, 1], ["0%", "90%"]);

  return (
    <div className="z-0">
      <div className="fixed top-0 left-0 z-10 bg-[#F5F5DC]">
        <motion.svg
          style={{ y }}
          width="100vw"
          height="100vh"
          initial={{ scale: 1.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <defs>
            <symbol
              id="wave"
              viewBox="0 65 1440 400"
              preserveAspectRatio="xMinYMin meet"
            >
              <style>
                {
                  '.path-3{\n            animation:pathAnim-3 6s;\n            animation-timing-function: linear;\n            animation-iteration-count: infinite;\n          }\n          @keyframes pathAnim-3{\n            0%{\n              d: path("M 0 400 L 0 150 C 122.1333 155.4667 244.2667 160.9333 418 164 C 580 167 783 184 974 177 C 1155 170 1297.4667 174.1333 1440 150 L 1440 400 L 0 400 Z");\n            }\n            25%{\n              d: path("M 0 400 L 0 150 C 186.5333 135.3333 364 120 547 136 C 731 154 898.2667 172.6667 1044 172 C 1198 170 1315.8667 168.6667 1440 150 L 1440 400 L 0 400 Z");\n            }\n            50%{\n              d: path("M 0 400 L 0 150 C 185.2 120.5333 364 111 506 128 C 640 144 723 166 879 174 C 1018 180 1229.2 169.8667 1440 150 L 1440 400 L 0 400 Z");\n            }\n            75%{\n              d: path("M 0 400 L 0 150 C 158.2667 138.1333 318 132 462 136 C 611 139 744.1333 141.0667 905 150 C 1065.8667 152.9333 1252.9333 151.4667 1440 150 L 1440 400 L 0 400 Z");\n            }\n            100%{\n              d: path("M 0 400 L 0 150 C 122.1333 155.4667 244.2667 160.9333 418 164 C 580 167 783 184 974 177 C 1155 170 1297.4667 174.1333 1440 150 L 1440 400 L 0 400 Z");\n            }\n          }'
                }
              </style>
              <path
                width="100%"
                d="M 0 400 L 0 150 C 122.1333 155.4667 244.2667 160.9333 418 164 C 580 167 783 184 974 177 C 1155 170 1297.4667 174.1333 1440 150 L 1440 400 L 0 400 Z"
                fill="#3E2723"
                className="transition-all duration-1000 ease-in-out delay-150 path-3"
              />
              <rect y="390" width="100%" height="1000%" fill="#3E2723" />
            </symbol>
          </defs>
          <use href="#wave" width="100%" />
        </motion.svg>
      </div>
      <div
        ref={ref}
        className="absolute top-0 left-0 w-full h-max z-20 flex flex-col items-center"
      >
        <IntroPage />
        <MainCard />
        <ContactPage />
      </div>
    </div>
  );
}
