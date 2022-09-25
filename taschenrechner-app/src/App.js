import Calc from "./components/Calc";
import { CalcProvider } from "./components/context/CalcContext";


function App() {
  
  return (
    <CalcProvider>
    <div className="bg-gradient-to-r from-hitpink to-salmon w-screen h-screen grid place-items-center drag">
      <Calc />
    </div>
    </CalcProvider>
  );
}

export default App;
