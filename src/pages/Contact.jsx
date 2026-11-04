// src/pages/Contact.jsx
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-textmain mb-4">Contact Us</h1>
        <p className="text-lg text-textmain/70 max-w-2xl mx-auto">
          Jika Anda memiliki pertanyaan seputar proses submission, panduan penulis, atau kerjasama, jangan ragu untuk menghubungi kami.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Contact Info */}
        <div className="bg-white p-8 rounded-xl border border-secondary shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-textmain mb-6">Principal Contact</h2>
          
          <ul className="space-y-6">
            <li className="flex items-start">
              <Mail className="text-accent mt-1 mr-4" size={24} />
              <div>
                <p className="font-bold text-textmain">Email</p>
                <a href="mailto:pscendekia@gmail.com" className="text-textmain/70 hover:text-accent transition-colors">pscendekia@gmail.com</a>
              </div>
            </li>
            <li className="flex items-start">
              <Phone className="text-accent mt-1 mr-4" size={24} />
              <div>
                <p className="font-bold text-textmain">Phone / WhatsApp</p>
                <p className="text-textmain/70">+62 823 8640 1813</p>
              </div>
            </li>
            <li className="flex items-start">
              <Globe className="text-accent mt-1 mr-4" size={24} />
              <div>
                <p className="font-bold text-textmain">Website</p>
                <a href="https://j-psc.com" className="text-textmain/70 hover:text-accent transition-colors">www.j-psc.com</a>
              </div>
            </li>
          </ul>
        </div>

        {/* Publisher Address */}
        <div className="bg-secondary/30 p-8 rounded-xl border border-secondary">
          <h2 className="text-2xl font-serif font-bold text-textmain mb-6">Publisher Address</h2>
          
          <div className="flex items-start mb-6">
            <MapPin className="text-accent mt-1 mr-4 shrink-0" size={24} />
            <div>
              <p className="font-bold text-textmain">Kota Padang</p>
              <p className="text-textmain/80 leading-relaxed mt-2">
                Lubuk Buaya, Kota Padang <br />
                Jl. Lubuk Gading Permai III, Blok I, No. 4 <br />
                Padang, Indonesia 40123
              </p>
            </div>
          </div>

          <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden relative">
            {/* Placeholder untuk Google Maps Iframe */}
            <div className="absolute inset-0 flex items-center justify-center text-textmain/40 font-medium bg-secondary/50">
              [ Google Maps Embed ]
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;