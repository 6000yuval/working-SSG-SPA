import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const contractReviewAi: Article = {
  id: 'contract-review-ai',
  slug: 'בדיקת-חוזה-שכירות-ai',
  metaTitle: 'לפני שחותמים: איך לבדוק חוזה שכירות בעזרת AI',
  metaDescription: 'קיבלתם חוזה ארוך ומפחיד? תנו ל-Claude או ChatGPT לסרוק אותו ולמצוא את "העזים" והסעיפים הבעייתיים. מדריך זהיר.',
  categoryId: 'personal',
  title: 'עורך דין דיגיטלי: בדיקת חוזים עם AI (בזהירות!)',
  description: 'חוזים נועדו להיות קשים לקריאה. ה-AI יכול לקרוא 20 עמודים בשניה ולסמן לכם בדיוק איפה מנסים לסדר אתכם. כך תעשו את זה נכון.',
  readTimeMinutes: 6,
  lastUpdated: '04/2026',
  imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-red-50 p-6 rounded-xl border-r-4 border-red-600 mb-8">
      <h3 className="text-xl font-bold text-red-900 mb-2">אזהרה משפטית חמורה ⚖️</h3>
      <p className="text-lg text-red-800 leading-relaxed">
        <strong>ה-AI אינו עורך דין.</strong> הוא יכול לטעות, לפספס דברים קריטיים או להמציא חוקים. המדריך הזה נועד לעזור לכם להבין את החוזה טוב יותר, אבל <strong>בשום אופן</strong> לא מחליף ייעוץ משפטי מקצועי. השתמשו בזה ככלי עזר בלבד.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">איך מעלים את החוזה?</h2>
    <p>
      רוב החוזים מגיעים כקובץ PDF או Word.
      השתמשו ב-Claude (מומלץ בגלל יכולת הקריאה המדויקת שלו) או ב-ChatGPT Plus.
      פשוט גררו את הקובץ לחלונית הצ'אט.
      <br/>
      <em>טיפ פרטיות:</em> אם יש פרטים אישיים (ת"ז, שמות), מחקו אותם מהקובץ לפני ההעלאה.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">מה שואלים? (הפרומפטים)</h2>
    
    <div className="space-y-4">
      <div className="bg-white border border-slate-300 p-4 rounded-lg">
        <p className="font-bold text-slate-800 mb-2">1. סיכום בשפה פשוטה</p>
        <p className="text-sm font-mono text-slate-600">"תסכם לי את החוזה הזה בעברית פשוטה. מה ההתחייבויות העיקריות שלי? מה סכום השכירות ומתי משלמים?"</p>
      </div>

      <div className="bg-white border border-slate-300 p-4 rounded-lg">
        <p className="font-bold text-slate-800 mb-2">2. חיפוש "עזים" (Red Flags)</p>
        <p className="text-sm font-mono text-slate-600">"תעבור על החוזה ותחפש סעיפים שנראים חריגים לרעה עבור השוכר, או סעיפים דרקוניים שאינם מקובלים בחוזה שכירות סטנדרטי בישראל."</p>
      </div>

      <div className="bg-white border border-slate-300 p-4 rounded-lg">
        <p className="font-bold text-slate-800 mb-2">3. תרחישי קיצון</p>
        <p className="text-sm font-mono text-slate-600">"מה קורה לפי החוזה אם אני רוצה לעזוב באמצע השנה? האם יש קנס יציאה? האם אני חייב למצוא דייר חלופי?"</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">השוואה לסטנדרט</h2>
    <p>
      אפשר לבקש: "האם סעיף התיקונים בחוזה הזה (סעיף 8) הוא סטנדרטי? מי בדרך כלל אמור לשלם על תיקון דוד שמש?"
      הוא יסביר לכם מה נהוג בשוק, וכך תדעו אם יש לכם קייס להתמקח עם בעל הדירה.
    </p>
  </PlainText>
};