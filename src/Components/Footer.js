import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
    function Annee() {
      const year = new Date().getFullYear();
      return <span>{year}</span>;
    }
    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>&copy; Copyright <Annee /> Mimi Évenementiel</li>
                <li>
                  Developed by{" "}
                  <a
                    title="Nicolas Simonet"
                    href="http://www.nicolas-simonet.fr/"
                  >
                    Nicolas Simonet
                  </a>{" "}
                  <bold>&</bold>{" "}
                  <a title="iiRedDev" href="https://github.com/iiRedDev">
                    iireddev
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
