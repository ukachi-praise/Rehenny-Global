import { Scholarship } from "@/data/scholarships";
import Image from "next/image";
import Link from "next/link";

export default function ScholarshipCard({ scholarship }: { scholarship: Scholarship }) {
    return (
        <Link href={`/scholarships/${scholarship.slug}`}>
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Image src={scholarship.image} alt={scholarship.title} width={400} height={200} className="w-full object-cover" />
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-amber-400">{scholarship.university}</span>
                        <span className="text-xs bg-gray-700 text-white px-2 py-1 rounded-full">{scholarship.country}</span>
                    </div>
                    <h3 className="text-xl font-bold font-display text-white mb-2">{scholarship.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{scholarship.description}</p>
                    <div className="flex items-center justify-between text-white">
                        <span className="text-lg font-bold">{scholarship.amount}</span>
                        <span className="text-sm">{scholarship.intake}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}