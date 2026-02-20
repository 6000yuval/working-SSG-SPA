const RAW_SITE_URL = process.env.SITE_URL || 'https://aibehivrit.vercel.app';

export const SITE_URL = RAW_SITE_URL.replace(/\/$/, '');
export const SITE_NAME = 'AI בעברית';
export const SITE_LOCALE = 'he_IL';
export const SITE_LANG = 'he';
