import { useRef } from "react";
import { motion, scroll, useScroll, useTransform } from "framer-motion";

import AboutMe from "./_components/aboutme";
import Work from "./_components/work";
import { CharacterHead } from "./_components/characterhead";
import Image from "next/image";

//bg-[#f4a460] bg-[#f5deb3]n

export default function MainCard() {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end end"],
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
      className="z-20 relative w-[90vw] max-w-[100rem]  h-full bg-[#D2B48C]  flex flex-col items-center "
    >
      <div className="absolute w-full -translate-y-[99%]">
        <CharacterHead />
      </div>
      <AboutMe />
      <Work />
      <div className="absolute bottom-0 w-full aspect-[20/1]">
        <Image src="belt.svg" fill alt="Belt Illustration" />
      </div>
      <div
        className="absolute w-full aspect-square bottom-0 rounded-full bg-[#FA8072] translate-y-1/2 "
        style={{
          clipPath: "polygon(0 49%, 100% 49%, 100% 100%, 0 100%)",
        }}
      ></div>
    </motion.div>
  );
}
