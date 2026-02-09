import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const aiMedicalAnalysis: Article = {
  id: 'ai-medical-analysis',
  slug: 'ai-medical-blood-test-analysis',
  metaTitle: 'הרופא בכיס: איך לפענח בדיקות רפואיות עם AI (בזהירות)',
  metaDescription: 'קיבלתם בדיקות דם בג\'יבריש? הרופא דיבר סינית? המדריך המלא והזהיר לשימוש ב-ChatGPT ו-Claude להבנת המצב הבריאותי שלכם.',
  categoryId: 'personal',
  title: 'הרופא בכיס: איך להבין מה באמת כתוב בבדיקות הדם? (מדריך זהיר)',
  description: 'הרופאים עמוסים, התורים קצרים, ואנחנו נשארים עם שאלות. איך הופכים את ה-AI ל"מתורגמן רפואי" שיסביר לכם במילים פשוטות מה אומרים המספרים, בלי להחליף את הרופא האמיתי.',
  readTimeMinutes: 10,
  lastUpdated: '06/2026',
  imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-red-50 p-8 rounded-2xl border-r-4 border-red-600 mb-10">
      <h3 className="text-2xl font-black text-red-900 mb-4">אזהרת מוות (תרתי משמע) ☠️</h3>
      <p className="text-lg text-red-800 leading-relaxed">
        <strong>ה-AI אינו רופא. נקודה.</strong>
        <br/><br/>
        הוא מודל סטטיסטי. הוא עלול לטעות, להמציא מחלות, או לפספס סימנים מצילי חיים שרופא אנושי רואה בשנייה.
        <br/>
        המדריך הזה נועד אך ורק להעשיר את הידע שלכם ולהכין אתכם לפגישה עם הרופא. <strong>לעולם אל תשנו מינון תרופות או תבטלו טיפול על סמך המלצת AI.</strong>
      </p>
    </div>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">למה בכלל להשתמש ב-AI ברפואה?</h2>
    <p>
      מערכת הבריאות בישראל בקריסה. הרופא הממוצע מקדיש למטופל 7 דקות. בזמן הזה הוא בקושי מספיק להסתכל על המסך, בטח שלא להסביר לכם לעומק את המנגנון הביולוגי של הכולסטרול שלכם.
    </p>
    <p>
      ה-AI ממלא את החלל הזה. הוא "הרופא הסבלני". הוא יכול להסביר לכם שוב ושוב, בשפה של ילד בן 5, מה זה אומר ש"הפריטין נמוך", ואיך זה קשור לעייפות שלכם. הוא נותן לכם <strong>כוח וידע</strong> (Patient Empowerment). כשאתם מגיעים לרופא מוכנים, אתם מקבלים טיפול טוב יותר.
    </p>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">תרחיש 1: פענוח בדיקות דם</h2>
    <p>
      נכנסתם לאפליקציה של הקופה, ויש שם ים של מספרים ואותיות באנגלית (WBC, HGB, PLT). חלק באדום, חלק בשחור. מלחיץ.
    </p>
    <p>
      <strong>השלב המקדים (קריטי!): שמירה על פרטיות</strong>
      <br/>
      לפני שאתם מעלים משהו: צלמו מסך, והשתמשו בטוש של הטלפון כדי <strong>למחוק את השם שלכם ותעודת הזהות</strong>. המידע הרפואי שלכם הוא קדוש, אל תתנו אותו ל-OpenAI.
    </p>

    <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl shadow-sm my-8">
      <p className="font-bold text-slate-500 mb-4 uppercase tracking-wide">הפרומפט לפענוח בדיקות:</p>
      <div className="font-mono text-xl text-slate-800 leading-relaxed whitespace-pre-wrap">
"אני מעלה תמונה של בדיקות דם שעשיתי הבוקר. אני גבר בן 45, בדרך כלל בריא.

1. עבור שורה-שורה על המדדים החריגים (אלו שמחוץ לטווח).
2. הסבר לי בעברית פשוטה: מה המדד הזה בודק?
3. מה יכולות להיות הסיבות הנפוצות לחריגה כזו? (תזונה? וירוס? סטרס?)
4. האם יש קשר בין המדדים החריגים השונים? (למשל: האם הברזל הנמוך מסביר את ההמוגלובין הנמוך?)

אל תלחיץ סתם, תהיה ענייני."
      </div>
    </div>

    <p>
      הוא יסביר לכם: "ה-LYM גבוה וה-NEUT נמוך, זה בדרך כלל דפוס שאופייני למחלה ויראלית פשוטה שחולפת לבד". פתאום אתם נושמים לרווחה.
    </p>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">תרחיש 2: סיכום ביקור רופא / אשפוז</h2>
    <p>
      יצאתם מבית חולים עם "מכתב שחרור". זה מסמך של 4 עמודים מלא במונחים רפואיים בלטינית ("סטטוס פוסט...", "ללא ממצא פתולוגי...").
      אף אחד לא מבין מה כתוב שם.
    </p>
    <p>
      צלמו את המכתב (שוב, מחקו פרטים מזהים!) ובקשו:
    </p>

    <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl shadow-sm my-8">
      <p className="font-bold text-slate-500 mb-4 uppercase tracking-wide">הפרומפט לתרגום 'רופאית':</p>
      <div className="font-mono text-xl text-slate-800 leading-relaxed whitespace-pre-wrap">
"מצורף סיכום ביקור. תרגם לי אותו לעברית של בני אדם.

1. מה בדיוק הייתה האבחנה הסופית? (מה היה לי?)
2. אילו טיפולים קיבלתי?
3. הכי חשוב: מה ההנחיות להמשך? מה אני צריך לעשות מחר בבוקר? (לקחת כדורים? לקבוע תור?)"
      </div>
    </div>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">תרחיש 3: הכנה לפגישת רופא מומחה</h2>
    <p>
      חיכיתם 4 חודשים לתור אצל נוירולוג. יש לכם בדיוק 10 דקות איתו. אסור לכם לבזבז זמן על "אממ... שכחתי מה רציתי לשאול".
      ה-AI הוא המאמן שלכם לפני המשחק.
    </p>

    <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl shadow-sm my-8">
      <p className="font-bold text-slate-500 mb-4 uppercase tracking-wide">הפרומפט להכנה לתור:</p>
      <div className="font-mono text-xl text-slate-800 leading-relaxed whitespace-pre-wrap">
"יש לי תור לרופא גסטרו (עיכול) בגלל כאבי בטן שחוזרים אחרי ארוחות חלביות.

1. תכין לי רשימה של 5 שאלות קריטיות שאני חייב לשאול אותו כדי לא לפספס כלום.
2. אילו פרטים מההיסטוריה שלי חשוב שאספר לו מיד בהתחלה?
3. האם יש בדיקות ספציפיות שכדאי לי לבקש ממנו?"
      </div>
    </div>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">הסכנה: היפוכונדריה דיגיטלית</h2>
    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
      <h3 className="text-xl font-bold text-yellow-900 mb-2">ד"ר גוגל על סטרואידים</h3>
      <p className="text-lg text-yellow-800">
        אם תכתבו ל-AI "כואב לי הראש", הוא עלול להגיד "זה יכול להיות חוסר שינה, או שזה יכול להיות גידול נדיר במוח".
        ה-AI מאומן על כל הטקסטים באינטרנט, ואינטרנט אוהב דרמה.
        <br/><br/>
        <strong>הכלל:</strong> תמיד תבקשו ממנו: "סדר את האפשרויות מהנפוץ ביותר לנדיר ביותר". זה ירגיע אתכם שרוב הסיכויים שזה פשוט התייבשות.
      </p>
    </div>

    <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">אינטראקציות בין תרופות</h2>
    <p>
      אתם לוקחים אנטיביוטיקה, ובדיוק כואב לכם הראש ורציתם לקחת נורופן. האם מותר לערבב?
      הרוקחים יודעים, אבל ה-AI זמין עכשיו.
      <br/>
      <em>"אני לוקח מוקסיפן 500 מ"ג. האם מותר לי לקחת אדוויל? האם יש התנגשות ידועה?"</em>
      <br/>
      הוא יתן תשובה מבוססת על עלוני התרופות. ושוב - במקרה של ספק, מרימים טלפון למוקד אחיות.
    </p>
  </PlainText>
};