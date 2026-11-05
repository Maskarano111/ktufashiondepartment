import { ApplicationFormData, ContactFormData, PageId, PortfolioCategory, PortfolioItem, ValidationResult } from '../types';

/**
 * Parses URL hash into a recognized PageId, falling back to 'home'.
 */
export function parseHashToPage(hash: string): PageId {
  const clean = hash.replace(/^#\/?/, '').trim().toLowerCase();
  const validPages: PageId[] = [
    'home',
    'fashion',
    'graphic',
    'portfolios',
    'events',
    'faculty',
    'admissions',
    'contact',
  ];
  return validPages.includes(clean as PageId) ? (clean as PageId) : 'home';
}

/**
 * Filters portfolio items based on category, search query, and graduation year.
 */
export function filterPortfolio(
  items: PortfolioItem[],
  category: PortfolioCategory,
  searchQuery: string,
  yearFilter: string = 'all'
): PortfolioItem[] {
  const query = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    // Category match
    const matchesCategory = category === 'All' || item.category === category;
    if (!matchesCategory) return false;

    // Year match
    if (yearFilter !== 'all' && String(item.year) !== yearFilter) {
      return false;
    }

    if (!query) return true;

    return (
      item.title.toLowerCase().includes(query) ||
      item.studentName.toLowerCase().includes(query) ||
      item.department.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.toolsUsed.some((t) => t.toLowerCase().includes(query)) ||
      item.materials.some((m) => m.toLowerCase().includes(query)) ||
      (item.awards && item.awards.toLowerCase().includes(query))
    );
  });
}

/**
 * Validates official prospective student admissions form.
 */
export function validateApplicationForm(data: ApplicationFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 3) {
    errors.fullName = 'Full legal name must be at least 3 characters.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  const phoneRegex = /^[+0-9\s-]{9,16}$/;
  if (!data.phone || !phoneRegex.test(data.phone.trim())) {
    errors.phone = 'Please provide a valid phone number with country code.';
  }

  if (!data.programme) {
    errors.programme = 'Please select an intended programme of study.';
  }

  if (!data.entryLevel) {
    errors.entryLevel = 'Please select your entry qualification category.';
  }

  if (!data.statementOfPurpose || data.statementOfPurpose.trim().length < 30) {
    errors.statementOfPurpose = 'Statement of purpose must be at least 30 characters.';
  }

  if (data.portfolioUrl && data.portfolioUrl.trim().length > 0) {
    try {
      const url = new URL(data.portfolioUrl.trim());
      if (!['http:', 'https:'].includes(url.protocol)) {
        errors.portfolioUrl = 'Portfolio link must start with http:// or https://';
      }
    } catch {
      errors.portfolioUrl = 'Please provide a valid URL (e.g. https://behance.net/username).';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validates departmental contact form.
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.subject || data.subject.trim().length < 3) {
    errors.subject = 'Please enter a subject.';
  }

  if (!data.message || data.message.trim().length < 15) {
    errors.message = 'Please provide at least 15 characters in your message.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Formats date string into readable calendar format.
 */
export function formatEventDate(dateString: string): { month: string; day: string; year: string; fullDate: string } {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return { month: 'TBA', day: '--', year: '2026', fullDate: 'Date Announced Soon' };
  }
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const fullMonths = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return {
    month: months[date.getMonth()],
    day: String(date.getDate()).padStart(2, '0'),
    year: String(date.getFullYear()),
    fullDate: `${fullMonths[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`,
  };
}

/**
 * Calculates remaining days to an event.
 */
export function calculateDaysRemaining(targetDate: string, currentDate: Date = new Date()): number {
  const target = new Date(targetDate);
  const diffTime = target.getTime() - currentDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

/**
 * Calculates aggregate stats for display.
 */
export function calculateDepartmentStats(items: PortfolioItem[]) {
  const fashionCount = items.filter((i) => i.department === 'Fashion Design & Technology').length;
  const graphicCount = items.filter((i) => i.department === 'Graphic Design').length;
  const awardedWorks = items.filter((i) => Boolean(i.awards)).length;

  return {
    totalWorks: items.length,
    fashionWorks: fashionCount,
    graphicWorks: graphicCount,
    awardedWorks,
  };
}
