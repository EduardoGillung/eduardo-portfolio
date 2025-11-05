'use client';

import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Título à esquerda */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-lg font-semibold text-gray-800 hover:text-gray-600 transition-colors">
              <a href="#" className="no-underline">
                Eduardo Gillung
              </a>
            </h1>
          </div>

          {/* Navbar centralizada */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <Navbar />
          </div>

          {/* Navbar mobile (opcional para futuro) */}
          <div className="md:hidden">
            <Navbar />
          </div>

          {/* Espaço para balanceamento */}
          <div className="flex-shrink-0 w-32"></div>
        </div>
      </div>
    </header>
  );
}