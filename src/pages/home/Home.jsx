import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import banner from "../../assets/img/NettCorpSolutions - logo.png";
import reactLogo from "../../pages/home/img/react.png";
import nodejsLogo from "../../pages/home/img/nodejs.png";
import typescriptLogo from "../../pages/home/img/typescript.svg";
import awsLogo from "../../pages/home/img/aws.svg";
import dockerLogo from "../../pages/home/img/docker.svg";
import mongodbLogo from "../../pages/home/img/mongodb.png";

const WhatsAppButton = () => {
  const message =
    "Olá! Sou Alan da equipe NettCorpSolutions. estou à disposição para ajudá-lo(a). Como posso ajudar?";
  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/5521998579960?text=${encodedMessage}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 200,
    });
  }, []);

  const beneficios = [
    {
      icon: "���",
      titulo: "Desenvolvimento Web",
      descricao: "Sites e sistemas modernos e personalizados",
    },
    {
      icon: "🛠️",
      titulo: "Manutenção",
      descricao: "Suporte técnico e atualizações constantes",
    },
    {
      icon: "🎨",
      titulo: "Design UI/UX",
      descricao: "Interfaces intuitivas e experiências memoráveis",
    },
    {
      icon: "🔒",
      titulo: "Segurança",
      descricao: "Proteção de dados e backups automáticos",
    },
  ];

  const tecnologias = [
    { nome: "React", imagem: reactLogo },
    { nome: "Node.js", imagem: nodejsLogo },
    { nome: "TypeScript", imagem: typescriptLogo },
    { nome: "MongoDB", imagem: mongodbLogo },
    { nome: "Docker", imagem: dockerLogo },
    { nome: "AWS", imagem: awsLogo },
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content" data-aos="fade-right">
          <h1>
            Soluções completas em Desenvolvimento, Manutenção e Design para sua
            empresa
          </h1>
          <p>Transformando ideias em soluções tecnológicas de alto impacto</p>
          <div className="hero-buttons">
            <Link to="/contato" className="btn-primary">
              Solicite um orçamento
            </Link>
          </div>
        </div>
      </section>

      <section className="sobre-section" data-aos="fade-up">
        <div className="sobre-content">
          <h2>Sobre nós</h2>
          <div className="sobre-text-content">
            <p>
              Desenvolvimento de software, manutenção de sistemas e design de
              interfaces. Nossa equipe de desenvolvedores e designers trabalha
              com as tecnologias mais modernas do mercado para entregar soluções
              robustas e escaláveis.
            </p>
          </div>
        </div>

        <div className="beneficios-grid">
          <div className="beneficio-card" data-aos="fade-up">
            <div className="card-icon">💻</div>
            <h3>Desenvolvimento Web</h3>
            <p>Sites, sistemas e aplicações web sob medida</p>
            <Link to="/servicos" className="saiba-mais">
              Conheça nossos serviços →
            </Link>
          </div>

          <div
            className="beneficio-card"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="card-icon">🛠️</div>
            <h3>Manutenção de Sistemas</h3>
            <p>Suporte técnico especializado e atualizações</p>
          </div>

          <div
            className="beneficio-card"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="card-icon">🎨</div>
            <h3>Design UI/UX</h3>
            <p>Interfaces modernas e experiências incríveis</p>
          </div>

          <div
            className="beneficio-card"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="card-icon">📱</div>
            <h3>Aplicações Responsivas</h3>
            <p>Sistemas adaptados para todos os dispositivos</p>
          </div>
        </div>
      </section>

      {/* TODO: <section className="resultados-section" data-aos="fade-up">
        <div className="resultados-content">
          <h2>Nossos Resultados</h2>
          <div className="resultados-grid">
            <div className="resultado-card" data-aos="fade-up">
              <div className="resultado-icon">💻</div>
              <div className="resultado-stats">
                <span className="stats-number">+50</span>
                <p>Projetos Entregues</p>
              </div>
              <div className="resultado-info">
                <h3>Desenvolvimento Web</h3>
                <p>Sites e sistemas desenvolvidos com excelência</p>
              </div>
            </div>

            <div
              className="resultado-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="resultado-icon">🛠️</div>
              <div className="resultado-stats">
                <span className="stats-number">+100</span>
                <p>Clientes Atendidos</p>
              </div>
              <div className="resultado-info">
                <h3>Suporte Técnico</h3>
                <p>Manutenção e suporte contínuo</p>
              </div>
            </div>

            <div
              className="resultado-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="resultado-icon">🎨</div>
              <div className="resultado-stats">
                <span className="stats-number">+30</span>
                <p>Designs Criados</p>
              </div>
              <div className="resultado-info">
                <h3>UI/UX Design</h3>
                <p>Interfaces modernas e intuitivas</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="tecnologias-section" data-aos="fade-up">
        <h2>Tecnologias que utilizamos</h2>
        <div className="tecnologias-grid">
          {tecnologias.map((tech, index) => (
            <div
              key={tech.nome}
              className="tecnologia-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={tech.imagem} alt={tech.nome} />
              <p>{tech.nome}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-final" data-aos="fade-up">
        <div className="cta-content">
          <h2>Transforme sua presença digital</h2>
          <p>
            Desenvolvimento, manutenção e design de alta qualidade para seu
            negócio
          </p>
          <Link to="/contato" className="cta-button">
            Solicite um orçamento
          </Link>
        </div>
      </section>
      <WhatsAppButton />
    </div>
  );
};

export default Home;
