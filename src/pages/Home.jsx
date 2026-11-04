// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, FileText, Users, Globe, Clock, BookOpen, Send } from 'lucide-react';
import { getCurrentIssue } from '../services/ojsApi'; 

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [issueInfo, setIssueInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const data = await getCurrentIssue();
        
        setIssueInfo(data.issue);
        setArticles(data.articles.slice(0, 4)); 
      } catch (err) {
        console.error(err);
        setError(true); 
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20 pt-20">
      
      {/* 1. About Journal (Hero Section) */}
      <section className="text-center space-y-6 pt-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-textmain leading-tight">
          Journal of Social and Praxis
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-textmain/80 leading-relaxed">
          Jurnal yang berfokus pada penelitian ilmu sosial dan praktik sosial. JSP menerbitkan artikel-artikel yang mengeksplorasi dinamika sosial, kebijakan publik, dan transformasi masyarakat dengan pendekatan interdisipliner.
        </p>
        
        {/* NEW: Call for Papers Announcement on Hero */}
        <div className="pt-4 flex justify-center animate-fade-in-up">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-accent/10 border border-accent/20 py-2.5 px-5 rounded-full shadow-sm">
            <span className="flex h-3 w-3 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-textmain text-sm md:text-base">
              <strong className="font-semibold text-accent">Call for Papers:</strong> Kami menerima naskah untuk publikasi edisi mendatang.
            </span>
            <a 
              href="https://jspsubmission.j-psc.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-sm md:text-base font-bold text-accent hover:text-accent/80 transition-colors bg-white/50 px-3 py-1 rounded-full hover:bg-white"
            >
              Submit <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Journal Overview (Stats) - Statis */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {[
          { label: 'Published Articles', value: 'TBA', icon: <FileText className="text-accent mb-2 mx-auto" /> },
          { label: 'Active Researchers', value: 'TBA', icon: <Users className="text-accent mb-2 mx-auto" /> },
          { label: 'Volumes', value: 'TBA', icon: <Globe className="text-accent mb-2 mx-auto" /> },
          { label: 'Active Years', value: 'Since 2026', icon: <ChevronRight className="text-accent mb-2 mx-auto" /> },
        ].map((stat, idx) => (
          <div key={idx} className="bg-secondary/30 p-6 rounded-lg text-center border border-secondary hover:shadow-md transition-shadow duration-300">
            {stat.icon}
            <h3 className="text-3xl font-bold text-textmain mb-1">{stat.value}</h3>
            <p className="text-sm text-textmain/70 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* 3. Current Issue Preview - DINAMIS */}
      <section>
        <div className="flex justify-between items-end mb-8 border-b-2 border-secondary pb-4">
          <div>
            <h2 className="text-3xl font-serif font-bold text-textmain">Current Issue</h2>
            <p className="text-textmain/70 mt-1">
              {issueInfo ? issueInfo.title : 'Mempersiapkan publikasi terbaru...'}
            </p>
          </div>
          <Link to="/current" className="text-accent font-medium hover:underline flex items-center">
            View All <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        
        {/* State Handling: Loading */}
        {loading && <div className="text-center py-10 text-textmain/60 animate-pulse">Sedang mengambil artikel...</div>}
        
        {/* State Handling: Error (Diubah menjadi Tampilan Segera Hadir) */}
        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-16 px-4 bg-secondary/20 rounded-xl border-2 border-dashed border-secondary/60">
            <Clock className="w-12 h-12 text-accent/50 mb-4 animate-pulse" />
            <h3 className="text-2xl font-serif font-bold text-textmain mb-3">Segera Hadir</h3>
            <p className="text-textmain/70 text-center max-w-md leading-relaxed">
              Edisi terbaru saat ini sedang dalam tahap kurasi dan persiapan. Kami tidak sabar untuk segera membagikan publikasi riset terbaik kepada Anda.
            </p>
          </div>
        )}

        {/* Tampilkan Artikel (Hanya jika tidak loading dan tidak error) */}
        {!loading && !error && (
          <div className="grid md:grid-cols-2 gap-6">
            {articles.length === 0 ? (
              <div className="col-span-2 flex flex-col items-center justify-center py-12">
                <BookOpen className="w-10 h-10 text-secondary mb-3" />
                <p className="text-textmain/60 text-center">Belum ada artikel pada edisi ini.</p>
              </div>
            ) : (
              articles.map((article) => (
                <Link 
                  key={article.id} 
                  to={`/article/${article.id}`} 
                  className="group block p-6 bg-white border border-secondary rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-serif font-bold text-textmain group-hover:text-accent mb-2 line-clamp-2 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-textmain/70 mb-4">
                    {article.authors} • {article.datePublished || 'Tanggal tidak tersedia'}
                  </p>
                  <span className="text-accent text-sm font-medium flex items-center">
                    Read Article <ChevronRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Link>
              ))
            )}
          </div>
        )}
      </section>

      {/* 4. Call for Papers */}
      <section className="bg-accent/10 p-8 md:p-12 rounded-xl text-center border border-accent/20">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-textmain mb-4">Call for Papers</h2>
        <p className="max-w-2xl mx-auto text-textmain/80 mb-8">
          Kami mengundang para peneliti, akademisi, dan praktisi untuk mengirimkan naskah riset interdisipliner terkait dinamika sosial dan kebijakan publik.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://jspsubmission.j-psc.com" target="_blank" rel="noopener noreferrer" className="bg-accent text-white px-8 py-3 rounded-md font-medium hover:bg-accent/90 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200">
            Make a Submission
          </a>
          <Link to="/guidelines" className="bg-transparent border-2 border-textmain text-textmain px-8 py-3 rounded-md font-medium hover:bg-textmain hover:text-white transition duration-200">
            Author Guidelines
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;