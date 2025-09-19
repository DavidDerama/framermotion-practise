import { AnimatePresence, motion } from "motion/react";
import { Button } from "./components/ui/button";
import { useState } from "react";

function App() {
  const [isShown, setIsShown] = useState(true);

  const status = isShown ? "visible" : "hidden";

  function toggleBoxVisibility() {
    setIsShown((prev) => !prev);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center max-w-sm gap-12">
        <Button
          className="bg-blue-700 hover:bg-blue-700"
          onClick={toggleBoxVisibility}
        >
          Show/Hide
        </Button>
        <AnimatePresence>
          <motion.div
            initial={{ rotate: 0, scale: 0 }}
            animate={status}
            variants={{
              visible: {
                rotate: 180,
                opacity: 1,
                scale: 1,
              },
              hidden: {
                opacity: 0,
              },
            }}
            exit={{ rotate: 0, scale: 0, background: "blue" }}
            transition={{ duration: 1, type: "spring", ease: "backInOut" }}
            className="bg-black size-40"
          ></motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
