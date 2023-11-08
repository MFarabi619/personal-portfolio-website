import "./App.scss";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Note from "./components/Note";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Parallax />
      <Note />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
      <Analytics />
    </div>
  );
}

export default App;
