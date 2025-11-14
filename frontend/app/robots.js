export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    sitemap: 'https://exeyezone.com/sitemap.xml',
    host: 'https://exeyezone.com',
  };
}
