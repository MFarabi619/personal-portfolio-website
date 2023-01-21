import React from "react";
import "./PortfolioStyles.scss";
import Card from "./Card";

let cardObj = [
  {
    imageUrl:
      "url{https://camo.githubusercontent.com/d2060eac93faeba1212d77365c03ab11b09d883f597ec47894aefa6248f11131/68747470733a2f2f692e6962622e636f2f767652685a52302f43616c63756c61746f722d322d70726f6a6563742d696d6167652e6a7067}",
    title: "Javascript Calculator",
    body: "A simple, aesthetic-looking calculator written in plain HTML, CSS, and JavaScript.📱",
    demoUrl: "https://javascript-calculator-mfarabi.vercel.app/",
    repoUrl: "https://github.com/MFarabi619/javascript-calculator",
  },
];

function Portfolio(props) {
  return (
    <div className="Portfolio">
      <h1 className="Title">Portfolio💼</h1>

      <div className="Cards">
        <Card />
      </div>
    </div>
  );
}

export default Portfolio;
