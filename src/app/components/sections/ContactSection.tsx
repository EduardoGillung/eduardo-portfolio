import ContactForm from "../ui/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="flex flex-col items-center justify-center text-center mx-auto my-16 max-w-2xl px-4" aria-labelledby="contact-heading">
      <div>
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">Contact</h1>
        <p className="lead">Vamos conversar? Me envie uma mensagem abaixo.</p>
        <ContactForm />
      </div>
    </section>
  );
}
