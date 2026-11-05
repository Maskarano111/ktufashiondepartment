import React, { useState, useMemo } from 'react';
import { Search, Filter, Eye, Award, X, RotateCcw } from 'lucide-react';
import { portfolioItems } from '../data/departmentData';
import { PageId, PortfolioCategory, PortfolioItem } from '../types';
import { filterPortfolio } from '../utils/portfolio';
import { VisualArtwork } from '../components/VisualArtwork';

interface PortfoliosPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: PortfolioItem) => void;
}

export const PortfoliosPage: React.FC<PortfoliosPageProps> = ({ onNavigate, onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('All');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [departmentFilter, setDepartmentFilter] = useState<'all' | 'fashion' | 'graphic'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: PortfolioCategory[] = [
    'All',
    'Fashion Runways',
    'Brand Identities',
    'Illustration',
    'Textile Prints',
    'UI/UX & Interaction',
  ];

  const filteredItems = useMemo(() => {
    let items = filterPortfolio(portfolioItems, selectedCategory, searchQuery, selectedYear);
    if (departmentFilter === 'fashion') {
      items = items.filter((i) => i.department === 'Fashion Design & Technology');
    } else if (departmentFilter === 'graphic') {
      items = items.filter((i) => i.department === 'Graphic Design');
    }
    return items;
  }, [selectedCategory, searchQuery, selectedYear, departmentFilter]);

  const handleReset = () => {
    setSelectedCategory('All');
    setSelectedYear('all');
    setDepartmentFilter('all');
    setSearchQuery('');
  };

  return (
    <div className="py-16 bg-white dark:bg-[#0c0d0e] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-orange-600 dark:text-orange-400 mb-2">
            <span>Faculty Archive</span>
            <span aria-hidden="true">·</span>
            <span>Senior Capstones & Catwalks</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 dark:text-neutral-50 tracking-tight mb-4">
            Student & Faculty Portfolios
          </h1>
          <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Explore selected fashion and graphic design projects, from textile experiments and graduating collections to identity systems and interactive work.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#141518] border border-neutral-200 dark:border-neutral-800 shadow-xs mb-10 space-y-5">
          {/* Top row: Search input and dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-6 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search by student name, technique, material, or tool..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 text-xs bg-neutral-50 dark:bg-[#1a1b1f] border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="md:col-span-3">
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value as any)}
                className="w-full py-2.5 px-3 text-xs bg-neutral-50 dark:bg-[#1a1b1f] border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="all">All Departments (Dual Faculty)</option>
                <option value="fashion">Fashion Design & Technology Only</option>
                <option value="graphic">Graphic Design Only</option>
              </select>
            </div>

            <div className="md:col-span-3 flex items-center gap-2">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="flex-1 py-2.5 px-3 text-xs bg-neutral-50 dark:bg-[#1a1b1f] border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="all">All Graduation Years</option>
                <option value="2026">Class of 2026</option>
                <option value="2025">Class of 2025</option>
              </select>

              {(searchQuery || selectedCategory !== 'All' || selectedYear !== 'all' || departmentFilter !== 'all') && (
                <button
                  onClick={handleReset}
                  title="Reset all filters"
                  className="p-2.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-neutral-800 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Bottom row: Category Pills / Segmented Controls */}
          <div className="flex items-center gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Results Count */}
        <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-6">
          <span>Showing <strong>{filteredItems.length}</strong> curated projects</span>
          <span className="font-mono text-blue-900 dark:text-blue-300 font-medium">KTU student work archive</span>
        </div>

        {/* Portfolio Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center bg-white dark:bg-[#141518] rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8">
            <Filter className="w-8 h-8 mx-auto text-neutral-400 mb-3" />
            <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
              No matching works found
            </h3>
            <p className="text-xs text-neutral-500 mb-4">
              Try adjusting your search criteria or resetting filters.
            </p>
            <button
              onClick={handleReset}
              className="px-4 py-2 text-xs font-semibold text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectProject(item)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onSelectProject(item);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title} project details`}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-[#131417] border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-all flex flex-col cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              >
                <div className="w-full h-64 relative overflow-hidden">
                  <VisualArtwork item={item} className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="px-4 py-2 rounded-full bg-white text-neutral-950 text-xs font-semibold shadow-lg flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Portfolio</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-1.5">
                      <span className="font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                        {item.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{item.department === 'Fashion Design & Technology' ? 'Fashion' : 'Graphic'}</span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 line-clamp-1 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-neutral-400">Designer: </span>
                      <span className="font-semibold text-neutral-900 dark:text-neutral-200">
                        {item.studentName}
                      </span>
                    </div>
                    <span className="text-neutral-400 font-mono">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
