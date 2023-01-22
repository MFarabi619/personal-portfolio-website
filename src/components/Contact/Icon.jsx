import React from "react";
import "./IconStyles.scss";

export default function Icon(props) {
  return (
    <div className="iconContainer">
      <p>{props.faIcon}</p>
    </div>
  );
}
