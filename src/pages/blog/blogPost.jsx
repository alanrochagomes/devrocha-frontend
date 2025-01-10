import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostData, getLatestPosts } from "./service/blogPostService";
import api from "../../api/api";
import "./blogPost.css";
import banner from "../../assets/img/NettCorpSolutions - logo.png";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostData(slug);
  const recentPosts = getLatestPosts();

  const [commentForm, setCommentForm] = useState({
    comentario: "",
    nome: "",
    email: "",
    site: "",
    saveData: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando comentário:", commentForm);

    try {
      const dadosParaEnviar = {
        nome: commentForm.nome,
        email: commentForm.email,
        comentario: commentForm.comentario,
        site: commentForm.site,
        postId: slug || "post-padrao",
      };

      console.log("Dados formatados para envio:", dadosParaEnviar);

      const response = await api.post("/blog/comment", dadosParaEnviar);
      console.log("Resposta do servidor:", response);

      setCommentForm({
        comentario: "",
        nome: "",
        email: "",
        site: "",
        saveData: false,
      });

      alert("Comentário enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar comentário:", error);
      alert("Erro ao enviar comentário. Por favor, tente novamente.");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCommentForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <>
      <div className="blog-post-header">
        <h1 className="blog-post-title">{post.title}</h1>
        <div className="blog-post-author">Por {post.author}</div>
      </div>

      <div className="blog-post-container">
        <main className="blog-post-content">
          <div className="blog-post-image">
            <img src={post.image} alt={post.title} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </main>

        <aside className="sidebar">
          {/* TODO: <div className="search-box">
            <input type="text" placeholder="Search..." />
            <button>Buscar</button>
          </div> */}

          {/* TODO:  <div className="latest-posts">
            <h3>Latest Post</h3>
            {recentPosts.map((post) => (
              <div key={post.id} className="post-item">
                <img src={post.image} alt={post.title} />
                <div className="post-item-content">
                  <h4>{post.title}</h4>
                  <span>{post.date}</span>
                </div>
              </div>
            ))}
          </div> */}

          {/* TODO: <div className="newsletter-box">
            <h3>Newsletter</h3>
            <p>Sign-up our newsletter to get free update, news or insight.</p>
            <input type="email" placeholder="Enter your email" />
            <button>Sign Up</button>
          </div> */}
        </aside>
      </div>

      <div className="comments-section">
        <div className="author-info">
          <img src={banner} alt="Equipe Editorial" className="author-avatar" />
          <div className="author-details">
            <h3>Equipe Editorial</h3>
            <p>
              A NettCorp Solutions é uma agência especializada em
              desenvolvimento, design e manutenção de sites, criando soluções
              personalizadas para cada cliente com base em suas necessidades e
              objetivos.
            </p>
          </div>
        </div>

        <div className="comments-form">
          <h2>Deixe um comentário</h2>
          <p className="required-notice">
            O seu endereço de e-mail não será publicado. Campos obrigatórios são
            marcados com *
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="comentario">Comentário *</label>
              <textarea
                id="comentario"
                name="comentario"
                value={commentForm.comentario}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="nome">Nome *</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={commentForm.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={commentForm.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="site">Site</label>
              <input
                type="text"
                id="site"
                name="site"
                value={commentForm.site}
                onChange={handleChange}
              />
            </div>

            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="saveData"
                name="saveData"
                checked={commentForm.saveData}
                onChange={handleChange}
              />
              <label htmlFor="saveData">
                Salvar meus dados neste navegador para a próxima vez que eu
                comentar.
              </label>
            </div>

            <button type="submit" className="submit-button">
              Publicar comentário
            </button>
          </form>
        </div>
      </div>

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
    </>
  );
};

export default BlogPost;
