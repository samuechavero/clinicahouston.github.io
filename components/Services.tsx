
import React from 'react';
import { Syringe, Sparkles, Smile, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Limpieza Dental',
    description: 'Eliminación profunda de sarro y placa para prevenir caries.',
    icon: <Syringe className="w-8 h-8" />,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Ortodoncia',
    description: 'Brackets y alineadores para una sonrisa perfectamente alineada.',
    icon: <ShieldCheck className="w-8 h-8" />,
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    title: 'Blanqueamiento',
    description: 'Tecnología LED para aclarar varios tonos en una sesión.',
    icon: <Sparkles className="w-8 h-8" />,
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    title: 'Revisiones Regulares',
    description: 'Chequeos preventivos para mantener tu salud bucal óptima.',
    icon: <Smile className="w-8 h-8" />,
    color: 'bg-teal-100 text-teal-600'
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Lo que ofrecemos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Nuestros Servicios</h3>
          <p className="text-slate-600">Cuidamos cada detalle de tu salud dental con tratamientos personalizados y mínimamente invasivos.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100 transition-all group">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
              <button className="mt-6 text-blue-600 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Saber más <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
