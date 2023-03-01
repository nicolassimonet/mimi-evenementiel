import React, { Component } from "react";
import bgVideo from "./../images/evenementiel.mov";
// import Fade from "react-reveal";

class Header extends Component {
  render() {
    return (
      <header id="home">

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll toggle__nav-home" href="#home">
                Accueil
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                À propos
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Services
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Boutique
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

      <div className="container__banner">
        <div className="row banner">
          <div className="banner-text">
            {/* <Fade bottom> */}
              <h1 className="responsive-headline">Mimi Evenementiel</h1>
            {/* </Fade> */}
            {/* <Fade bottom duration={1200}> */}
              <h3>Mariage, Récéptions, Organisation d'évenements privées, soirées, Vernissages, Coktails, Anniversaires, baby shower, Baptême, Décoration, Animation.</h3>
            {/* </Fade> */}
          </div>
        </div>
        <video autoPlay loop muted src={bgVideo}></video>
      </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
