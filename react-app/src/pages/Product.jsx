import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import data from "../text.json";
import products from "../images/backgrounds/products.jpg"
import { IoChevronBack } from "@react-icons/all-files/io5/IoChevronBack";
import { Slide } from "react-awesome-reveal";

const Product = () => {
  let { productName } = useParams();
  const esName = urlToName(productName);
  const product = queryProduct(esName);
  const [galeryBooleans, setGaleryBooleans] = useState("No data");
  const [galeryImgClases, setGaleryImgClases] = useState("No data")
  let lang = window.location.href
  lang = lang.substr(lang.length-2,2)
  if (lang != "es" && lang != "en") {
    lang = "es";
  }
  if (galeryBooleans == "No data") {
    let temp = [true];
    for (let i = 1; i < product.imgs.length; i++) {
      temp.push(false);
    }
    let tempClasses = ["product-galery-item-container product-galery-item-container-selected"];
    for(let i = 1; i < temp.length; i++) {
      tempClasses.push("product-galery-item-container")
    }
    setGaleryImgClases(tempClasses);
    setGaleryBooleans(temp);
    console.log("done");
  }
  function queryProduct(esName){
    for (let section = 0; section < data.products.sections.length; section++) {
      for(let product = 0; product < data.products.sections[section].products.length; product++){
        if (data.products.sections[section].products[product].title.es == esName) {
          return data.products.sections[section].products[product];
        }
      }
    }
  }
  function urlToName(titleInSpanish) {
    let temp;
    while(true){
      temp = titleInSpanish;
      titleInSpanish = titleInSpanish.replace("-", " ");
      if(temp == titleInSpanish) {
        return titleInSpanish;
      }
    }
  }
  function label(label) {
    if (label != "") {
      return(
        <div className="product-label-container">
          <h6 className="product-label">{product.label[lang]}</h6>
        </div>
      )
    }
  }
  
  return (
    <div className="product-container">
      <img className="products-background" src={products}/>
      <div className="product-content-container" >
        <Link className="product-back-link" to={`/TurfMasters/products/${lang}`}>
          <div className="product-back-container">
            <IoChevronBack className="product-back-icon"/>
            <h6 className="product-back-text">{data.products["back-btn"][lang]}</h6>
          </div>
        </Link>
        <div className="product-right-section-container">
          <h1 className="product-title">{product.title[lang]}</h1>
          {
            label(product.label[lang])
          }
          <div className="product-img-section">
            <img className="product-img" src={product.imgs[galeryBooleans.indexOf(true)]} />
            <div className="product-galery-container">
              {
                product.imgs.map((img) => (
                  <div className={galeryImgClases[product.imgs.indexOf(img)]} onClick={() => {
                    let temp = []
                    let tempClasses = []
                    for(let i = 0; i < product.imgs.length; i++) {
                      temp.push(false);
                      tempClasses.push("product-galery-item-container")
                      if(product.imgs.indexOf(img) == i) {
                        temp[i] = true;
                        tempClasses[i] += " product-galery-item-container-selected";
                      }
                    }
                    setGaleryImgClases(tempClasses);
                    setGaleryBooleans(temp);
                  }}> 
                    <img src={img} className="product-galery-item-img"/>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="product-separator"/>
          <h2 className="product-description-title">{data.products.description[lang]}</h2>
          <p className="product-description">{product.description[lang]}</p>
          <h2 className="product-description-title">{data.products.specifications[lang]}</h2>
          <ul className="product-specs">
            {
              product.specs[lang].map((spec) => (
                <li>{spec}</li>
                ))
              }
          </ul>
          <Link className="product-contact-btn-link" to={`/TurfMasters/contact/${lang}`}>
            <div className="product-contact-btn-container">
              <h4 className="product-contact-btn-text">{data.products["contact-btn"][lang]}</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;