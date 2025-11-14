'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ProductFeaturedImages = ({ images }) => {
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
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Show placeholder if no images
  const displayImages = images && images.length > 0 
    ? images.slice(0, 3) 
    : [
        { id: 1, image: '/img/no_image.jpg' },
        { id: 2, image: '/img/no_image.jpg' },
        { id: 3, image: '/img/no_image.jpg' }
      ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 font-poppins"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Gallery
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {displayImages.map((img, index) => (
              <motion.div 
                key={img.id || index}
                variants={itemVariants}
                whileHover={{ y: -15, scale: 1.05 }}
                className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={img.image}
                    alt={`Featured image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-lg font-lato">View #{index + 1}</p>
                    </div>
                  </div>
                </div>
                {/* Decorative border */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-[var(--primary)]/50 rounded-3xl transition-all duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductFeaturedImages;
