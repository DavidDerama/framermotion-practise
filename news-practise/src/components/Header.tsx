import Section from "./Section";

export default function Header() {
  return (
    <header className="w-screen border-black">
      <Section className="flex items-center justify-between py-4">
        <p className="relative pl-5 text-3xl font-bold">
          <span className="absolute left-0 text-sm font-medium -rotate-90 bottom-[6px]">
            The
          </span>
          Daily Bugle
        </p>
        <nav>
          <ul className="flex items-center gap-4">
            <li>News</li>
            <li>Sports</li>
            <li>Culture</li>
          </ul>
        </nav>
      </Section>
    </header>
  );
}
