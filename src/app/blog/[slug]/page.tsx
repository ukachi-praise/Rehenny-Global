import { getArticleBySlug, getRelatedArticles } from '@/data/articles';
import ArticleClientPage from './ArticleClientPage';
import { notFound } from 'next/navigation';

const ArticlePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, article.tag);

  return <ArticleClientPage article={article} relatedArticles={relatedArticles} />;
};

export default ArticlePage;
