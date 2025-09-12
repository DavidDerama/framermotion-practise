import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Check from "./Check";

type StepperProps = {
  step: number;
  currentStep: number;
  maxSteps: number;
};

export default function Step({ step, currentStep, maxSteps }: StepperProps) {
  let status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";

  return (
    <div className="relative">
      <motion.div
        animate={status}
        initial={{ opacity: 0 }}
        variants={{
          active: {
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0,
              duration: 0.3,
            },
          },
          complete: {
            scale: 1.3,
          },
          inactive: {
            opacity: 0,
          },
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: "tween",
          ease: "circOut",
        }}
        className="absolute inset-0 scale-125 bg-blue-200 rounded-full"
      ></motion.div>
      <motion.div
        initial={false}
        animate={status}
        transition={{ duration: 0.2 }}
        variants={{
          inactive: {
            backgroundColor: "#ffffff",
            borderColor: "#e5e5e5",
            color: "#6e6e6e",
          },
          active: {
            backgroundColor: "#ffffff",
            borderColor: "#3b82f6",
            color: "##3b82f6",
          },
          complete: {
            backgroundColor: "#3b82f6",
            color: "##3b82f6",
            borderColor: "#3b82f6",
          },
        }}
        className={cn(
          "relative rounded-full border-gray-300 border-2 py-2 px-[14px] flex justify-center items-center",
          status === "complete" && "bg-blue-600 px-[10px]",
          (currentStep > maxSteps || status === "complete") && "py-[10px]"
        )}
      >
        {status === "complete" ? (
          <motion.path>
            <Check className="h-4 text-white" />
          </motion.path>
        ) : (
          <p className="text-sm font-bold">{step}</p>
        )}
      </motion.div>
    </div>
  );
}
