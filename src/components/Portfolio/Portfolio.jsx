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
      "url(https://camo.githubusercontent.com/6912c08778d06e9ef4c16ddd0ae9549ca8b58be6fedd07c9f03f7cecd5933334/68747470733a2f2f692e6962622e636f2f354b3039786a342f53637265656e73686f742d323032332d30312d31322d3233343734392e6a7067)",
    title: "Key Sounds",
    body: "A simple web app that generates audio corresponding to keystrokes on a user's keyboard.⌨️",
    demoUrl: "https://key-sounds.vercel.app/",
    repoUrl: "https://github.com/MFarabi619/key-sounds",
  },
  {
    imageUrl:
      "url(https://camo.githubusercontent.com/4e9b377d20f75ecea28b34a99cec5e0d3d4b39dd6c713f46cef8b748ee816441/68747470733a2f2f692e6962622e636f2f7332624e7a48672f53637265656e73686f742d323032322d31322d30362d3031323832322e6a7067)",
    title: "Markdown Previewer",
    body: "A little web app that renders a live preview of Markdown.📃",
    demoUrl: "https://markdown-previewer-mfarabi.vercel.app/",
    repoUrl: "https://github.com/MFarabi619/markdown-previewer",
  },
  {
    imageUrl:
      "url(https://camo.githubusercontent.com/a5105c1ef747906ebe77a49560e2b3f1fe58b230751d4ff6460fc68d5900f793/68747470733a2f2f692e6962622e636f2f516b53706a35672f53637265656e73686f742d323032322d31322d30342d3130303931332e6a7067)",
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
      <h1 className="Title">Portfolio💼</h1>
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
