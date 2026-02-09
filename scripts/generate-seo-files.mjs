import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const publicDir = path.join(root, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

const siteUrl = process.env.SITE_URL || 'http://localhost:3000';

const articlesSource = fs.readFileSync(path.join(root, 'data', 'all_articles_monolith.tsx'), 'utf8');
const categoriesSource = fs.readFileSync(path.join(root, 'data', 'content.tsx'), 'utf8');

const articleRegex = /\{\s*id:\s*'[^']*',[\s\S]*?slug:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?description:\s*'([^']+)'[\s\S]*?lastUpdated:\s*'([^']+)'/g;
const articles = [];
let articleMatch;
while ((articleMatch = articleRegex.exec(articlesSource)) !== null) {
  const [, slug, title, description, lastUpdated] = articleMatch;
  articles.push({ slug, title, description, lastUpdated });
}

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
