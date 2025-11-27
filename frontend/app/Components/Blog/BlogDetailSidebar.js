/**
 * Blog Detail Sidebar Component
 * Displays related articles, categories, and tags
 * Compact and minimal design with no shadows or boxes
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Folder, Tag } from 'lucide-react';

export default function BlogDetailSidebar({ relatedPosts, categories, tags }) {
  return (
    <aside className="space-y-8">
      {/* Related Articles */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section>
          <h3 className="text-lg font-bold font-raleway text-gray-900 mb-4 pb-2 border-b border-gray-300">
            Related Articles
          </h3>
          <div className="space-y-4">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="flex gap-3 pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden">
                    <Image
                      src={post.display_image || '/img/no_image.jpg'}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold font-lato text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors mb-1">
                      {post.title}
                    </h4>
                    {post.excerpt && (
                      <p className="text-xs text-gray-600 font-lato line-clamp-2 mb-1">
                        {post.excerpt}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 font-lato">
                      {new Date(post.publish_date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Categories */}
      {categories && categories.length > 0 && (
        <section>
          <h3 className="text-lg font-bold font-raleway text-gray-900 mb-4 pb-2 border-b border-gray-300 flex items-center gap-2">
            <Folder className="w-5 h-5" />
            Categories
          </h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/blog?category=${category.slug}`}
                className="flex items-center justify-between py-2 px-3 text-sm font-lato text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
              >
                <span>{category.name}</span>
                {category.post_count > 0 && (
                  <span className="text-xs text-gray-500">({category.post_count})</span>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <section>
          <h3 className="text-lg font-bold font-raleway text-gray-900 mb-4 pb-2 border-b border-gray-300 flex items-center gap-2">
            <Tag className="w-5 h-5" />
            Tags
          </h3>
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
        </section>
      )}
    </aside>
  );
}
