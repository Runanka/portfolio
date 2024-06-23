import { motion } from "framer-motion";

import { TitleFont } from "../../_components/fonts";
import { StaggeredText } from "../_components/animation";

export default function IntroPage() {
  return (
    <div className="flex flex-col w-full h-[100svh] z-10 items-start">
      <div
        className="fixed flex w-full  justify-center items-center"
        style={{ height: "calc(100svh - 22.47vw)" }}
      >
        <TitleFont className="text-[#F5F5DC] tracking-[.40em] text-[clamp(2rem,9.091vw+0.182rem,6rem)] lg:text-[clamp(4rem,6.25vw+0rem,7.5rem)]">
          <div className="flex flex-col lg:flex-row  items-center lg:justify-center">
            <StaggeredText
              text="RUNANKA"
              el="div"
              className="my-4"
              stagger={0.05}
            />
            <span className="hidden lg:inline">&nbsp;</span>
            <StaggeredText
              text="ROY"
              el="div"
              className="my-4"
              stagger={0.05}
            />
          </div>
        </TitleFont>
      </div>
    </div>
  );
}
