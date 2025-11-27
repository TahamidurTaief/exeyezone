/**
 * Blog Detail Page - Redesigned
 * Server-Side Rendered with SEO optimization
 * Compact 2-column layout: Main content + Sidebar
 * Minimal design with clean borders, no shadows or boxes
 */

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Eye, ArrowLeft } from 'lucide-react';
import blogAPI from '../../../utils/api/blogApi';
import StructuredData from '../../Components/StructuredData/StructuredData';
import ShareButtons from '../../Components/Blog/ShareButtons';
import BlogDetailSidebar from '../../Components/Blog/BlogDetailSidebar';
import './prose-styles.css';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 60;

/**
 * Generate Metadata for SEO
 * Uses post's SEO fields from Django backend
 */
export async function generateMetadata({ params }) {
  const { slug } = params;
  const response = await blogAPI.getPostBySlug(slug);

  if (!response.success || !response.data) {
    return {
      title: 'Post Not Found | ExeyeZone',
      description: 'The requested blog post could not be found.',
    };
  }

  const post = response.data;
  const seoMeta = post.seo_meta || {};

  return {
    title: seoMeta.title || post.title,
    description: seoMeta.description || post.excerpt,
    keywords: post.meta_keywords?.split(',') || [],
    authors: [{ name: seoMeta.author || post.author_name }],
    openGraph: {
      title: seoMeta.og_title || seoMeta.title || post.title,
      description: seoMeta.og_description || seoMeta.description || post.excerpt,
      type: 'article',
      publishedTime: seoMeta.published_time || post.publish_date,
      modifiedTime: seoMeta.modified_time || post.updated_at,
      authors: [seoMeta.author || post.author_name],
      images: seoMeta.og_image ? [
        {
          url: seoMeta.og_image,
          width: 1200,
          height: 630,
          alt: post.featured_image_alt || post.title,
        },
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoMeta.og_title || post.title,
      description: seoMeta.og_description || post.excerpt,
      images: seoMeta.og_image ? [seoMeta.og_image] : [],
    },
    alternates: {
      canonical: seoMeta.canonical_url || `https://exeyezone.com/blog/${slug}`,
    },
    robots: {
      index: seoMeta.allow_indexing !== false,
      follow: seoMeta.allow_indexing !== false,
    },
  };
}

/**
 * Blog Detail Page Component
 */
export default async function BlogDetailPage({ params }) {
  const { slug } = params;
  
  // Parallel data fetching for optimal performance
  const [postResponse, categoriesResponse] = await Promise.all([
    blogAPI.getPostBySlug(slug),
    blogAPI.getCategories(),
  ]);

  if (!postResponse.success || !postResponse.data) {
    notFound();
  }

  const post = postResponse.data;
  const categories = categoriesResponse.success ? categoriesResponse.data.results : [];

  // Fetch related posts (same category)
  const relatedResponse = await blogAPI.getPostsByCategory(
    post.category?.slug || '',
    1,
    5
  );
  const relatedPosts = relatedResponse.success 
    ? relatedResponse.data.results.filter(p => p.id !== post.id).slice(0, 5)
    : [];

  // Format date
  const formattedDate = new Date(post.publish_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Parse tags from meta_keywords
  const tags = post.meta_keywords 
    ? post.meta_keywords.split(',').map(tag => tag.trim()).filter(Boolean)
    : [];

  // Fallback image
  const featuredImage = post.display_image || post.featured_image || '/img/no_image.jpg';

  // Share URL
  const shareUrl = `https://exeyezone.com/blog/${slug}`;

  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData 
        post={post} 
        url={shareUrl} 
      />
      
      <div className="min-h-screen bg-white">
        {/* Back Button */}
        <div className="container mx-auto px-4 max-w-7xl pt-6">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors font-lato"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        {/* Main Layout: 2 Columns */}
        <div className="container mx-auto px-4 max-w-7xl py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT COLUMN: Main Content */}
            <main className="lg:col-span-8 lg:border-r lg:border-gray-200 lg:pr-8">
              <article>
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold font-raleway text-gray-900 mb-4 leading-tight">
                  {post.title}
                </h1>

                {/* Post Meta and Share Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
                  {/* Left: Date and Details */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 font-lato">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formattedDate}</span>
                    </div>
                    {post.reading_time && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.reading_time} min read</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views_count} views</span>
                    </div>
                  </div>

                  {/* Right: Share Buttons */}
                  <div>
                    <ShareButtons url={shareUrl} title={post.title} />
                  </div>
                </div>

                {/* Featured Image */}
                <div className="mb-6 rounded overflow-hidden">
                  <Image
                    src={featuredImage}
                    alt={post.featured_image_alt || post.title}
                    width={1200}
                    height={600}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Blog Content */}
                <div 
                  className="prose prose-lg max-w-none font-lato mb-8"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                {tags.length > 0 && (
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <Link
                          key={index}
                          href={`/blog?search=${encodeURIComponent(tag)}`}
                          className="px-3 py-1 text-xs font-lato text-gray-700 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </main>

            {/* RIGHT COLUMN: Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <BlogDetailSidebar 
                  relatedPosts={relatedPosts}
                  categories={categories}
                  tags={tags}
                />
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
