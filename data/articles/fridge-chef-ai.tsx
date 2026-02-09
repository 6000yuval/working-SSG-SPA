import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const fridgeChefAi: Article = {
  id: 'fridge-chef-ai',
  slug: 'מתכונים-שאריות-מקרר-ai',
  metaTitle: 'השף הפרטי שלכם: מתכונים משאריות במקרר עם AI',
  metaDescription: 'לא יודעים מה לבשל? צלמו את המקרר או רשמו את המצרכים, וקבלו מתכון מושלם ב-5 שניות. בלי לרוץ לסופר.',
  categoryId: 'personal',
  title: 'מה לבשל היום? תנו ל-AI להמציא ארוחה מהשאריות במקרר',
  description: 'יש לכם בצל, חצי קוטג\' וקישוא עייף? במקום לזרוק, בואו נראה איך ChatGPT הופך את זה לארוחת ערב מפתיעה.',
  readTimeMinutes: 3,
  lastUpdated: '06/2026',
  imageUrl: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-green-50 p-6 rounded-xl border-r-4 border-green-600 mb-8">
      <h3 className="text-xl font-bold text-green-900 mb-2">למה זה גאוני?</h3>
      <p className="text-lg text-green-800 leading-relaxed">
        חיפוש בגוגל דורש מכם לדעת מה אתם רוצים להכין ("מתכון לפשטידה").
        ה-AI עובד הפוך: אתם אומרים לו מה <strong>יש</strong> לכם, והוא אומר לכם מה אפשר להכין. זה חוסך בזבוז מזון וכסף.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">דרך 1: רשימת מלאי</h2>
    <p>פשוט תכתבו לו:</p>
    
    <div className="bg-white border-2 border-slate-200 p-6 rounded-xl shadow-sm mb-6">
      <p className="font-bold text-slate-500 mb-2 uppercase tracking-wide text-sm">הפרומפט להעתקה:</p>
      <div className="font-mono text-xl text-slate-800 leading-relaxed whitespace-pre-wrap">
"יש לי במקרר: 2 ביצים, גבינה צהובה, טורטיה, קצת תרד ורסק עגבניות.
יש לי בבית תבלינים בסיסיים ושמן זית.

תציע לי 3 רעיונות לארוחת ערב מהירה (עד 15 דקות עבודה).
אני לא רוצה ללכת לסופר."
      </div>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">דרך 2: צילום המקרר (GPT-4o)</h2>
    <p>
      אם אתם משתמשים בגרסה בתשלום של ChatGPT (או במודלים חזקים אחרים שתומכים בתמונות):
      <br/>
      1. פתחו את המקרר.
      <br/>
      2. צלמו תמונה של המדפים.
      <br/>
      3. כתבו: "מה אני יכול להכין מזה?"
      <br/>
      הוא יזהה את המוצרים בתמונה ויציע מתכונים. זה מרגיש כמו קסם.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">התאמות אישיות (דיאטות)</h2>
    <p>
      הכוח האמיתי הוא בהתאמה:
      "תכין לי מתכון ממה שיש לי, אבל שיהיה <strong>טבעוני</strong> / ללא גלוטן / עשיר בחלבון."
      או: "אני לא יודע לחתוך בצל, תן לי מתכון שלא דורש קיצוץ."
    </p>

    <div className="bg-red-50 p-6 rounded-xl border-t-4 border-red-500 my-8">
      <h3 className="font-bold text-red-900 mb-2">טיפ בטיחות</h3>
      <p className="text-red-800">
        לפעמים הוא מציע שילובי טמפרטורה/זמן אפייה לא הגיוניים. תמיד תפעילו שיקול דעת. אם הוא אומר לשים עוף בתנור ל-5 דקות, הוא כנראה טועה והעוף יישאר חי.
      </p>
    </div>
  </PlainText>
};