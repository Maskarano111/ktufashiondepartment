import React, { useState, useEffect } from 'react';
import { PageId, PortfolioItem } from './types';
import { parseHashToPage } from './utils/portfolio';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { HomePage } from './pages/HomePage';
import { FashionPage } from './pages/FashionPage';
import { GraphicDesignPage } from './pages/GraphicDesignPage';
import { PortfoliosPage } from './pages/PortfoliosPage';
import { EventsPage } from './pages/EventsPage';
import { FacultyPage } from './pages/FacultyPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { ContactPage } from './pages/ContactPage';
import { universityOverview } from './data/departmentData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    if (typeof window !== 'undefined') {
      return parseHashToPage(window.location.hash);
    }
    return 'home';
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ktu_theme');
      if (saved) return saved === 'dark';
      return false;
    }
    return false;
  });

  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  // Sync hash changes (back/forward button & manual URL navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const page = parseHashToPage(window.location.hash);
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Ensure scroll resets to top on every page change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentPage]);

  useEffect(() => {
    const pageTitles: Record<PageId, string> = {
      home: 'Fashion & Graphic Design Departments',
      fashion: 'Fashion Design & Technology | KTU',
      graphic: 'Graphic Design | KTU',
      portfolios: 'Student Portfolios | KTU',
      events: 'Events & Runway Galas | KTU',
      faculty: 'Faculty Directory | KTU',
      admissions: 'Admissions Guidance | KTU',
      contact: 'Contact the Departments | KTU',
    };
    document.title = pageTitles[currentPage];
    const description = `Explore ${universityOverview.institution}'s Fashion Design and Graphic Design departments, programmes, studios, faculty, portfolios, and events.`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [currentPage]);

  // Sync theme changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ktu_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ktu_theme', 'light');
    }
  }, [isDark]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0c0d0e] text-neutral-900 dark:text-neutral-100 font-sans selection:bg-orange-500/25 selection:text-orange-950 dark:selection:text-orange-100">
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[100] bg-white px-4 py-3 text-xs font-bold text-blue-950 shadow-lg focus:not-sr-only"
      >
        Skip to content
      </a>
      {/* Institutional Top Bar & Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />

      {/* Dynamic Page Views */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentPage === 'fashion' && (
          <FashionPage
            onNavigate={handleNavigate}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentPage === 'graphic' && (
          <GraphicDesignPage
            onNavigate={handleNavigate}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentPage === 'portfolios' && (
          <PortfoliosPage
            onNavigate={handleNavigate}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentPage === 'events' && (
          <EventsPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'faculty' && (
          <FacultyPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'admissions' && (
          <AdmissionsPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Institutional Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Project Detail Lightbox Modal */}
      <ProjectModal
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenApply={() => {
          setSelectedProject(null);
          handleNavigate('admissions');
        }}
      />
    </div>
  );
}
