import { getArticleBySlug } from '../../../lib/content';

export default function description(pageContext: { routeParams: { slug: string } }) {
  const article = getArticleBySlug(pageContext.routeParams.slug);
  return article?.metaDescription || article?.description || 'AI EduBlog';
}
