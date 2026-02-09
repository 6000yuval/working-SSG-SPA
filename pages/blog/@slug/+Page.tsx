import { usePageContext } from 'vike-react/usePageContext';
import { allCategories, getArticleBySlug, getRelatedArticles } from '../../../lib/content';

export default function Page() {
  const pageContext = usePageContext();
  const slug = pageContext.routeParams.slug;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl font-black mb-3">הפוסט לא נמצא</h1>
        <a className="text-blue-700 font-semibold" href="/">
          חזרה לעמוד הבית
        </a>
      </main>
    );
  }

  const category = allCategories.find((c) => c.id === article.categoryId);
  const related = getRelatedArticles(article.id, article.categoryId, 3);

  return (
    <main className="container mx-auto px-4 py-10 max-w-4xl">
      <nav className="text-sm text-slate-500 mb-6">
        <a href="/" className="hover:underline">בית</a> /{' '}
        <a href={`/category/${article.categoryId}`} className="hover:underline">{category?.title || 'קטגוריה'}</a> /{' '}
        <span className="text-slate-700">{article.title}</span>
      </nav>

      <article>
        <img src={article.imageUrl} alt={article.title} className="w-full rounded-xl mb-6 max-h-[420px] object-cover" />
        <h1 className="text-4xl font-black mb-4">{article.title}</h1>
        <p className="text-slate-600 mb-8">{article.description}</p>

        <div className="prose prose-slate max-w-none prose-headings:font-bold">
          {article.content}
        </div>
      </article>

      {related.length > 0 && (
        <section className="mt-14 border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">פוסטים קשורים</h2>
          <ul className="space-y-2">
            {related.map((item) => (
              <li key={item.id}>
                <a href={`/blog/${item.slug || item.id}`} className="text-blue-700 hover:underline">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
