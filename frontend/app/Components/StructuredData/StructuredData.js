/**
 * Structured Data Component
 * Generates JSON-LD schema markup for blog posts
 */

export default function StructuredData({ post, url }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.display_image ? [post.display_image] : [],
    datePublished: post.publish_date,
    dateModified: post.updated_at || post.publish_date,
    author: {
      '@type': 'Person',
      name: post.author_name,
      ...(post.author_image && { image: post.author_image }),
      ...(post.author_bio && { description: post.author_bio }),
    },
    publisher: {
      '@type': 'Organization',
      name: 'ExeyeZone',
      logo: {
        '@type': 'ImageObject',
        url: 'https://exeyezone.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(post.meta_keywords && {
      keywords: post.meta_keywords,
    }),
  };

  // Add breadcrumb structured data
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://exeyezone.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://exeyezone.com/blog',
      },
      ...(post.category
        ? [
            {
              '@type': 'ListItem',
              position: 3,
              name: post.category.name,
              item: `https://exeyezone.com/blog?category=${post.category.slug}`,
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: post.title,
              item: url,
            },
          ]
        : [
            {
              '@type': 'ListItem',
              position: 3,
              name: post.title,
              item: url,
            },
          ]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
}
