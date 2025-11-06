import WaterRipple from '../ui/WaterRipple';

export default function AboutSection() {
  return (
    <section id="about" className="pt-24 md:pt-32 pb-16" aria-labelledby="about-heading">
      <div className="relative">
        <WaterRipple />
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h3 className="text-3xl font-semibold mb-2 text-gray-800" style={{ fontFamily: 'var(--font-bowlby-one), cursive' }}>About</h3>
            <p className="text-gray-600 mb-6">
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