/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import Fade from "react-reveal";

import "./boutique.css";

class Portfolio extends Component {
  render() {
    return (
      <Fade left duration={1000} distance="40px">
        <section id="boutique">
          <div className="boutique__container">
            <h1 className="blurb__heading text__boutique section-heading">boutique</h1>
                <a className="link__button-text" href="https://lescadeauxdemimi.fr/" target="_blank" rel="noopener noreferrer">Visitez la boutique</a>
                <a className="link__button-text" href="https://mimi.lokki.rent/" target="_blank" rel="noopener noreferrer">Vous souhaitez louer ?</a>
          </div>
        </section>
      </Fade>
    );
  }
}

export default Portfolio;
