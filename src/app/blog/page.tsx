import type { Metadata } from 'next';
import BlogClientPage from './BlogClientPage';

export const metadata: Metadata = {
    title: 'Study Abroad Blog | Rhinny Global',
    description: 'Explore our blog for expert advice, student stories, and destination guides. Your journey to studying abroad starts here with Rhinny Global.',
};

export default function BlogPage() {
    return <BlogClientPage />;
}
