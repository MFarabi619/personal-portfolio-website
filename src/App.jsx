import "./App.scss";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Parallax />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
