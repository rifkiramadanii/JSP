// src/pages/AuthorGuidelines.jsx
import { FileDown, CheckCircle2, CreditCard, LayoutTemplate } from 'lucide-react';

const AuthorGuidelines = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-textmain mb-4">Author Guidelines</h1>
        <p className="text-lg text-textmain/70 max-w-2xl mx-auto">
          Panduan lengkap untuk mempersiapkan dan mengirimkan naskah Anda ke Journal of Education and Praxis.
        </p>
      </header>

      {/* Section 1: Template Download */}
      <section className="bg-secondary/30 p-8 rounded-xl border border-secondary mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-serif font-bold text-textmain mb-2 flex items-center">
            <LayoutTemplate className="text-accent mr-3" size={28} />
            Manuscript Template
          </h2>
          <p className="text-textmain/80">
            Untuk mempercepat proses review dan publikasi, semua naskah yang dikirimkan harus diformat sesuai dengan template resmi jurnal kami.
          </p>
        </div>
        <a 
          href="/JSP_Template.docx" // Ganti dengan path URL file template Word Anda nanti di public folder
          download
          className="flex-shrink-0 flex items-center bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-accent/90 transition shadow-sm hover:shadow-md"
        >
          <FileDown size={20} className="mr-2" />
          Download .DOCX Template
        </a>
      </section>

      {/* Section 2: Guide for Authors */}
      <section className="mb-12">
        <h2 className="text-2xl font-serif font-bold text-textmain mb-6 border-b border-secondary pb-2">Guide for Authors</h2>
        
        <div className="space-y-6 text-textmain/80 leading-relaxed">
          <div>
            <h3 className="text-lg font-bold text-textmain mb-2">1. General Requirements</h3>
            <ul className="space-y-2 ml-1">
              {[
                "Naskah harus orisinal, belum pernah dipublikasikan, dan tidak sedang dipertimbangkan untuk publikasi di tempat lain.",
                "Naskah ditulis dalam Bahasa Indonesia atau Bahasa Inggris yang baik dan benar.",
                "Panjang naskah idealnya berkisar antara 4.000 hingga 7.000 kata (termasuk referensi).",
                "Gunakan format font serif (seperti Times New Roman) ukuran 12pt dengan spasi 1.15 atau 1.5."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 size={18} className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-textmain mb-2">2. Manuscript Structure</h3>
            <p className="mb-3">Artikel penelitian empiris harus diatur dengan struktur berikut:</p>
            <div className="bg-white p-6 rounded-lg border border-secondary grid sm:grid-cols-2 gap-4">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Title:</strong> Singkat, padat, maksimum 15 kata.</li>
                <li><strong>Abstract:</strong> Maksimum 250 kata, mencakup tujuan, metode, hasil, dan simpulan.</li>
                <li><strong>Keywords:</strong> 3-5 kata kunci.</li>
                <li><strong>1. Introduction:</strong> Latar belakang dan tujuan penelitian.</li>
              </ul>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>2. Method:</strong> Desain penelitian, partisipan, dan instrumen.</li>
                <li><strong>3. Results & Discussion:</strong> Temuan utama dan implikasinya.</li>
                <li><strong>4. Conclusion:</strong> Simpulan ringkas dari penelitian.</li>
                <li><strong>References:</strong> Menggunakan format APA 7th Edition.</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-textmain mb-2">3. References & Citation</h3>
            <p>
              Semua pengutipan dan daftar pustaka wajib menggunakan format <strong>APA (American Psychological Association) 7th Edition</strong>. Sangat disarankan untuk menggunakan perangkat lunak manajemen referensi seperti Mendeley, Zotero, atau EndNote untuk menghindari kesalahan pengutipan.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Article Processing Charge (APC) */}
      <section className="bg-white p-8 rounded-xl border border-secondary shadow-sm">
        <h2 className="text-2xl font-serif font-bold text-textmain mb-4 flex items-center">
          <CreditCard className="text-accent mr-3" size={28} />
          Article Processing Charges (APCs)
        </h2>
        <div className="text-textmain/80 space-y-4">
          <p>
            Jurnal ini membebankan biaya publikasi untuk mendukung akses terbuka (Open Access) dan biaya pemeliharaan sistem. Biaya hanya dikenakan <strong>setelah artikel dinyatakan diterima (Accepted)</strong> melalui proses Peer-Review.
          </p>
          <ul className="space-y-2 bg-secondary/20 p-4 rounded-md">
            <li className="flex justify-between items-center border-b border-secondary/50 pb-2">
              <span>Submission Charge:</span>
              <span className="font-bold text-green-600">IDR 0 (Free)</span>
            </li>
            <li className="flex justify-between items-center pt-2">
              <span>Article Publication Charge (APC):</span>
              <span className="font-bold text-textmain">IDR 100,000</span>
            </li>
          </ul>
          <p className="text-sm italic">
            * Bagi penulis yang tidak memiliki dukungan dana (misalnya mahasiswa tanpa hibah penelitian), jurnal dapat memberikan keringanan biaya berdasarkan permintaan yang diajukan bersamaan dengan pengiriman naskah.
          </p>
        </div>
      </section>

    </div>
  );
};

export default AuthorGuidelines;