import { StaticImageData } from 'next/image';

export interface Article {
  id: number;
  slug: string;
  image: string | StaticImageData;
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
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1920&q=80",
        tag: "Scholarship",
        title: "China Government Scholarship 2027: Complete Application Guide",
        desc: "Your step-by-step guide to securing the fully funded CSC Scholarship in China for Bachelor's, Master's, and PhD programs.",
        date: "May 20, 2027",
        readTime: "12 Min Read",
        author: {
            name: "John Doe",
            role: "Education Consultant",
            avatar: "/path/to/avatar.jpg"
        },
        tableOfContents: [
            { id: "introduction", label: "Introduction" },
            { id: "what-is-csc", label: "What is the CSC Scholarship?" },
            { id: "types", label: "Types of CSC Scholarships" },
            { id: "eligibility", label: "Eligibility Criteria" },
            { id: "benefits", label: "Scholarship Benefits" },
            { id: "steps", label: "How to Apply (Step-by-Step)" },
            { id: "timeline", label: "Application Timeline" },
            { id: "faq", label: "FAQs" },
        ],
        content: [
            `
            <section id="introduction">
                <h2 class="text-3xl font-bold font-display mb-4">Introduction</h2>
                <p>The China Government Scholarship (CSC Scholarship) is a fully funded program sponsored by the Chinese Ministry of Education to attract outstanding international students to study in China. It covers tuition fees, accommodation, monthly stipend, and medical insurance, allowing you to focus on your education and future goals.</p>
            </section>
            `,
            `
            <section id="what-is-csc">
                <h2 class="text-3xl font-bold font-display mb-4 mt-8">What Is the China Government (CSC) Scholarship?</h2>
                <p>The China Government Scholarship is a funding program created by the Chinese Ministry of Education and managed by the China Scholarship Council (CSC). Under this scheme, selected international students receive comprehensive financial support for the entire duration of their degree, provided they maintain the required academic and disciplinary standards.</p>
            </section>
            `,
            `
            <section id="types">
                <h2 class="text-3xl font-bold font-display mb-4 mt-8">Main Types of China Government Scholarships</h2>
                <p>There are three main ways to apply for the CSC scholarship, commonly referred to as 'types' or 'categories'. Understanding them is key to a successful application.</p>
                <ul class="list-disc list-inside space-y-2 mt-4">
                  <li><strong>Type A: Bilateral Program:</strong> Applied through the Chinese embassy in your home country.</li>
                  <li><strong>Type B: University Program:</strong> Applied directly to a Chinese university that has CSC quotas.</li>
                  <li><strong>Type C: Other Programs:</strong> Special scholarship programs through other organizations.</li>
                </ul>
            </section>
            `,
            `
            <section id="eligibility">
                <h2 class="text-3xl font-bold font-display mb-4 mt-8">Who Can Apply? Eligibility Criteria</h2>
                <p>While specific requirements can vary slightly, the general eligibility criteria for the CSC Scholarship are as follows:</p>
                <ul class="list-disc list-inside space-y-2 mt-4">
                    <li>Must be a citizen of a country other than the People's Republic of China, and be in good health.</li>
                    <li>Age and education requirements:</li>
                    <ul class="list-disc list-inside ml-6 space-y-2 mt-2">
                        <li>For undergraduate programs: must have a high school diploma and be under the age of 25.</li>
                        <li>For master’s programs: must have a bachelor’s degree and be under the age of 35.</li>
                        <li>For doctoral programs: must have a master’s degree and be under the age of 40.</li>
                    </ul>
                    <li>Must meet the language requirements of the chosen program (either Chinese or English).</li>
                </ul>
            </section>
            `
        ],
    },
    {
        id: 16,
        slug: "schwarzman-scholars-program-guide",
        image: "/assets/blog/schwarzman.png",
        tag: "Scholarship",
        title: "Inside the Schwarzman Scholars Program: An Elite Opportunity",
        desc: "An in-depth look at the prestigious Schwarzman Scholars master's program at Tsinghua University in Beijing.",
        date: "May 15, 2027",
        readTime: "9 Min Read",
        author: {
            name: "Jane Smith",
            role: "Admissions Expert",
            avatar: "/path/to/jane_avatar.jpg"
        },
        tableOfContents: [],
        content: [
            `<p>The Schwarzman Scholars program is designed to prepare the next generation of global leaders...</p>`
        ],
    },
    {
        id: 17,
        slug: "study-in-shanghai-scholarships",
        image: "/assets/blog/shanghai.png",
        tag: "Scholarship",
        title: "Top 5 Scholarships to Study in Shanghai",
        desc: "Discover the best scholarship opportunities available for international students in the vibrant city of Shanghai.",
        date: "May 10, 2027",
        readTime: "7 Min Read",
        author: {
            name: "Li Wei",
            role: "Student Advisor",
            avatar: "/path/to/li_avatar.jpg"
        },
        tableOfContents: [],
        content: [
            `<p>Shanghai offers a multitude of scholarships for ambitious international students...</p>`
        ],
    },
    {
        id: 18,
        slug: "beijing-normal-university-overview",
        image: "/assets/blog/beijing .png",
        tag: "University",
        title: "A Guide to Beijing Normal University (BNU)",
        desc: "Explore one of China's leading institutions for education and humanities.",
        date: "April 28, 2027",
        readTime: "6 Min Read",
        author: {
            name: "John Doe",
            role: "Education Consultant",
            avatar: "/path/to/avatar.jpg"
        },
        tableOfContents: [],
        content: [
            `<p>Beijing Normal University is a top-tier public research university located in the heart of China's capital...</p>`
        ],
    }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string, tag: string): Article[] {
  return articles.filter(article => article.tag === tag && article.slug !== currentSlug).slice(0, 3);
23}
