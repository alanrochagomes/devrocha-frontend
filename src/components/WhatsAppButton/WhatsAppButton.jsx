import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const message =
    "Olá! Sou o Alan. Estou à disposição para ajudá-lo(a). Como posso assisti-lo(a) hoje?";
  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/5521998579960?text=${encodedMessage}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="whatsapp-background">
        <i className="fab fa-whatsapp whatsapp-icon"></i>
      </div>
    </a>
  );
};

export default WhatsAppButton;
