'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ArrowLeft,
  X,
  User,
  Phone,
  Mail,
  Briefcase
} from 'lucide-react';

const CourseDetailPage = ({ params }) => {
  const { slug } = params;
  const [openSections, setOpenSections] = useState({});
  const [videoModal, setVideoModal] = useState({ isOpen: false, videoId: '' });
  const [registrationModal, setRegistrationModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    occupation: '',
    message: ''
  });

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

  const openRegistrationModal = () => {
    setRegistrationModal(true);
  };

  const closeRegistrationModal = () => {
    setRegistrationModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call here
    closeRegistrationModal();
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      occupation: '',
      message: ''
    });
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
    price: "$49.99",
    originalPrice: "$89.99",
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
      <AnimatePresence>
        {videoModal.isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4" 
            onClick={closeVideoModal}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-video" 
              onClick={(e) => e.stopPropagation()}
            >
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Registration Modal */}
      <AnimatePresence>
        {registrationModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
            onClick={closeRegistrationModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[var(--primary)] to-red-700 text-white px-6 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-raleway text-2xl font-bold">Get Access to Course</h2>
                    <p className="text-red-100 text-sm mt-1">Fill in your details to enroll</p>
                  </div>
                  <button
                    onClick={closeRegistrationModal}
                    className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="overflow-y-auto max-h-[calc(90vh-180px)]">
                {/* Course Info Card */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 mx-6 mt-6 p-4 rounded-xl border border-gray-200">
                  <div className="flex gap-4">
                    <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image 
                        src={course.thumbnail}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-raleway font-bold text-[var(--secondary)] text-sm line-clamp-2">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-2xl font-bold text-[var(--primary)]">{course.price}</span>
                        <span className="text-sm text-gray-400 line-through">{course.originalPrice}</span>
                        <span className="text-xs font-semibold text-white bg-green-500 px-2 py-1 rounded">50% OFF</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 font-raleway">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all font-lato text-sm"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 font-raleway">
                      WhatsApp Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+880 1XXX-XXXXXX"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all font-lato text-sm"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 font-raleway">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all font-lato text-sm"
                      />
                    </div>
                  </div>

                  {/* Occupation Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 font-raleway">
                      Occupation *
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all font-lato text-sm bg-white appearance-none cursor-pointer"
                      >
                        <option value="">Select your occupation</option>
                        <option value="student">Student</option>
                        <option value="professional">Working Professional</option>
                        <option value="freelancer">Freelancer</option>
                        <option value="entrepreneur">Entrepreneur</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 font-raleway">
                      Additional Message <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Any questions or special requests?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all font-lato text-sm resize-none"
                    />
                  </div>
                </form>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex gap-3">
                <button
                  type="button"
                  onClick={closeRegistrationModal}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-100 transition-all font-raleway"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-red-700 text-white font-bold rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all font-raleway"
                >
                  Submit Request
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section - Compact */}
      <div className="bg-gradient-to-br from-[var(--secondary)] via-blue-900 to-[var(--secondary)] text-white py-8 shadow-lg relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container relative z-10">
          <Link href="/courses" className="inline-flex items-center gap-2 text-gray-200 hover:text-white text-sm font-medium transition-colors mb-4 hover:gap-3 duration-300">
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
          <h1 className="font-raleway text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
            {course.title}
          </h1>
          <p className="font-lato text-base text-gray-100 mb-4 max-w-3xl leading-relaxed">
            {course.shortDescription}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <div className="flex items-center gap-2 bg-white bg-opacity-10 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <span className="text-yellow-400 font-bold">★ {course.rating}</span>
              <span className="text-gray-200">({course.students.toLocaleString()} students)</span>
            </div>
            <div className="text-gray-200">
              By <span className="text-white font-semibold">{course.instructor}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-200">
              <Clock className="w-4 h-4" />
              <span>{course.lastUpdated}</span>
            </div>
            <div className="text-gray-200 flex items-center gap-1">
              <span>🌐</span>
              <span>{course.language}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* What You'll Learn */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="font-raleway text-xl md:text-2xl font-bold text-[var(--secondary)] mb-5 flex items-center gap-2">
                <div className="w-1 h-8 bg-[var(--primary)] rounded-full"></div>
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                {course.whatYouLearn.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="font-lato text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content - Simplified */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="font-raleway text-xl md:text-2xl font-bold text-[var(--secondary)] mb-5 flex items-center gap-2">
                <div className="w-1 h-8 bg-[var(--primary)] rounded-full"></div>
                Course Content
              </h2>
              <div className="space-y-2">
                {course.courseContent.map((section, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:border-[var(--primary)] transition-all duration-300">
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full bg-gradient-to-r from-gray-50 to-white px-5 py-4 hover:from-gray-100 hover:to-gray-50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className={`transform transition-transform duration-300 ${openSections[index] ? 'rotate-180' : ''}`}>
                            <ChevronDown className="w-5 h-5 text-[var(--primary)]" />
                          </div>
                          <h3 className="font-raleway font-semibold text-[var(--secondary)] text-left truncate">
                            {section.section}
                          </h3>
                        </div>
                        <div className="text-xs text-gray-600 flex-shrink-0 bg-gray-100 px-3 py-1 rounded-full">
                          {section.lectures} lectures • {section.duration}
                        </div>
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {openSections[index] && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-white overflow-hidden"
                        >
                          {section.lessons.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="flex justify-between items-center px-5 py-3 border-t border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-200">
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <PlayCircle className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                <span className="font-lato text-sm text-gray-700 truncate">{lesson.title}</span>
                              </div>
                              <div className='flex items-center gap-3 flex-shrink-0'>
                                {lesson.preview && (
                                  <button 
                                    onClick={() => openVideoPreview(lesson.videoId)}
                                    className="text-xs text-[var(--primary)] font-semibold hover:underline bg-red-50 px-3 py-1 rounded-full hover:bg-red-100 transition-colors"
                                  >
                                    Preview
                                  </button>
                                )}
                                <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">{lesson.duration}</span>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="font-raleway text-xl md:text-2xl font-bold text-[var(--secondary)] mb-5 flex items-center gap-2">
                <div className="w-1 h-8 bg-[var(--primary)] rounded-full"></div>
                Requirements
              </h2>
              <ul className="space-y-2.5">
                {course.requirements.map((req, index) => (
                  <li key={index} className="font-lato text-sm text-gray-700 flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-[var(--primary)] font-bold flex-shrink-0 mt-0.5">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="font-raleway text-xl md:text-2xl font-bold text-[var(--secondary)] mb-5 flex items-center gap-2">
                <div className="w-1 h-8 bg-[var(--primary)] rounded-full"></div>
                Description
              </h2>
              <div 
                className="font-lato text-sm text-gray-700 prose max-w-none prose-h3:font-raleway prose-h3:text-[var(--secondary)] prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-ul:my-2 prose-li:my-1"
                dangerouslySetInnerHTML={{ __html: course.description }}
              />
            </div>

            {/* Related Courses */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="font-raleway text-xl md:text-2xl font-bold text-[var(--secondary)] mb-5 flex items-center gap-2">
                <div className="w-1 h-8 bg-[var(--primary)] rounded-full"></div>
                Related Courses
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {course.relatedTopics.map((topic, index) => (
                  <Link 
                    key={index}
                    href="#"
                    className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 block transform hover:scale-105"
                  >
                    <div className="aspect-[4/3] bg-gray-200 relative">
                      <Image 
                        src={topic.image} 
                        alt={topic.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-3 w-full">
                      <p className="text-white font-semibold text-sm drop-shadow-lg">{topic.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sticky Summary Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-300">
                
                {/* Video Preview */}
                <div className="relative aspect-video bg-gray-900 group cursor-pointer overflow-hidden" onClick={() => openVideoPreview(course.videoUrl)}>
                  <Image 
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all hover:scale-110 shadow-2xl group-hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]">
                      <PlayCircle className="w-10 h-10 text-[var(--primary)]" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-white font-semibold text-sm drop-shadow-2xl flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      Preview this course
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-[var(--secondary)]">{course.price}</span>
                      <span className="text-lg text-gray-400 line-through">{course.originalPrice}</span>
                    </div>
                    <div className="text-base font-semibold text-green-600 mt-1">
                      50% OFF - Limited Time!
                    </div>
                    <div className="flex items-center gap-2 text-amber-600 font-semibold mt-2 text-xs bg-amber-50 px-3 py-2 rounded-lg border border-amber-200">
                      <Clock className="w-4 h-4" />
                      <span>Only 1 day left at this price!</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mb-4">
                    <button 
                      onClick={openRegistrationModal}
                      className="w-full bg-gradient-to-r from-[var(--primary)] to-red-700 hover:from-red-700 hover:to-[var(--primary)] text-white font-bold py-3.5 px-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] transform font-raleway text-lg"
                    >
                      Get Access Now
                    </button>
                  </div>

                  <p className="text-center text-xs text-gray-600 mb-4 bg-green-50 py-2 rounded-lg border border-green-100">
                    ✓ 30-Day Money-Back Guarantee
                  </p>

                  {/* This Course Includes */}
                  <div className="border-t pt-5">
                    <h3 className="font-raleway font-bold text-base text-[var(--secondary)] mb-4">
                      This Course Includes:
                    </h3>
                    <ul className="space-y-3">
                      {course.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                          {iconMap[item.icon] || <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />}
                          <span className="font-lato text-sm text-gray-800">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Share & Gift */}
                  <div className="border-t mt-5 pt-4">
                    <div className="flex justify-around text-center text-sm font-semibold">
                      <button className="text-[var(--primary)] hover:text-red-700 transition-colors flex items-center gap-1.5 hover:scale-105 transform duration-200">
                        <span>Share</span>
                      </button>
                      <span className="text-gray-300">|</span>
                      <button className="text-[var(--primary)] hover:text-red-700 transition-colors flex items-center gap-1.5 hover:scale-105 transform duration-200">
                        <span>Gift this course</span>
                      </button>
                    </div>
                  </div>

                  {/* Coupon */}
                  <div className="border-t mt-4 pt-4">
                    <h4 className="font-semibold text-gray-800 mb-3 font-raleway text-sm">Apply Coupon</h4>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Enter coupon code" 
                        className="flex-grow border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
                      />
                      <button className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold py-2.5 px-4 rounded-lg transition-all text-sm hover:scale-105 transform duration-200">
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