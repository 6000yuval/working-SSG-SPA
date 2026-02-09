import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const buildAppWithV0: Article = {
  id: 'build-app-with-v0',
  slug: 'מדריך-v0-בניית-אתרים',
  metaTitle: 'לבנות אתר וואו ב-10 דקות: המדריך ל-v0',
  metaDescription: 'לא צריך מעצב ולא צריך מתכנת. המדריך המלא לשימוש ב-v0 של Vercel ליצירת ממשקים מדהימים בעברית.',
  categoryId: 'automation',
  title: 'איך לבנות אתר שנראה מיליון דולר (בלי לדעת לעצב)',
  description: 'הכלי החדש v0 הוא כמו קסם. אתם מתארים לו את האתר במילים, והוא מצייר אותו בקוד. מדריך צעד-אחר-צעד ליצירת דף נחיתה.',
  readTimeMinutes: 5,
  lastUpdated: '06/2026',
  imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-slate-900 text-slate-100 p-6 rounded-xl border-r-4 border-blue-500 mb-8">
      <h3 className="text-xl font-bold mb-2">מה זה v0?</h3>
      <p className="text-lg leading-relaxed text-slate-300">
        דמיינו שאתם יושבים ליד מעצב על, ואומרים לו "תעשה לי אתר שחור, יוקרתי, עם כפתורים זוהרים". ובום - זה מופיע.
        v0 הוא כלי של חברת Vercel שמייצר ממשקים (UI) ברמה הכי גבוהה שיש, בשניות.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">שלב 1: הפרומפט (התיאור)</h2>
    <p>
      כנסו ל-v0.dev (צריך חשבון חינם).
      בשורת הטקסט, אל תכתבו "אתר למסעדה". תהיו ספציפיים.
    </p>
    <div className="bg-white border border-slate-300 p-4 rounded-lg font-mono text-sm mb-4">
      "Landing page for a high-end sushi restaurant in Tel Aviv.
      Dark theme, elegant typography.
      Hero section with a large background image of sushi.
      Menu section with cards for each roll.
      Reservation form at the bottom.
      Use gold and black colors."
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">שלב 2: הליטוש (Make it Pop)</h2>
    <p>
      הוא ייצר לכם 3 אפשרויות. תבחרו את זו שהכי אהבתם.
      עכשיו מתחיל הכיף. אתם יכולים לדבר איתו כמו עם בן אדם:
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>"תגדיל קצת את הכותרת".</li>
        <li>"תעשה שהכפתורים יהיו עגולים יותר".</li>
        <li>"תוסיף אנימציה עדינה כשטוענים את הדף".</li>
        <li>"תהפוך את כל הטקסט לעברית (RTL)".</li>
      </ul>
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">שלב 3: הפיצ'ר הסודי - תמונה לקוד</h2>
    <p>
      ראיתם אתר שאהבתם? צלמו מסך (Screenshot) וגררו אותו לתוך v0.
      תכתבו לו: "תעתיק את העיצוב הזה, אבל תשנה את הצבעים לכחול ולבן".
      הוא יבנה לכם אתר שנראה בול אותו דבר, אבל עם הקוד שלכם. זה מטורף לחלוטין.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">מה עושים עם זה עכשיו?</h2>
    <p>
      אחרי שהעיצוב מוכן, יש כפתור למעלה שנקרא "Add to Codebase" או פשוט העתקה.
      אם אתם משתמשים ב-<strong>Cursor</strong> (מהמדריך הקודם), אתם יכולים להעתיק את הפקודה ש-v0 נותן לכם, ולהדביק אותה בטרמינל של Cursor.
      תוך שניה העיצוב המדהים הזה נמצא אצלכם בפרויקט, ואתם יכולים להמשיך לעבוד עליו.
    </p>

    <div className="bg-green-50 p-6 rounded-xl border-t-4 border-green-500 my-8">
      <h3 className="font-bold text-green-900 mb-2">למתקדמים: Shadcn UI</h3>
      <p className="text-green-800">
        v0 משתמש בספריית רכיבים שנקראת shadcn/ui ו-Tailwind CSS. אלו הסטנדרטים הכי מודרניים היום בתעשייה. זה אומר שהקוד שהוא מייצר הוא לא "זבל", הוא קוד מקצועי שמתכנתים בכירים היו שמחים לכתוב.
      </p>
    </div>
  </PlainText>
};