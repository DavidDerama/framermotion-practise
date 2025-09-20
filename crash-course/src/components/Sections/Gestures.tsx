import { motion } from "motion/react";

export default function Gestures() {
  return (
    <section className="flex flex-col gap-4 min-h-[60vh]">
      <motion.button
        className="p-5 py-2 text-sm text-white bg-blue-700 rounded-lg hover:bg-blue-700"
        layout
      >
        Click Me!
      </motion.button>
      <motion.button
        className="p-5 py-2 text-sm text-white bg-blue-700 rounded-lg hover:bg-blue-700"
        layout
      >
        Click Me!
      </motion.button>
    </section>
  );
}
