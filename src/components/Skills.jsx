import React from "react";
import "./SkillsStyles.scss";

import linux_logo from "/src/assets/svg/linux_logo.svg";
import ubuntu_logo from "/src/assets/svg/ubuntu_logo.svg";
import vscode_logo from "/src/assets/svg/vscode_logo.svg";
import vim_logo from "/src/assets/svg/vim_logo.svg";
import tmux_logo from "/src/assets/svg/tmux_logo.svg";
// import git_logo from "/src/assets/svg/git_logo.svg";
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
// import javascript_logo from "/src/assets/svg/javascript_logo.svg";
import c_logo from "/src/assets/svg/c_logo.svg";
// import cpp_logo from "/src/assets/svg/cpp_logo.svg";
import python_logo from "/src/assets/svg/python_logo.svg";
import java_logo from "/src/assets/svg/java_logo.svg";
import dart_logo from "/src/assets/svg/dart_logo.svg";

import react_logo from "/src/assets/svg/react_logo.svg";
import bootstrap_logo from "/src/assets/svg/bootstrap_logo.svg";
// import unittest_logo from "/src/assets/svg/unittest_logo.png";
import pytest_logo from "/src/assets/svg/pytest_logo.svg";

function Skills() {
  return (
    <div className="Skills">
      <h1>Skills 🤹‍♂️</h1>

      <div className="Cards">
        <div className="Tools">
          <p>Tools ⚒️</p>
          <div className="Images">
            <img
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"
              }
              className="git_logo"
              alt="Git Logo"
            />
            <img src={linux_logo} className="linux_logo" alt="Linux Logo" />
            <img src={ubuntu_logo} className="ubuntu_logo" alt="Ubuntu Logo" />
            <img src={vim_logo} className="vim_logo" alt="Vim Logo" />
            <img src={tmux_logo} className="tmux_logo" alt="Tmux Logo" />
            <img src={figma_logo} className="figma_logo" alt="Figma Logo" />
            <img src={vscode_logo} className="vscode_logo" alt="VS Code Logo" />
            <img
              src={androidstudio_logo}
              className="Android Studio Logo"
              alt=""
            />
            <img
              src={flutter_logo}
              className="flutter_logo"
              alt="Flutter Logo"
            />
            <img src={latex_logo} className="latex_logo" alt="Latex Logo" />
            <img src={jira_logo} className="jira_logo" alt="Jira Logo" />
            <img
              src={confluence_logo}
              className="confluence_logo"
              alt="Confluence Logo"
            />
          </div>
        </div>
        <div className="Languages">
          <p>Languages 🔡</p>
          <div className="Images">
            <img src={html5_logo} className="html5_logo" alt="HTML5 Logo" />
            <img src={css_logo} className="css_logo" alt="CSS Logo" />
            <img src={sass_logo} className="sass_logo" alt="Sass Logo" />
            <img
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              }
              className="javascript_logo"
              alt="JavaScript Logo"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              className="typescript_logo"
              alt="TypeScript Logo"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-plain-wordmark.svg"
              className="lua_logo"
              alt="Lua Logo"
            />

            <img src={python_logo} className="python_logo" alt="Python Logo" />
            <img src={java_logo} className="java_logo" alt="Java Logo" />
            <img src={bash_logo} className="bash_logo" alt="Bash Logo" />
            <img src={c_logo} className="c_logo" alt="C Logo" />
            <img
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
              }
              className="cpp_logo"
              alt="C Plus Plus Logo"
            />
            <img src={dart_logo} className="dart_logo" alt="Dart Logo" />
          </div>
        </div>
        <div className="Frameworks">
          <p>Libraries/Frameworks 📚</p>
          <div className="Images">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              className="nextjs_logo"
              alt="Next.js Logo"
            />

            <img src={react_logo} className="react_logo" alt="React Logo" />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              className="tailwindcss_logo"
              alt="Tailwindcss Logo"
            />

            <img
              src={bootstrap_logo}
              className="bootstrap_logo"
              alt="Bootstrap Logo"
            />
            <img src={pytest_logo} className="pytest_logo" alt="Pytest Logo" />
            {/* <img
              src={unittest_logo}
              className="unittest_logo"
              alt="Unittest Logo"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
