import { getArticleBySlug } from '../../../lib/content';
import { SITE_NAME } from '../../../lib/site';

export default function title(pageContext: { routeParams: { slug: string } }) {
  const article = getArticleBySlug(pageContext.routeParams.slug);
  return article?.metaTitle || (article?.title ? `${article.title} | ${SITE_NAME}` : SITE_NAME);
}
