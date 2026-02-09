import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const personaTechnique: Article = {
  id: 'persona-technique',
  slug: 'persona-prompt-engineering-guide',
  metaTitle: 'טכניקת הפרסונה (Persona): הסוד של הנדסת פרומפט מתקדמת',
  metaDescription: 'איך לשפר תשובות של ChatGPT ב-200%? המדריך המלא לשימוש בטכניקת הפרסונה (Persona) כחלק מהנדסת פרומפט (Prompt Engineering) מקצועית.',
  categoryId: 'skills',
  title: 'טכניקת הפרסונה: איך לגרום ל-ChatGPT להפוך למומחה עולמי (הנדסת פרומפט)',
  description: 'הסוד הגדול של המקצוענים בתחום הנדסת הפרומפט (Prompt Engineering) הוא לא ידע טכני מסובך. זה משפט אחד קטן שמוסיפים בהתחלה והופך את ה-AI מרובוט יבש למומחה עולמי.',
  readTimeMinutes: 5,
  lastUpdated: '04/2026',
  imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-indigo-50 p-6 rounded-xl border-r-4 border-indigo-600 mb-8">
      <h3 className="text-xl font-bold text-indigo-900 mb-2">דמיינו שאתם במאים 🎬</h3>
      <p className="text-lg text-indigo-800 leading-relaxed">
        תחשבו על ChatGPT כמו על שחקן מוכשר מאוד, אבל כזה שצריך שיגידו לו מה לעשות.
        אם תגידו לו "תכתוב לי מייל", הוא יכתוב מייל גנרי ומשעמם.
        אבל אם תשתמשו ב<strong>טכניקת הפרסונה</strong> ותגידו לו "אתה עורך דין כריש מתל אביב, תכתוב מייל מאיים..." – אוהו, אתם תקבלו הצגה אחרת לגמרי.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">למה הנדסת פרומפט עם פרסונה עובדת?</h2>
    <p>
      ה-AI קרא את כל האינטרנט. הוא יודע איך מדברת גננת, איך מדבר מוסכניק, ואיך מדבר פרופסור לפיזיקה.
      כשאתם לא אומרים לו מי הוא, הוא הולך על ה"ממוצע". הוא נהיה פרווה.
      כשאתם נותנים לו "כובע" (Persona), הוא שולף את המילים המתאימות, את הטון הנכון ואת צורת החשיבה של הדמות הזאת.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">דוגמה מהחיים (תנסו את זה!)</h2>
    <div className="space-y-4">
      <div className="bg-red-50 p-4 rounded-lg border border-red-100">
        <p className="font-bold text-red-800 mb-1">❌ הדרך הגרועה:</p>
        <p className="text-slate-700 italic">"תסביר לי איך עובד ביטקוין."</p>
        <p className="text-sm text-slate-500 mt-2">תוצאה: הסבר טכני, יבש ומסובך על בלוקצ'יין וכרייה.</p>
      </div>

      <div className="bg-green-50 p-4 rounded-lg border border-green-100">
        <p className="font-bold text-green-800 mb-1">✅ הדרך הגאונית (עם פרסונה):</p>
        <p className="text-slate-700 italic">"תתנהג כמו <strong>סבתא פולניה מצחיקה</strong>, ותסביר לי איך עובד ביטקוין."</p>
        <p className="text-sm text-slate-500 mt-2">תוצאה: "נו שויין, זה כסף דמיוני במחשב, כמו שהיית אוסף גולות כשהיית קטן, רק שעכשיו זה עולה כמו דירה..." (הרבה יותר ברור ומעניין, נכון?)</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">הנוסחה להעתקה (Prompt Formula)</h2>
    <p>
      פשוט תתחילו כל בקשה במילים הבאות כדי ליישם את עקרונות הנדסת הפרומפט:
    </p>
    
    <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl shadow-sm my-8">
      <p className="font-bold text-slate-500 mb-4 uppercase tracking-wide">תבנית פרומפט פרסונה:</p>
      <div className="font-mono text-xl text-slate-800 leading-relaxed whitespace-pre-wrap">
"אתה [הדמות המומחית].
יש לך ניסיון של [מספר] שנים ב[תחום].
המשימה שלך היא [מה לעשות].
קהל היעד שלי הוא [מי יקרא את זה].
תדבר בטון [איך לדבר - מצחיק/רציני/פשוט]."
      </div>
    </div>

    <p>
      <strong>דמויות מומלצות לניסיון:</strong>
      <br/>- יועץ עסקי סרקסטי שלא עושה הנחות.
      <br/>- מורה סבלנית לכיתה א' (להסברים פשוטים).
      <br/>- קופירייטר שמוכר קרח לאסקימוסים (לפוסטים שיווקיים).
      <br/>- מאמן כושר קשוח.
    </p>

    <div className="mt-8 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <h3 className="font-bold text-slate-800 mb-2">טיפ קטן לסיום</h3>
      <p className="text-slate-600">
        זה עובד מעולה כשיש לכם "מחסום כתיבה". אם אתם צריכים לכתוב ברכה או פוסט ולא יוצא לכם כלום, תבקשו ממנו: "תכתוב 5 גרסאות: אחת מצחיקה, אחת מרגשת, אחת חרוזה, אחת קצרה ואחת רשמית". מתוך המבחר הזה בטוח תמצאו משהו טוב.
      </p>
    </div>
  </PlainText>
};