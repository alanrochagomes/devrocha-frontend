import React from "react";
import { Link } from "react-router-dom";
import "../footer/Footer.css";
import ssl from "../../assets/img/ssl.png";
import GoogleSafeBrowsing from "../../assets/img/Google Safe Browsing.png";
import logo from "../assets/../../assets/img/DevRocha.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-section">
            <img src={logo} alt="logo-DevRocha" className="footer-logo" />
            <h3>Sobre Nós</h3>
            <p>
              Oferecemos manutenção de sites, desenvolvimento de software e
              sites, além de soluções personalizadas para web.
            </p>
          </div>

          <div className="footer-section">
            <h3>Segurança</h3>
            <div className="security-seals">
              <img src={ssl} alt="SSL Certificate" className="security-seal" />
              <img
                src={GoogleSafeBrowsing}
                alt="Google Safe Browsing"
                className="security-seal"
              />
            </div>
          </div>

          <div className="footer-section">
            <h3>Institucional</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/servicos">Serviços</Link>
              </li>

              <li>
                <Link to="/projetos">Projetos</Link>
              </li>
              {/* 
            <li>
              <Link to="/blog">Blog</Link>
            </li> */}

              <li>
                <Link to="/contato">Contato</Link>
              </li>

              {/* <li>
              <Link to="/fale-conosco">Fale Conosco</Link>
            </li> */}

              <li>
                <Link to="/about">Quem Somos</Link>
              </li>

              <li>
                <Link to="/politica-privacidade">Política de Privacidade</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contato</h3>
            <ul>
              <li>contato@devrocha.com.br</li>
              <li>(21) 9985-79960</li>
              <li>Endereço: Costa Verde, Itaguaí RJ</li>
            </ul>
          </div>

          <div className="social-media">
            <h3>Mídias Sociais</h3>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/devrocha.oficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/DevRocha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://wa.me/5521998579960"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 DevRocha – Manutenção, Desenvolvimento, Design e Soluções
          Digitais. CNPJ 59.993.460/0001-00
        </p>
      </div>
    </footer>
  );
};

export default Footer;
