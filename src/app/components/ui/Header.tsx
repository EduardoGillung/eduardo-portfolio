'use client';

import Image from 'next/image';
import Navbar from './Navbar';
import LiquidSwitcher from './LiquidSwitcher';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Profile section à esquerda */}
          <a href="#top" className="flex items-center gap-3 flex-shrink-0 hover:opacity-80 transition-opacity duration-200 cursor-pointer">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 border-2 border-gray-300">
              <Image 
                src="/me.png" 
                alt="Eduardo Gillung" 
                width={40} 
                height={40} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-400 leading-tight">
                Eduardo Gillung
              </h1>
              <p className="text-sm text-gray-600 leading-tight">
                Front-end developer
              </p>
            </div>
          </a>

          {/* Navbar centralizada */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <Navbar />
          </div>

          {/* Navbar mobile (opcional para futuro) */}
          <div className="md:hidden">
            <Navbar />
          </div>

          {/* Liquid Switcher à direita */}
          <div className="flex-shrink-0">
            <LiquidSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}