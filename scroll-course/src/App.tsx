import Header from "./components/Header";
import UseInView from "./components/UseInView";
import UseScrollAdvanced from "./components/UseScrollAdvanced";
import UseScrollBasic from "./components/UseScrollBasic";
import UseScrollWithContainer from "./components/UseScrollWithContainer";
import WhileInView from "./components/WhileInView";

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <div className="flex items-center justify-center h-screen">
        <p>padding</p>{" "}
      </div>
      <WhileInView />
      <UseInView />
      <UseScrollBasic />
      <UseScrollAdvanced />
      <div className="flex items-center justify-center h-screen">
        <p>padding</p>{" "}
      </div>
      <UseScrollWithContainer />
    </div>
  );
}

export default App;
