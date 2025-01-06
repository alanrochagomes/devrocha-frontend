import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const beneficios = [
    {
      icon: "🚀",
      titulo: "Sites Rápidos",
      descricao: "Desenvolvimento otimizado para carregar em segundos",
    },
    {
      icon: "📱",
      titulo: "100% Responsivo",
      descricao: "Seu site perfeito em todos os dispositivos",
    },
    {
      icon: "🔒",
      titulo: "Segurança Total",
      descricao: "Proteção contra ameaças e backups automáticos",
    },
    {
      icon: "🎯",
      titulo: "SEO Otimizado",
      descricao: "Melhor posicionamento no Google",
    },
  ];

  const tecnologias = [
    { nome: "React", imagem: "/images/tech/react.png" },
    { nome: "Node.js", imagem: "/images/tech/nodejs.png" },
    { nome: "WordPress", imagem: "/images/tech/wordpress.png" },
    { nome: "Laravel", imagem: "/images/tech/laravel.png" },
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content" data-aos="fade-right">
          <h1>Transforme sua presença digital</h1>
          <p>
            Desenvolvimento de sites profissionais e soluções em TI que
            impulsionam seu negócio
          </p>
          <div className="hero-buttons">
            <Link to="/contato" className="btn-primary">
              Solicitar Orçamento
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              Ver Projetos
            </Link>
          </div>
        </div>
        <div className="hero-image" data-aos="fade-left">
          <img src="/images/hero-illustration.svg" alt="Desenvolvimento Web" />
        </div>
      </section>

      <section className="beneficios-section">
        <h2 data-aos="fade-up">Por que escolher nossos serviços?</h2>
        <div className="beneficios-grid">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="beneficio-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <span className="beneficio-icon">{beneficio.icon}</span>
              <h3>{beneficio.titulo}</h3>
              <p>{beneficio.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="servicos-principais">
        <h2 data-aos="fade-up">Nossos Serviços</h2>
        <div className="servicos-cards">
          <div className="servico-card" data-aos="fade-up" data-aos-delay="0">
            <div className="servico-icon">💻</div>
            <h3>Criação de Sites</h3>
            <p>
              Sites profissionais, blogs, portfólios e landing pages otimizados
              e responsivos.
            </p>
            <Link to="/servicos" className="servico-link">
              Saiba mais →
            </Link>
          </div>

          <div className="servico-card" data-aos="fade-up" data-aos-delay="100">
            <div className="servico-icon">🛍️</div>
            <h3>E-commerce</h3>
            <p>
              Lojas virtuais completas com gestão de produtos, pagamentos e
              entregas.
            </p>
            <Link to="/servicos" className="servico-link">
              Saiba mais →
            </Link>
          </div>

          <div className="servico-card" data-aos="fade-up" data-aos-delay="200">
            <div className="servico-icon">🔧</div>
            <h3>Manutenção</h3>
            <p>
              Suporte técnico, atualizações de segurança e backup para seu site.
            </p>
            <Link to="/servicos" className="servico-link">
              Saiba mais →
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section" data-aos="fade-up">
        <div className="cta-content">
          <h2>Pronto para começar seu projeto?</h2>
          <p>
            Transforme suas ideias em realidade com nossa expertise em
            desenvolvimento web
          </p>
          <Link to="/contato" className="cta-button">
            Fale Conosco
          </Link>
        </div>
      </section>

      <section className="tecnologias-section">
        <h2 data-aos="fade-up">Tecnologias que utilizamos</h2>
        <div className="tecnologias-grid">
          {tecnologias.map((tech, index) => (
            <div
              key={index}
              className="tecnologia-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img src={tech.imagem} alt={tech.nome} />
              <span>{tech.nome}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="numeros-section">
        {["100+", "95%", "24/7", "5+"].map((numero, index) => (
          <div
            key={index}
            className="numero-item"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3>{numero}</h3>
            <p>
              {
                [
                  "Projetos Entregues",
                  "Clientes Satisfeitos",
                  "Suporte Técnico",
                  "Anos de Experiência",
                ][index]
              }
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
