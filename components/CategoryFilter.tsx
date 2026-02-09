import React from 'react';
import { Category } from '../types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategoryId: string;
  onSelect: (id: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategoryId, onSelect }) => {
  return (
    <div className="w-full overflow-x-auto pb-4 no-scrollbar">
      <div className="flex gap-3 min-w-max px-2">
        {categories.map((cat) => {
          const isSelected = selectedCategoryId === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all duration-200 border
                ${isSelected 
                  ? 'bg-slate-800 text-white border-slate-800 shadow-lg scale-105' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'}
              `}
            >
              {isSelected ? cat.icon : <span className="opacity-50 grayscale">{cat.icon}</span>}
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};