
import React from 'react';
import { Target, Zap, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-4xl font-black mb-8 text-slate-900 dark:text-white tracking-tight">Mission Statement</h2>
        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
          <p>
            I am a senior technical leader with a passion for building <span className="text-primary-600 dark:text-primary-400 font-bold">intelligent systems</span> that scale. 
            Based in Lagos, Nigeria, I've spent the last decade bridging the gap between raw data and business value.
          </p>
          <p>
            My approach blends deep technical expertise in <span className="bg-primary-100 dark:bg-primary-900/30 px-2 rounded">Azure Cloud Architecture</span> with 
            cutting-edge AI Engineering. I don't just build software; I build engines of growth.
          </p>
        </div>
        
        <div className="mt-12 space-y-4">
           <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
             <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                <Target className="text-primary-600" />
             </div>
             <div>
               <h4 className="font-bold text-slate-900 dark:text-white">Solution Focused</h4>
               <p className="text-sm text-slate-500 dark:text-slate-400">Transforming complex problems into elegant, maintainable code.</p>
             </div>
           </div>
           <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
             <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                <Zap className="text-amber-600" />
             </div>
             <div>
               <h4 className="font-bold text-slate-900 dark:text-white">Performance Driven</h4>
               <p className="text-sm text-slate-500 dark:text-slate-400">Optimizing systems for 20% reduced downtime and 25% cost savings.</p>
             </div>
           </div>
        </div>
      </div>
      
      <div className="order-1 md:order-2">
        <div className="aspect-[4/5] bg-slate-200 dark:bg-slate-900 rounded-[3rem] relative overflow-hidden flex items-center justify-center p-12">
           <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
              <div className="grid grid-cols-12 gap-4 h-full w-full">
                {Array.from({ length: 144 }).map((_, i) => (
                  <div key={i} className="bg-slate-900 dark:bg-white rounded-full w-1 h-1"></div>
                ))}
              </div>
           </div>
           <div className="text-center relative z-10 p-8 glass rounded-[2rem]">
              <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary-500/40">
                <Shield className="text-white" size={32} />
              </div>
              <blockquote className="text-2xl font-serif italic text-slate-800 dark:text-slate-100 mb-6 leading-relaxed">
                "Technical leadership is the art of simplifying the impossible through data and code."
              </blockquote>
              <div className="h-1.5 w-16 bg-primary-600 mx-auto rounded-full"></div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
