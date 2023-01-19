import React, { useEffect, useState } from "react";
import "./ParallaxStyles.scss";
import hill1 from "/src/assets/hill1.png";
import hill2 from "/src/assets/hill2.png";
import hill3 from "/src/assets/hill3.png";
import hill4 from "/src/assets/hill4.png";
import hill5 from "/src/assets/hill5.png";
import tree from "/src/assets/tree.png";
import leaf from "/src/assets/leaf.png";
import plant from "/src/assets/plant.png";
import nightSky from "/src/assets/nightSky.jpg";
import dawnSky from "/src/assets/dawnSky.webp";

function Parallax(props) {
  const [scrollPos, setScrollPos] = useState(0);
  const handleScroll = () => {
    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax">
      <header>
        <img src={nightSky} id="nightSky" />
        {/* <img src={dawnSky} id="dawnSky" /> */}
        <img
          src={hill1}
          id="hill1"
          style={{
            top: scrollPos < 120 ? scrollPos * 0.5 : 60,
          }}
        />

        <img src={hill2} id="hill2" />
        <img src={hill3} id="hill3" />
        <img src={hill4} style={{ left: scrollPos * -1.5 }} id="hill4" />
        <img src={hill5} style={{ left: scrollPos * 1.5 }} id="hill5" />
        <img src={tree} id="tree" />
        <div className="Text">
          <h5 className="Hello">Hello, I am</h5>
          <h2 className="Name">Mumtahin Farabi</h2>
        </div>
        <img
          src={leaf}
          style={{ top: scrollPos * -1.5, left: scrollPos * 1.5 }}
          id="leaf"
          scrollPos
        />
        <img src={plant} id="plant" />
      </header>
    </div>
  );
}

export default Parallax;
