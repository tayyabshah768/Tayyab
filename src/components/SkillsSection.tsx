import React, { useState } from 'react';
import { skillsData, Skill } from '../data/portfolioData';

// Clean SVG Icons for accurate tech logos
const TechIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'HTML5':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M4 3L5.5 20L12 22L18.5 20L20 3H4Z" fill="#E44D26"/>
          <path d="M12 4.5V20.3L17.2 18.7L18.4 4.5H12Z" fill="#F16529"/>
          <path d="M12 8.5H8.5L8.7 11H12V13.5H9L9.2 16.5L12 17.3V19.8L7 18.4L6.5 6.5H17.5L17.3 8.5H12Z" fill="white"/>
        </svg>
      );
    case 'CSS3':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M4 3L5.5 20L12 22L18.5 20L20 3H4Z" fill="#1572B6"/>
          <path d="M12 4.5V20.3L17.2 18.7L18.4 4.5H12Z" fill="#33A9DC"/>
          <path d="M12 8.5H15.5L15.3 11H12V13.5H15L14.7 16.5L12 17.3V19.8L17 18.4L17.5 6.5H6.5L6.7 8.5H12Z" fill="white"/>
        </svg>
      );
    case 'JavaScript':
      return (
        <div className="w-8 h-8 rounded-lg bg-[#F7DF1E] flex items-center justify-end p-1 shadow-sm">
          <span className="font-extrabold text-[#323330] text-sm tracking-tighter">JS</span>
        </div>
      );
    case 'React.js':
      return (
        <svg className="w-8 h-8 animate-[spin_12s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="#00D8FF" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#00D8FF" />
        </svg>
      );
    case 'Node.js':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z" fill="#539E43"/>
          <path d="M12 4.5L18.5 8.2V15.8L12 19.5L5.5 15.8V8.2L12 4.5Z" fill="#83CD29"/>
          <circle cx="12" cy="12" r="3" fill="white"/>
        </svg>
      );
    case 'Java':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M8 17C12 18 16 18 18 15C17 16 14 17 8 17Z" fill="#E76F00"/>
          <path d="M7 14C11 15 15 15 17 12C16 13 13 14 7 14Z" fill="#E76F00"/>
          <path d="M11 2C11 2 13 4 11 6C9 8 10 9 11 10C12 11 11 12 10 13" stroke="#5382A1" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 4C14 4 16 5.5 14 7.5C12 9.5 13 10.5 14 11.5" stroke="#5382A1" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'Python':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24">
          <path d="M11.9 2C8.6 2 8.7 3.5 8.7 3.5V5.1H12.2V5.6H5.7C5.7 5.6 2 5.2 2 9.3C2 13.4 5.2 13.2 5.2 13.2H6.7V11.2C6.7 8.9 8.7 8.9 8.7 8.9H12.1C14.3 8.9 14.3 6.9 14.3 6.9V3.5C14.3 3.5 14.7 2 11.9 2ZM9.8 3.5C10.3 3.5 10.7 3.9 10.7 4.4C10.7 4.9 10.3 5.3 9.8 5.3C9.3 5.3 8.9 4.9 8.9 4.4C8.9 3.9 9.3 3.5 9.8 3.5Z" fill="#387EB8"/>
          <path d="M12.1 22C15.4 22 15.3 20.5 15.3 20.5V18.9H11.8V18.4H18.3C18.3 18.4 22 18.8 22 14.7C22 10.6 18.8 10.8 18.8 10.8H17.3V12.8C17.3 15.1 15.3 15.1 15.3 15.1H11.9C9.7 15.1 9.7 17.1 9.7 17.1V20.5C9.7 20.5 9.3 22 12.1 22ZM14.2 20.5C13.7 20.5 13.3 20.1 13.3 19.6C13.3 19.1 13.7 18.7 14.2 18.7C14.7 18.7 15.1 19.1 15.1 19.6C15.1 20.1 14.7 20.5 14.2 20.5Z" fill="#FFE052"/>
        </svg>
      );
    case 'MySQL':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M4 14C6 8 12 6 18 8C20 9 21 11 21 13C21 17 18 20 12 20C6 20 4 17 4 14Z" fill="#00758F"/>
          <path d="M17 10C16 7 13 6 10 7C8 8 7 10 7 12" stroke="#F29111" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'Git & GitHub':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#24292E">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.442 4.87 20.185 8.84 21.508C9.34 21.6 9.52 21.29 9.52 21.025C9.52 20.793 9.51 20.021 9.51 19.208C6.73 19.811 6.14 17.868 6.14 17.868C5.69 16.711 5.03 16.404 5.03 16.404C4.12 15.783 5.1 15.795 5.1 15.795C6.1 15.866 6.63 16.892 6.63 16.892C7.52 18.423 8.97 17.98 9.54 17.724C9.63 17.078 9.89 16.637 10.17 16.386C7.95 16.134 5.62 15.275 5.62 11.442C5.62 10.35 6.01 9.458 6.65 8.76C6.55 8.51 6.21 7.493 6.75 6.126C6.75 6.126 7.59 5.856 9.5 7.151C10.3 6.929 11.15 6.818 12 6.814C12.85 6.818 13.7 6.929 14.5 7.151C16.41 5.856 17.25 6.126 17.25 6.126C17.79 7.493 17.45 8.51 17.35 8.76C17.99 9.458 18.38 10.35 18.38 11.442C18.38 15.286 16.04 16.131 13.82 16.377C14.17 16.678 14.49 17.271 14.49 18.183C14.49 19.49 14.48 20.542 14.48 20.865C14.48 21.134 14.66 21.447 15.17 21.347C19.14 20.017 22 16.279 22 11.854C22 6.326 17.52 2 12 2Z"/>
        </svg>
      );
    case 'Figma':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M8 12C5.79 12 4 10.21 4 8C4 5.79 5.79 4 8 4H12V12H8Z" fill="#F24E1E"/>
          <path d="M12 4H16C18.21 4 20 5.79 20 8C20 10.21 18.21 12 16 12H12V4Z" fill="#FF7262"/>
          <path d="M12 12H16C18.21 12 20 13.79 20 16C20 18.21 18.21 20 16 20C13.79 20 12 18.21 12 16V12Z" fill="#1ABCFE"/>
          <path d="M8 20C5.79 20 4 18.21 4 16C4 13.79 5.79 12 8 12H12V16C12 18.21 10.21 20 8 20Z" fill="#0ACF83"/>
          <circle cx="8" cy="12" r="4" fill="#A259FF"/>
        </svg>
      );
    default:
      return <div className="w-8 h-8 rounded-lg bg-indigo-500" />;
  }
};

