import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const cursorAiCodingBeginners: Article = {
  id: 'cursor-ai-coding-beginners',
  slug: 'cursor-ai-coding-guide-2026-vibe-coding',
  metaTitle: 'מדריך Cursor AI 2026: איך לתכנת בלי לכתוב קוד (Vibe Coding Masterclass)',
  metaDescription: 'המדריך המקיף ביותר בישראל ל-Cursor AI בגרסת 2026. למדו את שיטת ה-Vibe Coding, איך להשתמש ב-Composer לבניית אפליקציות מלאות, ואיך לשלב את Claude 4.6.',
  categoryId: 'automation',
  title: 'המהפכה של Cursor ב-2026: המדריך השלם לתכנות ב-AI (Vibe Coding)',
  description: 'זה לא "עוד תוסף". זהו שינוי פרדיגמה מוחלט. מדריך עומק שילמד אתכם איך להפוך ממתכנתים ל"ארכיטקטים של תוכנה". כולל הסברים על ה-Composer החדש ומודלים של חשיבה.',
  readTimeMinutes: 20,
  lastUpdated: '02/2026',
  imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-indigo-600 mb-8 font-mono text-sm text-slate-700">
      <strong>עדכון 2026:</strong><br/>
      Cursor הוא כיום הסטנדרט בתעשייה. הפיצ'ר <strong>Composer</strong> (שפעם היה בטא) הוא עכשיו ברירת המחדל. שילוב של <strong>Claude 4.6 Sonnet</strong> בתוך Cursor נותן את הביצועים הטובים ביותר שנראו אי פעם בתכנות אוטומטי.
    </div>

    <div className="flex items-center gap-4 mb-10 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Alex" className="w-16 h-16 rounded-full border-2 border-indigo-100" />
      <div>
        <p className="font-bold text-slate-900 text-lg">נכתב ע"י אלכס</p>
        <p className="text-slate-500 text-sm">Full Stack Engineer | בנה 3 מוצרי SaaS בחודש האחרון עם Cursor</p>
      </div>
    </div>

    <h2 id="intro" className="text-3xl font-black text-slate-900 mt-16 mb-6">1. הקדמה: למה VS Code מת?</h2>
    <p>
      אני אגיד את זה בצורה הכי ברורה: <strong>VS Code הרגיל הוא היסטוריה.</strong>
      ב-2026, עורך קוד שלא "מבין" את כל הפרויקט שלך ולא יודע לכתוב קבצים לבד, הוא כמו מכונת כתיבה. Cursor, שהוא בעצם "Fork" (גרסה משופרת) של VS Code, לקח את כל היתרונות והוסיף להם מוח.
    </p>

    <h2 id="models" className="text-3xl font-black text-slate-900 mt-16 mb-6">2. איזה מודל לבחור ב-2026?</h2>
    <p>
      Cursor נותן לכם לבחור את ה"מוח". נכון להיום, הבחירה היא קריטית:
    </p>
    <ul className="list-disc list-inside space-y-3 mt-4">
      <li><strong>Claude 4.6 Sonnet:</strong> <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-bold">המומלץ ביותר</span>. הוא כותב את הקוד הכי נקי, הכי פחות "הוזה", ומסוגל להחזיק קונטקסט ענק של אלפי שורות קוד בלי להתבלבל.</li>
      <li><strong>o3-mini (OpenAI):</strong> מודל "חושב" (Reasoning). מעולה לאלגוריתמים מורכבים ולדברים שדורשים מתמטיקה או לוגיקה כבדה, אבל קצת יותר איטי.</li>
      <li><strong>Cursor-Small:</strong> המודל הפנימי שלהם להשלמות מהירות (Tab). הוא טס וחינמי.</li>
    </ul>

    <h2 id="composer" className="text-3xl font-black text-slate-900 mt-16 mb-6">3. ה-Composer: המנצח על התזמורת</h2>
    <p>
      אם אתם משתמשים ב-Chat הרגיל בצד ימין – תפסיקו.
      תלחצו <strong>Ctrl+I</strong> (או Cmd+I).
      נפתח לכם חלון ה-Composer.
      <br/><br/>
      <strong>למה זה מטורף?</strong> כי ה-Composer יכול ליצור, לערוך ולמחוק 20 קבצים במכה אחת.
      אתם יכולים להגיד לו: "תשנה את כל העיצוב באתר מ-Light Mode ל-Dark Mode, ותעדכן את כל הקומפוננטות בהתאם".
      הוא יעבור קובץ קובץ, יבצע את השינוי, ואתם רק צריכים ללחוץ "Accept All". זה כוח על.
    </p>

    <h2 id="rules" className="text-3xl font-black text-slate-900 mt-16 mb-6">4. קובץ .cursorrules</h2>
    <p>
      ב-2026, זה הסטנדרט. בכל פרויקט חייב להיות קובץ בשם <code>.cursorrules</code> בתיקייה הראשית.
      הקובץ הזה מכיל את "חוקי הבית" שלכם. ה-AI קורא אותו לפני כל תשובה.
      <br/>
      למשל: "תמיד תשתמש ב-TypeScript", "אל תמחק הערות", "תענה בעברית".
      זה חוסך לכם לחזור על עצמכם ומשפר את איכות הקוד פלאים.
    </p>

    <h2 id="vibe" className="text-3xl font-black text-slate-900 mt-16 mb-6">5. עידן ה-Vibe Coding</h2>
    <p>
      אנחנו כבר לא כותבים קוד. אנחנו מנהלים אותו.
      אתם כותבים תיאור ("אני רוצה משחק סנייק עם אפקטים של ניאון"), המחשב כותב את הקוד, אתם מריצים.
      עובד? יופי. לא עובד? אתם אומרים לו "יש באג, הנחש לא גדל". הוא מתקן.
      זה ה-Vibe. התכנות הפך מ"בנייה בלבנים" ל"פיסול בחמר".
    </p>
  </PlainText>
};