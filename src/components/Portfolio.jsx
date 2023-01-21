import React from "react";
import "./PortfolioStyles.scss";
import { FaGithub } from "react-icons/fa";

function Portfolio(props) {
  return (
    <div className="Portfolio">
      <h1 className="Title">Portfolio💼</h1>
      <div className="Cards">
        <div className="Card">
          <div
            className="front"
            style={{
              backgroundImage: `url(https://camo.githubusercontent.com/d2060eac93faeba1212d77365c03ab11b09d883f597ec47894aefa6248f11131/68747470733a2f2f692e6962622e636f2f767652685a52302f43616c63756c61746f722d322d70726f6a6563742d696d6167652e6a7067)`,
            }}
          >
            <div className="inner">
              <p>Javascript Calculator</p>
              <span>
                A simple, aesthetic-looking calculator written in plain HTML,
                CSS, and JavaScript.📱
              </span>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <div className="buttons">
                <a
                  href="https://javascript-calculator-mfarabi.vercel.app/"
                  className="neon-button"
                  target="_blank"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/MFarabi619/javascript-calculator"
                  className="neon-button"
                  id="githubicon"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
