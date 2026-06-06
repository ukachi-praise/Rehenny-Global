export interface Article {
  id: number;
  slug: string;
  image: string;
  tag: string;
  title: string;
  desc: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tableOfContents: { id: string; label: string }[];
  content: string[];
  featured?: boolean;
}

export const articles: Article[] = [
    {
        id: 15,
        slug: "china-government-scholarship-2027",
        title: "China Government Scholarship 2027",
        image: "/blog/china-scholarship.jpg",
        date: "2026-06-01",
        tag: 'SCHOLARSHIPS',
        desc: "The Chinese Government Scholarship is a prestigious scholarship established by the Ministry of Education of China to support Chinese universities in attracting outstanding international students for graduate studies in China.",
        readTime: '8 min read',
        author: {
            name: 'Ministry of Education, China',
            role: 'Official Source',
            avatar: '/assets/author_avatar.jpg',
        },
        tableOfContents: [{id: 'intro', label: 'Introduction'}],
        content: ['Content for China scholarship article...'],
        featured: true,
    },
    {
        id: 1,
        slug: 'top-7-reasons-to-study-in-canada-in-2024',
        image: '/assets/article_canada.jpg',
        tag: 'DESTINATIONS',
        title: 'Top 7 Reasons to Study in Canada in 2024',
        desc: "From world-class education to work opportunities, here's why Canada continues to be a top choice for international students.",
        date: 'May 20, 2024',
        readTime: '5 min read',
        author: {
            name: 'John Doe',
            role: 'Education Consultant',
            avatar: '/assets/author_avatar.jpg',
        },
        tableOfContents: [
            { id: 'introduction', label: 'Introduction' },
            { id: 'quality-education', label: '1. Quality Education' },
            { id: 'work-opportunities', label: '2. Work Opportunities' },
            { id: 'multicultural-environment', label: '3. Multicultural Environment' },
            { id: 'safe-and-peaceful', label: '4. Safe and Peaceful' },
            { id: 'beautiful-scenery', label: '5. Beautiful Scenery' },
            { id: 'pathway-to-pr', label: '6. Pathway to Permanent Residency' },
            { id: 'affordable-tuition', label: '7. Affordable Tuition Fees' },
            { id: 'conclusion', label: 'Conclusion' },
        ],
        content: [
            "Canada has consistently been ranked as one of the best countries in the world for quality of life. It's no surprise that it has become a magnet for international students seeking high-quality education and a vibrant cultural experience. If you're considering studying abroad, here are the top 7 reasons why Canada should be at the top of your list in 2024.",
            '<h2 id="quality-education">1. Quality Education</h2>',
            "Canadian universities are known for their high academic standards and rigorous quality controls. A Canadian degree is globally recognized and respected, opening doors to a multitude of career opportunities worldwide. The government and private sector both support research, making Canada a hub of innovation.",
            '<h2 id="work-opportunities">2. Work Opportunities</h2>',
            "Canada offers ample opportunities for students to work while they study and after graduation. Most international students are allowed to work up to 20 hours per week during semesters and full-time during breaks. The Post-Graduation Work Permit (PGWP) allows graduates to work in Canada for up to three years, gaining valuable Canadian work experience.",
            '<h2 id="multicultural-environment">3. Multicultural Environment</h2>',
            "Canada is one of the most diverse countries in the world. You will meet people from all over the globe, experience different cultures, and broaden your perspective. This welcoming environment makes it easier for international students to adapt and feel at home.",
            '<h2 id="safe-and-peaceful">4. Safe and Peaceful</h2>',
            "Canada is considered one of the safest countries in the world with low crime rates. The political climate is stable, and the country is known for its social tolerance and peaceful society, providing a secure environment for students.",
            '<h2 id="beautiful-scenery">5. Beautiful Scenery</h2>',
            "From the Rocky Mountains to Niagara Falls, Canada's natural beauty is breathtaking. If you're an outdoor enthusiast, you'll find no shortage of activities, including hiking, skiing, and wildlife watching. Each season brings its own charm and set of activities to enjoy.",
            '<h2 id="pathway-to-pr">6. Pathway to Permanent Residency</h2>',
            "Canada's immigration policies are favorable for international students. Many graduates find pathways to permanent residency through programs like the Canadian Experience Class, making it possible to build a long-term future in the country after completing their studies.",
            '<h2 id="affordable-tuition">7. Affordable Tuition Fees</h2>',
            "While not the cheapest option, tuition fees in Canada are generally more affordable compared to other major study destinations like the US and the UK. The cost of living is also reasonable, and there are many scholarship opportunities available for international students.",
            '<h2 id="conclusion">Conclusion</h2>',
            "With its excellent education system, diverse culture, and high quality of life, Canada offers an unparalleled experience for international students. It's a country where you can not only achieve your academic goals but also grow personally and professionally. If you're ready to embark on this exciting journey, Canada is waiting for you.",
        ],
        featured: false,
    },
    {
        id: 2,
        slug: 'how-to-write-a-strong-sop',
        image: '/assets/article_sop.jpg',
        tag: 'STUDY TIPS',
        title: 'How to Write a Strong SOP (Statement of Purpose)',
        desc: 'A compelling SOP can make or break your application. Learn the key tips to make yours stand out.',
        date: 'May 15, 2024',
        readTime: '6 min read',
        author: {
            name: 'Jane Smith',
            role: 'Admissions Advisor',
            avatar: '/assets/author_avatar.jpg',
        },
        tableOfContents: [{id: 'intro', label: 'Introduction'}],
        content: ['Content for SOP article...'],
        featured: false,
    },
    {
        id: 3,
        slug: 'uk-student-visa-guide-2024',
        image: '/assets/article_uk_visa.jpg',
        tag: 'DESTINATIONS',
        title: 'UK Student Visa Guide 2024: A Step-by-Step Process',
        desc: 'Navigate the UK student visa process with ease. Check out our latest guide for all the essential steps.',
        date: 'May 10, 2024',
        readTime: '7 min read',
        author: {
            name: 'Emily White',
            role: 'Visa Consultant',
            avatar: '/assets/author_avatar.jpg',
        },
        tableOfContents: [{id: 'intro', label: 'Introduction'}],
        content: ['Content for UK visa article...'],
        featured: false,
    },
    {
        id: 4,
        image: '/assets/article_checklist.jpg',
        slug: 'pre-departure-checklist',
        tag: 'PRE-DEPARTURE',
        title: 'Pre-Departure Checklist: 10 Things You Must Do Before You Fly',
        desc: "Don't leave home without checking these essential items off your list!",
        date: 'May 5, 2024',
        readTime: '4 min read',
        author: {
            name: 'Jane Smith',
            role: 'Admissions Advisor',
            avatar: '/assets/author_avatar.jpg',
        },
        tableOfContents: [{id: 'intro', label: 'Introduction'}],
        content: ['Content for checklist article...'],
        featured: false,
    },
    {
        id: 5,
        image: '/assets/article_germany.jpg',
        slug: 'student-life-in-germany',
        tag: 'STUDENT LIFE',
        title: 'Student Life in Germany: What to Expect',
        desc: "From accommodation to part-time jobs, here's everything you need to know about student life in Germany.",
        date: 'Apr 28, 2024',
        readTime: '6 min read',
        author: {
            name: 'Jane Smith',
            role: 'Admissions Advisor',
            avatar: '/assets/author_avatar.jpg',
        },
        tableOfContents: [{id: 'intro', label: 'Introduction'}],
        content: ['Content for Germany article...'],
        featured: false,
    },
    {
        id: 6,
        image: '/assets/article_courses.jpg',
        slug: 'top-in-demand-courses-abroad',
        tag: 'CAREER GUIDES',
        title: 'Top In-Demand Courses Abroad in 2024',
        desc: 'Explore the most in-demand courses that can shape your future and boost your career.',
        date: 'Apr 20, 2024',
        readTime: '5 min read',
        author: {
            name: 'Jane Smith',
            role: 'Admissions Advisor',
            avatar: '/assets/author_avatar.jpg',
        },
        tableOfContents: [{id: 'intro', label: 'Introduction'}],
        content: ['Content for courses article...'],
        featured: false,
    },
    {
        id: 7,
        image: '/assets/article_scholarships.jpg',
        slug: 'top-scholarships-for-international-students',
        tag: 'SCHOLARSHIPS',
        title: 'Top Scholarships for International Students in 2024',
        desc: "List of fully funded and partial scholarships you shouldn't miss!",
        date: 'Apr 15, 2024',
        readTime: '5 min read',
        author: {
            name: 'Jane Smith',
            role: 'Admissions Advisor',
            avatar: '/assets/author_avatar.jpg',
        },
        tableOfContents: [{id: 'intro', label: 'Introduction'}],
        content: ['Content for scholarships article...'],
        featured: false,
    },
    {
        id: 8,
        image: '/assets/article_post_study.jpg',
        slug: 'what-after-graduation',
        tag: 'POST-STUDY',
        title: 'What After Graduation? Your Options Explained',
        desc: 'Work permits, PR pathways, and career options – plan your next steps smartly.',
        date: 'Apr 10, 2024',
        readTime: '6 min read',
        author: {
            name: 'Jane Smith',
            role: 'Admissions Advisor',
            avatar: '/assets/author_avatar.jpg',
        },
        tableOfContents: [{id: 'intro', label: 'Introduction'}],
        content: ['Content for post study article...'],
        featured: false,
    },
    {
        id: 9,
        image: '/assets/article_budget.jpg',
        slug: 'affordable-study-abroad-destinations',
        tag: 'DESTINATIONS',
        title: 'Affordable Study Abroad Destinations for Budget-Conscious Students',
        desc: "Quality education doesn't have to break the bank. Check out these student-friendly destinations.",
        date: 'Apr 5, 2024',
        readTime: '4 min read',
        author: {
            name: 'Jane Smith',
            role: 'Admissions Advisor',
            avatar: '/assets/author_avatar.jpg',
        },
        tableOfContents: [{id: 'intro', label: 'Introduction'}],
        content: ['Content for budget study article...'],
        featured: false,
    },
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug);
};
