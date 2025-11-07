import ContactForm from "../ui/ContactForm";
import GlowEdgeCard from "../ui/GlowEdgeCard";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 transition-colors duration-300" 
             style={{ backgroundColor: 'var(--hero-bg)', color: 'var(--hero-text)' }}
             aria-labelledby="contact-heading">
      <div className="relative z-10 flex items-center justify-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlowEdgeCard>
          <div className="p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-semibold mb-6 transition-colors duration-300" 
                style={{ fontFamily: 'var(--font-bowlby-one), cursive', color: 'var(--hero-text)' }}>
              Contact
            </h3>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300" 
               style={{ color: 'var(--muted-foreground)' }}>
              Let&apos;s build something great together. Reach out if you have an idea, a project, or just want to connect.
            </p>
            <ContactForm />
          </div>
        </GlowEdgeCard>
      </div>
    </section>
  );
}
