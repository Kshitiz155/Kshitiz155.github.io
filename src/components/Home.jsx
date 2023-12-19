import React from "react";

import myimg from "../assests/my img.jpg";
import { Link } from "react-router-dom";

function Home() {

  const resumedown2 = () => {
    window.open(
      "https://drive.google.com/file/d/1zI5cBsMVO6i7mJLkqzS01SI5oNAPbzWo/view?usp=sharing",
      "_blank"
      
    );
  };



  return (
    <div id="home">
  
      <div className="my-info">
        <h2>Hey there! </h2>
        <h1 id="user-detail-name">I am Kshitiz Kumar Singh</h1>
        <Link
            className="nav-link resume"
            to="https://drive.google.com/file/d/1zI5cBsMVO6i7mJLkqzS01SI5oNAPbzWo/view?usp=sharing"
            
          >
            <button
              id="resume-button-2"
              
              onClick={resumedown2}
            >
              Resume
            </button>
          </Link>
      </div>
      <div >
        <img className="home-img" src={myimg} alt="" />
      </div>

    </div>
  );
}

export default Home;
