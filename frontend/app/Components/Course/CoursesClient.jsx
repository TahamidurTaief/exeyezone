'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CoursesClient = ({ categories, allCourses }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Filter courses based on selected category
  const filteredCourses = selectedCategory
    ? allCourses.filter(course => course.category?.id === selectedCategory)
    : allCourses;

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId === 'all' ? null : categoryId);
  };

  return (
    <div className="w-full">
      {/* Category Filters */}
      <div className="mt-2 w-full">
        <div className="w-full flex flex-row justify-center gap-4 flex-wrap mx-auto">
          {/* All Courses Button */}
          <button
            onClick={() => handleCategoryClick('all')}
            className={`border ${
              !selectedCategory
                ? 'border-[var(--primary)] bg-[var(--primary)] text-white' 
                : 'border-gray-400 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white'
            } duration-200 text-sm font-lato rounded-lg px-3 font-semibold py-1 text-center`}
          >
            All Courses
          </button>
          
          {/* Category Buttons */}
          {categories?.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`border ${
                selectedCategory === category.id
                  ? 'border-[var(--primary)] bg-[var(--primary)] text-white' 
                  : 'border-gray-400 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white'
              } duration-200 text-sm font-lato rounded-lg px-3 font-semibold text-gray-700 py-1 text-center`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="mt-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-4 lg:gap-6 mx-auto justify-center">
          {filteredCourses.map((course) => (
            <div 
              className="p-2 bg-[#F5F7F9] min-w-[300px] max-w-[336px] pb-4 rounded-xl hover:shadow-lg duration-200" 
              key={course.id}
            >
              <div className="flex flex-col px-2">
                <div className="relative w-full h-[200px]">
                  <Image 
                    src={course.image} 
                    alt={course.title} 
                    fill
                    className="object-cover rounded-lg" 
                  />
                </div>
                
                <div className="mt-3">
                  <Link href={`/courses/${course.slug || course.id}`}>
                    <h1 className="text-[16px] font-raleway font-semibold justify-start hover:text-[var(--primary)]">
                      {course.title}
                    </h1>
                  </Link>
                </div>

                {course.short_description && (
                  <p className="text-sm text-gray-600 font-lato mt-2 line-clamp-2">
                    {course.short_description}
                  </p>
                )}

                <div className="flex flex-row justify-between mt-2">
                  {course.category && (
                    <p className="text-gray-500 font-lato text-sm">
                      in <span className="hover:underline">{course.category.name}</span>
                    </p>
                  )}
                  {course.price && (
                    <h1 className="font-lato font-bold text-[var(--secondary)] text-[17px]">
                      ${course.price}
                    </h1>
                  )}
                </div>

                <hr className="mt-2" />

                <div className="flex flex-row justify-between mt-3 items-center">
                  <div className="flex flex-col gap-1">
                    {course.instructor && (
                      <p className="text-gray-500 font-lato text-sm">
                        By {course.instructor}
                      </p>
                    )}
                    {course.rating && (
                      <p className="text-gray-800 font-lato text-md font-semibold">
                        Rating: <span className="text-[var(--primary)]">{course.rating}</span>
                      </p>
                    )}
                  </div>
                  <div>
                    <Link
                      href={`/courses/${course.slug || course.id}`}
                      className="border-[1px] border-secondary px-3 py-2 rounded-full font-lato justify-center items-center font-semibold text-gray-600 hover:text-white hover:bg-[var(--secondary)] inline-block"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>      
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 font-lato text-lg">
              No courses found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesClient;
