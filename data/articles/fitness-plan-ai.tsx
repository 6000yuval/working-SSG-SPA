import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const fitnessPlanAi: Article = {
  id: 'fitness-plan-ai',
  slug: 'תוכנית-אימון-אישית-ai',
  metaTitle: 'מאמן כושר בחינם: איך לבנות תוכנית אימון מותאמת אישית עם AI',
  metaDescription: 'רוצים להיכנס לכושר אבל אין לכם כסף למאמן אישי? כך תשתמשו ב-ChatGPT לבניית תוכנית אימונים ותזונה שמתאימה ללו"ז ולציוד שלכם.',
  categoryId: 'personal',
  title: 'מאמן כושר אישי בחינם: איך לבנות תוכנית שתתמידו בה',
  description: 'רוב תוכניות האימון באינטרנט נכשלות כי הן כלליות מדי. ה-AI יכול לבנות לכם תוכנית שלוקחת בחשבון שיש לכם רק 20 דקות ביום וברך כואבת.',
  readTimeMinutes: 6,
  lastUpdated: '05/2026',
  imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-yellow-50 p-6 rounded-xl border-r-4 border-yellow-500 mb-8">
      <h3 className="text-xl font-bold text-yellow-900 mb-2">אזהרה בריאותית</h3>
      <p className="text-lg text-yellow-800 leading-relaxed">
        ה-AI אינו רופא ואינו מאמן מוסמך. לפני שמתחילים תוכנית אימונים חדשה, התייעצו עם איש מקצוע, במיוחד אם יש לכם בעיות רפואיות.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">למה זה עובד? (התאמה אישית)</h2>
    <p>
      הבעיה עם "תוכנית אימון מהיוטיוב" היא שהיא לא יודעת שיש לכם רק משקולת אחת בבית ושאתם שונאים לרוץ. ה-AI יודע.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">הפרומפט: תהיו ספציפיים בטירוף</h2>
    <div className="bg-white border border-slate-300 p-4 rounded-lg font-mono text-sm mb-4">
      "אני רוצה להיכנס לכושר. תבנה לי תוכנית אימונים שבועית.
      מטרה: חיטוב ועלייה במסת שריר.
      רמה: מתחיל.
      ימים: אני יכול להתאמן 3 פעמים בשבוע, בימים א', ג', ה'.
      זמן: יש לי רק 45 דקות לאימון.
      ציוד: יש לי בבית רק זוג משקולות של 5 קילו ומזרן. אין לי מנוי למכון.
      מגבלות: כואב לי הגב התחתון אז בלי תרגילים שמעמיסים עליו יותר מדי.
      תכין לי טבלה מסודרת עם התרגילים, מספר חזרות וסטים."
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">אל תעצרו שם: תזונה</h2>
    <p>
      "אני שוקל 80 קילו ורוצה לרדת ל-75. אני צמחוני.
      תכין לי תפריט יומי לדוגמה שמכיל 120 גרם חלבון, בלי בשר ובלי דגים. תכלול בבקשה רעיונות לארוחת בוקר, צהריים וערב."
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">המאמן המנטלי</h2>
    <p>
      נשברתם אחרי שבועיים? כתבו לו:
      "אין לי כוח להתאמן היום. תן לי נאום מוטיבציה קצר שיגרום לי לקום מהספה, אבל בלי קלישאות קיטשיות."
    </p>
  </PlainText>
};