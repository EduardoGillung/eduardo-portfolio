"use client";

export default function Navbar() {

  return (
    <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[90vw] max-w-xl">
      <div className="bg-black text-white rounded-full shadow-lg flex items-center justify-center px-8 py-3">
        <a href="#about" className="mx-4 hover:text-blue-400 transition">Sobre</a>
        <a href="#projects" className="mx-4 hover:text-blue-400 transition">Projetos</a>
        <a href="#contact" className="mx-4 hover:text-blue-400 transition">Contato</a>
      </div>
    </nav>
  );
}
