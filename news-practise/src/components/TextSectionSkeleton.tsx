import { Skeleton } from "./ui/skeleton";

export default function TextSectionSkeleton() {
  return (
    <div className="flex flex-col w-full max-w-lg gap-4">
      <Skeleton className="w-4/5 h-6" />
      <Skeleton className="w-full h-6" />
      <Skeleton className="w-3/5 h-6" />
    </div>
  );
}
