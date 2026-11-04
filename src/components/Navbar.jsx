// src/components/Navbar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'Current Issue', path: '/current' },
    { name: 'Archives', path: '/archives' },
  ];

  const aboutLinks = [
    { name: 'About', path: '/about' },
    { name: 'Editorial Team', path: '/editorial' },
    { name: 'Contact', path: '/contact' },
    { name: 'Author Guidelines', path: '/guidelines' },
    { name: 'Publication Process', path: '/publication-process' },
  ];

  const isAboutActive = aboutLinks.some(link => link.path === currentPath);

  return (
    <header className="bg-background/90 backdrop-blur-md border-b border-secondary fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <Link to="/" className="font-serif font-bold text-xl text-textmain flex justify-between">
            <img src="jsp-logo.png" alt="logo-jeps" className='h-15 w-30'/>
            <span className="text-accent hidden sm:inline my-auto px-auto">| JSP</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6 items-center h-full">
            {mainLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-accent' : 'text-textmain hover:text-accent'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="relative group h-full flex items-center">
              <button 
                className={`flex items-center text-sm font-medium transition-colors duration-200 focus:outline-none ${
                  isAboutActive ? 'text-accent' : 'text-textmain hover:text-accent'
                }`}
              >
                About Journal <ChevronDown size={16} className="ml-1" />
              </button>
              
              <div className="absolute top-[calc(100%-0.5rem)] left-0 w-48 bg-white border border-secondary rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <div className="py-1">
                  {aboutLinks.map((link) => {
                    const isActive = currentPath === link.path;
                    return (
                      <Link 
                        key={link.name} 
                        to={link.path} 
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                          isActive 
                            ? 'bg-secondary text-accent border-l-2 border-accent pl-3.5' 
                            : 'text-textmain hover:bg-secondary hover:text-accent border-l-2 border-transparent'
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <a 
              href="http://jspsubmission.j-psc.com" 
              target="_blank"
              className="bg-accent text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-accent/90 transition shadow-sm hover:shadow-md transform hover:-translate-y-0.5 duration-200"
            >
              Submit Article
            </a>
          </nav>

          <button 
            className="md:hidden text-textmain focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-secondary px-4 pt-2 pb-4 space-y-1 shadow-lg max-h-[80vh] overflow-y-auto">
          {mainLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive 
                    ? 'bg-secondary text-accent' 
                    : 'text-textmain hover:bg-secondary hover:text-accent'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="space-y-1">
            <button 
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none ${
                isAboutActive && !isMobileDropdownOpen 
                  ? 'bg-secondary text-accent' 
                  : 'text-textmain hover:bg-secondary hover:text-accent'
              }`}
            >
              About Journal 
              <ChevronDown 
                size={18} 
                className={`transform transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {isMobileDropdownOpen && (
              <div className="bg-secondary/40 rounded-md py-1 mt-1 space-y-1">
                {aboutLinks.map((link) => {
                  const isActive = currentPath === link.path;
                  return (
                    <Link 
                      key={link.name} 
                      to={link.path} 
                      onClick={() => setIsOpen(false)}
                      className={`block px-6 py-2.5 text-sm font-medium transition-colors ${
                        isActive 
                          ? 'text-accent font-bold' 
                          : 'text-textmain/80 hover:text-accent'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <a 
            href="https://jspsubmission.j-psc.com" 
            target="_blank"
            className="block w-full text-center mt-5 bg-accent text-white px-5 py-2.5 rounded-md text-base font-medium hover:bg-accent/90 transition shadow-sm"
          >
            Submit Article
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;