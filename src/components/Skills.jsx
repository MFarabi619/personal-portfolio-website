import React from "react";
import "./Skills.scss";

import vscode_logo from "/src/assets/svg/vscode_logo.svg";
import vim_logo from "/src/assets/svg/vim_logo.svg";
import androidstudio_logo from "/src/assets/svg/androidstudio_logo.svg";
import flutter_logo from "/src/assets/svg/flutter_logo.svg";
import git_logo from "/src/assets/svg/git_logo.svg";
import figma_logo from "/src/assets/svg/figma_logo.svg";
import latex_logo from "/src/assets/svg/latex_logo.svg";
import html5_logo from "/src/assets/svg/html5_logo.svg";
import css_logo from "/src/assets/svg/css_logo.svg";
import javascript_logo from "/src/assets/svg/javascript_logo.svg";
import c_logo from "/src/assets/svg/c_logo.svg";
import cpp_logo from "/src/assets/svg/cpp_logo.svg";
import python_logo from "/src/assets/svg/python_logo.svg";
import java_logo from "/src/assets/svg/java_logo.svg";
import dart_logo from "/src/assets/svg/dart_logo.svg";
import react_logo from "/src/assets/svg/react_logo.svg";
import sass_logo from "/src/assets/svg/sass_logo.svg";
import bootstrap_logo from "/src/assets/svg/bootstrap_logo.svg";

function Skills() {
  return (
    <div className="Skills">
      <h1 className="Title">Skills 🤹‍♂️</h1>
      <div className="Tools">
        Tools
        <div className="Images">
          <img src={vscode_logo} alt="" />
          <img src={vim_logo} alt="" />
          <img src={androidstudio_logo} alt="" />
          <img src={flutter_logo} alt="" />
          <img src={git_logo} alt="" />
          <img src={figma_logo} alt="" />
          <img src={latex_logo} alt="" />
        </div>
      </div>
      <div className="Languages">
        Languages
        <div className="Images">
          <img src={html5_logo} alt="" />
          <img src={css_logo} alt="" />
          <img src={javascript_logo} alt="" />
          <img src={c_logo} alt="" />
          <img src={cpp_logo} alt="" />
          <img src={python_logo} alt="" />
          <img src={java_logo} alt="" />
          <img src={dart_logo} alt="" />
        </div>
      </div>
      <div className="Frameworks">
        Libraries/Frameworks
        <div className="Images">
          <img src={react_logo} alt="" />
          <img src={sass_logo} alt="" />
          <img src={bootstrap_logo} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Skills;
