"use client";

export default function Navbar() {
  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="flex items-center">
      <div className="font-semibold text-gray-700 rounded-full flex items-center justify-center px-8 py-3 text-sm">
        <button 
          onClick={() => handleScrollTo('about')} 
          className="mx-4 hover:text-gray-500 transition cursor-pointer"
        >
          Sobre
        </button>
        <button 
          onClick={() => handleScrollTo('projects')} 
          className="mx-4 hover:text-gray-500 transition cursor-pointer"
        >
          Projetos
        </button>
        <button 
          onClick={() => handleScrollTo('contact')} 
          className="mx-4 hover:text-gray-500 transition cursor-pointer"
        >
          Contato
        </button>
      </div>
    </nav>
  );
}
