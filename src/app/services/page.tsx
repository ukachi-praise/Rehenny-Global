import type { Metadata } from 'next';
import ServicesClientPage from './ServicesClientPage';

export const metadata: Metadata = {
    title: 'Our Services | Rhinny Global',
    description: 'From university admissions to career guidance, Rhinny Global provides end-to-end expert support for a smooth and successful study abroad journey.',
};

export default function ServicesPage() {
    return <ServicesClientPage />;
}
