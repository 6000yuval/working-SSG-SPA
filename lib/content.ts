import { ARTICLES, CATEGORIES } from '../data/content';

export const allArticles = ARTICLES;
export const allCategories = CATEGORIES;

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getRelatedArticles(articleId: string, categoryId: string, limit = 3) {
  return ARTICLES.filter((article) => article.id !== articleId && article.categoryId === categoryId).slice(0, limit);
}

export function getArticlesByCategory(categoryId: string) {
  return ARTICLES.filter((article) => article.categoryId === categoryId);
}
