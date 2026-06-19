import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import WhatsAppButton from '@/components/WhatsAppButton';
import ApplyNowButton from '@/components/ApplyNowButton'; // Import the new component
import { ThemeProvider } from "./theme-provider";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Rhinny Global — Study Abroad Experts',
  description: 'Your journey. Our expertise. Global opportunities. Premium study abroad consultancy helping students achieve international education dreams.',
  keywords: 'study abroad, international education, scholarships, university admissions, Rhinny Global',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", notoSans.variable, playfairDisplayHeading.variable)}>
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

        {/* Favicon */}
        <link rel="icon" href="/assets/Logo.png" />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light">
          <Providers>
            {children}
            <WhatsAppButton />
            <ApplyNowButton />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
