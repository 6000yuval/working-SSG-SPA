import { SITE_URL } from './site';

export function absoluteUrl(pathname: string) {
  return new URL(pathname, `${SITE_URL}/`).toString();
}

export function parseLastUpdatedToISO(lastUpdated?: string) {
  if (!lastUpdated) return undefined;
  const [monthRaw, yearRaw] = lastUpdated.split('/');
  const month = Number(monthRaw);
  const year = Number(yearRaw);
  if (!Number.isFinite(month) || !Number.isFinite(year) || month < 1 || month > 12) return undefined;
  const dt = new Date(Date.UTC(year, month - 1, 1));
  return dt.toISOString();
}
