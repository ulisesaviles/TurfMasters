import React, { useState } from "react";
import data from "../text.json";
import { Slide } from "react-awesome-reveal";
import about from "../images/backgrounds/about.jpg";
import logo from "../images/logo.png";

const About = (props) => {
  let lang = window.location.href
  lang = lang.substr(lang.length-2,2)
  if (lang != "es" && lang != "en") {
    lang = "es";
  }

    return (
      <div className="about-container">
        <img src={about} alt="background" className="products-background"/>
        <Slide>
          <div className="about-content-container">
            <img src={logo} alt="background" className="about-logo"/>
            <div className="about-content-sections-onctainer">
              <div className="about-left-section-container">
                <h2 className="about-subtitle">{data.about.section1.title[lang]}</h2>
                <div className="about-separator" />
                <p className="about-paragraph">{data.about.section1.content[lang]}</p>
                <h2 className="about-subtitle">{data.about.mission.title[lang]}</h2>
                <div className="about-separator" />
                <p className="about-paragraph">{data.about.mission.content[lang]}</p>
              </div>
              <div className="about-right-section-container">
                {
                  data.about.bullets.map((bullet) => (
                    <div className="about-bullet-container">
                      <h4 className="about-bullet-text">{bullet[lang]}</h4>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </Slide>
      </div>
  );
}

export default About;