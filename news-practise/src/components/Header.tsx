import Section from "./Section";

export default function Header() {
  return (
    <header className="w-screen border-black">
      <Section className="flex items-end justify-between gap-12 py-4">
        <p className="relative pl-5 text-3xl font-bold text-[#2e2e2e]">
          <span className="absolute left-0 text-sm font-medium -rotate-90 bottom-[6px]">
            The
          </span>
          Daily Bugle
        </p>
        <nav>
          <ul className="flex items-center gap-6">
            <li className="font-medium text-gray-400">News</li>
            <li className="font-medium text-gray-400">Sports</li>
            <li className="font-medium text-gray-400">Culture</li>
          </ul>
        </nav>
      </Section>
    </header>
  );
}
