
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI Features', href: '#ai-tools' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-black tracking-tighter dark:text-white">
              GS<span className="text-primary-600">.</span>
            </a>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-5 border-l pl-8 ml-2 border-slate-200 dark:border-slate-800">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-110 transition-transform"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a href="https://github.com/gsimeon" target="_blank" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Github size={20} /></a>
              <a href="https://linkedin.com/in/simeongodwin" target="_blank" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-white hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-b border-slate-100 dark:border-slate-800 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-lg font-bold text-slate-800 dark:text-white border-b border-slate-50 dark:border-slate-800"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-6 pt-4">
               <a href="https://github.com/gsimeon" target="_blank" className="text-slate-500"><Github size={24} /></a>
               <a href="https://linkedin.com/in/simeongodwin" target="_blank" className="text-slate-500"><Linkedin size={24} /></a>
               <a href="mailto:gsimeon2k@gmail.com" className="text-slate-500"><Mail size={24} /></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
