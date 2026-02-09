import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const youtubeSummarizer: Article = {
  id: 'youtube-summarizer',
  slug: 'סיכום-סרטוני-יוטיוב-ai',
  metaTitle: 'אין זמן לצפות? איך לסכם סרטון יוטיוב של שעה ב-2 דקות',
  metaDescription: 'הכלים שחוסכים לכם שעות של צפייה. איך להפוך וידאו לטקסט, לסכם פודקאסטים ולמצוא את הנקודה המדויקת בסרטון בעזרת AI.',
  categoryId: 'personal',
  title: 'איך לסכם הרצאה של שעה ב-2 דקות (בחינם)',
  description: 'העולם מלא בתוכן וידאו, אבל למי יש זמן לצפות בהכל? הכירו את הכלים ש"צופים" בסרטון בשבילכם ומוציאים את התובנות העיקריות.',
  readTimeMinutes: 4,
  lastUpdated: '03/2026',
  imageUrl: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-blue-600 mb-8">
      <h3 className="text-xl font-bold text-blue-900 mb-2">למה לסכם?</h3>
      <p className="text-lg text-blue-800 leading-relaxed">
        סטודנטים צריכים לסכם חומר למבחן, אנשי מקצוע רוצים ללמוד מכנסים בחו"ל, וכולנו רוצים לדעת אם סרטון של 40 דקות שווה את הזמן שלנו.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">פתרון 1: Gemini של גוגל (הכי קל)</h2>
    <p>
      לגוגל יש יתרון ענק: הם הבעלים של YouTube.
      במודל Gemini (בגרסה המתקדמת ולפעמים גם בחינמית), אפשר פשוט להדביק לינק לסרטון יוטיוב ולבקש:
      "תסכם לי את הנקודות העיקריות בסרטון הזה".
      הוא לא צריך "לצפות" בו, הוא קורא את התמלול האוטומטי ומנתח אותו בשניות.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">פתרון 2: תוספי כרום (Glasp / Harpa AI)</h2>
    <p>
      יש תוספים לדפדפן שמוסיפים כפתור קטן מתחת לכל סרטון יוטיוב: "Summarize with ChatGPT".
      <br/>
      <strong>איך זה עובד?</strong>
      <ol className="list-decimal list-inside mt-2">
        <li>מתקינים את התוסף (מומלץ: Glasp).</li>
        <li>נכנסים לסרטון.</li>
        <li>לוחצים על הכפתור בצד.</li>
        <li>הוא מוציא את הטקסט המלא (Transcript), שולח אותו ל-ChatGPT, ומציג לכם סיכום בחלונית צדדית.</li>
      </ol>
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">פתרון 3: סיכום פודקאסטים מצולמים</h2>
    <p>
      אם אתם רוצים לסכם פרק של פודקאסט (כמו של לקס פרידמן או אנדרו הוברמן) שאורך 3 שעות:
      השתמשו בכלים כמו <strong>Snipd</strong> (אפליקציה לפודקאסטים עם AI) או הורידו את התמלול והדביקו ב-Claude (שיש לו זיכרון ארוך מאוד).
    </p>

    <div className="bg-yellow-50 p-6 rounded-xl border-t-4 border-yellow-500 my-8">
      <h3 className="font-bold text-yellow-900 mb-2">מגבלה חשובה</h3>
      <p className="text-yellow-800">
        רוב הכלים עובדים <strong>מעולה באנגלית</strong>, וסביר-מינוס בעברית (כי התמלול האוטומטי של יוטיוב בעברית עדיין לא מושלם). אם הסרטון בעברית, צפו לטעויות ולפעמים עדיף פשוט להגביר מהירות ל-x1.5.
      </p>
    </div>
  </PlainText>
};