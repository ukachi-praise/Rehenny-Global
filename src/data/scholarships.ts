import { StaticImageData } from 'next/image';

export interface Scholarship {
  id: number;
  slug: string;
  image: string | StaticImageData;
  university: string;
  country: 'Canada' | 'UK';
  title: string;
  description: string;
  amount: string;
  intake: string;
  content: string[];
}

export const scholarships: Scholarship[] = [
  {
    id: 1,
    slug: "nait-cad-50-application-fee-discount-business-administration-fall-2026",
    image: "/assets/scholarship/nait.png",
    university: "Northern Alberta Institute of Technology (NAIT)",
    country: "Canada",
    title: "CAD $50 Application Fee Discount for Business Administration",
    description: "A $50 application fee discount for the Diploma in Business Administration – Supply Chain Management at NAIT for the Fall 2026 intake.",
    amount: "CAD $50 off application fee",
    intake: "Fall (September) 2026",
    content: [
      `
      <section id="about-nait">
        <h2 class="text-3xl font-bold font-display mb-4">ABOUT NAIT</h2>
        <p>The Northern Alberta Institute of Technology (NAIT) is one of Canada\'s largest polytechnic institutions, training over 39,000 students across 120+ programs. Located in Edmonton, Alberta, NAIT is renowned for its hands-on, industry-relevant education that prepares graduates for immediate workforce entry.</p>
        <p class="mt-4">With a strong focus on applied learning, NAIT partners directly with industry leaders to ensure curriculum stays current with market demands. The institution boasts state-of-the-art facilities, experienced faculty with real-world experience, and exceptional graduate employment rates.</p>
      </section>
      `,
      `
      <section id="program-details">
        <h2 class="text-3xl font-bold font-display mb-4 mt-8">PROGRAM: DIPLOMA IN BUSINESS ADMINISTRATION – SUPPLY CHAIN MANAGEMENT</h2>
        <p>This two-year diploma program equips students with comprehensive skills in:</p>
        <ul class="list-disc list-inside space-y-2 mt-4">
            <li>Procurement and purchasing strategies</li>
            <li>Logistics and transportation management</li>
            <li>Inventory control and warehouse operations</li>
            <li>Contract negotiation and vendor management</li>
            <li>Integrated supply chain operations</li>
            <li>Data analytics for supply chain decisions</li>
        </ul>
        <h3 class="text-2xl font-bold font-display mt-6 mb-2">KEY PROGRAM HIGHLIGHTS:</h3>
        <ul class="list-disc list-inside space-y-2">
            <li>Post-Graduation Work Permit (PGWP) eligible</li>
            <li>Strong industry connections in Alberta\'s energy and logistics sectors</li>
            <li>Average class size: ~20 students</li>
            <li>Co-op and work-integrated learning opportunities</li>
            <li>Pathway to further education (degree completion options)</li>
        </ul>
        <h3 class="text-2xl font-bold font-display mt-6 mb-2">CAREER OUTCOMES:</h3>
        <p>Graduates find employment as:</p>
        <ul class="list-disc list-inside space-y-2 mt-2">
            <li>Supply Chain Coordinators</li>
            <li>Logistics Analysts</li>
            <li>Procurement Specialists</li>
            <li>Inventory Managers</li>
            <li>Operations Planners</li>
            <li>Transportation Coordinators</li>
        </ul>
      </section>
      `,
      `
      <section id="admission-requirements">
        <h2 class="text-3xl font-bold font-display mb-4 mt-8">UPDATED ADMISSION REQUIREMENTS (2026)</h2>
        <p class="font-bold text-lg text-amber-400">Grade 10 Mathematics NOW ACCEPTED</p>
        <p>Students who do not have Grade 12 Mathematics may be considered for admission based on Grade 10 Mathematics, subject to meeting all other program requirements.</p>
        <p class="mt-4">This is a significant update that opens doors for more international students who may have completed their secondary education in systems where Grade 12 Math was not available or required.</p>
        <h3 class="text-2xl font-bold font-display mt-6 mb-2">ADDITIONAL REQUIREMENTS:</h3>
        <ul class="list-disc list-inside space-y-2">
            <li>High school diploma or equivalent</li>
            <li>English language proficiency (IELTS 6.0, TOEFL 80, or equivalent)</li>
            <li>All other standard program prerequisites</li>
        </ul>
      </section>
      `,
      `
      <section id="fee-discount">
        <h2 class="text-3xl font-bold font-display mb-4 mt-8">THE $50 APPLICATION FEE DISCOUNT</h2>
        <p>This exclusive discount is available ONLY for:</p>
        <ul class="list-disc list-inside space-y-2 mt-2">
            <li>The Business Administration – Supply Chain Management program</li>
            <li>Fall (September) 2026 intake</li>
            <li>Applicants who RSVP for NAIT Program Previews</li>
        </ul>
        <h3 class="text-2xl font-bold font-display mt-6 mb-2">HOW IT WORKS:</h3>
        <ol class="list-decimal list-inside space-y-2">
            <li>RSVP for NAIT Program Previews online</li>
            <li>Receive a discount code via email</li>
            <li>Apply online at nait.ca using the discount code</li>
            <li>Pay the reduced application fee of CAD $50 (regular fee is $100)</li>
            <li>Submit all required documents</li>
            <li>Receive admission decision within 72 business hours</li>
        </ol>
      </section>
      `,
      `
      <section id="estimated-costs">
        <h2 class="text-3xl font-bold font-display mb-4 mt-8">ESTIMATED COSTS</h2>
        <h3 class="text-2xl font-bold font-display mt-6 mb-2">TUITION & FEES (International Students):</h3>
        <ul class="list-disc list-inside space-y-2 mt-2">
            <li>Tuition rate: CAD $735 per credit</li>
            <li>Estimated Year 1 tuition: CAD $22,050 – $28,665</li>
            <li>Application fee (with discount): CAD $50</li>
            <li>Materials and supplies: ~CAD $1,500 – $2,000 per year</li>
        </ul>
        <h3 class="text-2xl font-bold font-display mt-6 mb-2">LIVING EXPENSES (Edmonton, Alberta):</h3>
        <ul class="list-disc list-inside space-y-2 mt-2">
            <li>Accommodation: CAD $8,000 – $12,000 per year</li>
            <li>Food and groceries: CAD $3,000 – $4,000 per year</li>
            <li>Transportation: CAD $1,000 – $1,500 per year</li>
            <li>Personal expenses: CAD $2,000 – $3,000 per year</li>
            <li>Health insurance: CAD $750 – $1,000 per year</li>
        </ul>
        <p class="font-bold mt-4">TOTAL ESTIMATED COST (Year 1): CAD $37,000 – $50,000</p>
      </section>
      `,
      `
      <section id="why-nait">
        <h2 class="text-3xl font-bold font-display mb-4 mt-8">WHY CHOOSE NAIT?</h2>
        <ul class="list-disc list-inside space-y-2 mt-2">
            <li>Top-ranked polytechnic in Western Canada</li>
            <li>95%+ graduate employment rate within 6 months</li>
            <li>Small class sizes ensure personalized attention</li>
            <li>Industry partnerships provide real-world experience</li>
            <li>Edmonton offers affordable living compared to Toronto/Vancouver</li>
            <li>Alberta\'s strong economy creates abundant job opportunities</li>
            <li>PGWP pathway allows up to 3 years of Canadian work experience</li>
        </ul>
      </section>
      `,
      `
      <section id="how-to-apply">
        <h2 class="text-3xl font-bold font-display mb-4 mt-8">HOW TO APPLY</h2>
        <ol class="list-decimal list-inside space-y-2 mt-2">
            <li>STEP 1: Research the program at nait.ca</li>
            <li>STEP 2: RSVP for NAIT Program Previews to receive discount code</li>
            <li>STEP 3: Gather documents (transcripts, English test, passport)</li>
            <li>STEP 4: Complete online application using discount code</li>
            <li>STEP 5: Pay reduced application fee</li>
            <li>STEP 6: Submit all required documents</li>
            <li>STEP 7: Receive admission decision</li>
            <li>STEP 8: Accept offer and pay tuition deposit</li>
            <li>STEP 9: Apply for Canadian study permit</li>
        </ol>
      </section>
      `,
      `
      <section id="important-dates">
        <h2 class="text-3xl font-bold font-display mb-4 mt-8">IMPORTANT DATES</h2>
        <ul class="list-disc list-inside space-y-2 mt-2">
            <li>Application Opens: Now open for Fall 2026</li>
            <li>Application Deadline: Rolling (apply early for best chance)</li>
            <li>Classes Begin: September 2026</li>
            <li>Program Previews: Check nait.ca for upcoming dates</li>
        </ul>
      </section>
      `
    ]
  },
  {
    id: 2,
    slug: "university-of-liverpool-pgt-scholarship-september-2026",
    image: "/assets/scholarship/pgt.png",
    university: "University of Liverpool (Russell Group)",
    country: "UK",
    title: "£2,000 PGT Scholarship",
    description: "A £2,000 tuition fee reduction for several high-demand postgraduate programmes at the University of Liverpool for the September 2026 intake.",
    amount: "£2,000 tuition fee reduction",
    intake: "September 2026",
    content: [
      `
      <section id="about-liverpool">
          <h2 class="text-3xl font-bold font-display mb-4">ABOUT THE UNIVERSITY OF LIVERPOOL</h2>
          <p>Founded in 1881, the University of Liverpool is a prestigious member of the Russell Group – the UK\'s leading research-intensive universities. Ranked among the top 200 universities worldwide, Liverpool combines world-class research with excellent teaching and strong industry connections.</p>
          <p class="mt-4">The university is home to over 22,000 students from 130 countries, creating a truly global learning environment. Its beautiful campus blends historic Victorian architecture with modern, cutting-edge facilities. Liverpool itself is a vibrant, culturally rich city – birthplace of The Beatles and a UNESCO World Heritage Site.</p>
          <h3 class="text-2xl font-bold font-display mt-6 mb-2">KEY RANKINGS & RECOGNITION:</h3>
          <ul class="list-disc list-inside space-y-2">
              <li>Top 200 globally (QS World University Rankings)</li>
              <li>Russell Group member</li>
              <li>90%+ graduate employment rate</li>
              <li>9 Nobel Laureates among alumni and staff</li>
              <li>£600 million invested in campus facilities since 2000</li>
          </ul>
      </section>
      `,
      `
      <section id="eligible-programmes">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">ELIGIBLE PROGRAMMES</h2>
          <p>The £2,000 PGT Scholarship is available for the following programmes:</p>
          <ul class="list-disc list-inside space-y-2 mt-4">
              <li>MASTER\'S IN MANAGEMENT (MiM)</li>
              <li>MSC INTERNATIONAL BUSINESS</li>
              <li>MSC BUSINESS ANALYTICS AND BIG DATA</li>
              <li>MSC ADVANCED COMPUTER SCIENCE</li>
              <li>MSC ADVANCED DATA SCIENCE AND ARTIFICIAL INTELLIGENCE</li>
          </ul>
      </section>
      `,
      `
      <section id="scholarship-details">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">SCHOLARSHIP DETAILS</h2>
          <p><strong>AMOUNT:</strong> £2,000 tuition fee reduction</p>
          <h3 class="text-2xl font-bold font-display mt-6 mb-2">HOW IT IS AWARDED:</h3>
          <ul class="list-disc list-inside space-y-2">
              <li>Applied directly to your tuition fees</li>
              <li>Deducted from the total amount you owe the university</li>
              <li>Cannot be exchanged for cash</li>
              <li>Applied for the first year of study only</li>
          </ul>
          <h3 class="text-2xl font-bold font-display mt-6 mb-2">COMBINING SCHOLARSHIPS:</h3>
          <p>Exceptional students holding a first-class degree (or international equivalent) may be eligible to combine this award with the Postgraduate Global Advancement Scholarship – Achievement, potentially reducing tuition fees by up to 50%.</p>
      </section>
      `,
      `
      <section id="eligibility-criteria">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">ELIGIBILITY CRITERIA</h2>
          <p>To qualify for the £2,000 PGT Scholarship, you must:</p>
          <ul class="list-disc list-inside space-y-2 mt-4">
              <li>Be a new international student enrolling from September 2026 onwards</li>
              <li>Hold an offer for one of the eligible master\'s programmes listed above</li>
              <li>Study on-campus in Liverpool (online programmes excluded)</li>
              <li>Be classified as an overseas fee-paying student</li>
              <li>Not be in receipt of certain other Liverpool scholarships</li>
              <li>Demonstrate academic excellence</li>
          </ul>
          <h3 class="text-2xl font-bold font-display mt-6 mb-2">PRIORITY CONSIDERATION:</h3>
           <ul class="list-disc list-inside space-y-2">
                <li>First-class degree holders (or equivalent) receive priority</li>
                <li>Strong academic profiles with high GPA/percentage</li>
                <li>Leadership experience in student organisations, clubs, or societies</li>
                <li>Entrepreneurship ventures or business experience</li>
                <li>Volunteering and community service</li>
                <li>Significant extracurricular achievements</li>
            </ul>
      </section>
      `,
      `
      <section id="application-process">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">APPLICATION PROCESS – NOMINATION REQUIRED</h2>
          <p>This scholarship requires NOMINATION through registered agents or partners.</p>
          <ol class="list-decimal list-inside space-y-2 mt-2">
            <li><strong>STEP 1: Apply for Admission</strong> - Submit your programme application through the university portal with all required documents.</li>
            <li><strong>STEP 2: Receive Offer</strong> - If successful, you will receive a conditional or unconditional offer.</li>
            <li><strong>STEP 3: Agent Nomination</strong> - Your registered agent (like Rhinny Global) nominates you for the scholarship.</li>
            <li><strong>STEP 4: University Review</strong> - The university reviews all nominations based on academic merit.</li>
            <li><strong>STEP 5: Scholarship Confirmation</strong> - If selected, you receive scholarship confirmation.</li>
          </ol>
          <p class="mt-4"><strong>IMPORTANT NOTES:</strong> Scholarships are LIMITED and highly competitive. Nomination does NOT guarantee an award.</p>
      </section>
      `,
      `
      <section id="tuition-and-costs">
        <h2 class="text-3xl font-bold font-display mb-4 mt-8">TUITION FEES & COSTS</h2>
        <h3 class="text-2xl font-bold font-display mt-6 mb-2">INTERNATIONAL TUITION (2026/27 estimates):</h3>
        <ul class="list-disc list-inside space-y-2 mt-2">
            <li>Master\'s programmes: £24,000 – £30,000 per year</li>
            <li>After £2,000 scholarship: £22,000 – £28,000 per year</li>
        </ul>
        <h3 class="text-2xl font-bold font-display mt-6 mb-2">LIVING EXPENSES (Liverpool):</h3>
        <ul class="list-disc list-inside space-y-2 mt-2">
            <li>Accommodation: £6,000 – £9,000 per year</li>
            <li>Food: £2,000 – £3,000 per year</li>
            <li>Transport: £500 – £800 per year</li>
        </ul>
        <p class="font-bold mt-4">TOTAL ESTIMATED COST (After Scholarship): £33,000 – £45,000 per year</p>
      </section>
      `,
      `
      <section id="why-liverpool">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">WHY STUDY AT LIVERPOOL?</h2>
          <ul class="list-disc list-inside space-y-2 mt-2">
            <li>Russell Group prestige – globally recognised degree</li>
            <li>World-class research facilities and faculty</li>
            <li>Strong industry links with Fortune 500 companies</li>
            <li>Vibrant, affordable student city</li>
          </ul>
      </section>
      `,
      `
      <section id="deadlines">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">DEADLINES</h2>
          <ul class="list-disc list-inside space-y-2 mt-2">
            <li>Application Deadline: Rolling (apply early for scholarship consideration)</li>
            <li>Programme Start: September 2026</li>
          </ul>
      </section>
      `
    ]
  },
  {
    id: 3,
    slug: "bath-spa-university-regional-automatic-scholarships-september-2026",
    image: "/assets/scholarship/bath.png",
    university: "Bath Spa University",
    country: "UK",
    title: "Regional Automatic Scholarships",
    description: "Automatic scholarships of £2,000 for the Bath campus and £4,000 for the London MBA program at Bath Spa University for the September 2026 intake.",
    amount: "£2,000 (Bath) | £4,000 (London MBA)",
    intake: "September 2026 only",
    content: [
      `
      <section id="about-bath-spa">
          <h2 class="text-3xl font-bold font-display mb-4">ABOUT BATH SPA UNIVERSITY</h2>
          <p>Bath Spa University is a leading UK institution known for its creative and cultural focus, set in the stunning UNESCO World Heritage city of Bath. The university specialises in arts, humanities, education, and business, with a strong emphasis on creativity, culture, and enterprise.</p>
      </section>
      `,
      `
      <section id="scholarship-options">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">SCHOLARSHIP OPTIONS</h2>
          <div class="mt-4">
            <h3 class="text-2xl font-bold">BATH CITY CAMPUS – £2,000 REGIONAL AUTOMATIC SCHOLARSHIP</h3>
            <p>This scholarship is automatically awarded to eligible international students applying for the September 2026 intake at the Bath City Campus across most UG and PG programmes.</p>
            <ul class="list-disc list-inside space-y-2 mt-2">
                <li>£2,000 tuition fee reduction</li>
                <li>Automatically awarded – no separate application</li>
            </ul>
          </div>
          <div class="mt-6">
            <h3 class="text-2xl font-bold">BSU LONDON CAMPUS – £4,000 MBA SCHOLARSHIP</h3>
            <p>For the MBA programme at the Hackney, East London campus.</p>
            <ul class="list-disc list-inside space-y-2 mt-2">
                <li>Tuition Fee: £20,505</li>
                <li>Automatic Scholarship: £4,000</li>
                <li><strong>Net Tuition Fee After Scholarship: £16,505</strong></li>
            </ul>
          </div>
      </section>
      `,
      `
      <section id="eligibility-criteria">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">ELIGIBILITY CRITERIA</h2>
          <p>To qualify for either scholarship, you must:</p>
          <ul class="list-disc list-inside space-y-2 mt-4">
              <li>Be an international student (outside UK/EU)</li>
              <li>Hold an offer for September 2026 intake</li>
              <li>Be self-funded (not sponsored by government or employer)</li>
          </ul>
      </section>
      `,
      `
      <section id="additional-scholarships">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">ADDITIONAL SCHOLARSHIPS AT BATH SPA</h2>
          <p>Bath Spa University also offers the International Recruitment Office (IRO) Scholarship for exceptional students:</p>
          <ul class="list-disc list-inside space-y-2 mt-4">
              <li><strong>£5,000 OFF FIRST-YEAR FEES:</strong> 2 scholarships available, highly competitive.</li>
              <li><strong>£1,000 OFF FIRST-YEAR FEES:</strong> 20 scholarships available.</li>
          </ul>
          <p class="mt-2">Application deadline: Monday 8 June 2026</p>
      </section>
      `,
      `
      <section id="tuition-and-costs">
        <h2 class="text-3xl font-bold font-display mb-4 mt-8">TUITION FEES & COSTS</h2>
        <p><strong>BATH CITY CAMPUS (After £2,000 scholarship):</strong> £13,500 – £17,000 per year</p>
        <p><strong>BSU LONDON CAMPUS (MBA, After £4,000 scholarship):</strong> £16,505</p>
      </section>
      `,
      `
      <section id="how-to-apply">
        <h2 class="text-3xl font-bold font-display mb-4 mt-8">HOW TO APPLY</h2>
        <ol class="list-decimal list-inside space-y-2 mt-2">
            <li>Choose your programme and campus.</li>
            <li>Submit application online at bathspa.ac.uk.</li>
            <li>Receive offer letter (scholarship automatically included if eligible).</li>
            <li>Accept offer and pay tuition deposit.</li>
        </ol>
      </section>
      `
    ]
  },
  {
    id: 4,
    slug: "university-of-south-wales-early-cas-scholarship-june-2026",
    image: "/assets/scholarship/usw.png",
    university: "University of South Wales (USW)",
    country: "UK",
    title: "Up to £3,000 Early CAS Scholarship",
    description: "A combined scholarship of up to £3,000 for international students who are 'CAS Ready' by the extended deadline of 30th June 2026.",
    amount: "£2,500 base + £500 Early CAS bonus",
    intake: "September 2026",
    content: [
      `
      <section id="about-usw">
          <h2 class="text-3xl font-bold font-display mb-4">ABOUT THE UNIVERSITY OF SOUTH WALES</h2>
          <p>The University of South Wales (USW) is one of the largest universities in the UK, with over 30,000 students from 120 countries. With campuses across South Wales – including the vibrant capital city of Cardiff – USW offers career-focused programmes designed in partnership with industry.</p>
      </section>
      `,
      `
      <section id="scholarship-breakdown">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">SCHOLARSHIP BREAKDOWN</h2>
          <p>The USW Early CAS Scholarship combines two awards:</p>
          <ul class="list-disc list-inside space-y-2 mt-4">
              <li><strong>BASE SCHOLARSHIP: £2,500</strong> (Chancellor\'s International Development Scholarship, automatically awarded)</li>
              <li><strong>EARLY CAS BONUS: Additional £500</strong> (For being 'CAS Ready' by 30th June 2026)</li>
          </ul>
          <p class="font-bold text-lg mt-4">TOTAL POTENTIAL SCHOLARSHIP: £3,000</p>
      </section>
      `,
      `
      <section id="cas-ready-meaning">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">WHAT DOES "CAS READY" MEAN?</h2>
          <p>To be "CAS Ready" by 30th June 2026, you must complete all three steps:</p>
          <ol class="list-decimal list-inside space-y-2 mt-4">
              <li><strong>COMPLETE CAS SHIELD:</strong> Upload and pass all document verification checks.</li>
              <li><strong>SUBMIT ALL REQUIRED DOCUMENTS:</strong> Passport, transcripts, financial evidence, etc.</li>
              <li><strong>PAY TUITION FEE DEPOSIT:</strong> Confirm your place by paying the deposit.</li>
          </ol>
          <p class="mt-2 text-red-500 font-bold">All three steps must be completed by 30th June 2026 to qualify.</p>
      </section>
      `,
      `
      <section id="eligibility">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">ELIGIBILITY CRITERIA</h2>
          <p>Must be an international, self-funded student holding an offer for a USW programme for September 2026. Certain programmes like DBA, PhD, and ACCA are excluded.</p>
      </section>
      `,
      `
      <section id="tuition-and-costs">
        <h2 class="text-3xl font-bold font-display mb-4 mt-8">TUITION FEES & COSTS</h2>
        <p><strong>Postgraduate (After £3,000 scholarship):</strong> £12,500 – £14,000 per year</p>
        <p><strong>Undergraduate (After £3,000 scholarship):</strong> £11,500 – £12,500 per year</p>
      </section>
      `,
      `
      <section id="how-to-apply">
        <h2 class="text-3xl font-bold font-display mb-4 mt-8">HOW TO APPLY</h2>
        <ol class="list-decimal list-inside space-y-2 mt-2">
            <li>Apply for your chosen USW programme.</li>
            <li>Receive offer letter.</li>
            <li>Create CAS Shield account and upload all documents.</li>
            <li>Pay tuition fee deposit.</li>
            <li>Confirm CAS Ready status by 30th June 2026.</li>
        </ol>
      </section>
      `,
      `
      <section id="deadline">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8 text-red-600">URGENT DEADLINE</h2>
          <p class="font-bold text-lg">EARLY CAS SCHOLARSHIP DEADLINE: 30th June 2026</p>
          <p>This deadline has been EXTENDED, but do not delay – start your CAS Shield process immediately.</p>
      </section>
      `
    ]
  },
  {
    id: 5,
    slug: "university-of-east-london-international-scholarship-2026-2027",
    image: "/assets/scholarship/uel.png",
    university: "University of East London (UEL)",
    country: "UK",
    title: "£3,000 International Scholarship",
    description: "A £3,000 scholarship for students from South Asian countries and Nigeria, available for multiple intakes in 2026-2027.",
    amount: "£3,000 tuition fee discount",
    intake: "September 2026 | January 2027 | May 2027",
    content: [
      `
      <section id="about-uel">
          <h2 class="text-3xl font-bold font-display mb-4">ABOUT THE UNIVERSITY OF EAST LONDON</h2>
          <p>The University of East London (UEL) is a dynamic, career-focused institution located in one of the world\'s most exciting cities. With campuses in Docklands and Stratford, UEL offers students unparalleled access to London\'s industries, culture, and opportunities.</p>
      </section>
      `,
      `
      <section id="scholarship-overview">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">SCHOLARSHIP OVERVIEW</h2>
          <p>UEL is offering a <strong>£3,000 International Scholarship</strong> specifically for students from South Asian countries and Nigeria across ALL courses.</p>
          <h3 class="text-2xl font-bold font-display mt-6 mb-2">ELIGIBLE COUNTRIES:</h3>
          <ul class="list-disc list-inside space-y-2">
              <li>India</li>
              <li>Nigeria</li>
              <li>Nepal</li>
              <li>Sri Lanka</li>
              <li>Bangladesh</li>
          </ul>
      </section>
      `,
      `
      <section id="eligibility">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">WHO IS ELIGIBLE?</h2>
          <p>This scholarship is broadly available to:</p>
          <ul class="list-disc list-inside space-y-2 mt-4">
              <li>NEW APPLICANTS</li>
              <li>CURRENT OFFER HOLDERS</li>
              <li>DEFERRED STUDENTS</li>
              <li>STUDENTS WHO HAVE ALREADY PAID FEES (will receive adjustment/refund)</li>
          </ul>
           <p class="mt-4"><strong>Note for Nepal Students:</strong> Undergraduate students from Nepal will receive an existing, more generous scholarship of £6,000 total (£2,000 per year).</p>
      </section>
      `,
      `
      <section id="how-it-works">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">HOW IT WORKS</h2>
          <p><strong>AUTOMATIC ASSESSMENT:</strong> No separate scholarship application is required. UEL automatically assesses eligibility based on your nationality and programme. The scholarship will appear in your offer letter.</p>
      </section>
      `,
      `
      <section id="tuition-and-costs">
        <h2 class="text-3xl font-bold font-display mb-4 mt-8">TUITION FEES & COSTS</h2>
        <p><strong>Postgraduate (After £3,000 scholarship):</strong> £12,500 – £15,000 per year</p>
        <p><strong>Undergraduate (After £3,000 scholarship):</strong> £11,500 – £13,500 per year</p>
      </section>
      `
    ]
  },
  {
    id: 6,
    slug: "aston-university-pg-international-scholarship-september-2026",
    image: "/assets/scholarship/aston.png",
    university: "Aston University",
    country: "UK",
    title: "Postgraduate International Community Scholarship",
    description: "An automatic scholarship of £4,000 (Standard) or an enhanced award of £5,500 for select postgraduate courses at Aston University.",
    amount: "£4,000 (Standard) | £5,500 (Enhanced)",
    intake: "September 2026",
    content: [
      `
      <section id="about-aston">
          <h2 class="text-3xl font-bold font-display mb-4">ABOUT ASTON UNIVERSITY</h2>
          <p>Aston University is a leading UK institution located in the heart of Birmingham, the UK\'s second-largest city. Known for its strong focus on employability and industry connections, Aston consistently ranks among the top UK universities for graduate employment.</p>
      </section>
      `,
      `
      <section id="scholarship-options">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">SCHOLARSHIP OPTIONS</h2>
          <div class="mt-4">
            <h3 class="text-2xl font-bold">STANDARD SCHOLARSHIP – £4,000</h3>
            <p>Automatically awarded to international students for most postgraduate taught programmes after paying the deposit.</p>
          </div>
          <div class="mt-6">
            <h3 class="text-2xl font-bold">ENHANCED SCHOLARSHIP – £5,500</h3>
            <p>Available for SELECTED courses only, including MSc Business Analytics, MSc Pharmaceutical Sciences, MSc Finance, and more.</p>
          </div>
      </section>
      `,
      `
      <section id="how-it-works">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">HOW IT WORKS</h2>
          <p><strong>NO SEPARATE APPLICATION REQUIRED!</strong> This is an an automatic scholarship. Simply apply for your course, receive an offer, and pay the tuition fee deposit by the deadline specified in your offer letter. The scholarship is then automatically applied.</p>
      </section>
      `,
      `
      <section id="eligibility">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">ELIGIBILITY CRITERIA</h2>
          <p>You must be a new international postgraduate student, classified as an overseas fee-paying student, and pay your deposit by the deadline. Excludes MRes, PhD, MBA, and certain other specified programmes.</p>
      </section>
      `,
      `
      <section id="enhanced-courses">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">ENHANCED COURSES DETAIL</h2>
          <p>The £5,500 Enhanced Scholarship applies to high-demand programmes like Business Analytics, AI, Cyber Security, Supply Chain Management, and Finance.</p>
      </section>
      `,
      `
      <section id="tuition-and-costs">
        <h2 class="text-3xl font-bold font-display mb-4 mt-8">TUITION FEES & COSTS</h2>
        <p><strong>After £4,000 scholarship:</strong> £15,000 – £19,000 per year</p>
        <p><strong>After £5,500 scholarship:</strong> £13,500 – £17,500 per year</p>
      </section>
      `
    ]
  },
  {
    id: 7,
    slug: "university-of-greenwich-international-scholarship-award-june-2026",
    image: "/assets/scholarship/greenwich.png",
    university: "University of Greenwich",
    country: "UK",
    title: "International Scholarship Award (ISA)",
    description: "A guaranteed minimum scholarship of £2,500 (up to £3,000) for eligible international students who apply by the urgent deadline of 26th June 2026.",
    amount: "£2,500–£3,000",
    intake: "September 2026",
    content: [
      `
      <section id="urgent-notice">
          <h2 class="text-3xl font-bold font-display mb-4 text-red-600">URGENT NOTICE – DEADLINE APPROACHING</h2>
          <p>The ISA Scholarship deadline for the University of Greenwich is <strong>26th June 2026</strong>, and <strong>NO further extension will be granted.</strong></p>
          <p class="mt-4">Students are strongly advised to apply immediately, make the deposit payment (via Flywire ONLY), and not wait until the last minute.</p>
      </section>
      `,
      `
      <section id="about-greenwich">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">ABOUT THE UNIVERSITY OF GREENWICH</h2>
          <p>The University of Greenwich is a historic institution with a modern vision, located in the iconic UNESCO World Heritage Site of Greenwich, London. It offers a supportive international environment with strong research quality and excellent industry links.</p>
      </section>
      `,
      `
      <section id="june-awards">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">JUNE AWARDS WINDOW – GUARANTEED MINIMUM</h2>
          <p>The June awards window offers a special guaranteed minimum award:</p>
          <ul class="list-disc list-inside space-y-2 mt-4">
              <li><strong>GUARANTEED MINIMUM: £2,500</strong> (for all eligible applicants before 26th June)</li>
              <li><strong>MAXIMUM AWARD: £3,000</strong> (for the strongest applications)</li>
          </ul>
          <p class="mt-2 text-red-500 font-bold">Awards issued AFTER 26th June will NOT have a guaranteed minimum.</p>
      </section>
      `,
      `
      <section id="how-to-apply">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">HOW TO APPLY – STEP BY STEP</h2>
          <ol class="list-decimal list-inside space-y-2 mt-4">
              <li><strong>Hold an Offer:</strong> You must already have an offer from Greenwich.</li>
              <li><strong>Fill Out Scholarship Application:</strong> Complete the separate ISA application form.</li>
              <li><strong>Submit Written Statement:</strong> Write an authentic, non-AI-generated statement. This is critical.</li>
              <li><strong>Pay Deposit Through FLYWIRE ONLY:</strong> This is a mandatory and strictly enforced rule.</li>
              <li><strong>Meet All Deadlines:</strong> Complete all steps before 26th June.</li>
          </ol>
      </section>
      `,
      `
      <section id="eligibility">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">ELIGIBILITY CRITERIA</h2>
          <p>You must be a new, full-time, on-campus international student for the September 2026 intake. Excludes MRes, PhD, online students, and those receiving other Greenwich scholarships.</p>
      </section>
      `,
      `
      <section id="important-rules">
          <h2 class="text-3xl font-bold font-display mb-4 mt-8">IMPORTANT RULES & RESTRICTIONS</h2>
          <ul class="list-disc list-inside space-y-2 mt-4">
              <li><strong>FLYWIRE ONLY:</strong> Deposit must be paid through Flywire.</li>
              <li><strong>NON-DEFERRABLE:</strong> The scholarship cannot be deferred.</li>
              <li><strong>NON-COMBINEABLE:</strong> Cannot be combined with other Greenwich awards.</li>
          </ul>
      </section>
      `
    ]
  },
  {
    id: 8,
    slug: "london-metropolitan-university-bright-futures-scholarship-july-2026",
    image: "/assets/scholarship/london-met.png",
    university: "London Metropolitan University",
    country: "UK",
    title: "Bright Futures Scholarship",
    description: "London Metropolitan University offers the Bright Futures Scholarship to support international students progressing from pathway programmes to full degrees.",
    amount: "£5,000",
    intake: "September 2026",
    content: [
      `
      <section id="scholarship-details">
          <h2 class="text-3xl font-bold font-display mb-4">Scholarship Details</h2>
          <p>London Metropolitan University offers the Bright Futures Scholarship to support international students progressing from pathway programmes to full degrees.</p>
          <div class="mt-6">
            <h3 class="text-2xl font-bold">International Foundation Programme & International Year One</h3>
            <ul class="list-disc list-inside space-y-2 mt-2">
                <li>£5,000 Bright Futures Scholarship for each year of the undergraduate degree after successful progression.</li>
                <li>5% Prompt Payment Discount for students who pay their tuition fees in full.</li>
            </ul>
          </div>
          <div class="mt-6">
            <h3 class="text-2xl font-bold">Pre-Master's Programme</h3>
            <ul class="list-disc list-inside space-y-2 mt-2">
                <li>£5,000 Bright Futures Scholarship towards the postgraduate degree after successful progression.</li>
                <li>5% Prompt Payment Discount for students who pay their tuition fees in full.</li>
            </ul>
          </div>
      </section>
      `,
       `
      <section id="update-date">
          <h2 class="text-3xl font-bold font-display mb-4">Update Date</h2>
          <p>12 July 2026</p>
      </section>
      `
    ]
  },
  {
    id: 9,
    slug: "university-of-sussex-india-scholarship-july-2026",
    image: "/assets/scholarship/sussex.png",
    university: "University of Sussex",
    country: "UK",
    title: "Scholarships & Funding (India Focus)",
    description: "The University of Sussex offers multiple funding opportunities for eligible Master's students, with a focus on Indian applicants. Update Date: 12 July 2026.",
    amount: "Up to £7,000",
    intake: "September 2026",
    content: [
      `
      <section id="scholarship-details">
          <h2 class="text-3xl font-bold font-display mb-4">Scholarships & Funding (India Focus)</h2>
          <p>The University of Sussex offers multiple funding opportunities for eligible Master's students, with a focus on Indian applicants. Update Date: 12 July 2026.</p>
          <div class="mt-6">
            <h3 class="text-2xl font-bold">Available Awards</h3>
            <ul class="list-disc list-inside space-y-2 mt-2">
                <li>£5,000 Sussex India Scholarship for eligible Master's students.</li>
                <li>£1,000 Agent Exclusive Nomination Scholarship (excluding IDS programmes).</li>
                <li>£1,000 Travel Bursary — Business School students must meet the India Team in person; Science, Engineering & Medicine students may meet in person or virtually. Note: Deposit must not be paid before the meeting.</li>
            </ul>
          </div>
          <div class="mt-6">
            <h3 class="text-2xl font-bold">Eligibility Criteria</h3>
            <ul class="list-disc list-inside space-y-2 mt-2">
                <li>Deposit not yet paid.</li>
                <li>No agent change cases.</li>
                <li>For UG applicants, Sussex must not already be the firm choice.</li>
            </ul>
            <p class="mt-4 font-bold">Eligible Master's students can receive up to £7,000 in guaranteed funding.</p>
          </div>
          <div class="mt-6">
            <h3 class="text-2xl font-bold">Deadline</h3>
            <p>30 July 2026 (First-come, first-served basis).</p>
          </div>
          <div class="mt-6">
            <h3 class="text-2xl font-bold">Location & Intake</h3>
            <p>United Kingdom | Intake: September 2026</p>
          </div>
      </section>
      `,
       `
      <section id="update-date">
          <h2 class="text-3xl font-bold font-display mb-4">Update Date</h2>
          <p>12 July 2026</p>
      </section>
      `
    ]
  },
  {
    id: 10,
    slug: "brunel-university-london-september-2026-undergraduate-offer",
    image: "/assets/scholarship/brunel.png",
    university: "Brunel University London",
    country: "UK",
    title: "September 2026 Undergraduate Offer",
    description: "Brunel University London is celebrating its 60th anniversary with exclusive scholarship and accommodation offers for international undergraduate students starting in September 2026.",
    amount: "Up to £2,000",
    intake: "September 2026",
    content: [
      `
      <section id="scholarship-details">
          <h2 class="text-3xl font-bold font-display mb-4">September 2026 Undergraduate Offer</h2>
          <p>Brunel University London is celebrating its 60th anniversary with exclusive scholarship and accommodation offers for international undergraduate students starting in September 2026.</p>
          <div class="mt-6">
            <h3 class="text-2xl font-bold">£1,000 per year — Brunel 60th Anniversary International Scholarship</h3>
            <ul class="list-disc list-inside space-y-2 mt-2">
                <li>For eligible international undergraduate students starting in September 2026.</li>
                <li>Must hold an offer and pay a £5,000 tuition fee deposit by 31 August 2026.</li>
                <li>Must meet all offer conditions before registration.</li>
                <li>No separate application required — automatic consideration upon meeting criteria.</li>
            </ul>
          </div>
          <div class="mt-6">
            <h3 class="text-2xl font-bold">£1,000 Accommodation Discount</h3>
            <ul class="list-disc list-inside space-y-2 mt-2">
                <li>Available for eligible self-funded international undergraduate students.</li>
                <li>Valid for Band 2 Ensuite rooms in Bishop Complex.</li>
                <li>Accommodation application must be submitted by 31 August 2026.</li>
                <li>Subject to availability and eligibility.</li>
            </ul>
          </div>
          <div class="mt-6">
            <h3 class="text-2xl font-bold">Total Potential Benefit</h3>
            <p>Up to £2,000 (£1,000 scholarship + £1,000 accommodation discount).</p>
          </div>
          <div class="mt-6">
            <h3 class="text-2xl font-bold">Intake</h3>
            <p>September 2026 Undergraduate Students</p>
          </div>
      </section>
      `,
       `
      <section id="update-date">
          <h2 class="text-3xl font-bold font-display mb-4">Update Date</h2>
          <p>12 July 2026</p>
      </section>
      `
    ]
  }
];

export function getScholarshipBySlug(slug: string): Scholarship | undefined {
  return scholarships.find(scholarship => scholarship.slug === slug);
}
