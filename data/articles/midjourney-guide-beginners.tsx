import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const midjourneyGuideBeginners: Article = {
  id: 'midjourney-guide-beginners',
  slug: 'midjourney-v7-guide-2026',
  metaTitle: 'מדריך Midjourney v7 (2026): האתר החדש, עריכה ודמויות עקביות',
  metaDescription: 'שכחו מדיסקורד. ב-2026 מידג\'רני עובד דרך אתר מדהים. למדו איך להשתמש במודל v7 ליצירת תמונות פוטוריאליסטיות, לשמור על דמויות אחידות ולערוך תמונות בקלות.',
  categoryId: 'skills',
  title: 'מדריך Midjourney v7: כבר לא צריך דיסקורד (המהפכה של 2026)',
  description: 'במשך שנים מידג\'רני היה "הכלי המעצבן בדיסקורד". זה נגמר. האתר החדש והמודל v7 הפכו אותו לכלי הגרפי הטוב בעולם. הנה איך שולטים בו.',
  readTimeMinutes: 12,
  lastUpdated: '02/2026',
  imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-green-50 p-6 rounded-xl border-r-4 border-green-600 mb-8">
      <h3 className="text-xl font-bold text-green-900 mb-2">ברוך הבא לאינטרנט 🌐</h3>
      <p className="text-lg text-green-800 leading-relaxed">
        החדשות הכי טובות של 2025-2026: <strong>לא צריך יותר את דיסקורד</strong>.
        ל-Midjourney יש אתר רשמי (Alpha/Beta שכבר פתוח לכולם), והוא נוח, מהיר ואינטואיטיבי. יש סליידרים, יש כפתורים, ויש גלריה מסודרת. סוף עידן הפקודות המסובכות.
      </p>
    </div>

    <h2 id="why" className="text-2xl font-bold text-slate-900 mt-12 mb-4">מה חדש ב-Model v7?</h2>
    <p>
      מודל v7 הביא איתו שתי בשורות ענקיות:
      1. <strong>טקסט מושלם:</strong> סוף סוף אפשר לכתוב שלטים, לוגואים וכותרות בתוך התמונה, והוא מאיית אותם נכון (באנגלית) ב-100% מהמקרים.
      2. <strong>הבנת ניואנסים:</strong> הוא מבדיל בין "חתול על כובע" לבין "כובע על חתול" בצורה הרבה יותר טובה מקודמיו.
    </p>

    <h2 id="cref" className="text-2xl font-bold text-slate-900 mt-12 mb-4">הפיצ'ר שחיכינו לו: דמויות עקביות (Cref)</h2>
    <p>
      רוצים ליצור ספר ילדים או קומיקס עם אותה דמות?
      באתר החדש, אתם גוררים תמונה של הדמות לתוך שדה "Character Reference" (או מסמנים בסיכה).
      מעכשיו, כל תמונה שתיצרו תשתמש באותם פנים, אותו שיער ואותם בגדים. זה ה-Game Changer הגדול ביותר ליוצרים.
    </p>

    <h2 id="editor" className="text-2xl font-bold text-slate-900 mt-12 mb-4">עורך התמונות החדש (Editor)</h2>
    <p>
      יצאה תמונה יפה אבל היד עקומה? או שאתם רוצים להחליף את החולצה?
      כבר לא צריך פוטושופ. לוחצים על <strong>Edit</strong> באתר.
      אתם יכולים "למרוח" (Inpaint) אזור ספציפי ולכתוב מה לשים שם במקום.
      אפשר גם להרחיב את התמונה (Outpaint) לכל הכיוונים בגרירה פשוטה.
    </p>

    <h2 id="parameters" className="text-2xl font-bold text-slate-900 mt-12 mb-4">פרמטרים שעדיין חשוב להכיר</h2>
    <p>
      למרות שיש כפתורים באתר, הפרמטרים הישנים עדיין עובדים ונותנים שליטה מדויקת:
    </p>
    <ul className="list-disc list-inside space-y-4 mt-2">
      <li>
        <strong>--p (Personalization):</strong> קוד שלומד את הטעם האישי שלכם. אחרי שתדרגו מספיק תמונות באתר, תוסיפו `--p` והוא ייצר סגנון שמותאם בול למה שאתם אוהבים.
      </li>
      <li>
        <strong>--sref (Style Reference):</strong> אהבתם עיצוב של מישהו אחר? קחו את ה-URL של התמונה שלו, שימו ב-Style Reference, וה-AI יעתיק את "האווירה" והצבעוניות בלי להעתיק את התוכן.
      </li>
    </ul>
  </PlainText>
};