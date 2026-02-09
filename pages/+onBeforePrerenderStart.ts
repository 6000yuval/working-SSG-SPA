import { allArticles, allCategories } from '../lib/content';

let alreadyRan = false;

export default function onBeforePrerenderStart() {
  // Some build environments can evaluate this hook more than once;
  // return URLs only once to avoid Vike duplicate URL errors.
  if (alreadyRan) return [];
  alreadyRan = true;

  const articleUrls = allArticles.map((article) => `/blog/${article.slug || article.id}`);
  const categoryUrls = allCategories
    .filter((category) => category.id !== 'all')
    .map((category) => `/category/${category.id}`);

  // Don't include '/' here: Vike already prerenders filesystem routes such as /pages/+Page.tsx.
  // Also dedupe in case content contains repeated slugs/categories.
  return Array.from(new Set([...articleUrls, ...categoryUrls]));
}
