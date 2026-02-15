import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const publicDir = path.join(root, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

const siteUrl = process.env.SITE_URL || 'http://localhost:3000';

const articlesDir = path.join(root, 'data', 'articles');
const categoriesSource = fs.readFileSync(path.join(root, 'data', 'content.tsx'), 'utf8');

const extractField = (source, fieldName) => {
  const regex = new RegExp(`${fieldName}\\s*:\\s*'((?:\\\\'|[^'])*)'`);
  const match = source.match(regex);
  return match ? match[1].replace(/\\'/g, "'") : '';
};

const articleFiles = fs.readdirSync(articlesDir).filter((file) => file.endsWith('.tsx'));
const articles = articleFiles
  .map((file) => {
    const source = fs.readFileSync(path.join(articlesDir, file), 'utf8');
    return {
      slug: extractField(source, 'slug'),
      title: extractField(source, 'title'),
      description: extractField(source, 'description'),
      lastUpdated: extractField(source, 'lastUpdated')
    };
  })
  .filter((article) => article.slug);

const categoryRegex = /\{\s*id:\s*'([^']+)'\s*,\s*title:/g;
const categoryIds = [];
let categoryMatch;
while ((categoryMatch = categoryRegex.exec(categoriesSource)) !== null) {
  if (categoryMatch[1] !== 'all') categoryIds.push(categoryMatch[1]);
}

const urls = [
  '/',
  ...articles.map((a) => `/blog/${a.slug}`),
  ...categoryIds.map((id) => `/category/${id}`)
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((u) => `  <url><loc>${siteUrl}${u}</loc></url>`)
  .join('\n')}\n</urlset>\n`;

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;

const rssItems = articles
  .map((a) => {
    const [month, year] = a.lastUpdated.split('/');
    const pubDate = new Date(Number(year), Number(month) - 1, 1).toUTCString();
    return `    <item>\n      <title><![CDATA[${a.title}]]></title>\n      <link>${siteUrl}/blog/${a.slug}</link>\n      <guid>${siteUrl}/blog/${a.slug}</guid>\n      <description><![CDATA[${a.description}]]></description>\n      <pubDate>${pubDate}</pubDate>\n    </item>`;
  })
  .join('\n');

const feed = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>AI EduBlog IL</title>\n    <link>${siteUrl}</link>\n    <description>מדריכים ותובנות על בינה מלאכותית</description>\n${rssItems}\n  </channel>\n</rss>\n`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8');
fs.writeFileSync(path.join(publicDir, 'feed.xml'), feed, 'utf8');
