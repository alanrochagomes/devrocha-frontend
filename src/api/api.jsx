const API_URL = "http://localhost:3001/api";

// Função auxiliar para fazer requisições
const fetchWithAuth = async (endpoint, options = {}) => {
  // Adiciona token no header se existir
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

// API de autenticação
export const authAPI = {
  // Registro de usuário
  register: async (userData) => {
    try {
      const data = await fetchWithAuth("/auth/register", {
        method: "POST",
        body: JSON.stringify(userData),
      });

      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      return data;
    } catch (error) {
      throw error;
    }
  },

  // Login de usuário
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

  // Logout
  logout: () => {
    localStorage.removeItem("token");
  },

  // Verificar se está autenticado
  isAuthenticated: () => {
    const token = localStorage.getItem("token");
    return !!token;
  },

  // Obter usuário atual
  getCurrentUser: async () => {
    try {
      return await fetchWithAuth("/users/me");
    } catch (error) {
      throw error;
    }
  },
};

// Exporta a função fetchWithAuth para uso em outras partes da aplicação
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
