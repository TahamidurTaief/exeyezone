'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BlogPagination({ currentPage, totalPages, totalPosts, category, search }) {
  const router = useRouter();

  // Build query string
  const buildUrl = (page) => {
    const params = new URLSearchParams();
    if (page > 1) params.set('page', page);
    if (category) params.set('category', category);
    if (search) params.set('search', search);
    const query = params.toString();
    return `/blog${query ? `?${query}` : ''}`;
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const pages = getPageNumbers();

  if (totalPages <= 1) return null;

  return (
    <motion.nav 
      className="flex items-center justify-center gap-2 mt-10"
      aria-label="Pagination"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Previous Button */}
      {currentPage > 1 ? (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href={buildUrl(currentPage - 1)}
            className="flex items-center gap-1 px-4 py-2 text-sm font-lato font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Link>
        </motion.div>
      ) : (
        <span className="flex items-center gap-1 px-4 py-2 text-sm font-lato text-gray-300 cursor-not-allowed bg-gray-100 border border-gray-200 rounded-lg">
          <ChevronLeft className="w-4 h-4" />
          Previous
        </span>
      )}

      {/* Page Numbers */}
      <div className="hidden md:flex items-center gap-1">
        {pages.map((page, idx) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${idx}`} className="px-2 text-gray-400 font-lato">
                ...
              </span>
            );
          }
          
          const isActive = page === currentPage;
          return (
            <motion.div
              key={page}
              whileHover={!isActive ? { scale: 1.1 } : {}}
              whileTap={!isActive ? { scale: 0.95 } : {}}
            >
              <Link
                href={buildUrl(page)}
                className={`min-w-[40px] h-10 flex items-center justify-center text-sm font-lato font-medium rounded-lg transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-300 hover:border-blue-500 hover:text-blue-600'
                }`}
              >
                {page}
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: Show current page */}
      <div className="md:hidden text-sm font-lato font-medium text-gray-700 px-4 py-2 bg-white border border-gray-300 rounded-lg">
        Page {currentPage} of {totalPages}
      </div>

      {/* Next Button */}
      {currentPage < totalPages ? (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href={buildUrl(currentPage + 1)}
            className="flex items-center gap-1 px-4 py-2 text-sm font-lato font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      ) : (
        <span className="flex items-center gap-1 px-4 py-2 text-sm font-lato text-gray-300 cursor-not-allowed bg-gray-100 border border-gray-200 rounded-lg">
          Next
          <ChevronRight className="w-4 h-4" />
        </span>
      )}
    </motion.nav>
  );
}
