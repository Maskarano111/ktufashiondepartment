import React, { useEffect, useRef } from 'react';
import { X, Award } from 'lucide-react';
import { PortfolioItem } from '../types';
import { VisualArtwork } from './VisualArtwork';

interface ProjectModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onOpenApply: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ item, onClose, onOpenApply }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      closeButtonRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Background backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#121316] rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col z-10">
        {/* Header bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-[#121316]/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
            <span>{item.department}</span>
            <span aria-hidden="true">·</span>
            <span>Class of {item.year}</span>
          </div>
          <button
            onClick={onClose}
            ref={closeButtonRef}
            className="min-h-11 min-w-11 p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Artwork Showcase */}
        <div className="w-full h-80 sm:h-96 relative border-b border-neutral-200 dark:border-neutral-800 bg-neutral-950">
          <VisualArtwork item={item} isDetailed={true} className="w-full h-full" />
        </div>

        {/* Body content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Student Meta */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                {item.category}
              </span>
              {item.awards && (
                <>
                  <span className="text-neutral-400" aria-hidden="true">·</span>
                  <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 inline-flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.awards}</span>
                  </span>
                </>
              )}
            </div>

            <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              {item.title}
            </h3>

            <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
              <span className="font-medium text-neutral-900 dark:text-neutral-100">
                Created by {item.studentName}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-500 dark:text-neutral-400">{item.studentClass}</span>
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Conceptual Notes */}
          <div className="p-4 rounded-xl bg-neutral-50 dark:bg-[#18191d] border border-neutral-200 dark:border-neutral-800">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
              Design Philosophy & Research Notes
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed italic">
              "{item.conceptNotes}"
            </p>
          </div>

          {/* Materials & Tools Used Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                Materials & Substrates
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {item.materials.map((mat) => (
                  <span
                    key={mat}
                    className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                Digital & Industrial Tools
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {item.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Call to Action */}
          <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              Department of {item.department} · KTU
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
              >
                Close Viewer
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenApply();
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                View admissions guidance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
