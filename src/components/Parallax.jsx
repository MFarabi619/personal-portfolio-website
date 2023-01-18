import React, { useState } from "react";
import "./ParallaxStyles.scss";
import hill1 from "/src/assets/hill1.png";
import hill2 from "/src/assets/hill2.png";
import hill3 from "/src/assets/hill3.png";
import hill4 from "/src/assets/hill4.png";
import hill5 from "/src/assets/hill5.png";
import tree from "/src/assets/tree.png";
import leaf from "/src/assets/leaf.png";
import plant from "/src/assets/plant.png";

function Parallax(props) {
  return (
    <div className="parallax">
      {/* <p className="introText"> */}
      {/* </p> */}
      <img src={hill1} id="hill2" />
      <img src={hill2} id="hill3" />
      <img src={hill3} id="hill4" />
      <img src={hill4} id="hill1" />
      <img src={hill5} id="hill5" />
      <img src={tree} id="tree" />
      {/* <h5 id="text"> */}
      Hello, I am
      <h2 id="text">Mumtahin Farabi</h2>
      {/* </h5> */}
      <img src={leaf} id="leaf" />
      <img src={plant} id="plant" />
      <div className="About">
        <h3>About Me</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
          aliquam, tempore corporis voluptas delectus ad voluptatum consequatur
          maiores, modi cumque debitis. Molestiae doloribus mollitia aliquid
          sapiente laboriosam error culpa aperiam!
        </p>
      </div>
    </div>
  );
}

export default Parallax;
