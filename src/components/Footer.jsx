// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Otomatis tahun saat ini (2026)

  return (
    <footer className="bg-secondary/20 border-t border-secondary mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          
          {/* Kolom 1: Tentang Penerbit */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-textmain">
              Penerbit Sakata Cendikia
            </h3>
            <p className="text-textmain/80 leading-relaxed text-sm text-justify">
              Komitmen kami adalah menerbitkan karya akademik berkualitas tinggi yang berkontribusi pada pengembangan ilmu pengetahuan.
            </p>
          </div>

          {/* Kolom 2: Kontak */}
          <div>
            <h3 className="text-lg font-bold text-textmain mb-5">Kontak</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:pscendekia@gmail.com" className="flex items-start group">
                  <Mail size={18} className="text-accent mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-textmain/80 group-hover:text-accent transition-colors">
                    info@j-psc.com
                  </span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/6281266899282" target="_blank" rel="noreferrer" className="flex items-start group">
                  <Phone size={18} className="text-accent mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-textmain/80 group-hover:text-accent transition-colors">
                    +62 812-6689-9282
                  </span>
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-textmain/80 leading-relaxed">
                  Padang, Indonesia
                </span>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Tautan */}
          <div>
            <h3 className="text-lg font-bold text-textmain mb-5">Tautan</h3>
            <ul className="space-y-3">
              {[
                { label: 'Tentang Kami', path: '/about' },
                { label: 'Jurnal', path: '/archives' }, // Mengarah ke halaman archives/daftar issue
                { label: 'Kebijakan Privasi', path: '/privacy' },
                { label: 'Syarat dan Ketentuan', path: '/terms' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center text-sm text-textmain/80 hover:text-accent transition-colors"
                  >
                    <ChevronRight size={14} className="text-accent opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 mr-1.5 transition-all duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bagian Bawah: Copyright */}
        <div className="mt-12 pt-8 border-t border-secondary/60 flex flex-col items-center text-center">
          <p className="text-sm text-textmain/60">
            © {currentYear} Penerbit Sakata Cendikia. Hak cipta dilindungi.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;