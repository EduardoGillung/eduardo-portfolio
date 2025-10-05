import ContactForm from "../ui/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="page-section contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading">Contato</h2>
        <p className="lead">Vamos conversar? Me envie uma mensagem abaixo.</p>
        <ContactForm />
      </div>
    </section>
  );
}
