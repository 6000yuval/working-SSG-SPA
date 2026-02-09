import { render } from 'vike/abort';
import { getArticleBySlug } from '../../../lib/content';

export default function guard(pageContext: { routeParams: { slug: string } }) {
  const article = getArticleBySlug(pageContext.routeParams.slug);
  if (!article) throw render(404);
}
