import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type StaggeredTextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  stagger?: number;
};

export const StaggeredText = ({
  text,
  el: Wrapper = "p",
  className,
  stagger = 0.03,
}: StaggeredTextProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: true });

  const StaggerTextVariants = {
    hidden: {
      opacity: 0,
      y: "100%",
      scaleX: 0.5,
      originX: 0,
    },
    visible: {
      opacity: 1,
      y: "0%",
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Wrapper className={cn(className)}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        aria-hidden
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{
          staggerChildren: stagger,
        }}
      >
        {text.split(" ").map((word, index, array) => (
          <span key="index" className="inline-block overflow-clip">
            {word.split("").map((char, index) => (
              <motion.span
                variants={StaggerTextVariants}
                key={index}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            {array.length > 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
