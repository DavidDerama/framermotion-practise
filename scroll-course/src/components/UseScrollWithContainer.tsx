import { motion } from "motion/react";
import { useRef } from "react";

export default function UseScrollWithContainer() {
  const containerRef = useRef(null);
  const targetRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="flex w-screen py-8 overflow-x-scroll bg-indigo-500/50"
    >
      <div className="w-screen shrink-0" />
      <motion.div
        ref={targetRef}
        className="mx-auto size-48 shrink-0 bg-zinc-50"
      />
      <div className="w-screen shrink-0" />
    </div>
  );
}
