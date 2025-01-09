import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputMask } from "primereact/inputmask";
import api from "../../api/api";
import "./UserSettingsModal.css";

const UserSettingsModal = ({ isOpen, onClose, user, onSave }) => {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    telefone: user?.telefone || "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password && formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const dadosParaEnviar = {};

      if (formData.name !== user.name && formData.name.trim() !== "") {
        dadosParaEnviar.name = formData.name;
      }

      if (formData.email !== user.email && formData.email.trim() !== "") {
        dadosParaEnviar.email = formData.email;
      }

      if (
        formData.telefone !== user.telefone &&
        formData.telefone.trim() !== ""
      ) {
        dadosParaEnviar.telefone = formData.telefone;
      }

      if (formData.password && formData.password.trim() !== "") {
        dadosParaEnviar.password = formData.password;
      }

      if (Object.keys(dadosParaEnviar).length === 0) {
        alert("Nenhuma alteração detectada!");
        return;
      }

      console.log("Token:", localStorage.getItem("token"));
      console.log("Enviando dados para atualização:", dadosParaEnviar);

      const response = await api.put("/auth/update", dadosParaEnviar);
      console.log("Resposta da atualização:", response.data);

      const updatedUser = { ...user, ...dadosParaEnviar };
      delete updatedUser.password;
      localStorage.setItem("user", JSON.stringify(updatedUser));

      alert("Dados atualizados com sucesso!");
      onSave(updatedUser);
      onClose();
    } catch (error) {
      console.error("Erro completo:", error);
      if (error.response) {
        console.error("Dados do erro:", error.response.data);
      }
      alert(`Erro ao atualizar dados: ${error.message}`);
    }
  };

  return (
    <Dialog
      visible={isOpen}
      onHide={onClose}
      header="Configurações do Usuário"
      className="user-settings-modal"
    >
      <form onSubmit={handleSubmit} className="settings-form">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <InputText
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Seu nome"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <InputText
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="seu@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Telefone</label>
          <InputMask
            id="telefone"
            mask="(99) 99999-9999"
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.value })}
            placeholder="(00) 00000-0000"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Nova Senha</label>
          <Password
            id="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            toggleMask
            feedback={false}
            placeholder="Digite para alterar a senha"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Nova Senha</label>
          <Password
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            toggleMask
            feedback={false}
            placeholder="Confirme a nova senha"
          />
        </div>

        <div className="button-container">
          {/* TODO: <Button
            label="Cancelar"
            className="p-button-secondary"
            onClick={onClose}
          /> */}
          <Button label="Salvar" type="submit" />
        </div>
      </form>
    </Dialog>
  );
};

export default UserSettingsModal;