export const SkillsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const filteredSkills = skillsData.filter((skill) => {
    if (filter === 'all') return true;
    if (filter === 'frontend') return skill.category === 'frontend';
    if (filter === 'backend') return skill.category === 'backend' || skill.category === 'database';
    if (filter === 'tools') return skill.category === 'tools';
    return true;
  });

  return (
    <section id="skills" className="py-20 lg:py-24 bg-slate-50/70 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-xs font-semibold text-purple-700 uppercase tracking-wider">
            My Skills
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Technologies I Work With
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            Tools, languages, and modern frameworks I use to bring ideas to reality.
          </p>

          {/* Interactive Category Segmented Tabs */}
          <div className="pt-3 flex items-center justify-center gap-1.5 flex-wrap">
            {[
              { id: 'all', label: 'All Technologies' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Backend & DB' },
              { id: 'tools', label: 'Tools & Design' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                  filter === tab.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onClick={() => setSelectedSkill(skill)}
              className="group relative bg-white border border-slate-200 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            >
              {/* Skill Icon Frame */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110 duration-200"
                style={{ backgroundColor: skill.bgLight, border: `1px solid ${skill.borderColor}` }}
              >
                <TechIcon name={skill.name} />
              </div>

              {/* Skill Label */}
              <h3 className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight mb-1 group-hover:text-indigo-600 transition-colors">
                {skill.name}
              </h3>

              {/* Subtitle / Level Badge */}
              <span className="text-[11px] text-slate-400 font-medium">
                {skill.level}
              </span>

              {/* Click Indicator Overlay */}
              <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-indigo-500 transition-colors" />
            </div>
          ))}
        </div>

        {/* Interactive Quick Skill Info Card (if selected) */}
        {selectedSkill && (
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-indigo-200 shadow-md flex items-center justify-between flex-wrap gap-4 animate-in fade-in duration-200">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: selectedSkill.bgLight }}
              >
                <TechIcon name={selectedSkill.name} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-slate-900">{selectedSkill.name}</h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-50 text-indigo-700">
                    {selectedSkill.level}
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Experience: {selectedSkill.experience} · Used across multiple full-stack production projects.
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedSkill(null)}
              className="text-xs font-semibold text-slate-400 hover:text-slate-600 px-3 py-1 rounded-lg hover:bg-slate-100"
            >
              Dismiss
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
