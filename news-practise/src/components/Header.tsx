import { motion, useMotionValue, useScroll, useTransform } from "motion/react";
import Section from "./Section";
import { useEffect } from "react";

function clamp(number: number, min: number, max: number): number {
  return Math.min(Math.max(number, min), max);
}

function useBoundedScroll(bounds: number) {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0);
  let scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, bounds],
    [0, 1]
  );

  useEffect(() => {
    return scrollY.on("change", (current) => {
      let previous = scrollY.getPrevious();
      if (previous) {
        let diff = current - previous;
        let newScrollBounded = scrollYBounded.get() + diff;

        scrollYBounded.set(clamp(newScrollBounded, 0, bounds));
      }
    });
  }, [bounds, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
}

export default function Header() {
  let { scrollYBoundedProgress } = useBoundedScroll(50);
  let height = useTransform(scrollYBoundedProgress, [0, 50], [80, 64]);
  let opacity = useTransform(scrollYBoundedProgress, [0, 50], [1, 0]);

  useEffect(() => {
    return scrollYBoundedProgress.on("change", (current) => {
      console.log(current);
    });
  }, [scrollYBoundedProgress]);

  return (
    <motion.header
      style={{ height }}
      className="fixed inset-x-0 top-0 z-50 flex h-20 bg-white shadow-sm"
    >
      <Section className="flex items-end justify-between gap-12 my-auto">
        <p className="relative pl-5 text-3xl font-bold text-[#2e2e2e]">
          <span className="absolute left-0 text-sm font-medium -rotate-90 bottom-[6px]">
            The
          </span>
          Daily Bugle
        </p>
        <motion.nav style={{ opacity }}>
          <ul className="flex items-center gap-6">
            <li className="font-medium text-gray-400">News</li>
            <li className="font-medium text-gray-400">Sports</li>
            <li className="font-medium text-gray-400">Culture</li>
          </ul>
        </motion.nav>
      </Section>
    </motion.header>
  );
}
