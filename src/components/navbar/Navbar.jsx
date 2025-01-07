import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import DropdownUserMenu from "../conta/DropdownUserMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsLoggedIn(authStatus === "true");

    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1 className="logo-name">NettCorpSolutions</h1>
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
          <li className="nav-item">
            <Link to="/contato" className="nav-link" onClick={toggleMenu}>
              Contato
            </Link>
          </li>
          <li className="nav-item">
            {isLoggedIn ? (
              <div className="user-info">
                {/* <img
                  src={user.profilePicture}
                  alt="Foto de Perfil"
                  className="user-avatar"
                /> */}
                <div className="user-details">
                  <span className="user-name">{user.name}</span>
                  <span className="user-email">{user.email}</span>
                  <span className="user-time">11:49 BRT</span>
                </div>
                <button onClick={handleLogout} className="logout-button">
                  Sair
                </button>
              </div>
            ) : (
              <Link to="/login" className="nav-link" onClick={toggleMenu}>
                Área do Cliente
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
