
import React from 'react';
import { Experience } from '../types.ts';

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      role: "Azure Solution Engineer",
      company: "TEK EXPERTS",
      location: "Lagos, Nigeria",
      period: "Nov 2022 – Present",
      points: [
        "Spearheaded Azure cloud migration projects, achieving a 15% increase in system availability and 25% reduction in infrastructure costs.",
        "Automated infrastructure deployment using Terraform and Ansible, reducing provisioning time by 40%.",
        "Optimized cloud maintenance processes, resulting in a 20% decrease in system downtime.",
        "Resolved 95% of escalated technical issues within SLA, improving customer satisfaction."
      ]
    },
    {
      role: "Principal Computer Programme Officer",
      company: "Benue State University",
      location: "Makurdi, Nigeria",
      period: "July 2011 – Nov 2022",
      points: [
        "Enhanced database performance by 20% through optimization and tuning, ensuring data integrity.",
        "Designed and implemented backup and recovery strategies, reducing data loss risks by 25%.",
        "Improved ETL processes, increasing data loading efficiency by 20%.",
        "Conducted SQL data analysis to uncover insights, driving a 30% growth in online sales."
      ]
    },
    {
      role: "Account Officer",
      company: "Wema Bank",
      location: "Oyemekun, Nigeria",
      period: "March 2010 – March 2011",
      points: [
        "Streamlined cheque clearing processes, improving processing speed by 15%.",
        "Ensured accurate financial transactions and managed client accounts."
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Professional Journey</h2>
      
      <div className="relative">
        {/* Central Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={`${exp.company}-${index}`} className="relative flex flex-col md:flex-row items-center">
              {/* Timeline Dot (Desktop) */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm hidden md:block z-10"></div>
              
              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <time className="text-sm font-bold text-blue-600 uppercase tracking-widest">{exp.period}</time>
                    <span className="text-xs font-medium text-slate-400">{exp.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  <div className="text-md font-semibold text-slate-600 mb-4">{exp.company}</div>
                  <ul className="space-y-3">
                    {exp.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
