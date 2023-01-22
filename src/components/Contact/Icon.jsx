import React from "react";
import "./IconStyles.scss";

export default function Icon(props) {
  return (
    <div className="iconContainer">
      <a href={props.link} target="_blank" style={{ color: "{props.color}" }}>
        {props.faIcon}
      </a>
    </div>
  );
}
