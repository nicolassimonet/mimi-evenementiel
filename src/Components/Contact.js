/* eslint-disable jsx-a11y/heading-has-content */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0lwop0e",
        "template_g5t6myq",
        form.current,
        "zcjEvI_1MwIWlBMhe"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Votre message à bien été envoyé !");
        },
        (error) => {
          console.log(error.text);
          alert("Votre message n'a pas pu être envoyé !");
        }
      );
  };

  return (
    <div id="contact" className="box__contact-wrapper">
      <h2 className="section-heading title__contact">Contact</h2>
      <div className="container__wrapper-contact">
        <form ref={form} onSubmit={sendEmail}>
          <label>Nom</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Envoyer" />
        </form>
        <div className="info__container">
          <h1></h1>
          <br />
          <div className="info__content">
            <br />
            <p>07 86 08 40 43</p>
            <p>13 rue du Moulin, 13140 Miramas</p>
            <p>mimievenementiel@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
