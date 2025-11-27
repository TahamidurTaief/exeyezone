/**
 * Blog Hero Section
 * Modern animated hero with featured posts
 * SSR-friendly with client-side animations
 */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, TrendingUp, Sparkles, FileText, Edit3, MessageCircle, Share2, Award, Zap } from 'lucide-react';

export default function BlogHero({ featuredPosts = [] }) {
  const stats = [
    { icon: BookOpen, value: '500+', label: 'Articles' },
    { icon: TrendingUp, value: '50K+', label: 'Readers' },
    { icon: Sparkles, value: 'Weekly', label: 'Updates' },
  ];

  // Floating blog-related icons
  const floatingIcons = [
    { Icon: FileText, x: '10%', y: '20%', duration: 7, delay: 0 },
    { Icon: Edit3, x: '85%', y: '15%', duration: 9, delay: 0.5 },
    { Icon: MessageCircle, x: '15%', y: '70%', duration: 8, delay: 1 },
    { Icon: Share2, x: '80%', y: '75%', duration: 10, delay: 1.5 },
    { Icon: Award, x: '5%', y: '45%', duration: 11, delay: 2 },
    { Icon: Zap, x: '90%', y: '50%', duration: 8, delay: 2.5 },
    { Icon: BookOpen, x: '25%', y: '85%', duration: 9, delay: 3 },
    { Icon: Sparkles, x: '75%', y: '25%', duration: 10, delay: 3.5 },
  ];

  const mainFeatured = featuredPosts[0];
  const sideFeatured = featuredPosts.slice(1, 3);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 pt-24 pb-16">
      {/* Enhanced Animated Background with More Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full filter blur-[140px] opacity-30"
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-purple-400 to-pink-500 rounded-full filter blur-[150px] opacity-25"
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-1/3 w-80 h-80 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full filter blur-[130px] opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Animated Floating Blog Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ 
              left: item.x, 
              top: item.y,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              y: [0, -30, 0],
              x: [0, 15, -15, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay
            }}
          >
            <item.Icon 
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-600" 
              strokeWidth={1.5}
            />
          </motion.div>
        ))}
      </div>

      {/* Diagonal Lines Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[200%] w-px bg-gradient-to-b from-blue-600 to-purple-600"
            style={{ 
              left: `${(i + 1) * 8.33}%`,
              transform: 'rotate(25deg)',
              transformOrigin: 'top left'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold mb-4 font-lato shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              📚 Our Blog
            </motion.span>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-raleway mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Insights, Tutorials, and Stories
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 font-lato max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              From our team of developers, designers, and tech enthusiasts
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-5 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="text-2xl font-bold font-poppins text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-lato text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Posts Section */}
          {mainFeatured && (
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {/* Main Featured Post */}
              <motion.article 
                className="lg:col-span-7 group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/blog/${mainFeatured.slug}`} className="block relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src={mainFeatured.display_image || mainFeatured.featured_image || '/img/no_image.jpg'} 
                    alt={mainFeatured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-lg" />
                  <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-lato font-semibold bg-blue-600 rounded-full">
                      {mainFeatured.category_name}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-lato font-bold leading-tight mb-2">
                      {mainFeatured.title}
                    </h2>
                    <p className="text-sm text-gray-200 font-lato line-clamp-2 mb-3">{mainFeatured.excerpt}</p>
                    <div className="flex items-center gap-3 text-sm">
                      <span>{mainFeatured.author_name}</span>
                      <span>•</span>
                      <span>{new Date(mainFeatured.publish_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>

              {/* Side Featured Posts */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {sideFeatured.map((post, idx) => (
                  <motion.article 
                    key={post.id}
                    className="group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1 + idx * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <Link href={`/blog/${post.slug}`} className="flex gap-4 bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200/50">
                      <div className="relative w-32 h-32 flex-shrink-0">
                        <Image 
                          src={post.display_image || post.featured_image || '/img/no_image.jpg'} 
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                        />
                      </div>
                      <div className="flex-1 p-4">
                        <span className="inline-block px-2 py-1 mb-2 text-xs font-lato font-semibold bg-purple-100 text-purple-700 rounded">
                          {post.category_name}
                        </span>
                        <h3 className="text-base font-lato font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-xs text-gray-500 font-lato">
                          {new Date(post.publish_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
