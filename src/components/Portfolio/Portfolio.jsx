import React from "react";
import "./PortfolioStyles.scss";
import Card from "./Card";

let cardObj = [
  {
    imageUrl: "url(https://i.ibb.co/M9g3yww/Picture1.png)",
    title: "Javascript Calculator",
    body: "A simple, aesthetic-looking calculator written in plain HTML, CSS, and JavaScript.📱",
    demoUrl: "https://javascript-calculator-mfarabi.vercel.app/",
    repoUrl: "https://github.com/MFarabi619/javascript-calculator",
  },
  {
    imageUrl:
      "url(https://github.com/MFarabi619/key-sounds/raw/main/Screenshot%202023-02-01%20052102.jpg?raw=true)",
    title: "Key Sounds",
    body: "A simple web app that generates audio corresponding to keystrokes on a user's keyboard.⌨️",
    demoUrl: "https://key-sounds.vercel.app/",
    repoUrl: "https://github.com/MFarabi619/key-sounds",
  },
  {
    imageUrl:
      "url(https://github.com/MFarabi619/markdown-previewer/raw/main/src/assets/Screenshot%202023-02-01%20052937.jpg?raw=true)",
    title: "Markdown Previewer",
    body: "A little web app that renders a live preview of Markdown.📃",
    demoUrl: "https://markdown-previewer-mfarabi.vercel.app/",
    repoUrl: "https://github.com/MFarabi619/markdown-previewer",
  },
  {
    imageUrl:
      "url(https://github.com/MFarabi619/random-quote-machine/raw/main/src/Screenshot%202023-02-01%20064359.jpg?raw=true)",
    title: "Random Quote Machine",
    body: "A static website for displaying random quotes.",
    demoUrl: "https://mfarabi619.github.io/random-quote-machine/",
    repoUrl: "https://github.com/MFarabi619/random-quote-machine",
  },
  // {
  //   imageUrl: "url()",
  //   title: "",
  //   body: "",
  //   demoUrl: "",
  //   repoUrl: "",
  // },
];

function Portfolio(props) {
  return (
    <div className="Portfolio">
      <h1 className="Title">Portfolio 💼</h1>
      <div className="Cards">
        {cardObj.map((contents) => (
          <Card
            key={props.title}
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
