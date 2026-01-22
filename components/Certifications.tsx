
import React from 'react';
import { Award, GraduationCap } from 'lucide-react';

const Certifications: React.FC = () => {
  const education = [
    {
      degree: "B.Sc in Mathematics and Computer Science",
      school: "University of Agriculture, Makurdi, Nigeria",
      period: "2005 - 2008",
      grade: "Second Class Upper Division"
    },
    {
      degree: "Nigeria Certificate in Education (NCE)",
      school: "Federal College of Education, Kontagora, Nigeria",
      period: "2001 - 2004"
    }
  ];

  const certs = [
    "Applied Data Science Lab – WorldQuant University (2024)",
    "Machine Learning with Python – Data Scientist Network Nigeria",
    "Data Analysis with Power BI – Data Scientist Network Nigeria",
    "Generative AI: The Evolution of Thoughtful Online Search – LinkedIn (2024)",
    "Azure Fundamentals (AZ-900) – Microsoft Certified",
    "AI Fundamentals (AI-900) – Microsoft Certified"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div>
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
          <span className="p-2 bg-slate-900 rounded-lg text-white"><GraduationCap size={24} /></span>
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[2px] before:bg-slate-200">
               <div className="absolute left-[-5px] top-2 w-[12px] h-[12px] rounded-full bg-slate-400" />
               <div className="text-xs font-bold text-slate-400 mb-1">{edu.period}</div>
               <h3 className="text-lg font-bold text-slate-900 mb-1">{edu.degree}</h3>
               <p className="text-slate-600 mb-2">{edu.school}</p>
               {edu.grade && <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full">{edu.grade}</span>}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
          <span className="p-2 bg-slate-900 rounded-lg text-white"><Award size={24} /></span>
          Certifications
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {certs.map((cert, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center gap-4 hover:border-blue-200 transition-colors">
              <div className="p-2 bg-blue-50 rounded-lg">
                 <Award size={20} className="text-blue-600" />
              </div>
              <p className="text-slate-700 font-medium text-sm leading-snug">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
