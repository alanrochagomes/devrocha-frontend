import React from "react";
import "./Contato.css";

const Contato = () => {
  return (
    <div className="contato-container">
      <h1>Contato</h1>

      <div className="contato-info">
        <div className="info-item">
          {/* TODO: <div className="icon-wrapper">
            <i className="far fa-envelope"></i>
          </div> */}
          <div className="info-content">
            <h3>E-mail</h3>
            <p>nettcorpsolutions@mail.com</p>
          </div>
        </div>

        <div className="info-item">
          {/* TODO: <div className="icon-wrapper">
            <i className="fab fa-whatsapp"></i>
          </div> */}
          <div className="info-content">
            <h3>WhatsApp</h3>
            <p>(21) 998579960</p>
          </div>
        </div>

        <div className="info-item">
          {/* TODO: <div className="icon-wrapper">
            <i className="fas fa-phone-alt"></i>
          </div> */}
          <div className="info-content">
            <h3>Telefone</h3>
            <p>(21) 9857-9960</p>
          </div>
        </div>
      </div>

      <div className="formulario-contato">
        <h2>Formulário de Contato</h2>
        <p>Envie sua mensagem abaixo através do formulário de contato.</p>

        <form>
          <div className="form-group">
            <label>Nome Completo</label>
            <input type="text" placeholder="Nome e Sobrenome" />
          </div>

          <div className="form-group">
            <label>E-mail</label>
            <input type="email" placeholder="nome@email.com" />
          </div>

          <div className="form-group cargo-empresa">
            <div>
              <label>Cargo</label>
              <input type="text" placeholder="Gerente" />
            </div>
            <span className="na"></span>
            <div>
              <label>Empresa</label>
              <input type="text" placeholder="Empresa" />
            </div>
          </div>

          <div className="form-group">
            <label>Orçamento</label>
            <select>
              <option value="">Selecione um valor</option>
              <option value="1">Até R$ 50</option>
              <option value="2">Até R$ 100</option>
              <option value="3">Até R$ 500</option>
              <option value="4">Até R$ 1.000</option>
              <option value="5">Até R$ 5.000</option>
              <option value="6">R$ 5.000 - R$ 10.000</option>
              <option value="7">R$ 10.000 - R$ 20.000</option>
              <option value="8">Acima de R$ 20.000</option>
            </select>
          </div>

          <div className="form-group">
            <label>Descrição do projeto</label>
            <textarea
              placeholder="Aqui você pode descrever um pouco sobre o projeto, detalhes como objetivos, prazos e referências."
              rows="4"
            ></textarea>
          </div>

          <div className="recaptcha"></div>

          <button type="submit" className="enviar-btn">
            Enviar mensagem
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contato;
