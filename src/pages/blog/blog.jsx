import React from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "./service/blogService";
import "../blog/blog.css";

const BlogPage = () => {
  const blogPosts = getAllPosts();

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
    </div>
  );
};

export default BlogPage;
