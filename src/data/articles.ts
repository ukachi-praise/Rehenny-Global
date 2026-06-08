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
        title: "China Government Scholarship 2027: Complete Application Guide",
        image: "/blog/china-scholarship.jpg",
        date: "2026-06-01",
        tag: 'SCHOLARSHIPS',
        desc: "Studying in China on a fully funded scholarship is one of the most affordable ways to get an international degree. The China Government Scholarship (also called the CSC Scholarship) covers your tuition, accommodation, monthly living allowance, and medical insurance, making it a top choice for international students who want quality education without huge costs.",
        readTime: '15 min read',
        author: {
            name: 'Ministry of Education, China',
            role: 'Official Source',
            avatar: '/assets/author_avatar.jpg',
        },
        tableOfContents: [
            { id: "what-is-csc", label: "What is the CSC Scholarship?" },
            { id: "types-of-csc", label: "Types of Scholarships" },
            { id: "eligibility", label: "Eligibility Criteria" },
            { id: "what-it-covers", label: "What the Scholarship Covers" },
            { id: "timeline", label: "Application Timeline" },
            { id: "how-to-apply", label: "How to Apply" },
            { id: "strengthen-application", label: "Strengthen Your Application" },
            { id: "common-mistakes", label: "Common Mistakes to Avoid" },
            { id: "how-agency-can-help", label: "How a Study Abroad Agency Can Help" }
        ],
        content: [
            "Studying in China on a fully funded scholarship is one of the most affordable ways to get an international degree. The China Government Scholarship (also called the CSC Scholarship) covers your tuition, accommodation, monthly living allowance, and medical insurance, making it a top choice for international students who want quality education without huge costs.",
            "This guide explains, in simple language, how the China Government Scholarship works for the 2027 intake, who is eligible, what documents you need, and the exact steps to apply successfully.",
            '<h2 id="what-is-csc">What Is the China Government (CSC) Scholarship?</h2>',
            "The China Government Scholarship is a funding program created by the Chinese Ministry of Education to attract international students to Chinese universities. It is managed by the China Scholarship Council (CSC).",
            "Under this scheme, selected students receive:",
            "<ul><li>Tuition fee waiver</li><li>Free or heavily subsidized on‑campus accommodation</li><li>Monthly stipend (living allowance)</li><li>Basic medical insurance</li></ul>",
            "In many cases, this support continues for the entire duration of your degree (bachelor’s, master’s, or PhD), as long as you maintain the required academic and disciplinary standards.",
            '<h2 id="types-of-csc">Main Types of China Government Scholarships</h2>',
            "There isn’t just one single “CSC scholarship”. There are several channels through which you can apply:",
            "<h3>Bilateral Program (Type A)</h3>",
            "This is handled through the Chinese embassy or consulate in your country or through your home government.",
            "<strong>Best for:</strong> Students who want to be nominated at the national level.",
            "You usually apply via the embassy AND on the CSC online system.",
            "<h3>Chinese University Program (Type B)</h3>",
            "This is handled directly by specific Chinese universities that have CSC quotas.",
            "<strong>Best for:</strong> Students who already know which university they want.",
            "You apply through the CSC online system and sometimes also the university’s own portal.",
            "<h3>Other Special Programs (Type C and regional “windows”)</h3>",
            "These include specific programs for certain regions (e.g., EU Window) or joint training programs.",
            "<strong>Best for:</strong> Students who fit a specific regional or subject‑based scheme.",
            "When you apply online, you must choose the correct “Type” and enter the right “Agency Number” for the embassy or university you are applying through. Using the wrong type or number is a very common reason for disqualification.",
            '<h2 id="eligibility">Who Can Apply? Eligibility Criteria</h2>',
            "Exact details may vary slightly by country and year, but most CSC calls follow similar basic rules. Always check your local Chinese embassy or the official CSC website for the latest 2027 notice before you apply.",
            "Typical eligibility conditions include:",
            "<h3>Citizenship</h3>",
            "You must be a citizen of a country other than the People’s Republic of China.",
            "<h3>Health</h3>",
            "You must be in good physical and mental health and able to pass a medical examination using the official “Foreigner Physical Examination Form”.",
            "<h3>Academic background and age (typical pattern)</h3>",
            "<ul><li>For undergraduate (bachelor’s) programs: High school diploma (completed secondary education) and usually under 25 years old</li><li>For master’s programs: Bachelor’s degree and usually under 35 years old</li><li>For PhD programs: Master’s degree and usually under 40 years old</li></ul>",
            "<h3>Language requirements</h3>",
            "<ul><li>For Chinese‑taught programs, universities normally require a certain HSK level (for example, HSK 3–4 for undergraduate and higher for graduate programs).</li><li>For English‑taught programs, you may need IELTS, TOEFL or other English‑language proof, especially if your previous degree was not taught in English.</li></ul>",
            "<h3>Country‑specific rules</h3>",
            "Some 2026/2027 calls introduce extra requirements like an academic aptitude test (CSCA) for undergraduate applicants from certain regions, so it is important to read your own country’s announcement carefully.",
            '<h2 id="what-it-covers">What Does the Scholarship Cover?</h2>',
            "The China Government Scholarship is considered fully funded for most students because it usually covers:",
            "<ul><li>Tuition fees: Paid directly to the university.</li><li>Accommodation: Free on‑campus dormitory or a housing subsidy if you live off‑campus.</li><li>Monthly stipend: The exact amount depends on your study level and may be adjusted over time, but typically:<ul><li>Bachelor’s: lower monthly allowance</li><li>Master’s: higher than bachelor’s</li><li>PhD: highest allowance</li></ul></li><li>Medical insurance: Basic health insurance for the duration of your studies.</li></ul>",
            "Because tuition and housing are covered, this stipend is often enough for a modest student lifestyle in most Chinese cities, especially if you budget carefully.",
            '<h2 id="timeline">Application Timeline for 2027 Intake</h2>',
            "The application period for the China Government Scholarship usually opens many months before the academic year begins. Although the exact dates for 2027 may vary by country and university, a common pattern is:",
            "<ul><li><strong>November–January (previous year):</strong> Chinese embassies or ministries in your country publish their “Chinese Government Scholarship 2026/2027” or “2027” call. Universities start updating their scholarship information on their websites.</li><li><strong>December–February:</strong> Main time to complete your online application on the CSC system. Many embassy channels and special programs set deadlines in January or February. Missing these is fatal.</li><li><strong>March–April:</strong> Some university‑direct (Type B) deadlines fall in this period. Shortlisting and document review.</li><li><strong>May–July:</strong> Admission and scholarship results are released. Universities issue admission notices and visa documents to successful applicants.</li></ul>",
            "Because deadlines differ by country and university, you should:",
            "<ul><li>Start preparing documents at least 3–4 months before the earliest expected deadline.</li><li>Check both your Chinese embassy/consulate website and your target university website for the 2027 calls.</li></ul>",
            '<h2 id="how-to-apply">Step‑by‑Step: How to Apply for the China Government Scholarship 2027</h2>',
            "<h3>Step 1: Decide Your Channel and Program</h3>",
            "First, choose: Are you applying via your embassy (Type A) or directly to a university (Type B)? Which degree level (bachelor’s, master’s, PhD) and major do you want? At this stage, research universities in China that offer your desired program, check whether they accept CSC students, and confirm the language of instruction.",
            "<h3>Step 2: Check Official 2027 Announcements</h3>",
            "Visit: The Chinese embassy/consulate website in your country, the official Study in China / CSC / Campus China website, and the admissions page of your target universities. Download and read the official 2026/2027 or 2027 China Government Scholarship notice for your country or program. Note: Deadline dates, specific eligibility conditions, and whether a pre‑admission letter is needed.",
            "<h3>Step 3: Prepare Your Application Documents</h3>",
            "Most CSC applications use a similar core document list. You should prepare: Completed China Government Scholarship Application Form, valid passport, highest diploma and academic transcripts (notarized), Study Plan or Research Proposal, two recommendation letters, language proficiency proof, and a Foreigner Physical Examination Form. Additional documents like a pre-admission letter or police clearance certificate might be required.",
            "<h3>Step 4: Fill the CSC Online Application Form</h3>",
            "Visit the official CSC online application platform. Create an account, select the correct Program Category (A, B or C), and enter the Agency Number. Fill in your personal details, upload all required documents, and submit. Download and print the completed form.",
            "<h3>Step 5: Submit to the Embassy or University (If Required)</h3>",
            "Depending on your channel, you may need to submit printed copies of your application to the Chinese embassy or your country’s designated ministry. Some universities also require you to apply on their own admissions portal. Follow the instructions carefully.",
            "<h3>Step 6: Wait for Evaluation and Results</h3>",
            "After submission, your documents are reviewed, and shortlisted candidates are forwarded to the CSC in Beijing for the final decision. Successful applicants receive an Admission Letter and a Visa Application for Study in China (JW201/JW202 form).",
            '<h2 id="strengthen-application">How to Strengthen Your Application</h2>',
            "<ul><li>Choose realistic and relevant majors.</li><li>Write a clear and specific Study Plan.</li><li>Secure a pre‑admission letter (if possible).</li><li>Show language readiness.</li><li>Submit early and check everything.</li></ul>",
            '<h2 id="common-mistakes">Common Mistakes to Avoid</h2>',
            "<ul><li>Using the wrong Program Category or Agency Number.</li><li>Uploading blurred or incomplete documents.</li><li>Submitting a generic study plan.</li><li>Ignoring country-specific rules.</li><li>Waiting until the last minute.</li></ul>",
            '<h2 id="how-agency-can-help">How a Study Abroad Agency Can Help You</h2>',
            "If this process feels overwhelming, a good study-abroad agency can assess your academic background, guide you through the application, review your documents, and help you track deadlines.",
            "<em>Need help with your China Government Scholarship 2027 application? Our team can guide you from university selection to document review. Click here to book a free consultation.</em>"
        ],
        featured: true,
    }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug);
};
