import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Ticket, CheckCircle2, Sparkles, Download, ArrowRight } from 'lucide-react';
import { upcomingEvents } from '../data/departmentData';
import { EventItem, PageId } from '../types';
import { formatEventDate, calculateDaysRemaining } from '../utils/portfolio';

interface EventsPageProps {
  onNavigate: (page: PageId) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onNavigate }) => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [attendeeEmail, setAttendeeEmail] = useState('');
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeAffiliation, setAttendeeAffiliation] = useState('Student / Patron');
  const [rsvpdList, setRsvpdList] = useState<Record<string, { name: string; passCode: string }>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const flagshipEvent = upcomingEvents[0];
  const daysToRunway = calculateDaysRemaining(flagshipEvent.date);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent || !attendeeEmail || !attendeeName) return;

    const passCode = `KTU-PASS-${Math.floor(100000 + Math.random() * 900000)}`;
    setRsvpdList((prev) => ({
      ...prev,
      [selectedEvent.id]: { name: attendeeName, passCode },
    }));

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setSelectedEvent(null);
      setAttendeeEmail('');
      setAttendeeName('');
    }, 2000);
  };

  return (
    <div className="py-16 bg-white dark:bg-[#0c0d0e] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-orange-600 dark:text-orange-400 mb-2">
            <span>Faculty Calendar</span>
            <span aria-hidden="true">·</span>
            <span>Runways, Symposia & Design Fairs</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 dark:text-neutral-50 tracking-tight mb-4">
            Events & Runway Galas
          </h1>
          <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Every academic semester culminates in public showcases where senior fashion couturiers and graphic design innovators present their capstones to international jurors, luxury patrons, and industry recruiters.
          </p>
        </div>

        {/* Flagship Runway Event Spotlight */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0C1938] text-white relative overflow-hidden border border-blue-900/60 shadow-2xl mb-16">
          {flagshipEvent.image && (
            <div className="absolute inset-0 z-0">
              <img
                src={flagshipEvent.image}
                alt={flagshipEvent.title}
                className="w-full h-full object-cover object-center opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0C1938] via-[#0C1938]/95 to-[#0C1938]/85" />
            </div>
          )}
          <div className="absolute right-0 top-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-orange-400 tracking-wider font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Flagship 18th Annual Gala · {daysToRunway} Days Remaining</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
                {flagshipEvent.title}
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                {flagshipEvent.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-neutral-800 text-xs">
                <div>
                  <span className="text-neutral-500 block mb-1">Date:</span>
                  <span className="font-semibold text-white">{flagshipEvent.date}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block mb-1">Time:</span>
                  <span className="font-semibold text-white">{flagshipEvent.time}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block mb-1">Venue:</span>
                  <span className="font-semibold text-white">KTU Great Hall</span>
                </div>
                <div>
                  <span className="text-neutral-500 block mb-1">Seating:</span>
                  <span className="font-semibold text-white">Reserved Pass</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              {rsvpdList[flagshipEvent.id] ? (
                <div className="p-5 rounded-2xl bg-emerald-950/80 border border-emerald-500/80 text-emerald-300 text-xs space-y-2 text-left">
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Runway Seat Reserved</span>
                  </div>
                  <div>Pass Code: <strong className="font-mono text-white">{rsvpdList[flagshipEvent.id].passCode}</strong></div>
                  <div>Reserved for: <strong className="text-white">{rsvpdList[flagshipEvent.id].name}</strong></div>
                </div>
              ) : (
                <button
                  onClick={() => setSelectedEvent(flagshipEvent)}
                  className="px-6 py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-lg shadow-orange-950/40 cursor-pointer"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Reserve Runway Gala Pass</span>
                </button>
              )}
            </div>
          </div>

          {/* Full Runway Run-of-Show Schedule */}
          <div className="mt-10 pt-8 border-t border-blue-900/60">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-orange-400 mb-4 font-mono">
              Official Runway Run-of-Show Schedule:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
              {flagshipEvent.schedule.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-blue-950/60 border border-blue-800/60">
                  <span className="font-mono text-orange-400 font-bold block mb-1">{item.time}</span>
                  <span className="text-blue-100 leading-snug">{item.activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Events Calendar */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
            <h2 className="text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100">
              Upcoming Symposia & Exhibitions
            </h2>
            <span className="text-xs text-neutral-500 font-mono">Department events and showcases</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.slice(1).map((ev) => {
              const dateInfo = formatEventDate(ev.date);
              const isRegistered = rsvpdList[ev.id];

              return (
                <div
                  key={ev.id}
                  className="rounded-2xl bg-white dark:bg-[#131417] border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all shadow-sm hover:shadow-md overflow-hidden"
                >
                  {ev.image && (
                    <div className="relative h-44 w-full overflow-hidden bg-neutral-900">
                      <img
                        src={ev.image}
                        alt={ev.title}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-black/70 backdrop-blur-xs text-orange-400 border border-white/10 uppercase">
                          {ev.department}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-baseline justify-between mb-3">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-serif font-bold text-neutral-900 dark:text-neutral-100 tabular-nums">
                            {dateInfo.day}
                          </span>
                          <span className="text-xs uppercase font-mono font-semibold text-orange-600 dark:text-orange-400">
                            {dateInfo.month} {dateInfo.year}
                          </span>
                        </div>
                        {!ev.image && <span className="text-xs font-mono text-neutral-500">{ev.department}</span>}
                      </div>

                    <h3 className="text-lg font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                      {ev.title}
                    </h3>

                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                      {ev.description}
                    </p>

                    <div className="space-y-1 text-xs text-neutral-500 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{ev.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5" />
                        <span className="line-clamp-1">{ev.venue}</span>
                      </div>
                    </div>
                  </div>

                    <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                      <span className="text-xs text-neutral-500">{ev.ticketPrice}</span>
                      {isRegistered ? (
                        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Pass Registered</span>
                        </span>
                      ) : (
                        <button
                          onClick={() => setSelectedEvent(ev)}
                          className="text-xs font-semibold text-blue-700 dark:text-blue-400 hover:text-orange-600 dark:hover:text-orange-400 cursor-pointer"
                        >
                          Register Free Pass →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* RSVP Modal Dialog */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md bg-white dark:bg-[#141518] rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-2xl">
            <h3 className="text-lg font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-1">
              Event Attendance Registration
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4">
              {selectedEvent.title} · {selectedEvent.date}
            </p>

            {isSuccess ? (
              <div className="py-6 text-center text-emerald-600 dark:text-emerald-400 font-medium text-xs flex flex-col items-center gap-2">
                <CheckCircle2 className="w-8 h-8" />
                <span>Pass Issued! Your digital QR ticket code has been generated.</span>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kwabena Addo"
                    value={attendeeName}
                    onChange={(e) => setAttendeeName(e.target.value)}
                    className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#1b1c20] border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. yourname@gmail.com"
                    value={attendeeEmail}
                    onChange={(e) => setAttendeeEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#1b1c20] border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Attendee Affiliation
                  </label>
                  <select
                    value={attendeeAffiliation}
                    onChange={(e) => setAttendeeAffiliation(e.target.value)}
                    className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#1b1c20] border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  >
                    <option value="Student / Patron">General Public / Creative Patron</option>
                    <option value="Prospective Student">Prospective Student (Applicant)</option>
                    <option value="Press / Fashion Journalist">Press / Fashion Journalist</option>
                    <option value="Industry Recruiter / Agency">Industry Recruiter / Fashion House</option>
                    <option value="KTU Alumni">KTU Alumni</option>
                  </select>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(null)}
                    className="px-4 py-2 font-semibold text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors cursor-pointer shadow-sm"
                  >
                    Confirm & Issue Pass
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
