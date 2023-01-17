import React, { useState } from "react";
import "./ParallaxStyles.scss";

function Parallax(props) {
  return (
    <div className="parallax">
      {/* <p className="introText"> */}
      {/* <h5 id="text">Hello, I am</h5> */}
      {/* </p> */}
      <img src="/src/assets/hill1.png" id="hill1" />
      <img src="/src/assets/hill2.png" id="hill2" />
      <img src="/src/assets/hill3.png" id="hill3" />
      <img src="/src/assets/hill4.png" id="hill4" />
      <img src="/src/assets/hill5.png" id="hill5" />
      <img src="/src/assets/tree.png" id="tree" />
      <h2 id="text">Mumtahin Farabi</h2>
      <img src="/src/assets/leaf.png" id="leaf" />
      <img src="/src/assets/plant.png" id="plant" />
    </div>
  );
}

export default Parallax;
