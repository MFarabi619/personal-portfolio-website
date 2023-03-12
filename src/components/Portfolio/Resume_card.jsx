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
            <a aria-label="Resume Link" href={'https://drive.google.com/file/d/1VOayYkYtLicCsfUGZcg5z9GoVQwZRPrn/view?usp=share_link'} className="neon-button" target="_blank">
              View Resume 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
