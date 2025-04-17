import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

import reactLogo from "../../pages/home/img/react.png";
import nodejsLogo from "../../pages/home/img/nodejs.png";
import typescriptLogo from "../../pages/home/img/typescript.svg";
import awsLogo from "../../pages/home/img/aws.svg";
import dockerLogo from "../../pages/home/img/docker.svg";
import mongodbLogo from "../../pages/home/img/mongodb.png";

const WhatsAppButton = () => {
  const message =
    "Olá! Sou o Alan. Estou à disposição para ajudá-lo(a). Como posso assisti-lo(a) hoje?";
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

    const handleScroll = () => {
      const backToTopButton = document.getElementById("back-to-top");
      if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const beneficios = [
    {
      icon: "fa-solid fa-code",
      titulo: "Desenvolvimento Web",
      descricao: "Sites e sistemas modernos e personalizados",
      cor: "#4A90E2"
    },
    {
      icon: "fa-solid fa-gears",
      titulo: "Manutenção",
      descricao: "Suporte técnico e atualizações constantes",
      cor: "#50C878"
    },
    {
      icon: "fa-solid fa-palette",
      titulo: "Design UI/UX",
      descricao: "Interfaces intuitivas e experiências memoráveis",
      cor: "#FF6B6B"
    },
    {
      icon: "fa-solid fa-shield-halved",
      titulo: "Segurança",
      descricao: "Proteção de dados e backups automáticos",
      cor: "#FFB400"
    },
    {
      icon: "fa-solid fa-mobile-screen",
      titulo: "Responsividade",
      descricao: "Adaptação perfeita para todos os dispositivos",
      cor: "#9B59B6"
    },
    {
      icon: "fa-solid fa-rocket",
      titulo: "Performance",
      descricao: "Otimização e velocidade excepcional",
      cor: "#E67E22"
    }
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
            <Link to="/contato" className="btn-primary request-quote-button">
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
              A <strong>DevRocha</strong> se especializa no desenvolvimento de
              software e sites personalizados, oferecendo soluções completas e
              adaptáveis às necessidades dos nossos clientes. Além disso,
              prestamos serviços contínuos de manutenção de sistemas e sites,
              garantindo que suas plataformas estejam sempre atualizadas e
              operando de forma eficiente. Também nos destacamos no design de
              interfaces, criando experiências de usuário intuitivas e
              atraentes, com foco na usabilidade e no desempenho de cada
              projeto.
            </p>
          </div>
        </div>

        <section className="beneficios-section" data-aos="fade-up">
          <div className="section-header">
            <h2>Nossos Serviços</h2>
            <p>Soluções completas para sua presença digital</p>
          </div>
          <div className="beneficios-grid">
            {beneficios.map((beneficio, index) => (
              <div
                className="beneficio-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{"--card-color": beneficio.cor}}
              >
                <div className="beneficio-icon">
                  <i className={beneficio.icon}></i>
                </div>
                <h3>{beneficio.titulo}</h3>
                <p>{beneficio.descricao}</p>
                <div className="card-hover-effect"></div>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="dev-web-section" data-aos="fade-up">
        <div className="dev-web-content">
          <div className="dev-web-text" data-aos="fade-right">
            <h2>Desenvolvimento Web Moderno</h2>
            <div className="dev-features">
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div className="feature-text">
                  <h4>Performance Otimizada</h4>
                  <p>
                    Sites rápidos e responsivos para melhor experiência do
                    usuário
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <div className="feature-text">
                  <h4>SEO Friendly</h4>
                  <p>Estrutura otimizada para mecanismos de busca</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">📱</div>
                <div className="feature-text">
                  <h4>Design Responsivo</h4>
                  <p>Adaptação perfeita para todos os dispositivos</p>
                </div>
              </div>
            </div>

            <div className="code-stats">
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Código Limpo</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99%</span>
                <span className="stat-label">Performance</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Suporte</span>
              </div>
            </div>
          </div>

          <div className="dev-web-visual" data-aos="fade-left">
            <img
              src="https://raw.githubusercontent.com/ShahriarShafin/ShahriarShafin/main/Assets/programmer.gif"
              alt="Coding Animation"
              className="coding-animation"
            />
          </div>
        </div>
      </section>

      <section className="design-section" data-aos="fade-up">
        <div className="design-content">
          <div className="design-visual" data-aos="fade-right">
            <img
              src="https://agenciavisao360.com.br/wp-content/uploads/2021/11/ux-designer-360-1.gif"
              alt="Design Process Animation"
              className="design-animation"
            />
          </div>

          <div className="design-text" data-aos="fade-left">
            <h2>Design UI/UX Inovador</h2>
            <div className="design-features">
              <div className="feature-item">
                <div className="feature-icon">🎨</div>
                <div className="feature-text">
                  <h4>Design Intuitivo</h4>
                  <p>
                    Interfaces claras e fáceis de usar que encantam seus
                    usuários
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">📱</div>
                <div className="feature-text">
                  <h4>Design Responsivo</h4>
                  <p>Experiências perfeitas em todos os dispositivos</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🔍</div>
                <div className="feature-text">
                  <h4>Pesquisa UX</h4>
                  <p>Decisões baseadas em dados e feedback dos usuários</p>
                </div>
              </div>
            </div>

            <div className="design-stats">
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfação</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projetos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">UX</span>
                <span className="stat-label">Certificados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="maintenance-section" data-aos="fade-up">
        <div className="maintenance-content">
          <div className="maintenance-text" data-aos="fade-right">
            <h2>Manutenção e Suporte</h2>
            <div className="maintenance-features">
              <div className="feature-item">
                <div className="feature-icon">🔧</div>
                <div className="feature-text">
                  <h4>Suporte Contínuo</h4>
                  <p>Atendimento 24/7 para manter seu sistema funcionando</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🔄</div>
                <div className="feature-text">
                  <h4>Atualizações Regulares</h4>
                  <p>Mantenha seu sistema sempre atualizado e seguro</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <div className="feature-text">
                  <h4>Monitoramento</h4>
                  <p>Acompanhamento constante do desempenho</p>
                </div>
              </div>
            </div>
          </div>

          <div className="maintenance-visual" data-aos="fade-left">
            <img
              src="https://cdn.dribbble.com/users/1708816/screenshots/15637256/media/f9826f0af8a49462f048262a8502035b.gif"
              // src="https://www.linknacional.com.br/wp-content/uploads/2023/10/manutencao-de-site.webp"
              alt="Maintenance Animation"
              className="maintenance-animation"
            />
          </div>
        </div>
      </section>

      <section className="planning-section" data-aos="fade-up">
        <div className="planning-content">
          <div className="planning-visual" data-aos="fade-right">
            <img
              src="https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Developer.gif"
              alt="Planning Animation"
              className="planning-animation"
            />
          </div>

          <div className="planning-text" data-aos="fade-left">
            <h2>Planeje Seu Projeto</h2>
            <div className="planning-features">
              <div className="feature-item">
                <div className="feature-icon">💡</div>
                <div className="feature-text">
                  <h4>Reunião Inicial</h4>
                  <p>Converse conosco sobre sua ideia em uma reunião online</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">📋</div>
                <div className="feature-text">
                  <h4>Análise Detalhada</h4>
                  <p>Avaliamos requisitos e planejamos a melhor solução</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <div className="feature-text">
                  <h4>Proposta Personalizada</h4>
                  <p>Receba um plano detalhado e orçamento adequado</p>
                </div>
              </div>
            </div>
            <Link to="/contato" className="cta-button">
              Agende uma Reunião
            </Link>
          </div>
        </div>
      </section>

      {/* TODO: <section className="update-section" data-aos="fade-up">
        <div className="update-content">
          <div className="update-text" data-aos="fade-right">
            <h2>Atualize Seus Dados</h2>
            <div className="update-features">
              <div className="feature-item">
                <div className="feature-icon">👤</div>
                <div className="feature-text">
                  <h4>Dados Pessoais</h4>
                  <p>Mantenha seu nome e informações sempre atualizados</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">📧</div>
                <div className="feature-text">
                  <h4>Contatos</h4>
                  <p>Atualize seu email e telefone quando necessário</p>
                </div>
              </div>
            </div>
            <Link to="/fale-conosco" className="cta-button">
              Atualizar Cadastro
            </Link>
          </div>

          <div className="update-visual" data-aos="fade-left">
            <img
              src="https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Designer.gif"
              alt="Update Profile Animation"
              className="update-animation"
            />
          </div>
        </div>
      </section>

      <section className="user-benefits-section" data-aos="fade-up">
        <div className="user-benefits-content">
          <div className="user-benefits-text" data-aos="fade-right">
            <h2>Vantagens de Ser um Usuário Cadastrado</h2>
            <div className="benefits-features">
              <div className="feature-item">
                <div className="feature-icon">🔑</div>
                <div className="feature-text">
                  <h4>Acesso Exclusivo</h4>
                  <p>
                    Usuários cadastrados têm acesso a solicitações exclusivas e
                    acompanhamento de progresso.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <div className="feature-text">
                  <h4>Prioridade Alta</h4>
                  <p>
                    Solicitações de usuários cadastrados são tratadas com
                    prioridade mais alta.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">👥</div>
                <div className="feature-text">
                  <h4>Comunidade</h4>
                  <p>
                    Faça parte de uma comunidade de usuários com benefícios
                    exclusivos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="user-benefits-visual" data-aos="fade-left">
            <img
              src="https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif"
              alt="User Benefits Animation"
              className="user-benefits-animation"
            />
          </div>
        </div>
      </section>

      <section className="weekly-reports-section" data-aos="fade-up">
        <div className="weekly-reports-content">
          <div className="weekly-reports-text" data-aos="fade-right">
            <h2>Relatórios Semanais</h2>
            <p>
              Receba relatórios semanais detalhados sobre o progresso das suas
              tarefas. Mantenha-se informado sobre cada etapa do seu projeto.
            </p>
            <ul>
              <li>
                📄 PDF: Relatórios detalhados enviados diretamente para você.
              </li>
              <li>
                📧 Email: Receba atualizações diretamente na sua caixa de
                entrada.
              </li>
              <li>
                💬 Discord: Participe de discussões e receba relatórios na nossa
                comunidade.
              </li>
              <li>
                📱 WhatsApp: Receba notificações rápidas e relatórios no seu
                celular.
              </li>
            </ul>
          </div>
          <div className="weekly-reports-visual" data-aos="fade-left">
            <img
              src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"
              alt="Weekly Reports Animation"
              className="weekly-reports-animation"
            />
          </div>
        </div>
      </section>

      <section className="discord-communication-section" data-aos="fade-up">
        <div className="discord-communication-content">
          <div className="discord-communication-text" data-aos="fade-right">
            <h2>Comunicação na Comunidade do Discord</h2>
            <p>
              Junte-se à nossa comunidade no Discord para acompanhar suas
              tarefas, participar de chamadas ao vivo e interagir com outros
              usuários.
            </p>
          </div>
          <div className="discord-communication-visual" data-aos="fade-left">
            <img
              src="https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif"
              alt="Discord Communication Animation"
              className="discord-communication-animation"
            />
          </div>
        </div>
      </section>

      <section className="faq-section" data-aos="fade-up">
        <div className="faq-content">
          <h2>Perguntas Frequentes</h2>
          <div className="faq-item">
            <h4>Usuários cadastrados têm prioridade?</h4>
            <p>
              Sim, usuários cadastrados têm prioridade no atendimento. No
              entanto, usuários não cadastrados também serão atendidos da mesma
              forma. Não é necessário se cadastrar para solicitar serviços, mas
              é recomendado para aproveitar vantagens como exclusividade e
              relatórios de progresso.
            </p>
          </div>
          <div className="faq-item">
            <h4>Assinantes de plano são cadastrados automaticamente?</h4>
            <p>
              Sim, assinantes de plano são cadastrados automaticamente,
              garantindo acesso imediato a todos os benefícios e priorização no
              atendimento. A senha de acesso será enviada por email e, após
              recebê-la, é recomendado que você edite a senha para garantir a
              segurança da sua conta.
            </p>
          </div>
        </div>
      </section> */}

      <button
        id="back-to-top"
        onClick={scrollToTop}
        style={{
          display: "none",
          position: "fixed",
          bottom: "120px",
          right: "20px",
          zIndex: "1000",
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ↑ Voltar ao topo
      </button>
    </div>
  );
};

export default Home;
