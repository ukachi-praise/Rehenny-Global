import type { Metadata } from 'next';
import ScholarshipsClientPage from './ScholarshipsClientPage';

export const metadata: Metadata = {
    title: 'Scholarships That Change Lives | Rhinny Global',
    description: 'At Rhinny Global, we believe in the power of education. Our scholarships are designed to support ambitious students, remove financial barriers, and help you build a brighter future.',
};

export default function ScholarshipsPage() {
    return <ScholarshipsClientPage />;
}
