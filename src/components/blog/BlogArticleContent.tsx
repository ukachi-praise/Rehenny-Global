
'use client';

import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/client';

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return <img src={urlFor(value).url()} alt={value.alt || 'Blog post image'} className="my-8 rounded-lg" />;
    },
  },
};

export default function BlogArticleContent({ post }: { post: any }) {
  return (
    <article className="prose prose-invert lg:prose-xl prose-headings:font-playfair prose-headings:text-white prose-p:text-[#B8C0CC] prose-a:text-[#D4AF37] prose-strong:text-white prose-blockquote:border-l-[#D4AF37]">
      <PortableText value={post.body} components={portableTextComponents} />
    </article>
  );
}
