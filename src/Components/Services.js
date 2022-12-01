/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Slide from "react-reveal";

import Loisir from "./../images/loisir.png";
import Resto from "./../images/resto.png";
import Car from "./../images/car.png";
import Avion from "./../images/avion.png";
import Balloon from "./../images/baloon.png";
import Quotidien from "./../images/quotidien.png";
import Bien from "./../images/bien.png";
import Vin from "./../images/wine.png";

import "./services.css";


class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <div className="section">
          <Slide left duration={1300}>
            <div className="row">
              <h1 className="section-heading">Services</h1>
            </div>
            <div className="row">
              <div className="column">
                <div className="card">
                  <div className="icon-wrapper">
                    <img className="icon__services" src={Loisir}></img>
                  </div>
                  <h3>Activités de loisirs</h3>
                  <p>
                    Activités sportives et culturelles concerts et événements sportifs/artistique
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="icon-wrapper">
                    <img className="icon__services" src={Resto}></img>
                  </div>
                  <h3>Gastronomie</h3>
                  <p>
                    Reservation de restaurant <br /> Cours de cuisine <br /> Chef à domicile <br /> Traiteur
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="icon-wrapper">
                    <img className="icon__services" src={Car}></img>
                  </div>
                  <h3>Transport</h3>
                  <p>
                    Location tous types de véhicules <br /> Voitures de luxe ou d'éxception (avec ou sans chauffeur) <br /> Chauffeur privé <br /> Limousine <br /> Bateaux <br /> Taxi
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="icon-wrapper">
                    <img className="icon__services" src={Avion}></img>
                  </div>
                  <h3>Voyages</h3>
                  <p>
                    Planification & organisation de vos séjours en France ou à l'étranger <br /> Restaurants <br /> Tourisme <br /> Activités <br /> Hôtels
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="icon-wrapper">
                    <img className="icon__services" src={Balloon}></img>
                  </div>
                  <h3>Évenementiel</h3>
                  <p>
                    Organisation d'évênements privées <br /> Anniversaires <br /> Baby shower <br /> Vernissages <br /> Récéptions <br /> Décoration <br /> Animation <br /> Baptème <br /> Mariage <br /> Coktails <br /> Soirées
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="icon-wrapper">
                    <img className="icon__services" src={Quotidien}></img>
                  </div>
                  <h3>Au quotidien</h3>
                  <p>
                    Réception / expédition / gestion de votre courrier <br /> Livraison de fleurs, journaux, vins et champagne <br /> Recherche et livraison du cadeau <br /> Majordome / gourvernante <br /> Gestion du pressing et des retouches <br /> Livraison de vos courses <br /> Employé de maison <br /> Affrêtement <br /> Baby-sitter
                  </p>
                </div>
              </div>
              <div className="card__wrapper-spacing">
                <div className="column">
                  <div className="card" id="two">
                    <div className="icon-wrapper">
                      <img className="icon__services" src={Bien}></img>
                    </div>
                    <h3>Bien-être</h3>
                    <p>
                      Professeur de yoga <br /> Personnal Shopper  <br /> Maquilleur(se) <br /> Coach sportif <br /> Estheticienne <br /> Masseur(se) <br /> Coiffeur(se) <br /> Styliste
                    </p>
                  </div>
                </div>
                <div className="column">
                  <div className="card">
                    <div className="icon-wrapper">
                      <img className="icon__services" src={Vin}></img>
                    </div>
                    <h3>Oenologie</h3>
                    <p>
                      Initiation et dégustation de vins avec sommelier ou oenologue <br /> Visite de domaines agricoles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Resume;
