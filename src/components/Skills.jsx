import React from "react";
import "./SkillsStyles.scss";

import linux_logo from "/src/assets/svg/linux_logo.svg";
import ubuntu_logo from "/src/assets/svg/ubuntu_logo.svg";
import vscode_logo from "/src/assets/svg/vscode_logo.svg";
import vim_logo from "/src/assets/svg/vim_logo.svg";
import tmux_logo from "/src/assets/svg/tmux_logo.svg";
import git_logo from "/src/assets/svg/git_logo.svg";
import bash_logo from "/src/assets/svg/bash_logo.svg";
import figma_logo from "/src/assets/svg/figma_logo.svg";
import latex_logo from "/src/assets/svg/latex_logo.svg";
import androidstudio_logo from "/src/assets/svg/androidstudio_logo.svg";
import flutter_logo from "/src/assets/svg/flutter_logo.svg";

import jira_logo from "/src/assets/svg/jira_logo.svg";
import confluence_logo from "/src/assets/svg/confluence_logo.svg";

import html5_logo from "/src/assets/svg/html5_logo.svg";
import css_logo from "/src/assets/svg/css_logo.svg";
import sass_logo from "/src/assets/svg/sass_logo.svg";
import javascript_logo from "/src/assets/svg/javascript_logo.svg";
import c_logo from "/src/assets/svg/c_logo.svg";
import cpp_logo from "/src/assets/svg/cpp_logo.svg";
import python_logo from "/src/assets/svg/python_logo.svg";
import java_logo from "/src/assets/svg/java_logo.svg";
import dart_logo from "/src/assets/svg/dart_logo.svg";

import react_logo from "/src/assets/svg/react_logo.svg";
import bootstrap_logo from "/src/assets/svg/bootstrap_logo.svg";
import unittest_logo from "/src/assets/svg/unittest_logo.png";
import pytest_logo from "/src/assets/svg/pytest_logo.svg";

function Skills() {
  return (
    <div className="Skills">
      <h1>Skills 🤹‍♂️</h1>

      <div className="Cards">
        <div className="Tools">
          <p>Tools ⚒️</p>
          <div className="Images">
            <img src={linux_logo} className="linux_logo" alt="linux_logo" />
            <img src={ubuntu_logo} className="ubuntu_logo" alt="ubuntu_logo" />
            <img src={vscode_logo} className="vscode_logo" alt="" />
            <img src={vim_logo} className="vim_logo" alt="" />
            <img src={tmux_logo} className="tmux_logo" alt="tmux_logo" />
            <img src={git_logo} className="git_logo" alt="" />
            <img src={bash_logo} className="bash_logo" alt="bash_logo" />
            <img src={figma_logo} className="figma_logo" alt="" />
            <img src={latex_logo} className="latex_logo" alt="" />
            <img
              src={androidstudio_logo}
              className="androidstudio_logo"
              alt=""
            />
            <img src={flutter_logo} className="flutter_logo" alt="" />
            <img src={jira_logo} className="jira_logo" alt="jira_logo" />
            <img src={confluence_logo} className="confluence_logo" alt="confluence_logo" />
          </div>
        </div>
        <div className="Languages">
          <p>Languages 🔡</p>
          <div className="Images">
            <img src={html5_logo} className="html5_logo" alt="" />
            <img src={css_logo} className="css_logo" alt="" />
            <img src={sass_logo} className="sass_logo" alt="" />
            <img src={javascript_logo} className="javascript_logo" alt="" />
            <img src={python_logo} className="python_logo" alt="" />
            <img src={java_logo} className="java_logo" alt="" />
            <img src={c_logo} className="c_logo" alt="" />
            <img src={cpp_logo} className="cpp_logo" alt="" />
            <img src={dart_logo} className="dart_logo" alt="" />
          </div>
        </div>
        <div className="Frameworks">
          <p>Libraries/Frameworks 📚</p>
          <div className="Images">
            <img src={react_logo} className="react_logo" alt="" />
            <img src={bootstrap_logo} className="bootstrap_logo" alt="" />
            <img src={pytest_logo} className="pytest_logo" alt="pytest_logo" />
            <img src={unittest_logo} className="unittest_logo" alt="unittest_logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
