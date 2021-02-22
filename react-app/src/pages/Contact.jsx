import React, { useState } from "react";
import data from "../text.json";
import { Slide } from "react-awesome-reveal";
import logo from "../images/logo.png";
import contact from "../images/backgrounds/contact.jpg";
import { MdPhone } from "@react-icons/all-files/md/MdPhone";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import mex from "../images/mex.png";
import emailjs from 'emailjs-com';

const Contact = () => {
  window.scrollTo(0, 0)
  const [submited, setSubmited] = useState(false);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({
    name : true,
    mail : true,
    subject : true,
    content : true
  })
  const [res, setRes] = useState("No response");
  const [alertClasses, setAlertClasses] = useState("contact-alert-background hide")
  let lang = window.location.href
  lang = lang.substr(lang.length-2,2)
  if (lang != "es" && lang != "en") {
    lang = "es";
  }

  function err(inputName) {
    let valid = false;
    if (inputName == "Name" && errors.name == false) {
      valid = true;
    } else if (inputName == "Mail" && errors.mail == false) {
      valid = true;
    } else if (inputName == "Subject" && errors.subject == false) {
      valid = true;
    } else if (inputName == "Content" && errors.content == false) {
      valid = true;
    }

    if (!valid && submited) {
      return(
        <p className="contact-err">{data.contact["send-mail"]["input-err"][lang]}</p>
      )
    }  
  }

  function submit() {
    let tempErrors = {
      name : true,
      mail : true,
      subject : true,
      content : true
    }
    if (name.length > 3) {
      tempErrors.name = false;
    }
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail.trim()) == true) {
      tempErrors.mail = false;
    }
    if (subject.length > 3 ) {
      tempErrors.subject = false;
    } 
    if (content.length > 3) {
      tempErrors.content = false;
    }
    if (tempErrors.name == false && tempErrors.mail == false && tempErrors.subject == false && tempErrors.content == false ) {
      let mailObj = {
        subject : subject,
        name: name,
        message: content,
        mail: mail.trim()
      }
      emailjs.send('service_8i19ljh', 'template_qoye7oz', mailObj, 'user_TRqMX4CXwKMRkqPGsoHd4')
        .then((result) => {
            // console.log(result.text);
            setRes(result.text);
            setAlertClasses("contact-alert-background");
        }, (error) => {
            console.log(error.text);
        });
      // setRes("OK");
      // setAlertClasses("contact-alert-background");
      document.getElementById("email-form").reset();
    }
    setErrors(tempErrors);
    setSubmited(true);
  }


  return (
    <div className="contact-container">
      <img src={contact} alt="background" className="products-background"/>
      <div className={alertClasses}>
        <div className="contact-alert-container">
          <h1 className="contact-alert-title">{data.contact["send-mail"][res == "OK" ? "success" : "err"].title[lang]}</h1>
          <p className="contact-alert-content">{data.contact["send-mail"][res == "OK" ? "success" : "err"].content[lang]}</p>
          <div onClick={() => {
            setAlertClasses("contact-alert-background hide");
          }} className="contact-alert-btn-container">
            <h2 className="contact-alert-btn-content">{data.contact["send-mail"]["hide-btn"][lang]}</h2>
          </div>
        </div>
      </div>
      <Slide>
        <div className="contact-content-container">
          <div className="contact-left-container">
            <img src={logo} alt="Logo" className="contact-logo"/>
            <div className="contact-info-container">
              <h2 className="contact-subtitle">{data.contact.info.title[lang]}</h2>
              <div className="contact-separator"/>
              <p className="contact-info-content">{data.contact.info.content[lang]}</p>
              <div className="contact-contact-row-container">
                <MdPhone className="contact-icon"/>
                <img src={mex} alt="México" className="contact-mex"/>
                <p className="contact-info-content">{data.contact.info.tel}</p>
              </div>
              <div className="contact-contact-row-container">
                <MdEmail className="contact-icon"/>
                <p className="contact-info-content">{data.contact.info.mail}</p>
              </div>
            </div>
          </div>
          <div className="contact-right-container">
            <h2 className="contact-subtitle">{data.contact["send-mail"].title[lang]}</h2>
            <div className="contact-separator"/>
            <form id="email-form">
              {
                err("Name")
              }
              <input
                type="text"
                placeholder={data.contact["send-mail"].name[lang]}
                className={errors.name == false ? "contact-input" : submited == true ? "contact-input contact-input-error" : "contact-input"}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              {
                err("Mail")
              }
              <input
                type="text"
                placeholder={data.contact["send-mail"].email[lang]}
                className={errors.mail == false ? "contact-input" : submited == true ? "contact-input contact-input-error" : "contact-input"}
                onChange={(event) => {
                  setMail(event.target.value);
                }}
              />
              {
                err("Subject")
              }
              <textarea
                type="text"
                placeholder={data.contact["send-mail"].subject[lang]}
                className={errors.subject == false ? "contact-input" : submited == true ? "contact-input contact-input-error" : "contact-input"}
                onChange={(event) => {
                  setSubject(event.target.value);
                }}
              />
              {
                err("Content")
              }
              <textarea
                type="text"
                placeholder={data.contact["send-mail"].content[lang]}
                className={errors.content == false ? "contact-input contact-multiline-input" : submited == true ? "contact-input contact-multiline-input contact-input-error" : "contact-input contact-multiline-input"}
                aria-multiline="true"
                onChange={(event) => {
                  setContent(event.target.value);
                }}
              />
            </form>
            <div 
            onClick={() => {
              submit();
            }}
            className="contact-submit-btn-container">
              <h2 className="contact-submit">{data.contact["send-mail"].send[lang]}</h2>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default Contact;