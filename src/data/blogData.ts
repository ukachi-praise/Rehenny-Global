export type Category = 'Scholarships' | 'Visa Updates' | 'University Admissions' | 'Immigration News' | 'Student Success Stories' | 'Study Tips';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML or Markdown string for real app, just long text for mock
  coverImage: string;
  category: Category;
  readTime: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
  country: string;
  programType: string;
  scholarshipType?: string;
  intake: string;
  featured?: boolean;
  body?: any; // Rich text body array from Sanity
  officialLink?: string; // Link to apply
}

export interface ScholarshipHighlight {
  id: string;
  country: string;
  code?: string;
  flag: string; // Emoji fallback
  amount: string;
  university: string;
  type: string;
  deadline: string; // ISO date string
}

export interface UniversityUpdate {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
}

export const trendingTags = [
  '#Canada',
  '#Scholarships',
  '#UKAdmissions',
  '#VisaUpdates',
  '#ChinaScholarships',
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Latest China Government Scholarship 2026: Complete Application Guide',
    slug: 'china-government-scholarship-2026',
    excerpt: 'Everything you need to know about the prestigious fully-funded Chinese Government Scholarship (CSC) for international students.',
    content: `<p>The Chinese Government Scholarship (CSC) is one of the most sought-after opportunities for international students...</p>`,
    coverImage: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'Scholarships',
    readTime: '8 min read',
    date: 'May 20, 2026',
    author: {
      name: 'Rhinny Global Experts',
      avatar: 'https://ui-avatars.com/api/?name=Rhinny+Global&background=D4AF37&color=fff',
    },
    tags: ['#ChinaScholarships', '#FullyFunded', '#CSC'],
    country: 'China',
    programType: 'Masters',
    scholarshipType: 'Fully Funded',
    intake: 'Fall',
    featured: true,
  },
  {
    id: '2',
    title: 'Study in Canada: A Comprehensive Guide for International Students',
    slug: 'study-in-canada-guide',
    excerpt: 'From choosing the right province to navigating the study permit application process, here is your ultimate guide to studying in Canada.',
    content: '<p>Canada remains a top destination for international students seeking world-class education...</p>',
    coverImage: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'University Admissions',
    readTime: '12 min read',
    date: 'May 18, 2026',
    author: {
      name: 'Rhinny Global Experts',
      avatar: 'https://ui-avatars.com/api/?name=Rhinny+Global&background=D4AF37&color=fff',
    },
    tags: ['#Canada', '#Admissions', '#StudyAbroad'],
    country: 'Canada',
    programType: 'Undergraduate',
    intake: 'Fall',
  },
  {
    id: '3',
    title: 'UK Student Visa Updates 2026: What You Need to Know',
    slug: 'uk-visa-updates',
    excerpt: 'Recent changes to the UK student visa route have introduced new requirements for financial proof and dependent visas.',
    content: '<p>The Home Office has recently announced several updates to the Student Visa route...</p>',
    coverImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Visa Updates',
    readTime: '5 min read',
    date: 'May 15, 2026',
    author: {
      name: 'Immigration Team',
      avatar: 'https://ui-avatars.com/api/?name=Immigration+Team&background=1E3A8A&color=fff',
    },
    tags: ['#UKVisas', '#Immigration', '#UKAdmissions'],
    country: 'UK',
    programType: 'Masters',
    intake: 'Spring',
  },
  {
    id: '4',
    title: 'How I Secured a Fully Funded PhD in the USA',
    slug: 'student-success-phd-usa',
    excerpt: 'Read about Sarah\'s inspiring journey from Nigeria to a fully funded PhD program at MIT.',
    content: '<p>Getting accepted into a top-tier PhD program in the US is no small feat...</p>',
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Student Success Stories',
    readTime: '6 min read',
    date: 'May 10, 2026',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=071320&color=fff',
    },
    tags: ['#USA', '#PhD', '#SuccessStory'],
    country: 'USA',
    programType: 'PhD',
    scholarshipType: 'Fully Funded',
    intake: 'Fall',
  },
  {
    id: '5',
    title: 'Top 5 Merit-Based Scholarships in Australia for 2027 Intake',
    slug: 'australia-merit-scholarships-2027',
    excerpt: 'Discover the most prestigious merit-based scholarships offered by Group of Eight universities in Australia.',
    content: '<p>Australia offers numerous opportunities for high-achieving international students...</p>',
    coverImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Scholarships',
    readTime: '7 min read',
    date: 'May 05, 2026',
    author: {
      name: 'Scholarship Team',
      avatar: 'https://ui-avatars.com/api/?name=Scholarship+Team&background=D4AF37&color=fff',
    },
    tags: ['#Australia', '#Scholarships', '#MeritBased'],
    country: 'Australia',
    programType: 'Undergraduate',
    scholarshipType: 'Merit Based',
    intake: 'Spring',
  },
  {
    id: '6',
    title: 'Mastering the IELTS: Tips for a Band 8 Score',
    slug: 'ielts-band-8-tips',
    excerpt: 'Proven strategies to improve your English proficiency score and meet competitive university requirements.',
    content: '<p>Achieving a high score on the IELTS is crucial for many university applications...</p>',
    coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Study Tips',
    readTime: '9 min read',
    date: 'May 01, 2026',
    author: {
      name: 'Rhinny Global Experts',
      avatar: 'https://ui-avatars.com/api/?name=Rhinny+Global&background=D4AF37&color=fff',
    },
    tags: ['#IELTS', '#StudyTips', '#TestPrep'],
    country: 'Any',
    programType: 'Any',
    intake: 'Any',
  }
];

