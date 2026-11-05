import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { officialUniversityUrl } from '../constants/site';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setIsSubscribed(false);
    }, 4000);
  };

  const handleLink = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#004b7a] text-white border-t-4 border-[#f58216]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Brand & Faculty Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1D4ED8] text-white flex items-center justify-center font-cinzel font-bold text-sm shrink-0 shadow-sm border border-blue-400/40">
                <span className="text-orange-300">KTU</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base text-white tracking-tight">
                  Fashion & Graphic Design
                </span>
                <span className="text-[11px] text-blue-200/90 font-medium">
                  Faculty of Business and Management Studies
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed max-w-sm">
              Koforidua Technical University’s premier center for technical fashion construction, sustainable textile science, brand identity systems, and interactive digital product design.
            </p>

            <div className="pt-2">
              <a
                href={officialUniversityUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors cursor-pointer shadow-md shadow-orange-900/30"
              >
                Visit KTU admissions
              </a>
            </div>
          </div>

          {/* Quick Academic Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Departments
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button onClick={() => handleLink('fashion')} className="hover:text-white transition-colors cursor-pointer">
                  Fashion Design & Tech
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('graphic')} className="hover:text-white transition-colors cursor-pointer">
                  Graphic Design
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('fashion')} className="hover:text-white transition-colors cursor-pointer">
                  Textile Chemistry Labs
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('graphic')} className="hover:text-white transition-colors cursor-pointer">
                  Mac Digital Media Suites
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('portfolios')} className="hover:text-white transition-colors cursor-pointer">
                  Senior Capstone Works
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Portals & Directory
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button onClick={() => handleLink('admissions')} className="hover:text-white transition-colors cursor-pointer">
                  Admissions Requirements
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('events')} className="hover:text-white transition-colors cursor-pointer">
                  Annual Runway Gala
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('events')} className="hover:text-white transition-colors cursor-pointer">
                  Exhibitions & CADEx
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('faculty')} className="hover:text-white transition-colors cursor-pointer">
                  Faculty Directory
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Campus Location & Tours
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details & Bulletin */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Campus Contact & Bulletin
            </h4>

            <div className="space-y-2 text-xs text-neutral-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Koforidua Technical University, P.O. Box 981, Koforidua, Eastern Region, Ghana</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span>+233 (0) 342 020 930 / 931</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span>fbms.admissions@ktu.edu.gh</span>
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <p className="text-[11px] text-blue-200/80 mb-2">
                Subscribe to our seasonal runway dispatches and exhibition invitations:
              </p>
              {isSubscribed ? (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 p-2.5 rounded-lg border border-emerald-800">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscribed! Check your inbox for the upcoming Runway guide.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 text-xs bg-[#101f44] border border-blue-700/60 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors cursor-pointer shadow-sm"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Accreditation & Socials */}
        <div className="pt-8 border-t border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} Koforidua Technical University</span>
            <span aria-hidden="true">·</span>
            <span>Faculty of Business and Management Studies</span>
            <span aria-hidden="true">·</span>
            <span>Accredited by GTEC</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-400">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
              aria-label="KTU Fashion & Graphic Design on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
              aria-label="KTU Fashion & Graphic Design on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
              aria-label="KTU Fashion & Graphic Design on YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
