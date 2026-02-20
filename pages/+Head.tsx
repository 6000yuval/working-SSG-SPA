import { absoluteUrl } from '../lib/seo';
import { SITE_LOCALE, SITE_NAME } from '../lib/site';

export default function Head() {
  const homeUrl = absoluteUrl('/');
  const title = `${SITE_NAME} | המדריך לבינה מלאכותית`;
  const description = 'אוסף מאמרים מעמיקים, מדריכים מעשיים ותובנות על בינה מלאכותית.';

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: homeUrl,
    inLanguage: 'he-IL'
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: homeUrl
  };

  return (
    <>
      <link rel="canonical" href={homeUrl} />
      <link rel="alternate" hrefLang="he-IL" href={homeUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content={SITE_LOCALE} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={homeUrl} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}
