import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex w-screen max-w-screen-xl p-4 py-6 mx-auto">
      <p></p>
      <nav>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>services</li>
        </ul>
        <Button>Get Started</Button>
      </nav>
    </header>
  );
}
