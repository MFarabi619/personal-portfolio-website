import "./App.scss";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Parallax />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
