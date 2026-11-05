import React, { useState, useMemo } from 'react';
import { Mail, MapPin, GraduationCap, Clock, BookOpen, Search, Filter } from 'lucide-react';
import { facultyMembers } from '../data/departmentData';
import { PageId } from '../types';

interface FacultyPageProps {
  onNavigate: (page: PageId) => void;
}

export const FacultyPage: React.FC<FacultyPageProps> = ({ onNavigate }) => {
  const [selectedDept, setSelectedDept] = useState<'all' | 'fashion' | 'graphic' | 'leadership'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaculty = useMemo(() => {
    return facultyMembers.filter((fac) => {
      if (selectedDept === 'fashion' && fac.department !== 'Fashion Design & Technology') return false;
      if (selectedDept === 'graphic' && fac.department !== 'Graphic Design') return false;
      if (selectedDept === 'leadership' && fac.department !== 'Faculty Leadership') return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        fac.name.toLowerCase().includes(q) ||
        fac.role.toLowerCase().includes(q) ||
        fac.qualification.toLowerCase().includes(q) ||
        fac.researchFocus.some((r) => r.toLowerCase().includes(q)) ||
        fac.coursesTaught.some((c) => c.toLowerCase().includes(q))
      );
    });
  }, [selectedDept, searchQuery]);

  return (
    <div className="py-16 bg-white dark:bg-[#0c0d0e] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-orange-600 dark:text-orange-400 mb-2">
            <span>Academic Staff & Fellows</span>
            <span aria-hidden="true">·</span>
            <span>Studio Masters & Technologists</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 dark:text-neutral-50 tracking-tight mb-4">
            Faculty & Leadership Directory
          </h1>
          <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Our professors and studio masters combine doctoral scholarship from leading global universities with active commercial practices in haute couture, textile engineering, corporate design systems, and visual semiotics under the Faculty of Business and Management Studies.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 rounded-xl bg-white dark:bg-[#141518] border border-neutral-200 dark:border-neutral-800 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto">
            <button
              onClick={() => setSelectedDept('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap cursor-pointer transition-colors ${
                selectedDept === 'all'
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              All Faculty ({facultyMembers.length})
            </button>
            <button
              onClick={() => setSelectedDept('fashion')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap cursor-pointer transition-colors ${
                selectedDept === 'fashion'
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              Fashion Design
            </button>
            <button
              onClick={() => setSelectedDept('graphic')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap cursor-pointer transition-colors ${
                selectedDept === 'graphic'
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              Graphic Design
            </button>
            <button
              onClick={() => setSelectedDept('leadership')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap cursor-pointer transition-colors ${
                selectedDept === 'leadership'
                  ? 'bg-[#0C1938] text-white border border-blue-800 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              Faculty Leadership
            </button>
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search faculty or course..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2 text-xs bg-neutral-50 dark:bg-[#1a1b1f] border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Faculty Grid (3 in a row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFaculty.map((member) => {
            const initials = member.name
              .replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s*/, '')
              .split(' ')
              .map((n) => n[0])
              .slice(0, 2)
              .join('');

            return (
              <div
                key={member.id}
                className="p-6 rounded-2xl bg-white dark:bg-[#131417] border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-start gap-4 mb-5">
                    {member.avatarUrl ? (
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-2 border-orange-500/40 shadow-sm shrink-0">
                        <img
                          src={member.avatarUrl}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-xl bg-blue-950 text-orange-400 flex items-center justify-center font-serif text-lg font-bold border border-blue-800 shadow-sm shrink-0">
                        {initials}
                      </div>
                    )}
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 block mb-1 font-semibold">
                        {member.department}
                      </span>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-neutral-900 dark:text-neutral-100 leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-xs text-blue-900 dark:text-blue-300 font-medium mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Qualification badge */}
                  <div className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400 mb-4 bg-neutral-50 dark:bg-[#18191d] p-3 rounded-lg border border-neutral-100 dark:border-neutral-800">
                    <GraduationCap className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{member.qualification}</span>
                  </div>

                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Research Focus */}
                  <div className="space-y-1 text-xs text-neutral-500 mb-4">
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200 block">
                      Research Specializations:
                    </span>
                    <p className="italic text-neutral-600 dark:text-neutral-400">
                      {member.researchFocus.join(' · ')}
                    </p>
                  </div>

                  {/* Courses Taught */}
                  <div className="space-y-1 text-xs text-neutral-500 mb-4 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200 block">
                      Courses & Studios Taught:
                    </span>
                    <ul className="space-y-0.5 text-neutral-600 dark:text-neutral-400">
                      {member.coursesTaught.map((c, i) => (
                        <li key={i}>· {c}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-500 space-y-2">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{member.office}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Office Hours: {member.officeHours}</span>
                  </div>
                  <div className="pt-1">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-blue-700 dark:text-blue-400 hover:text-orange-600 dark:hover:text-orange-400 font-semibold flex items-center gap-1 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{member.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
