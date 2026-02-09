import { usePageContext } from 'vike-react/usePageContext';
import { allCategories, getArticlesByCategory } from '../../../lib/content';

export default function Page() {
  const pageContext = usePageContext();
  const { categoryId } = pageContext.routeParams;

  const category = allCategories.find((c) => c.id === categoryId && c.id !== 'all');

  if (!category) {
    return (
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl font-black mb-3">קטגוריה לא נמצאה</h1>
        <a className="text-blue-700 font-semibold" href="/">
          חזרה לעמוד הבית
        </a>
      </main>
    );
  }

  const posts = getArticlesByCategory(category.id);

  return (
    <main className="container mx-auto px-4 py-10 max-w-5xl">
      <nav className="text-sm text-slate-500 mb-6">
        <a href="/" className="hover:underline">בית</a> / <span className="text-slate-700">{category.title}</span>
      </nav>

      <h1 className="text-4xl font-black mb-2">{category.title}</h1>
      <p className="text-slate-600 mb-8">{category.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article key={post.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <a href={`/blog/${post.slug || post.id}`}>
              <img src={post.imageUrl} alt={post.title} className="w-full h-44 object-cover" />
            </a>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                <a href={`/blog/${post.slug || post.id}`} className="hover:text-blue-700">
                  {post.title}
                </a>
              </h2>
              <p className="text-slate-600 text-sm">{post.description}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
