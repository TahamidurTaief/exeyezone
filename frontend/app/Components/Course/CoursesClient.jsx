'use client';

import { useState, useRef, memo } from 'react';
import { AppDevIcon } from '@/public/icons/CourseIcons';
import Link from 'next/link';
import CourseCardImage from '../../Components/Course/CourseCardImage';
import { motion, AnimatePresence } from 'framer-motion';

const CourseCard = memo(({ course }) => {
  if (!course) return null;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group p-3 relative flex flex-col gap-2.5 w-full bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[var(--primary)]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[var(--primary)]/10 hover:-translate-y-2"
    >
      <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg">
        <Link href={`/courses/${course.slug}`}>
          <CourseCardImage 
            src={course.img}
            alt={course.title}
            course_type={course.course_type}
          />
        </Link>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="flex flex-wrap gap-2">
          {course.tags?.slice(0, 2).map((tag, index) => (
            <span key={index} className="text-xs font-medium text-[var(--primary)] bg-[var(--primary)]/5 px-3 py-1 rounded-full border border-[var(--primary)]/20">
              {tag.name}
            </span>
          )) || (
            <span className="text-xs font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
              No tags
            </span>
          )}
        </div>

        <Link href={`/courses/${course.slug}`}>
          <h3 className="text-[var(--secondary)] text-lg font-bold font-raleway leading-tight line-clamp-2 group-hover:text-[var(--primary)] transition-colors duration-300">
            {course.title || 'Untitled Course'}
          </h3>
        </Link>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-[var(--secondary)] font-poppins">
              ${course.price || '0.00'}
            </span>
          </div>
          
          <div className={`flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium ${
            course.course_type === 'Live' 
              ? 'bg-[var(--secondary)]/5 text-[var(--secondary)]' 
              : 'bg-gray-100 text-gray-600'
          }`}>
            {course.course_type === 'Live' ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            {course.course_type || 'Recorded'}
          </div>
        </div>

        <Link 
          href={`/courses/${course.slug}`}
          className="mt-2 w-full bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary)]/90 hover:from-[var(--primary)] hover:to-[var(--primary)]/90 text-white py-2.5 px-4 rounded-xl font-semibold text-sm text-center hover:shadow-lg hover:shadow-[var(--primary)]/30 transition-all duration-300 group/btn"
        >
          <span className="flex items-center justify-center gap-2">
            View Details
            <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
    </motion.div>
  );
});

CourseCard.displayName = 'CourseCard';

const CoursesClient = ({ categories, allCourses }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const coursesRef = useRef(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    
    if (categoryId === null) {
      setFilteredCourses(allCourses);
    } else {
      const filtered = allCourses.filter(course => course.category?.id === categoryId);
      setFilteredCourses(filtered);
    }

    if (coursesRef.current) {
      const yOffset = -100;
      const y = coursesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Group courses by category for initial display
  const coursesByCategory = {};
  if (!selectedCategory) {
    allCourses?.forEach(course => {
      const categoryName = course.category?.name || 'Uncategorized';
      if (!coursesByCategory[categoryName]) {
        coursesByCategory[categoryName] = [];
      }
      coursesByCategory[categoryName].push(course);
    });
  }

  return (
    <>
      {/* Simplified Modern Course Categories Section */}
      <div className="mb-12 mt-8" id="categories">
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent font-raleway text-2xl md:text-3xl xl:text-4xl font-bold mb-2"
          >
            Our Course <span className="text-[var(--secondary)]">Categories</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 font-lato text-sm md:text-base max-w-2xl mx-auto"
          >
            Browse through our diverse range of course categories
          </motion.p>
        </div>
        
        <div className="flex flex-row flex-wrap gap-3 md:gap-4">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCategoryClick(null)}
            className="group relative flex flex-col items-center justify-center gap-2 transition-all duration-300"
          >
            <div className={`p-2 rounded-lg transition-all duration-300 ${
              selectedCategory === null 
                ? 'bg-[var(--primary)]' 
                : 'bg-gray-100 group-hover:bg-[var(--primary)]/10'
            }`}>
              <svg 
                className={`w-6 h-6 transition-colors duration-300 ${
                  selectedCategory === null 
                    ? 'text-white' 
                    : 'text-[var(--secondary)] group-hover:text-[var(--primary)]'
                }`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className={`font-raleway text-xs md:text-sm font-bold text-center transition-colors duration-300 ${
              selectedCategory === null 
                ? 'text-[var(--primary)]' 
                : 'text-[var(--secondary)] group-hover:text-[var(--primary)]'
            }`}>
              All Courses
            </h3>
          </motion.button>

          {categories?.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryClick(category.id)}
              className="group relative flex flex-col items-center justify-center gap-2 transition-all duration-300"
            >
              <div className={`p-2 rounded-lg transition-all duration-300 ${
                selectedCategory === category.id 
                  ? 'bg-[var(--primary)]' 
                  : 'bg-gray-100 group-hover:bg-[var(--primary)]/10'
              }`}>
                <AppDevIcon className={`w-6 h-6 transition-colors duration-300 ${
                  selectedCategory === category.id 
                    ? 'text-white' 
                    : 'group-hover:text-[var(--primary)]'
                }`} />
              </div>
              <h3 className={`font-raleway text-xs md:text-sm font-bold text-center line-clamp-2 transition-colors duration-300 ${
                selectedCategory === category.id 
                  ? 'text-[var(--primary)]' 
                  : 'text-[var(--secondary)] group-hover:text-[var(--primary)]'
              }`}>
                {category.name}
              </h3>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Courses Section */}
      <div ref={coursesRef}>
        {selectedCategory ? (
          <div className="mt-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-raleway font-bold">
                  <span className="text-[var(--secondary)]">
                    {categories?.find(c => c.id === selectedCategory)?.name || 'Selected'}
                  </span>
                  <span className="text-[var(--primary)]"> Courses</span>
                </h2>
                <p className="text-gray-600 mt-2 font-lato text-sm">
                  {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} available
                </p>
              </motion.div>
            </div>
          
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
              >
                {filteredCourses?.map((course) => (
                  <CourseCard key={course?.id} course={course} />
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredCourses.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <p className="text-gray-500 text-lg font-lato">No courses found in this category.</p>
              </motion.div>
            )}
          </div>
        ) : (
          Object.entries(coursesByCategory).map(([categoryName, categoryCourses], index) => (
            <motion.div 
              key={categoryName} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mt-12 pb-8"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl xl:text-4xl font-raleway font-bold">
                    <span className="text-[var(--secondary)]">{categoryName}</span>
                    <span className="text-[var(--primary)]"> Courses</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-transparent rounded-full mt-2"></div>
                </div>
                {categoryCourses?.length > 4 && (
                  <button
                    onClick={() => handleCategoryClick(categories?.find(c => c.name === categoryName)?.id)}
                    className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:gap-3 transition-all duration-300 group"
                  >
                    View All
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {categoryCourses?.slice(0, 4).map((course) => (
                  <CourseCard key={course?.id} course={course} />
                ))}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </>
  );
};

export default CoursesClient;
