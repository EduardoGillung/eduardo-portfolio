"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };
    try {
      const res = await fetch("/api/contact-mailer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setSuccess(true);
        form.reset();
      } else {
        setError("Erro ao enviar. Tente novamente.");
      }
    } catch {
      setError("Erro ao enviar. Tente novamente.");
    }
    setLoading(false);
  }

  return (
  <form className="contact-form mt-8 transition-all duration-300" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="name" className="block font-medium text-left mb-2 transition-colors duration-300" style={{ color: 'var(--card-text)' }}>Nome</label>
        <input 
          name="name" 
          id="name" 
          placeholder="Seu nome" 
          required 
          className="w-full border-2 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 text-base" 
          style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }} 
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block font-medium text-left mb-2 transition-colors duration-300" style={{ color: 'var(--card-text)' }}>Email</label>
        <input 
          name="email" 
          id="email" 
          type="email" 
          placeholder="seu@exemplo.com" 
          required 
          className="w-full border-2 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 text-base" 
          style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }} 
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block font-medium text-left mb-2 transition-colors duration-300" style={{ color: 'var(--card-text)' }}>Mensagem</label>
        <textarea 
          name="message" 
          id="message" 
          rows={6} 
          placeholder="Escreva uma mensagem..." 
          required 
          className="w-full border-2 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition-all duration-300 text-base" 
          style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }} 
        />
      </div>
      <div className="text-center">
        <button 
          className="button px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed" 
          style={{ backgroundColor: 'var(--hero-text)', color: 'var(--hero-bg)' }}
          type="submit" 
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </div>
      {success && <p className="text-green-600 mt-4 text-center font-medium">Mensagem enviada com sucesso!</p>}
      {error && <p className="text-red-600 mt-4 text-center font-medium">{error}</p>}
    </form>
  );
}
