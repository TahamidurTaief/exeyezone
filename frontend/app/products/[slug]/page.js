import ProductPage from '@/app/Components/Products/ProductDetails/ProductDetailsPage';

async function getProductBySlug(slug) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://192.168.0.111:8000/api';
    const url = `${apiUrl}/products/${slug}/`;
    
    console.log('Fetching product from:', url);
    
    const res = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch product: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  try {
    const product = await getProductBySlug(slug);
    
    // Get the first featured image or product image
    const imageUrl = product.featured_images?.[0]?.image || product.product_img || '/img/no_image.jpg';
    
    // Create keywords from tags and category
    const keywords = [
      product.title,
      product.category?.name,
      ...(product.tags?.map(tag => tag.name) || []),
      ...(product.technologies?.map(tech => tech.name) || []),
      'exeyezone',
      'web development',
      'software solutions'
    ].filter(Boolean).join(', ');

    return {
      title: `${product.title} | Exeyezone - Professional Software Solutions`,
      description: product.short_description || product.description?.substring(0, 160) || `${product.title} - High-quality software solution from Exeyezone`,
      keywords: keywords,
      
      // Open Graph metadata for social media
      openGraph: {
        title: product.title,
        description: product.short_description || product.description?.substring(0, 160),
        type: 'website',
        url: `https://exeyezone.com/products/${slug}`,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: product.title,
          }
        ],
        siteName: 'Exeyezone',
      },
      
      // Twitter Card metadata
      twitter: {
        card: 'summary_large_image',
        title: product.title,
        description: product.short_description || product.description?.substring(0, 160),
        images: [imageUrl],
        creator: '@exeyezone',
      },
      
      // Additional SEO tags
      alternates: {
        canonical: `https://exeyezone.com/products/${slug}`,
      },
      
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      
      // Product-specific schema
      other: {
        'product:price:amount': product.price,
        'product:price:currency': 'USD',
        'product:availability': 'in stock',
        'product:condition': 'new',
        'og:rating': product.rating,
      },
    };
  } catch (error) {
    return {
      title: 'Product | Exeyezone',
      description: 'Professional software solutions and digital products from Exeyezone',
    };
  }
}

export default async function Page({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  // Generate JSON-LD structured data for rich snippets
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.short_description || product.description,
    image: product.featured_images?.[0]?.image || product.product_img,
    brand: {
      '@type': 'Brand',
      name: 'Exeyezone'
    },
    offers: {
      '@type': 'Offer',
      url: `https://exeyezone.com/products/${slug}`,
      priceCurrency: 'USD',
      price: product.price,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Exeyezone'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.sales_count || 1,
      bestRating: '5',
      worstRating: '1'
    },
    category: product.category?.name,
    keywords: product.tags?.map(tag => tag.name).join(', '),
  };

  return (
    <>
      {/* Add JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className='flex flex-col'>
        <ProductPage product={product} />
      </div>
    </>
  );
}
