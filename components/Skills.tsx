
import React from 'react';
import { Terminal, Database, LineChart, Server, Cpu, Layers, Brain, Globe, Shield } from 'lucide-react';
import { SkillGroup } from '../types.ts';

const Skills: React.FC = () => {
  const skills: SkillGroup[] = [
    { 
      category: "AI Engineering", 
      items: ["LLM Integration", "RAG Systems", "Prompt Engineering", "LangChain", "Vector Databases"], 
    },
    { 
      category: "Full Stack Development", 
      items: ["ReactJS", "Node.js", "TypeScript", "RESTful APIs", "Responsive Design"], 
    },
    { 
      category: "Machine Learning", 
      items: ["Supervised Learning", "Deep Learning", "Neural Networks", "Predictive Modeling"], 
    },
    { 
      category: "Support Engineering", 
      items: ["Azure Troubleshooting", "SLA Management", "Incident Response", "Technical Support", "Root Cause Analysis"], 
    },
    { 
      category: "Cloud & DevOps", 
      items: ["Microsoft Azure", "Terraform", "Ansible", "Docker", "CI/CD Pipelines"], 
    },
    { 
      category: "Data Analysis", 
      items: ["Power BI", "Pandas", "NumPy", "SQL Analytics", "Seaborn"], 
    },
    { 
      category: "Database", 
      items: ["SQL Server", "ETL Processes", "Data Cleansing", "MongoDB", "PostgreSQL"], 
    },
    { 
      category: "Programming", 
      items: ["Python", "SQL", "R", "JavaScript"], 
    },
  ];

  const getIcon = (cat: string) => {
    switch (cat) {
      case "AI Engineering": return <Brain className="text-purple-600" />;
      case "Full Stack Development": return <Globe className="text-blue-500" />;
      case "Programming": return <Terminal className="text-blue-500" />;
      case "Machine Learning": return <Cpu className="text-indigo-500" />;
      case "Support Engineering": return <Shield className="text-rose-500" />;
      case "Data Analysis": return <LineChart className="text-green-500" />;
      case "Cloud & DevOps": return <Server className="text-amber-500" />;
      case "Database": return <Database className="text-orange-500" />;
      default: return <Layers className="text-slate-500" />;
    }
  };

  return (
    <div className="scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Competencies</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          A multi-disciplinary skill set spanning AI innovation, cloud infrastructure, and robust full-stack application development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((group) => (
          <div key={group.category} className="p-6 rounded-3xl bg-white shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-2.5 bg-slate-50 rounded-xl">
                {getIcon(group.category)}
              </div>
              <h3 className="text-lg font-bold text-slate-800 leading-tight">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {group.items.map((skill) => (
                <span key={skill} className="px-2.5 py-1 bg-slate-50 text-slate-600 rounded-lg text-xs font-semibold border border-slate-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
