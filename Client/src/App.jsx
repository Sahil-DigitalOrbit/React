import reactLogo from "./assets/react.svg";
import { Customizer, Homepage } from "./pages";
import CanvasModel from "./canvas/canvasModel";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <BrowserRouter>
        <Homepage />
        <CanvasModel />
        <Customizer />
      </BrowserRouter>
    </div>
  );
}

export default App;
