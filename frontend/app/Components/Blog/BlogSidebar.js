'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { TrendingUp, Folder } from 'lucide-react';
import BlogCard from './BlogCard';

export default function BlogSidebar({ popularPosts, categories, tags }) {
  return (
    <aside className="space-y-8">
      {/* Trending / Popular Posts */}
      <motion.div
        className="bg-white rounded-lg p-6 shadow-md border border-gray-200"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-lato font-bold text-gray-900">Popular Posts</h3>
        </div>
        <div className="flex flex-col">
          {popularPosts?.slice(0, 6).map((post, idx) => (
            <BlogCard key={post.id} post={post} variant="sidebar" index={idx} />
          ))}
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        className="bg-white rounded-lg p-6 shadow-md border border-gray-200"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
          <Folder className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-lato font-bold text-gray-900">Categories</h3>
        </div>
        <div className="flex flex-col gap-2">
          {categories?.slice(0, 8).map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              whileHover={{ x: 5 }}
            >
              <Link 
                href={`/blog?category=${cat.slug}`}
                className="flex items-center justify-between py-2 px-3 rounded hover:bg-blue-50 transition-colors group"
              >
                <span className="text-sm font-lato text-gray-700 group-hover:text-blue-600 transition-colors">{cat.name}</span>
                <span className="text-xs text-gray-400 font-lato bg-gray-100 px-2 py-1 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">{cat.post_count}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </aside>
  );
}
