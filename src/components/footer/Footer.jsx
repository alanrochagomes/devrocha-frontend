import React from "react";
import { Link } from "react-router-dom";
import "../footer/Footer.css";
import ssl from "../../assets/img/ssl.png";
import GoogleSafeBrowsing from "../../assets/img/Google Safe Browsing.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-section">
            <h3>Sobre Nós</h3>
            <p>
              Consultoria especializada em desenvolvimento web e soluções
              tecnológicas.
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
          <h3>Links Rápidos</h3>
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

            <li>
              <Link to="/contato">Contato</Link>
            </li>

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
            <li>✉ nettcorpsolutions@mail.com </li>
            <li>✉ atendimentonettcorpsolutions@mail.com</li>
            <li>📞(21) 9985-79960</li>
            <li>🏢 Endereço: Rio de Janeiro, RJ</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © Copyright 2025 NettCorpSolutions – Inovação em Tecnologia, TI e
          Soluções Digitais
          {/*&copy; 2025 NettCorpSolutions. */}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
