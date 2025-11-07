import WaterRipple from '../ui/WaterRipple';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 md:py-40 transition-colors duration-300" 
             style={{ backgroundColor: 'var(--hero-bg)', color: 'var(--hero-text)' }}
             aria-labelledby="about-heading">
      <div className="relative">
        <WaterRipple />
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h3 className="text-3xl font-semibold mb-2 transition-colors duration-300" 
                style={{ fontFamily: 'var(--font-bowlby-one), cursive', color: 'var(--hero-text)' }}>
              About
            </h3>
            <p className="mb-6 transition-colors duration-300" 
               style={{ color: 'var(--muted-foreground)' }}>
              Lately, I&apos;ve been focusing more on frontend development and UI design 
              — bringing ideas to life through interfaces that feel good to use.
               I&apos;m currently open to freelance opportunities and new projects that challenge my creativity and technical skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}