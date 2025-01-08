import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { authAPI } from "../../api/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      await authAPI.requestPasswordReset(email);
      toast.current.show({
        severity: "success",
        summary: "Email enviado",
        detail: "Verifique sua caixa de entrada para redefinir sua senha",
        life: 3000,
      });
      setTimeout(() => navigate("/login"), 3000);
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Erro",
        detail: "Não foi possível enviar o email de recuperação",
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
        <p className="text-center mb-4">
          Digite o endereço de e-mail associado à sua conta e enviaremos um link
          para redefinir sua senha.
        </p>

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

          <div className="flex flex-column gap-2">
            <Button
              type="submit"
              label="Continuar"
              className="w-full"
              loading={loading}
            />
            <Button
              type="button"
              label="Voltar para login"
              className="w-full p-button-text"
              onClick={() => navigate("/login")}
            />
          </div>
        </form>

        <p className="text-center mt-4">
          Ainda não possui uma conta?{" "}
          <a href="/login#" className="text-primary">
            Criar conta
          </a>
        </p>
      </Card>
    </div>
  );
};

export default ForgotPassword;
