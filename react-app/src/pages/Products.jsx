import React from "react";
import { Link } from "react-router-dom";
import data from "../text.json"
import products from "../images/backgrounds/products.jpg"
import { Slide } from "react-awesome-reveal";

const Products = () => {
  window.scrollTo(0, 0)
  let lang = window.location.href
  lang = lang.substr(lang.length-2,2)
  if (lang != "es" && lang != "en") {
    lang = "es";
  }

  function productCompo(title, label, description, img, name) {
    if (label[lang] != "") {
      return(
        <div className="products-product-container">
          <div className="products-product-header-container">
            <h4 className="products-product-title">{title[lang]}</h4>
            <div className="products-product-label-container">
              <h5 className="products-product-label">{label[lang]}</h5>
            </div>
          </div>
          <img className="products-product-img" src={img}/>
          <div className="products-product-separator"/>
          <div className="products-product-description-container">
            <p className="products-product-description">{description[lang]}</p>
          </div>
          <Link to={`/TurfMasters/product/${convertToUrl(name)}/${lang}`} className="products-product-btn-link">
            <div className="products-product-btn-container">
                {data.products["details-btn"][lang]}
            </div>
          </Link>
        </div>
      )
    }
    return(
      <div className="products-product-container">
        <h4 className="products-product-title">{title[lang]}</h4>
        <img className="products-product-img" src={img}/>
        <div className="products-product-separator"/>
        <div className="products-product-description-container">
        <p className="products-product-description">{description[lang]}</p>
        </div>
        <Link to={`/TurfMasters/product/${convertToUrl(name)}/${lang}`} className="products-product-btn-link">
            <div className="products-product-btn-container">
                {data.products["details-btn"][lang]}
            </div>
          </Link>
      </div>
    )
  }

  function convertToUrl(productTitle) {
    let temp;
    while (true) {
      temp = productTitle;
      productTitle = productTitle.replace(" ","-");
      if (productTitle == temp) {
        break;
      }
    }
    return productTitle;
  }

  return (
    <div className="products-container">
      <img className="products-background" src={products}/>
      <h1 className="products-title">{data.products.title[lang]}</h1>
      {
        data.products.sections.map((section) => (
          <Slide className="products-section-container">
            <>
            <h2 className="products-section-title">{section.title[lang]}</h2>
            <div className="products-section-separator"/>
            <div className="products-section-products-container">
            {
              section.products.map((product) => (
                productCompo(product.title, product.label, product.description, product.imgs[0], product.title.es)
              ))
            }
            </div>
            </>
          </Slide>
        ))
      }
    </div>
  );
}

export default Products;