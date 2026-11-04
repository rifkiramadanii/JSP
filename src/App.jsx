// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import CurrentIssue from './pages/CurrentIssue';
import Archives from './pages/Archives';
import About from './pages/About';
import EditorialTeam from './pages/EditorialTeam';
import Contact from './pages/Contact';
import AuthorGuidelines from './pages/AuthorGuidelines';
import IssueDetail from './pages/IssueDetail';
import Footer from './components/Footer';
import PublicationProcess from './pages/PublicationProcess';
import Privacy from './pages/Privacy';
// Import halaman lain: CurrentIssue, Archives, About, EditorialTeam, Contact, dan lainnya

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="grow pt-20"> {/* pt-20 untuk memberi ruang pada fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            {/* Rute lainnya */}
            <Route path='/current' element={<CurrentIssue />} />
            <Route path='/archives' element={<Archives />} />
            <Route path="/issue/:id" element={<IssueDetail />} />
            <Route path='/about' element={<About />} />
            <Route path='/editorial' element={<EditorialTeam />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/guidelines' element={<AuthorGuidelines />} />   
            <Route path='/publication-process' element={<PublicationProcess />} />
            <Route path='/privacy' element={<Privacy />} />
            {/* <Route path="*" element={<div className="p-8 text-center">Page under construction</div>} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;