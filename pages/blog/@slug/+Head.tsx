import { usePageContext } from 'vike-react/usePageContext';
import { getArticleBySlug, getCategoryById } from '../../../lib/content';
import { absoluteUrl, parseLastUpdatedToISO } from '../../../lib/seo';
import { SITE_LOCALE, SITE_NAME } from '../../../lib/site';

export default function Head() {
  const pageContext = usePageContext();
  const slugParam = pageContext.routeParams.slug;
  const article = getArticleBySlug(slugParam);
  const slug = article?.slug || slugParam;
  const href = absoluteUrl(`/blog/${slug}`);

  if (!article) {
    return <link rel="canonical" href={href} />;
  }

  const title = article.metaTitle || `${article.title} | ${SITE_NAME}`;
  const description = article.metaDescription || article.description;
  const image = article.imageUrl;
  const category = getCategoryById(article.categoryId);
  const publishedIso = parseLastUpdatedToISO(article.lastUpdated);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    inLanguage: 'he-IL',
    image: [image],
    datePublished: publishedIso,
    dateModified: publishedIso,
    mainEntityOfPage: href,
    articleSection: category?.title,
    author: {
      '@type': 'Organization',
      name: SITE_NAME
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME
    }
  };

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
        name: category?.title || 'קטגוריה',
        item: absoluteUrl(`/category/${article.categoryId}`)
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: href
      }
    ]
  };

  return (
    <>
      <link rel="canonical" href={href} />
      <link rel="alternate" hrefLang="he-IL" href={href} />

      <meta property="og:type" content="article" />
      <meta property="og:locale" content={SITE_LOCALE} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={href} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
