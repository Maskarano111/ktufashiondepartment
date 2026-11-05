import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight, GraduationCap } from 'lucide-react';
import { PageId } from '../types';
import { officialUniversityUrl } from '../constants/site';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  isDark,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'graphic', label: 'Graphic Design' },
    { id: 'portfolios', label: 'Student Work' },
    { id: 'events', label: 'Events' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f7f6f2] dark:bg-[#10151d] border-b border-[#d9d8d2] dark:border-neutral-800">
      {/* Institutional Top Bar (Prestigious Academic University Bar) */}
      <div className="hidden lg:block border-b border-blue-900 dark:border-neutral-900 bg-blue-950 text-blue-100 text-[11px] py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="font-semibold text-white tracking-wider uppercase">
              Koforidua Technical University
            </span>
            <span className="text-blue-400" aria-hidden="true">·</span>
            <span className="text-blue-200 font-medium">Faculty of Business and Management Studies</span>
            <span className="text-blue-400" aria-hidden="true">·</span>
            <span className="text-orange-400 font-medium">Applied creative education</span>
          </div>
          <div className="flex items-center gap-4 text-blue-200 whitespace-nowrap">
            <span>Department showcase</span>
            <span className="text-blue-400/60" aria-hidden="true">|</span>
            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Campus Tours
            </button>
            <span className="text-blue-400/60" aria-hidden="true">|</span>
            <a
              href={officialUniversityUrl}
              target="_blank"
              rel="noreferrer"
              className="text-orange-400 hover:text-orange-300 hover:underline font-medium"
            >
              KTU admissions
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Lockup with KTU Official University Crest Style */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-sm cursor-pointer whitespace-nowrap shrink-0"
          aria-label="KTU Fashion and Graphic Design Home"
        >
          <div className="w-10 h-10 rounded-none bg-blue-950 dark:bg-blue-900 text-orange-500 flex items-center justify-center font-cinzel font-bold text-xs border-l-4 border-orange-500 shrink-0">
            <span className="tracking-tight text-orange-400">KTU</span>
          </div>
          <div className="flex flex-col justify-center whitespace-nowrap shrink-0">
            <span className="font-serif font-bold text-base sm:text-lg text-neutral-900 dark:text-neutral-50 tracking-tight leading-none group-hover:text-blue-700 dark:group-hover:text-orange-400 transition-colors whitespace-nowrap">
              Fashion & Graphic Design
            </span>
            <span className="text-[10px] sm:text-[11px] text-blue-800 dark:text-blue-300 font-sans tracking-wide mt-0.5 whitespace-nowrap font-medium">
              Faculty of Business & Management Studies
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden xl:flex items-center gap-6 text-[11px] font-semibold text-neutral-600 dark:text-neutral-300"
          aria-label="Department Navigation"
        >
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 relative ${
                  isActive
                    ? 'text-blue-800 dark:text-orange-400 font-bold'
                    : 'hover:text-blue-700 dark:hover:text-orange-300'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Theme Switch + Apply Button + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleTheme}
            className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {isDark ? <Sun className="w-4 h-4 text-orange-400" /> : <Moon className="w-4 h-4 text-blue-700" />}
          </button>

          <a
            href={officialUniversityUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Visit KTU admissions</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0b0c0e] px-4 pt-3 pb-5 space-y-1">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-orange-600 dark:text-orange-400 font-bold'
                    : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-3">
            <a
              href={officialUniversityUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors cursor-pointer shadow-sm"
            >
              <span>Visit KTU admissions</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
