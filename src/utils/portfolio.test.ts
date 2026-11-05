import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseHashToPage,
  filterPortfolio,
  validateApplicationForm,
  validateContactForm,
  formatEventDate,
  calculateDaysRemaining,
  calculateDepartmentStats,
} from './portfolio.ts';
import { PortfolioItem } from '../types.ts';

const mockItems: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Adinkra Modernism Evening Gown',
    studentName: 'Akosua Mensah',
    studentClass: 'BTech Fashion Final Year',
    department: 'Fashion Design & Technology',
    category: 'Fashion Runways',
    year: 2026,
    description: 'Bespoke evening silhouette using structural boning and handcrafted wax print.',
    conceptNotes: 'Inspired by Gye Nyame symbolism.',
    materials: ['Silk dupioni', 'Handwoven kentegawu'],
    toolsUsed: ['Lectra Modaris', 'Juki Industrial Sewing'],
    awards: '1st Prize Graduate Runway 2026',
    featured: true,
    visualTheme: {
      accentColor: '#D4AF37',
      secondaryColor: '#121212',
      badge: 'Runway Couture',
      motif: 'haute-couture',
    },
  },
  {
    id: 'p2',
    title: 'Volta Heritage Gin Packaging & Identity',
    studentName: 'Kwame Osei',
    studentClass: 'BTech Graphic Design Final Year',
    department: 'Graphic Design',
    category: 'Brand Identities',
    year: 2026,
    description: 'Complete visual identity, custom typography, and glass bottle embossing.',
    conceptNotes: 'Artisanal distillery branding.',
    materials: ['FSC Cotton Paper', 'Hot foil stamping'],
    toolsUsed: ['Adobe Illustrator', 'Cinema 4D'],
    awards: 'AGI National Student Brand Award',
    featured: true,
    visualTheme: {
      accentColor: '#06B6D4',
      secondaryColor: '#0F172A',
      badge: 'Brand Identity',
      motif: 'branding-pack',
    },
  },
  {
    id: 'p3',
    title: 'Folklore Contemporary Vector Deck',
    studentName: 'Esi Boateng',
    studentClass: 'HND Graphic Design',
    department: 'Graphic Design',
    category: 'Illustration',
    year: 2025,
    description: 'Series of 24 digital vector illustrations celebrating Akan folklore.',
    conceptNotes: 'Ananse legends recontextualized.',
    materials: ['Digital vector vectors', 'Giclée prints'],
    toolsUsed: ['Procreate', 'Adobe Illustrator'],
    featured: false,
    visualTheme: {
      accentColor: '#4F46E5',
      secondaryColor: '#1E1B4B',
      badge: 'Digital Illustration',
      motif: 'typography-grid',
    },
  },
];

test('parseHashToPage maps hash to valid PageId', () => {
  assert.equal(parseHashToPage('#/fashion'), 'fashion');
  assert.equal(parseHashToPage('#fashion'), 'fashion');
  assert.equal(parseHashToPage('#/graphic'), 'graphic');
  assert.equal(parseHashToPage('#/admissions'), 'admissions');
  assert.equal(parseHashToPage('#/unknown-page'), 'home');
  assert.equal(parseHashToPage(''), 'home');
});

test('filterPortfolio filters by category and year', () => {
  const runwayOnly = filterPortfolio(mockItems, 'Fashion Runways', '', 'all');
  assert.equal(runwayOnly.length, 1);
  assert.equal(runwayOnly[0].id, 'p1');

  const year2025Only = filterPortfolio(mockItems, 'All', '', '2025');
  assert.equal(year2025Only.length, 1);
  assert.equal(year2025Only[0].id, 'p3');

  const year2026Only = filterPortfolio(mockItems, 'All', '', '2026');
  assert.equal(year2026Only.length, 2);
});

test('validateContactForm checks required fields', () => {
  const invalid = validateContactForm({
    fullName: '',
    email: 'invalid',
    subject: '',
    department: 'fashion',
    message: 'short',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.subject);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    fullName: 'Dr. Kwame Nkrumah',
    email: 'kwame@ktu.edu.gh',
    subject: 'Studio Tour Inquiry',
    department: 'Fashion Design & Technology',
    message: 'We would love to schedule a visit for prospective design high school students.',
  });
  assert.equal(valid.isValid, true);
});

test('validateApplicationForm accepts complete valid submission', () => {
  const validResult = validateApplicationForm({
    fullName: 'Kofi Mensah Addo',
    email: 'kofi.addo@example.com',
    phone: '+233 24 555 7890',
    dateOfBirth: '2004-05-12',
    nationality: 'Ghanaian',
    programme: 'BTech in Fashion Design & Textiles Technology',
    entryLevel: 'Direct Level 100 (WASSCE / SSSCE)',
    wassceAggregate: '10',
    highSchool: 'Pope John Senior High School & Minor Seminary',
    portfolioUrl: 'https://behance.net/kofiaddo',
    statementOfPurpose: 'I have developed a keen eye for pattern making and wish to master CAD grading at KTU.',
  });

  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('formatEventDate outputs formatted date components', () => {
  const formatted = formatEventDate('2026-11-28');
  assert.equal(formatted.day, '28');
  assert.equal(formatted.month, 'Nov');
  assert.equal(formatted.year, '2026');
  assert.equal(formatted.fullDate, 'November 28, 2026');
});
