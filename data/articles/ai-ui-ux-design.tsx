import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const aiUiUxDesign: Article = {
  id: 'ai-ui-ux-design',
  slug: 'עיצוב-אתרים-ai-ui-ux',
  metaTitle: 'עיצוב אתרים ב-AI: מסקיצה על מפית לאתר אמיתי (המדריך השלם)',
  metaDescription: 'לא צריך להיות מעצב על כדי ליצור אתרים יפים. הכירו את המהפכה של v0, Relume ו-Galileo שיוצרים Wireframes וממשקים שלמים מטקסט פשוט.',
  categoryId: 'automation',
  title: 'עיצוב אתרים ב-AI: איך לבנות אתר וואו בלי מעצב',
  description: 'פעם, תהליך של עיצוב אתר לקח שבועות. אפיון, סקיצות, בחירת צבעים, פיגמה... היום? ה-AI בונה לכם את כל מבנה האתר (Sitemap), את הסקיצות (Wireframes) ואפילו את הקוד הסופי בתוך דקות. בואו נראה איך.',
  readTimeMinutes: 8,
  lastUpdated: '06/2026',
  imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-purple-50 p-6 rounded-xl border-r-4 border-purple-600 mb-8">
      <h3 className="text-xl font-bold text-purple-900 mb-2">למי זה מיועד?</h3>
      <p className="text-lg text-purple-800 leading-relaxed">
        המדריך הזה הוא חובה ליזמים שרוצים להרים דף נחיתה מהר ("MVP"), למאפייני חווית משתמש (UX) שרוצים לקצר תהליכים שחורים, ולמפתחים ששונאים לעצב ורוצים שמישהו אחר יבחר להם את הצבעים והפונטים.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">שלב 1: תכנון האתר עם Relume (המוח)</h2>
    <p>
      לפני שבוחרים צבעים, צריך להבין מה בכלל יש באתר.
      <strong>Relume</strong> הוא כלי ששינה את חוקי המשחק.
      אתם נכנסים וכותבים לו משפט אחד: "אני רוצה לבנות אתר לחנות פרחים בוטיק בתל אביב, שמתמחה בזרים לאירועים".
    </p>
    <p>
      מה קורה עכשיו? קסם.
      1. הוא מייצר לכם <strong>Sitemap</strong> (מפת אתר): דף בית, אודות, קטלוג, צור קשר.
      2. לכל דף, הוא מחליט אילו "סקשנים" (Sections) יהיו בו: גיבור (Hero), המלצות לקוחות, גלריה, טופס לידים.
      3. בלחיצת כפתור, הוא הופך את הרשימה הזו ל-<strong>Wireframe</strong> ויזואלי בתוך Figma.
      תוך 2 דקות יש לכם שלד של אתר שלם, מוכן לעיצוב. פעם זה לקח יומיים עבודה.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">שלב 2: עיצוב ויזואלי עם v0 (היופי)</h2>
    <p>
      עכשיו כשיש לנו מבנה, צריך שזה יראה טוב.
      הכירו את <strong>v0</strong> (של חברת Vercel). זה כלי "Text to UI".
      אתם כותבים לו:
      "A hero section for a flower shop. Large background image of colorful tulips. Elegant serif typography. Gold and dark green color scheme. A 'Shop Now' button with rounded corners."
    </p>
    <p>
      הוא לא מייצר תמונה (כמו Midjourney). הוא מייצר <strong>קוד</strong> (React/Tailwind) שנראה בדיוק כמו העיצוב.
      אתם יכולים "לדבר" איתו ולתקן:
      "תגדיל קצת את הכותרת", "תחליף את הכפתור למשהו יותר בולט", "תעשה מצב לילה (Dark Mode)".
      זה כמו לשבת ליד מעצב ולתת לו הוראות, רק שהמעצב הוא מחשב והוא עובד בשניות.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">שלב 3: העתקת השראה (Screenshot to Code)</h2>
    <p>
      ראיתם אתר של מתחרה וממש אהבתם את איך שהמחיר מוצג שם?
      צלמו מסך (Screenshot).
      העלו את התמונה ל-v0 או ל-Claude 3.5 Sonnet.
      כתבו: "תבנה לי רכיב שנראה ככה בדיוק, אבל עם הטקסטים שלי ועם הצבעים של המותג שלי (כחול ולבן)".
      הוא ינתח את העיצוב, את הרווחים ואת הפונטים, וישחזר את זה עבורכם בקוד נקי. זה כלי לימודי מטורף.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">ומה עם התמונות?</h2>
    <p>
      אתר יפה צריך תמונות יפות. אל תשתמשו בתמונות סטוק גנריות שרואים בכל מקום.
      השתמשו ב-<strong>Midjourney</strong> כדי ליצור תמונות אווירה ייחודיות לאתר.
      <em>פרומפט לדוגמה:</em> "Wide website banner background, flower shop interior, cozy lighting, 8k resolution, plenty of copy space in the center".
      שימו לב ל-"Copy Space" – זה אומר ל-AI להשאיר מקום ריק באמצע כדי שתוכלו לכתוב עליו את הכותרת של האתר.
    </p>

    <div className="bg-green-50 p-6 rounded-xl border-t-4 border-green-500 my-8">
      <h3 className="font-bold text-green-900 mb-2">טיפ למקצוענים</h3>
      <p className="text-green-800">
        השילוב המנצח הוא: <strong>Relume</strong> (למבנה) -> <strong>Figma</strong> (לדיוקים) -> <strong>v0</strong> (לקוד). ככה אתם מקבלים אתר שבנוי נכון, נראה טוב, והקוד שלו איכותי ומוכן לפיתוח.
      </p>
    </div>
  </PlainText>
};