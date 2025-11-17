export const revalidate = 86400; // Revalidate every 24 hours

export default async function sitemap() {
  const baseUrl = 'https://exeyezone.com';
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.exeyezone.com/api';
  
  try {
    // Fetch all products with revalidation
    const productsRes = await fetch(`${apiUrl}/products/`, {
      next: { revalidate: 86400 } // Cache for 24 hours
    });
    const products = productsRes.ok ? await productsRes.json() : [];
    
    // Fetch all courses with revalidation
    const coursesRes = await fetch(`${apiUrl}/courses/`, {
      next: { revalidate: 86400 }
    });
    const courses = coursesRes.ok ? await coursesRes.json() : [];
    
    // Fetch all services with revalidation
    const servicesRes = await fetch(`${apiUrl}/services/`, {
      next: { revalidate: 86400 }
    });
    const services = servicesRes.ok ? await servicesRes.json() : [];
    
    // Generate product URLs
    const productUrls = products.map((product) => ({
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: product.updated_at || new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    // Generate course URLs
    const courseUrls = courses.map((course) => ({
      url: `${baseUrl}/courses/${course.slug}`,
      lastModified: course.updated_at || new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    // Generate service URLs
    const serviceUrls = services.map((service) => ({
      url: `${baseUrl}/services/${service.slug || service.id}`,
      lastModified: service.updated_at || new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

    // Static pages
    const staticPages = [
      {
        url: baseUrl,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${baseUrl}/products`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/services`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/courses`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/portfolio`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/getquote`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      {
        url: `${baseUrl}/hireus`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
    ];

    return [...staticPages, ...productUrls, ...courseUrls, ...serviceUrls];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return at least static pages if API fetch fails
    return [
      {
        url: baseUrl,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${baseUrl}/products`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/services`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/courses`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/portfolio`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/getquote`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      {
        url: `${baseUrl}/hireus`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
    ];
  }
}
