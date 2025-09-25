import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function UseInView() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: "all",
  });

  return (
    <div
      className="relative flex items-center justify-center h-screen"
      ref={ref}
    >
      <h1 className="relative z-0 text-3xl font-black uppercase">
        Show me on scroll
      </h1>
      <motion.div
        animate={{
          y: isInView ? "-100%" : "0%",
        }}
        className="absolute top-0 bottom-0 left-0 z-10 w-1/3 bg-indigo-500"
      />
      <motion.div
        animate={{
          y: isInView ? "100%" : "0%",
        }}
        className="absolute top-0 bottom-0 z-10 w-1/3 bg-indigo-500 left-1/3"
      />
      <motion.div
        animate={{
          y: isInView ? "-100%" : "0%",
        }}
        className="absolute top-0 bottom-0 z-10 w-1/3 bg-indigo-500 left-2/3"
      />
    </div>
  );
}
