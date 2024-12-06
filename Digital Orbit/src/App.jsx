import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Offers from "./components/Offers";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Background from "./components/Background";

function App() {
  return (
    <>
      <BrowserRouter>
        <Background />
        <Navbar />
        <Hero />
        <Services />
        <Offers />
        <Projects />
        <Contact />
      </BrowserRouter>
    </>
  );
}

export default App;
