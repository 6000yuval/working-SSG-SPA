import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const aiPresentationsGamma: Article = {
  id: 'ai-presentations-gamma',
  slug: 'מצגות-אוטומטיות-gamma',
  metaTitle: 'שונאים פאוורפוינט? הכירו את Gamma: מצגות מעוצבות מכלום',
  metaDescription: 'איך ליצור מצגת שלמה (שקפים, טקסט, תמונות) בתוך דקה אחת. המדריך לשימוש ב-Gamma ובכלי AI למצגות.',
  categoryId: 'work',
  title: 'מצגת ב-60 שניות: איך Gamma תציל אתכם לפני הפגישה',
  description: 'להכין מצגת זה סיוט. צריך לכתוב תוכן, לעצב שקפים, לחפש תמונות... ה-AI עושה את כל זה במקביל. אתם רק נותנים כותרת.',
  readTimeMinutes: 4,
  lastUpdated: '05/2026',
  imageUrl: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-blue-600 mb-8">
      <h3 className="text-xl font-bold text-blue-900 mb-2">מה זה Gamma?</h3>
      <p className="text-lg text-blue-800 leading-relaxed">
        זה כמו PowerPoint, אבל חכם. במקום להתחיל משקף לבן, אתם מתחילים מצ'אט. אתם אומרים לו על מה המצגת, והוא בונה אותה לבד – כולל העיצוב, הטקסטים והתמונות.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">איך זה עובד?</h2>
    <ol className="list-decimal list-inside space-y-4">
      <li>נרשמים ל-Gamma.app (יש גרסה חינמית נדיבה).</li>
      <li>לוחצים על "Create New" -> "Generate".</li>
      <li>כותבים את הנושא: "מצגת משקיעים לסטארטאפ בתחום הקפה, שמגייס 2 מיליון דולר".</li>
      <li>הוא יציע לכם ראשי פרקים (Outline). אתם יכולים לערוך אותם או לאשר.</li>
      <li>בוחרים "Theme" (ערכת עיצוב) – כהה, צבעוני, רשמי וכו'.</li>
      <li>לוחצים Generate ומסתכלים בפליאה איך השקפים נוצרים מול העיניים.</li>
    </ol>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">עריכה ושיפור</h2>
    <p>
      המצגת הראשונית היא בערך 80% מוכנה.
      עכשיו אתם יכולים להשתמש בצ'אט הצדדי כדי לשנות דברים:
      "תחליף את התמונה בשקף 3 למשהו יותר שמח."
      "תקצר את הטקסט בשקף 5."
      "תוסיף שקף סיכום בסוף."
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">ייצוא (Export)</h2>
    <p>
      סיימתם? אתם יכולים להציג ישר מתוך האתר, או להוריד את המצגת כקובץ PDF או אפילו כקובץ PowerPoint רגיל (PPTX) כדי להמשיך לערוך אותה באופיס.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">תמיכה בעברית</h2>
    <p>
      Gamma תומך בעברית מצוין (RTL). הטקסט מיושר לימין אוטומטית, והוא יודע לכתוב תוכן בעברית על כל נושא.
      לפעמים הפונטים קצת בסיסיים, אבל אפשר לשנות אותם ידנית.
    </p>
  </PlainText>
};