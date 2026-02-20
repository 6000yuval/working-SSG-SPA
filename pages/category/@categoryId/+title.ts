import { getCategoryById } from '../../../lib/content';
import { SITE_NAME } from '../../../lib/site';

export default function title(pageContext: { routeParams: { categoryId: string } }) {
  const category = getCategoryById(pageContext.routeParams.categoryId);
  if (!category || category.id === 'all') return SITE_NAME;
  return `${category.title} | ${SITE_NAME}`;
}
