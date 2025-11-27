/**
 * Blog Sitemap Generator
 * Generates dynamic sitemap for all published blog posts
 * Integrates with Next.js sitemap API
 */

import blogAPI from '../../utils/api/blogApi';

/**
 * Generate sitemap entries for blog posts
 * This will be merged with the main sitemap
 */
export default async function sitemap() {
  try {
    // Fetch sitemap data from backend
    const response = await blogAPI.getSitemapData();

    if (!response.success || !response.data) {
      console.error('Failed to fetch blog sitemap data');
      return [];
    }

    // Transform backend data to Next.js sitemap format
    const blogSitemapEntries = response.data.map((post) => ({
      url: `https://exeyezone.com/blog/${post.slug}`,
      lastModified: post.updated_at || post.publish_date,
      changeFrequency: 'weekly',
      priority: post.is_featured ? 0.9 : 0.7,
    }));

    // Add main blog page
    const mainBlogEntry = {
      url: 'https://exeyezone.com/blog',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.8,
    };

    return [mainBlogEntry, ...blogSitemapEntries];
  } catch (error) {
    console.error('Error generating blog sitemap:', error);
    return [];
  }
}
