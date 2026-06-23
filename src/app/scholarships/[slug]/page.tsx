import { getScholarshipBySlug, scholarships } from "@/data/scholarships";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScholarshipSidebarCTA from "@/components/ScholarshipSidebarCTA";

export async function generateStaticParams() {
    return scholarships.map(scholarship => ({
        slug: scholarship.slug,
    }));
}

export default async function ScholarshipPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const scholarship = getScholarshipBySlug(slug);

    if (!scholarship) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className="bg-white pt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            {/* Header */}
                            <div className="mb-8">
                                <p className="text-base font-semibold text-amber-500 uppercase">{scholarship.university} &bull; {scholarship.country}</p>
                                <h1 className="mt-2 block text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl font-display">
                                    {scholarship.title}
                                </h1>
                                <div className="mt-4 flex items-center space-x-6 text-gray-500">
                                    <p><span className="font-bold text-gray-900">Amount:</span> {scholarship.amount}</p>
                                    <p><span className="font-bold text-gray-900">Intake:</span> {scholarship.intake}</p>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="mb-8">
                                <Image src={scholarship.image} alt={scholarship.title} width={800} height={400} className="w-full rounded-lg shadow-lg object-cover" />
                            </div>
                            
                            {/* Scholarship Body */}
                            <div className="prose prose-lg max-w-none text-gray-700">
                                {scholarship.content.map((section, index) => (
                                    <div key={index} dangerouslySetInnerHTML={{ __html: section }} />
                                ))}
                            </div>
                        </div>

                        {/* Sidebar CTA */}
                        <div className="hidden lg:block lg:col-span-4">
                            <ScholarshipSidebarCTA />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
