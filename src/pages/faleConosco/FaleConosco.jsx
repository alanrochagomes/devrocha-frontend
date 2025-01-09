import React, { useState } from "react";
import "./FaleConosco.css";
import api from "../../api/api";

const FaleConosco = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    tipoSolicitacao: "",
    detalhes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/faleconosco/submit", formData);
      alert("Solicitação enviada com sucesso! Em breve entraremos em contato.");
      setFormData({
        nome: "",
        email: "",
        tipoSolicitacao: "",
        detalhes: "",
      });
    } catch (error) {
      alert("Erro ao enviar solicitação. Por favor, tente novamente.");
      console.error("Erro:", error);
    }
  };

  return (
    <div className="fale-conosco-container">
      <h1>Fale Conosco</h1>
      <p className="subtitulo">
        Precisa de ajuda com sua conta? Estamos aqui para ajudar!
      </p>

      <div className="formulario-fale-conosco">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome Completo</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              placeholder="Seu nome completo"
              required
            />
          </div>

          <div className="form-group">
            <label>E-mail cadastrado</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="seu.email@exemplo.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Tipo de Solicitação</label>
            <select
              name="tipoSolicitacao"
              value={formData.tipoSolicitacao}
              onChange={handleInputChange}
              required
            >
              <option value="">Selecione o tipo de solicitação</option>
              <option value="alteracao_nome">Alteração de Nome</option>
              <option value="alteracao_email">Alteração de E-mail</option>
              <option value="alteracao_senha">Alteração de Senha</option>
              <option value="duvida">Dúvida</option>
              <option value="outro">Outro Assunto</option>
            </select>
          </div>

          <div className="form-group">
            <label>Detalhes da Solicitação</label>
            <textarea
              name="detalhes"
              value={formData.detalhes}
              onChange={handleInputChange}
              placeholder="Descreva detalhadamente sua solicitação. Quanto mais informações você fornecer, melhor poderemos ajudá-lo."
              rows="5"
              required
            ></textarea>
          </div>

          {formData.tipoSolicitacao === "alteracao_senha" && (
            <div className="aviso-senha">
              <p>
                <i className="fas fa-info-circle"></i>
                Após enviar sua solicitação, você receberá um e-mail com
                instruções para redefinir sua senha.
              </p>
            </div>
          )}

          <button type="submit" className="enviar-btn">
            Enviar Solicitação
          </button>
        </form>
      </div>

      <div className="info-adicional">
        <h3>Outras Formas de Contato</h3>
        <div className="contato-alternativo">
          <div className="contato-item">
            <i className="far fa-clock"></i>
            <p>Tempo médio de resposta: 24 horas úteis</p>
          </div>
          <div className="contato-item">
            <i className="far fa-envelope"></i>
            <p>atendimentonettcorpsolutions@mail.com</p>
          </div>
          <div className="contato-item">
            <i className="fab fa-whatsapp"></i>
            <p>(21) 998579960</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaleConosco;
