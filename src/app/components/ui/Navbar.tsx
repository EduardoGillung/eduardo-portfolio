"use client";

export default function Navbar() {

  return (
  <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[90vw] max-w-md">
      <div className="bg-black border-1 border-gray-800 text-white rounded-full shadow-lg flex items-center justify-center px-8 py-3">
        <a href="#about" className="mx-4 hover:text-red-600 transition">Sobre</a>
        <a href="#projects" className="mx-4 hover:text-red-600 transition">Projetos</a>
        <a href="#contact" className="mx-4 hover:text-red-600 transition">Contato</a>
      </div>
    </nav>
  );
}
