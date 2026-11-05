export type PageId =
  | 'home'
  | 'fashion'
  | 'graphic'
  | 'portfolios'
  | 'events'
  | 'faculty'
  | 'admissions'
  | 'contact';

export type PortfolioCategory =
  | 'All'
  | 'Fashion Runways'
  | 'Brand Identities'
  | 'Illustration'
  | 'Textile Prints'
  | 'UI/UX & Interaction';

export interface CourseModule {
  code: string;
  title: string;
  credits: number;
  semester: string;
  level: string;
  description: string;
}

export interface DegreeProgramme {
  id: string;
  title: string;
  code: string;
  level: string;
  duration: string;
  entryRequirements: string[];
  careerProspects: string[];
  overview: string;
  curriculum: CourseModule[];
}

export interface StudioFacility {
  id: string;
  name: string;
  leadTechnician: string;
  capacity: string;
  keyEquipment: string[];
  description: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  studentName: string;
  studentClass: string;
  department: 'Fashion Design & Technology' | 'Graphic Design';
  category: PortfolioCategory;
  year: number;
  description: string;
  conceptNotes: string;
  materials: string[];
  toolsUsed: string[];
  awards?: string;
  featured: boolean;
  image?: string;
  visualTheme: {
    accentColor: string;
    secondaryColor: string;
    badge: string;
    motif: 'haute-couture' | 'branding-pack' | 'typography-grid' | 'textile-weave' | 'ui-design' | 'sustainable-denim';
  };
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  department: 'Joint Faculty' | 'Fashion Design' | 'Graphic Design';
  description: string;
  schedule: { time: string; activity: string }[];
  featuredGuests: string[];
  rsvpCount: number;
  isUpcoming: boolean;
  ticketPrice: string;
  image?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  department: 'Fashion Design & Technology' | 'Graphic Design' | 'Faculty Leadership';
  qualification: string;
  bio: string;
  researchFocus: string[];
  coursesTaught: string[];
  email: string;
  office: string;
  officeHours: string;
  avatarUrl?: string;
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  nationality: string;
  programme: string;
  entryLevel: string;
  wassceAggregate: string;
  highSchool: string;
  portfolioUrl: string;
  statementOfPurpose: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  department: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}
