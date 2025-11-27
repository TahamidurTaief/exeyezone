/**
 * Blog Listing Page
 * SSR with Modern Hero and Smooth Animations
 */

import { Suspense } from 'react';
import blogAPI from '../../utils/api/blogApi';
import BlogHero from '../Components/Blog/BlogHero';
import BlogCard from '../Components/Blog/BlogCard';
import BlogFilters from '../Components/Blog/BlogFilters';
import BlogPagination from '../Components/Blog/BlogPagination';
import BlogSidebar from '../Components/Blog/BlogSidebar';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 60;

export async function generateMetadata({ searchParams }) {
  const query = searchParams?.search || '';
  const category = searchParams?.category || '';
  
  let title = 'Blog - Insights, Tutorials, and Stories | ExeyeZone';
  let description = 'Explore the latest tech trends, coding tutorials, and industry insights from our team.';
  
  if (query) {
    title = `Search results for "${query}" | ExeyeZone Blog`;
    description = `Find articles about ${query} - tech insights, tutorials, and more.`;
  }
  if (category) {
    title = `${category} Articles | ExeyeZone Blog`;
    description = `Browse ${category} articles and tutorials from our expert team.`;
  }

  return {
    title,
    description,
    keywords: 'blog, tech insights, tutorials, software development, coding, web development, mobile apps, AI, machine learning',
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://exeyezone.com/blog',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function BlogPage({ searchParams }) {
  const page = parseInt(searchParams?.page) || 1;
  const category = searchParams?.category || '';
  const search = searchParams?.search || '';
  const pageSize = 12;

  // Parallel Data Fetching for Performance
  const [postsData, categoriesData, popularData, featuredData] = await Promise.all([
    blogAPI.getPosts({ 
      page, 
      page_size: pageSize, 
      category, 
      search, 
      ordering: '-publish_date' 
    }),
    blogAPI.getCategories(),
    blogAPI.getPopularPosts(6),
    !search && !category && page === 1 ? blogAPI.getFeaturedPosts() : Promise.resolve({ success: true, data: [] })
  ]);

  const posts = postsData.success ? postsData.data.results : [];
  const totalPosts = postsData.success ? postsData.data.count : 0;
  const categories = categoriesData.success ? categoriesData.data.results : [];
  const popularPosts = popularData.success ? popularData.data : [];
  
  const featuredPosts = featuredData.success && featuredData.data.length > 0 ? featuredData.data : [];
  const totalPages = Math.ceil(totalPosts / pageSize);
  const showHero = !search && page === 1;

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      {showHero && <BlogHero featuredPosts={featuredPosts} />}

      <div className="bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* MAIN CONTENT LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT COLUMN: Filters + Article List */}
            <main className="lg:col-span-8">
              <BlogFilters 
                categories={categories} 
                activeCategory={category} 
                searchQuery={search} 
              />

              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-lato font-bold text-gray-900">
                  {search ? `Search: "${search}"` : category ? category : 'Latest Articles'}
                </h2>
                <span className="text-sm text-gray-500 font-lato">{totalPosts} articles</span>
              </div>

              {posts.length > 0 ? (
                <div className="space-y-6">
                  {posts.map((post, index) => (
                    <BlogCard 
                      key={post.id} 
                      post={post} 
                      variant="compact"
                      index={index} 
                    />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center">
                  <p className="text-gray-500 text-lg font-lato mb-4">No articles found matching your criteria.</p>
                  <a 
                    href="/blog"
                    className="inline-block px-6 py-2 bg-blue-600 text-white font-lato font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View All Articles
                  </a>
                </div>
              )}

              {totalPages > 1 && (
                <div className="mt-10">
                  <BlogPagination 
                    currentPage={page} 
                    totalPages={totalPages} 
                    totalPosts={totalPosts}
                    category={category}
                    search={search}
                  />
                </div>
              )}
            </main>

            {/* RIGHT COLUMN: Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24">
                <BlogSidebar 
                  popularPosts={popularPosts} 
                  categories={categories} 
                />
              </div>
            </aside>

          </div>
        </div>
      </div>
    </div>
  );
}