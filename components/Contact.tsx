
import React from 'react';
import { MapPin, Phone, Globe, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-blue-200 font-bold tracking-widest uppercase text-sm mb-4">Estamos aquí para ayudarte</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Contáctanos</h3>
              <p className="text-blue-100 text-lg">Envíanos un mensaje para agendar tu consulta o resolver cualquier duda.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Dirección</h4>
                  <p className="text-blue-100">2026 Wirt Rd #101, Houston, TX 77055</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500 rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Teléfono</h4>
                  <p className="text-blue-100">(713) 682-4311</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500 rounded-xl">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Sitio Web</h4>
                  <p className="text-blue-100">anagarciadds.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Nombre</label>
                  <input type="text" placeholder="Tu nombre" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Correo Electrónico</label>
                  <input type="email" placeholder="hola@ejemplo.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Mensaje</label>
                <textarea rows={4} placeholder="¿En qué podemos ayudarte?" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
