'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import QuoteModal from './QuoteModal';

const ProductScreenshots = ({ screenshots, product, productTitle, productDescription }) => {
  const [activeTab, setActiveTab] = useState('mobile');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mobileScreenshots = screenshots.filter(s => s.screen_type === 'mobile');
  const desktopScreenshots = screenshots.filter(s => s.screen_type === 'desktop');

  if (!screenshots || screenshots.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleImageClick = (screenshot) => {
    if (screenshot.link) {
      window.open(screenshot.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 w-full">
      <div className="container mx-auto px-4 w-full">
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 font-poppins relative inline-block"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative">
                <span className="text-[var(--secondary)]">Product </span>
                <span className="text-[var(--primary)]">Screenshots</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </span>
            </motion.h2>
            {productDescription && (
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto font-lato mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {productDescription}
              </motion.p>
            )}

          </div>

          {/* Tab Navigation */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="inline-flex bg-white rounded-full p-1.5 shadow-lg border border-gray-200 relative">
              {/* Animated Background */}
              <motion.div
                className="absolute bg-[var(--primary)] rounded-full z-0"
                animate={{
                  left: activeTab === 'mobile' ? 6 : '50%',
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ 
                  width: 'calc(50% - 6px)', 
                  height: 'calc(100% - 12px)', 
                  top: 6 
                }}
              />
              
              <button
                onClick={() => setActiveTab('mobile')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 font-lato relative z-10 ${
                  activeTab === 'mobile'
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                📱 Mobile Screen
                {mobileScreenshots.length > 0 && (
                  <span className="ml-2 text-xs">({mobileScreenshots.length})</span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('desktop')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 font-lato relative z-10 ${
                  activeTab === 'desktop'
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                💻 Desktop Screen
                {desktopScreenshots.length > 0 && (
                  <span className="ml-2 text-xs">({desktopScreenshots.length})</span>
                )}
              </button>
            </div>
          </motion.div>

          {/* Screenshots Grid */}
          <AnimatePresence mode="wait">
            {activeTab === 'mobile' && (
              <motion.div 
                key="mobile-tab"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                viewport={{ once: true }}
              >
                {mobileScreenshots.length > 0 ? (
                  mobileScreenshots.map((screenshot, index) => (
                    <motion.div 
                      key={screenshot.id || index}
                      variants={itemVariants}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className={`bg-white rounded-xl shadow-lg overflow-hidden group ${screenshot.link ? 'cursor-pointer' : ''}`}
                      onClick={() => handleImageClick(screenshot)}
                    >
                      <div className="relative w-full h-[400px]">
                        <Image
                          src={screenshot.image}
                          alt={screenshot.title || `Mobile screenshot ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Always show overlay with title/link info */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                          <div className="p-4 w-full">
                            {screenshot.title && (
                              <h3 className="text-white font-semibold text-lg mb-2 font-poppins">
                                {screenshot.title}
                              </h3>
                            )}
                            {screenshot.link && (
                              <span className="text-white/90 text-sm font-lato flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Click to view
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12 text-gray-500 font-lato">
                    No mobile screenshots available
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'desktop' && (
              <motion.div 
                key="desktop-tab"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                viewport={{ once: true }}
              >
                {desktopScreenshots.length > 0 ? (
                  desktopScreenshots.map((screenshot, index) => (
                    <motion.div 
                      key={screenshot.id || index}
                      variants={itemVariants}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className={`bg-white rounded-xl shadow-lg overflow-hidden group ${screenshot.link ? 'cursor-pointer' : ''}`}
                      onClick={() => handleImageClick(screenshot)}
                    >
                      <div className="relative w-full h-[400px]">
                        <Image
                          src={screenshot.image}
                          alt={screenshot.title || `Desktop screenshot ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Always show overlay with title/link info */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                          <div className="p-4 w-full">
                            {screenshot.title && (
                              <h3 className="text-white font-semibold text-lg mb-2 font-poppins">
                                {screenshot.title}
                              </h3>
                            )}
                            {screenshot.link && (
                              <span className="text-white/90 text-sm font-lato flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Click to view
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12 text-gray-500 font-lato">
                    No desktop screenshots available
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
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

export default ProductScreenshots;
