import React from "react";
import "./ContactStyles.scss";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Contact(props) {
  return (
    <div className="Contact">
      <h1>Contact☎️</h1>
      <section className="icons">
        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/mfarabi/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/MFarabi619">
          <FaGithubSquare />
        </a>
        <a href="https://www.youtube.com/watch?v=BBJa32lCaaY">
          <FaTwitterSquare />
        </a>
      </section>
    </div>
  );
}

export default Contact;
