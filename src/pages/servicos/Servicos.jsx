import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Servicos.css";
import api from "../../api/api";

const Servicos = () => {
  const [planoTipo, setPlanoTipo] = useState("mensal");
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    planoInteresse: "",
    tipoServico: "",
    tipoPagamento: "",
    prazo: "",
    orcamento: "",
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
    try {
      const response = await api.post("/services/request", formData);
      alert("Solicitação enviada com sucesso! Em breve entraremos em contato.");
      setFormData({
        nome: "",
        telefone: "",
        email: "",
        planoInteresse: "",
        tipoServico: "",
        tipoPagamento: "",
        prazo: "",
        orcamento: "",
        mensagem: "",
        autorizouContato: false,
      });
    } catch (error) {
      alert("Erro ao enviar solicitação. Por favor, tente novamente.");
      console.error("Erro:", error);
    }
  };

  const scrollToSolicitacao = () => {
    document.querySelector(".solicitar-site").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ============= Planos ===================

  const planos = [
    {
      titulo: "Básico",
      preco: planoTipo === "mensal" ? "R$129,90/mês" : "R$1.558,80/ano",
      features: [
        "Site Responsivo",
        "5 páginas",
        "Blog Integrado",
        "Integração Básica",
        "Suporte 24x5",
      ],
      destaque: false,
      link:
        planoTipo === "mensal"
          ? "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c93808495be9ff00195c89352ff04f0"
          : "https://mpago.la/2L8UndZ",
    },
    {
      titulo: "Standard",
      preco: planoTipo === "mensal" ? "R$149,90/mês" : "R$1.798,80/ano",
      features: [
        "Site Responsivo",
        "10 páginas",
        "Blog Integrado",
        "Integrações",
        "Suporte 24x6",
      ],
      destaque: true,
      link:
        planoTipo === "mensal"
          ? "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c93808495af2b800195b503522403a6"
          : "https://mpago.la/12wn2QA",
    },
    {
      titulo: "Premium",
      preco: planoTipo === "mensal" ? "R$169,90/mês" : "R$2.038,80/ano",
      features: [
        "Site Responsivo",
        "Páginas Ilimitadas",
        "Domínio Grátis",
        "Suporte 24x7",
        "Painel Administrativo",
        "Blog Integrado",
        "E-commerce",
        "Integrações",
        "API Personalizada",
      ],
      destaque: false,
      link:
        planoTipo === "mensal"
          ? "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c938084955cc4800195b503ba2e2751"
          : "https://mpago.la/2HShiJz",
    },
  ];

  const servicos = [
    {
      titulo: "Manutenção Mensal",
      preco: "A partir de R$ 99,90/mês",
      descricao: "Suporte e atualizações contínuas",
      icon: "🔧",
      features: ["Backup Diário", "Monitoramento 24/7", "Suporte Técnico"],
      categorias: ["todos", "manutencao"],
    },

    {
      titulo: "Desenvolvimento Web",
      preco: "Preço sob consulta",
      descricao: "Sites profissionais e responsivos",
      icon: "💻",
      features: ["Design Responsivo", "SEO Otimizado", "Painel Administrativo"],
      categorias: ["todos", "criacao"],
    },
    // {
    //   titulo: "E-commerce",
    //   preco: "A partir de R$ 4.500",
    //   descricao: "Sua loja virtual completa",
    //   icon: "🛍️",
    //   features: [
    //     "Pagamentos Online",
    //     "Gestão de Estoque",
    //     "Múltiplos Vendedores",
    //   ],
    //   categorias: ["todos", "criacao"],
    // },
    {
      titulo: "Aplicações Web",
      preco: "Preço sob consulta",
      descricao: "Sistemas web personalizados",
      icon: "⚙️",
      features: ["Dashboard Personalizado", "APIs RESTful", "Integrações"],
      categorias: ["todos", "criacao"],
    },

    {
      titulo: "Landing Pages",
      preco: "Preço sob consulta",
      descricao: "Páginas de alta conversão",
      icon: "🎯",
      features: ["A/B Testing", "Otimização de Conversão", "Analytics"],
      categorias: ["todos", "criacao"],
    },

    {
      titulo: "UI/UX Design",
      preco: "Preço sob consulta",
      descricao: "Design moderno e intuitivo",
      icon: "🎨",
      features: ["Protótipos", "Design System", "Testes de Usabilidade"],
      categorias: ["todos", "design"],
    },

    // {
    //   titulo: "Marketing Digital",
    //   preco: "A partir de R$ 800/mês",
    //   descricao: "Estratégias para crescimento",
    //   icon: "📈",
    //   features: ["SEO", "Google Ads", "Analytics"],
    //   categorias: ["todos", "marketing"],
    // },

    {
      titulo: "Hospedagem Cloud",
      preco: "Preço sob consulta",
      descricao: "Infraestrutura escalável",
      icon: "☁️",
      features: ["SSL Gratuito", "CDN Global", "Backup Automático"],
      categorias: ["todos", "infraestrutura"],
    },
  ];

  // const portfolioCategorias = [
  //   {
  //     titulo: "Pet Shops",
  //     imagem:
  //       "https://img.freepik.com/free-vector/hand-drawn-pet-shop-pattern-background_23-2150842425.jpg?semt=ais_hybrid",
  //     categorias: ["todos", "criacao"],
  //   },
  //   {
  //     titulo: "Colégios",
  //     imagem: "/images/colegio.jpg",
  //     categorias: ["todos", "criacao"],
  //   },
  //   {
  //     titulo: "Contabilidade",
  //     imagem: "/images/contabilidade.jpg",
  //     categorias: ["todos", "criacao"],
  //   },
  //   {
  //     titulo: "Barbearias",
  //     imagem: "/images/barbearia.jpg",
  //     categorias: ["todos", "criacao"],
  //   },
  //   {
  //     titulo: "Advocacia",
  //     imagem: "/images/advocacia.jpg",
  //     categorias: ["todos", "criacao"],
  //   },
  //   {
  //     titulo: "Academias",
  //     imagem: "/images/academia.jpg",
  //     categorias: ["todos", "criacao"],
  //   },
  //   {
  //     titulo: "Medicina",
  //     imagem: "/images/medicina.jpg",
  //     categorias: ["todos", "criacao"],
  //   },
  //   {
  //     titulo: "Igrejas",
  //     imagem: "/images/igreja.jpg",
  //     categorias: ["todos", "criacao"],
  //   },
  //   {
  //     titulo: "TI e Informática",
  //     imagem: "/images/ti.jpg",
  //     categorias: ["todos", "criacao"],
  //   },
  //   {
  //     titulo: "Supermercados",
  //     imagem: "/images/supermercado.jpg",
  //     categorias: ["todos", "criacao"],
  //   },
  //   {
  //     titulo: "Salões de Beleza",
  //     imagem: "/images/salao.jpg",
  //     categorias: ["todos", "criacao"],
  //   },
  //   {
  //     titulo: "Restaurantes",
  //     imagem: "/images/restaurante.jpg",
  //     categorias: ["todos", "criacao"],
  //   },
  // ];

  const faqQuestions = [
    // {
    //   question: "Usuários cadastrados têm prioridade?",
    //   answer:
    //     "Sim, usuários cadastrados têm prioridade no atendimento. No entanto, usuários não cadastrados também serão atendidos da mesma forma. Não é necessário se cadastrar para solicitar serviços, mas é recomendado para aproveitar vantagens como exclusividade e relatórios de progresso.",
    // },
    // {
    //   question: "Assinantes de plano são cadastrados automaticamente?",
    //   answer:
    //     "Sim, assinantes de plano são cadastrados automaticamente, garantindo acesso imediato a todos os benefícios e priorização no atendimento. A senha de acesso será enviada por email e, após recebê-la, é recomendado que você edite a senha para garantir a segurança da sua conta.",
    // },

    {
      question: "Quanto tempo demora para se criar um site?",
      answer:
        "O prazo médio é de 30 a 45 dias, podendo variar de acordo com a complexidade do projeto e a agilidade na entrega dos conteúdos.",
    },
    {
      question: "Meu site aparecerá no Google?",
      answer:
        "Sim, está incluso em nosso trabalho de desenvolvimento de sites cadastrar seu site no Google e otimizar ele de acordo com as boas práticas de SEO.",
    },
    {
      question: "Quais tipos de sites vocês desenvolvem?",
      answer:
        "Desenvolvemos diversos tipos de sites, incluindo sites institucionais, e-commerce, landing pages, blogs, portais e sistemas web personalizados.",
    },
    {
      question:
        "Vou conseguir fazer alterações no meu próprio site sem dificuldades?",
      answer:
        "Sim, desenvolvemos sites com painéis administrativos intuitivos e oferecemos treinamento para que você possa gerenciar seu conteúdo facilmente.",
    },
    {
      question: "Site One Page é bom para minha empresa?",
      answer:
        "Sites One Page são excelentes para empresas que desejam apresentar suas informações de forma direta e objetiva. São ideais para negócios que não necessitam de muitas páginas internas.",
    },
    {
      question: "Quais funcionalidades adicionais vocês oferecem?",
      answer:
        "Oferecemos diversas funcionalidades como formulários de contato, integração com redes sociais, chat online, otimização SEO, área administrativa, blog, galeria de fotos e mais.",
    },
    {
      question: "Meu site será responsivo em dispositivos móveis?",
      answer:
        "Sim, todos os nossos sites são desenvolvidos com design responsivo, garantindo uma excelente experiência em qualquer dispositivo (computadores, tablets e smartphones).",
    },

    {
      question: "Um site de sucesso precisará de atualizações frequentes?",
      answer:
        "Sim, recomendamos atualizações regulares tanto de conteúdo quanto de tecnologia para manter seu site seguro, atual e bem posicionado nos buscadores.",
    },
  ];

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
              <div className="servico-icon">{servico.icon}</div>
              <h3>{servico.titulo}</h3>
              <p className="servico-preco">{servico.preco}</p>
              <p className="servico-descricao">{servico.descricao}</p>
              <ul className="servico-features">
                {servico.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <Link
                to="/contato"
                className="servico-btn"
                rel="noopener noreferrer"
              >
                Saiba Mais
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="animation-section">
        <div className="animation-container">
          <img
            src="https://cdn.dribbble.com/users/1059583/screenshots/4171367/coding-freak.gif"
            alt="Serviços Web Animation"
            className="service-animation"
          />
        </div>
      </section>

      <section className="portfolio-section">
        {/* <h2>Portfólio por Segmento</h2> */}
        {/* TODO: <div className="categorias-filtro">
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
        </div> */}

        {/* TODO: <div className="portfolio-grid">
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
        </div> */}
      </section>

      <section className="planos-section">
        <div className="planos-header">
          <h2>Suporte, manutenção e atualizações mensais contínuas.</h2>
          <div className="planos-toggle">
            <button
              className={planoTipo === "mensal" ? "active" : ""}
              onClick={() => setPlanoTipo("mensal")}
            >
              MENSAL
            </button>
            <button
              className={planoTipo === "anual" ? "active" : ""}
              onClick={() => setPlanoTipo("anual")}
            >
              ANUAL
              <span className="economia">ECONOMIZE ATÉ 36%</span>
            </button>
          </div>
        </div>

        <div className="planos-grid">
          {planos.map((plano, index) => (
            <div
              key={index}
              className={`plano-card ${plano.destaque ? "destaque" : ""}`}
            >
              <h3>{plano.titulo}</h3>
              <div className="plano-preco">
                <span className="preco">{plano.preco}</span>
              </div>
              <ul className="plano-features">
                {plano.features.map((feature, i) => (
                  <li key={i}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={plano.link}
                className="plano-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escolher Plano
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TODO: <section className="animation-section">
        <div className="animation-container">
          <img
            src="https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Designer.gif"
            alt="Site Request Animation"
            className="request-animation"
          />
        </div>
      </section>

      <section className="solicitar-site">
        <h2>SOLICITAR CRIAÇÃO DE SITE</h2>
        <form className="solicitar-form" onSubmit={handleSubmit}>
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
              Telefone / WhatsApp + DDD <span className="required">*</span>
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
              Qual plano você tem interesse? <span className="required">*</span>
            </label>
            <select
              name="planoInteresse"
              value={formData.planoInteresse}
              onChange={handleInputChange}
              required
            >
              <option value="">- Selecione Uma Opção -</option>
              <option value="nenhum">Nenhum</option>
              <option value="basico">Plano Básico</option>
              <option value="standard">Plano Standard</option>
              <option value="premium">Plano Premium</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              Qual tipo de serviço você deseja?{" "}
              <span className="required">*</span>
            </label>
            <select
              name="tipoServico"
              value={formData.tipoServico}
              onChange={handleInputChange}
              required
            >
              <option value="">- Selecione Uma Opção -</option>
              <option value="desenvolvimento-web">Desenvolvimento Web</option>
              <option value="ecommerce">E-commerce</option>
              <option value="aplicacoes-web">Aplicações Web</option>
              <option value="ui-ux">UI/UX Design</option>
              <option value="manutencao">Manutenção Mensal</option>
              <option value="marketing">Marketing Digital</option>
              <option value="landing-pages">Landing Pages</option>
              <option value="hospedagem">Hospedagem Cloud</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              Tipo de Pagamento Preferido <span className="required">*</span>
            </label>
            <select
              name="tipoPagamento"
              value={formData.tipoPagamento}
              onChange={handleInputChange}
              required
            >
              <option value="">- Selecione Uma Opção -</option>
              <option value="avista">À Vista</option>
              <option value="mensal">Mensal</option>
              <option value="anual">Anual (Economia de até 36%)</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              Prazo Desejado <span className="required">*</span>
            </label>
            <select
              name="prazo"
              value={formData.prazo}
              onChange={handleInputChange}
              required
            >
              <option value="">- Selecione Uma Opção -</option>
              <option value="urgente">Urgente (até 15 dias)</option>
              <option value="normal">Normal (30 a 45 dias)</option>
              <option value="flexivel">Flexível (45+ dias)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Orçamento Aproximado</label>
            <select
              name="orcamento"
              value={formData.orcamento}
              onChange={handleInputChange}
            >
              <option value="">- Selecione Uma Opção -</option>
              <option value="50">R$ 50</option>
              <option value="100">R$ 100</option>
              <option value="1000">R$ 1.000</option>
              <option value="ate-3000">Até R$ 3.000</option>
              <option value="3000-5000">R$ 3.000 a R$ 5.000</option>
              <option value="5000-10000">R$ 5.000 a R$ 10.000</option>
              <option value="acima-10000">Acima de R$ 10.000</option>
              <option value="Preço sob consulta">Preço sob consulta</option>
            </select>
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
              placeholder="Descreva seu projeto, funcionalidades desejadas e outros detalhes importantes"
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

          <button type="submit" className="solicitar-btn">
            Solicitar Orçamento
          </button>
        </form>
      </section> */}

      <section className="faq-section">
        <div className="faq-header">
          <span className="faq-tag">FAQ</span>
          <h2>Perguntas Frequentes</h2>
        </div>

        <div className="faq-container">
          {faqQuestions.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeQuestion === index ? "active" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() =>
                  setActiveQuestion(activeQuestion === index ? null : index)
                }
              >
                <h3
                  style={{
                    color: activeQuestion === index ? "#FF6B6B" : "#333",
                  }}
                >
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
              <div
                className={`faq-answer ${
                  activeQuestion === index ? "show" : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
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

export default Servicos;
