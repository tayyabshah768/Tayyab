import React from 'react';
import { User, Cake, MapPin, Mail, Globe, FolderGit2, GraduationCap, Award, Layers, FileDown } from 'lucide-react';
import { personalInfo, portfolioImages } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/70 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50/70 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-xs font-semibold text-indigo-700 uppercase tracking-wider">
            About Me
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: 3D Waving Character Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-indigo-50 via-slate-50 to-purple-50 border border-slate-200/80 shadow-xl p-3 sm:p-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                  <img
                    src={portfolioImages.avatarWaving}
                    alt="Tayyab Rajpoot Waving Hello"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Hello Greeting Card */}
                <div className="absolute -bottom-3 -right-2 sm:right-2 bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg rounded-2xl px-4 py-2.5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-lg font-bold">
                    👋
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-medium">Friendly & Passionate</p>
                    <p className="text-xs font-bold text-slate-900">Always Ready to Build</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Prose & 2x2 Stat Cards Grid */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Bio Prose & Personal Metadata */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                {personalInfo.about.greeting}
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                {personalInfo.about.description}
              </p>

              {/* Personal Details List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-3 pb-2 text-sm">
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Name</span>
                    <span className="font-semibold text-slate-800">{personalInfo.about.name}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                    <Cake className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Age</span>
                    <span className="font-semibold text-slate-800">{personalInfo.about.age}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Location</span>
                    <span className="font-semibold text-slate-800">{personalInfo.about.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Email</span>
                    <a
                      href={`mailto:${personalInfo.about.email}`}
                      className="font-semibold text-indigo-600 hover:underline truncate block"
                    >
                      {personalInfo.about.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-700 sm:col-span-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Languages</span>
                    <span className="font-semibold text-slate-800">{personalInfo.about.languages}</span>
                  </div>
                </div>
              </div>

              {/* Resume download button */}
              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                  <FileDown className="w-4 h-4 text-indigo-400" />
                  <span>Download Curriculum Vitae</span>
                </button>
              </div>
            </div>

            {/* 2x2 Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
              
              {/* Card 1: 15+ Projects Completed */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-purple-300 hover:bg-purple-50/30 transition-all group shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-indigo-700 font-heading">
                    15+
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">Projects Completed</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Web apps & tools</p>
              </div>

              {/* Card 2: 3+ Years of Learning */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:bg-blue-50/30 transition-all group shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 font-heading">
                    3+
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">Years of Learning</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Continuous growth</p>
              </div>

              {/* Card 3: 5 Certifications */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-amber-300 hover:bg-amber-50/30 transition-all group shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-amber-600 font-heading">
                    5
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">Certifications</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Verified credentials</p>
              </div>

              {/* Card 4: 10+ Technologies */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all group shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-indigo-600 font-heading">
                    10+
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Layers className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">Technologies</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Full stack toolkit</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
