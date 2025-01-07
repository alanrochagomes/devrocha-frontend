import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import banner from "../../assets/img/NettCorpSolutions - logo.png";

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
          <h1>
            Como deixar o cliente chegar até você sem precisar correr atrás?
          </h1>
          <p>
            Transforme sua presença digital e aumente suas vendas com
            estratégias personalizadas de marketing
          </p>
          <div className="hero-buttons">
            <Link to="/contato" className="btn-primary">
              Fale com um especialista
            </Link>
          </div>
        </div>
      </section>

      <section className="sobre-section" data-aos="fade-up">
        <div className="sobre-content">
          <h2>Sobre nós</h2>
          <div className="sobre-text-content">
            <p>
              Somos uma empresa especializada em Marketing Digital que atende
              seu interesse em crescer no mercado digital. Nossa equipe de
              profissionais qualificados desenvolve estratégias sob medida para
              cada cliente, garantindo o melhor retorno sobre o investimento.
            </p>
          </div>
        </div>

        <div className="beneficios-grid">
          <div className="beneficio-card" data-aos="fade-up">
            <div className="card-icon">💡</div>
            <h3>Planos de Marketing Digital</h3>
            <p>Estratégias personalizadas para seu negócio crescer</p>
            <Link to="/portfolio" className="saiba-mais">
              Ver Sobre Portfolio →
            </Link>
          </div>

          <div
            className="beneficio-card"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="card-icon">🎯</div>
            <h3>Segmentação precisa</h3>
            <p>Alcance exatamente seu público-alvo ideal</p>
          </div>

          <div
            className="beneficio-card"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="card-icon">📊</div>
            <h3>Resultados mensuráveis</h3>
            <p>Acompanhe métricas e resultados em tempo real</p>
          </div>

          <div
            className="beneficio-card"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="card-icon">🚀</div>
            <h3>Estratégias personalizadas</h3>
            <p>Soluções sob medida para cada negócio</p>
          </div>
        </div>
      </section>

      <section className="depoimentos-section" data-aos="fade-up">
        <div className="depoimentos-content">
          <h2>O que os nossos clientes estão falando!</h2>
          <div className="depoimentos-grid">
            <div className="depoimento-video" data-aos="fade-up">
              <div className="video-container">
                <div className="video-placeholder">
                  <div className="play-button">▶</div>
                </div>
              </div>
            </div>
            <div
              className="depoimento-video"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="video-container">
                <div className="video-placeholder">
                  <div className="play-button">▶</div>
                </div>
              </div>
            </div>
            <div
              className="depoimento-video"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="video-container">
                <div className="video-placeholder">
                  <div className="play-button">▶</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marcas-section" data-aos="fade-up">
        <h2>Marcas em nossa história</h2>
        <div className="marcas-container">
          <div className="marcas-grid">
            <img src="/path-to-logo1.png" alt="Logo 1" className="marca-logo" />
            <img src="/path-to-logo2.png" alt="Logo 2" className="marca-logo" />
            <img src="/path-to-logo3.png" alt="Logo 3" className="marca-logo" />
          </div>
          <div className="avaliacoes-container">
            <div className="avaliacao-item">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>Excelente serviço</p>
              <img
                src="/google-reviews.png"
                alt="Google Reviews"
                className="review-source"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="servicos-grid" data-aos="fade-up">
        <h2>Tudo o que o Seu Negócio Precisa para Crescer Está Aqui!</h2>
        <div className="grid-container">
          <div className="servico-item" data-aos="fade-up">
            <div className="servico-icon">📊</div>
            <h3>Estratégias em Marketing Digital</h3>
            <p>Planejamento estratégico para alcançar seus objetivos</p>
          </div>
          {/* Adicione os outros serviços seguindo o mesmo padrão */}
        </div>
      </section>

      <section className="cta-final" data-aos="fade-up">
        <div className="cta-content">
          <h2>AGÊNCIA DE MARKETING DIGITAL</h2>
          <p>Transforme seus negócios por meio da comunicação.</p>
          <Link to="/contato" className="cta-button">
            Fale com um especialista
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
