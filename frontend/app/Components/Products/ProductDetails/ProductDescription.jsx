'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import QuoteModal from './QuoteModal';

const ProductDescription = ({ description, product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  if (!description && !product) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
    <section className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-4 w-full">
        <motion.div 
          className="w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold font-poppins"
              variants={itemVariants}
            >
              <span className="relative inline-block">
                <span className="text-[var(--secondary)]">About This </span>
                <span className="text-[var(--primary)]">Product</span>
                <motion.span 
                  className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </span>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Description - Takes 2 columns */}
            <motion.div 
              className="lg:col-span-2 space-y-6"
              variants={itemVariants}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-poppins flex items-center">
                  <span className="text-3xl mr-3">📄</span>
                  Description
                </h3>
                <div className="prose prose-lg max-w-none">
                  <div 
                    className="text-gray-700 font-lato leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: description }}
                    style={{
                      fontSize: '1.125rem',
                      lineHeight: '1.8'
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Sidebar - Takes 1 column */}
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              {/* Product Info Card */}
              {product && (
                <motion.div 
                  className="bg-[var(--primary)]/5 rounded-2xl shadow-xl p-6 border-2 border-[var(--primary)]/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins flex items-center">
                    <span className="text-2xl mr-2">💡</span>
                    Quick Info
                  </h3>
                  <div className="space-y-4 font-lato">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-300">
                      <span className="text-gray-600 font-medium">Price</span>
                      <span className="text-2xl font-bold text-[var(--secondary)]">${product.price}</span>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-gray-300">
                      <span className="text-gray-600 font-medium">Rating</span>
                      <span className="text-lg font-semibold text-yellow-600 flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {product.rating}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Sales</span>
                      <span className="text-lg font-semibold text-green-600">{product.sales_count}+</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tags Card */}
              {product?.tags && product.tags.length > 0 && (
                <motion.div 
                  className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins flex items-center">
                    <span className="text-2xl mr-2">🏷️</span>
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <motion.span
                        key={tag.id || index}
                        className="px-2.5 py-1 bg-[var(--primary)]/10 text-gray-800 rounded-full text-sm font-medium font-lato border border-[var(--primary)]/30"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: 'var(--primary)',
                          color: 'white'
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {tag.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Category Card */}
              {product?.category && (
                <motion.div 
                  className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins flex items-center">
                    <span className="text-2xl mr-2">📁</span>
                    Category
                  </h3>
                  <div className="px-4 py-3 bg-blue-50 rounded-lg text-center">
                    <span className="text-lg font-semibold text-gray-800 font-lato">{product.category.name}</span>
                  </div>
                </motion.div>
              )}

              {/* CTA Card */}
              <motion.div 
                className="bg-[var(--primary)] rounded-2xl shadow-2xl p-6 text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-3 font-poppins">Ready to Get Started?</h3>
                <p className="mb-4 font-lato opacity-90">Request a quote today and transform your ideas into reality!</p>
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="block w-full py-3 bg-white text-[var(--primary)] rounded-full font-semibold text-center hover:shadow-xl transition-all duration-300 font-lato"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get a Quote
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    
    {/* Quote Modal */}
    {product && (
      <QuoteModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    )}
    </>
  );
};

export default ProductDescription;
