import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const perplexityGuide: Article = {
  id: 'perplexity-ai-search-guide',
  slug: 'מדריך-perplexity-ai',
  metaTitle: 'שכחו מגוגל: למה Perplexity הוא מנוע החיפוש הבא',
  metaDescription: 'נמאס לכם לגלול בין פרסומות ואתרי SEO? הכירו את Perplexity - מנוע חיפוש שעונה תשובות ישירות, מצטט מקורות וחוסך לכם זמן.',
  categoryId: 'basics',
  title: 'הסוף לחיפושים בגוגל? המדריך המלא ל-Perplexity AI',
  description: 'גוגל הפך להיות לוח מודעות ענק מלא בתוכן גנרי. Perplexity מציע חוויה אחרת: אתם שואלים שאלה, ומקבלים תשובה מסוכמת, חכמה, עם הערות שוליים וקישורים למקורות. ככה מחפשים ב-2026.',
  readTimeMinutes: 6,
  lastUpdated: '06/2026',
  imageUrl: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-emerald-50 p-6 rounded-xl border-r-4 border-emerald-600 mb-8">
      <h3 className="text-xl font-bold text-emerald-900 mb-2">זה לא צ'אט, זה חיפוש</h3>
      <p className="text-lg text-emerald-800 leading-relaxed">
        חשוב להבין את ההבדל: ChatGPT הוא יוצר תוכן (שיכול גם לחפש). Perplexity הוא קודם כל מנוע חיפוש.
        הוא לא מנסה להיות יצירתי ולכתוב שירים. הוא מנסה לתת לכם את התשובה הכי מדויקת, עדכנית ומבוססת עובדות שיש, בזמן אמת.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">למה זה יותר טוב מגוגל? (3 סיבות)</h2>
    <ul className="list-disc list-inside space-y-4">
      <li>
        <strong>בלי פרסומות וספאם:</strong> בגוגל אתם גוללים חצי מסך רק כדי לעבור את המודעות הממומנות, ואז מגיעים לאתרים של SEO שמברברים אתכם 500 מילה לפני המתכון. ב-Perplexity אתם מקבלים תשובה נטו.
      </li>
      <li>
        <strong>מקורות (Citations):</strong> לכל משפט בתשובה יש מספר קטן לידו [1]. לחיצה עליו פותחת את האתר המדויק שממנו נלקח המידע. זה קריטי לאמינות. אתם יכולים לוודא שהוא לא המציא.
      </li>
      <li>
        <strong>שאלות המשך (Follow-up):</strong> אחרי התשובה, הוא מציע לכם שאלות קשורות ("Related Questions") שעוזרות לכם להעמיק בנושא בלי להקליד מחדש.
      </li>
    </ul>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">מתי להשתמש בזה? (Use Cases)</h2>
    <p>
      1. <strong>מחקר מוצרים (הכי שימושי):</strong>
      "מה האוזניות ביטול רעשים הכי טובות עד 500 שקל ב-2026? תתחשב בביקורות מ-Reddit."
      הוא יסרוק סקירות, השוואות, פורומים ומחירים ויתן המלצה מנומקת עם יתרונות וחסרונות.
      <br/><br/>
      2. <strong>חדשות ועדכונים:</strong>
      "מה קרה היום בבורסה בתל אביב? למה הדולר עלה?"
      הוא יסכם את כותרות האתרים הכלכליים (גלובס, כלכליסט, דה-מרקר) לתשובה אחת ברורה.
      <br/><br/>
      3. <strong>עובדות מורכבות:</strong>
      "האם מותר להכניס קורקינט חשמלי לרכבת ישראל בשעות העומס? תמצא את התקנון המעודכן."
      במקום שתחפשו באתר הרכבת המסורבל, הוא ימצא את ה-PDF ויענה לכם.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">הפיצ'ר הסודי: Pro Search</h2>
    <p>
      בגרסה בתשלום (או בשימוש מוגבל חינם), יש פיצ'ר שנקרא <strong>Pro Search</strong>.
      זה חיפוש סוכן (Agentic Search). אם תשאלו שאלה כללית מדי, הוא לא סתם יזרוק תשובה. הוא ישאל אתכם שאלות הבהרה!
      <br/>
      <strong>אתם:</strong> "תמצא לי מחשב נייד".
      <br/>
      <strong>Perplexity:</strong> "אשמח לעזור. לאיזה צורך המחשב? גיימינג, עריכת וידאו או עבודה משרדית? מה התקציב שלך? האם גודל המסך חשוב לך?"
      <br/>
      רק אחרי שתענו על השאלות (בלחיצת כפתור), הוא יבצע את החיפוש המעמיק. זה כמו לדבר עם מוכר מקצועי בחנות אלקטרוניקה.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">מצבי חיפוש (Focus Modes)</h2>
    <p>
      בלחיצה על "Focus", אתם יכולים להגביל את המקורות:
      <ul className="list-disc list-inside mt-2">
        <li><strong>Academic:</strong> יחפש רק במאמרים מדעיים.</li>
        <li><strong>Social (Reddit):</strong> יחפש רק בפורומים (מעולה לביקורות אותנטיות).</li>
        <li><strong>YouTube:</strong> ימצא סרטונים רלוונטיים.</li>
      </ul>
    </p>
  </PlainText>
};