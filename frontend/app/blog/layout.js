/**
 * Blog Layout
 * Main layout for blog pages with SEO optimization
 * Server-side rendered with dynamic metadata
 */

import { Suspense } from 'react';
import Link from 'next/link';
import './blog.css';

export const metadata = {
  title: {
    default: 'Blog | ExeyeZone',
    template: '%s | ExeyeZone Blog',
  },
  description: 'Read our latest articles, tutorials, and insights on technology, development, and digital innovation.',
  keywords: ['blog', 'articles', 'tutorials', 'technology', 'development', 'insights'],
  authors: [{ name: 'ExeyeZone Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://exeyezone.com/blog',
    siteName: 'ExeyeZone',
    title: 'Blog | ExeyeZone',
    description: 'Read our latest articles, tutorials, and insights on technology, development, and digital innovation.',
    images: [
      {
        url: '/img/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'ExeyeZone Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | ExeyeZone',
    description: 'Read our latest articles, tutorials, and insights on technology, development, and digital innovation.',
    images: ['/img/og-blog.jpg'],
  },
  alternates: {
    canonical: 'https://exeyezone.com/blog',
  },
};

export default function BlogLayout({ children }) {
  return (
    <div className="blog-wrapper">
      {/* Main Content */}
      <main className="blog-main">
        <Suspense fallback={<BlogSkeleton />}>
          {children}
        </Suspense>
      </main>
    </div>
  );
}

// Loading skeleton for suspense
function BlogSkeleton() {
  return (
    <div className="container">
      <div className="blog-grid">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="blog-card-skeleton">
            <div className="skeleton-image"></div>
            <div className="skeleton-content">
              <div className="skeleton-category"></div>
              <div className="skeleton-title"></div>
              <div className="skeleton-excerpt"></div>
              <div className="skeleton-meta"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
