import React, { useState } from "react";
import { Route, BrowserRouter as Router, Link, useParams} from "react-router-dom";
import data from "../text.json"

const Home = () => {
  let {lang} = useParams();
  function title() {
    if (lang == "en"){
      return("Home");
    }
    return("Inicio");
  }

  return (
    <div>
      <h1>{title()}</h1>
    </div>
  );
}

export default Home;