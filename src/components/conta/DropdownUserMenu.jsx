import React, { useEffect, useState } from "react";
import EditProfileModal from "./EditProfileModal";
import "../conta/DropdownUserMenu.css";

const DropdownUserMenu = ({ onLogout }) => {
  const [userName, setUserName] = useState("Usuário");
  const [profilePicture, setProfilePicture] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const getUserName = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.name) {
      setUserName(user.name);
      setProfilePicture(user.profilePicture || "");
    } else {
      setUserName("Usuário");
    }
  };

  useEffect(() => {
    getUserName();
    const now = new Date();
    setCurrentTime(
      now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  }, []);

  const handleProfileUpdate = () => {
    getUserName();
  };

  return (
    <div className="dropdown">
      <button
        className="user-button"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="user-info">
          {profilePicture ? (
            <img src={profilePicture} alt="Perfil" className="user-avatar" />
          ) : (
            <div className="user-avatar">{userName[0]?.toUpperCase()}</div>
          )}
          <span className="user-name">{userName}</span>
          <span className="user-time">{currentTime}</span>
        </div>
      </button>

      <ul className="dropdown-menu dark-dropdown">
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setIsModalOpen(true)}
          >
            Editar Perfil
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button" onClick={onLogout}>
            Sair
          </button>
        </li>
      </ul>

      <EditProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onProfileUpdate={handleProfileUpdate}
      />
    </div>
  );
};

export default DropdownUserMenu;
