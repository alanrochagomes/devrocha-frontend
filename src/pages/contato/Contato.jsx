import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import "./Contato.css";
import { useForm, ValidationError } from "@formspree/react";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
    autorizouContato: false,
  });

  const [state, handleSubmit] = useForm("xeoaarbk");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    handleSubmit(e)
      .then(() => {
        setSubmitted(true);
        toast.success("Mensagem enviada com sucesso!");
        setFormData({
          nome: "",
          email: "",
          assunto: "",
          mensagem: "",
        });
      })
      .catch((error) => {
        console.error("Erro ao enviar a mensagem:", error);
        toast.error("Falha ao enviar a mensagem. Tente novamente.");
      });
  };

  const handleSubmitEmailjs = (e) => {
    e.preventDefault();

    const emailData = {
      to_name: "Equipe DevRocha",
      from_name: formData.nome,
      from_email: formData.email,
      subject: formData.assunto,
      message: formData.mensagem,
    };

    emailjs.send("service_0btkjcl", "template_60sj9rj", emailData).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Mensagem enviada com sucesso!");

        setFormData({
          nome: "",
          email: "",
          assunto: "",
          mensagem: "",
        });
      },
      (error) => {
        console.log("FAILED...", error);
        toast.error("Falha ao enviar a mensagem. Tente novamente.");
      }
    );
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

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  if (submitted) {
    return (
      <div className="contato-container">
        <ToastContainer />
        <h1>Formulário de Contato</h1>
        <p>Obrigado por entrar em contato!</p>
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
  }

  return (
    <div className="contato-container">
      <ToastContainer />
      <h1>Entre em Contato</h1>
      <p className="contact-description">
        Estamos aqui para ajudar! Preencha o formulário abaixo e entraremos em
        contato o mais breve possível.
      </p>
      <div className="contato-info">
        <div className="info-item">
          <span className="icon-wrapper">
            <a href="mailto:contato@devrocha.com.br" title="Enviar E-mail">
              <i className="fas fa-envelope"></i>
            </a>
          </span>
          <div className="info-content">
            <h3>
              <a
                href="mailto:contato@devrocha.com.br"
                style={{ textDecoration: "none", color: "#0066cc" }}
              >
                E-mail
              </a>
            </h3>
            <p>contato@devrocha.com.br</p>
          </div>
        </div>

        {/* <div className="info-item">
          <span className="icon-wrapper">
            <a
              href="https://wa.me/21998579960"
              title="Enviar WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </span>
          <div className="info-content">
            <h3>
              <a
                href="https://wa.me/21998579960"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#0066cc" }}
              >
                WhatsApp
              </a>
            </h3>
            <p>(21) 9985-79960</p>
          </div>
        </div> */}

        <div className="info-item">
          <span className="icon-wrapper">
            <a href="tel:+5521998579960" title="Ligar">
              <i className="fas fa-phone"></i>
            </a>
          </span>
          <div className="info-content">
            <h3>
              <a
                href="tel:+5521998579960"
                style={{ textDecoration: "none", color: "#0066cc" }}
              >
                Telefone
              </a>
            </h3>
            <p>(21) 9985-79960</p>
          </div>
        </div>
      </div>
      <section className="contato-form-section">
        <h2>Formulário de Contato</h2>
        <form id="contact-form" onSubmit={handleFormSubmit}>
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

          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <ValidationError
            prefix="Mensagem"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="enviar-btn"
          >
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
        ↑ Voltar ao topo
      </button>
    </div>
  );
};

export default Contato;
