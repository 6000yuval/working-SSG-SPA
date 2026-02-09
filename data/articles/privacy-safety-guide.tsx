import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';
import { Shield, Briefcase } from 'lucide-react';

export const privacySafetyGuide: Article = {
  id: 'privacy-safety-guide',
  slug: 'מדריך-פרטיות-ai',
  metaTitle: 'פרטיות ב-2026: מה בטוח להגיד ל-AI ומה עדיין מסוכן?',
  metaDescription: 'הכללים השתנו. עם כניסת ה-AI לתוך הטלפונים שלנו (Apple Intelligence, Gemini Nano), הפרטיות מקבלת משמעות חדשה. מה נשאר על המכשיר ומה עולה לענן?',
  categoryId: 'safety',
  title: 'המדריך המעודכן לפרטיות (2026): האם אפשר לסמוך על ה-AI במכשיר?',
  description: 'פעם הכלל היה "לא להעלות כלום לענן". היום, כשה-AI רץ בתוך המעבד של האייפון או המחשב הנייד שלכם, הכללים קצת יותר מורכבים. הנה מה שצריך לדעת.',
  readTimeMinutes: 6,
  lastUpdated: '02/2026',
  imageUrl: 'https://images.unsplash.com/photo-1510915361405-ef8db9036289?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-red-50 border-r-4 border-red-600 p-6 mb-8 rounded-xl">
      <h3 className="text-xl font-bold text-red-900 mb-2">המהפכה של On-Device AI 🔒</h3>
      <p className="text-lg text-red-800 leading-relaxed">
        ב-2026, השינוי הגדול הוא <strong>AI מקומי</strong>. המכשירים שלנו (אייפון, פיקסל, מחשבי מק ו-PC) חזקים מספיק להריץ מודלים קטנים *בלי* לשלוח מידע לאינטרנט.
        זה אומר שאם אתם משתמשים בפיצ'רים המובנים של המכשיר, המידע שלכם הרבה יותר בטוח מאשר בשימוש ב-ChatGPT בדפדפן.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">מתי המידע יוצא מהמכשיר?</h2>
    <p>
      זה הטריק שצריך להכיר.
      <br/>
      <strong>עיבוד מקומי (בטוח):</strong> סיכום התראות, חיפוש בתמונות בגלריה, תיקון שגיאות כתיב במקלדת. זה נשאר אצלכם.
      <br/>
      <strong>עיבוד ענן (פחות בטוח):</strong> כשאתם שואלים שאלה מורכבת ("תכנן לי טיול ליפן"), המכשיר מבין שהוא לא יכול לבד, ושולח את הבקשה לשרתים חזקים (Private Cloud Compute). החברות מבטיחות שהמידע נמחק מיד, אבל הוא עדיין יוצא מכם.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">הרשימה השחורה: מה עדיין אסור?</h2>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <p className="font-bold text-slate-800 mb-2 flex items-center gap-2 text-lg">
          <Shield className="w-6 h-6 text-red-500" />
          סיסמאות ופרטי אשראי
        </p>
        <p className="text-slate-600">
          גם אם ה-AI מקומי, תוכנות זדוניות (Malware) יכולות לגשת להיסטוריה שלו. לעולם אל תבקשו מ-AI "לזכור את הסיסמה שלי לבנק".
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <p className="font-bold text-slate-800 mb-2 flex items-center gap-2 text-lg">
          <Briefcase className="w-6 h-6 text-red-500" />
          קוד סודי של החברה
        </p>
        <p className="text-slate-600">
          אם אתם משתמשים ב-GitHub Copilot או Cursor בעבודה, תוודאו שהבוס רכש את גרסת ה-<strong>Enterprise</strong>. בגרסאות העסקיות יש חוזה משפטי שהקוד שלכם לא משמש לאימון המודל. בגרסאות הפרטיות? אתם מלמדים את המתחרים שלכם.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">איך מכבים את המעקב? (Opt-out)</h2>
    <p>
      ב-ChatGPT, ברירת המחדל היא שהם משתמשים בשיחות לאימון.
        חובה להיכנס ל: <code>Settings {'>'} Data Controls</code> ולכבות את <strong>Improve the model for everyone</strong>.
      ב-Claude וב-Gemini זה לרוב כבוי כברירת מחדל למשתמשים משלמים, אבל תמיד שווה לבדוק.
    </p>

    <div className="mt-8 bg-blue-50 p-6 rounded-xl">
      <h3 className="font-bold text-blue-900 mb-2">טיפ לפרנואידים</h3>
      <p className="text-blue-800">
        רוצים בטיחות 100%? הורידו מודל מקומי (כמו Llama 3 או Mistral) למחשב שלכם בעזרת תוכנה כמו <strong>LM Studio</strong>. נתקו את האינטרנט. עכשיו אתם יכולים לדבר איתו על הסודות הכמוסים ביותר, ופיזית שום מידע לא יכול לצאת מהחדר.
      </p>
    </div>
  </PlainText>
};