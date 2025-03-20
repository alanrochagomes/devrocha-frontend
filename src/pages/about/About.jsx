import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Quem Somos</h1>

        <div className="about-section">
          <h2>Nossa História</h2>
          <p>
            A <strong>DevRocha</strong> é especializado em soluções web e
            tecnológicas, com o objetivo de transformar ideias em realidade
            digital. A jornada é marcada pelo compromisso com a inovação e a
            excelência em cada projeto realizado.
          </p>
        </div>

        <div className="about-section">
          <h2>Nossa Missão</h2>
          <p>
            Desenvolver soluções tecnológicas inovadoras e de alta qualidade,
            contribuindo para o sucesso e crescimento digital de nossos
            clientes, sempre priorizando a excelência técnica e a satisfação do
            usuário final.
          </p>
        </div>

        <div className="about-section">
          <h2>Nossos Serviços</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Desenvolvimento Web</h3>
              <ul>
                <li>Sites institucionais</li>
                <li>E-commerces</li>
                <li>Sistemas web personalizados</li>
                <li>Aplicações web progressivas (PWA)</li>
                <li>Integrações com APIs</li>
              </ul>
            </div>

            <div className="service-item">
              <h3>Web Design</h3>
              <ul>
                <li>Design responsivo</li>
                <li>UI/UX Design</li>
                <li>Identidade visual</li>
                <li>Prototipagem</li>
                <li>Redesign de interfaces</li>
              </ul>
            </div>

            <div className="service-item">
              <h3>Manutenção</h3>
              <ul>
                <li>Manutenção preventiva</li>
                <li>Atualizações de segurança</li>
                <li>Otimização de performance</li>
                <li>Backup e recuperação</li>
                <li>Suporte técnico</li>
              </ul>
            </div>

            {/* <div className="service-item">
              <h3>Consultoria</h3>
              <ul>
                <li>Análise de requisitos</li>
                <li>Planejamento estratégico</li>
                <li>Arquitetura de software</li>
                <li>Segurança da informação</li>
                <li>Transformação digital</li>
              </ul>
            </div> */}
          </div>
        </div>

        <div className="about-section">
          <h2>Nossa Expertise</h2>
          <p>
            Contamos com uma equipe altamente qualificada e experiente em
            diversas tecnologias:
          </p>
          <div className="expertise-list">
            <ul>
              <li>Desenvolvimento Frontend (React, Angular, Vue.js)</li>
              <li>Desenvolvimento Backend (Node.js, Python, Java)</li>
              <li>Banco de Dados (MySQL, PostgreSQL, MongoDB)</li>
              <li>Cloud Computing (AWS, Google Cloud, Azure)</li>
              <li>DevOps e Integração Contínua</li>
            </ul>
          </div>
        </div>

        <div className="about-section">
          <h2>Nossos Valores</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Inovação</h3>
              <p>
                Buscamos constantemente novas tecnologias e soluções criativas.
              </p>
            </div>
            <div className="value-item">
              <h3>Qualidade</h3>
              <p>Comprometimento com a excelência em cada linha de código.</p>
            </div>
            <div className="value-item">
              <h3>Transparência</h3>
              <p>Comunicação clara e honesta em todas as etapas do projeto.</p>
            </div>
            <div className="value-item">
              <h3>Compromisso</h3>
              <p>Dedicação total à satisfação e sucesso de nossos clientes.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Por que nos escolher?</h2>
          <ul className="choose-us-list">
            <li>Experiência comprovada em projetos de diferentes escalas</li>
            <li>Equipe altamente qualificada e em constante atualização</li>
            <li>Metodologias ágeis para desenvolvimento eficiente</li>
            <li>Suporte técnico especializado</li>
            <li>Compromisso com prazos e qualidade</li>
            <li>Soluções personalizadas para cada necessidade</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
