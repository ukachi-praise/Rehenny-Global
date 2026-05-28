import { client } from './client';

export const allPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": mainImage.asset->url,
    "category": categories[0]->title,
    readTime,
    "date": publishedAt,
    author-> {
      name,
      "avatar": image.asset->url
    },
    tags,
    country,
    programType,
    scholarshipType,
    intake,
    featured,
    officialLink
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": mainImage.asset->url,
    "category": categories[0]->title,
    readTime,
    "date": publishedAt,
    author-> {
      name,
      "avatar": image.asset->url
    },
    tags,
    country,
    programType,
    scholarshipType,
    intake,
    featured,
    officialLink,
    body
  }
`;

// Helper: race a promise against a timeout
function withTimeout<T>(promise: Promise<T>, ms: number, fallback: T): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((resolve) => setTimeout(() => resolve(fallback), ms)),
  ]);
}

export async function getAllPosts() {
  try {
    return await withTimeout(client.fetch(allPostsQuery), 5000, []);
  } catch (e) {
    console.error('Sanity getAllPosts failed:', e);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    return await withTimeout(client.fetch(postBySlugQuery, { slug }), 5000, null);
  } catch (e) {
    console.error('Sanity getPostBySlug failed:', e);
    return null;
  }
}
