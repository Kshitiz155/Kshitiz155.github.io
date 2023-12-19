import React from "react";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa6";
function Contact() {

  return (
    <div id="contact">
      <div className="contact_details">
        <h2>Contact-Me</h2>
        <p id="contact-phone">+91 9663232592</p>
        <p id="contact-email">kshitiz155@gmail.com</p>

        <div className="my_icon">
          <a id="contact-github" href="https://github.com/Kshitiz155">
            <FaGithub/>
          </a>
          <br />
          <a
            id="contact-linkedin"
            href="https://www.linkedin.com/in/kshitiz-kumar-singh-7b33b6117/"
          >
           <FaLinkedin/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
