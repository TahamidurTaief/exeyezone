'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import QuoteModal from './QuoteModal';

const ProductHero = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-br from-[#FF6B35]/10 via-white to-[#004E89]/10 py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Breadcrumb */}
            <motion.div 
              className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-6 font-lato"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-[var(--primary)] transition-colors">Products</Link>
              <span>/</span>
              <span className="text-[var(--primary)] font-semibold">{product.title}</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-poppins"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {product.title}
            </motion.h1>

            {/* Short Description */}
            {product.short_description && (
              <motion.p 
                className="text-lg md:text-xl text-gray-600 mb-8 font-lato max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {product.short_description}
              </motion.p>
            )}

            {/* Meta Info */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div 
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold text-gray-900 font-lato">{product.rating}</span>
                <span className="text-gray-600 font-lato">Rating</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="font-semibold text-gray-900 font-lato">{product.sales_count}</span>
                <span className="text-gray-600 font-lato">Sales</span>
              </motion.div>

              <motion.div 
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-[var(--secondary)] text-lg font-lato">${product.price}</span>
              </motion.div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {product.demo && (
                <motion.a 
                  href={product.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[var(--primary)] text-white rounded-full font-semibold hover:bg-[#d41f37] transition-all duration-300 shadow-lg hover:shadow-xl font-lato"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
              )}
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-[var(--secondary)] text-white rounded-full font-semibold hover:bg-[#0d2228] transition-all duration-300 shadow-lg hover:shadow-xl font-lato"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
              </motion.button>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};

export default ProductHero;
