
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">GS<span className="text-blue-500">.</span></h2>
            <p className="text-slate-400 max-w-xs leading-relaxed">
              Empowering organizations with data-driven intelligence and robust cloud infrastructure. 
              Based in Lagos, Nigeria.
            </p>
            <div className="flex gap-4">
               <a href="https://linkedin.com/in/simeongodwin" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"><Linkedin size={20} /></a>
               <a href="https://github.com/gsimeon" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400">
                <Mail size={18} className="text-blue-500" />
                <a href="mailto:gsimeon2k@gmail.com" className="hover:text-white transition-colors">gsimeon2k@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone size={18} className="text-blue-500" />
                <a 
                  href="https://wa.me/2347039032609" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  +234 7039032609
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} className="text-blue-500" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-4">
               <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a></li>
               <li><a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a></li>
               <li><a href="#experience" className="text-slate-400 hover:text-white transition-colors">Experience</a></li>
               <li><a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a></li>
               <li><a href="#ai-tools" className="text-slate-400 hover:text-white transition-colors">AI Tools</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Godwin Kper Simeon. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
