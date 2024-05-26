import { motion } from "framer-motion";

import { TitleFont } from "../../_components/fonts";

export default function IntroPage() {
  return (
    <div className="flex flex-col w-full h-[80vh] justify-center">
      <motion.div
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 2 }}
        className="fixed flex w-full my-16 justify-center"
        style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%);` }}
      >
        <TitleFont className="text-[3rem] md:text-[5rem] lg:text-[7rem] text-[#FEF5E7]">
          Runanka Roy
        </TitleFont>
      </motion.div>
    </div>
  );
}
