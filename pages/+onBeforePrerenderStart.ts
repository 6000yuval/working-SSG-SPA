import { allArticles, allCategories } from '../lib/content';

export default function onBeforePrerenderStart() {
  const articleUrls = allArticles.map((article) => `/blog/${article.slug || article.id}`);
  const categoryUrls = allCategories
    .filter((category) => category.id !== 'all')
    .map((category) => `/category/${category.id}`);

  // Don't include '/' here: Vike already prerenders filesystem routes such as /pages/+Page.tsx.
  // Also dedupe in case content contains repeated slugs/categories.
  return Array.from(new Set([...articleUrls, ...categoryUrls]));
}
