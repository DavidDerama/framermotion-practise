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
        className={cn(
          "rounded-full border-gray-300 border-2 py-2 px-[14px] flex justify-center items-center",
          status === "complete" && "bg-blue-600 px-[10px]",
          (currentStep > maxSteps || status === "complete") && "py-[10px]"
        )}
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
      >
        {status === "complete" ? (
          <motion.path>
            <Check className="text-white h-4" />
          </motion.path>
        ) : (
          <p className="font-bold text-sm">{step}</p>
        )}
      </motion.div>
    </div>
  );
}
