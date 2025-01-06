import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const projetos = [
    {
      id: 1,
      imagem: "/images/portfolio/projeto1.jpg",
      titulo: "Site Pessoal",
      link: "https://projeto1.com",
    },
    {
      id: 2,
      imagem: "/images/portfolio/projeto2.jpg",
      titulo: "Clínica Emagrecimento",
      link: "https://projeto2.com",
    },
    {
      id: 3,
      imagem: "/images/portfolio/projeto3.jpg",
      titulo: "Consultoria Empresarial",
      link: "https://projeto3.com",
    },
    {
      id: 4,
      imagem: "/images/portfolio/projeto4.jpg",
      titulo: "Clínica Estética",
      link: "https://projeto4.com",
    },
    {
      id: 5,
      imagem: "/images/portfolio/projeto5.jpg",
      titulo: "Advocacia",
      link: "https://projeto5.com",
    },
    {
      id: 6,
      imagem: "/images/portfolio/projeto6.jpg",
      titulo: "Restaurante",
      link: "https://projeto6.com",
    },
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <span className="portfolio-tag">CONHEÇA ALGUNS SITES QUE CRIAMOS</span>
        <h1>Portfólio</h1>
      </div>

      <div className="portfolio-grid">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="portfolio-item">
            <div className="portfolio-image">
              <img src={projeto.imagem} alt={projeto.titulo} />
              <div className="portfolio-overlay">
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-link"
                >
                  <i className="fas fa-link"></i>
                </a>
              </div>
            </div>
            <div className="portfolio-laptop">
              <img
                src="/images/laptop-frame.png"
                alt="Laptop Frame"
                className="laptop-frame"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
