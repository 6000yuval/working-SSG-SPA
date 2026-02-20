import vikeReact from 'vike-react/config';
import { SITE_LANG } from '../lib/site';

export default {
  extends: vikeReact,
  prerender: true,
  title: 'AI בעברית | המדריך לבינה מלאכותית',
  description: 'אוסף מאמרים מעמיקים, מדריכים מעשיים ותובנות על בינה מלאכותית.',
  lang: SITE_LANG,
  headHtmlBegin: `
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;700;900&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'Heebo', sans-serif;
        background-color: #f8fafc;
      }
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f5f9;
      }
      ::-webkit-scrollbar-thumb {
        background: #cbd5e1;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #94a3b8;
      }
    </style>
  `,
  htmlAttributes: {
    dir: 'rtl'
  }
};
