import React, { useState } from 'react';
import { ArrowRight, Scissors, Palette, Sparkles, BookOpen, Layers, Award, Calendar, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PageId, PortfolioItem } from '../types';
import { portfolioItems, upcomingEvents, universityOverview } from '../data/departmentData';
import { VisualArtwork } from '../components/VisualArtwork';
import { officialUniversityUrl } from '../constants/site';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: PortfolioItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProject }) => {
  const [activeHeroTab, setActiveHeroTab] = useState<'fashion' | 'graphic'>('fashion');

  const featuredFashion = portfolioItems.find((p) => p.department === 'Fashion Design & Technology')!;
  const featuredGraphic = portfolioItems.find((p) => p.department === 'Graphic Design')!;
  const currentShowcase = activeHeroTab === 'fashion' ? featuredFashion : featuredGraphic;

  const flagshipEvent = upcomingEvents[0];

  return (
    <div className="space-y-0">
      {/* Hero Section with High-Quality Full-Width Picture Background */}
      <section className="landing-hero relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#080E1E]">
        {/* Full-width University Design Studio & Education Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
            alt="KTU Fashion and Graphic Design Studio & University Creative Workspace"
            className="w-full h-full object-cover object-center"
          />
          {/* Dual-layered gradient scrim ensuring pristine typographic contrast in light and dark modes */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/97 via-white/92 to-white/75 lg:to-white/55 dark:from-[#080E1E]/98 dark:via-[#080E1E]/94 dark:to-[#080E1E]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white dark:from-[#080E1E]/70 dark:via-transparent dark:to-[#080E1E]" />
          {/* Subtle KTU Navy/Blue brand color tone wash */}
          <div className="absolute inset-0 bg-blue-950/10 dark:bg-blue-900/15 mix-blend-multiply pointer-events-none" />
        </div>

        <div className="landing-hero-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:py-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase bg-white/90 dark:bg-[#0c1322]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-orange-200/80 dark:border-orange-500/30 w-fit mb-5 shadow-xs">
                <span className="text-orange-600 dark:text-orange-400">Faculty of Business and Management Studies</span>
                <span className="text-neutral-400 dark:text-neutral-600" aria-hidden="true">·</span>
                <span className="text-blue-900 dark:text-blue-300 font-bold">KTU Koforidua</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-neutral-950 dark:text-white tracking-tight leading-[1.08] mb-6 text-balance drop-shadow-xs">
                Where Technical Precision Meets Creative Vision.
              </h1>

              <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-100 font-normal leading-relaxed max-w-2xl mb-8">
                Discover practical creative education across fashion, textiles, visual communication, and digital design at Koforidua Technical University.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href={officialUniversityUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors shadow-md shadow-orange-600/25 flex items-center gap-2 cursor-pointer"
                >
                  <span>Visit KTU admissions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onNavigate('fashion')}
                  className="px-6 py-3.5 text-xs font-semibold text-blue-950 dark:text-blue-100 bg-white/95 dark:bg-blue-950/70 hover:bg-blue-50 dark:hover:bg-blue-900/60 border-2 border-blue-900 dark:border-blue-700 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xs backdrop-blur-xs"
                >
                  <Layers className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                  <span>Explore the departments</span>
                </button>
              </div>

              <div className="pt-6 border-t border-neutral-200/80 dark:border-neutral-800 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Applied learning
                </span>
                <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
                <span>Studio-led practice</span>
                <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
                <span>Student showcase</span>
              </div>
            </div>

            {/* Right Hero Column: Interactive Dynamic Visual Showcase */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="landing-tabs flex items-center gap-2 p-1.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg mb-3">
                <button
                  onClick={() => setActiveHeroTab('fashion')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    activeHeroTab === 'fashion'
                      ? 'bg-white dark:bg-[#1a1b1e] text-orange-600 dark:text-orange-400 shadow-xs'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                  }`}
                >
                  <Scissors className="w-3.5 h-3.5 text-orange-600" />
                  <span>Fashion & Textiles</span>
                </button>

                <button
                  onClick={() => setActiveHeroTab('graphic')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    activeHeroTab === 'graphic'
                      ? 'bg-white dark:bg-[#1a1b1e] text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                  }`}
                >
                  <Palette className="w-3.5 h-3.5 text-blue-600" />
                  <span>Graphic Design</span>
                </button>
              </div>

              {/* Showcase Card with Lightbox inspection */}
              <div
                onClick={() => onSelectProject(currentShowcase)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onSelectProject(currentShowcase);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${currentShowcase.title} project details`}
                className="landing-showcase relative aspect-[4/5] min-h-0 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-md group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              >
                <VisualArtwork item={currentShowcase} className="w-full h-full" />

                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-mono text-orange-400 font-semibold">
                      {currentShowcase.studentClass}
                    </span>
                    {currentShowcase.awards && (
                      <span className="text-[10px] bg-orange-600/30 border border-orange-500/40 px-2 py-0.5 rounded text-orange-200 font-medium">
                        ★ {currentShowcase.awards}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-serif font-bold tracking-tight text-white line-clamp-1 mb-1">
                    {currentShowcase.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2 mb-3">
                    {currentShowcase.description}
                  </p>
                  <div className="flex items-center justify-between text-xs pt-2 border-t border-white/15">
                    <span className="text-neutral-400">Designer: <strong className="text-white font-medium">{currentShowcase.studentName}</strong></span>
                    <span className="text-orange-400 font-medium inline-flex items-center gap-1">
                      View project details →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Full-Width Key Metrics Strip */}
      <section className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-[#0b152d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {universityOverview.keyMetrics.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 dark:text-neutral-100 tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mt-1">
                    {stat.label}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-snug">
                    {stat.context}
                  </span>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* University facts: a concise institutional reference point for prospective students. */}
      <section className="bg-[#004b7a] py-10 text-white sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[1.1fr_2fr] md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">Koforidua Technical University</p>
              <h2 className="mt-2 text-2xl font-serif font-bold sm:text-3xl">KTU at a glance</h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-blue-100">
                A technical university community built around applied learning, professional practice, and innovation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {[
                ['6', 'Faculties, Schools & Institutes'],
                ['128+', 'Programmes'],
                ['15K+', 'Students'],
                ['2016', 'Chartered as a Technical University'],
              ].map(([value, label]) => (
                <div key={label} className="border-l border-blue-300/40 pl-4">
                  <p className="text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl">{value}</p>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-blue-100 sm:text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dean's Welcome & Faculty Vision */}
      <section className="py-20 bg-white dark:bg-[#0c0d0e] border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Dean Portrait Card with University Institutional Seal */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#0c1938] text-white overflow-hidden shadow-xl border border-blue-900/80 group">
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-blue-950">
                  <img
                    src={universityOverview.deanWelcome.avatarUrl}
                    alt={universityOverview.deanWelcome.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1938] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-orange-600 text-white shadow-md">
                      Dean's Office · KTU
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-serif font-bold text-white mb-1">
                    {universityOverview.deanWelcome.name}
                  </h3>
                  <p className="text-xs text-orange-400 font-semibold mb-2">
                    {universityOverview.deanWelcome.title}
                  </p>
                  <p className="text-xs text-blue-200/80 mb-5 leading-relaxed">
                    {universityOverview.deanWelcome.qualification}
                  </p>
                  <button
                    onClick={() => onNavigate('faculty')}
                    className="text-xs font-semibold text-white hover:text-orange-400 transition-colors flex items-center gap-1.5 cursor-pointer pt-3 border-t border-blue-900/80 w-full"
                  >
                    <span>View Academic Faculty Directory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40 px-3 py-1 rounded-md border border-orange-200/60 dark:border-orange-800/60">
                <span>Welcome Message</span>
                <span aria-hidden="true">·</span>
                <span>Dean's Desk</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 dark:text-neutral-50 tracking-tight leading-tight">
                "Our graduates do not merely enter the creative sector—they redefine it."
              </h2>
              <blockquote className="border-l-4 border-orange-500 pl-4 py-1 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed italic bg-neutral-50 dark:bg-neutral-900/40 rounded-r-lg">
                "{universityOverview.deanWelcome.quote}"
              </blockquote>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('fashion')}
                  className="px-4 py-2.5 text-xs font-semibold text-orange-700 bg-orange-50 hover:bg-orange-100 dark:bg-orange-950/40 dark:text-orange-300 border border-orange-300 dark:border-orange-800 rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  Explore Fashion Department →
                </button>
                <button
                  onClick={() => onNavigate('graphic')}
                  className="px-4 py-2.5 text-xs font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/40 dark:text-blue-200 border border-blue-300 dark:border-blue-800 rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  Explore Graphic Design Department →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Department Gateway Cards with Studio Photography Banners */}
      <section className="py-20 bg-neutral-50/70 dark:bg-[#0c0d0e] border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-orange-600 dark:text-orange-400 bg-orange-100/70 dark:bg-orange-950/50 px-3 py-1 rounded-md mb-2">
              <span>Academic Departments</span>
              <span aria-hidden="true">·</span>
              <span>Degree Tracks & Studios</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
              Two World-Class Creative Disciplines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fashion Design Department Gateway Card */}
            <div className="rounded-2xl bg-white dark:bg-[#131417] border border-neutral-200 dark:border-neutral-800 hover:border-orange-500 dark:hover:border-orange-500 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md overflow-hidden">
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                  <img
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop"
                    alt="Fashion Design Drafting Atelier and Garment Assembly Studio"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">Atelier Studio & Labs</span>
                    <span className="text-[11px] bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">4 Specialized Studios</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-orange-600 dark:text-orange-400 uppercase tracking-wider block mb-1 font-semibold">
                    Department of
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                    Fashion Design & Technology
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                    Specialized in computerized pattern grading (Lectra/CLO 3D), industrial sewing assembly, natural indigofera dye chemistry, bespoke corsetry, and staging Ghana’s top technical runway gala.
                  </p>

                  <div className="space-y-2 mb-6 text-xs text-neutral-700 dark:text-neutral-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0" />
                      <span>BTech in Fashion Design & Textiles Technology (4 Years)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0" />
                      <span>HND in Fashion Design & Modelling (3 Years)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0" />
                      <span>Industrial Garment Construction Certificate (1 Year)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 py-4 bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500">Lectra & CLO 3D Equipped</span>
                <button
                  onClick={() => onNavigate('fashion')}
                  className="px-4 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Enter Fashion Department</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Graphic Design Department Gateway Card */}
            <div className="rounded-2xl bg-white dark:bg-[#131417] border border-neutral-200 dark:border-neutral-800 hover:border-blue-600 dark:hover:border-blue-600 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md overflow-hidden">
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                  <img
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop"
                    alt="Graphic Design Lab and Digital Workstations"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">Digital Media Hub</span>
                    <span className="text-[11px] bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">Apple Mac Suites</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-4">
                    <Palette className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-blue-700 dark:text-blue-400 uppercase tracking-wider block mb-1 font-semibold">
                    Department of
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                    Graphic Design
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                    Specialized in corporate brand identity architecture, bilingual Akan typography, UI/UX interaction systems, 3D kinetic motion media, and precision sustainable packaging prototyping.
                  </p>

                  <div className="space-y-2 mb-6 text-xs text-neutral-700 dark:text-neutral-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>BTech in Graphic Design Technology (4 Years)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>HND in Graphic Design (3 Years)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>Diploma in UI/UX & Interactive Media (2 Years)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 py-4 bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500">Creative practice at KTU</span>
                <button
                  onClick={() => onNavigate('graphic')}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Enter Graphic Department</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolios Strip */}
      <section className="py-20 bg-white dark:bg-[#0c0d0e] border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40 px-3 py-1 rounded-md mb-2">
                <span>Curated Works</span>
                <span aria-hidden="true">·</span>
                <span>Graduation Archive</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
                Featured Student & Faculty Projects
              </h2>
            </div>
            <button
              onClick={() => onNavigate('portfolios')}
              className="text-xs font-semibold text-blue-900 dark:text-blue-300 hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-1 cursor-pointer"
            >
              <span>View All 8 Curated Portfolios</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioItems.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectProject(item)}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-[#131417] border border-neutral-200 dark:border-neutral-800 hover:shadow-xl hover:border-orange-500/50 transition-all flex flex-col cursor-pointer"
              >
                <div className="w-full h-60 relative overflow-hidden bg-neutral-950">
                  <VisualArtwork item={item} className="w-full h-full" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-1.5">
                      <span className="font-semibold text-orange-600 dark:text-orange-400">{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Class of {item.year}</span>
                    </div>
                    <h4 className="text-base font-serif font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 line-clamp-1 mb-2 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 mt-4 flex items-center justify-between text-xs">
                    <span className="text-neutral-600 dark:text-neutral-400">By <strong className="text-neutral-900 dark:text-white font-medium">{item.studentName}</strong></span>
                    <span className="text-orange-600 dark:text-orange-400 font-semibold flex items-center gap-1">Inspect Details →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Annual Runway Spotlight with Catwalk Background */}
      <section className="py-20 relative overflow-hidden border-t border-blue-900/40 bg-blue-950 text-white">
        {/* Full-bleed Runway Photography Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop"
            alt="KTU Annual Catwalk Gala Runway Stage"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1938]/98 via-[#0C1938]/92 to-[#0C1938]/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-block text-xs font-mono uppercase tracking-widest text-orange-400 bg-orange-950/70 border border-orange-500/40 px-3 py-1 rounded-md mb-3 font-bold">
                Flagship University Event
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-4 text-white leading-tight">
                {flagshipEvent.title}
              </h2>
              <p className="text-sm sm:text-base text-blue-100/90 max-w-2xl leading-relaxed mb-8">
                Over 45 graduating designers present 180 couture looks in Koforidua. Reviewed by Ghana Fashion Council, Christie Brown directors, and international textile executives.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('events')}
                  className="px-6 py-3.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-orange-900/40"
                >
                  <span>Reserve Seat & View Runway Program</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('fashion')}
                  className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs transition-colors cursor-pointer backdrop-blur-xs"
                >
                  Learn About Fashion Department
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 p-7 rounded-2xl bg-[#081126]/90 border border-blue-700/60 flex flex-col justify-center shadow-2xl backdrop-blur-md">
              <div className="text-xs font-mono text-orange-400 uppercase mb-2 font-bold tracking-wider">Event Date & Venue</div>
              <div className="text-2xl font-serif font-bold mb-2 text-white">{flagshipEvent.date} · 17:30 GMT</div>
              <div className="text-xs text-blue-200/90 mb-5 leading-relaxed">{flagshipEvent.venue}</div>
              <div className="pt-4 border-t border-blue-800/80 flex items-center justify-between text-xs">
                <span className="text-blue-300">RSVP Status:</span>
                <span className="text-orange-400 font-semibold">{flagshipEvent.rsvpCount} Registered Guests</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
