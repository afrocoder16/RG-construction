const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix root-relative URLs when the site is hosted below a domain subpath. */
export const withBase = (path: string) => {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  return path === '/' ? `${base}/` : `${base}${path}`;
};
