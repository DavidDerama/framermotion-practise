import { motion, useAnimationControls } from "motion/react";

export default function AnimationControls() {
  const controls = useAnimationControls();
  function handleClick() {
    controls.start("flip");
  }

  return (
    <section className="flex flex-col gap-12 justify-center items-center min-h-[30vh] py-10">
      <button
        onClick={handleClick}
        className="p-5 py-2 text-sm text-white bg-blue-700 rounded-lg hover:bg-blue-700"
      >
        Flip It!
      </button>
      <motion.div
        animate={controls}
        className="bg-black size-48"
        initial="initial"
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        whileHover={"flip"}
      />
    </section>
  );
}
