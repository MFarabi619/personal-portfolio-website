import React from "react";
import "./Skills.scss";
import html5_logo from "/src/assets/svg/html5_logo.svg";

function Skills() {
  return (
    <div className="Skills">
      <h1 className="Title">Skills 🤹‍♂️</h1>
      <div className="Tools">
        Tools
        <div className="Images">
          <img src={html5_logo} alt="" />
        </div>
      </div>
      <div className="Languages">
        Languages
        <div className="Images"></div>
      </div>
      <div className="Frameworks">
        Frameworks
        <div className="Images"></div>
      </div>
    </div>
  );
}
export default Skills;
