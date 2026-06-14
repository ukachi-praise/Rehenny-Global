import { getArticleBySlug, getRelatedArticles } from '@/data/articles';
import ArticleClientPage from './ArticleClientPage';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

const ArticlePage = ({ params }: ArticlePageProps) => {
  const { slug } = params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, article.tag);

  return <ArticleClientPage article={article} relatedArticles={relatedArticles} />;
};

export default ArticlePage;
