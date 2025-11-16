import { fetchCategories, fetchCourses } from '@/utils/api/course';
import Hero from '../Components/Course/Hero';
import CoursesClient from '../Components/Course/CoursesClient';

const CoursePage = async () => {
  const categories = await fetchCategories();
  const courses = await fetchCourses();

  const totalCourses = courses?.length || 25;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Professional Courses",
    "description": "Browse our collection of professional courses",
    "numberOfItems": courses?.length || 0,
    "itemListElement": courses?.slice(0, 10).map((course, index) => ({
      "@type": "Course",
      "position": index + 1,
      "name": course.title,
      "description": course.short_description || course.description,
      "provider": {
        "@type": "Organization",
        "name": "Exeyezone",
        "sameAs": "https://exeyezone.com"
      },
      "offers": {
        "@type": "Offer",
        "price": course.price,
        "priceCurrency": "USD"
      }
    }))
  };

  return (
    <div className="pb-20 bg-gradient-to-b from-white via-gray-50/20 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Hero totalCourses={totalCourses} />
      
      <div className="container">
        <CoursesClient categories={categories} allCourses={courses} />
      </div>
    </div>
  );
}

export default CoursePage;
