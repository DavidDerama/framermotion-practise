import { motion } from "motion/react";

export default function ViewBaseAnimations() {
  return (
    <section className="flex flex-col items-center justify-center gap-12 py-10 min-h-[30vh]">
      <motion.div
        className="bg-black h-96 w-96"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
    </section>
  );
}
