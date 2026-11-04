// src/pages/ArticleDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Quote, Tag } from 'lucide-react';
import { getArticleDetails } from '../services/ojsApi';

const ArticleDetail = () => {
  const { id } = useParams(); // Mengambil ID dari URL (/article/:id)
  
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const data = await getArticleDetails(id);
        setArticle(data);
      } catch (err) {
        console.error("Error fetching article details:", err);
        setError("Gagal memuat detail artikel. Silakan periksa kembali tautan Anda.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  // Tampilan saat proses memuat data
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-xl text-textmain/60 animate-pulse">Memuat detail artikel...</p>
      </div>
    );
  }

  // Tampilan jika terjadi error atau artikel tidak ditemukan
  if (error || !article) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-xl text-red-500 mb-4">{error || "Artikel tidak ditemukan."}</p>
        <Link to="/" className="text-accent font-medium hover:underline flex items-center justify-center">
          <ArrowLeft size={16} className="mr-2" /> Kembali ke Beranda
        </Link>
      </div>
    );
  }

  // Membuat format sitasi otomatis (karena API bawaan tidak menyediakan sitasi baku)
  const pubYear = article.datePublished ? new Date(article.datePublished).getFullYear() : new Date().getFullYear();
  const autoCitation = `${article.authors}. (${pubYear}). ${article.title}. Journal of Social and Praxis.`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      
      {/* Menggunakan fitur back history atau link statis */}
      <Link to="/current" className="inline-flex items-center text-textmain/60 hover:text-accent mb-8 transition-colors">
        <ArrowLeft size={16} className="mr-2" /> Back to Issue
      </Link>

      <header className="space-y-4 mb-12 border-b border-secondary pb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-textmain leading-snug">
          {article.title}
        </h1>
        
        <div className="flex flex-wrap items-center text-sm text-textmain/80 gap-y-2">
          {/* Authors dari backend sudah berbentuk string utuh */}
          <p className="font-medium mr-4">{article.authors}</p>
          <span className="hidden sm:inline text-secondary mr-4">|</span>
          <p className="mr-4">Published: {article.datePublished}</p>
          
          {/* Cek apakah ada DOI yang valid */}
          {article.doi && article.doi !== 'Tidak ada DOI' && (
            <>
              <span className="hidden sm:inline text-secondary mr-4">|</span>
              <a href={article.doi.startsWith('http') ? article.doi : `https://doi.org/${article.doi}`} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                DOI: {article.doi}
              </a>
            </>
          )}
        </div>

        <div className="pt-4">
          {/* Tombol PDF: Tampil jika URL PDF tersedia, jika tidak maka disabled */}
          {article.pdfDownloadUrl ? (
            <a 
              href={article.pdfDownloadUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center bg-accent text-white px-6 py-2.5 rounded-md font-medium hover:bg-accent/90 transition shadow-sm hover:shadow-md transform hover:-translate-y-0.5 duration-200"
            >
              <Download size={18} className="mr-2" /> Download PDF
            </a>
          ) : (
            <span className="inline-flex items-center bg-secondary/50 text-textmain/50 px-6 py-2.5 rounded-md font-medium cursor-not-allowed">
              <Download size={18} className="mr-2" /> PDF Belum Tersedia
            </span>
          )}
        </div>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-textmain mb-4 uppercase tracking-wide">Abstract</h2>
        
        {/* Hati-hati, abstrak dari OJS kadang memiliki tag HTML bawaan, 
            kita gunakan text-justify, tapi jika abstraknya kacau karena tag <p>, 
            bisa kita bahas penanganannya */}
        <div className="text-textmain/80 leading-relaxed text-justify mb-6 whitespace-pre-wrap">
          {/* Jika abstrak mengandung HTML murni dari OJS, Anda mungkin perlu mengubah ini jadi dangerouslySetInnerHTML */}
          {article.abstract.replace("<p>","").replace("</p>", "")}
        </div>

        {/* Section Keywords */}
        {article.keywords && article.keywords.length > 0 && (
          <div className="flex items-start gap-3 mt-6">
            <Tag size={20} className="text-accent mt-0.5 flex-shrink-0" />
            <div className="flex flex-wrap gap-2">
              {article.keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className="bg-secondary/40 text-textmain text-sm px-3 py-1 rounded-full border border-secondary hover:border-accent transition-colors"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="bg-secondary/40 p-6 rounded-lg border border-secondary">
        <h2 className="text-lg font-bold text-textmain mb-3 flex items-center">
          <Quote size={18} className="mr-2 text-accent" /> How to Cite
        </h2>
        <p className="font-mono text-sm text-textmain/90 break-words">
          {autoCitation}
        </p>
      </section>

    </div>
  );
};

export default ArticleDetail;