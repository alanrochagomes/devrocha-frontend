import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaChevronDown } from "react-icons/fa";
import UserSettingsModal from "../UserSettingsModal/UserSettingsModal";
import logo from "../../assets/img/DevRocha.svg";

const Navbar = ({ user, setUser }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "auto";
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleOpenSettings = () => {
    setIsSettingsModalOpen(true);
    closeDropdown();
  };

  const handleSaveSettings = async (formData) => {
    try {
      // implementa a chamada API para atualizar os dados
      // const response = await api.put('/user/update', formData);

      const updatedUser = {
        ...JSON.parse(localStorage.getItem("user")),
        ...formData,
      };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setUser(updatedUser);
      setIsSettingsModalOpen(false);
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <NavLink to="/" exact className="navbar-link">
            <img src={logo} alt="Logo-DevRocha" className="navbar-logo" />
          </NavLink>
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <span className="close-icon">×</span>
            ) : (
              <span className="menu-icon">☰</span>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <span className="mobile-brand">DevRocha</span>
              <button className="close-button" onClick={toggleMobileMenu}>
                ×
              </button>
            </div>
            <div className="mobile-menu-content">
              <NavLink
                to="/"
                onClick={toggleMobileMenu}
                activeClassName="active"
              >
                Página Inicial
              </NavLink>
              <NavLink
                to="/servicos"
                onClick={toggleMobileMenu}
                activeClassName="active"
              >
                Serviços
              </NavLink>
              <NavLink
                to="/projetos"
                onClick={toggleMobileMenu}
                activeClassName="active"
              >
                Projetos
              </NavLink>
              <NavLink
                to="/contato"
                onClick={toggleMobileMenu}
                activeClassName="active"
              >
                Contato
              </NavLink>
              {isAuthenticated ? (
                <>
                  <NavLink
                    to="/configuracoes"
                    onClick={toggleMobileMenu}
                    activeClassName="active"
                  >
                    Configurações
                  </NavLink>
                  <NavLink
                    to="/andamento"
                    onClick={toggleMobileMenu}
                    activeClassName="active"
                  >
                    Andamento
                  </NavLink>
                  <button className="logout-button" onClick={handleLogout}>
                    Sair
                  </button>
                </>
              ) : (
                <a
                  href="mailto:contato@devrocha.com.br"
                  className="contact-button"
                  onClick={toggleMobileMenu}
                >
                  Entrar em Contato
                </a>
              )}
            </div>
          </div>
        )}

        <div className="desktop-menu">
          <div className="navbar-links">
            <NavLink to="/" exact activeClassName="active">
              Página Inicial
            </NavLink>
            <NavLink to="/servicos" activeClassName="active">
              Serviços
            </NavLink>
            <NavLink to="/projetos" activeClassName="active">
              Projetos
            </NavLink>
            <NavLink to="/contato" activeClassName="active">
              Contato
            </NavLink>
          </div>
          <div className="navbar-auth">
            {isAuthenticated ? (
              <div className="user-section">
                <div className="dropdown">
                  <button
                    className={`btn user-button ${
                      isDropdownOpen ? "active" : ""
                    }`}
                    onClick={toggleDropdown}
                  >
                    {JSON.parse(localStorage.getItem("user"))?.name ||
                      "Usuário"}
                    <FaChevronDown
                      className={`chevron-icon ${
                        isDropdownOpen ? "rotate" : ""
                      }`}
                    />
                  </button>
                  {isDropdownOpen && (
                    <ul className="dropdown-menu show">
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={handleOpenSettings}
                        >
                          <i className="fas fa-cog"></i>
                          Configurações
                        </button>
                      </li>
                      <li>
                        <NavLink
                          to="/andamento"
                          className="dropdown-item"
                          onClick={closeDropdown}
                        >
                          <i className="fas fa-tasks"></i>
                          Andamento
                        </NavLink>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => {
                            closeDropdown();
                            handleLogout();
                          }}
                        >
                          <i className="fas fa-sign-out-alt"></i>
                          Sair
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            ) : (
              <a
                href="mailto:contato@devrocha.com.br"
                className="contact-button"
              >
                Entrar em Contato
              </a>
            )}
          </div>
        </div>
      </nav>

      <UserSettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        user={JSON.parse(localStorage.getItem("user"))}
        onSave={handleSaveSettings}
      />
    </>
  );
};

export default Navbar;
