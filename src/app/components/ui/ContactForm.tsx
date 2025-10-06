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
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Nome
        <input name="name" placeholder="Seu nome" required />
      </label>
      <label>
        Email
        <input name="email" type="email" placeholder="seu@exemplo.com" required />
      </label>
      <label>
        Mensagem
        <textarea name="message" rows={6} placeholder="Escreva uma mensagem..." required />
      </label>
      <div>
        <button className="button" type="submit" disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>
      </div>
      {success && <p className="text-green-600 mt-2">Mensagem enviada com sucesso!</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </form>
  );
}
