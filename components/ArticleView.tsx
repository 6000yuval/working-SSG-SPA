import React, { useEffect, useRef } from 'react';
import { Article, Category } from '../types';
import { ArrowRight, Clock, Calendar, Share2 } from 'lucide-react';

interface ArticleViewProps {
  article: Article;
  category: Category | undefined;
  onBack: () => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ article, category, onBack }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle SEO title updates
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = article.metaTitle || article.title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && article.metaDescription) {
      metaDesc.setAttribute('content', article.metaDescription);
    }

    return () => {
      document.title = 'AI בעברית | המדריך לבינה מלאכותית';
    };
  }, [article]);

  // Handle Internal Links (TOC) Click Interception
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      // Only intercept links starting with #
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const id = href.slice(1);
        const element = document.getElementById(id);
        if (element) {
          // Offset for sticky header (approx 80px)
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };

    const contentDiv = contentRef.current;
    if (contentDiv) {
      contentDiv.addEventListener('click', handleAnchorClick);
    }

    return () => {
      if (contentDiv) {
        contentDiv.removeEventListener('click', handleAnchorClick);
      }
    };
  }, [article]);

  const getDateString = (dateStr: string) => {
    try {
      const [month, year] = dateStr.split('/');
      return `${year}-${month}-01`;
    } catch (e) {
      return new Date().toISOString().split('T')[0];
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.metaTitle || article.title,
    "description": article.metaDescription || article.description,
    "image": article.imageUrl,
    "datePublished": getDateString(article.lastUpdated),
    "dateModified": getDateString(article.lastUpdated),
    "author": {
      "@type": "Person",
      "name": "Alex"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI בעברית",
      "logo": {
        "@type": "ImageObject",
        "url": "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-12 animate-fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <button 
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium"
      >
        <ArrowRight className="w-5 h-5" />
        <span>חזרה למאמרים</span>
      </button>

      <article className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Hero Image */}
        <div className="h-64 md:h-96 w-full relative">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <div className="absolute bottom-0 right-0 p-6 md:p-10 text-white w-full">
            {category && (
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-slate-900 mb-4 ${category.color}`}>
                {category.icon}
                <span>{category.title}</span>
              </div>
            )}
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight drop-shadow-md">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-sm md:text-base font-medium text-slate-200">
               <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTimeMinutes} דקות קריאה</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>עודכן: {article.lastUpdated}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-12">
          {/* Summary / Lead */}
          <div className="text-xl md:text-2xl font-medium text-slate-800 mb-10 leading-relaxed border-r-4 border-blue-500 pr-6">
            {article.description}
          </div>

          {/* Main Body */}
          <div ref={contentRef} className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
            {article.content}
          </div>

          {/* Footer Actions */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
            <button 
              onClick={() => alert('הקישור הועתק!')}
              className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors"
            >
              <Share2 className="w-5 h-5" />
              <span>שתף מאמר</span>
            </button>
            <button 
              onClick={onBack}
              className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-full font-bold transition-colors"
            >
              קרא עוד מאמרים
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};