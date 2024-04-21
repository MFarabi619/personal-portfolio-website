import React from "react";
import "./CardStyles.scss";

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
            <a aria-label="Resume Link" href={'https://drive.google.com/file/d/18Z13PK5WHCYwHL6wpPcLYYv29jpmU1sl/view?usp=sharing'} className="neon-button" target="_blank">
              2-Column 
            </a>
            <a aria-label="Resume Link" href={'https://drive.google.com/file/d/10YRv-3kda0-yTA0lY6zlqfe4KG-z7klz/view?usp=sharing'} className="neon-button" target="_blank">
              1-Column
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
