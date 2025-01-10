import React, { useState, useEffect } from "react";
import CookieSettingsModal from "./CookieSettingsModal";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleCloseBanner = () => {
    setIsVisible(false);
  };

  const handleOpenSettingsModal = () => {
    setIsSettingsModalOpen(true);
  };

  const handleCloseSettingsModal = () => {
    setIsSettingsModalOpen(false);
  };

  const handleOpenInfoModal = () => {
    setIsInfoModalOpen(true);
  };

  const handleCloseInfoModal = () => {
    setIsInfoModalOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="cookie-consent">
        <p>
          Nós usamos cookies para melhorar sua experiência de navegação.{" "}
          <button onClick={handleOpenInfoModal} className="link-button">
            Saiba mais
          </button>
          . Ao continuar navegando neste site, você concorda com o uso de
          cookies.{" "}
          <button onClick={handleOpenSettingsModal} className="link-button">
            Altere suas configurações de cookies
          </button>
          .
        </p>
        <div className="button-group">
          <button onClick={handleAccept} className="accept-btn">
            Aceitar
          </button>
          <button onClick={handleCloseBanner} className="close-btn">
            &times;
          </button>
        </div>
      </div>

      {isInfoModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseInfoModal}>
              &times;
            </button>
            <h3>
              O que são cookies e por que a NettCorpSolutions precisa deles?
            </h3>
            <p>
              Cookies são arquivos armazenados no seu navegador da web que
              permitem que a NettCorpSolutions ou terceiros reconheçam você e as
              escolhas que você fez. Cookies podem ser usados para coletar,
              armazenar e compartilhar informações sobre suas atividades na
              internet.
            </p>
            <p>
              A NettCorpSolutions usa cookies para os seguintes propósitos:
              <ul>
                <li>Para habilitar funções específicas</li>
                <li>Para coletar análises</li>
                <li>Para armazenar suas preferências</li>
              </ul>
            </p>
            <p>
              Nossos sites coletam cookies de sessão (excluídos automaticamente
              após o término da sessão) e cookies persistentes (armazenados no
              seu navegador após o término da sessão).
            </p>
            <h3>Como terceiros usam cookies nos sites da NettCorpSolutions?</h3>
            <p>
              Como a maioria dos sites, usamos o Google Analytics. Essa
              ferramenta nos permite entender melhor nossos clientes - de quais
              países eles vêm, quais páginas eles visitam, quanto tempo passam
              em nossos sites e se são visitantes novos ou recorrentes. Essas
              informações nos ajudam a melhorar nossos serviços. Por exemplo,
              usamos esses dados para decidir quais funcionalidades ou
              localizações implementar em seguida.
            </p>
            <h3>Como usamos cookies nos sites da NettCorpSolutions?</h3>
            <p>
              Oferecemos aos visitantes do nosso site um recurso de chat ao vivo
              que permite entrar em contato com nossos consultores on-line e
              tirar dúvidas sobre a NettCorpSolutions. Os cookies são
              necessários para esse processo. Além disso, para nossos clientes
              da União Europeia, usamos cookies para armazenar suas preferências
              relacionadas ao GDPR.
            </p>
            <h3>Configurações de cookies e bloqueio de cookies</h3>
            <p>
              Os cookies neste site podem ser controlados nas Configurações de
              cookies. Você também pode excluir e/ou bloquear cookies no nível
              do navegador. No entanto, se você bloquear os cookies, não poderá
              usar recursos que dependem deles, e suas escolhas não serão
              salvas.
            </p>
          </div>
        </div>
      )}

      <CookieSettingsModal
        isOpen={isSettingsModalOpen}
        onClose={handleCloseSettingsModal}
      />
    </>
  );
};

export default CookieConsent;
