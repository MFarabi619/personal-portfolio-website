import "./App.scss";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Parallax />
      <About />
      <Skills />
    </div>
  );
}

export default App;
