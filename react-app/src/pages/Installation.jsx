import React from "react";
import data from "../text.json";
import { Slide } from "react-awesome-reveal";
import contact from "../images/backgrounds/contact.jpg";
import contact_logo from "../images/backgrounds/instalacion logo.jpg";

const Installation = () => {
  window.scrollTo(0, 0)
  let lang = window.location.href
  lang = lang.substr(lang.length-2,2)
  if (lang != "es" && lang != "en") {
    lang = "es";
  }
  return (
    <div className="product-container">
      <img src={contact} className="products-background" alt="background" />
     <Slide>
        <div className="installation-content-container">
          <div className="product-right-section-container">
            <h1 className="installation-title">{data.installation.title[lang]}</h1>
            <div className="installation-separator"/>
            <p className="installation-content">{data.installation.content[lang]}</p>
          </div>
          <div className="installation-img-container">
            <img src={contact_logo} className="installation-img" alt="installation-demo"/>
          </div>
        </div>
      </Slide> 
    </div>
  );
}

export default Installation;