'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShoppingCart, Eye, Heart, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getProducts } from '@/utils/api/products';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(4); // Fetch only 4 products
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const badgeColors = ['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-orange-500'];
  const gradientColors = [
    'from-blue-100 to-cyan-100',
    'from-purple-100 to-pink-100',
    'from-green-100 to-emerald-100',
    'from-orange-100 to-red-100'
  ];
  const iconColors = ['text-blue-500', 'text-purple-500', 'text-green-500', 'text-orange-500'];

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-500">Loading products...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)] rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--secondary)] rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-raleway mb-4 md:mb-6">
            <span className="text-[var(--secondary)]">Featured</span> <span className="text-[var(--primary)]">Products</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-lato">
            Premium digital products designed to accelerate your projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {products.slice(0, 4).map((product, index) => {
            const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
            const imageUrl = product.image ? `${baseURL}${product.image}` : null;
            const discount = product.discount ? `${product.discount}% OFF` : null;
            
            return (
              <motion.div
                key={product.id || index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full flex flex-col">
                  {/* Badge */}
                  {product.sales_count >= 100 && (
                    <div className="absolute top-3 left-3 z-20">
                      <span className={`${badgeColors[index % badgeColors.length]} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                        Bestseller
                      </span>
                    </div>
                  )}

                  {/* Discount tag */}
                  {discount && (
                    <div className="absolute top-3 right-3 z-20">
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {discount}
                      </span>
                    </div>
                  )}

                  {/* Product Image */}
                  <div className={`relative h-48 bg-gradient-to-br ${gradientColors[index % gradientColors.length]} overflow-hidden`}>
                    {imageUrl ? (
                      <Image 
                        src={imageUrl}
                        alt={product.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className={`w-24 h-24 rounded-full ${badgeColors[index % badgeColors.length]} opacity-20`}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Zap className={`w-16 h-16 ${iconColors[index % iconColors.length]}`} />
                        </div>
                      </>
                    )}
                    
                    {/* Hover actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                        <Eye className="w-5 h-5 text-gray-700" />
                      </button>
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                        <Heart className="w-5 h-5 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-grow flex flex-col">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {product.category?.name || 'Digital Product'}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-raleway text-gray-900 mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                      {product.title}
                    </h3>

                    <p className="text-sm text-gray-600 font-lato mb-4 line-clamp-2">
                      {product.short_description || product.description}
                    </p>

                    {product.features && product.features.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {product.features.slice(0, 2).map((feature, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {typeof feature === 'string' ? feature : feature?.name || feature?.title || ''}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-auto">
                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          <span className="font-semibold">{product.rating || '4.8'}</span>
                        </div>
                        <span>{product.sales_count || 0} sales</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-[var(--primary)] font-poppins">
                            ${product.price}
                          </span>
                          {product.original_price && (
                            <span className="text-sm text-gray-400 line-through ml-2">
                              ${product.original_price}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA */}
                      <Link 
                        href={product.slug ? `/products/${product.slug}` : '/products'}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[var(--secondary)] text-white font-bold font-raleway px-4 py-2.5 rounded-lg hover:bg-[var(--primary)] transition-all duration-300 text-sm group-hover:shadow-lg"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link 
            href="/products"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] text-white font-bold font-raleway px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Explore All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
