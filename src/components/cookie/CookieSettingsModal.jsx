import React, { useState } from "react";
import "./CookieSettingsModal.css";

const CookieSettingsModal = ({ isOpen, onClose }) => {
  const [settings, setSettings] = useState({
    necessary: true,
    analytics: false,
  });

  const handleToggle = (type) => {
    setSettings((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Visão geral de privacidade</h2>
        <p>
          Cookies: Este site utiliza cookies por motivos analíticos e técnicos.
          Os "Cookies Analíticos" são inseridos pelo Google Analytics para nos
          ajudar a compreender de que países vêm os nossos visitantes, que
          páginas visitam e que ações realizam neste site.
        </p>
        <div className="cookie-settings">
          <h3>Configurações de cookies</h3>
          <div>
            <label>
              <input
                type="checkbox"
                checked={settings.necessary}
                onChange={() => handleToggle("necessary")}
                disabled
              />
              Cookies Estritamente Necessários
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={settings.analytics}
                onChange={() => handleToggle("analytics")}
              />
              Cookies Analíticos
            </label>
          </div>
        </div>
        {/* TODO: <p>
          Mais informações sobre a nossa{" "}
          <a href="/politica-de-cookies">Política de Cookies</a>.
        </p> */}
      </div>
    </div>
  );
};

export default CookieSettingsModal;
