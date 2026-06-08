'use client'
import { useParams } from 'next/navigation';

const ArticlePage = () => {
  const { slug } = useParams();

  return (
    <div>
      <h1>Article Slug: {slug}</h1>
    </div>
  );
};

export default ArticlePage;
