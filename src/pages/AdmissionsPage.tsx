import React from 'react';
import { ArrowUpRight, Award, BookOpen, CheckCircle2, ExternalLink, HelpCircle } from 'lucide-react';
import { PageId } from '../types';
import { admissionCutOffs, tuitionFeeSchedule } from '../data/departmentData';
import { officialUniversityUrl } from '../constants/site';

interface AdmissionsPageProps {
  onNavigate: (page: PageId) => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white py-12 dark:bg-[#10151d] sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="border-b border-neutral-200 pb-12 dark:border-neutral-800">
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-700 dark:text-orange-400">
              <span>Admissions guidance</span>
              <span aria-hidden="true">·</span>
              <span>2026/2027 academic year</span>
            </div>
            <h1 className="mb-5 text-4xl font-serif font-bold tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
              Start your application with KTU.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              This website introduces the Fashion Design and Graphic Design departments. Applications, payments, official deadlines, and admission decisions are handled by Koforidua Technical University through its central admissions service.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={officialUniversityUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-600 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-[#10151d]"
              >
                Visit the official KTU website
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-300 px-5 py-3 text-xs font-semibold text-neutral-700 transition-colors hover:border-orange-600 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-orange-400 dark:focus:ring-offset-[#10151d]"
              >
                <HelpCircle className="h-3.5 w-3.5" />
                Ask the department
              </button>
            </div>
            <p className="mt-4 text-xs text-neutral-500">
              The link opens the university website in a new tab. Please confirm current requirements and deadlines there before applying.
            </p>
          </div>
        </section>

        <section className="grid gap-6 border-b border-neutral-200 py-12 dark:border-neutral-800 md:grid-cols-3">
          {[
            ['01', 'Choose your programme', 'Explore our Fashion Design and Graphic Design pathways before visiting the central admissions portal.'],
            ['02', 'Check official requirements', 'Requirements, deadlines, fees, and application instructions are published and managed by KTU.'],
            ['03', 'Apply on the KTU website', 'Use the official university application service for a secure, complete application.'],
          ].map(([number, title, description]) => (
            <div key={number} className="border-l-2 border-orange-500 pl-5">
              <span className="font-mono text-xs font-bold text-orange-700 dark:text-orange-400">{number}</span>
              <h2 className="mt-2 text-lg font-serif font-bold text-neutral-900 dark:text-neutral-100">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{description}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-10 py-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-2">
              <Award className="h-4 w-4 text-orange-600" />
              <h2 className="text-xl font-serif font-bold text-neutral-900 dark:text-neutral-100">Programme guidance</h2>
            </div>
            <p className="mb-6 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              The information below is provided to help you compare department programmes. Treat the official KTU admissions service as the final source for current entry requirements.
            </p>
            <div className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
              {admissionCutOffs.map((cut) => (
                <div key={cut.programme} className="grid gap-2 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{cut.programme}</h3>
                    <p className="mt-1 text-xs text-neutral-500">{cut.topUpRequirement}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="block font-mono text-xs font-semibold text-orange-700 dark:text-orange-400">{cut.wssceCutoff}</span>
                    <span className="text-xs text-neutral-500">{cut.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-[#151b24]">
              <div className="mb-5 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-orange-600" />
                <h2 className="text-xl font-serif font-bold text-neutral-900 dark:text-neutral-100">Before you apply</h2>
              </div>
              <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-300">
                {[
                  'Review the programme pages on this site to understand the studio experience.',
                  'Prepare your academic results and any portfolio materials requested by KTU.',
                  'Use only the official university admissions service for your application and payment.',
                  'Contact the department if you need programme or studio information.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={officialUniversityUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-blue-800 hover:text-orange-700 dark:text-blue-300 dark:hover:text-orange-400"
              >
                Go to KTU official website
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </aside>
        </section>

        <section className="border-t border-neutral-200 pt-8 dark:border-neutral-800">
          <h2 className="text-lg font-serif font-bold text-neutral-900 dark:text-neutral-100">Indicative fee information</h2>
          <p className="mt-2 text-xs text-neutral-500">Fees can change. Confirm the current schedule on the official KTU website before making any payment.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {tuitionFeeSchedule.map((fee) => (
              <div key={fee.category} className="border border-neutral-200 p-4 dark:border-neutral-800">
                <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">{fee.category}</p>
                <p className="mt-2 font-mono text-sm font-bold text-orange-700 dark:text-orange-400">{fee.perYear}</p>
                <p className="mt-2 text-[11px] leading-relaxed text-neutral-500">{fee.notes}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
