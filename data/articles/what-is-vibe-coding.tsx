import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const whatIsVibeCoding: Article = {
  id: 'what-is-vibe-coding',
  slug: 'what-is-vibe-coding',
  metaTitle: 'מה זה Vibe Coding? הטרנד ששינה את עולם הפיתוח ב-2026',
  metaDescription: 'שכחו מלקודד סינטקס. היום עושים "וייב". המדריך המלא ל-Vibe Coding: איך אנשים שלא יודעים לכתוב שורת קוד אחת בונים אפליקציות שלמות בעזרת AI.',
  categoryId: 'automation',
  title: 'מה זה Vibe Coding? (ולמה ב-2026 זה הסטנדרט החדש)',
  description: 'פעם, כדי לבנות אפליקציה, הייתם צריכים ללמוד מדעי המחשב 4 שנים. היום? אתם צריכים לדעת להסביר מה אתם רוצים, ולתת ל-AI לשבור את הראש. ברוכים הבאים לעידן ה-Vibe Coding.',
  readTimeMinutes: 6,
  lastUpdated: '06/2026',
  imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-purple-50 p-6 rounded-xl border-r-4 border-purple-600 mb-8">
      <h3 className="text-xl font-bold text-purple-900 mb-2">אנדריי קרפתי צדק</h3>
      <p className="text-lg text-purple-800 leading-relaxed">
        לפני שנתיים, אנדריי קרפתי (בכיר ה-AI האגדי) טבע את המונח "Vibe Coding". כולם צחקו.
        היום, ב-2026, זו המציאות. רוב הקוד בעולם נכתב ע"י AI, ובני האדם רק בודקים את ה"וייב" - האם זה עובד? האם זה מרגיש נכון?
      </p>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">רגע, מה זה Vibe Coding?</h2>
    <p>
      <strong>Vibe Coding</strong> (וייב קודינג) הוא מונח שמתאר פיתוח תוכנה שבו המתכנת כבר לא כותב את הקוד בעצמו.
      במקום לכתוב פונקציות ב-JavaScript, אתם כותבים ל-AI בשפה טבעית:
      "תבנה לי מחשבון ורוד עם כפתור שעושה מיאו, ושומר את ההיסטוריה בענן".
    </p>
    <p>
      ה-AI (כמו Claude 4.6 או GPT-5.2) כותב את הקוד. הכלים (כמו Cursor) מריצים אותו.
      אם יש באג, הכלים של 2026 יודעים לעשות <strong>Self-Healing</strong> (ריפוי עצמי) – הם רואים את השגיאה ומתקנים אותה לבד, בלי שתדעו בכלל שהייתה בעיה.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">למה זה קורה דווקא עכשיו?</h2>
    <p>
      כי המודלים חצו את "סף האמינות". ב-2024, ה-AI היה כותב קוד עם באגים ב-30% מהזמן. הייתם צריכים לבדוק אותו.
      ב-2026, המודלים מדויקים ב-99%. זה מאפשר לנו לסמוך עליהם ולהתמקד במוצר, בעיצוב ובחוויה, במקום בנקודה-פסיק שחסרה.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">האם זה הסוף של המתכנתים?</h2>
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-4">
      <p className="text-slate-700 font-medium">
        התשובה הקצרה: לא.
        <br/><br/>
        התשובה הארוכה: זה הסוף של "כותבי הקוד" (Coders), אבל זו ההתחלה של "בוני המוצרים" (Builders).
        מתכנתים היום הפכו ל"מנהלי מוצר טכניים". הם מנהלים צוות של סוכני AI שכותבים את הקוד. היכולת החשובה ביותר היום היא לא לזכור סינטקס, אלא לדעת להסביר לוגיקה ולבנות ארכיטקטורה.
      </p>
    </div>
  </PlainText>
};