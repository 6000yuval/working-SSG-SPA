import { usePageContext } from 'vike-react/usePageContext';
import { getArticleBySlug } from '../../../lib/content';
import { SITE_URL } from '../../../lib/site';

export default function Head() {
  const pageContext = usePageContext();
  const slugParam = pageContext.routeParams.slug;
  const article = getArticleBySlug(slugParam);
  const slug = article?.slug || slugParam;
  const href = `${SITE_URL}/blog/${slug}`;

  return <link rel="canonical" href={href} />;
}