export const scholarshipHighlights: ScholarshipHighlight[] = [
  {
    id: '1',
    country: 'Canada',
    code: 'ca',
    flag: '🇨🇦',
    amount: '$50,000/yr',
    university: 'University of Toronto',
    type: 'Fully Funded',
    deadline: '2026-11-01T23:59:59',
  },
  {
    id: '2',
    country: 'UK',
    code: 'gb',
    flag: '🇬🇧',
    amount: 'Full Tuition',
    university: 'Oxford University',
    type: 'Merit Based',
    deadline: '2026-09-15T23:59:59',
  },
  {
    id: '3',
    country: 'China',
    code: 'cn',
    flag: '🇨🇳',
    amount: 'Tuition + Stipend',
    university: 'Tsinghua University',
    type: 'Fully Funded',
    deadline: '2026-12-15T23:59:59',
  },
  {
    id: '4',
    country: 'Australia',
    code: 'au',
    flag: '🇦🇺',
    amount: '$20,000/yr',
    university: 'University of Melbourne',
    type: 'Partial',
    deadline: '2026-10-31T23:59:59',
  }
];

export const latestUpdates: UniversityUpdate[] = [
  {
    id: '1',
    title: 'New IELTS Requirements for UK Masters',
    category: 'Admissions',
    date: '2 hours ago',
    description: 'Several Russell Group universities have updated their minimum IELTS score requirements for Fall 2027.',
  },
  {
    id: '2',
    title: 'Canada Fast-Track Study Permit Processing',
    category: 'Visa Updates',
    date: '1 day ago',
    description: 'IRCC announces a new streamlined processing route for students applying to DLI institutions.',
  },
  {
    id: '3',
    title: 'USA Spring 2027 Application Deadlines Extended',
    category: 'Admissions',
    date: '3 days ago',
    description: 'Top tech universities have extended their MS Computer Science deadlines by two weeks.',
  },
  {
    id: '4',
    title: 'New €10,000 Scholarship Opening for EU Students',
    category: 'Scholarships',
    date: '1 week ago',
    description: 'The German DAAD program has launched a new funding tier for international STEM students.',
  }
];
