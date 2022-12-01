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
      <div class="container">
        <div class="contact-box">
          <div class="left">
            <h1></h1>
            <p>07 86 08 40 43</p>
            <p>13 rue du Moulin, 13140 Miramas</p>
            <p>mimievenementiel@gmail.com</p>
          </div>
          <form ref={form} onSubmit={sendEmail} class="right">
            <input type="text" class="field" name="user_name" placeholder="Nom" />
            <input type="email" class="field" name="user_email" placeholder="Email" />
            <textarea placeholder="Message" name="message" class="field"/>
            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
