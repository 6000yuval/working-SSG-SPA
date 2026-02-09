import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const aiMarketingSocialMedia: Article = {
  id: 'ai-marketing-social-media',
  slug: 'שיווק-בסושיאל-עם-בינה-מלאכותית',
  metaTitle: 'שיווק עם AI: איך לנהל אינסטגרם שלם ב-10 דקות',
  metaDescription: 'מדריך לבעלי עסקים ומנהלי סושיאל: איך ליצור גאנט תוכן חודשי, לכתוב קפשנים וליצור ויז\'ואל מדהים בעזרת בינה מלאכותית.',
  categoryId: 'work',
  title: 'שיווק ב-AI: איך לנהל אינסטגרם ופייסבוק על סטרואידים',
  description: 'נגמרו לכם הרעיונות לפוסטים? אין לכם כוח לכתוב? ה-AI יכול להיות מנהל השיווק הצמוד שלכם. כך תבנו אסטרטגיית תוכן מלאה ברגע, משלב הרעיון ועד העיצוב.',
  readTimeMinutes: 10,
  lastUpdated: '05/2026',
  imageUrl: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-blue-600 mb-8">
      <h3 className="text-xl font-bold text-blue-900 mb-2">הבעיה הגדולה בשיווק</h3>
      <p className="text-lg text-blue-800 leading-relaxed">
        הבעיה בשיווק היא לא "לעלות פוסט פעם ב...", אלא <strong>העקביות</strong> (Consistency). האלגוריתם של אינסטגרם, טיקטוק ולינקדאין אוהב את מי שמעלה תוכן כל יום. אבל למי יש כוח להיות יצירתי ביום שלישי בערב אחרי עבודה?
        בדיוק כאן ה-AI נכנס לתמונה. הוא לא מתעייף, אין לו מחסום כתיבה, והוא עובד בחינם.
      </p>
    </div>

    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
      <h3 className="font-bold text-lg mb-4 text-slate-900">תהליך העבודה המלא</h3>
      <ul className="space-y-2 text-blue-600 font-medium list-disc list-inside">
        <li><a href="#strategy" className="hover:underline">שלב 1: בניית גאנט תוכן חודשי</a></li>
        <li><a href="#caption" className="hover:underline">שלב 2: כתיבת הפוסטים (הקפשן)</a></li>
        <li><a href="#hooks" className="hover:underline">שלב 3: הוקים לסרטונים (Reels/TikTok)</a></li>
        <li><a href="#visual" className="hover:underline">שלב 4: העיצוב הויזואלי</a></li>
      </ul>
    </div>

    <h2 id="strategy" className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. גאנט תוכן בשניות</h2>
    <p>
      במקום לשבת מול מסך ריק ולשבור את הראש, נסו את הפרומפט הבא ב-Claude או ChatGPT (תעתיקו ותשנו את הפרטים):
    </p>
    <div className="bg-white border border-slate-300 p-4 rounded-lg font-mono text-sm mb-4">
      "אני מאמנת כושר אישית שמתמחה בנשים אחרי לידה. הקהל שלי עייף, אין לו זמן, והוא רוצה לחזור לגזרה אבל בצורה בריאה.
      תכין לי טבלה עם תוכנית תוכן לשבועיים (3 פוסטים בשבוע).
      לכל פוסט תכתוב:
      1. פורמט (Reel / תמונה / קרוסלה).
      2. כותרת מושכת (Hook).
      3. הערך לצופה (למה שמישהו יקרא את זה?).
      4. רעיון לויז'ואל."
    </div>
    <p>בום. תוך 10 שניות יש לכם תוכנית עבודה מסודרת. תבחרו את ה-5 רעיונות הכי טובים ותרוצו איתם.</p>

    <h2 id="caption" className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. כתיבת הטקסט (הקפשן)</h2>
    <p>
      כאן הרוב נופלים. הם מבקשים "תכתוב פוסט על תזונה" ומקבלים טקסט רובוטי כמו: "בעידן המודרני, תזונה היא אבן יסוד לבריאותינו. שיהיה שבוע מבורך ומלא בעשייה". איכס. אף אחד לא קורא את זה.
    </p>
    <p>
      <strong>הסוד הוא בפרסונה ובטון:</strong>
      <br/>
      "תכתבי את הפוסט בטון מצחיק, קליל, עם סלנג ישראלי עדין, כמו חברה שמדברת עם חברה בוואטסאפ. תשתמשי במשפטים קצרים. תתחילי בשאלה שתגרום להן לעצור את הגלילה. בלי מילים גבוהות ובלי משפטי השראה קיטשיים."
    </p>

    <h2 id="hooks" className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. הוקים לסרטונים (ה-3 שניות הראשונות)</h2>
    <p>
      בטיקטוק וברילס, ה-3 שניות הראשונות הן הכל. אם לא תפסתם את הצופה, הוא ממשיך לגלול.
      ה-AI הוא מכונה לייצור הוקים (Hooks). בקשו ממנו:
      "תן לי 10 משפטי פתיחה פרובוקטיביים או מפתיעים לסרטון על חיסכון בכסף".
    </p>
    <p>הוא יציע לכם דברים כמו:</p>
    <ul className="list-disc list-inside space-y-1">
      <li>"הבנק שלכם מסתיר מכם את הנתון הזה..."</li>
      <li>"תפסיקו לזרוק כסף על הקפה של הבוקר, הנה החישוב..."</li>
      <li>"עשיתי טעות שעלתה לי 5,000 שקל, אל תחזרו עליה..."</li>
    </ul>

    <h2 id="visual" className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. הויז'ואל: איך זה נראה?</h2>
    <p>יש לכם טקסט, עכשיו צריך תמונה או וידאו.</p>
    <ul className="list-disc list-inside space-y-3">
      <li><strong>Canva Magic:</strong> השתמשו בתבניות המוכנות ובכלי ה-AI של קאנבה כדי לייצר קרוסלות מידע (Carousels) מעוצבות.</li>
      <li><strong>Midjourney:</strong> ליצירת תמונות אווירה מיוחדות שאי אפשר לצלם (למשל: "אישה יושבת על הר של כביסה אבל מחייכת").</li>
      <li><strong>CapCut:</strong> לעריכת סרטונים. יש לו פיצ'רים של כתוביות אוטומטיות (Auto Captions) שעובדים סביר בעברית, ומשפרים את החשיפה כי הרבה אנשים צופים בלי סאונד.</li>
    </ul>

    <div className="bg-yellow-50 p-6 rounded-xl border-t-4 border-yellow-500 my-8">
      <h3 className="font-bold text-yellow-900 mb-2">חוק ה-80/20</h3>
      <p className="text-yellow-800">
        אל תעשו "העתק-הדבק" עיוור. ה-AI נותן לכם את ה-80% הראשונים (הרעיון, המבנה, הטיוטה). אתם ה-20% האחרונים שנותנים את הנשמה, הדיוק, הטאץ' האישי והתגובות לגולשים. אנשים מתחברים לאנשים, לא לרובוטים.
      </p>
    </div>
  </PlainText>
};