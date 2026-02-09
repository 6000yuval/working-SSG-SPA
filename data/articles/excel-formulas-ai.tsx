import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const excelFormulasAi: Article = {
  id: 'excel-formulas-ai',
  slug: 'נוסחאות-אקסל-chatgpt',
  metaTitle: 'אשף האקסל: המדריך המלא לניתוח נתונים ואוטומציה עם AI',
  metaDescription: 'לא יודעים VLOOKUP? לא נורא. המדריך המקיף לשימוש ב-ChatGPT כדי לשלוט באקסל, לכתוב מאקרואים (VBA) ולנקות נתונים בשניות.',
  categoryId: 'work',
  title: 'אקסל על סטרואידים: איך להפוך לאנליסט נתונים בלי לדעת נוסחה אחת',
  description: 'אקסל הוא כלי חזק, אבל התחביר שלו נוראי. החדשות הטובות: אתם כבר לא צריכים לזכור שום דבר בעל פה. ה-AI הוא מומחה האקסל החדש שלכם, והוא יודע לעשות דברים שגם מומחים לא יודעים.',
  readTimeMinutes: 12,
  lastUpdated: '05/2026',
  imageUrl: 'https://images.unsplash.com/photo-1543286386-713df548e9cc?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-green-50 p-8 rounded-2xl border-r-4 border-green-600 mb-10">
      <h3 className="text-2xl font-black text-green-900 mb-4">שינוי תפיסה 🧠</h3>
      <p className="text-lg text-green-800 leading-relaxed">
        עד היום, כדי לעבוד באקסל הייתם צריכים "לחשוב כמו מחשב" (<code>=IF(A2{'>'}0,...)</code>).
        מהיום, אתם יכולים "לחשוב כמו מנהל". אתם אומרים למחשב מה אתם רוצים ("תצבע באדום את כל מי שלא שילם"), והוא כותב את הנוסחה המורכבת עבורכם.
        המדריך הזה ייקח אתכם מהבסיס ועד לאוטומציה מלאה בעזרת קוד.
      </p>
    </div>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">רמה 1: נוסחאות בסיסיות (דיבור טבעי)</h2>
    <p>
      הסוד לקבלת נוסחה שעובדת במכה ראשונה הוא <strong>קונטקסט</strong>. אל תגידו סתם "תכתוב נוסחה". תגידו לו איפה הנתונים יושבים.
    </p>

    <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl shadow-sm my-8">
      <p className="font-bold text-slate-500 mb-4 uppercase tracking-wide">הפרומפט לנוסחאות יומיומיות:</p>
      <div className="font-mono text-xl text-slate-800 leading-relaxed whitespace-pre-wrap">
"יש לי טבלה באקסל לניהול עובדים.
עמודה A: תאריך כניסה לעבודה.
עמודה B: תאריך היום (=TODAY).
עמודה C: אני רוצה לחשב את הוותק בשנים, אבל עם דיוק של חודשים (למשל: 2.5 שנים).

תכתוב לי את הנוסחה לתא C2.
שים לב: האקסל שלי בעברית, אז תשתמש בנקודה-פסיק (;) אם צריך."
      </div>
    </div>

    <p>
      <strong>למה זה חשוב?</strong> כי הוא יתן לכם את הפונקציה המדויקת (`DATEDIF` או חישוב מתמטי) שמתאימה לגרסה שלכם.
    </p>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">רמה 2: ה-XLOOKUP המפחיד</h2>
    <p>
      חיבור בין שתי טבלאות הוא המשימה הכי נפוצה והכי מתסכלת באקסל.
      במקום להסתבך עם אינדקסים, תנו ל-AI להבין את הלוגיקה.
    </p>

    <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl shadow-sm my-8">
      <p className="font-bold text-slate-500 mb-4 uppercase tracking-wide">הפרומפט למיזוג טבלאות:</p>
      <div className="font-mono text-xl text-slate-800 leading-relaxed whitespace-pre-wrap">
"יש לי שני גיליונות (Sheets):
1. גיליון 'הזמנות': עמודה A היא מק"ט, עמודה B היא כמות.
2. גיליון 'מחירון': עמודה A היא מק"ט, עמודה C היא שם המוצר, עמודה D היא מחיר.

אני רוצה בגיליון 'הזמנות' להוסיף עמודה שתביא אוטומטית את שם המוצר מהמחירון לפי המק"ט.
תכתוב לי נוסחת XLOOKUP שתעשה את זה, ואם המק"ט לא נמצא - שתכתוב 'לא קיים'."
      </div>
    </div>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">רמה 3: אוטומציה עם מאקרו (VBA) - הקסם האמיתי</h2>
    <p>
      כאן אנחנו עוברים מ"נוסחאות" ל"תכנות", אבל בלי לדעת לתכנת.
      <strong>מאקרו</strong> הוא רובוט קטן שמבצע רצף פעולות.
      רוצים כפתור שלוחצים עליו וכל השורות הריקות נמחקות, הכותרות נצבעות בכחול, והקובץ נשמר כ-PDF? ה-AI יכתוב לכם את הקוד לזה.
    </p>

    <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow-xl my-8 font-mono text-lg overflow-x-auto dir-ltr">
      <p className="text-slate-400 mb-2">// The Prompt:</p>
      <p className="whitespace-pre-wrap">
"Write a VBA Macro for Excel.
Here is what I need it to do:
1. Loop through all rows in Sheet1.
2. If Column E contains the word 'Cancelled' (in red), move that entire row to a new sheet called 'Archive'.
3. Delete the empty row from the original sheet.
4. Show a popup message box when done saying 'X rows moved'.

Guide me exactly on how to paste this code into Excel."
      </p>
    </div>

    <p>
      הוא יסביר לכם: "תלחץ Alt+F11, תעשה Insert Module, ותדביק את הקוד הזה...".
      פתאום חסכתם עבודה של שעה ביום בלחיצת כפתור אחת.
    </p>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">רמה 4: רגע, למה בכלל אקסל? (Data Analyst)</h2>
    <p>
      אם יש לכם מנוי ל-ChatGPT Plus (או Claude Pro), אתם יכולים לדלג על אקסל לגמרי במקרים מורכבים.
      זה נקרא <strong>Advanced Data Analysis</strong>.
    </p>
    <p>
      פשוט גררו את קובץ האקסל לתוך הצ'אט (בלי לפתוח אותו באקסל בכלל).
      וכתבו:
    </p>
    <ul className="list-disc list-inside space-y-4 text-lg text-slate-700 bg-white p-6 rounded-xl border border-slate-200">
      <li>"תנקה את הנתונים: תמחק כפילויות, תאחד שמות דומים (למשל 'ישראל ישראלי' ו-'ישראל י.'), ותמלא תאים ריקים ב-0."</li>
      <li>"תנתח את המגמות: איזה מוצר נמכר הכי הרבה בחורף לעומת הקיץ?"</li>
      <li>"תייצר לי 3 גרפים ויזואליים יפים שמראים את התפלגות ההכנסות לפי עיר, ותתן לי להוריד אותם כתמונות למצגת."</li>
    </ul>
    <p>
      הוא כותב קוד Python ברקע, מבצע את הניתוח, ונותן לכם את התוצאה המעובדת. זה כלי חזק פי 100 מאקסל רגיל.
    </p>

    <div className="bg-yellow-50 p-6 rounded-xl border-t-4 border-yellow-500 my-8">
      <h3 className="font-bold text-yellow-900 mb-2">טיפ לטיפול בשגיאות (#N/A)</h3>
      <p className="text-yellow-800">
        אם קיבלתם שגיאה בנוסחה שה-AI כתב, אל תתייאשו.
        תעתיקו את התא עם השגיאה, ותכתבו ל-AI:
        "קיבלתי שגיאת #VALUE!. הנה הנוסחה שהשתמשתי בה: [הדבק]. הנה תוכן התאים שאליהם הפניתי: A1 מכיל תאריך, B1 מכיל טקסט. מה הבעיה?"
        הוא יזהה מיד שאי אפשר לחבר טקסט לתאריך ויתן נוסחה מתוקנת.
      </p>
    </div>
  </PlainText>
};