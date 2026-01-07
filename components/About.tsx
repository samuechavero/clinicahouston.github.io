
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71f1e3c77d?q=80&w=2070&auto=format&fit=crop" 
              alt="Nuestro equipo" 
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full flex items-center justify-center text-white text-center p-4 border-8 border-white shadow-xl rotate-12 hidden md:flex">
              <div>
                <p className="text-2xl font-bold">15+</p>
                <p className="text-xs font-medium uppercase tracking-tighter">Años de Exp.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Conócenos</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Sobre Nosotros</h3>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              En la <span className="font-semibold text-slate-900">Clínica Dental Ana Garcia</span>, nuestro equipo experimentado brinda atención profesional en un ambiente seguro y amigable. Tu salud dental es nuestra prioridad absoluta.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Creemos que una sonrisa saludable puede cambiar vidas. Por eso, nos esforzamos en crear una experiencia relajante, eliminando la ansiedad dental común y enfocándonos en resultados duraderos y estéticos.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-blue-600">98%</p>
                <p className="text-slate-600 font-medium">Satisfacción</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-blue-600">12k</p>
                <p className="text-slate-600 font-medium">Procedimientos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
