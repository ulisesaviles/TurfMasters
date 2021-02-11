import React, { useState } from "react";
import "./App.css";
// import { Bounce } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Installation from "./pages/Installation";
import Projects from "./pages/Projects";
import Product from "./pages/Product";
import logo from "./images/logo.png";
import { MdMenu } from "@react-icons/all-files/md/MdMenu";
import data from "./text.json";

const App = () => {
  const [lang, setLang] = useState("es");
  const [esClasses, setEsClasses] = useState("lang selected-lang");
  const [enClasses, setEnClasses] = useState("lang non-selected-lang");
  const [pumClasses, setPumClasses] = useState("pop-up-menu");

  function handleToggle() {
    if (lang == "es") {
      setLang("en");
      setEnClasses("lang selected-lang");
      setEsClasses("lang non-selected-lang");
    } else {
      setLang("es");
      setEnClasses("lang non-selected-lang");
      setEsClasses("lang selected-lang");
    }
  }

  function handleLang() {
    let res = "";
    let url = window.location.href;
    for (let i = 1, counter = 0; i < url.length; i++) {
      if (url.charAt(i) == "/") {
        counter++;
      }
      if (counter == 3) {
        res = url.substr(i, url.length - i);
        break;
      }
    }
    for (let i = 1; true; i++) {
      if (res.charAt(res.length - i) == "/") {
        return res.substr(0, res.length - i + 1) + (lang == "en" ? "es" : "en");
      }
    }
  }

  function handlePupUp() {
    if (pumClasses == "pop-up-menu") {
      setPumClasses("pop-up-menu pum-appear");
    } else {
      setPumClasses("pop-up-menu");
    }
  }

  return (
    <Router>
      <div className={pumClasses}>
        <ul className="pum-nav-items">
          <li className="pum-nav-item">
            <Link
              className="nav-item-link"
              to={`/TurfMasters/${lang}`}
              onClick={() => {
                setPumClasses("pop-up-menu");
              }}
            >
              {data["nav-bar"].home[lang]}
            </Link>
          </li>
          <li className="pum-nav-item">
            <Link
              className="nav-item-link"
              to={`/TurfMasters/products/${lang}`}
              onClick={() => {
                setPumClasses("pop-up-menu");
              }}
            >
              {data["nav-bar"].products[lang]}
            </Link>
          </li>
          <li className="pum-nav-item">
            <Link
              className="nav-item-link"
              to={`/TurfMasters/installation/${lang}`}
              onClick={() => {
                setPumClasses("pop-up-menu");
              }}
            >
              {data["nav-bar"].installation[lang]}
            </Link>
          </li>
          <li className="pum-nav-item">
            <Link
              className="nav-item-link"
              to={`/TurfMasters/projects/${lang}`}
              onClick={() => {
                setPumClasses("pop-up-menu");
              }}
            >
              {data["nav-bar"].projects[lang]}
            </Link>
          </li>
          <li className="pum-nav-item">
            <Link
              className="nav-item-link"
              to={`/TurfMasters/about/${lang}`}
              onClick={() => {
                setPumClasses("pop-up-menu");
              }}
            >
              {data["nav-bar"].about[lang]}
            </Link>
          </li>
          <li className="pum-nav-item">
            <Link
              className="nav-item-link"
              to={`/TurfMasters/contact/${lang}`}
              onClick={() => {
                setPumClasses("pop-up-menu");
              }}
            >
              <div className="contact">{data["nav-bar"].contact[lang]}</div>
            </Link>
          </li>
        </ul>
      </div>
      {/* <Slide className="nav" direction="down"> */}
      <nav className="nav">
        <div
          onClick={() => {
            handlePupUp();
          }}
        >
          <MdMenu className="burguer-menu" />
        </div>
        <Link
          className="nav-item-link"
          to={`/TurfMasters/${lang}`}
          onClick={() => {
            setPumClasses("pop-up-menu");
          }}
        >
          <img src={logo} alt="TurfMasters" className="nav-logo" />
        </Link>
        <ul className="nav-items">
          <li className="nav-item">
            <Link className="nav-item-link" to={`/TurfMasters/${lang}`}>
              {data["nav-bar"].home[lang]}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-item-link"
              to={`/TurfMasters/products/${lang}`}
            >
              {data["nav-bar"].products[lang]}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-item-link"
              to={`/TurfMasters/installation/${lang}`}
            >
              {data["nav-bar"].installation[lang]}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-item-link"
              to={`/TurfMasters/projects/${lang}`}
            >
              {data["nav-bar"].projects[lang]}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item-link" to={`/TurfMasters/about/${lang}`}>
              {data["nav-bar"].about[lang]}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item-link" to={`/TurfMasters/contact/${lang}`}>
              <div className="contact">{data["nav-bar"].contact[lang]}</div>
            </Link>
          </li>
        </ul>
      </nav>
      {/* </Slide> */}

      <div
        className="toggle"
        onClick={() => {
          handleToggle();
        }}
      >
        <Link to={handleLang}>
          <h1 className={esClasses}>ES</h1>
          <h1 className={enClasses}>EN</h1>
        </Link>
      </div>

      {/* Convertirlo en un switch para que jale */}
      <Route path="/TurfMasters/:lang" exact component={Home} />
      <Route path="/TurfMasters/products/:lang" component={Products} />
      <Route
        path="/TurfMasters/product/:productName/:lang"
        component={Product}
      />
      <Route path="/TurfMasters/about/:lang" component={About} />
      <Route path="/TurfMasters/contact/:lang" component={Contact} />
      <Route path="/TurfMasters/installation/:lang" component={Installation} />
      <Route path="/TurfMasters/projects/:lang" component={Projects} />
    </Router>
  );
};

export default App;
