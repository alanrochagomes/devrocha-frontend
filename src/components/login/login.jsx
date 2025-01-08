import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../../api/api"; // Certifique-se de que o caminho está correto
import "../login/login.css";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";
import { RadioButton } from "primereact/radiobutton";
import { PrimeIcons } from "primereact/api";

const Login = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptImageUse, setAcceptImageUse] = useState(false);
  const navigate = useNavigate();
  const toastTopCenter = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [tipoPessoa, setTipoPessoa] = useState("fisica");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [nomeEndereco, setNomeEndereco] = useState("");

  const estados = [
    { label: "Acre", value: "AC" },
    { label: "Alagoas", value: "AL" },
    { label: "Amapá", value: "AP" },
    { label: "Amazonas", value: "AM" },
    { label: "Bahia", value: "BA" },
    { label: "Ceará", value: "CE" },
    { label: "Distrito Federal", value: "DF" },
    { label: "Espírito Santo", value: "ES" },
    { label: "Goiás", value: "GO" },
    { label: "Maranhão", value: "MA" },
    { label: "Mato Grosso", value: "MT" },
    { label: "Mato Grosso do Sul", value: "MS" },
    { label: "Minas Gerais", value: "MG" },
    { label: "Pará", value: "PA" },
    { label: "Paraíba", value: "PB" },
    { label: "Paraná", value: "PR" },
    { label: "Pernambuco", value: "PE" },
    { label: "Piauí", value: "PI" },
    { label: "Rio de Janeiro", value: "RJ" },
    { label: "Rio Grande do Norte", value: "RN" },
    { label: "Rio Grande do Sul", value: "RS" },
    { label: "Rondônia", value: "RO" },
    { label: "Roraima", value: "RR" },
    { label: "Santa Catarina", value: "SC" },
    { label: "São Paulo", value: "SP" },
    { label: "Sergipe", value: "SE" },
    { label: "Tocantins", value: "TO" },
  ];

  const buscarCep = async (cep) => {
    if (cep.replace(/\D/g, "").length !== 8) return;

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (!data.erro) {
        setEndereco(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        setEstado(data.uf);
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      navigate("/");
      window.location.reload();
    }
  }, [navigate]);

  const toggleForm = () => setIsLogin(!isLogin);

  const showToast = (message) => {
    toastTopCenter.current.show({
      severity: "info",
      summary: "Info",
      detail: message,
      life: 3000,
    });
  };

  const handleLogin = async () => {
    try {
      const data = await authAPI.login({ email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(data.user));
      showToast("Login bem-sucedido!");
      setUser(data.user);
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1000);
    } catch (error) {
      showToast("Erro no login");
    }
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      showToast("Senhas não coincidem");
      return;
    }

    try {
      const data = await authAPI.register({
        name,
        email,
        password,
        tipoPessoa,
        cpfCnpj,
        endereco: {
          cep,
          logradouro: endereco,
          numero,
          bairro,
          cidade,
          estado,
          nome: nomeEndereco,
        },
        acceptTerms,
        acceptImageUse,
      });

      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(data.user));
      showToast(data.message);
      navigate("/");
      window.location.reload();
    } catch (error) {
      showToast("Erro ao cadastrar");
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!email) {
      errors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email inválido";
    }

    if (!password) {
      errors.password = "Senha é obrigatória";
    } else if (password.length < 6) {
      errors.password = "A senha deve ter no mínimo 6 caracteres";
    }

    if (!isLogin) {
      if (!name) {
        errors.name = "Nome é obrigatório";
      }
      if (password !== confirmPassword) {
        errors.confirmPassword = "As senhas não coincidem";
      }
      if (!cpfCnpj) {
        errors.cpfCnpj =
          tipoPessoa === "fisica" ? "CPF é obrigatório" : "CNPJ é obrigatório";
      }
      if (!cep) {
        errors.cep = "CEP é obrigatório";
      }
      if (!endereco) {
        errors.endereco = "Endereço é obrigatório";
      }
      if (!numero) {
        errors.numero = "Número é obrigatório";
      }
      if (!bairro) {
        errors.bairro = "Bairro é obrigatório";
      }
      if (!cidade) {
        errors.cidade = "Cidade é obrigatória";
      }
      if (!estado) {
        errors.estado = "Estado é obrigatório";
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      if (!isLogin && (!acceptTerms || !acceptImageUse)) {
        showToast("Você deve aceitar os termos e a política de privacidade.");
        return;
      }

      if (isLogin) {
        await handleLogin();
      } else {
        await handleSignup();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <Toast ref={toastTopCenter} position="top-center" />
      <Card className="form-card">
        <h2 className="text-center mb-4">{isLogin ? "Login" : "Cadastro"}</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="field mb-4">
            <span className="p-float-label">
              <InputText
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={formErrors.email ? "p-invalid" : ""}
              />
              <label htmlFor="email">Email</label>
            </span>
            {formErrors.email && (
              <small className="p-error">{formErrors.email}</small>
            )}
          </div>

          <div className="field mb-4">
            <span className="p-float-label">
              <Password
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                toggleMask
                className={formErrors.password ? "p-invalid" : ""}
                feedback={!isLogin}
                hideIcon="pi pi-eye-slash"
                showIcon="pi pi-eye"
              />
              <label htmlFor="password">Senha</label>
            </span>
            {formErrors.password && (
              <small className="p-error">{formErrors.password}</small>
            )}
          </div>

          {!isLogin && (
            <>
              <div className="field mb-4">
                <span className="p-float-label">
                  <InputText
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={formErrors.name ? "p-invalid" : ""}
                  />
                  <label htmlFor="name">Nome</label>
                </span>
                {formErrors.name && (
                  <small className="p-error">{formErrors.name}</small>
                )}
              </div>

              <div className="field mb-4">
                <span className="p-float-label">
                  <Password
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    toggleMask
                    className={formErrors.confirmPassword ? "p-invalid" : ""}
                    hideIcon="pi pi-eye"
                    showIcon="pi pi-eye-slash"
                  />
                  <label htmlFor="confirmPassword">Confirme sua senha</label>
                </span>
                {formErrors.confirmPassword && (
                  <small className="p-error">
                    {formErrors.confirmPassword}
                  </small>
                )}
              </div>

              <div className="field mb-4">
                <div className="flex gap-4">
                  <div className="flex align-items-center">
                    <RadioButton
                      inputId="fisica"
                      name="tipoPessoa"
                      value="fisica"
                      onChange={(e) => setTipoPessoa(e.value)}
                      checked={tipoPessoa === "fisica"}
                    />
                    <label htmlFor="fisica" className="ml-2">
                      Pessoa Física
                    </label>
                  </div>
                  <div className="flex align-items-center">
                    <RadioButton
                      inputId="juridica"
                      name="tipoPessoa"
                      value="juridica"
                      onChange={(e) => setTipoPessoa(e.value)}
                      checked={tipoPessoa === "juridica"}
                    />
                    <label htmlFor="juridica" className="ml-2">
                      Pessoa Jurídica
                    </label>
                  </div>
                </div>
              </div>

              <div className="field mb-4">
                <span className="p-float-label">
                  <InputMask
                    id="cpfCnpj"
                    value={cpfCnpj}
                    onChange={(e) => setCpfCnpj(e.value)}
                    mask={
                      tipoPessoa === "fisica"
                        ? "999.999.999-99"
                        : "99.999.999/9999-99"
                    }
                    className={formErrors.cpfCnpj ? "p-invalid" : ""}
                  />
                  <label htmlFor="cpfCnpj">
                    {tipoPessoa === "fisica" ? "CPF" : "CNPJ"}
                  </label>
                </span>
                {formErrors.cpfCnpj && (
                  <small className="p-error">{formErrors.cpfCnpj}</small>
                )}
              </div>

              <div className="field mb-4">
                <span className="p-float-label">
                  <InputMask
                    id="cep"
                    value={cep}
                    onChange={(e) => {
                      setCep(e.value);
                      buscarCep(e.value);
                    }}
                    mask="99999-999"
                    className={formErrors.cep ? "p-invalid" : ""}
                  />
                  <label htmlFor="cep">CEP</label>
                </span>
                {formErrors.cep && (
                  <small className="p-error">{formErrors.cep}</small>
                )}
              </div>

              <div className="field mb-4">
                <span className="p-float-label">
                  <InputText
                    id="endereco"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    className={formErrors.endereco ? "p-invalid" : ""}
                  />
                  <label htmlFor="endereco">Endereço</label>
                </span>
                {formErrors.endereco && (
                  <small className="p-error">{formErrors.endereco}</small>
                )}
              </div>

              <div className="field mb-4">
                <span className="p-float-label">
                  <InputText
                    id="numero"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    className={formErrors.numero ? "p-invalid" : ""}
                  />
                  <label htmlFor="numero">Número</label>
                </span>
                {formErrors.numero && (
                  <small className="p-error">{formErrors.numero}</small>
                )}
              </div>

              <div className="field mb-4">
                <span className="p-float-label">
                  <InputText
                    id="bairro"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                    className={formErrors.bairro ? "p-invalid" : ""}
                  />
                  <label htmlFor="bairro">Bairro</label>
                </span>
                {formErrors.bairro && (
                  <small className="p-error">{formErrors.bairro}</small>
                )}
              </div>

              <div className="field mb-4">
                <span className="p-float-label">
                  <InputText
                    id="cidade"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    className={formErrors.cidade ? "p-invalid" : ""}
                  />
                  <label htmlFor="cidade">Cidade</label>
                </span>
                {formErrors.cidade && (
                  <small className="p-error">{formErrors.cidade}</small>
                )}
              </div>

              <div className="field mb-4">
                <span className="p-float-label">
                  <Dropdown
                    id="estado"
                    value={estado}
                    onChange={(e) => setEstado(e.value)}
                    options={estados}
                    className={
                      formErrors.estado ? "p-invalid w-full" : "w-full"
                    }
                  />
                  <label htmlFor="estado">Estado</label>
                </span>
                {formErrors.estado && (
                  <small className="p-error">{formErrors.estado}</small>
                )}
              </div>

              <div className="field mb-4">
                <span className="p-float-label">
                  <InputText
                    id="nomeEndereco"
                    value={nomeEndereco}
                    onChange={(e) => setNomeEndereco(e.target.value)}
                  />
                  <label htmlFor="nomeEndereco">
                    Nome do Endereço (Ex: Casa, Trabalho)
                  </label>
                </span>
              </div>

              <div className="field-checkbox mb-4">
                <Checkbox
                  inputId="terms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.checked)}
                />
                <label htmlFor="terms">
                  Eu aceito os <a href="/termos-de-uso">Termos de uso</a> e{" "}
                  <a href="/politica-de-privacidade">Política de privacidade</a>
                </label>
              </div>

              <div className="field-checkbox mb-4">
                <Checkbox
                  inputId="imageAuthorization"
                  checked={acceptImageUse}
                  onChange={(e) => setAcceptImageUse(e.checked)}
                />
                <label htmlFor="imageAuthorization">
                  Autorizo a utilização da minha imagem
                </label>
              </div>
            </>
          )}

          <div className="mt-6">
            <Button
              type="submit"
              label={isLogin ? "Entrar" : "Cadastrar"}
              className="w-full"
              loading={loading}
            />
          </div>
        </form>

        <p className="text-center mt-3">
          <a href="#" className="switch-form" onClick={toggleForm}>
            {isLogin
              ? "Não tem conta? Cadastre-se"
              : "Já tem conta? Faça login"}
          </a>
        </p>
      </Card>
    </div>
  );
};

export default Login;
