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
            Cresça online com nossos serviços de design e desenvolvimento web
            personalizados.
          </h1>
          <p>Cuidamos do seu site para que você possa cuidar do seu negócio.</p>
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

      {/* TODO: <section className="depoimentos-section" data-aos="fade-up">
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
      </section> */}

      <section className="resultados-section" data-aos="fade-up">
        <div className="resultados-content">
          <h2>Resultados que Transformam Negócios</h2>
          <div className="resultados-grid">
            <div className="resultado-card" data-aos="fade-up">
              <div className="resultado-icon">📈</div>
              <div className="resultado-stats">
                <span className="stats-number">+150%</span>
                <p>Aumento em Vendas</p>
              </div>
              <div className="resultado-info">
                <h3>E-commerce Moda</h3>
                <p>
                  Aumento significativo em vendas após 6 meses de estratégia
                  digital
                </p>
              </div>
            </div>

            <div
              className="resultado-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="resultado-icon">🎯</div>
              <div className="resultado-stats">
                <span className="stats-number">+300%</span>
                <p>Leads Qualificados</p>
              </div>
              <div className="resultado-info">
                <h3>Empresa B2B</h3>
                <p>Triplicamos a geração de leads qualificados em 3 meses</p>
              </div>
            </div>

            <div
              className="resultado-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="resultado-icon">👥</div>
              <div className="resultado-stats">
                <span className="stats-number">+200%</span>
                <p>Seguidores</p>
              </div>
              <div className="resultado-info">
                <h3>Influenciador Digital</h3>
                <p>Crescimento orgânico nas redes sociais em 4 meses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="resultados-section" data-aos="fade-up">
        <div className="resultados-content">
          <h2>Resultados que Transformam Negócios</h2>
          <div className="resultados-grid">
            <div className="resultado-card" data-aos="fade-up">
              <div className="resultado-icon">📈</div>
              <div className="resultado-stats">
                <span className="stats-number">+150%</span>
                <p>Aumento em Vendas</p>
              </div>
              <div className="resultado-info">
                <h3>E-commerce Moda</h3>
                <p>
                  Aumento significativo em vendas após 6 meses de estratégia
                  digital
                </p>
              </div>
            </div>

            <div
              className="resultado-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="resultado-icon">🎯</div>
              <div className="resultado-stats">
                <span className="stats-number">+300%</span>
                <p>Leads Qualificados</p>
              </div>
              <div className="resultado-info">
                <h3>Empresa B2B</h3>
                <p>Triplicamos a geração de leads qualificados em 3 meses</p>
              </div>
            </div>

            <div
              className="resultado-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="resultado-icon">👥</div>
              <div className="resultado-stats">
                <span className="stats-number">+200%</span>
                <p>Seguidores</p>
              </div>
              <div className="resultado-info">
                <h3>Influenciador Digital</h3>
                <p>Crescimento orgânico nas redes sociais em 4 meses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="resultados-section" data-aos="fade-up">
        <div className="resultados-content">
          <h2>Resultados que Transformam Negócios</h2>
          <div className="resultados-grid">
            <div className="resultado-card" data-aos="fade-up">
              <div className="resultado-icon">📈</div>
              <div className="resultado-stats">
                <span className="stats-number">+150%</span>
                <p>Aumento em Vendas</p>
              </div>
              <div className="resultado-info">
                <h3>E-commerce Moda</h3>
                <p>
                  Aumento significativo em vendas após 6 meses de estratégia
                  digital
                </p>
              </div>
            </div>

            <div
              className="resultado-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="resultado-icon">🎯</div>
              <div className="resultado-stats">
                <span className="stats-number">+300%</span>
                <p>Leads Qualificados</p>
              </div>
              <div className="resultado-info">
                <h3>Empresa B2B</h3>
                <p>Triplicamos a geração de leads qualificados em 3 meses</p>
              </div>
            </div>

            <div
              className="resultado-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="resultado-icon">👥</div>
              <div className="resultado-stats">
                <span className="stats-number">+200%</span>
                <p>Seguidores</p>
              </div>
              <div className="resultado-info">
                <h3>Influenciador Digital</h3>
                <p>Crescimento orgânico nas redes sociais em 4 meses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TODO: <section className="metricas-section" data-aos="fade-up">
        <div className="metricas-content">
          <h2>Números que Comprovam Nossa Excelência</h2>
          <div className="metricas-grid">
            <div className="metrica-card" data-aos="fade-up">
              <div className="metrica-valor">
                <span className="contador">50</span>%
              </div>
              <h3>Satisfação</h3>
              <p>Clientes satisfeitos com nossos serviços</p>
            </div>

            <div
              className="metrica-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="metrica-valor">
                <span className="contador">10</span>+
              </div>
              <h3>Projetos</h3>
              <p>Projetos entregues com sucesso</p>
            </div>

            <div
              className="metrica-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="metrica-valor">
                <span className="contador">3</span>+
              </div>
              <h3>Anos</h3>
              <p>De experiência no mercado</p>
            </div>

            <div
              className="metrica-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="metrica-valor">
                <span className="contador">50</span>M
              </div>
              <h3>Investidos</h3>
              <p>Em campanhas gerenciadas</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="cta-final" data-aos="fade-up">
        <div className="cta-content">
          <h2>MANUTENÇÃO DE SITES</h2>
          <p>Garantindo desempenho, segurança e atualizações constantes.</p>
          <Link to="/contato" className="cta-button">
            Fale com um especialista
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
