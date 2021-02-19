import React from "react";
import { Link} from "react-router-dom";
import data from "../text.json"
import logo from "../images/logo.png";
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
    <div className="home-container">
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
          <>
            <div className="home-section3-text-container">
              <h2 className="home-section3-title">{data.home.section3.title[lang]}</h2>
              <div className="home-section3-separator"/>
              <p className="home-section3-content">{data.home.section3.content[lang]}</p>
            </div>
            <img src={fifa} alt="Fifa-Certificate" className="home-section3-fifa"/>
            </>
        </Slide>
      </div>
      <div className="home-section4-container">
        <h1 className="home-section4-title">{data.home.section4.title[lang]}</h1>
        <div className="home-section4-galery">
          {
            data.home.section4.projects.map( (project) => {
              return (
                <Link to={`/TurfMasters/projects/${lang}`} className="home-section4-galery-link">
                  <div className="home-section4-galery-item">
                    <img src={project["img-url"]} className="home-section4-galery-item-img" alt="hola"/>
                    <div className="home-section4-galery-item-text-container">
                      <h2 className="home-section4-galery-item-title">{project.title[lang]}</h2>
                      <p className="home-section4-galery-item-content">{project.content[lang]}</p>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Home;