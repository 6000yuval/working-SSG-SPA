import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const howChatgptWorksSimple: Article = {
  id: 'how-chatgpt-works-simple',
  slug: 'how-chatgpt-works-simple',
  metaTitle: 'איך ChatGPT עובד? הסבר פשוט שבני אדם מבינים (עדכון 2026)',
  metaDescription: 'בלי מתמטיקה ובלי קוד. ההסבר הפשוט על ההבדל בין המודלים הישנים (שניחשו מילים) למודלים החדשים של 2026 שבאמת "חושבים" לפני שהם עונים.',
  categoryId: 'basics',
  title: 'איך ChatGPT באמת עובד? (הסבר בגובה העיניים - מודל 2026)',
  description: 'עד לא מזמן אמרו לנו ש-AI הוא רק "תוכי סטטיסטי". ב-2026 זה השתנה. המודלים החדשים פיתחו יכולת "חשיבה" (Reasoning). הנה ההסבר החדש לאיך הקסם קורה.',
  readTimeMinutes: 6,
  lastUpdated: '02/2026',
  imageUrl: 'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-purple-50 border-r-4 border-purple-600 p-6 mb-8 rounded-xl">
      <h3 className="text-xl font-bold text-purple-900 mb-2">המהפכה של 2025-2026 🧠</h3>
      <p className="text-lg text-purple-800 leading-relaxed">
        אם הייתם שואלים אותי ב-2024 איך זה עובד, הייתי אומר "הוא מנחש את המילה הבאה".
        אבל היום? זה כבר לא מדויק. המודלים החדשים (כמו o3 ו-Gemini 3) לא סתם יורים מילים. הם <strong>עוצרים לחשוב</strong>.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">שלב 1: הילד שלמד את כל האינטרנט</h2>
    <p>
      הבסיס נשאר דומה: דמיינו ילד שקרא את כל הספרים, הויקיפדיה והשיחות בעולם.
      הוא יודע סטטיסטיקה. הוא יודע שאחרי המילה "אני הולך ל...", בדרך כלל באה המילה "בית" או "ישון".
      זה היה המנגנון של GPT-4. "חיזוי המילה הבאה" (Next Token Prediction).
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">שלב 2: המודל שמתבונן פנימה (System 2 Thinking)</h2>
    <p>
      כאן נכנס השינוי של 2026.
      כשאתם שואלים את המודלים החדשים שאלה קשה, הם לא עונים מיד.
      הם מריצים "מונולוג פנימי" (Chain of Thought) שאתם לא רואים (או רואים מטושטש).
    </p>
    <p>
      <strong>דוגמה:</strong> שאלתם "כמה זה 123 כפול 456?".
      <br/>
      <strong>מודל ישן (2024):</strong> היה מנסה לנחש את התשובה לפי דוגמאות שראה בעבר. לפעמים צדק, לפעמים המציא מספר שנראה נכון.
      <br/>
      <strong>מודל חדש (2026):</strong> אומר לעצמו: "רגע, זו בעיית כפל. אני צריך לפרק את זה. 100 כפול 456 זה... 20 כפול 456 זה...". הוא ממש פותר את התרגיל שלב-אחרי-שלב בראש, ורק אז פולט את התשובה הסופית.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">אז הוא כבר לא "הוזה" (Hallucinations)?</h2>
    <p>
      הוא הוזה הרבה פחות. בגלל שהוא בודק את עצמו לפני שהוא עונה ("רגע, זה הגיוני מה שכתבתי?"), רמת האמינות עלתה דרמטית.
      אבל עדיין – אם תשאלו אותו על משהו שלא קיים ("מי היה מלך ישראל ב-2026?"), הוא עלול להתבלבל ולנסות להמציא תשובה הגיונית.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">האם יש לו רגשות?</h2>
    <p>
      חד משמעית לא. כשהוא כותב "אני מבין אותך ומצטער לשמוע", הוא לא מרגיש צער.
      הוא פשוט יודע, סטטיסטית, שכשבני אדם מספרים על צרה, התגובה הכי מתאימה והכי סבירה היא אמפתיה.
      הוא שחקן מושלם, שמכיר את התסריט האנושי יותר טוב מאיתנו.
    </p>
  </PlainText>
};