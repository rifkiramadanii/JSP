// src/pages/IssueDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, ChevronRight, BookOpen } from 'lucide-react';
import { getIssueDetails } from '../services/ojsApi';

const IssueDetail = () => {
  const { id } = useParams();

  const [issue, setIssue] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIssueDetail = async () => {
      try {
        setLoading(true);
        const data = await getIssueDetails(id);
        
        setIssue(data.issue);
        setArticles(data.articles);
      } catch (err) {
        console.error("Error fetching issue details:", err);
        setError("Gagal memuat detail edisi. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchIssueDetail();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center pt-24">
        <p className="text-xl text-textmain/60 animate-pulse">Memuat data edisi jurnal...</p>
      </div>
    );
  }

  if (error || !issue) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center pt-24">
        <p className="text-xl text-red-500 mb-4">{error || "Data edisi tidak ditemukan."}</p>
        <Link to="/archives" className="text-accent font-medium hover:underline flex items-center justify-center">
          <ArrowLeft size={16} className="mr-2" /> Kembali ke Archives
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      <Link to="/archives" className="inline-flex items-center text-textmain/60 hover:text-accent mb-8 transition-colors">
        <ArrowLeft size={16} className="mr-2" /> Back to Archives
      </Link>

      {/* Issue Header */}
      <header className="bg-secondary/30 p-8 rounded-xl border border-secondary mb-12 flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="bg-white p-6 rounded-lg border border-secondary shadow-sm flex-shrink-0 flex items-center justify-center">
          <BookOpen size={48} className="text-accent" />
        </div>
        <div>
          <h1 className="text-3xl font-serif font-bold text-textmain mb-2">
            Vol. {issue.volume} No. {issue.number} ({issue.year})
          </h1>
          {issue.title && <h2 className="text-xl text-textmain/80 font-medium mb-3">{issue.title}</h2>}
          
          <p className="text-sm text-textmain/60 mb-4">
            Published: {issue.datePublished || "Belum diterbitkan"}
          </p>
          
          {issue.description && (
            <div 
              className="text-textmain/80 leading-relaxed text-justify prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: issue.description }}
            />
          )}
        </div>
      </header>

      {/* Articles List */}
      <section>
        <h3 className="text-2xl font-serif font-bold text-textmain mb-6 border-b-2 border-secondary pb-2">
          Articles in this Issue
        </h3>
        
        {articles.length === 0 ? (
          <div className="text-center py-10 bg-white border border-secondary rounded-lg">
            <p className="text-textmain/60">Belum ada artikel dalam edisi ini.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Link 
                key={article.id} 
                to={`/article/${article.id}`} 
                className="group block p-6 bg-white border border-secondary rounded-lg hover:border-accent hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="flex-grow">
                  <h4 className="text-xl font-serif font-bold text-textmain group-hover:text-accent mb-2 line-clamp-2 transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-sm text-textmain/70 mb-4">
                    {article.authors} 
                    {article.doi && article.doi !== 'Tidak ada DOI' && ` • DOI: ${article.doi}`}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-secondary/50 mt-auto">
                  <span className="flex items-center text-sm font-medium text-textmain/70">
                    <FileText size={16} className="mr-1.5" /> Abstract
                  </span>
                  <span className="text-accent text-sm font-medium flex items-center">
                    Read Article <ChevronRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default IssueDetail;