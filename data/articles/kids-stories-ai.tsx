import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const kidsStoriesAi: Article = {
  id: 'kids-stories-ai',
  slug: 'סיפורי-ילדים-מותאמים-אישית',
  metaTitle: 'אבא, תספר לי סיפור: איך ליצור ספרי ילדים עם הגיבורים שלכם',
  metaDescription: 'הילד רוצה סיפור על עצמו ועל הכלב שלו טסים לחלל? המדריך ליצירת סיפורים מותאמים אישית עם טקסט ותמונות, שירדימו אותם בחיוך.',
  categoryId: 'personal',
  title: 'ספר ילדים ב-10 דקות: ליצור סיפורים שהילדים שלכם הם הגיבורים',
  description: 'אין מתנה יותר מרגשת לילד מאשר סיפור שבו הוא הגיבור. עם כלי AI, אתם יכולים לכתוב, לאייר ואפילו להדפיס ספר שלם הערב.',
  readTimeMinutes: 7,
  lastUpdated: '06/2026',
  imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-purple-50 p-6 rounded-xl border-r-4 border-purple-600 mb-8">
      <h3 className="text-xl font-bold text-purple-900 mb-2">קסם לפני השינה</h3>
      <p className="text-lg text-purple-800 leading-relaxed">
        הילדים שלכם אוהבים דינוזאורים? פיות? מכבי אש?
        במקום לקנות עוד ספר גנרי, תצרו להם סיפור שבו "נועה האמיצה והדובי שלה במבה מצילים את גן הילדים מדרקון שאוהב שוקולד". העיניים שלהם יבריקו.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">שלב 1: הכתיבה (Claude/ChatGPT)</h2>
    <p>
      השתמשו ב-Claude (הוא כותב יצירתי יותר). תנו לו הנחיות מדויקות:
    </p>
    <div className="bg-white border border-slate-300 p-4 rounded-lg font-mono text-sm mb-4">
      "תכתוב סיפור ילדים קצר (כ-300 מילים) לילדה בת 4 בשם מאיה.
      מאיה היא ילדה סקרנית עם שיער מתולתל ומשקפיים סגולים.
      הסיפור צריך להיות על הפחד שלה מחושך, ואיך היא מתגברת עליו בעזרת פנס הקסמים שלה.
      הטון צריך להיות מרגיע, מתוק, ומותאם לפני השינה.
      תחלק את הסיפור ל-6 עמודים (פסקאות)."
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">שלב 2: האיור (Midjourney/DALL-E)</h2>
    <p>
      עכשיו נהפוך את הטקסט לתמונות. DALL-E (בתוך ChatGPT) הוא הכי קל לשימוש כי הוא מבין עברית (בערך), אבל Midjourney נותן תוצאות יפות יותר.
    </p>
    <p><strong>פרומפט לאיור (באנגלית):</strong></p>
    <div className="bg-white border border-slate-300 p-4 rounded-lg font-mono text-sm mb-4">
      "Children's book illustration style, cute watercolor painting.
      A little 4-year-old girl with curly hair and purple glasses, holding a glowing flashlight under a blanket fort.
      Warm, cozy atmosphere, soft colors."
    </div>
    <p>
      <em>טיפ למתקדמים:</em> כדי שהדמות תיראה אותו דבר בכל התמונות, ב-Midjourney השתמשו בפיצ'ר "Character Reference" (--cref).
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">שלב 3: העיצוב (Canva)</h2>
    <p>
      פתחו את Canva, בחרו תבנית של "Storybook".
      הדביקו בכל עמוד את הטקסט שקיבלתם ואת התמונה שיצרתם.
      אפשר להוריד כ-PDF ולקרוא באייפד, או אפילו לשלוח להדפסה כמתנת יום הולדת.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">בונוס: הקראה קולית</h2>
    <p>
      רוצים לשדרג? השתמשו בכלי AI לקול (כמו ElevenLabs) כדי ליצור קריינות לסיפור, אולי אפילו בקול שלכם או של סבא/סבתא (באישורם כמובן!).
    </p>
  </PlainText>
};