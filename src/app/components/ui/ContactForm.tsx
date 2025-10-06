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
  <form className="contact-form border border-gray-800 rounded-xl p-6 mt-8" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium text-left mb-1">Nome</label>
  <input name="name" id="name" placeholder="Seu nome" required className="w-full border-2 border-gray-600 rounded-lg px-4 py-2 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium text-left mb-1">Email</label>
  <input name="email" id="email" type="email" placeholder="seu@exemplo.com" required className="w-full border-2 border-gray-600 rounded-lg px-4 py-2 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-medium text-left mb-1">Mensagem</label>
  <textarea name="message" id="message" rows={6} placeholder="Escreva uma mensagem..." required className="w-full border-2 border-gray-600 rounded-lg px-4 py-2 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" />
      </div>
      <div>
        <button className="button" type="submit" disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>
      </div>
      {success && <p className="text-green-600 mt-2">Mensagem enviada com sucesso!</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </form>
  );
}
