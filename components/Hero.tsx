
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 md:pt-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Atención inmediata
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Cuidado dental <span className="text-blue-600">profesional y confiable</span> en Houston
            </h1>
            <p className="text-lg text-slate-600 max-w-lg">
              Ofrecemos soluciones integrales para tu salud bucal con la tecnología más avanzada y un trato humano excepcional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1">
                Agendar Cita
              </a>
              <a href="#servicios" className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-2xl hover:bg-slate-50 transition-all">
                Nuestros Servicios
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100/50 rounded-3xl -rotate-2 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
              alt="Dentista trabajando"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?u=${i}`} alt="Patient" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">+2,500 Clientes</p>
                  <div className="flex text-yellow-400 w-4 h-4">
                    {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -z-20 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -z-20 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
    </section>
  );
};

export default Hero;
