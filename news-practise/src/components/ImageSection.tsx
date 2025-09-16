import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function ImageSection() {
  return (
    <div className="max-w-2xl">
      <AspectRatio ratio={16 / 9} className="relative inset-0">
        <Skeleton className="absolute object-cover w-full h-full" />
      </AspectRatio>
    </div>
  );
}
