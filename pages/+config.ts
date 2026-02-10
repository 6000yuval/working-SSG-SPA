import vikeReact from 'vike-react/config';

export default {
  extends: vikeReact,
  prerender: true,
  title: 'AI EduBlog | המדריך לבינה מלאכותית',
  description: 'אוסף מאמרים מעמיקים, מדריכים מעשיים ותובנות על בינה מלאכותית.',
  lang: 'he',
  headHtmlBegin: `
    <link rel="preconnect" href="https://images.unsplash.com" crossorigin>
  `,
  htmlAttributes: {
    dir: 'rtl'
  }
};
