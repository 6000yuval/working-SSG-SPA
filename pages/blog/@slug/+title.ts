import { getArticleBySlug } from '../../../lib/content';

export default function title(pageContext: { routeParams: { slug: string } }) {
  const article = getArticleBySlug(pageContext.routeParams.slug);
  return article?.metaTitle || article?.title || 'AI EduBlog';
}
