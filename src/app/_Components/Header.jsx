"use client"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-yellow-400 shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand Name */}
          <div className="text-2xl font-bold text-slate-800">
            تاكسي صباح السالم
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            <a 
              href="/" 
              className="text-slate-800 hover:text-slate-600 font-semibold transition-colors duration-300"
            >
              الرئيسية
            </a>
            <a 
              href="/contact" 
              className="text-slate-800 hover:text-slate-600 font-semibold transition-colors duration-300"
            >
              اتصل بنا
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              <a 
                href="/" 
                className="text-slate-800 hover:text-slate-600 font-semibold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </a>
              <a 
                href="/contact" 
                className="text-slate-800 hover:text-slate-600 font-semibold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                اتصل بنا
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}