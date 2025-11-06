export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="font-bowlby text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[10rem] font-normal leading-[0.8] tracking-tight text-gray-900 mb-2">
            EDUARDO
          </h1>
          <h2 className="font-bowlby text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[10rem] font-normal leading-[0.8] tracking-tight text-gray-900 ml-4 sm:ml-8 md:ml-16 lg:ml-24 xl:ml-32">
            GILLUNG
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 max-w-6xl mx-auto">
          <div className="flex-1 text-left max-w-2xl">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Fullstack Developer with a degree in Information Systems and 2 years of experience building modern web apps. 

            </p>
          </div>
          
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-full px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white group">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-sm"></div>
            <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
              Open to work
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}