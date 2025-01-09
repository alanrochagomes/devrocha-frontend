import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getPostData, getLatestPosts } from "./service/blogPostService";
import "./blogPost.css";
import banner from "../../assets/img/NettCorpSolutions - logo.png";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostData(slug);
  const recentPosts = getLatestPosts();

  // Estado para o formulário de comentários
  const [commentForm, setCommentForm] = useState({
    comment: "",
    name: "",
    email: "",
    site: "",
    saveData: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para salvar o comentário
    console.log("Comentário enviado:", commentForm);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCommentForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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
              <label htmlFor="comment">Comentário *</label>
              <textarea
                id="comment"
                name="comment"
                value={commentForm.comment}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Nome *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={commentForm.name}
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
                type="url"
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
    </>
  );
};

export default BlogPost;
