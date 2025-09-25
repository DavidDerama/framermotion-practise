import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

export default function UseScrollBasic() {
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ffffff", "#6366F1"]
  );

  return (
    <motion.div
      style={{
        background,
        scaleX: scrollYProgress,
        x: "-50%",
        y: "-50%",
      }}
      className="fixed w-screen h-4 bg-indigo-500 left-1/2 top-1/2"
    />
  );
}
