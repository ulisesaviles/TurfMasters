import React from "react";
import data from "../text.json"

const Footer = () => {
  let lang = window.location.href
  lang = lang.substr(lang.length-2,2)
  return (
    <div className="footer">
      <h3 className="footer-text">{data.footer.copyright[lang]}</h3>
      {/* <h3 className="footer-text">{data.footer.author}</h3> */}
    </div>
  );
}

export default Footer;