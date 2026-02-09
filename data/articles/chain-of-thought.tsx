import React from 'react';
import { Article } from '../../types';
import { PlainText } from '../../components/PlainText';

export const chainOfThought: Article = {
  id: 'chain-of-thought',
  slug: 'chain-of-thought-prompting',
  metaTitle: 'שרשרת מחשבה (Chain of Thought): הטריק שימנע מה-AI לעשות טעויות',
  metaDescription: 'ה-AI שלכם טועה בחישובים או מפספס פרטים? למדו את הטריק הפשוט של "לחשוב צעד אחר צעד" (Chain of Thought) שישפר את התשובות שלו פלאים.',
  categoryId: 'skills',
  title: 'שרשרת מחשבה (Chain of Thought): השיטה שתמנע מה-AI לעשות פדיחות',
  description: 'טכניקת "שרשרת המחשבה" (Chain of Thought) היא שם מפוצץ לטריק פשוט: להכריח את המודל להראות את הדרך, כמו בשיעור חשבון. הנה איך זה עובד.',
  readTimeMinutes: 7,
  lastUpdated: '04/2026',
  imageUrl: 'https://images.unsplash.com/photo-1509228627129-7252f3057dc5?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-blue-50 border-r-4 border-blue-600 p-6 mb-8 rounded-xl">
      <h3 className="text-xl font-bold text-blue-900 mb-2">תדמיינו תלמיד בשיעור חשבון 🧮</h3>
      <p className="text-lg text-blue-800 leading-relaxed">
        אם המורה שואלת "כמה זה 234 כפול 12?" והתלמיד יורה תשובה מהמותן – רוב הסיכויים שהוא יטעה.
        אבל אם הוא לוקח דף ועט, ופותר את התרגיל שלב אחרי שלב – הוא יצדק.
        <strong>ה-AI עובד בדיוק אותו דבר.</strong>
      </p>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">למה ה-AI טועה בשאלות קשות?</h2>
    <p>
      כמו שהסברנו, ה-AI מנסה לנחש את המילה הבאה. כשאנחנו שואלים אותו חידה או שאלה לוגית, הוא לפעמים מנסה "לקפוץ" ישר לתשובה הסופית, בלי שעבר בדרך את תהליך המחשבה.
      זה גורם לו לפספס פרטים, להתבלבל בחישובים ולתת תשובות שנראות נכונות אבל הן שגויות לגמרי. כאן נכנסת לתמונה <strong>שרשרת מחשבה (Chain of Thought)</strong>.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">מילת הקסם: "צעד אחר צעד"</h2>
    <p>
      המחקרים הראו ששינוי קטן בפרומפט משנה את הכל. פשוט תוסיפו בסוף השאלה שלכם את המשפט:
    </p>
    
    <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl shadow-sm my-8">
      <p className="font-bold text-slate-500 mb-4 uppercase tracking-wide">הפרומפט המדויק:</p>
      <div className="font-mono text-xl text-slate-800 leading-relaxed whitespace-pre-wrap">
"תחשוב על זה צעד אחר צעד (Think step by step)"
      </div>
    </div>

    <p>
      זהו. זה כל הקסם. ברגע שביקשתם את זה, ה-AI "מכריח" את עצמו לכתוב את שלבי הפתרון, וזה נותן לו זמן "לחשוב" ולדייק את התשובה הסופית.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">דוגמה מהחיים: חידת התפוחים</h2>
    <div className="space-y-6 mt-4">
      <div className="bg-red-50 p-6 rounded-xl border border-red-200">
        <p className="font-bold text-red-900 mb-2 text-lg">❌ איך הרוב שואלים (ונכשלים)</p>
        <p className="text-md italic text-slate-600 bg-white p-3 rounded">"לדני יש 5 תפוחים. הוא זרק 2, קנה עוד 3, ואכל 1. כמה תפוחים יש לו?"</p>
        <p className="text-red-700 mt-3 font-bold">תשובה שגויה אפשרית: "לדני יש 6 תפוחים." (המודל ניסה לחשב בראש והתבלבל).</p>
      </div>

      <div className="bg-green-50 p-6 rounded-xl border border-green-200">
        <p className="font-bold text-green-900 mb-2 text-lg">✅ איך שואלים נכון (Chain of Thought)</p>
        <p className="text-md italic text-slate-600 bg-white p-3 rounded">"לדני יש 5 תפוחים. הוא זרק 2, קנה עוד 3, ואכל 1. כמה תפוחים יש לו? <span className="font-bold text-blue-600">בוא נחשוב על זה צעד אחר צעד.</span>"</p>
        <div className="text-slate-800 mt-3 bg-white/50 p-3 rounded">
          <strong>התשובה שתקבלו:</strong>
          <ul className="list-decimal list-inside mt-1 space-y-1">
            <li>בהתחלה: 5 תפוחים.</li>
            <li>דני זרק 2: נשארו 3 (5-2).</li>
            <li>דני קנה 3: עכשיו יש 6 (3+3).</li>
            <li>דני אכל 1: נשארו 5 (6-1).</li>
          </ul>
          <p className="mt-2 font-bold">התשובה הסופית היא 5.</p>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">מתי להשתמש בזה?</h2>
    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700">
      <li>כשאתם מבקשים ממנו לכתוב קוד.</li>
      <li>כשאתם מבקשים ממנו לתכנן טיול ("תבנה לו"ז הגיוני").</li>
      <li>בשאלות לוגיות או חידות.</li>
      <li>בכל פעם שהתשובה נראית לכם "חשודה" או מהירה מדי.</li>
    </ul>
  </PlainText>
};