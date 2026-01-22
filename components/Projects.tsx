
import React from 'react';
import { Project } from '../types.ts';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "AI Engineering: RAG Knowledge Base",
      description: "Implemented a Retrieval-Augmented Generation (RAG) system using Gemini API and Pinecone vector database to provide context-aware answers from corporate documentation.",
      tags: ["AI Engineering", "Gemini API", "LangChain", "Python"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Agro Market Platform",
      description: "A digital marketplace designed to bridge the gap between rural farmers and urban consumers. Features real-time price tracking, secure payment integration, and supply chain logistics management.",
      tags: ["Full Stack", "React", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Azure Cloud Migration Strategy",
      description: "Led the end-to-end migration of legacy infrastructure to Azure for a major institution, reducing downtime by 20% and operational costs by 25%.",
      tags: ["Azure", "Infrastructure as Code", "Terraform"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            Featured Projects 
            <Sparkles className="text-primary-600 hidden md:block" size={28} />
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl">
            Technical implementations focused on Generative AI, Digital Marketplaces, and Cloud Infrastructure.
          </p>
        </div>
        <a href="https://github.com/gsimeon" target="_blank" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:underline transition-all group">
          View all on GitHub <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href="https://github.com/gsimeon" className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
                  <Github size={22} />
                </a>
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-primary-50/50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
