import React from "react";
import "./ContactStyles.scss";
import Icon from "./Icon";

import {
  FaEnvelope,
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";

let iconJSON = [
  {
    faIcon: FaEnvelope,
  },
  {
    faIcon: FaLinkedin,
  },
  {
    faIcon: FaGithubSquare,
  },
  {
    faIcon: FaTwitterSquare,
  },
];

function Contact(props) {
  return (
    <div className="Contact">
      <h1>Contact☎️</h1>
      <section className="icons">
        {iconJSON.map((contents) => (
          <Icon
            key={contents.faIcon}
            faIcon={<contents.faIcon />}
            text={contents.text}
          />
        ))}
      </section>
    </div>
  );
}

export default Contact;
