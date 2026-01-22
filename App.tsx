
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import ExperienceSection from './components/ExperienceSection.tsx';
import Projects from './components/Projects.tsx';
import Certifications from './components/Certifications.tsx';
import AIChatbot from './components/AIChatbot.tsx';
import ImageEditor from './components/ImageEditor.tsx';
import Footer from './components/Footer.tsx';
import { ShieldCheck, AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  const [hasKey, setHasKey] = useState<boolean>(true);
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // Check initial key status
    const checkKey = async () => {
      try {
        if (window.aistudio && typeof window.aistudio.hasSelectedApiKey === 'function') {
          const selected = await window.aistudio.hasSelectedApiKey();
          setHasKey(selected);
        }
      } catch (e) {
        console.warn("API Key check skipped:", e);
      }
    };
    checkKey();

    // Set initial theme
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleOpenKeyDialog = async () => {
    if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
      try {
        await window.aistudio.openSelectKey();
        setHasKey(true); 
      } catch (e) {
        console.error("Key dialog error:", e);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      {!hasKey && (
        <div className="fixed bottom-6 right-6 z-[100]">
          <button 
            onClick={handleOpenKeyDialog}
            className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full shadow-2xl hover:bg-primary-700 transition-all font-bold animate-bounce"
          >
            <ShieldCheck size={20} />
            Enable AI Features
          </button>
        </div>
      )}

      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        
        <div className="container mx-auto px-4 space-y-32 py-20">
          <section id="about" className="scroll-mt-24">
            <About />
          </section>

          <section id="skills" className="scroll-mt-24">
            <Skills />
          </section>

          <section id="experience" className="scroll-mt-24">
            <ExperienceSection />
          </section>

          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>

          <section id="ai-tools" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start scroll-mt-24">
             <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-800">
               <div className="flex justify-between items-start mb-6">
                 <h2 className="text-3xl font-bold flex items-center gap-3 dark:text-white">
                   <span className="p-2 bg-primary-600 rounded-lg text-white">✨</span>
                   AI Portfolio Guide
                 </h2>
               </div>
               {!hasKey && (
                 <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex gap-3 text-sm text-amber-800 dark:text-amber-300 border border-amber-100 dark:border-amber-800">
                    <AlertCircle className="shrink-0" size={18} />
                    <p>Connect AI to experience full interactive voice capabilities.</p>
                 </div>
               )}
               <p className="text-slate-600 dark:text-slate-400 mb-8">
                 Experience the future of recruiting. Speak or chat with Godwin's AI twin about his 10+ years of technical leadership.
               </p>
               <AIChatbot />
             </div>
             
             <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-800">
               <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 dark:text-white">
                 <span className="p-2 bg-purple-600 rounded-lg text-white">🎨</span>
                 Vision Lab
               </h2>
               <p className="text-slate-600 dark:text-slate-400 mb-8">
                 A live demonstration of my image processing capabilities. Upload any photo to see Gemini's computer vision in action.
               </p>
               <ImageEditor />
             </div>
          </section>

          <section id="certifications" className="scroll-mt-24">
            <Certifications />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
