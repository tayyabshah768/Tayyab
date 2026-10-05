import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Twitter, Instagram, Sparkles, Terminal, Code } from 'lucide-react';
import { personalInfo, portfolioImages } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 flex items-center bg-[#090b16] text-white overflow-hidden"
    >
      {/* Background glowing ambient light orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-blue-600/15 rounded-full blur-[110px] pointer-events-none" />

      {/* Subtle background tech grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs sm:text-sm text-indigo-300 font-medium shadow-inner shadow-indigo-500/10 backdrop-blur-md">
              <span className="text-sm">🎓</span>
              <span>MCA Student | Aspiring Software Developer</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-1">
              <p className="text-xl sm:text-2xl font-semibold text-slate-300">
                {personalInfo.headlineGreeting}
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
                  {personalInfo.name}
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {personalInfo.subheading}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold rounded-2xl text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/35 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold rounded-2xl text-slate-200 bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700/80 hover:border-slate-600 shadow-md backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Connect Strip */}
            <div className="pt-6 border-t border-slate-800/80 space-y-3">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Connect with me
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <a
                  href={personalInfo.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-emerald-500 hover:bg-emerald-600/20 text-emerald-400 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                  aria-label="WhatsApp"
                  title="Chat on WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-5.522 0-10 4.478-10 10 0 1.772.463 3.438 1.271 4.887l-1.352 4.941 5.068-1.328c1.401.764 3.003 1.199 4.707 1.2 5.522 0 10-4.478 10-10 0-5.521-4.478-10-10-10z"/>
                  </svg>
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-indigo-500 hover:bg-indigo-600/20 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-blue-500 hover:bg-blue-600/20 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-sky-500 hover:bg-sky-600/20 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-pink-500 hover:bg-pink-600/20 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-amber-500 hover:bg-amber-600/20 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                  aria-label="LeetCode"
                >
                  <Terminal className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Developer Character Artwork & Floating Visual Badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-lg">
              
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 rounded-3xl blur-2xl transform -rotate-3 scale-95" />

              {/* Main 3D Artwork Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/60 bg-gradient-to-b from-slate-900/90 to-slate-950/90 shadow-2xl backdrop-blur-xl p-3 sm:p-4">
                <div className="relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src={portfolioImages.heroCoder}
                    alt="Tayyab Rajpoot 3D Developer Character at Desk"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle lighting vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Element 1: Top-Right Floating Code Symbol Box */}
              <div className="absolute -top-5 -right-3 sm:-right-6 bg-slate-900/90 border border-purple-500/40 rounded-2xl p-3 shadow-xl backdrop-blur-md animate-float-slow hidden sm:flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 font-mono font-bold text-sm">
                  {`{ }`}
                </div>
                <div className="text-left pr-2">
                  <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Clean Code</div>
                  <div className="text-xs text-white font-semibold">Web Engineer</div>
                </div>
              </div>

              {/* Floating Element 2: Top-Left Floating Code IDE Badge */}
              <div className="absolute -top-4 -left-3 sm:-left-6 bg-slate-900/90 border border-indigo-500/40 rounded-2xl p-2.5 shadow-xl backdrop-blur-md animate-float-reverse hidden sm:flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] font-mono text-indigo-300 pl-1">App.tsx</span>
              </div>

              {/* Floating Element 3: Bottom Right Tech Stack Pills */}
              <div className="absolute -bottom-5 right-2 sm:right-6 bg-slate-900/95 border border-slate-700/80 rounded-2xl p-2.5 shadow-2xl backdrop-blur-md flex items-center gap-1.5 animate-float-slow">
                <span className="px-2.5 py-1 rounded-lg bg-orange-500/20 border border-orange-500/40 text-[11px] font-bold text-orange-400">
                  HTML
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-blue-500/20 border border-blue-500/40 text-[11px] font-bold text-blue-400">
                  CSS
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 text-[11px] font-bold text-amber-300">
                  JS
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-[11px] font-bold text-cyan-300">
                  React
                </span>
              </div>

              {/* Floating Element 4: Bottom Left Code brackets badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-4 bg-indigo-950/90 border border-indigo-500/40 rounded-2xl p-3 shadow-xl backdrop-blur-md flex items-center gap-2 animate-float-reverse">
                <Code className="w-5 h-5 text-indigo-400" />
                <span className="text-xs font-mono font-semibold text-slate-200">{`</>`}</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
