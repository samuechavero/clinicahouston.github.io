
import React, { useState } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Stethoscope className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 leading-tight">Clínica Dental</h1>
              <p className="text-blue-600 font-semibold text-lg leading-none">Ana Garcia</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Inicio</a>
            <a href="#servicios" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Servicios</a>
            <a href="#nosotros" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Nosotros</a>
            <a href="#testimonios" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Testimonios</a>
            <a href="#contacto" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-semibold">Agendar Cita</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full left-0 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col p-4 gap-4">
            <a href="#inicio" onClick={() => setIsOpen(false)} className="text-slate-600 py-2">Inicio</a>
            <a href="#servicios" onClick={() => setIsOpen(false)} className="text-slate-600 py-2">Servicios</a>
            <a href="#nosotros" onClick={() => setIsOpen(false)} className="text-slate-600 py-2">Nosotros</a>
            <a href="#testimonios" onClick={() => setIsOpen(false)} className="text-slate-600 py-2">Testimonios</a>
            <a href="#contacto" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white px-6 py-3 rounded-xl text-center font-bold">Agendar Cita</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
