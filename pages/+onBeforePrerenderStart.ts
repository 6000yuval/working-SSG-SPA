import { allArticles, allCategories } from '../lib/content';

export default function onBeforePrerenderStart() {
  const articleUrls = allArticles.map((article) => `/blog/${article.slug || article.id}`);
  const categoryUrls = allCategories
    .filter((category) => category.id !== 'all')
    .map((category) => `/category/${category.id}`);

  return ['/', ...articleUrls, ...categoryUrls];
}
