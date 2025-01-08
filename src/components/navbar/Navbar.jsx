import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaChevronDown } from "react-icons/fa";
import UserSettingsModal from "../UserSettingsModal/UserSettingsModal";

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
          <Link to="/">NettCorpSolutions</Link>
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
              <span className="mobile-brand">NettCorpSolutions</span>
              <button className="close-button" onClick={toggleMobileMenu}>
                ×
              </button>
            </div>
            <div className="mobile-menu-content">
              <Link to="/" onClick={toggleMobileMenu}>
                Home
              </Link>
              <Link to="/servicos" onClick={toggleMobileMenu}>
                Serviços
              </Link>
              <Link to="/portfolio" onClick={toggleMobileMenu}>
                Projetos
              </Link>
              <Link to="/blog" onClick={toggleMobileMenu}>
                Blog
              </Link>
              {/* <Link to="/blog" onClick={toggleMobileMenu}>
                NettStudios
              </Link> */}
              <Link to="/contato" onClick={toggleMobileMenu}>
                Contato
              </Link>
              {isAuthenticated ? (
                <>
                  <Link to="/configuracoes" onClick={toggleMobileMenu}>
                    Configurações
                  </Link>
                  <Link to="/andamento" onClick={toggleMobileMenu}>
                    Andamento
                  </Link>
                  <button className="logout-button" onClick={handleLogout}>
                    Sair
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="mobile-login"
                  onClick={toggleMobileMenu}
                >
                  Área do Cliente
                </Link>
              )}
            </div>
          </div>
        )}

        <div className="desktop-menu">
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/portfolio">Projetos</Link>
            <Link to="/contato">Contato</Link>
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
                    <ul className="dropdown-menu dropdown-menu-dark show">
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={handleOpenSettings}
                        >
                          Configurações
                        </button>
                      </li>
                      <li>
                        <Link
                          to="/andamento"
                          className="dropdown-item"
                          onClick={closeDropdown}
                        >
                          Andamento
                        </Link>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => {
                            closeDropdown();
                            handleLogout();
                          }}
                        >
                          Sair
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="area-cliente-button"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Área do Cliente
              </Link>
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
