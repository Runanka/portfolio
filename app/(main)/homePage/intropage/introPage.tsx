import { motion } from "framer-motion";

import { TitleFont } from "../../_components/fonts";

export default function IntroPage() {
  return (
    <div className="flex flex-col w-full h-[100vh] z-10 items-start">
      <motion.div
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 2 }}
        className="fixed flex w-full  justify-center items-center"
        style={{ height: "calc(100vh - 22.47vw)" }}
      >
        <TitleFont className="text-[#F5F5DC] tracking-[.40em] text-[clamp(2rem,9.091vw+0.182rem,6rem)] lg:text-[clamp(4rem,6.25vw+0rem,7.5rem)]">
          <div className="flex flex-col lg:flex-row  items-center lg:justify-center">
            <div className="my-4">
              <span>R</span>
              <span>U</span>
              <span>N</span>
              <span>A</span>
              <span>N</span>
              <span>K</span>
              <span>A</span>
            </div>
            <div className="my-4">
              <span className="hidden lg:inline">&nbsp;</span>
              <span>R</span>
              <span>O</span>
              <span>Y</span>
            </div>
          </div>
        </TitleFont>
      </motion.div>
    </div>
  );
}
