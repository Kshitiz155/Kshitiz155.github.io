import React from "react";
import { FaCss3Alt, FaJsSquare, FaHtml5 } from "react-icons/fa";
import styled from 'styled-components';

const skills = [
  {
    name: "HTML",
    icon : <FaHtml5 />
  },
  {
    name: "CSS",
    icon : <FaCss3Alt />
  },
  {
    name: "JS",
    icon : <FaJsSquare />
  },
  {
    name: "REACT",
    icon : <FaHtml5 />
  },
  {
    name: "REDUX",
    icon : <FaHtml5 />
  },
  {
    name: "CHAKRA UI",
    icon : <FaHtml5 />
  },
];


function Skills() {
  return (
    <div id="skills">
      <h1>Skills and Tools</h1>
      <div className="skills_deta" >
   
      {skills.map((item) => (
        <StyledDiv className="skills-card" >
          {/* className="skills-card-img" */}
          <div className="skills-card-img">{item.icon}</div>
          <p className="skills-card-name">{item.name}</p>
        </StyledDiv>
      ))}
    </div>
    </div>
  );
}

const StyledDiv = styled.div`
  width: 300px;
  height: 300px;
  background-color: lightgreen;
  color: white;
  text-align: center;
  line-height: 300px;
`;

export default Skills;

