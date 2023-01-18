import "./App.scss";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Parallax />
      <About />
    </div>
  );
}

export default App;
