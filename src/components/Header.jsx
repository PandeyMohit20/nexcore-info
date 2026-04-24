import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, Sun, Moon, 
  Home, Info, Code, Image, 
  FileText, Briefcase, Mail 
} from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Services', path: '/services', icon: Code },
    { name: 'Portfolio', path: '/portfolio', icon: Image },
    { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'Careers', path: '/careers', icon: Briefcase },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <header className="glass sticky top-0 z-50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-neon-glow to-neon-purple rounded-xl flex items-center justify-center neon-glow animate-glow">
              <span className="text-lg font-bold text-white">N</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-neon-glow bg-clip-text text-transparent">
              Nexcore Info
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ name, path, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 hover:text-neon-glow hover:bg-white/10 group"
              >
                <Icon className="w-4 h-4 group-hover:animate-bounce" />
                <span>{name}</span>
              </Link>
            ))}
          </nav>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-col space-y-2">
              {navLinks.map(({ name, path, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:text-neon-glow hover:bg-white/10 transition-all group"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{name}</span>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
