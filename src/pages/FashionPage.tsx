import React, { useState } from 'react';
import { Scissors, CheckCircle2, Cpu, Award, BookOpen, Layers, ArrowRight, UserCheck, Calendar } from 'lucide-react';
import { PageId, PortfolioItem } from '../types';
import { fashionDegreeProgrammes, portfolioItems, studioFacilities } from '../data/departmentData';
import { VisualArtwork } from '../components/VisualArtwork';
import { officialUniversityUrl } from '../constants/site';

interface FashionPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: PortfolioItem) => void;
}

export const FashionPage: React.FC<FashionPageProps> = ({ onNavigate, onSelectProject }) => {
  const [selectedDegree, setSelectedDegree] = useState(fashionDegreeProgrammes[0]);
  const fashionPortfolios = portfolioItems.filter((p) => p.department === 'Fashion Design & Technology');
  const fashionStudios = studioFacilities.filter((s) =>
    ['studio-sewing', 'studio-cad-fashion', 'studio-dye-chem'].includes(s.id)
  );

  return (
    <div className="space-y-0">
      {/* Department Hero Banner with Studio Photography */}
      <section className="relative py-20 bg-[#0C1938] text-white overflow-hidden border-b border-blue-900/50">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1600&auto=format&fit=crop"
            alt="KTU Fashion Design & Garment Construction Studio"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1938] via-[#0C1938]/95 to-[#0C1938]/85" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-orange-400 bg-orange-950/60 border border-orange-500/30 px-3 py-1 rounded-md mb-4">
              <span>Department of Fashion Design & Technology</span>
              <span aria-hidden="true">·</span>
              <span>Established 1997</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight mb-6 text-white leading-tight">
              Precision Pattern Engineering, Textile Science & Contemporary African Haute Couture.
            </h1>

            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed mb-8">
              We merge centuries of royal Asante and northern Ghanaian textile weaving heritage with computerized pattern drafting (Lectra Modaris and CLO 3D), industrial garment floor manufacturing, and sustainable botanical dye chemistry.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={officialUniversityUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-orange-950/40"
              >
                <span>Apply for Fashion Design Degree</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onNavigate('events')}
                className="px-6 py-3.5 text-xs font-semibold text-white bg-blue-950/80 hover:bg-blue-900 border border-blue-700/60 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-orange-400" />
                <span>Annual Runway Catwalk Gala</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Head of Department Message */}
      <section className="py-16 bg-white dark:bg-[#0c0d0e] border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-neutral-50 dark:bg-[#131417] border border-neutral-200 dark:border-neutral-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-neutral-200 border-2 border-orange-500/40 shadow-sm shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                  alt="Dr. Joseph Kofi Quaye"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-neutral-900 dark:text-neutral-100">
                  Dr. Joseph Kofi Quaye
                </h3>
                <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold mt-0.5">
                  Head of Department, Fashion Design & Technology
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  PhD Apparel Design & Technology, MTech (Tshwane)
                </p>
              </div>
            </div>

            <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-neutral-200 dark:border-neutral-800 pt-6 md:pt-0 md:pl-8">
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed italic mb-4">
                "Our teaching philosophy balances the delicate hand-draping of bespoke eveningwear with high-volume industrial garment engineering. Students graduate with dual fluency: capable of hand-crafting a presidential gown or managing an export garment assembly floor."
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                <span>WorldSkills Fashion Standards</span>
                <span aria-hidden="true">·</span>
                <span>Lectra Modaris Academic Partner</span>
                <span aria-hidden="true">·</span>
                <span>AGI Textile Sector Member</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Degree Programmes & Full Course Outline Syllabi */}
      <section className="py-20 bg-white dark:bg-[#0c0d0e] border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-orange-600 dark:text-orange-400 mb-2">
              <span>Academic Curriculum</span>
              <span aria-hidden="true">·</span>
              <span>Syllabi & Requirements</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
              Accredited Fashion Programmes
            </h2>
          </div>

          {/* Programme Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-neutral-100 dark:bg-[#141518] border border-neutral-200 dark:border-neutral-800 rounded-xl mb-8 overflow-x-auto">
            {fashionDegreeProgrammes.map((prog) => (
              <button
                key={prog.id}
                onClick={() => setSelectedDegree(prog)}
                className={`px-4 py-2.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  selectedDegree.id === prog.id
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                {prog.title.split('(')[0].trim()}
              </button>
            ))}
          </div>

          {/* Selected Programme Details */}
          <div className="p-8 rounded-2xl bg-white dark:bg-[#131417] border border-neutral-200 dark:border-neutral-800 mb-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
              <div>
                <span className="text-xs font-mono text-orange-600 dark:text-orange-400 font-semibold uppercase">
                  {selectedDegree.code} · {selectedDegree.duration}
                </span>
                <h3 className="text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mt-1">
                  {selectedDegree.title}
                </h3>
              </div>
              <button
                onClick={() => onNavigate('admissions')}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors cursor-pointer shrink-0 shadow-sm"
              >
                Apply for this Degree
              </button>
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {selectedDegree.overview}
            </p>

            {/* Entry Requirements & Career Prospects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="p-5 rounded-xl bg-neutral-50 dark:bg-[#18191d] border border-neutral-200 dark:border-neutral-800">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-3 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Entry Requirements</span>
                </h4>
                <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
                  {selectedDegree.entryRequirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#D4AF37] font-bold">·</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-neutral-50 dark:bg-[#18191d] border border-neutral-200 dark:border-neutral-800">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>Graduate Career Pathways</span>
                </h4>
                <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
                  {selectedDegree.careerProspects.map((career, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{career}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Course Outline Syllabus Table */}
            <div>
              <h4 className="text-sm font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <span>Selected Syllabus & Course Modules</span>
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden">
                  <thead className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Code</th>
                      <th className="py-3 px-4">Module Title</th>
                      <th className="py-3 px-4">Credits</th>
                      <th className="py-3 px-4">Level / Semester</th>
                      <th className="py-3 px-4">Learning Focus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                    {selectedDegree.curriculum.map((c) => (
                      <tr key={c.code} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                        <td className="py-3 px-4 font-mono font-bold text-orange-600 dark:text-orange-400 whitespace-nowrap">{c.code}</td>
                        <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">{c.title}</td>
                        <td className="py-3 px-4 font-mono tabular-nums">{c.credits}</td>
                        <td className="py-3 px-4 text-neutral-500 whitespace-nowrap">{c.level} · {c.semester}</td>
                        <td className="py-3 px-4 text-neutral-600 dark:text-neutral-400">{c.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Studios & Laboratories */}
      <section className="py-20 bg-white dark:bg-[#0c0d0e] border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#b58925] dark:text-[#D4AF37] mb-2">
              <span>Physical Infrastructure</span>
              <span aria-hidden="true">·</span>
              <span>Industrial Equipment</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
              Specialized Fashion Studios & Labs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fashionStudios.map((studio) => (
              <div
                key={studio.id}
                className="p-6 rounded-2xl bg-neutral-50 dark:bg-[#131417] border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                    <span className="font-mono">{studio.capacity}</span>
                    <span className="font-mono text-[#b58925] dark:text-[#D4AF37]">Active Studio</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    {studio.name}
                  </h3>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                    {studio.description}
                  </p>

                  <div className="mb-4">
                    <span className="text-[11px] font-semibold uppercase text-neutral-500 block mb-1.5">
                      Key Equipment:
                    </span>
                    <ul className="space-y-1 text-xs text-neutral-700 dark:text-neutral-300">
                      {studio.keyEquipment.map((eq, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#D4AF37] font-bold">·</span>
                          <span className="line-clamp-1">{eq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 text-[11px] text-neutral-500">
                  Supervised by {studio.leadTechnician}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Works Gallery Preview */}
      <section className="py-20 bg-white dark:bg-[#0c0d0e] border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-orange-600 dark:text-orange-400 mb-2">
                <span>Selected Works</span>
                <span aria-hidden="true">·</span>
                <span>Fashion Archives</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
                Runway & Textile Collections
              </h2>
            </div>
            <button
              onClick={() => onNavigate('portfolios')}
              className="text-xs font-semibold text-blue-900 dark:text-blue-300 hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-1 cursor-pointer"
            >
              <span>Explore All Student Works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fashionPortfolios.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectProject(item)}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-[#131417] border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all flex flex-col cursor-pointer"
              >
                <div className="w-full h-56 relative overflow-hidden">
                  <VisualArtwork item={item} className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase text-orange-600 dark:text-orange-400 mb-1 block">
                      {item.category}
                    </span>
                    <h4 className="text-base font-serif font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 line-clamp-1 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 mt-4 flex items-center justify-between text-xs">
                    <span className="text-neutral-500">By <strong>{item.studentName}</strong></span>
                    <span className="text-orange-600 dark:text-orange-400 font-semibold">Inspect →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
