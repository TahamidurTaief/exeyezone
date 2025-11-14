import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from api.models import (
    Course, CourseCategory, Tag, CourseSection, CourseLesson,
    CourseWhatYouLearn, CourseRequirement, CourseIncludes
)

def populate_courses():
    print("Creating course categories...")
    
    # Create categories
    web_dev, _ = CourseCategory.objects.get_or_create(
        name="Web Development",
        defaults={
            'total_courses': 5,
            'total_students': 1500,
            'total_instructors': 3,
            'total_reviews': 250,
            'total_rating': 4.5
        }
    )
    
    mobile_dev, _ = CourseCategory.objects.get_or_create(
        name="Mobile Development",
        defaults={
            'total_courses': 3,
            'total_students': 800,
            'total_instructors': 2,
            'total_reviews': 120,
            'total_rating': 4.3
        }
    )
    
    data_science, _ = CourseCategory.objects.get_or_create(
        name="Data Science",
        defaults={
            'total_courses': 4,
            'total_students': 1200,
            'total_instructors': 3,
            'total_reviews': 200,
            'total_rating': 4.7
        }
    )
    
    print("Creating tags...")
    # Create tags
    tags_data = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Django', 'MongoDB', 'PostgreSQL']
    tags = []
    for tag_name in tags_data:
        tag, _ = Tag.objects.get_or_create(name=tag_name)
        tags.append(tag)
    
    print("Creating courses...")
    
    # Course 1: Complete Web Development Bootcamp
    course1, created = Course.objects.get_or_create(
        slug='complete-web-development-bootcamp-2024',
        defaults={
            'title': 'Complete Web Development Bootcamp 2024',
            'short_description': 'Master modern web development with this comprehensive bootcamp covering HTML, CSS, JavaScript, React, Node.js, and much more!',
            'description': '''
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
            ''',
            'category': web_dev,
            'course_type': 'Recorded',
            'instructor': 'John Doe',
            'language': 'English',
            'price': 49.99,
            'original_price': 89.99,
            'rating': 4.8,
            'students_count': 12450,
            'video_url': 'dQw4w9WgXcQ',
        }
    )
    
    if created:
        course1.tags.add(*tags[:5])  # Add first 5 tags
        
        # What You'll Learn
        learning_points = [
            "Build responsive websites using HTML5, CSS3, and JavaScript",
            "Master React.js for building modern web applications",
            "Understand backend development with Node.js and Express",
            "Work with databases like MongoDB and PostgreSQL",
            "Deploy applications to cloud platforms",
            "Implement authentication and authorization",
            "Create REST APIs and work with third-party APIs",
            "Follow industry best practices and coding standards"
        ]
        
        for idx, point in enumerate(learning_points):
            CourseWhatYouLearn.objects.create(
                course=course1,
                text=point,
                order=idx
            )
        
        # Requirements
        requirements = [
            "Basic computer knowledge and internet access",
            "No prior programming experience required",
            "A computer (Windows, Mac, or Linux)",
            "Willingness to learn and practice coding",
        ]
        
        for idx, req in enumerate(requirements):
            CourseRequirement.objects.create(
                course=course1,
                text=req,
                order=idx
            )
        
        # Course Includes
        includes = [
            ("video", "52 hours on-demand video"),
            ("document", "75 articles"),
            ("download", "120 downloadable resources"),
            ("infinity", "Full lifetime access"),
            ("mobile", "Access on mobile and TV"),
            ("trophy", "Certificate of completion"),
        ]
        
        for idx, (icon, text) in enumerate(includes):
            CourseIncludes.objects.create(
                course=course1,
                icon=icon,
                text=text,
                order=idx
            )
        
        # Sections and Lessons
        section1 = CourseSection.objects.create(
            course=course1,
            title="Introduction to Web Development",
            order=1
        )
        
        CourseLesson.objects.create(
            section=section1,
            title="Course Introduction",
            duration="5:30",
            is_preview=True,
            video_id="dQw4w9WgXcQ",
            order=1
        )
        
        CourseLesson.objects.create(
            section=section1,
            title="Setting Up Your Development Environment",
            duration="15:45",
            is_preview=True,
            video_id="dQw4w9WgXcQ",
            order=2
        )
        
        CourseLesson.objects.create(
            section=section1,
            title="HTML Basics",
            duration="20:15",
            is_preview=False,
            order=3
        )
        
        section2 = CourseSection.objects.create(
            course=course1,
            title="JavaScript Essentials",
            order=2
        )
        
        CourseLesson.objects.create(
            section=section2,
            title="JavaScript Introduction",
            duration="10:20",
            is_preview=True,
            video_id="dQw4w9WgXcQ",
            order=1
        )
        
        CourseLesson.objects.create(
            section=section2,
            title="Variables and Data Types",
            duration="18:30",
            is_preview=False,
            order=2
        )
        
        print(f"Created course: {course1.title}")
    
    # Course 2: React Advanced Patterns
    course2, created = Course.objects.get_or_create(
        slug='react-advanced-patterns',
        defaults={
            'title': 'React Advanced Patterns',
            'short_description': 'Deep dive into advanced React patterns and best practices for building scalable applications.',
            'description': '<h3>Master Advanced React Techniques</h3><p>This course covers advanced React patterns including hooks, context, and performance optimization.</p>',
            'category': web_dev,
            'course_type': 'Live',
            'instructor': 'Jane Smith',
            'language': 'English',
            'price': 59.99,
            'original_price': 99.99,
            'rating': 4.9,
            'students_count': 8500,
            'video_url': 'dQw4w9WgXcQ',
        }
    )
    
    if created:
        course2.tags.add(tags[3])  # React tag
        
        CourseWhatYouLearn.objects.create(
            course=course2,
            text="Master advanced React hooks",
            order=1
        )
        
        CourseIncludes.objects.create(
            course=course2,
            icon="video",
            text="30 hours on-demand video",
            order=1
        )
        
        print(f"Created course: {course2.title}")
    
    # Course 3: Python for Data Science
    course3, created = Course.objects.get_or_create(
        slug='python-for-data-science',
        defaults={
            'title': 'Python for Data Science',
            'short_description': 'Learn Python programming and data science fundamentals with hands-on projects.',
            'description': '<h3>Become a Data Scientist</h3><p>This comprehensive course covers Python basics, data analysis, and machine learning.</p>',
            'category': data_science,
            'course_type': 'Recorded',
            'instructor': 'Dr. Michael Chen',
            'language': 'English',
            'price': 45.99,
            'original_price': 79.99,
            'rating': 4.7,
            'students_count': 15000,
            'video_url': 'dQw4w9WgXcQ',
        }
    )
    
    if created:
        course3.tags.add(tags[5])  # Python tag
        
        CourseWhatYouLearn.objects.create(
            course=course3,
            text="Master Python programming fundamentals",
            order=1
        )
        
        CourseWhatYouLearn.objects.create(
            course=course3,
            text="Learn data analysis with Pandas and NumPy",
            order=2
        )
        
        CourseIncludes.objects.create(
            course=course3,
            icon="video",
            text="40 hours on-demand video",
            order=1
        )
        
        CourseIncludes.objects.create(
            course=course3,
            icon="trophy",
            text="Certificate of completion",
            order=2
        )
        
        print(f"Created course: {course3.title}")
    
    print("\nCourse population completed successfully!")
    print(f"Total courses: {Course.objects.count()}")
    print(f"Total categories: {CourseCategory.objects.count()}")
    print(f"Total tags: {Tag.objects.count()}")


if __name__ == '__main__':
    populate_courses()
