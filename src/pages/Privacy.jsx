import { ShieldCheck, Mail, Database, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-4 border-b border-gray-200 pb-8">
        <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-blue-50 text-[#1E40AF] mb-2">
          <ShieldCheck size={32} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-[#0F172A]">Privacy Statement</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Kebijakan privasi mengenai pengumpulan, penggunaan, dan perlindungan data pribadi Anda pada Journal of Social and Praxis (JSP).
        </p>
      </div>

      <div className="glass-panel p-8 md:p-10 rounded-2xl space-y-8">
        
        {/* Section 1: Penggunaan Data */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-2">
            <Database className="text-[#0EA5E9]" size={24} />
            <h2 className="text-xl font-bold font-serif text-[#1E40AF]">1. Penggunaan Data Pribadi</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            Nama dan alamat email yang dimasukkan ke dalam situs jurnal ini, baik melalui proses pendaftaran di Open Journal Systems (OJS) maupun melalui korespondensi langsung, akan digunakan secara eksklusif untuk tujuan dari jurnal ini (misalnya, komunikasi terkait proses <em>peer-review</em>, pengeditan, dan notifikasi penerbitan).
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Data pribadi Anda <strong>tidak akan disediakan</strong> untuk tujuan lain apa pun atau dibagikan kepada pihak ketiga di luar tim redaksi dan penerbit.
          </p>
        </section>

        {/* Section 2: Data Publik */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-2">
            <Globe className="text-[#0EA5E9]" size={24} />
            <h2 className="text-xl font-bold font-serif text-[#1E40AF]">2. Informasi Publik pada Artikel</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            Sebagai jurnal ilmiah <em>Open Access</em>, ketika naskah Anda diterbitkan, beberapa informasi dasar penulis akan tersedia untuk publik pada metadata artikel. Ini meliputi nama penulis, afiliasi/institusi, alamat email korespondensi, dan ORCID iD (jika disertakan). Hal ini dilakukan untuk memfasilitasi komunikasi ilmiah sesuai dengan standar etika publikasi akademik.
          </p>
        </section>

        {/* Section 3: Keamanan Data */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-2">
            <Lock className="text-[#0EA5E9]" size={24} />
            <h2 className="text-xl font-bold font-serif text-[#1E40AF]">3. Keamanan Sistem (OJS)</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            Website <em>frontend</em> ini menampilkan data yang dikelola secara terpusat oleh sistem backend Open Journal Systems (OJS). Platform OJS kami mematuhi pedoman keamanan standar yang ditetapkan oleh Public Knowledge Project (PKP) untuk melindungi pengguna dari peretasan dan penyalahgunaan data.
          </p>
        </section>

        {/* Section 4: Kontak */}
        <section className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 mt-8">
          <div className="flex items-start gap-4">
            <Mail className="text-[#1E40AF] mt-1 shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-[#0F172A] mb-1">Punya pertanyaan soal privasi data Anda?</h3>
              <p className="text-sm text-gray-700 mb-3">
                Jika Anda ingin menarik kembali data Anda atau menghapus akun OJS, silakan hubungi tim dukungan kami.
              </p>
              <Link to="/contact" className="text-sm font-semibold text-[#1E40AF] hover:text-[#0EA5E9] hover:underline transition">
                Hubungi Tim Redaksi &rarr;
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

// Tambahan komponen Globe karena tidak diimport dari lucide-react di atas
function Globe(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}