import React from "react";

import ReactLogo from "../assets/react.svg";
import JavaScript from "../assets/javascript.svg";
import TypeScript from "../assets/typeScript.svg";
import NextJs from "../assets/nextjs.svg";
import Jest from "../assets/jest.svg";
import Css from "../assets/css3.svg";
import Html from "../assets/html5.svg";

import { Body } from "../styles/components/about-me";

const AboutMe = () => {
  return (
    <Body id="myself">
      <div className="paragraph">
        <h1>Who's this Guy ?</h1>
        <p>
          I'm Marcos Aurélio, better known as MAARK. I like create smart
          interfaces with web technologies. I love make UI effects, animations
          and creating intuitive, dynamic user experiences.
        </p>
      </div>
      <div className="paragraph top">
        <h1>Skills</h1>
        <div className="logo-content">
          <div className="image-container">
            <img draggable="false" src={ReactLogo} height={65} />
            <span>React-JS</span>
          </div>
          <div className="image-container">
            <img draggable="false" src={JavaScript} height={65} />
            <span>JavaScript</span>
          </div>
          <div className="image-container">
            <img draggable="false" src={TypeScript} height={65} />
            <span>TypeScript</span>
          </div>
          <div className="image-container">
            <img draggable="false" src={NextJs} height={65} />
            <span>Next-JS</span>
          </div>
          <div className="image-container">
            <img draggable="false" src={Jest} height={65} />
            <span>Jest-JS</span>
          </div>
          <div className="image-container">
            <img draggable="false" src={Html} height={65} />
            <span>HTML5</span>
          </div>
          <div className="image-container">
            <img draggable="false" src={Css} height={65} />
            <span>CSS3</span>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default AboutMe;
