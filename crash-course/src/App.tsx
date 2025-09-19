import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center max-w-sm gap-6">
        <Button className="bg-blue-700 hover:bg-blue-700">Show/Hide</Button>
        <div className="bg-black size-40"></div>
      </div>
    </div>
  );
}

export default App;
