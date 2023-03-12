import React, { useEffect, useState } from "react";
import "./ParallaxStyles.scss";
import hill1 from "/src/assets/parallax images/hill1.png";
import hill2 from "/src/assets/parallax images/hill2.png";
import hill3 from "/src/assets/parallax images/hill3.png";
import hill4 from "/src/assets/parallax images/hill4.png";
import hill5 from "/src/assets/parallax images/hill5.png";
import tree from "/src/assets/parallax images/tree.png";
import leaf from "/src/assets/parallax images/leaf.png";
import plant from "/src/assets/parallax images/plant.png";
import nightSky from "/src/assets/parallax images/nightSky.jpg";
import dawnSky from "/src/assets/parallax images/dawnSky.webp";

function Parallax(props) {
  const [scrollpos, setScrollpos] = useState(0);
  const handleScroll = () => {
    setScrollpos(window.scrollY);
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
        <img
          src={nightSky}
          alt="Picture of night sky with stars,moon, and a hot air balloon"
          id="nightSky"
        />
        {/* <img src={dawnSky} id="dawnSky" /> */}
        <img
          src={hill1}
          alt="Picture of hill with trees"
          id="hill1"
          style={{
            top: scrollpos < 120 ? scrollpos * 0.5 : 60,
          }}
        />

        <img src={hill2} alt="Image of hill on left side" id="hill2" />
        <img src={hill3} alt="Image of hills on right side" id="hill3" />
        <img
          src={hill4}
          alt="Image of hill with trees on left side"
          style={{ left: scrollpos * -1.5 }}
          id="hill4"
        />
        <img
          src={hill5}
          alt="Image of Hill with trees on right side"
          style={{ left: scrollpos * 1.5 }}
          id="hill5"
        />
        <img src={tree} id="tree" />
        <div className="Text">
          <h5 className="Hello">Hello, I am</h5>
          <h2 className="Name">Mumtahin Farabi</h2>
        </div>
        <img
          src={leaf}
          style={{ top: scrollpos * -1.5, left: scrollpos * 1.5 }}
          id="leaf"
          scrollpos
        />
        <img src={plant} id="plant" />
      </header>
    </div>
  );
}

export default Parallax;
