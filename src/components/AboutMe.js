import { useState } from "react";
import "./AboutMe.css";
import Highlights from "./Highlights";
import Education from "./Education";
import Work from "./Work";
import Skill from "./Skill";

const AboutMe = () => {
  const [aboutMe, setAboutMe] = useState(true);
  const [education, setEducation] = useState(false);
  const [work, setWork] = useState(false);
  const [skill, setSkill] = useState(false);
  const aboutMeHandler = () => {
    setAboutMe(true);
    setEducation(false);
    setWork(false);
    setSkill(false);
  };

  const educationalHandler = () => {
    setEducation(true);
    setAboutMe(false);
    setWork(false);
    setSkill(false);
  };

  const workHandler = () => {
    setWork(true);
    setEducation(false);
    setAboutMe(false);
    setSkill(false);
  };

  const skillHandler = () => {
    setSkill(true);
    setWork(false);
    setEducation(false);
    setAboutMe(false);
  };

  return (
    <div className="aboutme-container">
      <h1>About Me</h1>
      <table className="about-me">
        <tr className="about-nav">
          <th>
            <button
              style={aboutMe ? { borderBottom: "3px solid #fff" } : {}}
              onClick={aboutMeHandler}
            >
              About Me
            </button>
          </th>
          <th>
            <button
              style={education ? { borderBottom: "3px solid #fff" } : {}}
              onClick={educationalHandler}
            >
              Educational Qualification
            </button>
          </th>
          <th>
            <button
              style={work ? { borderBottom: "3px solid #fff" } : {}}
              onClick={workHandler}
            >
              Work History
            </button>
          </th>
          <th>
            <button
              style={skill ? { borderBottom: "3px solid #fff" } : {}}
              onClick={skillHandler}
            >
              Skill Sets
            </button>
          </th>
        </tr>
        <tr>
          <td colSpan="4">
            <div className="about-content">
              {aboutMe && <Highlights />}
              {education && <Education />}
              {work && <Work />}
              {skill && <Skill />}
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default AboutMe;
