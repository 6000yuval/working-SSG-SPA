import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const canvaAiMagicStudio: Article = {
  id: 'canva-ai-magic-studio',
  slug: 'מדריך-קאנבה-ai-עיצוב-אוטומטי',
  metaTitle: 'לא צריך מעצב גרפי? המהפכה של Canva Magic Studio',
  metaDescription: 'קאנבה הכניסה בינה מלאכותית לתוך העיצובים שלכם. איך מוחקים חפצים מתמונה, מרחיבים רקע ויוצרים מצגות בלחיצת כפתור.',
  categoryId: 'skills',
  title: 'המדריך ל-Canva AI: לעצב כמו מקצוען בלי לדעת לעצב',
  description: 'Canva היא כבר מזמן לא רק "עיצובים מוכנים". כלי ה-AI החדשים שלה (Magic Studio) מאפשרים לכם לעשות דברים שפעם דרשו פוטושופ ושעות של עבודה.',
  readTimeMinutes: 8,
  lastUpdated: '04/2026',
  imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b7993125651?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-purple-50 p-6 rounded-xl border-r-4 border-purple-600 mb-8">
      <h3 className="text-xl font-bold text-purple-900 mb-2">למי זה טוב? (תכלס)</h3>
      <p className="text-lg text-purple-800 leading-relaxed">
        אם אתם בעלי עסקים קטנים, מנהלי סושיאל, מורים, סטודנטים או סתם אנשים שצריכים להכין מצגת או הזמנה – המדריך הזה ישנה לכם את החיים.
        פעם, כדי למחוק מישהו מהרקע של תמונה, הייתם צריכים לשלם למעצב או ללמוד פוטושופ. היום? זה לוקח קליק וחצי בתוך קאנבה.
      </p>
    </div>

    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
      <h3 className="font-bold text-lg mb-4 text-slate-900">הכלים השווים באמת (Magic Studio)</h3>
      <ul className="space-y-2 text-blue-600 font-medium list-disc list-inside">
        <li><a href="#eraser" className="hover:underline">Magic Eraser (להעלים את הבלגן)</a></li>
        <li><a href="#expand" className="hover:underline">Magic Expand (להמציא את הרקע)</a></li>
        <li><a href="#grab" className="hover:underline">Magic Grab (להזיז דברים בתוך תמונה)</a></li>
        <li><a href="#edit" className="hover:underline">Magic Edit (להחליף חפצים)</a></li>
        <li><a href="#switch" className="hover:underline">Magic Switch (ריסייז קסום)</a></li>
      </ul>
    </div>

    <h2 id="eraser" className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Magic Eraser: להעלים את האקס מהתמונה</h2>
    <p>
      צילמתם את המוצר החדש שלכם, אבל ברקע רואים כוס קפה מלוכלכת? הצטלמתם בחוף הים, אבל יש איש זר שעומד בדיוק מאחוריכם והורס את הפריים?
    </p>
    <p>
      <strong>איך עושים את זה:</strong>
      <br/>
        לוחצים על התמונה {'>'} Edit Photo {'>'} בוחרים בכלי <strong>Magic Eraser</strong>.
      עכשיו פשוט "צובעים" עם המברשת את מה שרוצים להעלים. משחררים את העכבר, ו... פוף. קאנבה לא רק מוחקת, היא משלימה את הרקע כאילו החפץ מעולם לא היה שם. זה עובד ב-90% מהמקרים בצורה מושלמת.
    </p>

    <h2 id="expand" className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Magic Expand: כשחסר לכם רקע</h2>
    <p>
      זו בעיה קלאסית: יש לכם תמונה אופקית (לרוחב), אבל אתם צריכים להעלות אותה לסטורי (לאורך). אם תגדילו אותה, הנושא ייחתך. אם תשימו אותה באמצע, יהיו שוליים מכוערים.
    </p>
    <p>
      כאן נכנס <strong>Magic Expand</strong>. הכלי הזה משתמש ב-AI כדי "להמציא" את ההמשך של התמונה. הוא יודע להמשיך את הנוף, את השמיים, את השולחן או את הקיר בצורה טבעית לחלוטין. אתם פשוט גוררים את המסגרת לגודל הרצוי, וקאנבה ממלאת את החלל הריק.
    </p>

    <h2 id="grab" className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Magic Grab: להזיז את מה שאי אפשר להזיז</h2>
    <p>
      דמיינו שצילמתם תמונה של כלב יושב על דשא. זו תמונה אחת שטוחה (JPG).
      עם <strong>Magic Grab</strong>, ה-AI מזהה את הכלב, מנתק אותו מהרקע, והופך אותו לאלמנט שאפשר להזיז! פתאום אתם יכולים לגרור את הכלב ימינה כדי לפנות מקום לטקסט, והרקע מאחוריו יושלם אוטומטית. זה פשוט קסם.
    </p>

    <h2 id="edit" className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Magic Edit: להפוך פרח לפיצה</h2>
    <p>
      זה הפיצ'ר הכי כיפי ויצירתי. אתם מסמנים אובייקט בתמונה (למשל, זר פרחים שהדוגמנית מחזיקה ביד) וכותבים בחלונית טקסט: "זר בלוני הליום אדומים".
      ה-AI לא סתם מדביק תמונה של בלונים. הוא מייצר בלונים שמתאימים לתאורה, לזווית ולאחיזה של הדוגמנית. אתם יכולים להחליף בגדים, לשנות צבע של מכונית, או להפוך עוגה לסלט.
    </p>

    <h2 id="switch" className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Magic Switch: להכין תוכן לכל הפלטפורמות</h2>
    <p>
      עיצבתם פוסט מושקע לאינסטגרם. עכשיו אתם רוצים את אותו עיצוב, אבל במידה של פוסט ללינקדאין, ובמידה של סטורי, ואולי גם כמסמך A4 להדפסה.
      במקום לעצב מחדש 4 פעמים, לוחצים על <strong>Magic Switch</strong>. בוחרים את הפורמטים הרצויים, וקאנבה מסדרת מחדש את כל האלמנטים, התמונות והטקסטים כך שיתאימו לגודל החדש. זה חוסך שעות של עבודה שחורה.
    </p>

    <div className="mt-8 border-t pt-6 bg-yellow-50 p-4 rounded-lg">
      <h3 className="font-bold text-xl mb-2">כמה זה עולה?</h3>
      <p>
        חשוב לדעת: רוב כלי הקסם האלה (Magic Studio) זמינים רק למנויי <strong>Canva Pro</strong>. המנוי עולה כ-40-50 ש"ח לחודש.
        <br/>
        הטיפ שלי? אם אתם בעלי עסק או יוצרי תוכן, זה הכסף הכי טוב שתשקיעו. זה זול משמעותית מכל תוכנה של Adobe וחוסך המון זמן.
      </p>
    </div>
  </PlainText>
};