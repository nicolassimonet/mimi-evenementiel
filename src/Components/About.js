import React, { Component } from "react";
import Fade from "react-reveal";

import Mimi from "./../images/mimi.jpeg";

class About extends Component {
  render() {
    return (
      <Fade duration={1000}>
        <div id="about" className="main__content">
          <section class="about">
            <div className="about__container">
              <img src={Mimi} className="img__about" alt="" />
              <div className="about__wrapper">
                <h2 className="title__about">À propos de moi</h2>
                <h3>Organisatrice d'événements depuis plus de 20 ans</h3>
                <p>Je m'appelle Myriam Nicolas, je suis dans l'organisation Événementiels privés et publiques depuis 20 ans. J'ai organisée des petits-déjeuners, conférences de presse, lancements de produits, présentations de presse, déjeuners internes, journées incentives, dîners de gala, remises de prix, soirées de fin d'année, séminaires d'entreprise, d'inauguration, d'arbres de Noël, de conventions, cocktails d'entreprise, d'assemblées générales, garden party, summer party, baby shower, anniversaire, baptême, fiançailles, mariage et divorce... Je suis un <strong>chef de projet</strong> dédié à votre événement de la prise de brief à l'accompagnement le jour J.</p>
              </div>
            </div>
          </section>
        </div>
      </Fade>
    );
  }
}

export default About;
