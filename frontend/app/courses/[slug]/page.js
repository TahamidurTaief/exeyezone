'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchCourseBySlug, submitCourseRegistration } from '@/utils/api/course';
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
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openSections, setOpenSections] = useState({});
  const [videoModal, setVideoModal] = useState({ isOpen: false, videoId: '' });
  const [registrationModal, setRegistrationModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    occupation: '',
    message: ''
  });

  useEffect(() => {
    const loadCourse = async () => {
      setLoading(true);
      const data = await fetchCourseBySlug(slug);
      setCourse(data);
      setLoading(false);
    };
    
    if (slug) {
      loadCourse();
    }
  }, [slug]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const registrationData = {
        ...formData,
        course: course.id
      };
      
      await submitCourseRegistration(registrationData);
      
      // Show success message (you can add a toast notification here)
      alert('Registration submitted successfully! We will contact you soon.');
      
      closeRegistrationModal();
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        occupation: '',
        message: ''
      });
    } catch (error) {
      alert('Failed to submit registration. Please try again.');
      console.error('Registration error:', error);
    } finally {
      setSubmitting(false);
    }
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

  // Loading state
  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[var(--primary)] mx-auto mb-4"></div>
          <p className="text-gray-600 font-lato">Loading course details...</p>
        </div>
      </div>
    );
  }

  // Not found state
  if (!course) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
          <Link 
            href="/courses" 
            className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  // Calculate discount percentage
  const discountPercentage = course.original_price 
    ? Math.round(((course.original_price - course.price) / course.original_price) * 100)
    : 0;

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
                        src={course.img}
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
                        <span className="text-2xl font-bold text-[var(--primary)]">${course.price}</span>
                        {course.original_price && (
                          <>
                            <span className="text-sm text-gray-400 line-through">${course.original_price}</span>
                            <span className="text-xs font-semibold text-white bg-green-500 px-2 py-1 rounded">{discountPercentage}% OFF</span>
                          </>
                        )}
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
                  disabled={submitting}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-red-700 text-white font-bold rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all font-raleway disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Submitting...' : 'Submit Request'}
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
            {course.short_description}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <div className="flex items-center gap-2 bg-white bg-opacity-10 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <span className="text-yellow-400 font-bold">★ {course.rating}</span>
              <span className="text-gray-200">({course.students_count.toLocaleString()} students)</span>
            </div>
            <div className="text-gray-200">
              By <span className="text-white font-semibold">{course.instructor}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-200">
              <Clock className="w-4 h-4" />
              <span>{course.last_updated}</span>
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
                {course.what_you_learn?.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="font-lato text-sm text-gray-700">{item.text}</p>
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
                {course.sections?.map((section, index) => (
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
                            {section.title}
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
                          {section.lessons?.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="flex justify-between items-center px-5 py-3 border-t border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-200">
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <PlayCircle className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                <span className="font-lato text-sm text-gray-700 truncate">{lesson.title}</span>
                              </div>
                              <div className='flex items-center gap-3 flex-shrink-0'>
                                {lesson.is_preview && (
                                  <button 
                                    onClick={() => openVideoPreview(lesson.video_id)}
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
            {course.requirements && course.requirements.length > 0 && (
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                <h2 className="font-raleway text-xl md:text-2xl font-bold text-[var(--secondary)] mb-5 flex items-center gap-2">
                  <div className="w-1 h-8 bg-[var(--primary)] rounded-full"></div>
                  Requirements
                </h2>
                <ul className="space-y-2.5">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="font-lato text-sm text-gray-700 flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-[var(--primary)] font-bold flex-shrink-0 mt-0.5">•</span>
                      <span>{req.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Description */}
            {course.description && (
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
            )}

            {/* Related Courses */}
            {course.related_courses && course.related_courses.length > 0 && (
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                <h2 className="font-raleway text-xl md:text-2xl font-bold text-[var(--secondary)] mb-5 flex items-center gap-2">
                  <div className="w-1 h-8 bg-[var(--primary)] rounded-full"></div>
                  Related Courses
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {course.related_courses.map((relatedCourse, index) => (
                    <Link 
                      key={index}
                      href={`/courses/${relatedCourse.slug}`}
                      className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 block transform hover:scale-105"
                    >
                      <div className="aspect-[4/3] bg-gray-200 relative">
                        <Image 
                          src={relatedCourse.img} 
                          alt={relatedCourse.title}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 p-3 w-full">
                        <p className="text-white font-semibold text-sm drop-shadow-lg line-clamp-2">{relatedCourse.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sticky Summary Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-300">
                
                {/* Video Preview */}
                <div className="relative aspect-video bg-gray-900 group cursor-pointer overflow-hidden" onClick={() => openVideoPreview(course.video_url)}>
                  <Image 
                    src={course.img}
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
                      <span className="text-3xl font-bold text-[var(--secondary)]">${course.price}</span>
                      {course.original_price && (
                        <span className="text-lg text-gray-400 line-through">${course.original_price}</span>
                      )}
                    </div>
                    {course.original_price && (
                      <div className="text-base font-semibold text-green-600 mt-1">
                        {discountPercentage}% OFF - Limited Time!
                      </div>
                    )}
                    {course.deadline && (
                      <div className="flex items-center gap-2 text-amber-600 font-semibold mt-2 text-xs bg-amber-50 px-3 py-2 rounded-lg border border-amber-200">
                        <Clock className="w-4 h-4" />
                        <span>Enrollment deadline: {new Date(course.deadline).toLocaleDateString()}</span>
                      </div>
                    )}
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
                      {course.includes?.map((item, index) => (
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