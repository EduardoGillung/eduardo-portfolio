import ContactForm from "../ui/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="flex flex-col items-center justify-center text-center mx-auto my-16 max-w-2xl px-4" aria-labelledby="contact-heading">
      <div>
        <h2 id="contact-heading">Contato</h2>
        <p className="lead">Vamos conversar? Me envie uma mensagem abaixo.</p>
        <ContactForm />
      </div>
    </section>
  );
}
