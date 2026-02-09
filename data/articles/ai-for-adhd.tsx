import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const aiForAdhd: Article = {
  id: 'ai-for-adhd',
  slug: 'ai-adhd-productivity-assistant',
  metaTitle: 'המוח החיצוני: איך AI מציל אנשים עם הפרעת קשב (ADHD)',
  metaDescription: 'דחיינות? הצפה? בלאגן בראש? המדריך המלא לשימוש ב-ChatGPT כ"קביים למוח". פירוק משימות, ניהול זמן והתמודדות עם בירוקרטיה.',
  categoryId: 'personal',
  title: 'המוח החיצוני: איך ה-AI מציל אנשים עם הפרעת קשב (ADHD)',
  description: 'לאנשים עם הפרעת קשב אין בעיה של "חוסר ידע", יש להם בעיה של "ביצוע". ה-AI הוא הכלי הראשון בהיסטוריה שמחליף את הפונקציות הניהוליות החסרות במוח. מדריך משנה חיים.',
  readTimeMinutes: 11,
  lastUpdated: '06/2026',
  imageUrl: 'https://images.unsplash.com/photo-1555601568-c916f5469248?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-purple-50 p-8 rounded-2xl border-r-4 border-purple-600 mb-10">
      <h3 className="text-2xl font-black text-purple-900 mb-4">זה לא עוד "טיפ לפרודוקטיביות" 🧠</h3>
      <p className="text-lg text-purple-800 leading-relaxed">
        לאנשים נוירוטיפיקלים (בלי הפרעת קשב), רשימת מטלות היא כלי עזר.
        עבור אנשים עם ADHD, ה-AI הוא <strong>פרוטזה</strong>. בדיוק כמו שמשקפיים עוזרים לראות, ה-AI עוזר לנהל. הוא ה"אונה המצחית" החיצונית שלכם. הוא זה שאומר "עכשיו עושים את זה", כשהמוח שלכם צועק "בא לי לעשות הכל חוץ מזה".
      </p>
    </div>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">הבעיה: "קיר הדחיינות" (Wall of Awful)</h2>
    <p>
      מכירים את זה שאתם צריכים "לסדר את הבית", אבל המשימה נראית כל כך גדולה ומפחידה שאתם פשוט יושבים על הספה וגוללים בטיקטוק שעתיים?
      קוראים לזה "שיתוק ניהולי". המוח לא יודע מאיפה להתחיל.
    </p>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">הפתרון: פירוק מיקרוסקופי (Goblin Tools Style)</h2>
    <p>
      ה-AI יכול לקחת משימה ענקית ומפחידה ולפרק אותה לצעדים כל כך קטנים וטיפשיים, שאי אפשר לסרב להם.
    </p>

    <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl shadow-sm my-8">
      <p className="font-bold text-slate-500 mb-4 uppercase tracking-wide">הפרומפט לשבירת שיתוק:</p>
      <div className="font-mono text-xl text-slate-800 leading-relaxed whitespace-pre-wrap">
"אני ב'שיתוק' מול משימה של 'סידור המטבח'. זה נראה לי ענק ובלתי אפשרי.

תפרק לי את המשימה הזו ל-10 צעדים קטנטנים, מגוחכים וקלים לביצוע.
הצעד הראשון צריך להיות משהו שלא דורש מאמץ בכלל (כמו 'לקום מהספה').
תעשה את זה משעשע ומעודד."
      </div>
    </div>

    <p>
      <strong>התוצאה:</strong>
      1. תעמדי מול הכיור.
      2. קחי כוס אחת מלוכלכת.
      3. שימי אותה במדיח.
      ...
      ברגע שעשיתם את הצעד הראשון, הדופמין משתחרר, וההמשך קל יותר.
    </p>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">טכניקה 2: "המתרגם הרגשי" (למיילים מפחידים)</h2>
    <p>
      אנשים עם ADHD סובלים לעיתים מ-RSD (רגישות יתר לדחייה). מייל קריר מהבוס יכול להרגיש כמו סוף העולם ולגרום לחרדה שמונעת מכם לענות.
      תנו ל-AI להיות המסנן.
    </p>

    <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl shadow-sm my-8">
      <p className="font-bold text-slate-500 mb-4 uppercase tracking-wide">הפרומפט לסינון דרמה:</p>
      <div className="font-mono text-xl text-slate-800 leading-relaxed whitespace-pre-wrap">
"קיבלתי את המייל הזה מהלקוח ואני בחרדה לקרוא אותו כי אני מפחד שהוא כועס.

תקרא אתה את המייל.
1. תגיד לי אם הוא באמת כועס או שזה בראש שלי.
2. תסכם לי במשפט אחד: מה הוא רוצה שאעשה תכלס? (בלי הרגש, רק עובדות).
3. תנסח לי טיוטה לתשובה רגועה ומקצועית."
      </div>
    </div>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">טכניקה 3: דופמין לפי דרישה (Gamification)</h2>
    <p>
      מוח ה-ADHD מונע על ידי: עניין, חידוש, דחיפות ואתגר (ICNU). משימות משעממות לא מספקות דופמין.
      הפכו את ה-AI למנהל משחק (Game Master).
    </p>
    <p>
      <strong>הפרומפט:</strong>
      "יש לי שעה לעבוד על הדו"ח המשעמם הזה. תהפוך את זה למשחק RPG.
      אני אביר שנלחם במפלצת הבירוקרטיה. כל 10 דקות עבודה מורידות למפלצת 100 נקודות חיים.
      אני אדווח לך כל 10 דקות מה עשיתי, ואתה תתאר לי את הקרב ותחגוג את ההצלחות שלי."
    </p>
    <p>
      זה נשמע ילדותי? אולי. אבל זה עובד. זה מייצר <strong>חידוש ועניין</strong> במשימה משמימה.
    </p>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">טכניקה 4: Body Doubling (החבר לעבודה)</h2>
    <p>
      Body Doubling זו השיטה שבה מישהו פשוט נמצא איתכם בחדר בזמן שאתם עובדים, וזה עוזר להתרכז.
      השתמשו ב-Voice Mode של ChatGPT.
    </p>
    <p>
      שימו את הטלפון על השולחן ותגידו לו:
      "אני צריך לקפל כביסה עכשיו במשך 15 דקות. תישאר איתי על הקו.
      אני לא אדבר הרבה, אבל פעם בכמה דקות תזרוק לי מילת עידוד או תשאל 'כמה חולצות נשארו?'. אל תיתן לי לגעת בטלפון."
    </p>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">לסיכום: אל תנסו לזכור, תתעדו</h2>
    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
      <p className="text-lg text-green-900">
        הזיכרון לטווח קצר (Working Memory) של אנשים עם ADHD הוא כמו מסננת.
        אל תגידו "אני אזכור את זה".
        תפתחו את ChatGPT (או את הווידג'ט שלו במסך הבית) ותזרקו לשם הכל: "תזכיר לי לקנות חלב", "יש לי רעיון לסטארטאפ...", "הרופא אמר לקחת כדור בערב".
        בסוף היום תבקשו ממנו: "תעשה לי סדר בכל מה שזרקתי עליך היום, ותכין לי רשימת מטלות למחר".
      </p>
    </div>
  </PlainText>
};