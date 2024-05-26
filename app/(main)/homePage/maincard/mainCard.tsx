import { useRef } from "react";
import { motion, scroll, useScroll, useTransform } from "framer-motion";

import CoffeeCupSvg from "./_components/coffeecup";

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
      className="z-20 relative w-[90vw] max-w-[100rem]  h-[300vh] bg-[#D2B48C]  rounded-full flex flex-col items-center "
    >
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: "30%" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
        className="absolute bottom-full w-1/2 max-w-[60vw] max-h-[30vh] flex justify-center translate-x-[5%]"
      >
        <CoffeeCupSvg />
      </motion.div>
    </motion.div>
  );
}
