import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function UseScrollAdvanced() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["center", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "180deg"]);

  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        style={{ rotate }}
        ref={targetRef}
        className="mx-auto bg-indigo-500 size-48"
      />
    </div>
  );
}
