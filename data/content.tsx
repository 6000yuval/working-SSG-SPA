import React from 'react';
import { Article, Category, GlossaryTerm } from '../types';
import { BookOpen, Zap, Brain, CheckCircle, Home, Briefcase, Layers, Shield, Star } from 'lucide-react';

export const CATEGORIES: Category[] = [
  { id: 'all', title: 'כל המאמרים', description: 'כל התכנים באתר במקום אחד', color: 'bg-slate-200', icon: <Layers className="w-5 h-5" /> },
  { id: 'basics', title: 'הבסיס: מנגנון הפעולה', description: 'הבנת אופן הפעולה הטכני של מודלי שפה וההבדל בינם לבין מנועי חיפוש.', color: 'bg-slate-100', icon: <BookOpen className="w-5 h-5" /> },
  { id: 'skills', title: 'מיומנות (הנדסת פרומפט)', description: 'כיצד לנסח קלט (Prompt) בצורה שתמקסם את איכות הפלט.', color: 'bg-yellow-100', icon: <Zap className="w-5 h-5" /> },
  { id: 'thinking', title: 'עיבוד וניתוח', description: 'שימוש במערכת לצורך פירוק בעיות, סיעור מוחות וניתוח לוגי.', color: 'bg-orange-100', icon: <Brain className="w-5 h-5" /> },
  { id: 'reliability', title: 'בדיקה ואמינות', description: 'זיהוי מידע שגוי, אימות עובדות והצלבת מקורות.', color: 'bg-blue-100', icon: <CheckCircle className="w-5 h-5" /> },
  { id: 'personal', title: 'שימוש אישי', description: 'יישומים יומיומיים: ניסוח טקסטים, ארגון מידע ולימוד.', color: 'bg-purple-100', icon: <Home className="w-5 h-5" /> },
  { id: 'work', title: 'עבודה ולימודים', description: 'כתיבה עסקית, סיכום מסמכים וניתוח נתונים.', color: 'bg-amber-100', icon: <Briefcase className="w-5 h-5" /> },
  { id: 'automation', title: 'פיתוח ואוטומציה', description: 'Vibe Coding, בניית אתרים ושימוש בכלי AI מתקדמים.', color: 'bg-red-100', icon: <Layers className="w-5 h-5" /> },
  { id: 'safety', title: 'בטיחות ופרטיות', description: 'שמירה על מידע אישי ומגבלות השימוש.', color: 'bg-emerald-100', icon: <Shield className="w-5 h-5" /> },
  { id: 'master', title: 'מדריכי עומק', description: 'סקירות מקיפות על מתודולוגיות עבודה מתקדמות.', color: 'bg-indigo-100', icon: <Star className="w-5 h-5" /> },
];

export const GLOSSARY: GlossaryTerm[] = [
  { term: 'Prompt (קלט)', definition: 'הטקסט המוזן למערכת, אשר משמש כבסיס לחישוב ההסתברויות ליצירת הטקסט הבא.' },
  { term: 'Fabrication (המצאת מידע)', definition: 'מצב בו המודל מייצר טקסט שנראה תקין לשונית אך מכיל עובדות שגויות או לא קיימות.' },
  { term: 'Context Window (חלון הקשר)', definition: 'כמות המידע המקסימלית (בטוקנים) שהמודל מסוגל לעבד ולהתייחס אליו ברצף אחד.' },
  { term: 'Token (אסימון)', definition: 'יחידת המידע הבסיסית שהמודל מעבד ומנבא. בעברית מילה עשויה להתפרק למספר טוקנים.' },
  { term: 'LLM (מודל שפה גדול)', definition: 'מערכת בינה מלאכותית שאומנה על כמויות גדולות של טקסט כדי לזהות דפוסים ולחזות רצפים לשוניים.' },
  { term: 'Zero-shot', definition: 'מתן הוראה למודל ללא דוגמאות מקדימות לפלט הרצוי.' },
  { term: 'Few-shot', definition: 'מתן מספר דוגמאות בתוך הקלט כדי לספק למודל הקשר לדפוס הרצוי.' },
  { term: 'Vibe Coding', definition: 'גישת פיתוח בה המשתמש מתאר את התוצאה הרצויה בשפה טבעית, וה-AI כותב ומריץ את הקוד.' },
  { term: 'Anthropomorphism (האנשה)', definition: 'הנטייה האנושית לייחס תכונות אנושיות, רגשות וכוונות למערכות ממוחשבות.' },
  { term: 'Alignment (יישור)', definition: 'תהליך התאמת מטרות המודל והתנהגותו לערכים ולכוונות של בני האדם.' },
];

const articleModules = import.meta.glob('./articles/*.tsx', { eager: true }) as Record<string, Record<string, unknown>>;

function isArticle(value: unknown): value is Article {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.id === 'string' &&
    typeof candidate.slug === 'string' &&
    typeof candidate.title === 'string' &&
    typeof candidate.categoryId === 'string' &&
    typeof candidate.description === 'string'
  );
}

const discoveredArticles = Object.values(articleModules)
  .flatMap((mod) => Object.values(mod))
  .filter(isArticle);

// Keep deterministic order and guard against accidental duplicate slugs.
const seenSlugs = new Set<string>();
export const ARTICLES: Article[] = discoveredArticles
  .slice()
  .sort((a, b) => a.id.localeCompare(b.id))
  .filter((article) => {
    if (seenSlugs.has(article.slug)) return false;
    seenSlugs.add(article.slug);
    return true;
  });