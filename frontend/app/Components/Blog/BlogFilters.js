'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Search, X, Filter } from 'lucide-react';

export default function BlogFilters({ categories, activeCategory, searchQuery }) {
  const router = useRouter();
  const [search, setSearch] = useState(searchQuery || '');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    setSearch(searchQuery || '');
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/blog?search=${search}`);
      setIsSearchOpen(false);
    }
  };

  const clearSearch = () => {
    setSearch('');
    router.push('/blog');
    setIsSearchOpen(false);
  };

  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Search Bar */}
      <div className="mb-6">
        <AnimatePresence mode="wait">
          {!isSearchOpen ? (
            <motion.button
              key="search-button"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors font-lato"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Search className="w-4 h-4" />
              <span className="text-sm">Search articles...</span>
            </motion.button>
          ) : (
            <motion.form
              key="search-form"
              onSubmit={handleSearch}
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-lato text-sm"
                  autoFocus
                />
                {search && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <motion.button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-lato text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Search
              </motion.button>
              <motion.button
                type="button"
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearch('');
                }}
                className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors font-lato text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-2 mb-2">
        <Filter className="w-4 h-4 text-gray-500" />
        <span className="text-sm font-lato font-medium text-gray-600">Filter by category:</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/blog"
            className={`inline-block px-4 py-2 text-sm font-lato font-medium rounded-lg transition-all duration-300 ${
              !activeCategory 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-white text-gray-600 border border-gray-300 hover:border-blue-500 hover:text-blue-600'
            }`}
          >
            All
          </Link>
        </motion.div>
        {categories?.map((cat, index) => (
          <motion.div 
            key={cat.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={`/blog?category=${cat.slug}`}
              className={`inline-block px-4 py-2 text-sm font-lato font-medium rounded-lg transition-all duration-300 ${
                activeCategory === cat.slug 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-blue-500 hover:text-blue-600'
              }`}
            >
              {cat.name}
              {cat.post_count > 0 && (
                <span className="ml-1.5 text-xs opacity-75">({cat.post_count})</span>
              )}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
