import { ReactNode } from 'react';

export interface Category {
  id: string;
  title: string;
  description: string;
  color: string; // Tailwind class for background color
  icon: ReactNode;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface Article {
  id: string;
  slug?: string; // For SEO friendly URLs
  metaTitle?: string; // SEO Title
  metaDescription?: string; // SEO Description
  categoryId: string;
  title: string;
  description: string;
  readTimeMinutes: number;
  lastUpdated: string;
  imageUrl: string;
  content: ReactNode;
}