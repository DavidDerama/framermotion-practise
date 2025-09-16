import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("max-w-screen-xl w-full px-4 mx-auto", className)}>
      {children}
    </section>
  );
}
