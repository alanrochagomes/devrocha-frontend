import React, { useState, useEffect } from "react";
import api from "../../api/api";
import "./Contato.css";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
    autorizouContato: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando dados do formulário:", formData);

    try {
      const response = await api.post("/contato/submit", formData);
      console.log("Resposta do servidor:", response);

      alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
        autorizouContato: false,
      });
    } catch (error) {
      console.error("Erro detalhado:", error);
      alert("Erro ao enviar mensagem. Por favor, tente novamente.");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
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

  return (
    <div className="contato-container">
      <section className="contato-form-section">
        <h2>Formulário de Contato</h2>
        <form className="contato-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Nome Completo <span className="required">*</span>
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              required
              placeholder="Seu nome completo"
            />
          </div>

          <div className="form-group">
            <label>
              E-mail <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="seu@email.com"
            />
          </div>

          <div className="form-group">
            <label>
              Telefone / WhatsApp <span className="required">*</span>
            </label>
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleInputChange}
              required
              placeholder="(00) 00000-0000"
            />
          </div>

          <div className="form-group">
            <label>
              Assunto <span className="required">*</span>
            </label>
            <input
              type="text"
              name="assunto"
              value={formData.assunto}
              onChange={handleInputChange}
              required
              placeholder="Assunto da mensagem"
            />
          </div>

          <div className="form-group">
            <label>
              Mensagem <span className="required">*</span>
            </label>
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
              required
              rows="5"
              placeholder="Digite sua mensagem"
            ></textarea>
          </div>

          <div className="form-group checkbox">
            <label>
              <input
                type="checkbox"
                name="autorizouContato"
                checked={formData.autorizouContato}
                onChange={handleInputChange}
                required
              />
              Autorizo que este site armazene minhas informações enviadas para
              que possam responder o meu contato.
            </label>
          </div>

          <button type="submit" className="enviar-btn">
            Enviar Mensagem
          </button>
        </form>
      </section>

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
        ↑ Topo
      </button>
    </div>
  );
};

export default Contato;
