import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Study in China | CSC Scholarship 2027 | Rhinny Global',
    description: 'Explore the fully funded CSC Scholarship 2027 for all degree levels in China. Application deadline is April 2027. English and Chinese programs available.',
};

const ChinaPage = () => {

    const faqs = [
        {
            question: "Can I apply without IELTS?",
            answer: "Yes, if you are applying for a Chinese-taught program, you need HSK instead. For English-taught programs, some universities accept other proof of English proficiency or waive the requirement if your previous degree was in English.",
        },
        {
            question: "Can I apply while still completing my current degree?",
            answer: "Yes, you can apply if you are in your final year, but you must provide a pre-graduation certificate and complete your degree before enrollment.",
        },
        {
            question: "Is the CSC Scholarship fully funded?",
            answer: "Yes, the CSC Scholarship is fully funded covering tuition, accommodation, monthly stipend, and medical insurance for the entire duration of your program.",
        },
    ];

    return (
        <div className="bg-white text-gray-800">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4 max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                         <details key={index} className="p-4 rounded-lg shadow-sm bg-gray-50">
                             <summary className="font-semibold text-lg cursor-pointer">{faq.question}</summary>
                             <p className="mt-2 text-gray-600">{faq.answer}</p>
                         </details>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChinaPage;