import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>NettCorpSolutions</h1>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/servicos" className="nav-link" onClick={toggleMenu}>
              Serviços
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/portfolio" className="nav-link" onClick={toggleMenu}>
              Projetos
            </Link>
          </li>

          {/* TODO: <li className="nav-item">
            <Link
              to="/identidade-visual"
              className="nav-link"
              onClick={toggleMenu}
            >
              Identidade Visual
            </Link>
          </li> */}

          <li className="nav-item">
            <Link to="/contato" className="nav-link" onClick={toggleMenu}>
              Contato
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleMenu}>
              Quem Somos
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
