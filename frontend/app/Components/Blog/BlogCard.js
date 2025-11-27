/**
 * Blog Card Component
 * Supports variants: 'featured', 'grid', 'compact', 'sidebar'
 * Optimized for SEO and Performance with Framer Motion animations
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';

export default function BlogCard({ post, variant = 'grid', index = 0 }) {
  const {
    slug,
    title,
    excerpt,
    featured_image,
    display_image,
    category_name,
    category_slug,
    author_name,
    publish_date,
    reading_time,
  } = post;

  const formattedDate = new Date(publish_date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  // Use display_image, fallback to featured_image, then placeholder
  const imageUrl = display_image || featured_image || '/img/no_image.jpg';

  // Animation variants for smooth entrance
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  // --- Variant 1: Featured (Large Hero Card) ---
  if (variant === 'featured') {
    return (
      <motion.article 
        className="group relative w-full h-[350px] md:h-[420px] overflow-hidden rounded-lg shadow-xl"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Link href={`/blog/${slug}`} className="block w-full h-full">
          <Image src={imageUrl} alt={title} fill className="object-cover rounded-lg" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-lg" />
          <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full text-white">
            <motion.span 
              className="inline-block px-3 py-1 mb-2 text-xs font-lato font-semibold bg-blue-600 text-white rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              {category_name}
            </motion.span>
            <h2 className="text-xl md:text-3xl font-lato font-bold leading-tight mb-2 group-hover:text-blue-300 transition-colors">
              {title}
            </h2>
            <p className="text-sm text-gray-200 font-lato line-clamp-2 mb-2">{excerpt}</p>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {author_name}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formattedDate}
              </span>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  // --- Variant 2: Sidebar / Widget (Very Compact) ---
  if (variant === 'sidebar') {
    return (
      <motion.div 
        className="flex gap-3 items-start group pb-3 mb-3 border-b border-gray-200 last:border-0 last:pb-0 last:mb-0"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        whileHover={{ x: 5 }}
      >
        <span className="text-2xl font-lato font-bold text-gray-300 flex-shrink-0 w-8">{index + 1}</span>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-lato font-semibold text-gray-900 leading-snug line-clamp-2 hover:text-blue-600 transition-colors mb-1">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h4>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="font-medium">{category_name}</span>
            <span>•</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </motion.div>
    );
  }

  // --- Variant 3: Compact / List (Horizontal for main feed) ---
  if (variant === 'compact') {
    return (
      <motion.article 
        className="flex gap-4 pb-6 mb-6 border-b border-gray-200 group"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.3 }}
      >
        <Link href={`/blog/${slug}`} className="relative w-32 h-32 md:w-40 md:h-32 flex-shrink-0 overflow-hidden rounded-lg shadow-md">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-lg" 
          />
        </Link>
        <div className="flex flex-col justify-center flex-1">
          <Link href={`/blog/${slug}`}>
            <motion.span 
              className="inline-block px-2 py-1 mb-2 text-xs font-lato font-semibold bg-blue-100 text-blue-700 rounded w-fit"
              whileHover={{ scale: 1.05 }}
            >
              {category_name}
            </motion.span>
            <h3 className="text-lg md:text-xl font-lato font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
          </Link>
          <p className="text-sm text-gray-600 font-lato line-clamp-2 mb-2 hidden md:block">{excerpt}</p>
          <div className="flex items-center gap-3 text-sm text-gray-500 font-lato">
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {author_name}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formattedDate}
            </span>
            {reading_time && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {reading_time} min
                </span>
              </>
            )}
          </div>
        </div>
      </motion.article>
    );
  }

  // --- Variant 4: Grid (Standard Vertical Card) ---
  return (
    <motion.article 
      className="flex flex-col h-full group"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/blog/${slug}`} className="relative w-full aspect-video overflow-hidden mb-3 rounded-lg shadow-md">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-lg" 
        />
      </Link>
      <div className="flex flex-col flex-1">
        <motion.span 
          className="inline-block px-2 py-1 mb-2 text-xs font-lato font-semibold bg-purple-100 text-purple-700 rounded w-fit"
          whileHover={{ scale: 1.05 }}
        >
          {category_name}
        </motion.span>
        <h3 className="text-base md:text-lg font-lato font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="text-sm text-gray-600 font-lato line-clamp-2 mb-3">{excerpt}</p>
        <div className="flex items-center gap-2 text-xs text-gray-500 font-lato mt-auto">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formattedDate}
          </span>
          {reading_time && (
            <>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {reading_time} min
              </span>
            </>
          )}
        </div>
      </div>
    </motion.article>
  );
}

