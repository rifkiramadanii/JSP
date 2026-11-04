// src/pages/Archives.jsx
import React, { useState, useEffect } from 'react';
// Tambahkan Clock dari lucide-react
import { Search, ChevronDown, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getArchives } from '../services/ojsApi'; // Import fungsi API

const Archives = () => {
  const [archives, setArchives] = useState([]); // Data asli dari server
  const [filteredArchives, setFilteredArchives] = useState([]); // Data setelah di-filter
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // Ubah state menjadi boolean

  const [search, setSearch] = useState({ query: '', year: '' });
  const [expandedIssue, setExpandedIssue] = useState(null);
  const [availableYears, setAvailableYears] = useState([]);

  // 1. Fetch Data saat komponen dimuat
  useEffect(() => {
    const fetchArchivesData = async () => {
      try {
        setLoading(true);
        const data = await getArchives();
        
        setArchives(data);
        setFilteredArchives(data);
        
        // Buka otomatis issue yang paling atas
        if (data.length > 0) {
          setExpandedIssue(data[0].issue.id);
        }

        // Ambil daftar tahun yang unik untuk dropdown filter
        const years = [...new Set(data.map(item => item.issue.year).filter(Boolean))];
        setAvailableYears(years.sort((a, b) => b - a)); // Urutkan tahun dari yang terbaru
        
      } catch (err) {
        console.error("Error fetching archives:", err);
        setError(true); // Set error menjadi true saat gagal
      } finally {
        setLoading(false);
      }
    };

    fetchArchivesData();
  }, []);

  // 2. Logika Pencarian & Filter (Berjalan otomatis setiap user mengetik/memilih tahun)
  useEffect(() => {
    if (archives.length === 0) return;

    const lowerQuery = search.query.toLowerCase();

    const filtered = archives.filter((item) => {
      // Cek kecocokan tahun
      const matchYear = search.year === '' || String(item.issue.year) === search.year;

      // Cek kecocokan kata kunci di judul issue, judul artikel, atau nama penulis
      const matchQuery = lowerQuery === '' || 
        (item.issue.title && item.issue.title.toLowerCase().includes(lowerQuery)) ||
        item.articles.some(art => 
          (art.title && art.title.toLowerCase().includes(lowerQuery)) ||
          (art.authors && art.authors.toLowerCase().includes(lowerQuery))
        );

      return matchYear && matchQuery;
    });

    setFilteredArchives(filtered);
  }, [search, archives]);


  // Tampilan Loading
  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center pt-32">
        <p className="text-xl text-textmain/60 animate-pulse">Memuat arsip jurnal...</p>
      </div>
    );
  }

  // Tampilan Error atau Data Kosong (Diubah menjadi Tampilan Segera Hadir)
  if (error || (archives.length === 0 && !loading)) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="flex flex-col items-center justify-center py-24 px-4 bg-secondary/20 rounded-xl border-2 border-dashed border-secondary/60 shadow-sm">
          <Clock className="w-16 h-16 text-accent/50 mb-6 animate-pulse" />
          <h2 className="text-3xl font-serif font-bold text-textmain mb-4">Arsip Segera Hadir</h2>
          <p className="text-textmain/70 text-center max-w-lg leading-relaxed text-lg">
            Kumpulan arsip jurnal kami saat ini sedang dalam tahap penyusunan. Nantikan segera publikasi riset terbaik dari edisi-edisi sebelumnya.
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
      <h1 className="text-4xl font-serif font-bold text-textmain mb-8">Archives</h1>

      {/* Fitur Pencarian */}
      <div className="bg-secondary/20 p-6 rounded-xl border border-secondary mb-10 flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative grow w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textmain/40" size={18} />
          <input 
            type="text" 
            placeholder="Search by article title, author, or issue..." 
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-secondary rounded-md focus:outline-none focus:border-accent transition-colors"
            value={search.query}
            onChange={(e) => setSearch({...search, query: e.target.value})}
          />
        </div>
        <select 
          className="w-full sm:w-auto px-4 py-2.5 bg-white border border-secondary rounded-md focus:outline-none focus:border-accent cursor-pointer"
          value={search.year}
          onChange={(e) => setSearch({...search, year: e.target.value})}
        >
          <option value="">All Years</option>
          {availableYears.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        {/* Tombol Search dimatikan fungsinya sebagai submit, karena hasil sudah realtime dari onChange */}
        <button className="w-full sm:w-auto bg-accent text-white px-6 py-2.5 rounded-md hover:bg-accent/90 transition shadow-sm">
          Search
        </button>
      </div>

      {/* Daftar Issues */}
      <div className="space-y-4">
        {filteredArchives.length === 0 ? (
          <div className="text-center py-10 bg-white border border-secondary rounded-lg">
            <p className="text-textmain/60">Tidak ada arsip yang cocok dengan pencarian Anda.</p>
          </div>
        ) : (
          filteredArchives.map((item) => (
            <div key={item.issue.id} className="border border-secondary rounded-lg overflow-hidden bg-white">
              <button 
                className="w-full flex justify-between items-center p-5 bg-background/50 hover:bg-secondary/30 transition-colors text-left"
                onClick={() => setExpandedIssue(expandedIssue === item.issue.id ? null : item.issue.id)}
              >
                <div>
                  <h2 className="text-xl font-serif font-bold text-textmain">
                    Vol. {item.issue.volume} No. {item.issue.number} ({item.issue.year})
                  </h2>
                  <p className="text-textmain/70 text-sm mt-1">{item.issue.title}</p>
                </div>
                <ChevronDown 
                  className={`text-accent transform transition-transform duration-300 ${expandedIssue === item.issue.id ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {/* Daftar Artikel di dalam Issue */}
              {expandedIssue === item.issue.id && (
                <div className="p-5 border-t border-secondary bg-white">
    
                {/* TAUTAN BARU KE HALAMAN ISSUE DETAIL */}
                  <div className="mb-5 flex justify-between items-center bg-secondary/20 p-3 rounded-md border border-secondary/50">
                    <span className="text-sm text-textmain/70 font-medium">Jelajahi edisi ini selengkapnya</span>
                    <Link 
                      to={`/issue/${item.issue.id}`} 
                      className="text-accent hover:text-white hover:bg-accent px-4 py-1.5 rounded text-sm font-medium transition-colors border border-accent"
                    >
                      View Full Issue &rarr;
                    </Link>
                  </div>
                  {item.articles.length === 0 ? (
                    <p className="text-sm text-textmain/50 italic">Belum ada artikel dalam edisi ini.</p>
                  ) : (
                    <ul className="space-y-3">
                      {item.articles.map(article => (
                        <li key={article.id} className="flex items-center justify-between border-b border-secondary/30 pb-3 last:border-0 last:pb-0">
                          <Link to={`/article/${article.id}`} className="text-textmain hover:text-accent font-medium transition-colors pr-4">
                            {article.title}
                          </Link>
                          <span className="text-xs font-medium bg-secondary/50 text-textmain px-2 py-1 rounded whitespace-nowrap">
                            Article
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Pagination (Dibiarkan Statis sementara sesuai request awal) */}
      <div className="flex justify-center mt-12 gap-2">
        <button className="px-4 py-2 border border-secondary rounded-md text-textmain hover:bg-secondary transition disabled:opacity-50" disabled>Prev</button>
        <button className="px-4 py-2 bg-accent text-white rounded-md shadow">1</button>
        <button className="px-4 py-2 border border-secondary rounded-md text-textmain hover:bg-secondary transition disabled:opacity-50" disabled>Next</button>
      </div>
    </div>
  );
};

export default Archives;