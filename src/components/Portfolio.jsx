import React from "react";
import "./PortfolioStyles.scss";

function Portfolio(props) {
  return (
    <div className="Portfolio">
      <h1 className="Title">Portfolio💼</h1>

      <div className="Cards">
        <div className="Card" onTouchStart="this.classList.toggle('hover');">
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
              <button className="Livedemo"></button>
              <button className="Icon"></button>
            </div>
          </div>
        </div>
      </div>

      {/*       
      <div className="Card">
        <h4>Key Sounds</h4>
        <img
          src="https://camo.githubusercontent.com/6912c08778d06e9ef4c16ddd0ae9549ca8b58be6fedd07c9f03f7cecd5933334/68747470733a2f2f692e6962622e636f2f354b3039786a342f53637265656e73686f742d323032332d30312d31322d3233343734392e6a7067"
          alt=""
        />
        <div className="description">
          A simple web app that generates audio corresponding to keystrokes on a
          user's keyboard.⌨️
        </div>
      </div>


      <div className="Card">
        <h4>Markdown Previwer</h4>
        <img
          className="Markdownpreviewer"
          src="https://camo.githubusercontent.com/4e9b377d20f75ecea28b34a99cec5e0d3d4b39dd6c713f46cef8b748ee816441/68747470733a2f2f692e6962622e636f2f7332624e7a48672f53637265656e73686f742d323032322d31322d30362d3031323832322e6a7067"
          alt=""
        />
        <div className="description">
          A little web app that renders a live preview of Markdown.
        </div>
      </div>
      <div className="Card">
        <h4>Random Quote Machine</h4>
        <img
          className="randomquotemachine"
          src="https://camo.githubusercontent.com/a5105c1ef747906ebe77a49560e2b3f1fe58b230751d4ff6460fc68d5900f793/68747470733a2f2f692e6962622e636f2f516b53706a35672f53637265656e73686f742d323032322d31322d30342d3130303931332e6a7067"
          alt=""
        />
        <div className="description">
          A static website that generates a random quote when a button is
          clicked.
        </div>
      </div> */}
    </div>
  );
}

export default Portfolio;
