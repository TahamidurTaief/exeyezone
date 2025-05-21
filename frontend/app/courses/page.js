import { AppDevIcon, PlayButtonIcon, UserIcon } from '@/public/icons/CourseIcons';
import Image from 'next/image';
import Link from 'next/link';
import { fetchCategories, fetchCourses } from '@/utils/api/course';
import Hero from '../Components/Course/Hero';

const CourseCard = ({ course }) => {
  // Safely handle potentially undefined course data
  if (!course) return null;

  return (
    <div className="flex flex-col transform hover:scale-105 duration-300 gap-4 min-w-[16rem] w-full max-w-[23.125rem] border-2 border-gray-100 rounded-md p-3 md:p-4 shadow-md md:shadow-lg">
      <div className="rounded-md w-full">
        <Link href={`/courses/${course.id}`}>
          <Image 
            src={course.img || '/default-course-image.jpg'} 
            alt={course.title || 'Course image'}
            width={400}
            height={225}
            className="w-full rounded-md"
          />
        </Link>
      </div>
      <div>
        <p className="text-gray-500 font-medium text-xs md:text-sm">
          {course.tags?.map(tag => tag.name).join(', ') || 'No tags'}
        </p>
      </div>
      <div>
        <Link href={`/courses/${course.id}`}>
          <h2 className="text-[var(--secondary)] text-xl sm:text-lg md:text-md xl:text-md font-semibold md:leading-6">
            {course.title || 'Untitled Course'}
          </h2>
        </Link>
      </div>
      <div className="flex flex-row justify-between">
        <h2 className="text-lg font-bold text-[var(--primary)] transform hover:scale-125 duration-300">
          ${course.price || '0.00'}
        </h2>
        <h2 className={`text-lg font-normal ${
          course.course_type === 'Live' ? 'text-[var(--secondary)]' : 'text-gray-500'
        }`}>
          {course.course_type || 'Recorded'}
        </h2>
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
    <div className="pt-2 pb-20">
      <div className="container">
        <Hero />
        <div className="justify-center text-center mt-10">
          <h1 className="font-raleway text-xl md:text-2xl xl:text-4xl text-[var(--primary)] font-bold">Our Courses</h1>
          <p className="mt-4 font-mont text-gray-600 text-sm">
            We offer all the trendy courses that are in demand in the global market...
          </p>
        </div>

        <div className="mt-20">
          <h1 className="font-raleway text-center text-xl md:text-2xl xl:text-3xl text-[var(--primary)] font-bold">
            Our Course <span className="text-[var(--secondary)]">Categories</span>
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 gap-y-14 mt-20">
            {categories?.map((category) => (
              <div key={category.id} className="bg-white shadow-lg rounded-xl p-2 md:p-5 my-5 smin-w-44 max-w-72 border-[1px] hover:scale-105 duration-200">
                <div className="-mt-12">
                  <AppDevIcon />                                
                </div>
                <h2 className="font-raleway text-lg md:text-xl font-semibold my-3">
                  <Link href={`?category=${category.id}`}>{category.name}</Link>
                </h2>
                <div className="flex text-gray-600 items-center gap-4">
                  <div><PlayButtonIcon/></div>
                  <p className="font-mont text-gray-600">{category.total_courses || 0} Courses</p>
                </div>
                <div className="flex text-gray-600 items-center gap-4 mt-3">
                  <div><UserIcon/></div>
                  <p className="font-mont text-gray-600">{category.total_students || 0} Students</p>
                </div>
                <div className="justify-center text-center bg-[var(--secondary)] py-2 rounded-lg mt-5">
                  <Link href={`?category=${category.id}`} className="font-poppins font-normal w-full text-white">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <div>
          {selectedCategory ? (
            <div className="mt-20 md:mt-20 pb-10 font-lato">
              <div className="flex justify-between items-center pb-5">
                <h2 className="text-2xl md:text-4xl font-raleway font-bold text-[var(--secondary)]">
                  {categories?.find(c => c.id == selectedCategory)?.name || 'Selected'} <span className="text-[var(--primary)]">Courses</span>
                </h2>
                <Link href="/courses" className="bg-[var(--primary)] text-white px-4 py-2 rounded-md">
                  All Courses
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 justify-around gap-6 lg:gap-6 xl:gap-6">
                {courses?.map((course) => (
                  <CourseCard key={course?.id} course={course} />
                ))}
              </div>
            </div>
          ) : (
            Object.entries(coursesByCategory).map(([categoryName, categoryCourses]) => (
              <div key={categoryName} className="mt-20 md:mt-20 pb-10 font-lato">
                <h2 className="text-2xl md:text-4xl text-start font-raleway font-bold text-[var(--secondary)] pb-5">
                  {categoryName} <span className="text-[var(--primary)]">Courses</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 justify-around gap-6 lg:gap-6 xl:gap-6">
                  {categoryCourses?.slice(0, 4).map((course) => (
                    <CourseCard key={course?.id} course={course} />
                  ))}
                </div>
                {categoryCourses?.length > 4 && (
                  <div className="text-center mt-6">
                    <Link 
                      href={`?category=${categories?.find(c => c.name === categoryName)?.id}`}
                      className="text-[var(--primary)] font-semibold"
                    >
                      View All {categoryName} Courses →
                    </Link>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;