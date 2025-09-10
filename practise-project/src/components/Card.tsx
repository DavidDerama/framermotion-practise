import { useState } from "react";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import Step from "./Step";

export default function Card() {
  const [currentStep, setCurrentStep] = useState(1);

  const stepsEl = new Array(4).fill(null).map((_, index) => {
    const step = index + 1;
    return (
      <Step
        step={step}
        currentStep={currentStep}
        key={step}
        maxSteps={4}
      ></Step>
    );
  });

  const maxSteps = stepsEl.length + 1;

  return (
    <div className="bg-[#f2f2f2] rounded-xl py-6 px-6 min-w-96 gap-6 flex flex-col shadow-lg">
      <div className="flex gap-4 justify-between">{stepsEl}</div>
      <div className="flex flex-col gap-4">
        <Skeleton className="w-2/5 h-6" />
        <div className="flex flex-col gap-2">
          <Skeleton className="w-4/5 h-4" />
          <Skeleton className="w-5/5 h-4" />
          <Skeleton className="w-2/5 h-4" />
        </div>
      </div>
      <div className="flex w-full justify-between">
        <Button
          variant={"ghost"}
          className="rounded-full"
          onClick={() => {
            setCurrentStep((prev) => {
              return prev > 1 ? prev - 1 : prev;
            });
          }}
        >
          Back
        </Button>
        <Button
          className="bg-blue-600 hover:bg-blue-600 rounded-full"
          onClick={() => {
            setCurrentStep((prev) => {
              return prev < maxSteps ? prev + 1 : prev;
            });
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
