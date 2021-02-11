import React, { useState } from "react";
import { Route, BrowserRouter as Router, Link, useParams} from "react-router-dom";

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
      <Link to="/product/mochila" >
        Product
      </Link>
    </div>
  );
}

export default Home;