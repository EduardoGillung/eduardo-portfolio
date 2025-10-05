export default function ContactForm() {
  return (
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <label>
        Nome
        <input name="name" placeholder="Seu nome" />
      </label>
      <label>
        Email
        <input name="email" type="email" placeholder="seu@exemplo.com" />
      </label>
      <label>
        Mensagem
        <textarea name="message" rows={6} placeholder="Escreva uma mensagem..." />
      </label>
      <div>
        <button className="button" type="submit">Enviar</button>
      </div>
    </form>
  );
}
