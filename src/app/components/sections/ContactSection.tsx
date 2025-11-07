import ContactForm from "../ui/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 md:py-40 flex flex-col items-center justify-center text-center mx-auto max-w-2xl px-4 transition-colors duration-300" 
             style={{ backgroundColor: 'var(--hero-bg)', color: 'var(--hero-text)' }}
             aria-labelledby="contact-heading">
      <div>
        <h3 className="text-3xl md:text-3xl font-bold mb-6 text-center transition-colors duration-300" 
            style={{ fontFamily: 'var(--font-bowlby-one), cursive', color: 'var(--hero-text)' }}>
          Contact
        </h3>
        <p className="lead transition-colors duration-300" 
           style={{ color: 'var(--muted-foreground)' }}>
          Let&apos;s build something great together. Reach out if you have an idea, a project, or just want to connect.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
