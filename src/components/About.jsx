import React from "react";

import img2 from "../assests/Saly-10.png";

function About() {
  return (
    <div id="about" className="about section">

     <h1>About Me</h1>
     <div className="about_card">
      <img className="about_img" src={img2} alt="" />
      <p id="user-detail-intro" className="my-details">
      I am a professional with expertise in both front-end (HTML, CSS, JavaScript) and back-end (server-side languages, databases) web development. Looking forward to applying technical skills like CSS,MERN and JAVASCRIPT to all the organisations that I offer my services to and help the organisation grow and develop alongside me.
      </p>
     </div>
    </div>
  );
}

export default About;


