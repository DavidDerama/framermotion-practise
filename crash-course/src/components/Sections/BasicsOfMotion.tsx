import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function BasicsOfMotion() {
  const [isShown, setIsShown] = useState(true);

  function toggleBoxVisibility() {
    setIsShown((prev) => !prev);
  }
  return (
    <div className="flex flex-col items-center justify-center max-w-sm gap-12">
      <div className="flex gap-4">
        <motion.button
          className="p-5 py-2 text-sm text-white bg-blue-700 rounded-lg hover:bg-blue-700"
          onClick={toggleBoxVisibility}
          layout
        >
          Show/Hide
        </motion.button>
      </div>
      <AnimatePresence mode="popLayout">
        {isShown && (
          <motion.div
            initial={{ rotate: 0, scale: 0, y: 0 }}
            animate={{
              rotate: 180,
              scale: 1,
              y: [0, 150, -150, -150, 80, 0],
            }}
            exit={{ rotate: 0, scale: 0, background: "blue", y: 0 }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.65, 0.9, 1],
            }}
            className="bg-black size-40"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
