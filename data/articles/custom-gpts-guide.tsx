import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const customGptsGuide: Article = {
  id: 'create-custom-gpt-guide',
  slug: 'מדריך-בניית-gpt-אישי',
  metaTitle: 'איך לבנות "מוח" משלך: המדריך ליצירת Custom GPTs לעסק',
  metaDescription: 'נמאס לכם להסביר ל-ChatGPT כל פעם מחדש מי אתם? למדו איך לבנות בוט אישי שמכיר את העסק שלכם, את המחירון ואת הסגנון שלכם. בלי לדעת קוד.',
  categoryId: 'work',
  title: 'איך לבנות "מוח" משלך: המדריך המלא ל-Custom GPTs',
  description: 'תארו לכם שיש לכם עובד שמכיר את כל הנהלים של החברה, זוכר את כל הלקוחות בעל פה, מכיר את המחירון הישן והחדש, והוא זמין 24/7. זה בדיוק מה ש-Custom GPT עושה, וקל בטירוף לבנות אותו.',
  readTimeMinutes: 9,
  lastUpdated: '06/2026',
  imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-indigo-50 p-6 rounded-xl border-r-4 border-indigo-600 mb-8">
      <h3 className="text-xl font-bold text-indigo-900 mb-2">לא צריך להיות מתכנת</h3>
      <p className="text-lg text-indigo-800 leading-relaxed">
        המהפכה הגדולה היא שאתם בונים תוכנה בעזרת... דיבור.
        אתם לא כותבים קוד. אתם מנהלים שיחה עם ChatGPT ואומרים לו: "אני רוצה שתהיה יועץ משכנתאות מומחה". הוא שואל אתכם שאלות מכוונות, ומגדיר את עצמו ברקע. זה קל כמו לשלוח הודעה בוואטסאפ.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">מה זה בכלל Custom GPT?</h2>
    <p>
      זהו גרסה אישית של ChatGPT, ש"אילפתם" אותה למטרה ספציפית.
      במקום להתחיל כל שיחה בלהסביר "אני בעל חנות פרחים, קוראים לחנות שושן צחור, והמחירים שלי הם...", הבוט האישי שלכם כבר יודע את כל זה. הוא זוכר את ההקשר תמיד.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">שלב 1: ההגדרה (Instructions) - המוח</h2>
    <p>
      כשאתם נכנסים למסך ה-Create, יש לכם לשונית שנקראת <strong>Configure</strong>. שם יש תיבת טקסט שנקראת Instructions. זה הדבר הכי חשוב.
      <br/>
      כאן אתם כותבים את "תעודת הזהות" של הבוט.
    </p>
    <div className="bg-slate-100 p-4 rounded border font-mono text-sm text-slate-700">
      "תפקיד: אתה הבוט של שירות הלקוחות של חברת 'רהיטי דוד'.
      אישיות: אתה סבלני, אדיב, משתמש בסלנג ישראלי עדין, ואוהב אימוג'ים של רהיטים.
      מטרה: לעזור ללקוחות לבחור ספה ולענות על שאלות לגבי משלוחים.
      חוקים:
      1. לעולם אל תמציא מחירים. תמיד תבדוק בקובץ המחירון המצורף.
      2. אם לקוח כועס, תהיה אמפתי ותציע לו ליצור קשר עם מנהל בטלפון.
      3. התשובות צריכות להיות קצרות (עד 3 משפטים)."
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">שלב 2: הידע (Knowledge) - הזיכרון</h2>
    <p>
      זה ה-Game Changer האמיתי. למטה יש כפתור <strong>Upload files</strong>.
      אתם יכולים להעלות לבוט קבצי PDF, Word או Excel שהם "האמת" שלו.
    </p>
    <p><strong>רעיונות לקבצים שכדאי להעלות:</strong></p>
    <ul className="list-disc list-inside space-y-2">
      <li>קטלוג מוצרים עדכני עם מחירים ומפרטים טכניים.</li>
      <li>קובץ "שאלות ותשובות נפוצות" (FAQ) שכבר כתבתם בעבר.</li>
      <li>מדריך נהלים לעובדים ("מה עושים במקרה של החזרת מוצר").</li>
      <li>היסטוריה של המותג וערכי החברה.</li>
      <li>דוגמאות לפוסטים מוצלחים שכתבתם (כדי שילמד את סגנון הכתיבה שלכם).</li>
    </ul>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">שלב 3: הפעולות (Actions) - הידיים (למתקדמים)</h2>
    <p>
      אם אתם רוצים שהבוט לא רק יענה, אלא גם <strong>יעשה</strong> משהו (כמו לשלוח מייל או לבדוק מלאי בזמן אמת), אתם יכולים לחבר אותו למערכות חיצוניות דרך API. זה דורש קצת ידע טכני (או לבקש מ-ChatGPT שיכתוב לכם את הקוד לזה), אבל זה הופך את הבוט לכלי עבודה אוטומטי לחלוטין.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">רעיונות לבוטים שאתם יכולים לבנות היום</h2>
    <ol className="list-decimal list-inside space-y-4">
      <li>
        <strong>בוט הצעות מחיר:</strong> מעלים לו את המחירון ואת התבנית של הצעת מחיר. כשלקוח פונה, אתם כותבים לבוט "לקוח רוצה הצעה לאתר תדמית + לוגו", והוא מוציא לכם טקסט מוכן להעתקה למייל.
      </li>
      <li>
        <strong>בוט Onboarding לעובד חדש:</strong> מעלים לו את כל נהלי החברה. העובד החדש יכול לשאול אותו "איך מגישים בקשה לחופשה?" או "מה הסיסמה ל-WiFi?" במקום להציק למנהל.
      </li>
      <li>
        <strong>עורך לשוני אישי:</strong> מעלים לו טקסטים שכתבתם בעבר כדי שילמד את הסגנון שלכם. מעכשיו, כל מייל שאתם כותבים, אתם מבקשים ממנו "תשכתב את זה שזה ישמע כמוני".
      </li>
    </ol>
  </PlainText>
};