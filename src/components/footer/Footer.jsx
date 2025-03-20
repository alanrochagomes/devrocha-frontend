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
              Especializa no desenvolvimento de software e sites personalizados.
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
            <li>✉ contato@devrocha.com.br</li>

            <li>📞(21) 9985-79960</li>
            <li>🏢 Endereço: Rio de Janeiro, RJ</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 DevRocha – Desenvolvimento, Manutenção, Design e Soluções
          Digitais. CNPJ 59.993.460/0001-00
        </p>
      </div>
    </footer>
  );
};

export default Footer;
