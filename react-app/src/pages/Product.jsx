import React, { useState } from "react";
import { Route, BrowserRouter as Router, Link, useParams } from "react-router-dom";


const Product = () => {
  
  let { productName } = useParams();
  console.log(productName);
  return (
    <h1>{`Product: ${productName}`}</h1>
  );
}

export default Product;