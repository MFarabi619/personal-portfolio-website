import React from "react";
import "./IconStyles.scss";

export default function Icon(props) {
  let icon = props.faIcon;

  return (
    <div className="iconContainer">
      <a aria-label={ props.faIcon} href={props.link} target="_blank" style={{ color: props.color }}>
        {props.faIcon}
      </a>
    </div>
  );
}
