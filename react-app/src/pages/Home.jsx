import React from "react";
import { Link} from "react-router-dom";
import data from "../text.json"
import logo from "../images/logo.png";
import { Bounce } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import minififa from "../images/minififa.png";
import fifa from "../images/fifa.jpg";
import home from "../images/backgrounds/home.png"
import home_about from "../images/backgrounds/home_about.jpg"

const Home = () => {
  let lang = window.location.href
  lang = lang.substr(lang.length-2,2)
  if (lang != "es" && lang != "en") {
    lang = "es";
  }
  
  return (
    <div>
      <div className="home-section1-container">
        <img src={home} alt="TurfMasters" className="home-background"/>
        <Slide  className="home-logo-container">
          <img src={logo} alt="TurfMasters" className="home-logo"/>
        </Slide>
        <img src={minififa} alt="Fifa-certified" className="mini-fifa"/>
      </div>
        <Slide direction="left" delay="15">
          <div className="home-section2-container">
            <img src={logo} alt="TurfMasters" className="home-section2-logo"/>
              <div className="home-section2-content-container">
                <h2 className="home-section2-title">{data.home.section2.title[lang]}</h2>
                <p className="home-section2-content">{data.home.section2.content[lang]}</p>
              </div>
          </div>
        </Slide>
          <div className="home-section3-container">
            <img src={home_about} alt="wallpaper" className="home-section3-background" />
            <Slide direction="left" className="home-section3-content-container">
              {/* <div className="home-section3-content-container"> */}
              <>
                <div className="home-section3-text-container">
                  <h2 className="home-section2-title">{data.home.section3.title[lang]}</h2>
                  <p className="home-section2-content">{data.home.section3.content[lang]}</p>
                </div>
                <img src={fifa} alt="Fifa-Certificate" className="home-section3-fifa"/>
                </>
              {/* </div> */}
            </Slide>
          </div>
    </div>
  );
}

export default Home;