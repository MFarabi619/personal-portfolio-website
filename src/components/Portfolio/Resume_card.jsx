import React from "react";
import "./CardStyles.scss";
import { FaGithub } from "react-icons/fa";

export default function Card(props) {
  return (
    <div className="Card">
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
              View Resume 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
