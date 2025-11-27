"""
Django management command to populate blog with fake data.
Usage: python manage.py populate_blog
"""

from django.core.management.base import BaseCommand
from django.utils import timezone
from django.utils.text import slugify
from blog.models import BlogCategory, BlogSubCategory, BlogPost
from datetime import timedelta
import random


class Command(BaseCommand):
    help = 'Populate blog with fake data for testing'

    def add_arguments(self, parser):
        parser.add_argument(
            '--categories',
            type=int,
            default=5,
            help='Number of categories to create (default: 5)'
        )
        parser.add_argument(
            '--posts',
            type=int,
            default=20,
            help='Number of blog posts to create (default: 20)'
        )
        parser.add_argument(
            '--clear',
            action='store_true',
            help='Clear existing blog data before populating'
        )

    def handle(self, *args, **options):
        if options['clear']:
            self.stdout.write(self.style.WARNING('Clearing existing blog data...'))
            BlogPost.objects.all().delete()
            BlogSubCategory.objects.all().delete()
            BlogCategory.objects.all().delete()
            self.stdout.write(self.style.SUCCESS('Cleared successfully!'))

        # Create categories
        self.stdout.write('Creating categories...')
        categories = self.create_categories(options['categories'])
        self.stdout.write(self.style.SUCCESS(f'Created {len(categories)} categories'))

        # Create subcategories
        self.stdout.write('Creating subcategories...')
        subcategories = self.create_subcategories(categories)
        self.stdout.write(self.style.SUCCESS(f'Created {len(subcategories)} subcategories'))

        # Create blog posts
        self.stdout.write('Creating blog posts...')
        posts = self.create_blog_posts(categories, subcategories, options['posts'])
        self.stdout.write(self.style.SUCCESS(f'Created {len(posts)} blog posts'))

        # Summary
        self.stdout.write(self.style.SUCCESS('\n' + '='*50))
        self.stdout.write(self.style.SUCCESS('BLOG DATA POPULATION COMPLETE'))
        self.stdout.write(self.style.SUCCESS('='*50))
        self.stdout.write(f'Total Categories: {len(categories)}')
        self.stdout.write(f'Total SubCategories: {len(subcategories)}')
        self.stdout.write(f'Total Posts: {len(posts)}')
        self.stdout.write(f'Featured Posts: {sum(1 for p in posts if p.is_featured)}')
        self.stdout.write(f'Published Posts: {sum(1 for p in posts if p.status == "published")}')
        self.stdout.write(self.style.SUCCESS('='*50))

    def create_categories(self, count):
        """Create blog categories"""
        category_data = [
            {
                'name': 'Technology',
                'description': 'Latest trends in technology, programming, and software development.',
                'meta_description': 'Explore cutting-edge technology articles, tutorials, and insights.',
            },
            {
                'name': 'Web Development',
                'description': 'Frontend, backend, and full-stack web development resources.',
                'meta_description': 'Learn web development with tutorials, best practices, and tips.',
            },
            {
                'name': 'Data Science',
                'description': 'Machine learning, AI, data analysis, and visualization.',
                'meta_description': 'Master data science with practical guides and case studies.',
            },
            {
                'name': 'Mobile Development',
                'description': 'iOS, Android, and cross-platform mobile app development.',
                'meta_description': 'Build amazing mobile apps with our comprehensive guides.',
            },
            {
                'name': 'DevOps',
                'description': 'CI/CD, cloud infrastructure, containers, and automation.',
                'meta_description': 'Learn DevOps practices, tools, and deployment strategies.',
            },
            {
                'name': 'Design',
                'description': 'UI/UX design, graphic design, and creative inspiration.',
                'meta_description': 'Discover design principles, tools, and creative workflows.',
            },
            {
                'name': 'Business',
                'description': 'Entrepreneurship, startups, marketing, and business strategy.',
                'meta_description': 'Grow your business with expert advice and strategies.',
            },
            {
                'name': 'Career',
                'description': 'Career development, job search tips, and professional growth.',
                'meta_description': 'Advance your career with practical advice and insights.',
            },
        ]

        categories = []
        for i, data in enumerate(category_data[:count]):
            category, created = BlogCategory.objects.get_or_create(
                name=data['name'],
                defaults={
                    'description': data['description'],
                    'meta_title': f"{data['name']} Blog | ExeyeZone",
                    'meta_description': data['meta_description'],
                    'display_order': i,
                    'is_active': True,
                }
            )
            categories.append(category)
            if created:
                self.stdout.write(f'  ✓ Created category: {category.name}')
            else:
                self.stdout.write(f'  → Category already exists: {category.name}')

        return categories

    def create_subcategories(self, categories):
        """Create subcategories for each category"""
        subcategory_map = {
            'Technology': ['Artificial Intelligence', 'Blockchain', 'Cybersecurity', 'Cloud Computing'],
            'Web Development': ['Frontend', 'Backend', 'Full Stack', 'APIs'],
            'Data Science': ['Machine Learning', 'Deep Learning', 'Data Visualization', 'Big Data'],
            'Mobile Development': ['iOS', 'Android', 'React Native', 'Flutter'],
            'DevOps': ['CI/CD', 'Docker', 'Kubernetes', 'Monitoring'],
            'Design': ['UI Design', 'UX Design', 'Graphic Design', 'Branding'],
            'Business': ['Marketing', 'Sales', 'Strategy', 'Finance'],
            'Career': ['Job Search', 'Interviews', 'Skills', 'Networking'],
        }

        subcategories = []
        for category in categories:
            if category.name in subcategory_map:
                for i, sub_name in enumerate(subcategory_map[category.name]):
                    subcategory, created = BlogSubCategory.objects.get_or_create(
                        category=category,
                        name=sub_name,
                        defaults={
                            'description': f'Articles about {sub_name} in {category.name}',
                            'display_order': i,
                            'is_active': True,
                        }
                    )
                    subcategories.append(subcategory)

        return subcategories

    def create_blog_posts(self, categories, subcategories, count):
        """Create blog posts with realistic content"""
        posts = []
        
        # Sample titles by category
        title_templates = {
            'Technology': [
                'The Future of {tech} in 2025',
                'How {tech} is Transforming Industries',
                'Getting Started with {tech}: A Complete Guide',
                '10 Things You Should Know About {tech}',
                'Mastering {tech}: Best Practices and Tips',
            ],
            'Web Development': [
                'Building Modern Web Apps with {tech}',
                '{tech} Tutorial: From Beginner to Advanced',
                'Best Practices for {tech} Development',
                'Optimizing {tech} Performance',
                'Complete Guide to {tech} in 2025',
            ],
            'Data Science': [
                'Introduction to {tech} for Data Scientists',
                'Practical {tech} with Python',
                'Advanced {tech} Techniques',
                'Real-World {tech} Case Studies',
                '{tech} Explained: Theory and Practice',
            ],
        }

        tech_terms = [
            'Next.js', 'React', 'Django', 'Python', 'TypeScript', 'Node.js',
            'Machine Learning', 'AI', 'Docker', 'Kubernetes', 'GraphQL',
            'Vue.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis',
            'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-learn',
        ]

        authors = [
            {'name': 'John Doe', 'bio': 'Senior Software Engineer with 10+ years of experience in web development.'},
            {'name': 'Jane Smith', 'bio': 'Full-stack developer and tech blogger passionate about modern frameworks.'},
            {'name': 'Mike Johnson', 'bio': 'Data scientist specializing in machine learning and AI applications.'},
            {'name': 'Sarah Williams', 'bio': 'UI/UX designer and frontend developer with a love for clean code.'},
            {'name': 'David Brown', 'bio': 'DevOps engineer and cloud architecture enthusiast.'},
            {'name': 'Emily Davis', 'bio': 'Mobile developer focusing on cross-platform solutions.'},
            {'name': 'Alex Martinez', 'bio': 'Tech lead and mentor helping developers grow their skills.'},
            {'name': 'Chris Anderson', 'bio': 'Backend developer specializing in scalable systems.'},
        ]

        for i in range(count):
            category = random.choice(categories)
            category_subcategories = [sc for sc in subcategories if sc.category == category]
            subcategory = random.choice(category_subcategories) if category_subcategories else None
            
            # Generate title
            if category.name in title_templates:
                template = random.choice(title_templates[category.name])
                tech = random.choice(tech_terms)
                title = template.replace('{tech}', tech)
            else:
                title = f"{random.choice(tech_terms)} Tutorial: {random.choice(['Complete Guide', 'Best Practices', 'Getting Started'])}"
            
            # Select author
            author = random.choice(authors)
            
            # Generate content
            content = self.generate_content(title, category.name)
            
            # Generate excerpt
            excerpt = f"Discover {random.choice(['essential tips', 'best practices', 'expert insights'])} about {title.lower()}. " \
                     f"Learn from real-world examples and {random.choice(['industry experts', 'practical tutorials', 'hands-on guides'])}."
            
            # Random publish date (last 60 days)
            days_ago = random.randint(0, 60)
            publish_date = timezone.now() - timedelta(days=days_ago)
            
            # Determine status
            if days_ago > 45:
                status = random.choice(['published', 'published', 'published', 'draft'])
            else:
                status = 'published'
            
            # Create post
            post = BlogPost.objects.create(
                title=title,
                excerpt=excerpt,
                content=content,
                category=category,
                subcategory=subcategory,
                author_name=author['name'],
                author_bio=author['bio'],
                meta_title=title[:60],
                meta_description=excerpt[:160],
                meta_keywords=f"{category.name}, {tech_terms[i % len(tech_terms)]}, tutorial, guide, {timezone.now().year}",
                status=status,
                publish_date=publish_date,
                is_featured=random.random() < 0.2,  # 20% chance of being featured
                views_count=random.randint(50, 5000),
                allow_indexing=True,
                # Images will use no_image.jpg through model's display_image property
                featured_image_alt=f"Featured image for {title}",
            )
            
            posts.append(post)
            
            status_icon = '⭐' if post.is_featured else '✓'
            self.stdout.write(f'  {status_icon} Created post: {post.title[:50]}... ({post.status})')

        return posts

    def generate_content(self, title, category):
        """Generate realistic blog post content"""
        intro_paragraphs = [
            f"<p>In today's rapidly evolving tech landscape, understanding {title.lower()} has become crucial for developers and businesses alike. This comprehensive guide will walk you through everything you need to know.</p>",
            f"<p>Welcome to this in-depth exploration of {title.lower()}. Whether you're a beginner or an experienced professional, this article will provide valuable insights and practical knowledge.</p>",
            f"<p>As technology continues to advance, {title.lower()} has emerged as a key topic in the {category} space. Let's dive into what makes it so important and how you can leverage it effectively.</p>",
        ]

        sections = [
            f"<h2>What You Need to Know</h2><p>Before diving deep, let's establish a solid foundation. Understanding the core concepts is essential for success in this area. We'll cover the fundamentals and build up to more advanced topics progressively.</p>",
            
            f"<h2>Key Concepts and Principles</h2><p>There are several fundamental principles that govern this topic. By mastering these concepts, you'll be well-equipped to tackle real-world challenges and implement effective solutions.</p><ul><li>Core concept number one and its applications</li><li>Advanced techniques for optimization</li><li>Best practices used by industry leaders</li><li>Common pitfalls to avoid</li></ul>",
            
            f"<h2>Practical Implementation</h2><p>Theory is important, but practical application is where real learning happens. Let's look at how to implement these concepts in real-world scenarios.</p><pre><code>// Example code snippet\nfunction example() {{\n    return 'This is a sample implementation';\n}}</code></pre>",
            
            f"<h2>Best Practices</h2><p>Drawing from industry experience, here are the recommended approaches that will help you achieve optimal results:</p><ol><li>Start with a solid foundation and clear objectives</li><li>Follow established patterns and conventions</li><li>Test thoroughly and iterate based on feedback</li><li>Document your work for future reference</li></ol>",
            
            f"<h2>Common Challenges and Solutions</h2><p>Every developer faces obstacles. Here's how to overcome the most common challenges you'll encounter along the way. Learning from others' experiences can save you valuable time and effort.</p>",
            
            f"<h2>Advanced Techniques</h2><p>Once you've mastered the basics, you can explore these advanced techniques to take your skills to the next level. These methods are used by expert practitioners to achieve exceptional results.</p>",
            
            f"<h2>Real-World Applications</h2><p>Let's examine how these concepts are being applied in production environments. Case studies from successful implementations provide valuable lessons and inspiration.</p>",
            
            f"<h2>Conclusion</h2><p>We've covered a lot of ground in this guide. By understanding these principles and applying them consistently, you'll be well on your way to mastery. Remember that continuous learning and practice are key to success.</p><p>Stay tuned for more articles on {category} topics, and don't hesitate to explore our other resources to continue your learning journey.</p>",
        ]

        # Randomly select 5-8 sections
        num_sections = random.randint(5, 8)
        selected_sections = random.sample(sections, num_sections)
        
        # Build complete content
        content = random.choice(intro_paragraphs)
        content += ''.join(selected_sections)
        
        return content
