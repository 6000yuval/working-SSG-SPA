import React, { useState, useMemo } from 'react';
import { ARTICLES, CATEGORIES } from './data/content';
import { ArticleCard } from './components/ArticleCard';
import { ArticleView } from './components/ArticleView';
import { CategoryFilter } from './components/CategoryFilter';
import { Brain, Search, Sparkles } from 'lucide-react';

type ViewState = 'home' | 'article';

function App() {
  const [view, setView] = useState<ViewState>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Derived state for filtering
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter(article => {
      const matchesCategory = selectedCategory === 'all' || article.categoryId === selectedCategory;
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            article.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeArticle = useMemo(() => {
    return ARTICLES.find(a => a.id === selectedArticleId);
  }, [selectedArticleId]);

  // Handlers
  const handleArticleClick = (id: string) => {
    setSelectedArticleId(id);
    setView('article');
  };

  const handleBack = () => {
    setView('home');
    setSelectedArticleId(null);
  };

  const handleLogoClick = () => {
    setView('home');
    setSelectedArticleId(null);
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={handleLogoClick}
          >
            <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
              <Brain className="w-6 h-6" />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-800">
              AI<span className="text-blue-600">Edu</span>Blog
            </span>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-2 w-64 border border-transparent focus-within:border-blue-300 focus-within:bg-white transition-all">
            <Search className="w-4 h-4 text-slate-400 ml-2" />
            <input 
              type="text" 
              placeholder="חפש מאמר..." 
              className="bg-transparent border-none outline-none text-sm w-full placeholder-slate-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        
        {view === 'home' && (
          <div className="animate-fade-in space-y-10">
            
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-16 text-white overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse delay-700"></div>
              
              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-200 mb-6 border border-white/10">
                  <Sparkles className="w-3 h-3" />
                  <span>המדריך השלם לבינה מלאכותית</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                  להבין את העתיד,<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    לפני שהוא קורה.
                  </span>
                </h1>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                  אוסף מאמרים מעמיקים, מדריכים מעשיים ותובנות על המהפכה הטכנולוגית הגדולה של דורנו. בלי סיסמאות, תכל'ס ידע.
                </p>
                <div className="flex flex-wrap gap-3">
                   {CATEGORIES.slice(1, 4).map(cat => (
                     <button 
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 transition-all"
                     >
                       <div className="bg-white/10 p-1.5 rounded-lg">{cat.icon}</div>
                       <span className="font-bold text-sm">{cat.title}</span>
                     </button>
                   ))}
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="sticky top-20 z-40 bg-slate-50/95 backdrop-blur py-2">
              <CategoryFilter 
                categories={CATEGORIES} 
                selectedCategoryId={selectedCategory} 
                onSelect={setSelectedCategory} 
              />
            </div>

            {/* Articles Grid */}
            <div className="space-y-4">
               <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-800">
                    {selectedCategory === 'all' ? 'פוסטים אחרונים' : CATEGORIES.find(c => c.id === selectedCategory)?.title}
                  </h2>
                  <span className="text-sm text-slate-500 font-medium bg-white px-3 py-1 rounded-full border border-slate-200">
                    {filteredArticles.length} מאמרים
                  </span>
               </div>

               {filteredArticles.length > 0 ? (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {filteredArticles.map((article) => (
                     <ArticleCard 
                       key={article.id} 
                       article={article} 
                       category={CATEGORIES.find(c => c.id === article.categoryId) || CATEGORIES[0]}
                       onClick={handleArticleClick}
                     />
                   ))}
                 </div>
               ) : (
                 <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
                   <div className="bg-slate-50 inline-block p-4 rounded-full mb-4">
                     <Search className="w-8 h-8 text-slate-400" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-700 mb-2">לא נמצאו מאמרים</h3>
                   <p className="text-slate-500">נסה לשנות את קטגוריית הסינון או את מילות החיפוש</p>
                   <button 
                     onClick={() => {setSelectedCategory('all'); setSearchQuery('');}}
                     className="mt-6 text-blue-600 font-bold hover:underline"
                   >
                     נקה סינון
                   </button>
                 </div>
               )}
            </div>
          </div>
        )}

        {view === 'article' && activeArticle && (
          <ArticleView 
            article={activeArticle} 
            category={CATEGORIES.find(c => c.id === activeArticle.categoryId)}
            onBack={handleBack} 
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-sm">
              © {new Date().getFullYear()} AI EduBlog. כל הזכויות שמורות. נבנה באמצעות React & Tailwind.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors text-sm font-bold">אודות</a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors text-sm font-bold">מדיניות פרטיות</a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors text-sm font-bold">צור קשר</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;