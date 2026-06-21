import type { Metadata } from 'next'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton';
import { Noto_Sans, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import ReferralPopup from '@/components/ReferralPopup';

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

const siteConfig = {
  name: "Rhinny Global",
  url: "https://rhinnyglobal.com",
  ogImage: "https://rhinnyglobal.com/og.png", // Replace with your actual OG image URL
  description:
    "Your journey. Our expertise. Global opportunities. Premium study abroad consultancy helping students achieve international education dreams.",
  links: {
    twitter: "https://twitter.com/rhinnyglobal", // Replace with your actual Twitter URL
    instagram: "https://instagram.com/rhinnyglobal",
  },
  keywords: `study abroad, international education, university admissions, scholarships, visa assistance, Rhinny Global, Canada, UK, USA, Australia, student services`,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "Rhinny Global",
      url: siteConfig.url,
    },
  ],
  creator: "Rhinny Global",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@rhinnyglobal", // Replace with your actual Twitter handle
  },
  icons: {
    icon: "/assets/Logo.png",
    shortcut: "/assets/Logo.png",
    apple: "/assets/Logo.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("font-sans", notoSans.variable, playfairDisplayHeading.variable)}>
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        
        {/* Plus Jakarta Sans */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="antialiased">
        {children}
        <ReferralPopup />
        <WhatsAppButton />
      </body>
    </html>
  )
}
