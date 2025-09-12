import EmailSidebar from "./components/EmailSidebar";
import { Skeleton } from "./components/ui/skeleton";

function App() {
  const skeletonsEl = new Array(6).fill(null).map((_, index) => {
    return (
      <div className="flex flex-col w-full gap-2" key={index}>
        <Skeleton className="w-4/5 h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-3/5 h-4" />
      </div>
    );
  });
  return (
    <div className="w-screen h-screen bg-[#1c1c1c] flex justify-center items-center">
      <div className="flex w-full max-w-2xl overflow-hidden bg-white rounded-xl h-[600px]">
        <EmailSidebar />
        <div className="flex flex-col flex-1 gap-4 px-6 py-6">
          <Skeleton className="w-full h-6" />
          {skeletonsEl}
        </div>
      </div>
    </div>
  );
}

export default App;
