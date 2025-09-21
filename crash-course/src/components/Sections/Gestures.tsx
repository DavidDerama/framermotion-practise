import { motion, MotionConfig } from "motion/react";

export default function Gestures() {
  return (
    <section className="flex flex-col gap-4 min-h-[60vh]">
      <MotionConfig transition={{ duration: 0.125, ease: "easeInOut" }}>
        <motion.button
          className="p-5 py-2 text-sm text-white bg-blue-700 rounded-lg hover:bg-blue-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}
        >
          Click Me!
        </motion.button>
        <motion.button
          className="p-5 py-2 text-sm text-white bg-blue-700 rounded-lg hover:bg-blue-700"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.85, rotate: "-2.5deg" }}
        >
          Click Me!
        </motion.button>
      </MotionConfig>
    </section>
  );
}
