import React from "react";
import abc from "../assests/image1.jpg";
import iph from "../assests/image2.png";
import dressify from "../assests/image5.png";
import abc2 from "../assests/image4.png";
import olx from "../assests/image6.png";
import olxx from "../assests/image7.png";


import { FaCss3Alt, FaJsSquare, FaHtml5 } from "react-icons/fa";

let projects = [

  {
    title: "Learn Fast",
    img1: abc,
    img2: iph,
    description: "The name of website is Learn Fast , it is based on online e-learning website where we can see the courses based on languages.",
    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        name: "JS",
        icon: <FaJsSquare />,
      },
    ],
    git: "https://github.com/shatrukumar47/elated-horses-2052",
    preview: "https://precious-valkyrie-53ad96.netlify.app/",
  },
  {
    title: "CLOTHLY",
    img1: dressify,
    img2: abc2,
    description: "CLOTHLY welcomes you to a world of high fashion and unparalleled style. Our meticulously crafted web application is a masterpiece, meticulously designed with a harmonious blend of HTML, CSS, JavaScript, and React, inviting you to embark on a journey into the very heart of fashion.",
    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        name: "JS",
        icon: <FaJsSquare />,
      },
    ],
    git: "https://github.com/Kshitiz155/actual-shoes-7533",
    preview: "https://clothly.vercel.app/",
  },  
  {
    title: "Skyline Electronics",
    img1: olx,
    img2: olxx,
    description: "Skyline Electronics, a cutting-edge digital emporium, mirrors the innovation and excellence of Reliance Digital. Explore a curated selection of top-tier electronics and technological marvels, all under the Skyline banner, where quality meets sophistication, where users can browse and select products they want to buy from the platform.",

    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        name: "JS",
        icon: <FaJsSquare />,
      },
    ],
    git: "https://github.com/Kshitiz155/inconclusive-stop-6058",
    preview: "https://snazzy-biscochitos-51c1b8.netlify.app/",
  },
];

function Projects() {
  return (
    <div id="projects">
      <h1>Projects </h1>
      <div className="all_projects">
        {projects.map((el) => (
          <div className="project-card">
            <div className="pro-img">
              <img src={el.img1} alt="" />
            </div>
            <div className="pro-img1">
              <img src={el.img2} alt="" />
            </div>

            <div className="pro-Info">
              <h2 className="project-title">{el.title}</h2>
              <p className="project-description">{el.description}</p>
              <h2>Tech Stack</h2>
              <div className="project-tech-stack">
                {el.skills.map((skill) => (
                  <div className="skills-card">
                    {skill.icon}
                    <p style={{ fontSize: "20px" }}>{skill.name}</p>
                  </div>
                ))}
              </div>
              <div className="pro-anchortag">
                <a
                  className="project-github-link"
                  href={el.git}
                  target="_blank"
                >
                  <button>Github Code</button>
                </a>
                <a
                  className="project-deployed-link"
                  target="_blank"
                  href={el.preview}
                >
                  <button>Preview</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

// Each project card in the Projects section should have class="project-card" and the following:
// Image of the project
// Title : class="project-title"
// Description : class="project-description"
// Tech stack used : class="project-tech-stack"
// Link to GitHub repository : class="project-github-link"
// Deployed link or video link : class="project-deployed-link"
