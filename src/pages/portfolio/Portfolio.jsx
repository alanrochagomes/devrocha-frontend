import React from "react";
import "../portfolio/Portfolio.css";
import { portfolioData } from "../portfolio/service/Portfolio.service";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <span className="subtitle" data-aos="fade-up">
          CONHEÇA ALGUNS SITES QUE CRIAMOS
        </span>
        <h1 className="title" data-aos="fade-up">
          Portfólio
        </h1>
      </div>

      <div className="portfolio-grid">
        {portfolioData.map((item) => (
          <div
            key={item.id}
            className="portfolio-item"
            data-aos="fade-up"
            data-aos-delay={item.id * 100}
          >
            <div className="laptop">
              <div className="laptop-screen">
                <img
                  src={item.image}
                  alt={item.title}
                  className="site-screenshot"
                />
              </div>
              <div className="laptop-base">
                <div className="laptop-trackpad"></div>
              </div>
            </div>
            <a
              href={item.link}
              className="site-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver site →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
