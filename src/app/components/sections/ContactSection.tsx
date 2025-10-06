import ContactForm from "../ui/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="flex flex-col items-center justify-center text-center mx-auto my-16 max-w-2xl px-4" aria-labelledby="contact-heading">
      <div>
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">Contact</h1>
        <p className="lead text-gray-500">Let’s build something great together. Reach out if you have an idea, a project, or just want to connect.</p>
        <ContactForm />
      </div>
    </section>
  );
}
