import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const codingDebugAi: Article = {
  id: 'coding-debug-ai',
  slug: 'תיקון-קוד-באגים-ai',
  metaTitle: 'המתכנת האישי: איך לפתור באגים בקוד בשניות',
  metaDescription: 'תקועים על שגיאה בקוד? ה-AI הוא ה"ברווז גומי" הכי חכם שתפגשו. איך לדבג, להבין שגיאות ולשפר קוד עם ChatGPT ו-Claude.',
  categoryId: 'automation',
  title: 'למה הקוד לא עובד? איך לתקן באגים בלי לשבור את המקלדת',
  description: 'כל מתכנת מכיר את הרגע הזה: הקוד לא רץ, השגיאה לא מובנת, וגוגל לא עוזר. הנה איך להשתמש ב-AI כדי לפתור את הבעיה ולהבין מה קרה.',
  readTimeMinutes: 5,
  lastUpdated: '05/2026',
  imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-slate-900 text-slate-100 p-6 rounded-xl border-r-4 border-blue-500 mb-8">
      <h3 className="text-xl font-bold mb-2">שיטת ה"ברווז גומי" המשודרגת</h3>
      <p className="text-lg leading-relaxed text-slate-300">
        מתכנתים רגילים לדבר לבובת ברווז כדי להסביר את הבעיה ולמצוא פתרון. ה-AI הוא ברווז שעונה בחזרה. ולרוב הוא צודק.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">תרחיש 1: יש שגיאה (Error Message)</h2>
    <p>
      אל תנסו לנחש. פשוט תעתיקו את השגיאה כמו שהיא.
    </p>
    <div className="bg-white border border-slate-300 p-4 rounded-lg font-mono text-sm mb-4">
      "אני מקבל את השגיאה הזו ב-Python:
      IndexError: list index out of range
      הנה הקוד שלי:
      [הדביקו את הקוד]
      למה זה קורה ואיך מתקנים?"
    </div>
    <p>
      הוא לא רק יתן את הקוד המתוקן, הוא יסביר לכם שאתם מנסים לגשת לאיבר ה-11 ברשימה שיש בה רק 10 איברים.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">תרחיש 2: אין שגיאה, אבל זה לא עובד</h2>
    <p>
      אלו הבאגים הכי קשים (Logical Errors). כאן אתם צריכים להסביר לו מה ציפיתם שיקרה.
    </p>
    <div className="bg-white border border-slate-300 p-4 rounded-lg font-mono text-sm mb-4">
      "הקוד הזה אמור למיין את הרשימה מהגדול לקטן, אבל הוא לא משנה כלום. מה פספסתי בלוגיקה?"
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">תרחיש 3: הסבר קוד של מישהו אחר</h2>
    <p>
      נכנסתם לפרויקט חדש ויש שם פונקציה מפחידה שאף אחד לא יודע מה היא עושה?
      תדביקו אותה ותכתבו: "תסביר לי שורה אחר שורה מה הקוד הזה עושה, בעברית פשוטה."
    </p>

    <div className="bg-yellow-50 p-6 rounded-xl border-t-4 border-yellow-500 my-8">
      <h3 className="font-bold text-yellow-900 mb-2">אל תעתיקו עיוור</h3>
      <p className="text-yellow-800">
        ה-AI לפעמים משתמש בספריות ישנות או כותב קוד לא מאובטח. תמיד תבקשו ממנו: "האם זה הפתרון הכי יעיל?" או "האם יש כאן בעיות אבטחה?".
      </p>
    </div>
  </PlainText>
};