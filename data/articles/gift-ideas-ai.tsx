import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const giftIdeasAi: Article = {
  id: 'gift-ideas-ai',
  slug: 'רעיונות-למתנות-ai',
  metaTitle: 'מה לקנות מתנה? ה-AI פותר את הדילמה הנצחית',
  metaDescription: 'נתקעתם בלי רעיון למתנה לחמותכם, לבן הזוג או לעובד שעוזב? ה-AI הוא הקניין האישי שלכם. איך למצוא מתנות מקוריות ומותאמות אישית.',
  categoryId: 'personal',
  title: 'מה לקנות לאדם שיש לו הכל? ה-AI ימצא את התשובה',
  description: 'לבחור מתנה זה סיוט. אנחנו תמיד נופלים לקלישאות (גיפטקארד/בובשם). תנו ל-ChatGPT לעשות את הפרופיילינג ולמצוא מתנה שתגרום להם לבכות מהתרגשות.',
  readTimeMinutes: 4,
  lastUpdated: '06/2026',
  imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-blue-600 mb-8">
      <h3 className="text-xl font-bold text-blue-900 mb-2">למה זה עובד יותר טוב מחיפוש בגוגל?</h3>
      <p className="text-lg text-blue-800 leading-relaxed">
        בגוגל אתם מחפשים "מתנה לגבר בן 40". אתם מקבלים רשימות גנריות של ארנקים ושעונים.
        ב-AI אתם יכולים להזין את <strong>האישיות</strong> של הבן אדם, והוא ימצא חיבורים יצירתיים שלא חשבתם עליהם.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">הפרומפט המושלם למתנה</h2>
    <p>תעתיקו ותמלאו את הפרטים:</p>
    <div className="bg-white border border-slate-300 p-4 rounded-lg font-mono text-sm mb-4">
      "אני מחפש רעיון למתנה לאשתי.
      גיל: 35.
      תחביבים: היא אוהבת יוגה, קפה איכותי, ופודקאסטים על פשע אמיתי.
      היא לא אוהבת: דברים שתופסים אבק בבית (קיטש).
      תקציב: 300-500 ש"ח.
      אירוע: יום נישואין.
      המתנה צריכה להיות מקורית ומרגשת. תציע לי 5 רעיונות ספציפיים, ותסביר למה כל אחד מהם מתאים לה."
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">התוצאות המפתיעות</h2>
    <p>
      הוא לא יציע סתם "מזרן יוגה". הוא יציע:
      <br/>
      1. סדנת יוגה ויין ביקב.
      <br/>
      2. מנוי לקפה ספיישלטי שמגיע עד הבית כל חודש.
      <br/>
      3. כרטיסים להרצאה לייב של פודקאסטר שהיא אוהבת.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">עזרה בכתיבת הברכה</h2>
    <p>
      אחרי שבחרתם מתנה, אל תשברו את הראש על הברכה.
      "תכתוב לי ברכה מרגשת וקצת מצחיקה ליום הנישואין, שתזכיר את המתנה (מכונת הקפה) ואת העובדה שהיא לא יכולה לדבר איתי בבוקר לפני שהיא שותה הפוך."
    </p>
  </PlainText>
};