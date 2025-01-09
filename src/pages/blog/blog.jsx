import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "./service/blogService";
import api from "../../api/api";
import "../blog/blog.css";

const BlogPage = () => {
  const blogPosts = getAllPosts();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    site: "",
    comentario: "",
    postId: "default-post",
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
    console.log("Iniciando envio do comentário...");
    console.log("Dados a serem enviados:", formData);

    try {
      // Primeiro testa a conexão
      console.log("Testando conexão...");
      const testeConexao = await api.get("/blog/test");
      console.log("Teste de conexão:", testeConexao);

      // Envia o comentário
      console.log("Enviando comentário para o servidor...");
      const response = await api.post("/blog/comment", formData);
      console.log("Resposta do servidor:", response);

      alert("Comentário enviado com sucesso!");
      setFormData({
        nome: "",
        email: "",
        site: "",
        comentario: "",
        postId: "default-post",
      });
    } catch (error) {
      console.error("Erro completo:", error);
      console.error("Detalhes do erro:", {
        message: error.message,
        response: error.response,
        stack: error.stack,
      });
      alert(
        "Erro ao enviar comentário. Verifique o console para mais detalhes."
      );
    }
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog</h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.id} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <span className="read-more">Ler Mais</span>
            </div>
          </Link>
        ))}
      </div>

      {/* <div className="comentarios-section">
        <h3>Deixe um comentário</h3>
        <form onSubmit={handleSubmit} className="comentario-form">
          <div className="form-group">
            <label>
              Nome <span className="required">*</span>
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              required
              placeholder="Seu nome"
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
            <label>Site</label>
            <input
              type="text"
              name="site"
              value={formData.site}
              onChange={handleInputChange}
              placeholder="https://seusite.com"
            />
          </div>

          <div className="form-group">
            <label>
              Comentário <span className="required">*</span>
            </label>
            <textarea
              name="comentario"
              value={formData.comentario}
              onChange={handleInputChange}
              required
              rows="5"
              placeholder="Seu comentário"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Enviar Comentário
          </button>
        </form>
      </div> */}
    </div>
  );
};

export default BlogPage;
