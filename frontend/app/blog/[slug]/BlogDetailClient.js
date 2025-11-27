/**
 * Blog Detail Client Component
 * Modern, animated, SEO-friendly blog post page
 * Matches the design of main blog page with light background
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Eye, Tag, Share2, ArrowLeft, BookOpen } from 'lucide-react';

export default function BlogDetailClient({ post, relatedPosts, formattedDate, slug }) {
  const shareUrl = `https://exeyezone.com/blog/${slug}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 max-w-4xl pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-lato text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Breadcrumb */}
        <motion.nav 
          className="mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          aria-label="Breadcrumb"
        >
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500 font-lato">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            </li>
            {post.category && (
              <>
                <li>/</li>
                <li>
                  <Link 
                    href={`/blog?category=${post.category.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.category.name}
                  </Link>
                </li>
              </>
            )}
          </ol>
        </motion.nav>
      </div>

      {/* Main Content */}
      <article className="container mx-auto px-4 max-w-4xl pb-16">
        {/* Article Header */}
        <motion.header 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Category Badge */}
          {post.category && (
            <Link
              href={`/blog?category=${post.category.slug}`}
              className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold font-lato rounded-lg mb-4 hover:bg-blue-700 transition-colors"
            >
              {post.category.name}
            </Link>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-raleway text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 font-lato mb-6">
            {/* Author */}
            <div className="flex items-center gap-2">
              {post.author_image && (
                <Image
                  src={post.author_image}
                  alt={post.author_name}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-gray-200"
                />
              )}
              <span className="font-medium text-gray-900">{post.author_name}</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>

            {/* Reading Time */}
            {post.reading_time && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.reading_time} min read</span>
              </div>
            )}

            {/* Views */}
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{post.views_count} views</span>
            </div>
          </div>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-lg text-gray-600 font-lato leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </motion.header>

        {/* Featured Image */}
        {post.display_image && (
          <motion.div 
            className="mb-12 rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src={post.display_image}
              alt={post.featured_image_alt || post.title}
              width={1200}
              height={600}
              priority
              className="w-full h-auto object-cover"
            />
          </motion.div>
        )}

        {/* Article Content */}
        <motion.div
          className="prose prose-lg max-w-none font-lato"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Article Footer */}
        <motion.footer 
          className="mt-12 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Tags */}
          {post.meta_keywords && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-5 h-5 text-gray-600" />
                <span className="font-semibold text-gray-900 font-lato">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.meta_keywords.split(',').map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-lato rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share Buttons */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Share2 className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-900 font-lato">Share this article:</span>
            </div>
            <div className="flex gap-3">
              <motion.a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Share on Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </motion.a>
              <motion.a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Share on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </motion.a>
              <motion.a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Share on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.footer>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-8">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl md:text-3xl font-bold font-raleway text-gray-900">
                  Related Articles
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
                    >
                      {relatedPost.display_image && (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={relatedPost.display_image}
                            alt={relatedPost.featured_image_alt || relatedPost.title}
                            width={400}
                            height={250}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="text-lg font-bold font-lato text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-600 font-lato line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <style jsx global>{`
        /* Prose Styling for Blog Content */
        .prose {
          color: #1a1a1a;
        }

        .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
          color: #1a1a1a;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .prose h2 {
          font-size: 1.875rem;
          margin-top: 3rem;
        }

        .prose h3 {
          font-size: 1.5rem;
        }

        .prose p {
          margin: 1.25rem 0;
          line-height: 1.8;
        }

        .prose a {
          color: #2563eb;
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 2px;
        }

        .prose a:hover {
          color: #1d4ed8;
          text-decoration-thickness: 2px;
        }

        .prose ul, .prose ol {
          margin: 1.5rem 0;
          padding-left: 1.75rem;
        }

        .prose li {
          margin: 0.5rem 0;
          line-height: 1.75;
        }

        .prose blockquote {
          margin: 2rem 0;
          padding: 1.5rem;
          background: #f3f4f6;
          border-left: 4px solid #2563eb;
          border-radius: 0.5rem;
          font-style: italic;
          color: #4b5563;
        }

        .prose code {
          padding: 0.125rem 0.375rem;
          background: #f3f4f6;
          border: 1px solid #e5e7eb;
          border-radius: 0.25rem;
          font-family: 'Monaco', 'Consolas', monospace;
          font-size: 0.875em;
          color: #dc2626;
        }

        .prose pre {
          margin: 2rem 0;
          padding: 1.5rem;
          background: #1e293b;
          border-radius: 0.5rem;
          overflow-x: auto;
        }

        .prose pre code {
          padding: 0;
          background: transparent;
          border: none;
          color: #e2e8f0;
        }

        .prose img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 2rem auto;
        }

        .prose table {
          width: 100%;
          margin: 2rem 0;
          border-collapse: collapse;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          overflow: hidden;
        }

        .prose th {
          padding: 0.75rem 1rem;
          background: #f3f4f6;
          font-weight: 600;
          text-align: left;
          border-bottom: 2px solid #e5e7eb;
        }

        .prose td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #e5e7eb;
        }

        .prose hr {
          margin: 3rem 0;
          border: none;
          border-top: 2px solid #e5e7eb;
        }
      `}</style>
    </div>
  );
}
