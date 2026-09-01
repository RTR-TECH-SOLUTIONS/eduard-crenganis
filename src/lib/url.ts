/**
 * Prefixează o cale absolută cu `base`-ul site-ului (necesar pe GitHub Pages,
 * unde demoul stă la /eduard-crenganis/). Primește mereu căi care încep cu „/".
 */
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

export const u = (path: string): string => (path === '/' ? `${base}/` : `${base}${path}`);
