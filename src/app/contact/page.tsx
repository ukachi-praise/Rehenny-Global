import type { Metadata } from 'next';
import ContactClientPage from './ContactClientPage';

export const metadata: Metadata = {
    title: 'Contact Us | Rhinny Global',
    description: 'Get in touch with Rhinny Global for a free consultation. Our expert counsellors are here to help you with your study abroad journey.',
};

export default function ContactPage() {
    return <ContactClientPage />;
}
