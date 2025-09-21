import AnimationControls from "./components/Sections/AnimationControls";
import BasicsOfMotion from "./components/Sections/BasicsOfMotion";
import Gestures from "./components/Sections/Gestures";
import ViewBaseAnimations from "./components/Sections/ViewBaseAnimations";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-32 bg-pink-200">
      <BasicsOfMotion />
      <Gestures />
      <AnimationControls />
      <ViewBaseAnimations />
    </div>
  );
}

export default App;
