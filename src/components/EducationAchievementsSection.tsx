import React from 'react';
import { Trophy, Rocket, Terminal, GraduationCap, School, BookOpen, Calendar, Award } from 'lucide-react';
import { achievementsData, educationData, portfolioImages } from '../data/portfolioData';

export const EducationAchievementsSection: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-24 bg-slate-50/80 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Achievements */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
                Achievements
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Honors & Milestones
              </h2>
            </div>

            <div className="space-y-4">
              {achievementsData.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200/60">
                    {item.iconType === 'trophy' && <Trophy className="w-6 h-6 text-amber-500" />}
                    {item.iconType === 'hackathon' && <Rocket className="w-6 h-6 text-indigo-500" />}
                    {item.iconType === 'code' && <Terminal className="w-6 h-6 text-emerald-500" />}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-normal">
                      {item.organization}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & 3D Cap Visual */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
                Education
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Academic Background
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Timeline List */}
              <div className="md:col-span-7 space-y-4">
                {educationData.map((edu) => (
                  <div
                    key={edu.id}
                    className="relative pl-6 pb-2 border-l-2 border-indigo-200 last:border-transparent group"
                  >
                    {/* Timeline Node */}
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-indigo-600 group-hover:scale-125 transition-transform" />

                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-1.5">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-xs font-bold text-indigo-700">
                          {edu.degree}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-50 text-indigo-700">
                          {edu.period}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 font-medium">
                        {edu.institution}
                      </p>

                      <div className="text-[11px] text-slate-500 font-semibold pt-1 flex items-center gap-1.5">
                        <span className="text-slate-400">{edu.scoreLabel}:</span>
                        <span className="text-emerald-600 font-bold">{edu.score}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 3D Graduation Cap on Books Render */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[260px] rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-lg p-3">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-slate-50">
                    <img
                      src={portfolioImages.eduCapBooks}
                      alt="Graduation Cap and Books"
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-xs font-bold text-slate-800">Academic Excellence</p>
                    <p className="text-[10px] text-slate-400">Continuous Learner</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
