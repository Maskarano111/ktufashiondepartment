import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, Send, Building } from 'lucide-react';
import { ContactFormData, PageId } from '../types';
import { validateContactForm } from '../utils/portfolio';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    subject: '',
    department: 'Fashion Design & Technology',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        department: 'Fashion Design & Technology',
        message: '',
      });
    }, 4000);
  };

  return (
    <div className="py-16 bg-white dark:bg-[#0c0d0e] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-orange-600 dark:text-orange-400 mb-2">
            <span>Get in Touch</span>
            <span aria-hidden="true">·</span>
            <span>Campus Location & Registry</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 dark:text-neutral-50 tracking-tight mb-4">
            Contact & Campus Info
          </h1>
          <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Have questions regarding admissions, studio facilities, runway sponsorships, or corporate design partnerships? The Faculty of Business and Management Studies administration is here to assist you.
          </p>
        </div>

        {/* 2-Column Contact & Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#131417] p-8 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              Send an Official Departmental Message
            </h3>
            <p className="text-xs text-neutral-500 mb-6">
              Our registry typically replies within 24–48 working hours.
            </p>

            {isSuccess ? (
              <div className="p-8 text-center space-y-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-500/40">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="text-base font-serif font-bold text-neutral-900 dark:text-neutral-100">
                  Message Dispatched Successfully!
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 max-w-sm mx-auto">
                  Thank you for reaching out to the Faculty of Business and Management Studies. A departmental officer has received your message.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Samuel Okyere"
                      className={`w-full px-3 py-2 bg-neutral-50 dark:bg-[#1a1b1f] border rounded-lg text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                        errors.fullName ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-700'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. samuel@example.com"
                      className={`w-full px-3 py-2 bg-neutral-50 dark:bg-[#1a1b1f] border rounded-lg text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                        errors.email ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-700'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Target Department
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#1a1b1f] border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="Fashion Design & Technology">Department of Fashion Design & Technology</option>
                      <option value="Graphic Design">Department of Graphic Design</option>
                      <option value="Faculty Leadership">Dean’s Secretariat (FCAT)</option>
                      <option value="Admissions Registry">Admissions & Portfolio Committee</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Inquiring about Weekend BTech Top-Up"
                      className={`w-full px-3 py-2 bg-neutral-50 dark:bg-[#1a1b1f] border rounded-lg text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                        errors.subject ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-700'
                      }`}
                    />
                    {errors.subject && <p className="text-[11px] text-red-500 mt-1">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your question, prospective application, or visit request..."
                    className={`w-full px-3 py-2 bg-neutral-50 dark:bg-[#1a1b1f] border rounded-lg text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      errors.message ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-700'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500">
                    Koforidua Technical University
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-2.5 font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Campus Details & Office Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#131417] border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-4">
              <h3 className="text-base font-serif font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                <Building className="w-4 h-4 text-orange-500" />
                <span>Physical Campus Location</span>
              </h3>

              <div className="space-y-3 text-xs text-neutral-600 dark:text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 dark:text-neutral-100 block">Faculty of Business and Management Studies</strong>
                    <span>Koforidua Technical University</span><br />
                    <span>Post Office Box 981, Koforidua</span><br />
                    <span>Eastern Region, Ghana, West Africa</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                  <div>
                    <span>Admissions Line: +233 (0) 342 020 930</span><br />
                    <span>Dean's Office: +233 (0) 342 020 931</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                  <div>
                    <span>General: fbms.admissions@ktu.edu.gh</span><br />
                    <span>Registry: info@ktu.edu.gh</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  <Clock className="w-4 h-4 text-orange-500 shrink-0" />
                  <div>
                    <span>Monday – Friday: 08:00 – 17:00 GMT</span><br />
                    <span className="text-neutral-400">Weekends: Closed (Studio access by permit)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Book a Tour Box */}
            <div className="p-6 rounded-2xl bg-[#0C1938] text-white border border-blue-900/60 shadow-xs space-y-3">
              <h3 className="text-base font-serif font-bold text-white">
                Book an Atelier & Lab Studio Tour
              </h3>
              <p className="text-xs text-blue-100/80 leading-relaxed">
                Prospective students, parent delegations, and secondary school art clubs can book a guided tour of our industrial sewing suite, CLO 3D CAD fashion studio, and Apple Macintosh labs.
              </p>
              <button
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    subject: 'Request for Guided Studio & Laboratory Tour',
                  }));
                  window.scrollTo({ top: 350, behavior: 'smooth' });
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                Request Studio Tour →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
