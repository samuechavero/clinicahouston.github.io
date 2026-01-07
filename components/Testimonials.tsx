
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Nanura Harnez",
    role: "Paciente Regular",
    text: "Excelente atención de la Dra. Ana y todo su equipo. Me sentí muy cómodo durante mi tratamiento de ortodoncia. Los resultados son increíbles.",
    avatar: "https://i.pravatar.cc/150?u=1",
    rating: 5
  },
  {
    name: "Lura Stetin",
    role: "Nuevo Paciente",
    text: "La mejor limpieza dental que me han hecho. Muy profesionales y el lugar es impecable. Recomiendo ampliamente el blanqueamiento LED.",
    avatar: "https://i.pravatar.cc/150?u=2",
    rating: 4
  },
  {
    name: "Carlos Méndez",
    role: "Paciente Estético",
    text: "Buscaba un cambio en mi sonrisa y superaron mis expectativas. El proceso fue indoloro y muy rápido. ¡Gracias equipo!",
    avatar: "https://i.pravatar.cc/150?u=3",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Experiencias reales</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Testimonios</h3>
          <p className="text-slate-600">Más de 2,500 reseñas, con un promedio de 4.8 estrellas.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, starIndex) => (
                  <Star 
                    key={starIndex} 
                    className={`w-5 h-5 ${starIndex < t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} 
                  />
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full ring-4 ring-white shadow-md" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
