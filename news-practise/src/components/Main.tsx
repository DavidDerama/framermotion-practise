import ImageSection from "./ImageSection";
import Section from "./Section";
import TextSectionSkeleton from "./TextSectionSkeleton";
import { Skeleton } from "./ui/skeleton";

export default function Main() {
  return (
    <main className="flex flex-col flex-1 py-24">
      <Section className="flex flex-col gap-10">
        <Skeleton className="w-2/5 h-10" />
        <TextSectionSkeleton />
        <TextSectionSkeleton />
        <ImageSection />
        <TextSectionSkeleton />
        <TextSectionSkeleton />
        <TextSectionSkeleton />
        <TextSectionSkeleton />
        <TextSectionSkeleton />
      </Section>
    </main>
  );
}
