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
// import backgroundImage from "../../assets/img/NettCorpSolutions - logo.png";

const Login = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptImageUse, setAcceptImageUse] = useState(false);
  const navigate = useNavigate();
  const toast = useRef(null);
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
  const [telefone, setTelefone] = useState("");
  const [autorizouArmazenamentoDeDados, setAutorizouArmazenamentoDeDados] =
    useState(false);

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

  const showToast = (config) => {
    toast.current.show({
      severity: config.severity || "info",
      summary: config.summary || "Info",
      detail: config.detail,
      life: 3000,
    });
  };

  const handleLogin = async () => {
    try {
      const data = await authAPI.login({ email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      showToast({
        severity: "success",
        summary: "Sucesso",
        detail: "Login realizado com sucesso!",
      });
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Erro no login:", error);
      showToast({
        severity: "error",
        summary: "Erro",
        detail: error.message || "Erro ao fazer login",
      });
    }
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      showToast({
        severity: "error",
        summary: "Erro",
        detail: "Senhas não coincidem",
      });
      return;
    }

    try {
      const data = await authAPI.register({
        name,
        email,
        password,
        tipoPessoa,
        cpfCnpj,
        telefone,
        endereco: {
          cep,
          logradouro: endereco,
          numero,
          bairro,
          cidade,
          estado,
          nome: nomeEndereco,
        },
        aceitouTermos: acceptTerms === true,
        autorizouArmazenamentoDeDados: autorizouArmazenamentoDeDados === true,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(data.user));

      showToast({
        severity: "success",
        summary: "Sucesso",
        detail:
          "Cadastro realizado com sucesso! Bem-vindo à NettCorpSolutions!",
      });

      setUser(data.user);
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 2000); // Aumentei para 2 segundos para dar tempo de ler a mensagem
    } catch (error) {
      console.error("Erro no cadastro:", error);
      showToast({
        severity: "error",
        summary: "Erro",
        detail:
          error.message || "Erro ao cadastrar. Por favor, tente novamente.",
      });
    }
  };

  const validateForm = () => {
    if (!isLogin) {
      // Validações apenas para cadastro
      if (
        !name ||
        !email ||
        !password ||
        !confirmPassword ||
        !tipoPessoa ||
        !cpfCnpj ||
        !telefone
      ) {
        showToast({
          severity: "error",
          summary: "Erro",
          detail: "Preencha todos os campos obrigatórios",
        });
        return false;
      }

      // Validação dos checkboxes
      if (!acceptTerms || !autorizouArmazenamentoDeDados) {
        showToast({
          severity: "error",
          summary: "Erro",
          detail:
            "Você precisa aceitar os termos de uso e autorizar o armazenamento de dados",
        });
        return false;
      }

      if (password !== confirmPassword) {
        showToast({
          severity: "error",
          summary: "Erro",
          detail: "As senhas não coincidem",
        });
        return false;
      }

      if (password.length < 6) {
        showToast({
          severity: "error",
          summary: "Erro",
          detail: "A senha deve ter pelo menos 6 caracteres",
        });
        return false;
      }
    } else {
      // Validações para login
      if (!email || !password) {
        showToast({
          severity: "error",
          summary: "Erro",
          detail: "Preencha email e senha",
        });
        return false;
      }
    }
    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      if (isLogin) {
        await handleLogin();
      } else {
        await handleSignup();
      }
    } catch (error) {
      console.error(error);
      showToast({
        severity: "error",
        summary: "Erro",
        detail: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="login-container"
      style={{
        // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Toast ref={toast} />
      <Card className="form-card">
        <div className="form-header">
          <h2>{isLogin ? "Login" : "Registre-se aqui"}</h2>
        </div>
        <form onSubmit={handleFormSubmit}>
          {!isLogin && (
            <div className="field mb-4">
              <span className="p-float-label">
                <InputText
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={formErrors.name ? "p-invalid" : ""}
                />
                <label htmlFor="name">Nome completo</label>
              </span>
              {formErrors.name && (
                <small className="p-error">{formErrors.name}</small>
              )}
            </div>
          )}

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

          {isLogin && (
            <div className="text-right mb-4">
              <a
                href="/forgot-password"
                className="text-primary no-underline hover:underline"
              >
                Esqueceu sua senha?
              </a>
            </div>
          )}

          {!isLogin && (
            <div className="field mb-4">
              <span className="p-float-label">
                <Password
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  toggleMask
                  className={formErrors.confirmPassword ? "p-invalid" : ""}
                  feedback={false}
                  hideIcon="pi pi-eye-slash"
                  showIcon="pi pi-eye"
                />
                <label htmlFor="confirmPassword">Confirme sua senha</label>
              </span>
              {formErrors.confirmPassword && (
                <small className="p-error">{formErrors.confirmPassword}</small>
              )}
            </div>
          )}

          {!isLogin && (
            <>
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
                  <InputMask
                    id="telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.value)}
                    mask="(99) 99999-9999"
                    className={formErrors.telefone ? "p-invalid" : ""}
                  />
                  <label htmlFor="telefone">Telefone</label>
                </span>
                {formErrors.telefone && (
                  <small className="p-error">{formErrors.telefone}</small>
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
                  Eu aceito os termos de uso da{" "}
                  {/*<a href="/termos-de-uso">Termos de uso</a> e{" "} */}
                  <a href="/politica-privacidade">Política de privacidade.</a>
                </label>
              </div>

              <div className="field-checkbox mb-4">
                <Checkbox
                  inputId="storageAuthorization"
                  checked={autorizouArmazenamentoDeDados}
                  onChange={(e) => setAutorizouArmazenamentoDeDados(e.checked)}
                />
                <label htmlFor="storageAuthorization">
                  Autorizo que este site armazene minhas informações enviadas
                  para que possam responder o meu contato.
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
