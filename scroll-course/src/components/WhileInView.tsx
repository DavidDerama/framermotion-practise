import { motion } from "motion/react";

export default function WhileInView() {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="px-10 py-20 bg-blue-800"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        viewport={{ amount: "all" }}
      >
        <h1>helloooo!!!</h1>
      </motion.div>
    </div>
  );
}
