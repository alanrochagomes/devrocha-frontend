import React, { useState } from "react";
import "./Servicos.css";

const Servicos = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const servicos = [
    {
      titulo: "Criação de Sites",
      preco: "A partir de R$ 2.500",
      descricao: "Sites profissionais e responsivos",
      categorias: ["todos", "criacao"],
    },
    {
      titulo: "Manutenção Mensal",
      preco: "A partir de R$ 200/mês",
      descricao: "Suporte e atualizações contínuas",
      categorias: ["todos", "manutencao"],
    },
    {
      titulo: "Otimização SEO",
      preco: "A partir de R$ 800",
      descricao: "Melhore seu ranking no Google",
      categorias: ["todos", "marketing"],
    },
  ];

  const portfolioCategorias = [
    {
      titulo: "Pet Shops",
      imagem: "/images/petshop.jpg",
      categorias: ["todos", "criacao"],
    },
    {
      titulo: "Colégios",
      imagem: "/images/colegio.jpg",
      categorias: ["todos", "criacao"],
    },
    {
      titulo: "Contabilidade",
      imagem: "/images/contabilidade.jpg",
      categorias: ["todos", "criacao"],
    },
    {
      titulo: "Barbearias",
      imagem: "/images/barbearia.jpg",
      categorias: ["todos", "criacao"],
    },
    {
      titulo: "Advocacia",
      imagem: "/images/advocacia.jpg",
      categorias: ["todos", "criacao"],
    },
    {
      titulo: "Academias",
      imagem: "/images/academia.jpg",
      categorias: ["todos", "criacao"],
    },
    {
      titulo: "Medicina",
      imagem: "/images/medicina.jpg",
      categorias: ["todos", "criacao"],
    },
    {
      titulo: "Igrejas",
      imagem: "/images/igreja.jpg",
      categorias: ["todos", "criacao"],
    },
    {
      titulo: "TI e Informática",
      imagem: "/images/ti.jpg",
      categorias: ["todos", "criacao"],
    },
    {
      titulo: "Supermercados",
      imagem: "/images/supermercado.jpg",
      categorias: ["todos", "criacao"],
    },
    {
      titulo: "Salões de Beleza",
      imagem: "/images/salao.jpg",
      categorias: ["todos", "criacao"],
    },
    {
      titulo: "Restaurantes",
      imagem: "/images/restaurante.jpg",
      categorias: ["todos", "criacao"],
    },
  ];

  const faqQuestions = [
    {
      question: "Meu site aparecerá no Google?",
      answer: "Sim, está incluso em nosso trabalho de desenvolvimento de sites cadastrar seu site no Google e otimizar ele de acordo com as boas práticas de SEO."
    },
    {
      question: "Quais tipos de sites vocês desenvolvem?",
      answer: "Desenvolvemos diversos tipos de sites, incluindo sites institucionais, e-commerce, landing pages, blogs, portais e sistemas web personalizados."
    },
    {
      question: "Vou conseguir fazer alterações no meu próprio site sem dificuldades?",
      answer: "Sim, desenvolvemos sites com painéis administrativos intuitivos e oferecemos treinamento para que você possa gerenciar seu conteúdo facilmente."
    },
    {
      question: "Site One Page é bom para minha empresa?",
      answer: "Sites One Page são excelentes para empresas que desejam apresentar suas informações de forma direta e objetiva. São ideais para negócios que não necessitam de muitas páginas internas."
    },
    {
      question: "Quais funcionalidades adicionais vocês oferecem?",
      answer: "Oferecemos diversas funcionalidades como formulários de contato, integração com redes sociais, chat online, otimização SEO, área administrativa, blog, galeria de fotos e mais."
    },
    {
      question: "Meu site será responsivo em dispositivos móveis?",
      answer: "Sim, todos os nossos sites são desenvolvidos com design responsivo, garantindo uma excelente experiência em qualquer dispositivo (computadores, tablets e smartphones)."
    },
    {
      question: "Quanto tempo demora para se criar um site?",
      answer: "O prazo médio é de 30 a 45 dias, podendo variar de acordo com a complexidade do projeto e a agilidade na entrega dos conteúdos."
    },
    {
      question: "Um site de sucesso precisará de atualizações frequentes?",
      answer: "Sim, recomendamos atualizações regulares tanto de conteúdo quanto de tecnologia para manter seu site seguro, atual e bem posicionado nos buscadores."
    }
  ];

  return (
    <div className="servicos-container">
      <section className="servicos-header">
        <h1>Nossos Serviços</h1>
        <p>Soluções completas para seu negócio online</p>
      </section>

      <section className="servicos-principais">
        <h2>Serviços Oferecidos</h2>
        <div className="servicos-grid">
          {servicos.map((servico, index) => (
            <div key={index} className="servico-card">
              <h3>{servico.titulo}</h3>
              <p className="servico-preco">{servico.preco}</p>
              <p className="servico-descricao">{servico.descricao}</p>
              <button className="servico-btn">Saiba Mais</button>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <h2>Portfólio por Segmento</h2>
        <div className="categorias-filtro">
          <button
            className={categoriaAtiva === "todos" ? "ativo" : ""}
            onClick={() => setCategoriaAtiva("todos")}
          >
            Todos
          </button>
          <button
            className={categoriaAtiva === "criacao" ? "ativo" : ""}
            onClick={() => setCategoriaAtiva("criacao")}
          >
            Criação de Sites
          </button>
          <button
            className={categoriaAtiva === "manutencao" ? "ativo" : ""}
            onClick={() => setCategoriaAtiva("manutencao")}
          >
            Manutenção
          </button>
        </div>

        <div className="portfolio-grid">
          {portfolioCategorias
            .filter((item) => item.categorias.includes(categoriaAtiva))
            .map((item, index) => (
              <div key={index} className="portfolio-card">
                <div className="portfolio-imagem">
                  <img src={item.imagem} alt={item.titulo} />
                </div>
                <h3>{item.titulo}</h3>
                <button className="portfolio-btn">Ver Exemplos</button>
              </div>
            ))}
        </div>
      </section>

      <section className="solicitar-site">
        <h2>SOLICITAR CRIAÇÃO DE SITE</h2>
        <form className="solicitar-form">
          <div className="form-group">
            <label>
              Nome Completo <span className="required">*</span>
            </label>
            <input type="text" required placeholder="Seu nome completo" />
          </div>

          <div className="form-group">
            <label>
              Telefone / WhatsApp + DDD <span className="required">*</span>
            </label>
            <input type="tel" required placeholder="(00) 00000-0000" />
          </div>

          <div className="form-group">
            <label>
              Qual tipo de site você deseja? <span className="required">*</span>
            </label>
            <select required>
              <option value="">- Selecione Uma Opção -</option>
              <option value="institucional">Site Institucional</option>
              <option value="ecommerce">E-commerce</option>
              <option value="landing">Landing Page</option>
              <option value="blog">Blog</option>
              <option value="portal">Portal</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              E-mail <span className="required">*</span>
            </label>
            <input type="email" required placeholder="seu@email.com" />
          </div>

          <div className="form-group">
            <label>
              Mensagem <span className="required">*</span>
            </label>
            <textarea
              required
              rows="5"
              placeholder="Descreva seu projeto"
            ></textarea>
          </div>

          <div className="form-group checkbox">
            <label>
              <input type="checkbox" required />
              Autorizo que este site armazene minhas informações enviadas para
              que possam responder o meu contato.
            </label>
          </div>

          <button type="submit" className="solicitar-btn">
            Solicitar Orçamento
          </button>
        </form>
      </section>

      <section className="faq-section">
        <div className="faq-header">
          <span className="faq-tag">FAQ</span>
          <h2>Perguntas Frequentes</h2>
        </div>

        <div className="faq-container">
          {faqQuestions.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeQuestion === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question"
                onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
              >
                <h3 style={{ color: activeQuestion === index ? '#FF6B6B' : '#333' }}>
                  {faq.question}
                </h3>
                <button className="faq-toggle">
                  {activeQuestion === index ? (
                    <img src="/images/minus.svg" alt="Fechar" />
                  ) : (
                    <img src="/images/plus.svg" alt="Abrir" />
                  )}
                </button>
              </div>
              <div className={`faq-answer ${activeQuestion === index ? 'show' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Servicos;
