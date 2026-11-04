// src/pages/CurrentIssue.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Tambahkan import Clock di sini
import { FileText, Download, Clock } from 'lucide-react';
import { getCurrentIssue } from '../services/ojsApi';

const CurrentIssue = () => {
  const [issueInfo, setIssueInfo] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // Ubah state error menjadi boolean

  useEffect(() => {
    const fetchIssueData = async () => {
      try {
        const data = await getCurrentIssue();
        setIssueInfo(data.issue);
        setArticles(data.articles);
      } catch (err) {
        console.error("Error fetching current issue:", err);
        setError(true); // Set error menjadi true
      } finally {
        setLoading(false);
      }
    };

    fetchIssueData();
  }, []);

  // Tampilan saat menunggu data dari API
  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center pt-32">
        <p className="text-xl text-textmain/60 animate-pulse">Memuat edisi terbaru...</p>
      </div>
    );
  }

  // Tampilan jika terjadi error atau data edisi kosong (Tampilan Segera Hadir)
  if (error || !issueInfo) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="flex flex-col items-center justify-center py-24 px-4 bg-secondary/20 rounded-xl border-2 border-dashed border-secondary/60 shadow-sm">
          <Clock className="w-16 h-16 text-accent/50 mb-6 animate-pulse" />
          <h2 className="text-3xl font-serif font-bold text-textmain mb-4">Edisi Segera Hadir</h2>
          <p className="text-textmain/70 text-center max-w-lg leading-relaxed text-lg">
            Edisi terbaru saat ini sedang dalam tahap kurasi dan persiapan akhir. Kami tidak sabar untuk segera membagikan publikasi riset terbaik kepada Anda.
          </p>
          <Link 
            to="/" 
            className="mt-8 px-6 py-3 bg-accent text-white rounded-md font-medium hover:bg-accent/90 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      
      {/* Header Issue */}
      <header className="mb-12 border-b-2 border-secondary pb-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl font-serif font-bold text-textmain mb-2">Current Issue</h1>
          <p className="text-xl text-accent font-medium">
            Vol. {issueInfo.volume} No. {issueInfo.number} ({issueInfo.year})
          </p>
          <p className="text-textmain/70 mt-2">
            {issueInfo.title} {issueInfo.datePublished && `• Published: ${issueInfo.datePublished}`}
          </p>
        </div>
        
        {/* Anda bisa mengubah tombol ini nanti jika ada link PDF Full Issue */}
        <div className="mt-6 sm:mt-0 bg-secondary/40 px-6 py-4 rounded-lg text-center border border-secondary">
          <BookOpenIcon className="mx-auto text-accent mb-2" size={28} />
          <span className="block font-bold text-textmain">Full Issue PDF</span>
        </div>
      </header>

      {/* Daftar Artikel */}
      <div className="space-y-6">
        <h2 className="text-2xl font-serif font-bold text-textmain mb-6">Articles</h2>
        
        {articles.length === 0 ? (
          <div className="p-8 text-center border border-secondary rounded-lg bg-secondary/10">
            <p className="text-textmain/70">Belum ada artikel yang diterbitkan pada edisi ini.</p>
          </div>
        ) : (
          articles.map((article) => (
            <div key={article.id} className="group bg-white p-6 rounded-lg border border-secondary hover:border-accent hover:shadow-md transition-all duration-300">
              <Link to={`/article/${article.id}`}>
                <h3 className="text-xl font-serif font-bold text-textmain group-hover:text-accent mb-2 transition-colors">
                  {article.title}
                </h3>
              </Link>
              
              {/* OJS tidak selalu mengirimkan 'pages' di API dasar, jadi saya ganti dengan DOI jika ada */}
              <p className="text-textmain/70 mb-4">
                {article.authors} 
                {article.doi && article.doi !== 'Tidak ada DOI' && (
                  <> <span className="text-secondary mx-2">|</span> DOI: {article.doi} </>
                )}
              </p>
              
              <div className="flex gap-4">
                <Link to={`/article/${article.id}`} className="inline-flex items-center text-sm font-medium text-textmain hover:text-accent transition-colors">
                  <FileText size={16} className="mr-1" /> Abstract
                </Link>
                
                {/* Tombol Download PDF (Hanya muncul jika OJS menyediakan link PDF-nya) */}
                {article.pdfDownloadUrl ? (
                  <a 
                    href={article.pdfDownloadUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-accent hover:text-textmain transition-colors"
                  >
                    <Download size={16} className="mr-1" /> PDF
                  </a>
                ) : (
                  <span className="inline-flex items-center text-sm font-medium text-textmain/40 cursor-not-allowed">
                    <Download size={16} className="mr-1" /> PDF Tidak Tersedia
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Dummy icon for header
const BookOpenIcon = ({ size, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

export default CurrentIssue;