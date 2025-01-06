import React from "react";
import "../home/Home.css";
const Consultoria = () => {
  return (
    <div className="consultoria-container">
      <header className="consultoria-header">
        <h1 className="consultoria-title">
          Consultoria e Criação de Projetos TI
        </h1>
        <p className="consultoria-subtitle">
          Especialistas em React, JavaScript, TypeScript e manutenção.
        </p>
      </header>

      <section className="consultoria-section">
        <h2 className="consultoria-section-title">Nossos Serviços</h2>
        <ul className="consultoria-list">
          <li className="consultoria-list-item">
            <strong>Criação de Projetos:</strong> Desenvolvemos aplicações web
            modernas e escaláveis.
          </li>
          <li className="consultoria-list-item">
            <strong>Consultoria:</strong> Estratégias para otimização e
            modernização de projetos.
          </li>
          <li className="consultoria-list-item">
            <strong>Manutenção:</strong> Suporte contínuo e melhorias em
            sistemas existentes.
          </li>
          <li className="consultoria-list-item">
            <strong>Tecnologias:</strong> Especialistas em React, JavaScript e
            TypeScript.
          </li>
        </ul>
      </section>

      <section className="consultoria-section">
        <h2 className="consultoria-section-title">Entre em Contato</h2>
        <form className="consultoria-form">
          <input
            type="text"
            placeholder="Seu Nome"
            className="consultoria-input"
          />
          <input
            type="email"
            placeholder="Seu E-mail"
            className="consultoria-input"
          />
          <textarea
            placeholder="Sua Mensagem"
            rows="5"
            className="consultoria-textarea"
          />
          <button type="submit" className="consultoria-button">
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
};

export default Consultoria;
