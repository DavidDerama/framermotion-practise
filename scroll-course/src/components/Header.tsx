import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        hidden: { top: "-100%" },
        visible: { top: "0" },
      }}
      animate={hidden ? "hidden" : "visible"}
      className="fixed top-0 flex items-center justify-center w-screen p-4 py-6 bg-gray-400 border border-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
    >
      <div className="flex justify-between w-full max-w-screen-xl">
        <p>Logo</p>
        <nav className="flex items-center gap-4">
          <ul className="flex items-center gap-6">
            <li>home</li>
            <li>about</li>
            <li>services</li>
          </ul>
          <Button>Get Started</Button>
        </nav>
      </div>
    </motion.header>
  );
}
