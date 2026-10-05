import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Download, Printer, Calendar, Clock, MapPin, Mail, Phone, Award, BookOpen } from 'lucide-react';
import { Project, BlogPost, personalInfo, educationData, achievementsData, skillsData } from '../data/portfolioData';

// 1. Project Detail Modal
interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative aspect-video w-full bg-slate-900 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 rounded-lg bg-indigo-600 text-white text-xs font-semibold shadow-md">
              {project.category}
            </span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 font-heading">
              {project.title}
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Key Architecture & Features
            </h3>
            <div className="space-y-2">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Metrics */}
          <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
              ✓
            </div>
            <div>
              <span className="text-[11px] font-semibold text-indigo-900 block">Measured Impact:</span>
              <span className="text-xs text-indigo-700 font-medium">{project.metrics}</span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Technologies Utilized
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live App</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Blog Reader Modal
interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/8] w-full bg-slate-900 shrink-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span>·</span>
            <span className="text-indigo-600 font-semibold">By Tayyab Rajpoot</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading leading-tight">
            {post.title}
          </h2>

          <div className="flex flex-wrap gap-1.5 pb-2 border-b border-slate-100">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-semibold">
                #{tag}
              </span>
            ))}
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                TR
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Tayyab Rajpoot</p>
                <p className="text-[10px] text-slate-400">MCA Student & Developer</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Resume / Curriculum Vitae Modal
interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">Curriculum Vitae — Tayyab Rajpoot</span>
            <span className="px-2 py-0.5 rounded text-[10px] bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-400/30">
              Updated 2025
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Print CV"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadSuccess ? 'Downloaded!' : 'Download PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Paper Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-800 bg-[#FAFBFD] print:p-0 print:bg-white">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 font-heading">Tayyab Rajpoot</h1>
              <p className="text-sm font-semibold text-indigo-600 mt-0.5">Software Developer & Full Stack Specialist</p>
            </div>
            <div className="text-xs text-slate-500 space-y-1 text-center sm:text-right">
              <p className="flex items-center justify-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>tayyabshah7564@gmail.com</span>
              </p>
              <p className="flex items-center justify-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>03247564792</span>
              </p>
              <p className="flex items-center justify-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Dhair Shahdara Town, Lahore, Pakistan</span>
              </p>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Summary</h3>
            <p className="text-xs leading-relaxed text-slate-700">
              Passionate 20-year-old software developer with a strong foundation in full-stack web development, modern user interfaces, and algorithmic problem solving. Experienced in React, JavaScript, Node.js, and NAVTTC technical training with 15+ delivered projects and proven technical proficiency.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Education</h3>
            <div className="space-y-3">
              {educationData.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start text-xs">
                  <div>
                    <div className="font-bold text-slate-900">{edu.degree}</div>
                    <div className="text-slate-500">{edu.institution}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-indigo-700">{edu.score} ({edu.scoreLabel})</div>
                    <div className="text-slate-400">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-semibold text-slate-900">Languages:</span>{' '}
                <span className="text-slate-600">JavaScript (ES6+), TypeScript, Java, Python, SQL, HTML5, CSS3</span>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Frameworks:</span>{' '}
                <span className="text-slate-600">React.js, Node.js, Express, Tailwind CSS</span>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Databases:</span>{' '}
                <span className="text-slate-600">MongoDB, MySQL, Firebase Firestore</span>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Tools:</span>{' '}
                <span className="text-slate-600">Git, GitHub, Figma, VS Code, Postman</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Achievements & Certifications</h3>
            <div className="space-y-2 text-xs">
              {achievementsData.map((ach) => (
                <div key={ach.id} className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <div>
                    <span className="font-semibold text-slate-900">{ach.title}:</span>{' '}
                    <span className="text-slate-600">{ach.organization}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
