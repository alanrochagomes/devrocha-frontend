const API_URL = "http://localhost:3001/api";

const fetchWithAuth = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erro na requisição");
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export const authAPI = {
  register: async (userData) => {
    try {
      const formattedData = {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        telefone: userData.telefone,
        tipoPessoa: userData.tipoPessoa,
        cpfCnpj: userData.cpfCnpj,
        endereco: {
          cep: userData.endereco.cep,
          logradouro: userData.endereco.logradouro,
          numero: userData.endereco.numero,
          bairro: userData.endereco.bairro,
          cidade: userData.endereco.cidade,
          estado: userData.endereco.estado,
          nome: userData.endereco.nome,
        },
        aceitouTermos: userData.aceitouTermos,
        autorizouArmazenamentoDeDados: userData.autorizouArmazenamentoDeDados,
      };

      const data = await fetchWithAuth("/auth/register", {
        method: "POST",
        body: JSON.stringify(formattedData),
      });

      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      return data;
    } catch (error) {
      throw error;
    }
  },

  login: async (credentials) => {
    try {
      const data = await fetchWithAuth("/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
      });

      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      return data;
    } catch (error) {
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
  },

  isAuthenticated: () => {
    const token = localStorage.getItem("token");
    return !!token;
  },

  getCurrentUser: async () => {
    try {
      return await fetchWithAuth("/users/me");
    } catch (error) {
      throw error;
    }
  },

  requestPasswordReset: async (email, newPassword) => {
    try {
      const response = await fetch(`${API_URL}/auth/forgot-password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          newPassword: newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Falha ao redefinir senha");
      }

      return data;
    } catch (error) {
      throw error;
    }
  },
};

export const api = {
  get: (endpoint) => fetchWithAuth(endpoint),
  post: (endpoint, body) =>
    fetchWithAuth(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
    }),
  put: (endpoint, body) =>
    fetchWithAuth(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
    }),
  delete: (endpoint) =>
    fetchWithAuth(endpoint, {
      method: "DELETE",
    }),
};

export default api;
