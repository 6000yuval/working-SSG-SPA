import { getCategoryById } from '../../../lib/content';

export default function description(pageContext: { routeParams: { categoryId: string } }) {
  const category = getCategoryById(pageContext.routeParams.categoryId);
  return category?.description || 'מאגר מאמרים ועדכונים על בינה מלאכותית בעברית.';
}
