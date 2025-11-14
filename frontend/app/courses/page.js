import { AppDevIcon, PlayButtonIcon, UserIcon } from '@/public/icons/CourseIcons';
import Link from 'next/link';
import { fetchCategories, fetchCourses } from '@/utils/api/course';
import Hero from '../Components/Course/Hero';
import CourseCardImage from '../Components/Course/CourseCardImage';

const CourseCard = ({ course }) => {
  // Safely handle potentially undefined course data
  if (!course) return null;

  return (
    <div className="group  p-3 relative flex flex-col gap-3 w-full bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[var(--primary)]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary)]/10 hover:-translate-y-2">
      {/* Image Container with Overlay */}
      <div className="relative w-full h-52 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <Link href={`/courses/${course.slug}`}>
          <CourseCardImage 
            src={course.img}
            alt={course.title}
            course_type={course.course_type}
          />
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        {/* Tags */}
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

        {/* Title */}
        <Link href={`/courses/${course.slug}`}>
          <h3 className="text-[var(--secondary)] text-lg font-bold font-raleway leading-tight line-clamp-2 group-hover:text-[var(--primary)] transition-colors duration-300">
            {course.title || 'Untitled Course'}
          </h3>
        </Link>

        {/* Price and Type */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-[var(--primary)] font-poppins">
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

        {/* CTA Button */}
        <Link 
          href={`/courses/${course.slug}`}
          className="mt-2 w-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/90 text-white py-2.5 px-4 rounded-xl font-semibold text-sm text-center hover:shadow-lg hover:shadow-[var(--primary)]/30 transition-all duration-300 group/btn"
        >
          <span className="flex items-center justify-center gap-2">
            View Details
            <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};







const CoursePage = async ({ searchParams }) => {
  const selectedCategory = searchParams?.category || null;
  const categories = await fetchCategories();
  const courses = await fetchCourses(selectedCategory);

  // Safely group courses by category
  const coursesByCategory = {};
  if (!selectedCategory) {
    const allCourses = await fetchCourses();
    allCourses?.forEach(course => {
      const categoryName = course.category?.name || 'Uncategorized';
      if (!coursesByCategory[categoryName]) {
        coursesByCategory[categoryName] = [];
      }
      coursesByCategory[categoryName].push(course);
    });
  }

  return (
    <div className="pt-2 pb-20 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="container">
        <Hero />
        
        {/* Modern Header Section */}
        <div className="relative mt-16 mb-12">
          <div className="text-center space-y-4">
            {/* Decorative element */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent rounded-full"></div>
              <svg className="w-8 h-8 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <div className="w-12 h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--primary)] to-transparent rounded-full"></div>
            </div>
            
          </div>
        </div>

        {/* Modern Course Categories Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent font-raleway text-2xl md:text-3xl xl:text-4xl font-bold mb-3">
              Our Course <span className="text-[var(--secondary)]">Categories</span>
            </h2>
            <p className="text-gray-600 font-lato text-sm md:text-base max-w-xl mx-auto">
              Browse through our diverse range of course categories tailored to your learning needs
            </p>
          </div>
          
          {/* Compact Category Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {categories?.map((category, index) => (
              <Link 
                key={category.id}
                href={`?category=${category.id}`}
                className="group relative flex flex-col items-center justify-center gap-3 bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-[var(--primary)]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary)]/15 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/0 via-[var(--primary)]/0 to-[var(--primary)]/0 group-hover:from-[var(--primary)]/5 group-hover:via-[var(--primary)]/3 group-hover:to-[var(--secondary)]/5 transition-all duration-500" />
                
                {/* Rotating Border Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />
                  <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />
                </div>
                
                <div className="relative z-10 flex flex-col items-center gap-3">
                  {/* Icon with Animation */}
                  <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <AppDevIcon />
                  </div>

                  {/* Category Name */}
                  <h3 className="font-raleway text-sm md:text-base font-bold text-center text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors duration-300 line-clamp-2">
                    {category.name}
                  </h3>

                  {/* Hover Indicator Arrow */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Corner Shine Effect */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <div>
          {selectedCategory ? (
            <div className="mt-20 md:mt-24 pb-10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
                <div>
                  <h2 className="text-2xl md:text-3xl xl:text-4xl font-raleway font-bold">
                    <span className="text-[var(--secondary)]">
                      {categories?.find(c => c.id == selectedCategory)?.name || 'Selected'}
                    </span>
                    <span className="text-[var(--primary)]"> Courses</span>
                  </h2>
                  <p className="text-gray-600 mt-2 font-lato text-sm">
                    Explore our curated selection of courses
                  </p>
                </div>
                <Link 
                  href="/courses" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/90 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/30 transition-all duration-300 group"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                  </svg>
                  All Courses
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {courses?.map((course) => (
                  <CourseCard key={course?.id} course={course} />
                ))}
              </div>
            </div>
          ) : (
            Object.entries(coursesByCategory).map(([categoryName, categoryCourses], index) => (
              <div key={categoryName} className="mt-20 md:mt-24 pb-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
                  <div>
                    <h2 className="text-2xl md:text-3xl xl:text-4xl font-raleway font-bold">
                      <span className="text-[var(--secondary)]">{categoryName}</span>
                      <span className="text-[var(--primary)]"> Courses</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-transparent rounded-full mt-2"></div>
                  </div>
                  {categoryCourses?.length > 4 && (
                    <Link 
                      href={`?category=${categories?.find(c => c.name === categoryName)?.id}`}
                      className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:gap-3 transition-all duration-300 group"
                    >
                      View All
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                  {categoryCourses?.slice(0, 4).map((course) => (
                    <CourseCard key={course?.id} course={course} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;