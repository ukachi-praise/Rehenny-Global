
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { destinations } from '@/data/destinations';
import dynamic from 'next/dynamic';

const LiquidMetalButton = dynamic(() => import('@/components/ui/liquid-metal-button').then(mod => mod.LiquidMetalButton), {
  ssr: false,
});

export const metadata: Metadata = {
    title: 'Study Abroad Destinations | Explore Your Options with Rhinny Global',
    description: 'Discover top study abroad destinations like Canada, the UK, Australia, and more. Find the perfect country for your international education journey with Rhinny Global.',
};

export default function DestinationsPage() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      <div className="relative h-[60vh] min-h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/assets/destinations-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white p-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-display">Destinations</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">Explore premier global destinations for your study abroad adventure.</p>
          </motion.div>
        </div>
      </div>

      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {destinations.map((destination) => (
              <motion.div
                key={destination.id}
                variants={itemVariants}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-3xl font-bold font-display">{destination.name}</h3>
                  <p className="mt-2 text-sm">{destination.description}</p>
                  <Link href={`/destinations/${destination.slug}`}>
                    <span className="mt-4 inline-block text-primary font-semibold hover:underline">
                      Explore →
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {!isMobile && <LiquidMetalButton />}
    </div>
  );
}
