import React from "react";
import "./CardStyles.scss";
import { FaGithub } from "react-icons/fa";

export default function Card(props) {
  return (
    <div
      className="Card">
      <div
        className="front"
        style={{
          backgroundImage: props.imageUrl 
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
            <a
              aria-label="Live Demo Button"
              href={props.demoUrl}
              className="neon-button"
              target="_blank"
            >
              Live Demo
            </a>

            <a
              aria-label="Github Icon Button"
              href={props.repoUrl}
              className="neon-button"
              id={"githubicon" + props.title}
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
