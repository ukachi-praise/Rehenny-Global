import React from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const customComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative my-8 rounded-xl overflow-hidden border border-white/10 group">
          <img
            src={urlFor(value).url()}
            alt={value.alt || 'Rhinny Global Education Hub'}
            className="w-full h-auto object-cover max-h-[500px]"
            loading="lazy"
          />
          {value.caption && (
            <div className="p-3 bg-black/40 text-center text-xs text-[#B8C0CC] border-t border-white/5 font-medium">
              {value.caption}
            </div>
          )}
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl md:text-4xl font-playfair font-bold text-white mt-12 mb-6 tracking-wide leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white mt-10 mb-5 tracking-wide leading-tight border-l-4 border-[#D4AF37] pl-4">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-2xl font-playfair font-semibold text-white mt-8 mb-4 tracking-wide leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg md:text-xl font-playfair font-semibold text-[#D4AF37] mt-6 mb-3 tracking-wide leading-tight">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="font-montserrat text-[#B8C0CC] text-base md:text-lg leading-relaxed mb-6 font-light">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-8 pl-6 border-l-4 border-[#D4AF37] italic text-white/95 font-medium text-lg bg-white/5 p-6 rounded-r-xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-3 mb-8 font-montserrat text-[#B8C0CC] text-base md:text-lg pl-4 font-light">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-3 mb-8 font-montserrat text-[#B8C0CC] text-base md:text-lg pl-4 font-light">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="marker:text-[#D4AF37] leading-relaxed">
        {children}
      </li>
    ),
    number: ({ children }: any) => (
      <li className="marker:text-[#D4AF37] leading-relaxed">
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-white">{children}</strong>,
    em: ({ children }: any) => <em className="italic text-white/90">{children}</em>,
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-[#D4AF37] underline decoration-[#D4AF37]/40 underline-offset-4 hover:text-[#f3cd4e] hover:decoration-white transition-colors duration-200"
        >
          {children}
        </a>
      );
    },
  },
};

export default function PortableTextRenderer({ value }: { value: any }) {
  return <PortableText value={value} components={customComponents} />;
}
