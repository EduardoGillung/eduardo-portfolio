import TextReveal from '../ui/TextReveal';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-32 transition-colors duration-300 z-10" style={{ color: 'var(--hero-text)' }}>
      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7rem] font-normal leading-[0.8] tracking-tight mb-2 transition-colors duration-300 overflow-visible" style={{ fontFamily: 'var(--font-bowlby-one), cursive', color: 'var(--hero-text)', textShadow: '0 0 0 transparent' }}>
            <TextReveal text="EDUARDO" />
          </h1>
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7rem] font-normal leading-[0.8] tracking-tight ml-4 sm:ml-8 md:ml-16 lg:ml-24 xl:ml-32 transition-colors duration-300 overflow-visible" style={{ fontFamily: 'var(--font-bowlby-one), cursive', color: 'var(--hero-text)', textShadow: '0 0 0 transparent' }}>
            <TextReveal text="GILLUNG" />
          </h2>
        </div>
        
        <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-md md:text-xl lg:text-2xl leading-relaxed mb-8 transition-colors duration-300" style={{ color: 'var(--muted-foreground)' }}>
              Fullstack Developer with a degree in Information Systems and 3 years of experience building modern web apps.
            </p>
            
            <div className="inline-flex items-center gap-2 backdrop-blur-sm border rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300 group" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--card-text)' }}>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></div>
              <span className="text-xs font-medium transition-colors group-hover:opacity-80">
                Open to work
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}