
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6 text-white">
              <span className="text-2xl font-bold">Ana Garcia</span>
            </div>
            <p className="mb-6 max-w-xs">Ofreciendo sonrisas saludables y hermosas en la comunidad de Houston desde hace más de 15 años.</p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Horario de Atención</h4>
            <ul className="space-y-4">
              <li className="flex justify-between"><span>Lunes - Viernes</span> <span className="text-white">9:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Sábados</span> <span className="text-white">10:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between"><span>Domingos</span> <span className="text-white">Cerrado</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Ubicación</h4>
            <div className="rounded-2xl overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all border border-slate-800">
               <img src="https://picsum.photos/seed/map/400/200" alt="Map Placeholder" className="w-full h-32 object-cover" />
            </div>
            <p className="mt-4 text-sm">2026 Wirt Rd #101, Houston, TX 77055</p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 Clínica Dental Ana Garcia. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
