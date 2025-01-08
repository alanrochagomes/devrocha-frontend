import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { authAPI } from "../../api/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !newPassword || !confirmPassword) {
      toast.current.show({
        severity: "error",
        summary: "Erro",
        detail: "Preencha todos os campos",
        life: 3000,
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.current.show({
        severity: "error",
        summary: "Erro",
        detail: "As senhas não coincidem",
        life: 3000,
      });
      return;
    }

    if (newPassword.length < 6) {
      toast.current.show({
        severity: "error",
        summary: "Erro",
        detail: "A senha deve ter pelo menos 6 caracteres",
        life: 3000,
      });
      return;
    }

    setLoading(true);
    try {
      await authAPI.requestPasswordReset(email, newPassword);
      toast.current.show({
        severity: "success",
        summary: "Sucesso",
        detail: "Senha atualizada com sucesso",
        life: 3000,
      });
      setTimeout(() => navigate("/login"), 3000);
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Erro",
        detail: error.message || "Não foi possível redefinir a senha",
        life: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <Toast ref={toast} />
      <Card className="form-card">
        <h2 className="text-center mb-4">Redefinir senha</h2>
        <form onSubmit={handleSubmit}>
          <div className="field mb-4">
            <span className="p-float-label">
              <InputText
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
              <label htmlFor="email">Digite seu e-mail</label>
            </span>
          </div>

          <div className="field mb-4">
            <span className="p-float-label">
              <Password
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                toggleMask
                className="w-full"
                feedback
              />
              <label htmlFor="newPassword">Nova senha</label>
            </span>
          </div>

          <div className="field mb-4">
            <span className="p-float-label">
              <Password
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                toggleMask
                className="w-full"
                feedback={false}
              />
              <label htmlFor="confirmPassword">Confirme a nova senha</label>
            </span>
          </div>

          <Button
            type="submit"
            label="Redefinir Senha"
            className="w-full"
            loading={loading}
          />
        </form>
      </Card>
    </div>
  );
};

export default ForgotPassword;
