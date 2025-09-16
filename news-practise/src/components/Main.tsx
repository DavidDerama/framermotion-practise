import ImageSection from "./ImageSection";
import Section from "./Section";
import TextSectionSkeleton from "./TextSectionSkeleton";
import { Skeleton } from "./ui/skeleton";

export default function Main() {
  return (
    <main className="flex flex-col flex-1 py-16">
      <Section className="flex flex-col gap-8">
        <Skeleton className="h-10 max-w-72" />
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
