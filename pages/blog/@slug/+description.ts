import { getArticleBySlug } from '../../../lib/content';
import { SITE_NAME } from '../../../lib/site';

export default function description(pageContext: { routeParams: { slug: string } }) {
  const article = getArticleBySlug(pageContext.routeParams.slug);
  return article?.metaDescription || article?.description || `${SITE_NAME} - מדריכים ותובנות על בינה מלאכותית`;
}
