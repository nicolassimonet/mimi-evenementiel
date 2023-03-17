import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";

import "./App.css";
import "./css/default.css";
import "./css/fonts.css";
import "./css/layout.css";
import "./css/magnific-popup.css";
import "./css/media-queries.css";

import "./css/font-awesome/css/font-awesome.css";
import "./css/font-awesome/css/font-awesome.min.css";

import "./css/fontello/css/animation.css";
import "./css/fontello/css/fontello-codes.css";
import "./css/fontello/css/fontello-embedded.css";
import "./css/fontello/css/fontello-ie7-codes.css";
import "./css/fontello/css/fontello-ie7.css";
import "./css/fontello/css/fontello.css";

import "./Components/boutique.css";
import "./Components/contact.css";
import "./Components/services.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Boutique from "./Components/Boutique";
import Gallery from "./Components/Gallery"; // Importez le composant Gallery

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      images: [ // Ajoute les images pour la galerie
        { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80", alt: "Image 1" },
        { url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", alt: "Image 2" },
        { url: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80", alt: "Image 3" },
        { url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", alt: "Image 4" },
        { url: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", alt: "Image 5" },
        { url: "https://images.unsplash.com/photo-1464047736614-af63643285bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80", alt: "Image 6" },
        // Ajoute plus d'images ici
      ],
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Services data={this.state.resumeData.resume} />
        <Boutique data={this.state.resumeData.portfolio} />
        <Gallery images={this.state.images} /> {/* Utilisez le composant Gallery */}
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
