import BasicsOfMotion from "./components/Sections/BasicsOfMotion";
import Gestures from "./components/Sections/Gestures";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-32 bg-pink-200">
      <BasicsOfMotion />
      <Gestures />
    </div>
  );
}

export default App;
