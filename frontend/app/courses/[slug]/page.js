'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { 
  CheckCircle, 
  Clock, 
  FileText, 
  PlayCircle, 
  Users,
  Smartphone,
  Trophy,
  Infinity,
  ChevronDown,
  ChevronUp,
  ArrowLeft
} from 'lucide-react';

const CourseDetailPage = ({ params }) => {
  const { slug } = params;
  const [openSections, setOpenSections] = useState({});
  const [videoModal, setVideoModal] = useState({ isOpen: false, videoId: '' });

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const openVideoPreview = (videoId) => {
    setVideoModal({ isOpen: true, videoId });
  };

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, videoId: '' });
  };

  // --- Icon Mapping ---
  // Maps strings from your data to the imported icon components
  const iconMap = {
    video: <PlayCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />,
    document: <FileText className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />,
    download: <FileText className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />, // Re-using FileText for downloadable resources
    infinity: <Infinity className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />,
    mobile: <Smartphone className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />,
    trophy: <Trophy className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
  };

  // Static course data - replace with API call later
  const course = {
    title: "Complete Web Development Bootcamp 2024",
    shortDescription: "Master modern web development with this comprehensive bootcamp covering HTML, CSS, JavaScript, React, Node.js, and much more!",
    price: "৳ 4,999",
    originalPrice: "৳ 8,999",
    instructor: "John Doe",
    rating: 4.8,
    students: 12450,
    lastUpdated: "November 2024",
    language: "English",
    videoUrl: "dQw4w9WgXcQ", // YouTube video ID
    thumbnail: "/img/course/course1.jpg",
    
    whatYouLearn: [
      "Build responsive websites using HTML5, CSS3, and JavaScript",
      "Master React.js for building modern web applications",
      "Understand backend development with Node.js and Express",
      "Work with databases like MongoDB and PostgreSQL",
      "Deploy applications to cloud platforms",
      "Implement authentication and authorization",
      "Create REST APIs and work with third-party APIs",
      "Follow industry best practices and coding standards"
    ],
    
    includes: [
      { icon: "video", text: "52 hours on-demand video" },
      { icon: "document", text: "75 articles" },
      { icon: "download", text: "120 downloadable resources" },
      { icon: "infinity", text: "Full lifetime access" },
      { icon: "mobile", text: "Access on mobile and TV" },
      { icon: "trophy", text: "Certificate of completion" }
    ],
    
    courseContent: [
      {
        section: "Introduction to Web Development",
        lectures: 12,
        duration: "2h 30m",
        lessons: [
          { title: "Course Introduction", duration: "5:30", preview: true, videoId: "dQw4w9WgXcQ" },
          { title: "Setting Up Your Development Environment", duration: "15:45", preview: true, videoId: "dQw4w9WgXcQ" },
          { title: "HTML Basics", duration: "20:15", preview: false },
          { title: "CSS Fundamentals", duration: "25:30", preview: false }
        ]
      },
      {
        section: "JavaScript Essentials",
        lectures: 25,
        duration: "5h 45m",
        lessons: [
          { title: "JavaScript Introduction", duration: "10:20", preview: true, videoId: "dQw4w9WgXcQ" },
          { title: "Variables and Data Types", duration: "18:30", preview: false },
          { title: "Functions and Scope", duration: "22:45", preview: false },
          { title: "DOM Manipulation", duration: "30:15", preview: false }
        ]
      },
      {
        section: "React.js Masterclass",
        lectures: 30,
        duration: "8h 15m",
        lessons: [
          { title: "Introduction to React", duration: "12:30", preview: false },
          { title: "Components and Props", duration: "20:45", preview: false },
          { title: "State Management", duration: "25:30", preview: false },
          { title: "Hooks in React", duration: "28:15", preview: false }
        ]
      },
      {
        section: "Backend Development with Node.js",
        lectures: 28,
        duration: "7h 30m",
        lessons: [
          { title: "Node.js Basics", duration: "15:20", preview: false },
          { title: "Express.js Framework", duration: "22:30", preview: false },
          { title: "Working with Databases", duration: "30:45", preview: false },
          { title: "Building REST APIs", duration: "35:15", preview: false }
        ]
      },
      {
        section: "Deployment and Best Practices",
        lectures: 15,
        duration: "4h 20m",
        lessons: [
          { title: "Git and Version Control", duration: "18:30", preview: false },
          { title: "Deploying to Heroku", duration: "25:45", preview: false },
          { title: "AWS Deployment", duration: "30:20", preview: false },
          { title: "Performance Optimization", duration: "28:15", preview: false }
        ]
      }
    ],
    
    requirements: [
      "Basic computer knowledge and internet access",
      "No prior programming experience required",
      "A computer (Windows, Mac, or Linux)",
      "Willingness to learn and practice coding",
      "Basic understanding of English"
    ],
    
    description: `
      <h3>About This Course</h3>
      <p>Welcome to the most comprehensive web development course on the internet! This course is designed to take you from a complete beginner to a professional web developer capable of building full-stack web applications.</p>
      
      <h3>Why Choose This Course?</h3>
      <p>With over 50 hours of content, hands-on projects, and real-world examples, you'll gain practical experience building modern web applications. Our curriculum is constantly updated to reflect the latest industry trends and best practices.</p>
      
      <h3>What Makes This Different?</h3>
      <ul>
        <li><strong>Project-Based Learning:</strong> Build 10+ real-world projects to add to your portfolio</li>
        <li><strong>Industry-Relevant Skills:</strong> Learn the exact skills companies are looking for</li>
        <li><strong>Comprehensive Curriculum:</strong> From fundamentals to advanced topics</li>
        <li><strong>Lifetime Access:</strong> Learn at your own pace with unlimited access</li>
        <li><strong>Community Support:</strong> Join thousands of students in our active community</li>
      </ul>
      
      <h3>Career Opportunities</h3>
      <p>After completing this course, you'll be ready for positions such as:</p>
      <ul>
        <li>Frontend Developer</li>
        <li>Backend Developer</li>
        <li>Full-Stack Developer</li>
        <li>Web Application Developer</li>
        <li>JavaScript Developer</li>
      </ul>
      
      <h3>Instructor</h3>
      <p>Your instructor has 10+ years of experience in web development and has worked with major tech companies. They bring real-world expertise and passion for teaching to help you succeed.</p>
    `,
    
    relatedTopics: [ // Renamed to "Related Courses" in the JSX
      { name: "React Advanced Patterns", image: "/img/course/course2.jpg" },
      { name: "Node.js Microservices", image: "/img/course/course3.jpg" },
      { name: "GraphQL Masterclass", image: "/img/course/course4.jpg" },
      { name: "TypeScript Complete Guide", image: "/img/course/course5.jpg" }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Video Modal */}
      {videoModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4" onClick={closeVideoModal}>
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeVideoModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${videoModal.videoId}?autoplay=1`}
              title="Course Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Hero Section - Compact */}
      <div className="bg-[var(--secondary)] text-white py-8 shadow-lg">
        <div className="container">
          <Link href="/courses" className="inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
          <h1 className="font-raleway text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            {course.title}
          </h1>
          <p className="font-lato text-base text-gray-200 mb-4 max-w-3xl">
            {course.shortDescription}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 font-bold">★ {course.rating}</span>
              <span className="text-gray-300">({course.students.toLocaleString()} students)</span>
            </div>
            <div className="text-gray-300">
              By <span className="text-white font-semibold">{course.instructor}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="w-4 h-4" />
              <span>{course.lastUpdated}</span>
            </div>
            <div className="text-gray-300">{course.language}</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* What You'll Learn */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="font-raleway text-xl md:text-2xl font-bold text-[var(--secondary)] mb-4">
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                {course.whatYouLearn.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="font-lato text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content - Simplified */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="font-raleway text-xl md:text-2xl font-bold text-[var(--secondary)] mb-4">
                Course Content
              </h2>
              <div className="space-y-2">
                {course.courseContent.map((section, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full bg-gray-50 px-5 py-3 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          {openSections[index] ? (
                            <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                          )}
                          <h3 className="font-raleway font-semibold text-[var(--secondary)] text-left truncate">
                            {section.section}
                          </h3>
                        </div>
                        <div className="text-xs text-gray-600 flex-shrink-0">
                          {section.lectures} lectures • {section.duration}
                        </div>
                      </div>
                    </button>
                    
                    {openSections[index] && (
                      <div className="bg-white">
                        {section.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="flex justify-between items-center px-5 py-2.5 border-t border-gray-100 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-2.5 flex-1 min-w-0">
                              <PlayCircle className="w-4 h-4 text-gray-500 flex-shrink-0" />
                              <span className="font-lato text-sm text-gray-700 truncate">{lesson.title}</span>
                            </div>
                            <div className='flex items-center gap-3 flex-shrink-0'>
                              {lesson.preview && (
                                <button 
                                  onClick={() => openVideoPreview(lesson.videoId)}
                                  className="text-xs text-[var(--primary)] font-semibold hover:underline"
                                >
                                  Preview
                                </button>
                              )}
                              <span className="text-xs text-gray-600">{lesson.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="font-raleway text-xl md:text-2xl font-bold text-[var(--secondary)] mb-4">
                Requirements
              </h2>
              <ul className="space-y-2 list-disc list-inside">
                {course.requirements.map((req, index) => (
                  <li key={index} className="font-lato text-sm text-gray-700">
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="font-raleway text-xl md:text-2xl font-bold text-[var(--secondary)] mb-4">
                Description
              </h2>
              <div 
                className="font-lato text-sm text-gray-700 prose max-w-none prose-h3:font-raleway prose-h3:text-[var(--secondary)] prose-h3:text-lg"
                dangerouslySetInnerHTML={{ __html: course.description }}
              />
            </div>

            {/* Related Courses */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="font-raleway text-xl md:text-2xl font-bold text-[var(--secondary)] mb-4">
                Related Courses
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {course.relatedTopics.map((topic, index) => (
                  <Link 
                    key={index}
                    href="#"
                    className="group relative rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 block"
                  >
                    <div className="aspect-[4/3] bg-gray-200 relative">
                      <Image 
                        src={topic.image} 
                        alt={topic.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-3">
                      <p className="text-white font-semibold text-sm">{topic.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sticky Summary Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                
                {/* Video Preview */}
                <div className="relative aspect-video bg-gray-900 group cursor-pointer" onClick={() => openVideoPreview(course.videoUrl)}>
                  <Image 
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all hover:scale-110 shadow-lg">
                      <PlayCircle className="w-10 h-10 text-[var(--primary)]" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 p-3">
                    <p className="text-white font-semibold text-sm drop-shadow-md">Preview this course</p>
                  </div>
                </div>

                <div className="p-5">
                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-[var(--secondary)]">{course.price}</span>
                      <span className="text-lg text-gray-400 line-through">{course.originalPrice}</span>
                    </div>
                    <div className="text-base font-semibold text-red-600 mt-1">
                      50% OFF
                    </div>
                    <div className="flex items-center gap-2 text-red-600 font-semibold mt-2 text-xs">
                      <Clock className="w-4 h-4" />
                      <span>Only 1 day left at this price!</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2.5 mb-4">
                    <button className="w-full bg-[var(--primary)] hover:bg-red-700 text-white font-bold py-2.5 px-5 rounded-lg transition-colors shadow-md hover:shadow-lg">
                      Buy Now
                    </button>
                    <button className="w-full bg-white hover:bg-gray-100 text-[var(--secondary)] font-bold py-2.5 px-5 rounded-lg border-2 border-[var(--secondary)] transition-colors">
                      Add to Cart
                    </button>
                  </div>

                  <p className="text-center text-xs text-gray-600 mb-4">30-Day Money-Back Guarantee</p>

                  {/* This Course Includes */}
                  <div className="border-t pt-4">
                    <h3 className="font-raleway font-bold text-base text-[var(--secondary)] mb-3">
                      This Course Includes:
                    </h3>
                    <ul className="space-y-2.5">
                      {course.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2.5">
                          {iconMap[item.icon] || <CheckCircle className="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" />}
                          <span className="font-lato text-xs text-gray-800">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Share & Gift */}
                  <div className="border-t mt-4 pt-3">
                    <div className="flex justify-around text-center text-xs font-semibold text-[var(--primary)]">
                      <button className="hover:underline">Share</button>
                      <button className="hover:underline">Gift this course</button>
                    </div>
                  </div>

                  {/* Coupon */}
                  <div className="border-t mt-3 pt-3">
                    <h4 className="font-semibold text-gray-800 mb-2 font-raleway text-sm">Apply Coupon</h4>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Enter coupon" 
                        className="flex-grow border border-gray-300 rounded-md p-2 text-xs focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
                      />
                      <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-3 rounded-md transition-colors text-xs">
                        Apply
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;