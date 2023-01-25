import React from "react";
import "./ContactStyles.scss";
import Icon from "./Icon";

import {
  FaEnvelope,
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";

let iconJSON = [
  {
    faIcon: FaEnvelope,
    link: "mailto:mumtahin.farabi@gmail.com",
    color: "#EA4335",
  },
  {
    faIcon: FaLinkedin,
    link: "https://www.linkedin.com/in/mfarabi/",
    color: "#0072b1",
  },
  {
    faIcon: FaGithubSquare,
    link: "https://github.com/mfarabi619",
    color: "black",
  },
  {
    faIcon: FaYoutube,
    link: "https://www.youtube.com/@mumtahinfarabi7502/videos",
    color: "#FF0000",
  },
  {
    faIcon: FaTwitterSquare,
    link: "https://www.youtube.com/watch?v=BBJa32lCaaY",
    color: "#1dcaff",
  },
];

function Contact(props) {
  return (
    <div className="Contact">
      <h1>Contact ☎️</h1>
      <section className="icons">
        {iconJSON.map((contents) => (
          <Icon
            key={contents.faIcon}
            faIcon={<contents.faIcon />}
            link={contents.link}
            color={contents.color}
          />
        ))}
      </section>
    </div>
  );
}

export default Contact;
