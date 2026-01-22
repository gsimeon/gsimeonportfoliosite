
import React from 'react';
import { ArrowRight, Cloud, Database, Brain, Sparkles, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToExperience = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        <div className="lg:flex lg:items-center lg:justify-between gap-16">
          <div className="lg:w-3/5">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 animate-fade-in group">
              <Sparkles className="text-primary-600 mr-3 group-hover:rotate-12 transition-transform" size={16} />
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300 tracking-tight">
                Architecting Future-Proof AI Systems
              </span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[0.95] mb-8 tracking-tighter">
              Godwin Kper <br />
              <span className="gradient-text">Simeon</span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed font-medium">
              A decade of engineering excellence in <span className="text-primary-600 dark:text-primary-400 font-bold underline decoration-primary-200 underline-offset-4">Cloud Solutions</span>, 
              Advanced Analytics, and Generative AI. Empowering global enterprises with data-driven intelligence.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <button 
                onClick={scrollToExperience}
                className="px-10 py-5 bg-primary-600 text-white rounded-2xl font-black flex items-center gap-3 hover:bg-primary-700 transition-all shadow-2xl shadow-primary-500/30 hover:scale-105 active:scale-95"
              >
                View Experience <ArrowRight size={20} />
              </button>
              <a 
                href="mailto:gsimeon2k@gmail.com"
                className="px-10 py-5 glass text-slate-900 dark:text-white rounded-2xl font-black hover:bg-white dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-800 active:scale-95"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg border-t border-slate-200 dark:border-slate-800 pt-10">
               <div>
                 <div className="text-3xl font-black text-slate-900 dark:text-white">10+</div>
                 <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Years Experience</div>
               </div>
               <div>
                 <div className="text-3xl font-black text-slate-900 dark:text-white">25+</div>
                 <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">AI Projects</div>
               </div>
               <div>
                 <div className="text-3xl font-black text-slate-900 dark:text-white">40%</div>
                 <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Efficiency Lift</div>
               </div>
            </div>
          </div>
          
          <div className="hidden lg:block lg:w-2/5">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary-600 rounded-[3rem] rotate-3 scale-[1.02] opacity-20 group-hover:rotate-6 transition-transform duration-700"></div>
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                  alt="Godwin Kper Simeon" 
                  className="w-full grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-[4/5]"
                />
                <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                   <p className="text-xs font-black uppercase tracking-widest text-primary-600 mb-1">Based In</p>
                   <p className="text-slate-900 dark:text-white font-bold flex items-center gap-2">
                     <Globe size={14} /> Lagos, Nigeria
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
