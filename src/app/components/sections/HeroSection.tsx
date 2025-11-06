import TextReveal from '../ui/TextReveal';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16">
      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7rem] font-normal leading-[0.8] tracking-tight text-gray-800 mb-2" style={{ fontFamily: 'var(--font-bowlby-one), cursive' }}>
            <TextReveal text="EDUARDO" />
          </h1>
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7rem] font-normal leading-[0.8] tracking-tight text-gray-800 ml-4 sm:ml-8 md:ml-16 lg:ml-24 xl:ml-32" style={{ fontFamily: 'var(--font-bowlby-one), cursive' }}>
            <TextReveal text="GILLUNG" />
          </h2>
        </div>
        
        <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-md md:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              Fullstack Developer with a degree in Information Systems and 3 years of experience building modern web apps.
            </p>
            
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white group">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></div>
              <span className="text-xs font-medium text-gray-600 group-hover:text-gray-800 transition-colors">
                Open to work
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}