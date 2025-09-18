import { motion, useMotionValue, useScroll, useTransform } from "motion/react";
import Section from "./Section";
import { useEffect } from "react";

export default function Header() {
  let { scrollY } = useScroll();
  let height = useMotionValue(64);
  let opacity = useMotionValue(1);

  function clamp(number: number, min: number, max: number): number {
    return Math.min(Math.max(number, min), max);
  }

  useEffect(() => {
    return scrollY.on("change", (current) => {
      let previous = scrollY.getPrevious();
      if (previous) {
        let diff = current - previous;
        let newHeight = height.get() - diff;
        let newOpacity = opacity.get() - diff * 0.1;

        height.set(clamp(newHeight, 64, 80));
        opacity.set(clamp(newOpacity, 0, 1));
      }
    });
  }, [height, scrollY, opacity]);

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
