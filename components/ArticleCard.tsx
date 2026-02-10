import React from 'react';
import { Article, Category } from '../types';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  category: Category;
  onClick: (id: string) => void;
  priority?: boolean;
}

function unsplashUrl(baseUrl: string, width: number, quality = 70) {
  if (!baseUrl.includes('images.unsplash.com')) return baseUrl;
  return baseUrl
    .replace(/([?&])w=\d+/g, '$1w=' + width)
    .replace(/([?&])q=\d+/g, '$1q=' + quality);
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, category, onClick, priority = false }) => {
  const src = unsplashUrl(article.imageUrl, 700, 70);
  const srcSet = `${unsplashUrl(article.imageUrl, 480, 65)} 480w, ${unsplashUrl(article.imageUrl, 700, 70)} 700w, ${unsplashUrl(article.imageUrl, 1000, 75)} 1000w`;

  return (
    <div 
      className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full cursor-pointer transform hover:-translate-y-1"
      onClick={() => onClick(article.id)}
    >
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${category.color} text-slate-800 flex items-center gap-1`}>
          {category.icon}
          <span>{category.title}</span>
        </div>
        <img 
          src={src}
          srcSet={srcSet}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'low'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{article.readTimeMinutes} דק' קריאה</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>עודכן: {article.lastUpdated}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        
        <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-1">
          {article.description}
        </p>
        
        <div className="flex items-center text-blue-600 font-bold text-sm mt-auto group-hover:gap-2 transition-all">
          <span>קרא עוד</span>
          <ArrowLeft className="w-4 h-4 mr-1" />
        </div>
      </div>
    </div>
  );
};