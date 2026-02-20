import { usePageContext } from 'vike-react/usePageContext';
import { getCategoryById } from '../../../lib/content';
import { absoluteUrl } from '../../../lib/seo';
import { SITE_LOCALE, SITE_NAME } from '../../../lib/site';

export default function Head() {
  const pageContext = usePageContext();
  const categoryId = pageContext.routeParams.categoryId;
  const category = getCategoryById(categoryId);
  const href = absoluteUrl(`/category/${categoryId}`);

  if (!category || category.id === 'all') {
    return <link rel="canonical" href={href} />;
  }

  const title = `${category.title} | ${SITE_NAME}`;
  const description = category.description;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'בית',
        item: absoluteUrl('/')
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: category.title,
        item: href
      }
    ]
  };

  return (
    <>
      <link rel="canonical" href={href} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content={SITE_LOCALE} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={href} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
