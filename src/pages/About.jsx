// src/pages/About.jsx
import { BookOpen, Scale, Eye, FileCheck } from 'lucide-react';

const About = () => {
  const sections = [
    {
      title: "Focus and Scope",
      icon: <Eye className="text-accent mb-4" size={32} />,
      content: "Journal of Education and Praxis (JEP) berfokus pada publikasi penelitian orisinal yang menjembatani kesenjangan antara teori pendidikan dan praktik di lapangan (praxis). Ruang lingkup kami mencakup inovasi pedagogik, teknologi pendidikan, kurikulum, dan pendidikan inklusif."
    },
    {
      title: "Peer Review Process",
      icon: <FileCheck className="text-accent mb-4" size={32} />,
      content: "Setiap artikel yang disubmit akan melalui proses Double-Blind Peer Review oleh minimal dua mitra bestari (reviewer) yang ahli di bidangnya. Keputusan penerimaan didasarkan pada orisinalitas, kebaruan, dan kontribusi terhadap ilmu pendidikan."
    },
    {
      title: "Open Access Policy",
      icon: <BookOpen className="text-accent mb-4" size={32} />,
      content: "Jurnal ini menyediakan akses terbuka langsung (Open Access) pada semua kontennya dengan prinsip bahwa membuat penelitian tersedia secara gratis untuk publik akan mendukung pertukaran pengetahuan global yang lebih besar."
    },
    {
      title: "Publication Ethics",
      icon: <Scale className="text-accent mb-4" size={32} />,
      content: "Kami berpegang teguh pada standar etika publikasi tertinggi. Plagiarisme, manipulasi data, dan fabrikasi tidak dapat ditoleransi. Semua penulis wajib memastikan karya yang dikirimkan adalah asli dan belum pernah diterbitkan sebelumnya."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-textmain mb-4">About the Journal</h1>
        <p className="text-lg text-textmain/70 max-w-2xl mx-auto">
          Mempelajari lebih lanjut tentang tujuan, kebijakan, dan komitmen kami terhadap kualitas publikasi akademik.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white p-8 rounded-xl border border-secondary hover:shadow-lg transition-shadow duration-300">
            {section.icon}
            <h2 className="text-xl font-serif font-bold text-textmain mb-3">{section.title}</h2>
            <p className="text-textmain/80 leading-relaxed text-justify">{section.content}</p>
          </div>
        ))}
      </div>

      <section className="bg-secondary/30 p-8 rounded-xl border border-secondary">
        <h2 className="text-2xl font-serif font-bold text-textmain mb-4">Publication Frequency</h2>
        <p className="text-textmain/80 leading-relaxed">
          Journal of Education and Praxis diterbitkan secara berkala <strong>2 (dua) kali dalam setahun</strong>, yaitu pada bulan <strong>Juni</strong> dan <strong>Desember</strong>. Setiap terbitan memuat minimal 10 artikel penelitian.
        </p>
      </section>
    </div>
  );
};

export default About;