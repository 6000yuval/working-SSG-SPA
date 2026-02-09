import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const jobInterviewPrep: Article = {
  id: 'job-interview-prep',
  slug: 'הכנה-לראיון-עבודה-ai',
  metaTitle: 'המדריך לקריירה עם AI: קורות חיים, סימולציות ומשא ומתן על שכר',
  metaDescription: 'מדריך מקיף (2026): איך לעבור את רובוט הסינון (ATS), איך לתרגל ראיונות עבודה בלייב עם ChatGPT, ואיך לנהל משא ומתן על השכר בלי לגמגם.',
  categoryId: 'work',
  title: 'המאמן האישי לקריירה: איך להתקבל לעבודה בעזרת AI (מדריך עומק)',
  description: 'השוק השתנה. היום, לפני שעין אנושית רואה את קורות החיים שלכם, רובוט (ATS) סורק אותם. המדריך המלא לנצח את השיטה, להתכונן לראיון כמו מקצוענים, ולהשיג את השכר שמגיע לכם.',
  readTimeMinutes: 15,
  lastUpdated: '06/2026',
  imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-blue-50 p-8 rounded-2xl border-r-4 border-blue-600 mb-10">
      <h3 className="text-2xl font-black text-blue-900 mb-4">המציאות החדשה של חיפוש עבודה 👔</h3>
      <p className="text-lg text-blue-800 leading-relaxed">
        בואו נשים את הקלפים על השולחן: חיפוש עבודה זה עבודה. וזה מתיש.
        אבל ב-2026, יש לכם יתרון לא הוגן. רוב המועמדים שולחים קורות חיים גנריים ("ירייה באפלה"). אתם הולכים להשתמש ב-AI כדי להיות הצלף הכי מדויק בחדר.
        <br/><br/>
        המדריך הזה מחולק ל-3 חלקים:
        1. <strong>החדירה:</strong> איך לעבור את מסנני ה-ATS.
        2. <strong>הראיון:</strong> סימולטור אימון בזמן אמת.
        3. <strong>הכסף:</strong> איך להשיג חוזה טוב יותר.
      </p>
    </div>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">חלק 1: איך לנצח את הרובוט (ATS)</h2>
    <p>
      לפני שמגייסת רואה אתכם, תוכנה שנקראת <strong>ATS (Applicant Tracking System)</strong> סורקת את קורות החיים שלכם. אם אין לכם את מילות המפתח המדויקות שהוגדרו למשרה, אתם עפים לפח האוטומטי. גם אם אתם הכי מוכשרים בעולם.
    </p>
    <p>
      <strong>השיטה: התאמה כירורגית ("Tailoring")</strong>
      <br/>
      אל תשלחו את אותו קובץ לכולם. תנו ל-AI להתאים את קורות החיים למשרה הספציפית.
    </p>

    <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl shadow-sm my-8">
      <p className="font-bold text-slate-500 mb-4 uppercase tracking-wide">הפרומפט לפיצוח ה-ATS:</p>
      <div className="font-mono text-xl text-slate-800 leading-relaxed whitespace-pre-wrap">
"אני הולך להדביק כאן שני טקסטים:
1. קורות החיים הנוכחיים שלי.
2. תיאור המשרה (Job Description) שאליה אני רוצה להתמיין.

המשימה שלך היא לפעול כמו מומחה ATS:
1. תגיד לי אילו מילות מפתח קריטיות (Keywords) מופיעות בתיאור המשרה אבל **חסרות** בקורות החיים שלי.
2. תציע לי איך לשכתב את סעיף ה'ניסיון התעסוקתי' שלי כדי שידגיש את המיומנויות שהם מחפשים, בלי לשקר כמובן.
3. תן לי ציון התאמה (0-100) לפני ואחרי השינויים."

[הדבק קורות חיים]
[הדבק תיאור משרה]
      </div>
    </div>

    <p>
      <strong>למה זה עובד?</strong> ה-AI יגיד לכם: "הם מחפשים 'ניהול פרויקטים ב-Agile', ואצלך כתוב רק 'ניהול צוות'. תחליף את המילה". השינוי הקטן הזה הוא ההבדל בין "לא רלוונטי" לבין זימון לראיון.
    </p>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">חלק 2: הסימולטור (חדר הכושר לראיונות)</h2>
    <p>
      הגעתם לראיון. הלחץ בשמיים. הידיים מזיעות.
      הדרך היחידה להוריד את הלחץ היא תרגול. לא "לחשוב על תשובות בראש", אלא <strong>לדבר אותן בקול</strong>.
    </p>

    <div className="bg-indigo-50 border-2 border-indigo-200 p-8 rounded-2xl shadow-md my-8">
      <p className="font-bold text-indigo-900 mb-4 text-xl flex items-center gap-2">
        <span>🎤</span> הפרומפט לסימולציה מלאה (מומלץ ב-Voice Mode)
      </p>
      <div className="font-mono text-xl text-slate-800 leading-relaxed whitespace-pre-wrap">
"אני רוצה לעשות סימולציה לראיון עבודה לתפקיד [שם התפקיד] בחברת [סוג החברה, למשל: סטארטאפ הייטק].

אתה המראיין הקשוח אבל ההוגן.
1. תשאל אותי שאלה אחת בכל פעם.
2. חכה לתשובה שלי.
3. אל תיתן לי פידבק מיד! תמשיך לשאלה הבאה שנובעת מהתשובה שלי (Follow-up question), כמו בשיחה אמיתית. נסה לאתגר אותי אם התשובה שלי כללית מדי.

רק אחרי 5 שאלות, תעצור ותיתן לי משוב מפורט על הביצועים שלי.
נתחיל. השאלה הראשונה שלך היא 'ספר לי על עצמך'."
      </div>
    </div>

    <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">שיטת הכוכב (STAR Method)</h3>
    <p>
      כששואלים אתכם "ספר לי על פעם שנכשלת" או "איך התמודדת עם לקוח קשה", אתם צריכים סיפור מובנה.
      ה-AI הוא עורך הסיפורים שלכם.
    </p>
    <p>
      <strong>הפרומפט:</strong>
      "אני צריך עזרה בבניית תשובה לשאלה התנהגותית על 'קונפליקט בצוות'.
      הסיפור הגולמי שלי הוא: [רבתי עם המעצב על הדדליין, בסוף עשינו פשרה].
      תעזור לי לעצב את הסיפור הזה לפי שיטת STAR (Situation, Task, Action, Result) כדי שהוא ישמע מקצועי, בוגר ומרשים."
    </p>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">חלק 3: המשא ומתן על השכר (Show me the money)</h2>
    <p>
      זה השלב שבו רוב הישראלים מפסידים כסף כי "לא נעים להם".
      ה-AI יכול להיות ה"Bad Cop" שמאמן אתכם לבקש יותר.
    </p>

    <div className="bg-green-50 border-2 border-green-200 p-8 rounded-2xl shadow-md my-8">
      <p className="font-bold text-green-900 mb-4 text-xl flex items-center gap-2">
        <span>💰</span> הפרומפט להעלאת שכר
      </p>
      <div className="font-mono text-xl text-slate-800 leading-relaxed whitespace-pre-wrap">
"קיבלתי הצעת שכר של 18,000 ש"ח. אני יודע שהשוק משלם 22,000 ש"ח ואני רוצה לבקש את זה בלי להישמע חמדן או יהיר.

תעשה איתי משחק תפקידים.
אתה ה-HR. אתה תגיד לי 'זה התקציב המקסימלי שלנו למשרה הזו'.
אני אנסה לשכנע אותך.
תן לי 3 משפטי מפתח (Scripts) שאני יכול להגיד כדי לפתוח את הדיון מחדש בצורה נעימה אך אסרטיבית."
      </div>
    </div>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">בונוס: מכתב התודה (Follow Up)</h2>
    <p>
      סיימתם ראיון? שלחו מייל תודה. זה מבדיל אתכם מ-90% מהמועמדים.
      אבל אל תכתבו "תודה רבה היה נחמד".
    </p>
    <p>
      <strong>הנוסחה:</strong>
      "תכתוב לי מייל תודה קצר למראיינת (דנה). תזכיר את השיחה שהייתה לנו על [נושא ספציפי שעלה בראיון, למשל: האתגרים בכניסה לשוק האמריקאי], ותגיד שיש לי רעיון נוסף לגבי זה שחשבתי עליו בדרך הביתה."
    </p>
    <p>
      זה מראה הקשבה, רצינות וחשיבה יצירתית.
    </p>

    <div className="mt-12 bg-slate-100 p-8 rounded-2xl border border-slate-200 text-center">
      <h3 className="text-2xl font-bold text-slate-900 mb-4">לסיכום</h3>
      <p className="text-slate-700 text-lg">
        ה-AI הוא לא רק "כותב קורות חיים". הוא המאמן האישי שלכם. תשתמשו בו כדי להוריד חלודה, לשייף את המסרים ולהגיע לראיון כשאתם הגרסה הכי טובה ורגועה של עצמכם. בהצלחה!
      </p>
    </div>
  </PlainText>
};