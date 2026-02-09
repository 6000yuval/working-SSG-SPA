import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const professionalEnglishAi: Article = {
  id: 'professional-english-ai',
  slug: 'שיפור-אנגלית-מיילים-ai',
  metaTitle: 'להישמע כמו אמריקאי: איך לשדרג מיילים באנגלית לאפס טעויות',
  metaDescription: 'לא בטוחים בגרמר שלכם? ה-AI יכול לשכתב את המיילים שלכם כך שישמעו כאילו נולדתם בניו-יורק. מדריך לכתיבה עסקית מקצועית.',
  categoryId: 'work',
  title: 'אנגלית עסקית מושלמת: איך ה-AI הופך אתכם לנייטיב',
  description: 'כולנו מכירים את הפחד לשלוח מייל עם שגיאת כתיב מביכה לקולגה בחו"ל. כך תשתמשו ב-ChatGPT וב-Claude כדי להפוך את האנגלית שלכם למלוטשת ומקצועית.',
  readTimeMinutes: 5,
  lastUpdated: '05/2026',
  imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-blue-600 mb-8">
      <h3 className="text-xl font-bold text-blue-900 mb-2">לא עוד גוגל טרנסלייט</h3>
      <p className="text-lg text-blue-800 leading-relaxed">
        גוגל טרנסלייט מתרגם מילים. כלי AI מתרגמים <strong>כוונה</strong>. הם מבינים ניואנסים, תרבות וסגנון דיבור. הם יודעים איך להישמע מנומסים אבל תקיפים, או חבריים אבל מקצועיים.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">טכניקת ה-Rewrite (שכתוב)</h2>
    <p>
      אל תבקשו ממנו לכתוב מאפס. כתבו את המייל באנגלית השבורה שלכם (או אפילו בעברית), ובקשו ממנו לשפץ.
    </p>
    <div className="bg-white border border-slate-300 p-4 rounded-lg font-mono text-sm mb-4">
      "Here is a draft of an email to a client.
      Please rewrite it to sound more professional, polite, and native-speaker level. Keep it concise.
      Draft: [הדביקו כאן את הטקסט שלכם]"
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">התאמת הטון (Tone of Voice)</h2>
    <p>
      באנגלית, הטון הוא הכל. בקשו מה-AI להתאים את הטקסט לסיטואציה:
    </p>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>לבוס:</strong> "Make it sound respectful and formal."</li>
      <li><strong>לקולגה קרוב:</strong> "Make it sound casual and friendly."</li>
      <li><strong>ללקוח שלא משלם:</strong> "Make it firm and assertive, but polite."</li>
    </ul>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">בדיקת דקדוק (Grammar Check)</h2>
    <p>
      אתם יכולים להשתמש בו כמורה פרטי. במקום סתם לתקן, בקשו הסבר:
    </p>
    <div className="bg-white border border-slate-300 p-4 rounded-lg font-mono text-sm mb-4">
      "Fix the grammar in this sentence and explain my mistakes:
      'I am looking forward to meet you tomorrow.'"
    </div>
    <p>
      הוא יסביר לכם שצריך לומר "looking forward to <strong>meeting</strong> you" וילמד אתכם את הכלל לפעם הבאה.
    </p>

    <div className="bg-yellow-50 p-6 rounded-xl border-t-4 border-yellow-500 my-8">
      <h3 className="font-bold text-yellow-900 mb-2">טיפ ל-Claude</h3>
      <p className="text-yellow-800">
        Claude (גרסת 4.6 החדשה) נחשב לטוב ביותר בכתיבה טבעית. הטקסטים שלו נשמעים הכי פחות "רובוטיים". אם אתם צריכים לכתוב מכתב חשוב (כמו Cover Letter לעבודה), נסו להשתמש בו.
      </p>
    </div>
  </PlainText>
};