import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const jobsDisappearing2030: Article = {
  id: 'jobs-disappearing-2030',
  slug: 'jobs-disappearing-2030-future-work',
  metaTitle: 'המקצועות שבסכנה ב-2030: המדריך המעודכן ל-2026',
  metaDescription: 'חשבנו שהרובוטים יחליפו את הפועלים? טעינו. ב-2026 אנחנו רואים שהמתכנתים והמעצבים הם הראשונים להיפגע. ניתוח שוק העבודה החדש.',
  categoryId: 'work',
  title: 'המקצועות שייעלמו עד 2030 (תחזית מעודכנת לפברואר 2026)',
  description: 'התחזיות הישנות התנפצו. הבינה המלאכותית לא לוקחת את העבודות הפיזיות, היא לוקחת את המשרות המשרדיות. מי בטוח, מי בצרות ומה כדאי ללמוד עכשיו?',
  readTimeMinutes: 9,
  lastUpdated: '02/2026',
  imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-blue-600 mb-8">
      <h3 className="text-xl font-bold text-blue-900 mb-2">ההפתעה הגדולה של העשור 😲</h3>
      <p className="text-lg text-blue-800 leading-relaxed">
        במשך עשורים פחדנו שרובוטים ייקחו את עבודות הכפיים. בפועל, ב-2026, הרבה יותר קשה לבנות רובוט שמתקן ברז (שרברב) מאשר תוכנה שכותבת קוד (מתכנת).
        המהפכה פוגעת דווקא במעמד הביניים המשכיל: עורכי דין זוטרים, מפתחי תוכנה מתחילים, גרפיקאים ומתרגמים.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">מי נמצא באזור הסכנה המיידית?</h2>
    
    <div className="space-y-6">
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 text-lg mb-2">1. מתכנתים זוטרים (Juniors)</h3>
        <p className="text-slate-600">
          כלים כמו Cursor ו-Devin עושים היום עבודה של מתכנת מתחיל ב-5 דקות. הביקוש ל"כותבי קוד" יורד. הביקוש ל"ארכיטקטים של מערכת" שיודעים לנהל את ה-AI - עולה בטירוף.
        </p>
      </div>
      
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 text-lg mb-2">2. שירות לקוחות ותמיכה (Tier 1)</h3>
        <p className="text-slate-600">
          הבוטים הקוליים של 2026 נשמעים אנושיים לגמרי, עם אמפתיה וסבלנות. מוקדים טלפוניים שלמים עוברים לאוטומציה. נשארים רק מנהלי מקרים מורכבים.
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 text-lg mb-2">3. יוצרי תוכן גנרי (SEO/Copy)</h3>
        <p className="text-slate-600">
          האינטרנט מוצף בתוכן AI. גוגל וטיקטוק כבר לא צריכים עוד מאמרים בינוניים. מי שכותב "5 טיפים לניקוי שטיחים" - הוחלף. מי שמביא סיפור אישי, דעה ורגש - פורח.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">החדשות הטובות: המקצועות הבטוחים</h2>
    <p>
      מה ה-AI לא יודע לעשות ב-2026?
      <br/>
      1. <strong>עבודות פיזיות מורכבות:</strong> חשמלאי, ספר, מטפל בקשישים, טבח במסעדת גורמה. הידיים שלנו עדיין מתוחכמות יותר מכל רובוט.
      <br/>
      2. <strong>ניהול אנשים ופסיכולוגיה:</strong> לפתור סכסוך בין עובדים, להוביל משא ומתן רגיש, ללמד כיתה של ילדים עם קשיי קשב.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">העתיד: המקצוע "היברידי"</h2>
    <p>
      אל תשאלו "איזה מקצוע ללמוד". תשאלו "איך אני משלב AI במקצוע שלי".
      <br/>
      <strong>עורך דין + AI:</strong> יכול לעבור על 500 חוזים ביום במקום 2.
      <br/>
      <strong>רופא + AI:</strong> יכול לאבחן מחלות נדירות בדיוק של 99%.
      <br/>
      המנצחים של 2030 יהיו ה"קנטאורים" - חצי אדם, חצי בינה מלאכותית.
    </p>
  </PlainText>
};