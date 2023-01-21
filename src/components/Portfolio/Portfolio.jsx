import React from "react";
import "./PortfolioStyles.scss";
import Card from "./Card";

let cardObj = [
  {
    imageUrl:
      "url(https://camo.githubusercontent.com/d2060eac93faeba1212d77365c03ab11b09d883f597ec47894aefa6248f11131/68747470733a2f2f692e6962622e636f2f767652685a52302f43616c63756c61746f722d322d70726f6a6563742d696d6167652e6a7067)",
    title: "Javascript Calculator",
    body: "A simple, aesthetic-looking calculator written in plain HTML, CSS, and JavaScript.📱",
    demoUrl: "https://javascript-calculator-mfarabi.vercel.app/",
    repoUrl: "https://github.com/MFarabi619/javascript-calculator",
  },
  {
    imageUrl:
      "url(https://camo.githubusercontent.com/6912c08778d06e9ef4c16ddd0ae9549ca8b58be6fedd07c9f03f7cecd5933334/68747470733a2f2f692e6962622e636f2f354b3039786a342f53637265656e73686f742d323032332d30312d31322d3233343734392e6a7067)",
    title: "Key Sounds",
    body: "A simple web app that generates audio corresponding to keystrokes on a user's keyboard.⌨️",
    demoUrl: "https://key-sounds.vercel.app/",
    repoUrl: "https://github.com/MFarabi619/key-sounds",
  },
  {
    imageUrl: "url()",
    title: "",
    body: "",
    demoUrl: "",
    repoUrl: "",
  },
  {
    imageUrl: "url()",
    title: "",
    body: "",
    demoUrl: "",
    repoUrl: "",
  },
];

function Portfolio(props) {
  return (
    <div className="Portfolio">
      <h1 className="Title">Portfolio💼</h1>
      <div className="Cards">
        {cardObj.map((contents) => (
          <Card
            imageUrl={contents.imageUrl}
            title={contents.title}
            body={contents.body}
            demoUrl={contents.demoUrl}
            repoUrl={contents.repoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
