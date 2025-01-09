import React, { useState } from "react";
import { api } from "../../api/api";
import "./ProgressRequestForm.css";

const ProgressRequestForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    contactMethod: "",
    taskType: "",
    reportFormat: "",
    reportDate: "",
    urgencyLevel: "",
    newDeadline: "",
    subscriptionChange: "",
    refundRequest: false,
    refundDetails: "",
    additionalInfo: "",
  });

  const tasks = [
    "Criação de Site",
    "Criação de Aplicativo",
    "Criação de Loja Virtual",
    "Manutenção de Sistema",
    "Desenvolvimento de Funcionalidade",
  ];

  const reportFormats = ["PDF", "Áudio", "Meet", "Todos os três"];

  const urgencyLevels = ["Baixa", "Média", "Alta"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form Data:", formData);
      await api.post("/andamento", formData);
      alert("Solicitação enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar solicitação:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Solicitação de Progresso</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
          />
        </label>
        <label>
          Método de Contato:
          <select
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="email">Email</option>
            <option value="discord">Discord</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </label>
        <label>
          Tipo de Tarefa:
          <select
            name="taskType"
            value={formData.taskType}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            {tasks.map((task, index) => (
              <option key={index} value={task}>
                {task}
              </option>
            ))}
          </select>
        </label>
        <label>
          Formato do Relatório:
          <select
            name="reportFormat"
            value={formData.reportFormat}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            {reportFormats.map((format, index) => (
              <option key={index} value={format}>
                {format}
              </option>
            ))}
          </select>
        </label>
        <label>
          Data para Meet/PDF:
          <input
            type="date"
            name="reportDate"
            value={formData.reportDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Nível de Urgência:
          <select
            name="urgencyLevel"
            value={formData.urgencyLevel}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            {urgencyLevels.map((level, index) => (
              <option key={index} value={level}>
                {level}
              </option>
            ))}
          </select>
        </label>
        <label>
          Novo Prazo:
          <input
            type="date"
            name="newDeadline"
            value={formData.newDeadline}
            onChange={handleChange}
          />
        </label>
        <label>
          Mudança de Plano:
          <input
            type="text"
            name="subscriptionChange"
            value={formData.subscriptionChange}
            onChange={handleChange}
          />
        </label>
        <label>
          Solicitar Reembolso:
          <input
            type="checkbox"
            name="refundRequest"
            checked={formData.refundRequest}
            onChange={handleChange}
          />
          <span className="refund-warning">
            * Aviso: Se passaram mais de 3 dias, o reembolso não será completo.
          </span>
        </label>
        {formData.refundRequest && (
          <label>
            Detalhes do Reembolso (Tarefa ou Plano):
            <input
              type="text"
              name="refundDetails"
              value={formData.refundDetails}
              onChange={handleChange}
            />
          </label>
        )}
        <label>
          Informações Adicionais:
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Enviar Solicitação</button>
      </form>
    </div>
  );
};

export default ProgressRequestForm;
