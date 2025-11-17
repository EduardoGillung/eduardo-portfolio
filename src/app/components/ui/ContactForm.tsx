"use client";

import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Validação do formulário
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Nome deve ter pelo menos 2 caracteres";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Mensagem deve ter pelo menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handler de mudança nos inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Limpa o erro do campo quando o usuário começa a digitar
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Handler de submit
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    // Limpa mensagens anteriores
    setSuccess(false);
    setError("");

    // Valida o formulário
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact-mailer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        
        // Remove mensagem de sucesso após 5 segundos
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        setError(result.error || "Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (err) {
      console.error("Erro ao enviar:", err);
      setError("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form 
      className="contact-form mt-8 transition-all duration-300" 
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Campo Nome */}
      <div className="mb-6">
        <label 
          htmlFor="name" 
          className="block font-medium text-left mb-2 transition-colors duration-300" 
          style={{ color: 'var(--card-text)' }}
        >
          Nome <span className="text-red-500">*</span>
        </label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Seu nome completo"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={loading}
          className={`w-full border-2 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300 text-base disabled:opacity-50 disabled:cursor-not-allowed ${
            errors.name ? 'border-red-500 focus:ring-red-400' : 'focus:ring-blue-400'
          }`}
          style={{ 
            borderColor: errors.name ? '#ef4444' : 'var(--border-color)', 
            backgroundColor: 'var(--background)', 
            color: 'var(--foreground)' 
          }}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.name}</p>
        )}
      </div>

      {/* Campo Email */}
      <div className="mb-6">
        <label 
          htmlFor="email" 
          className="block font-medium text-left mb-2 transition-colors duration-300" 
          style={{ color: 'var(--card-text)' }}
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
          className={`w-full border-2 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300 text-base disabled:opacity-50 disabled:cursor-not-allowed ${
            errors.email ? 'border-red-500 focus:ring-red-400' : 'focus:ring-blue-400'
          }`}
          style={{ 
            borderColor: errors.email ? '#ef4444' : 'var(--border-color)', 
            backgroundColor: 'var(--background)', 
            color: 'var(--foreground)' 
          }}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.email}</p>
        )}
      </div>

      {/* Campo Mensagem */}
      <div className="mb-6">
        <label 
          htmlFor="message" 
          className="block font-medium text-left mb-2 transition-colors duration-300" 
          style={{ color: 'var(--card-text)' }}
        >
          Mensagem <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          id="message"
          rows={6}
          placeholder="Escreva sua mensagem aqui..."
          value={formData.message}
          onChange={handleChange}
          required
          disabled={loading}
          className={`w-full border-2 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 resize-none transition-all duration-300 text-base disabled:opacity-50 disabled:cursor-not-allowed ${
            errors.message ? 'border-red-500 focus:ring-red-400' : 'focus:ring-blue-400'
          }`}
          style={{ 
            borderColor: errors.message ? '#ef4444' : 'var(--border-color)', 
            backgroundColor: 'var(--background)', 
            color: 'var(--foreground)' 
          }}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.message}</p>
        )}
        <p className="text-xs mt-1 transition-colors duration-300" style={{ color: 'var(--muted-foreground)' }}>
          {formData.message.length} / 10 caracteres mínimo
        </p>
      </div>

      {/* Botão de envio */}
      <div className="text-center">
        <button
          className="button px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-w-[140px]"
          style={{ backgroundColor: 'var(--hero-text)', color: 'var(--hero-bg)' }}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </span>
          ) : (
            "Enviar Mensagem"
          )}
        </button>
      </div>

      {/* Mensagem de sucesso */}
      {success && (
        <div className="mt-6 p-4 rounded-lg transition-all duration-300" style={{ 
          backgroundColor: 'rgba(34, 197, 94, 0.1)', 
          border: '1px solid rgba(34, 197, 94, 0.3)' 
        }}>
          <p className="text-center font-medium flex items-center justify-center gap-2" style={{ color: '#16a34a' }}>
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Mensagem enviada com sucesso! Responderei em breve.
          </p>
        </div>
      )}

      {/* Mensagem de erro */}
      {error && (
        <div className="mt-6 p-4 rounded-lg transition-all duration-300" style={{ 
          backgroundColor: 'rgba(239, 68, 68, 0.1)', 
          border: '1px solid rgba(239, 68, 68, 0.3)' 
        }}>
          <p className="text-center font-medium flex items-center justify-center gap-2" style={{ color: '#dc2626' }}>
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        </div>
      )}
    </form>
  );
}
