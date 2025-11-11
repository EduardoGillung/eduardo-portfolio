import WaterRipple from '../ui/WaterRipple';
import GlowEdgeCard from '../ui/GlowEdgeCard';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 md:py-24 transition-colors duration-300 z-10" 
             style={{ color: 'var(--hero-text)' }}
             aria-labelledby="about-heading">
      <div className="relative">
        <WaterRipple />
        <div className="relative z-10 flex items-center justify-center min-h-[400px] max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlowEdgeCard>
            <div className="relative p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-center transition-colors duration-300" 
                  style={{ fontFamily: 'var(--font-bowlby-one), cursive', color: 'var(--hero-text)' }}>
                About
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-center max-w-3xl transition-colors duration-300" 
                 style={{ color: 'var(--muted-foreground)' }}>
                Lately, I&apos;ve been focusing more on frontend development and UI design 
                — bringing ideas to life through interfaces that feel good to use.
                 I&apos;m currently open to freelance opportunities and new projects that challenge my creativity and technical skills.
              </p>
              
              
            </div>
          </GlowEdgeCard>
        </div>
      </div>
    </section>
  );
}