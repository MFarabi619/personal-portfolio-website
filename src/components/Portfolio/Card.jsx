import React from "react";
import "./CardStyles.scss";
import { FaGithub } from "react-icons/fa";

// { imageUrl, title, body, demoUrl, repoUrl }

export default function Card(props) {
  // return (

  //   <div className="Card">
  //     <div
  //       className="front"
  //       style={{
  //         backgroundImage: `url(https://camo.githubusercontent.com/d2060eac93faeba1212d77365c03ab11b09d883f597ec47894aefa6248f11131/68747470733a2f2f692e6962622e636f2f767652685a52302f43616c63756c61746f722d322d70726f6a6563742d696d6167652e6a7067)`,
  //       }}
  //     >
  //       <div className="inner">
  //         <p>Javascript Calculator</p>
  //         <span>
  //           A simple, aesthetic-looking calculator written in plain HTML, CSS,
  //           and JavaScript.📱
  //         </span>
  //       </div>
  //     </div>
  //     <div className="back">
  //       <div className="inner">
  //         <div className="buttons">
  //           <a
  //             href="https://javascript-calculator-mfarabi.vercel.app/"
  //             className="neon-button"
  //             target="_blank"
  //           >
  //             Live Demo
  //           </a>

  //           <a
  //             href="https://github.com/MFarabi619/javascript-calculator"
  //             className="neon-button"
  //             id="githubicon"
  //             target="_blank"
  //           >
  //             <FaGithub />
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="Card" key={props.title}>
      <div
        className="front"
        style={{
          backgroundImage: props.imageUrl,
        }}
      >
        <div className="inner">
          <p>{props.title}</p>
          <span>{props.body} </span>
        </div>
      </div>
      <div className="back">
        <div className="inner">
          <div className="buttons">
            <a href={props.demoUrl} className="neon-button" target="_blank">
              Live Demo
            </a>

            <a
              href={props.repoUrl}
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
  );
}
