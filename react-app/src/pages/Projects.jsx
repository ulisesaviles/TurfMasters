import React from "react";
import data from "../text.json";
import projects from "../images/backgrounds/projects.jpg";
import { Slide } from "react-awesome-reveal";

const Projects = () => {
  let lang = window.location.href
  lang = lang.substr(lang.length-2,2)
  if (lang != "es" && lang != "en") {
    lang = "es";
  }

  return (
    <div className="projects-container">
      <img src={projects} alt="background" className="products-background"/>
      <h1 className="projects-title">{data.projects.title[lang]}</h1>
      {
        data.projects.sections.map((section) => (
          <Slide className="projects-section-container">
            <>
              <h2 className="projects-section-title">{section.title[lang]}</h2>
              <div className="projects-section-separator"/>
              {
                section.projects.map((project) => (
                  <div className="projects-project-container">
                    <div className="projects-project-right-section-container">
                      <div className="projects-project-header-container">
                        <h3 className="projects-project-title">{project.title[lang]}</h3>
                        <h6 className="projects-project-label">{project.label[lang]}</h6>
                      </div>
                      <div className="projects-project-separator"/>
                      <div className="projects-project-img-container">
                        <img className="projects-project-img" alt={project.title[lang]} src={project["img-url"]}/>
                      </div>
                      <p className="projects-project-content">{project.content[lang]}</p>
                    </div>
                  </div>
                ))
              }
            </>
          </Slide>   
        ))
      }
    </div>
  );
}

export default Projects;